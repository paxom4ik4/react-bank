import React from 'react';
import Login from '../Login/'
import Currency from '../Currency/'

import './MainContent.css';
import UserPage from '../UserPage';

interface IContentProps {
    setLogged: ()=> void,
    setCurrentUser: (e: any) => void,
    isLogged: boolean,
    currentUser: string,
}

const MainContent = ({setLogged, setCurrentUser, isLogged, currentUser}: IContentProps)=> {
    const mainContentClass = isLogged ? "main-content-logged":"main-content";
    return (
        <div className={mainContentClass}>
            {isLogged?<UserPage currentUser={currentUser} setLogged={setLogged}/>:<Login setLogged={setLogged} setCurrentUser={setCurrentUser}/>}
            <Currency isLogged={isLogged}/>
        </div>
    )
}

export default MainContent;