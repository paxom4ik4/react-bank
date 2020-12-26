import React, {useState} from 'react';
import Header from '../Header';
import MainContent from '../MainContent';
import './App.css';

const App = (): JSX.Element => {
    const [isLogged, setLogged] = useState<boolean>(true);
    const [currentUser, setCurrentUser] = useState<string>('admin');

    const loggedHandler = () => {
        setLogged(!isLogged);
        
    }
    const userHandler = (user:string) => {
        setCurrentUser(user);
    }
    console.log(isLogged);
    return (
        <div className="app">
            <Header />
            <MainContent setLogged={() => loggedHandler()} setCurrentUser={(e:any) => userHandler(e)} isLogged={isLogged} currentUser={currentUser}/>
        </div>
    );
}

export default App;