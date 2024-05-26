import React from 'react';
import './Message.css';

function Message({ msgObj }) {
    const date = new Date(msgObj.timestamp);
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    return (
        <div className='message-item'>
            <div className='msg'>{msgObj?.text}</div>
            <div className='time'>
                <span>{date.toLocaleTimeString('en-US', options)}</span>
            </div>
        </div>
    )
}

export default Message;
