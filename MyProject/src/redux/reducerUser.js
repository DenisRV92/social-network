import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FATCHING = 'TOGGLE_IS_FATCHING';
const TOGGLE_FOLLOW_IN_PROGRESS = 'TOGGLE_FOLLOW_IN_PROGRESS';
const ADD_FRIENDS = 'ADD_FRIENDS'
const REMOVE_FRIENDS = 'REMOVE_FRIENDS'
let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followInProgerss: [],
    friendsList: [
        {id: 1, name: 'Dima.k', img: "https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg"},
        {
            id: 2,
            name: 'Lena ',
            img: "https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg"
        },
        {
            id: 3,
            name: 'Masha ',
            img: "https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg"
        },
        {
            id: 4,
            name: 'Kolya',
            img: "https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg"
        },
        {
            id: 5,
            name: 'Den S',
            img: "https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg"
        },
        {
            id: 6,
            name: 'Vlad N',
            img: "https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg"
        },
        {
            id: 7,
            name: 'Oleg K',
            img: "https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg"
        },
        {
            id: 8,
            name: 'Igor P',
            img: "https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg"
        },
        {
            id: 9,
            name: 'Slavik k',
            img: "https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg"
        }
    ]

}

const reducerUser = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS: {
            return {...state, users: [...action.users]}

        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                users: [...state.users, ...action.users],
                currentPage: action.page

            }

        }
        case TOGGLE_IS_FATCHING: {
            return {...state, isFetching: action.isFetching}

        }
        case TOGGLE_FOLLOW_IN_PROGRESS: {
            return {
                ...state,
                followInProgerss: action.isFetching
                    ? [...state.followInProgerss, action.userId]
                    : state.followInProgerss.filter(id => id != action.userId)

            }
        }
        case ADD_FRIENDS:
            return {
                ...state,
                friendsList: [...state.friendsList, {
                    id: action.users.userId,
                    name: action.users.fullName,
                    img: action.users.photos.large
                }],
            }

        case REMOVE_FRIENDS:
            return {
                ...state,
                friendsList: [...state.friendsList.filter(v => v.id !== action.userId)]
            }

        default:
            return state;
    }

}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (users, page) => ({type: SET_CURRENT_PAGE, users, page})
export const toggleIsFatching = (isFetching) => ({type: TOGGLE_IS_FATCHING, isFetching})
export const toggleFollowInProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOW_IN_PROGRESS, isFetching, userId})
export const addsFriends = (users) => ({type: ADD_FRIENDS, users})
export const removeFriends = (userId) => ({type: REMOVE_FRIENDS, userId})
export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFatching(true));
        usersAPI.getUsersAPI(currentPage, pageSize).then(data => {
            dispatch(toggleIsFatching(false));
            dispatch(setUsers(data.items));
        })
    }
}
export const nextPageThunkCreator = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFatching(true));
        let response = await usersAPI.getUsersAPI(currentPage + 1, pageSize);
        dispatch(toggleIsFatching(false));
        dispatch(setCurrentPage(response.items, currentPage + 1));
    }
}

export const followThunkCreator = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFollowInProgress(true, userId));
        let response = await usersAPI.getFollowUsersAPI(userId);
        if (response.resultCode == 0) {
            dispatch(follow(userId));
        }

        dispatch(toggleFollowInProgress(false, userId));
    }
}

export const unfollowThunkCreator = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFollowInProgress(true, userId));
        let response = await usersAPI.getUnFollowUsersAPI(userId);
        if (response.resultCode == 0) {
            dispatch(unfollow(userId))
        }
        dispatch(toggleFollowInProgress(false, userId));
    }
}
export const getUserProfileThunkCreator2 = (userId) => {
    return async (dispatch) => {
        let response = await usersAPI.getProfileUsersAPI(userId)
        dispatch(addsFriends(response.data))
        debugger
    }

}

export default reducerUser;