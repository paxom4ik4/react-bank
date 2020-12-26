import React from 'react';
import UserPageHeader from '../UserPageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faWallet,
    faMoneyCheck,
    faUserCircle,
    faFileInvoiceDollar,
    faCoins,
    faDollarSign,
    faExchangeAlt,
    faSlidersH 
} from '@fortawesome/free-solid-svg-icons';
import News from '../News';
import './UserPage.css';


interface IUserPageProps {
    currentUser: string,
    setLogged: () => void,
}

const UserPage = ({currentUser, setLogged}:IUserPageProps) => {
    const walletIcon = <FontAwesomeIcon icon={faWallet}/>
    const moneyCheck = <FontAwesomeIcon icon={faMoneyCheck}/>
    const usersExcangeIcon = <FontAwesomeIcon icon={faUserCircle}/>
    const dollarIcon = <FontAwesomeIcon icon={faFileInvoiceDollar}/>
    const coinsIcon = <FontAwesomeIcon icon={faCoins}/>
    const converterIcon = <FontAwesomeIcon icon={faDollarSign}/>
    const exchangeIcon = <FontAwesomeIcon icon={faExchangeAlt}/>
    const settingsIcon = <FontAwesomeIcon icon={faSlidersH}/>


    return(
        <div className="user-page">
            <UserPageHeader currentUser={currentUser} setLogged={setLogged}/>
            <div className="user-features">
                <div className="features-row">
                    <div className="user-feature">
                        <div className="feature-icon">{walletIcon}</div>
                        <div className="feature-name">My Wallet</div>
                    </div>
                    <div className="user-feature">
                        <div className="feature-icon">{moneyCheck}</div>
                        <div className="feature-name">Loan</div>
                    </div>
                    <div className="user-feature">
                        <div className="feature-icon">{usersExcangeIcon}</div>
                        <div className="feature-name">Exchange</div>
                    </div>
                    <div className="user-feature">
                        <div className="feature-icon">{dollarIcon}</div>
                        <div className="feature-name">Financial Statement</div>
                    </div>
                    <div className="user-feature">
                        <div className="feature-icon">{coinsIcon}</div>
                        <div className="feature-name">CryptoCoins</div>
                    </div>
                    <div className="user-feature">
                        <div className="feature-icon">{exchangeIcon}</div>
                        <div className="feature-name">Transfer</div>
                    </div>
                    <div className="user-feature">
                        <div className="feature-icon">{settingsIcon}</div>
                        <div className="feature-name">Settings</div>
                    </div>
                    <div className="user-feature">
                        <div className="feature-icon">{converterIcon}</div>
                        <div className="feature-name">Converter</div>
                    </div>
                </div>
            </div>
            <News />
        </div>
    )
}

export default UserPage;