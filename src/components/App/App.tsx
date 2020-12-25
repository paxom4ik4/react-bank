import React, {useState} from 'react';
import Header from '../Header';
import MainContent from '../MainContent';
import './App.css';

const App = (): JSX.Element => {
    const [isLogged, setLogged] = useState<boolean>(false);

    const loggedHandler = () => {
        setLogged(!isLogged);
        
    }
    console.log(isLogged);
    return (
        <div className="app">
            <Header />
            <MainContent setLogged={() => loggedHandler()}/>
        </div>
    );
}

export default App;