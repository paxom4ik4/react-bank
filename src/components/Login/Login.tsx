import React, {useState} from 'react';
import users from '../../dataBase/users';
import './Login.css';
import features from './bankFeatures';

const Login = ({setLogged}:any): JSX.Element => {
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

    // Аналогично сделай для Registration (Controlled components)


    const onEnterHandler = (e: any) => {
        e.preventDefault();
        for(let key of users) {
            const values = Object.values(key);
            if(values[0] === loginUsername.trim() && values[1] === loginPassword) {
                setLogged()
            }
            else {
                alert("Неверный пароль или логин");
            }
        };
    }

    const signIn = (
        <div className="sign-in-form">
            <form>
                <div className="input-login">
                    <div className="input-title">Enter e-mail or login</div>
                    <input type="text" className="form-input" value={loginUsername} onChange={(e) => loginUsernameHandler(e)} />
                </div>
                <div className="input-pass">
                    <div className="input-title">Enter your password</div>
                    <input type="password" className="form-input" value={loginPassword} onChange={(e) => loginPasswordHandler(e)}/>
                </div>
                <div className="input-enter">
                    <input type="submit" className="input-title" value='Enter' onClick={(e) => onEnterHandler(e)}></input>
                </div>
            </form>
        </div>
    )
    
    const signUp = (
        <div>

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