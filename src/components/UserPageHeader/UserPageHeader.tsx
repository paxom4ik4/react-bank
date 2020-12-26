import React from 'react';
import './UserPageHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

interface IUserPageHeaderProps {
    currentUser: string,
    setLogged: () => void,
}

const UserPageHeader = ({currentUser, setLogged}:IUserPageHeaderProps) => {
    currentUser = `${currentUser[0].toUpperCase()}${currentUser.substring(1)}`;
    const userIcon = <FontAwesomeIcon icon={faUser}/>
    return (
        <div className="user-page-header">
            <div className="user-info">
                <div className="user-icon">{userIcon}</div>
                <div className="current-user-name">{currentUser}</div>
            </div>
            <div className="log-out" onClick={() => setLogged()}>Log out</div>
        </div>
    );
}

export default UserPageHeader;