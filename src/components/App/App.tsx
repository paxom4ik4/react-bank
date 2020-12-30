import React, {useState} from 'react';
import Header from '../Header';
import MainContent from '../MainContent';
import WalletPage from '../WalletPage/index';

import './App.css';

const App = (): JSX.Element => {
    const [isLogged, setLogged] = useState<boolean>(true);
    const [section, setSection] = useState<string>('userPage');
    const [currentUser, setCurrentUser] = useState<object>({
            id: 0,
            username: 'admin', 
            email: 'admin@admin.com',
            password: 'admin',
            accountNumber: '4343720042819218',
            currentAccount: 25000,
        },
    );

    const loggedHandler = () => {
        setLogged(!isLogged);
        
    }
    const userHandler = (user: object) => {
        setCurrentUser(user);
    }

    const registerHandler = (user: object) => {
        setCurrentUser(user);
    }

    const sectionHandler = (section: any) => {
        setSection(section);
    }

    const returnUserPage = () => {
        setSection('userPage');
    }

    let content;
    if(section === 'userPage') {
        content = 
        <MainContent 
            setLogged={() => loggedHandler()} 
            setCurrentUser={(e:any) => userHandler(e)} 
            isLogged={isLogged} currentUser={currentUser} 
            registerCurrentUser={(e:any) => registerHandler(e)}
            setSection = {(e: any) => sectionHandler(e)}
        />
    }
    else if (section === 'wallet') {
        content = <WalletPage user={currentUser} userPageHandler={() => returnUserPage()}/>
    }
    return (
        <div className="app">
            <Header />
            {content}
        </div>
    );
}

export default App;