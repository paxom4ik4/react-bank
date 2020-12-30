import React, {useState} from 'react';
import Users from '../../dataBase/users';
import './Login.css';
import features from './bankFeatures';
import { v4 as uuidv4 } from 'uuid';

interface ILoginProps {
    setLogged: () => void,
    setCurrentUser: (e: any) => void;
    setNewUser: (e :any) => void;
}

const Login = ({setLogged, setCurrentUser}: ILoginProps): JSX.Element => {
    const [isRegisterBtns, changeRegisterBtns] = useState<boolean>(false);
    const sliderRightClass: string = 'sign-slider sign-slider-right';
    const sliderLeftClass: string = 'sign-slider';
    // Controlled inputs
    // Login (Email | login)
    const [loginUsername, setLoginUsername] = useState<string>('');
    const loginUsernameHandler = (e: any) => {
        const value = e.target.value;
        setLoginUsername(value);
    }
    // Login (Password)
    const [loginPassword, setLoginPassword] = useState<string>('');
    const loginPasswordHandler = (e: any) => {
        const value = e.target.value;
        setLoginPassword(value);
    }

    // *        Registration        *//

    const [registerEmail, setRegisterEmail] = useState<string>('');
    const registerEmailHandler = (e: any) => {
        const value = e.target.value;
        setRegisterEmail(value);
    }

    const [registerUsername, setRegisterUsername] = useState<string>('');
    const registerUsernameHandler = (e: any) => {
        const value = e.target.value;
        setRegisterUsername(value);
    }

    const [registerPassword, setRegisterPassword] = useState<string>('');
    const registerPasswordHandler = (e: any) => {
        const value = e.target.value;
        setRegisterPassword(value);
    }

    const [registerConfirm, setRegisterConfirm] = useState<string>('');
    const registerConfirmHandler = (e: any) => {
        const value = e.target.value;
        setRegisterConfirm(value);
    }
    // Аналогично сделай для Registration (Controlled components)

    const onRegisterHandler = (e: any) => {
        e.preventDefault();
        if(registerUsername && registerEmail && registerPassword && registerPassword === registerConfirm) {
            let users = new Users().users;
            users.push({
                id: uuidv4(),
                username: registerUsername, 
                email: registerEmail,
                password: registerPassword,
                accountNumber: '4114321252422412',
                currentAccount: 10000
            })
            setCurrentUser(e);
            setLogged();        
        }
    }

    const onEnterHandler = (e: any) => {
        e.preventDefault();
        let users = new Users().users;
        console.log(users)
        users.forEach(user => {
            // eslint-disable-next-line no-mixed-operators
            if(user.username === loginUsername.trim() || user.email === loginUsername.trim() && user.password === loginPassword) {
                setLogged();
                setCurrentUser(user);
                return;
            }
            else {
                console.log('Finding...');
            }
        });
    }

    const signIn = (
        <div className="sign-in-form">
            <form>
                <div className="input-login">
                    <div className="input-title">Enter e-mail or login</div>
                    <input placeholder="username" type="text" className="form-input" value={loginUsername} onChange={(e) => loginUsernameHandler(e)} />
                </div>
                <div className="input-pass">
                    <div className="input-title">Enter your password</div>
                    <input placeholder="password" type="password" className="form-input" value={loginPassword} onChange={(e) => loginPasswordHandler(e)}/>
                </div>
                <div className="input-enter">
                    <input type="submit" className="enter-btn input-title" value='Enter' onClick={(e) => onEnterHandler(e)}></input>
                </div>
            </form>
        </div>
    )
    
    const signUp = (
        <div className="sign-in-form">
            <form>
                <div className="input-login">
                    <div className="input-title">Enter your e-mail</div>
                    <input placeholder="e-mail" type="email" className="form-input" value={registerEmail} onChange={(e) => registerEmailHandler(e)} />
                </div>
                <div className="input-nickname">
                    <div className="input-title">Enter your login</div>
                    <input placeholder="username" type="text" className="form-input" value={registerUsername} onChange={(e) => registerUsernameHandler(e)} />
                </div>
                <div className="input-pass">
                    <div className="input-title">Enter your password</div>
                    <input placeholder="password" type="password" className="form-input" value={registerPassword} onChange={(e) => registerPasswordHandler(e)}/>
                </div>
                <div className="input-confirm-pass">
                    <div className="input-title">Confirm your password</div>
                    <input placeholder="confirm password" type="password" className="form-input" value={registerConfirm} onChange={(e) => registerConfirmHandler(e)}/>
                </div>
                <div className="input-enter">
                    <input type="submit" className="enter-btn input-title" value='Sing up' onClick={(e) => onRegisterHandler(e)}></input>
                </div>
            </form>
        </div>
    )

    const bankFeatures = (
        features.map((item, index) => {
            return (
                <li className="bank-feature" key={index}>{item}</li>
            )
        })
    )

    const changeRegisterBtnsHandler = (e:any) => {
        const target = e.target;
        const targetClass = target.getAttribute('class');
        if(isRegisterBtns && targetClass === 'sign-in') {
            changeRegisterBtns(!isRegisterBtns);
        }
        else if(!isRegisterBtns && targetClass === 'sign-up') {
            changeRegisterBtns(!isRegisterBtns);
        }
    }
    return (
        <div className="login">
            <div className="login-heading">Welcome to React-Bank.</div>
            <div className="login-register-content">
                <div className="login-content">
                    <div className="buttons">
                        <div className="sign-in" onClick={(e) => changeRegisterBtnsHandler(e)}>Sign in</div>
                        <div className="sign-up" onClick={(e) => changeRegisterBtnsHandler(e)}>Sign up</div>
                        <div className={isRegisterBtns?sliderRightClass:sliderLeftClass}></div>
                    </div>
                    {isRegisterBtns?signUp:signIn}
                </div>
                <div className="about-bank">
                    <div>
                        <div className="about-header">Features: </div>
                        <ul className="bank-features">
                            {bankFeatures}
                        </ul>
                    </div>
                    <div className="about-bank-footer">
                        <div className="current-bank-version">version: 1.1.4</div>
                        <div className="version-history">View version history</div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Login;