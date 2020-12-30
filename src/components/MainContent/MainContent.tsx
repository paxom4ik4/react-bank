import React from 'react';
import Login from '../Login/'
import Currency from '../Currency/'

import './MainContent.css';
import UserPage from '../UserPage';

interface IContentProps {
    setLogged: ()=> void,
    setCurrentUser: (e: any) => void,
    registerCurrentUser: (e: any) => void,
    isLogged: boolean,
    currentUser: object,
    setSection: (e:any) => void,
}

const MainContent = ({setLogged, setCurrentUser, registerCurrentUser, isLogged, currentUser, setSection}: IContentProps)=> {
    const mainContentClass = isLogged ? "main-content-logged":"main-content";
    return (
        <div className={mainContentClass}>
            {isLogged?<UserPage currentUser={currentUser} setLogged={setLogged} setSection = {(e: any) => setSection(e)}/>:<Login setLogged={setLogged} setCurrentUser={setCurrentUser} setNewUser={registerCurrentUser} />}
            <Currency isLogged={isLogged}/>
        </div>
    )
}

export default MainContent;