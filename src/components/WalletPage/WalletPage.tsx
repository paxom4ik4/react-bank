import React from 'react'
import './WalletPage.css'
import '../UserPage/UserPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faWallet,
    faMoneyCheck,
    faUserCircle,
    faTimes
} from '@fortawesome/free-solid-svg-icons';

const WalletPage = ({user, userPageHandler}:any) => {
    const walletIcon = <FontAwesomeIcon icon={faWallet}/>
    const moneyCheck = <FontAwesomeIcon icon={faMoneyCheck}/>
    const usersExcangeIcon = <FontAwesomeIcon icon={faUserCircle}/>
    const times = <FontAwesomeIcon icon={faTimes}/>
    return ( 
        <div className="wallet-page">
            <div className="wallet-page-header">Wallet</div>
            <div className="wallet-id">Your current accout number: {user.accountNumber}</div>
            <div className="wallet-account">Amount: {user.currentAccount}$</div>
            <div className="wallet-actions">
                <div className="wallet-action">
                    <div className="feature-icon">{walletIcon}</div>
                    <div className="feature-name">Withdraw</div>
                </div>
                <div className="wallet-action">
                    <div className="feature-icon">{moneyCheck}</div>
                    <div className="feature-name">Top up</div>
                </div>
                <div className="wallet-action">
                    <div className="feature-icon">{usersExcangeIcon}</div>
                    <div className="feature-name">Transfer</div>
                </div>
            </div>
            <div className="back-item" onClick={() => userPageHandler()}>{times}</div>
        </div>
    )
}

export default WalletPage;