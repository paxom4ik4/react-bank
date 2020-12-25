import React from 'react';
import Login from '../Login/'
import Currency from '../Currency/'

import './MainContent.css';
import UserPage from '../UserPage';

const MainContent = ({setLogged, isLogged}: any)=> {

    return (
        <div className="main-content">
            {isLogged?<UserPage />:<Login setLogged={setLogged}/>}
            <Currency isLogged={isLogged}/>
        </div>
    )
}

export default MainContent;