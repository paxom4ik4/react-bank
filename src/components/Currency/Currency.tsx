import React, { useState, useEffect } from 'react';
import CryptoApi from '../../services/CryptoService/CryptoApi';
import './Currency.css';

const Currency = (): JSX.Element => {
    const cryptoApi = new CryptoApi();
    const [isLoading, setLoading]: any = useState<boolean>(true)
    const [items, setItems] = useState<[]>([]);

    useEffect(() => {
        const data = cryptoApi.getData(value);
        data.then(res => res.json().then(res => setItems(res)));
        setLoading(!isLoading);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [value, setValue] = useState<string>('USD');
    const valueHandler = (value: string) => {
        setValue(value);
        setLoading(!isLoading);
        const data = cryptoApi.getData(value);
        data.then(res => res.json().then(res => setItems(res)));
        setLoading(!isLoading);
    }

    const usdActive = 'currency-usd active';
    const usdUnActive = 'currency-usd';
    const eurActive = 'currency-eur active';
    const eurUnActive = 'currency-eur';

    const currencyItems = (
        items.map((item: { id: React.ReactNode; price: React.ReactNode }, index: number) => {
            return (
                <div className="currency-item" key={index}>
                    <div className="currency-name">{item.id}</div>
                    <div className="currency-price">{item.price}</div>
                </div>
            )
        })
    )

    return (
        <div className="currency">
            <div className="currency-header">
                <div className="currency-heading">cryptocurrency rates</div>
                <div className="currency-value">
                    <div className={value === 'USD' ? usdActive : usdUnActive} onClick={() => valueHandler('USD')}>USD</div>
                    <div className={value === 'EUR' ? eurActive : eurUnActive} onClick={() => valueHandler('EUR')}>EUR</div>
                </div>
            </div>
            <div className="currency-items-container">
                {currencyItems}
            </div>
            <div className="currency-pagination"></div>
        </div>
    )
};

export default Currency;