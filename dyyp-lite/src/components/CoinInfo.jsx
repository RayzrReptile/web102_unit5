import { useState, useEffect } from "react";

const CoinInfo = ({image, name, symbol}) => {
    // Variables
    const [price, setPrice] = useState(null)

    useEffect(() => {
        const getCoinPrice = () => {
            let query = `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD&api_key=${import.meta.env.VITE_APP_ACCESS_KEY}`;
            fetch(query)
            .then(response => response.json())
            .then(data => setPrice(data))
            .catch(console.error)
        }

        getCoinPrice();
    }, [symbol]);

    return <div className="coin-info-container">
        {price ? (
            <li className="coin-info-item" key={symbol}>
                <div className="image-wrapper">
                    <img 
                    src={`https://www.cryptocompare.com${image}`} 
                    alt={name} 
                    className="coin-image" />
                </div>
                <div className="info-wrapper">
                    <h2 className="coin-name">{name}</h2>
                    <h4 className="coin-symbol">{symbol}</h4>
                    <h2 className="coin-price">${price.USD} USD</h2>
                </div>
            </li>
        ) : null}
    </div>
};

export default CoinInfo;