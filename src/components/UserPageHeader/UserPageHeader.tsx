import React from 'react';
import './UserPageHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

interface IUserPageHeaderProps {
    currentUser: any,
    setLogged: () => void,
}

const UserPageHeader = ({currentUser, setLogged}:IUserPageHeaderProps) => {
    const userIcon = <FontAwesomeIcon icon={faUser}/>
    return (
        <div className="user-page-header">
            <div className="user-info">
                <div className="user-icon">{userIcon}</div>
                <div className="current-user-name">{currentUser.username}</div>
            </div>
            <div className="log-out" onClick={() => setLogged()}>Log out</div>
        </div>
    );
}

export default UserPageHeader;