import React, { useContext } from 'react'
import './UserCard.css'
import userImg from '../../assets/user.png'
import deleteIcon from '../../assets/delete.png'
import { DataContext } from '../../App'

function UserCard({ user, idx }) {
    const { setSelectedUserIdx, dispatch } = useContext(DataContext);

    function handleClick() {
        setSelectedUserIdx(idx)
    }

    function handleDelete() {
        dispatch({
            type: 'delete',
            idx: idx 
        });
        setSelectedUserIdx(-1);
    }

    return (
        <div className='user-card-container' data-idx={idx}>
            <div className='left' onClick={handleClick}>
                <div className='user-avatar'>
                    <img src={userImg} />
                </div>
                <div className='user-name'>{user?.name}</div>
            </div>
            <div className='right' onClick={handleDelete}>
                <img src={deleteIcon}/>
            </div>
        </div>
    )
}

export default UserCard;
