import state, {subscribe} from "./redux/store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {addPost, updateNewPostText} from "./redux/state";
import {BrowserRouter, HashRouter} from "react-router-dom";
import store from "./redux/redaxStore";
// import StoreContext from "./StoreContext";
import {Provider} from "react-redux";
// import {Provider} from "./StoreContext";


// export let rerenderEntireThree = (state) => {

    ReactDOM.render(
        <React.StrictMode>

            <HashRouter>
                <Provider store={store}>
                <App />
                </Provider>
            </HashRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
// }

//
// rerenderEntireThree(store.getState())
//
//
// store.subscribe(()=>{
//     let state=store.getState();
//     rerenderEntireThree(state);
// });
