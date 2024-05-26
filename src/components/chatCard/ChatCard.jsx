import React, { useContext, useState } from 'react'
import './ChatCard.css'
import { DataContext } from '../../App';
import Message from '../message/Message';
import userImg from '../../assets/user.png'

function ChatCard() {
    const [newMessage, setNewMessage] = useState('');
    const { data, selectedUserIdx, dispatch } = useContext(DataContext);
    const messageArr = data[selectedUserIdx]?.messages;

    function handleInputChange(e) {
        setNewMessage(e.target.value);
    }

    function handleEnter(e) {
        if(e.keyCode === 13) {
            handleClick();
        }
    }

    function handleClick() {
        if(!newMessage) return;
        dispatch({
            type: 'add-msg',
            value: newMessage,
            idx: selectedUserIdx
        })
        setNewMessage('')
    }

    return (
        <div className='chat-card-container'>
            <div className='message-container'>
                <div className='user-header'>
                    <div className='user-avatar'>
                        <img src={userImg} />
                    </div>
                <div className='user-name'>{data[selectedUserIdx]?.name}</div>
                </div>
                {
                    messageArr.length && messageArr.map((message, idx) => (
                        <Message key={Math.random() + ''} msgObj={message}/>
                    ))
                }
            </div>
            <div className='input-container'>
                <input type='text' onChange={handleInputChange} onKeyUp={handleEnter} value={newMessage} />
                <button onClick={handleClick}>Send</button>
            </div>
        </div>
    )
}

export default ChatCard;
