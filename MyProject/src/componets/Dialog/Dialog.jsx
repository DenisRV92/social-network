import React from 'react';
import s from "../Dialog/Dialog.module.css";
import DialogfItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm, reset} from "redux-form";


const Dialog =(props)=>  {

        let dialogsElements = props.dialogsData.map(el => <DialogfItem name={el.name} key={el.id} id={el.id}/>)
        let messagesElements = props.messages.map(el => <Message message={el.message} key={el.id} img={el.img}
                                                                      name={el.name} position={el.position}/>)

        let addNewMessage = (value) => {
            props.addMessage(value.newMyMessage)

        }
        return (
            <div className={s.dialog}>
                <div className={s.dialog__name}>
                    {dialogsElements}
                </div>
                <div className={s.dialog__message}>
                    {messagesElements}
                    <AddMessageRedaxForm onSubmit={addNewMessage}/>
                </div>
            </div>
        )



}

const afterSubmit = (result, dispatch) =>
    dispatch(reset('dialogAddMessageForm'));
const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={s.dialog__btn}>
            <Field component={'textarea'} name={'newMyMessage'}/>
            <p>
                <button>send</button>
            </p>
        </form>
    )
}

const AddMessageRedaxForm = reduxForm({form: 'dialogAddMessageForm', onSubmitSuccess: afterSubmit})(AddMessageForm)
export default Dialog;