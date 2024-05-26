import React, { useContext } from 'react';
import './Home.css';
import UserCard from '../userCard/UserCard';
import DefaultChatCard from '../chatCard/DefaultChatCard';
import ChatCard from '../chatCard/ChatCard';
import { DataContext } from '../../App';

function Home() {
    const { data, selectedUserIdx } = useContext(DataContext)
    
    return (
        <div className='home-container'>
            <div className='left-section'>
                <div className='left-header'>
                    <h2>Chats</h2>
                </div>
                {
                    data.map((user, id) => <UserCard key={Math.random() + ''} user={user} idx={id} />)
                }
            </div>
            <div className='right-section'>
                {
                    selectedUserIdx === -1 ? <DefaultChatCard/> : <ChatCard />
                }
            </div>
        </div>
    )
}

export default Home;