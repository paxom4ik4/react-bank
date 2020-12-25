import React from 'react';
import Login from '../Login/'
import Currency from '../Currency/'

import './MainContent.css';

const MainContent = ({setLogged}: any)=> {
    return (
        <div className="main-content">
            <Login setLogged={setLogged}/>
            <Currency />
        </div>
    )
}

export default MainContent;