import React from 'react';
import UserPageHeader from '../UserPageHeader';
import './UserPage.css';

interface IUserPageProps {
    currentUser: string,
    setLogged: () => void,
}

const UserPage = ({currentUser, setLogged}:IUserPageProps) => {
    return(
        <div className="user-page">
            <UserPageHeader currentUser={currentUser} setLogged={setLogged}/>
        </div>
    )
}

export default UserPage;