import { useState, useEffect } from 'react'
import './App.css'

function App() {
  let [cryptoList, setCryptoList] = useState(null);
  useEffect(() => {
    const fetchAllCoinData = () => {
      fetch(`https://min-api.cryptocompare.com/data/all/coinlist?api_key=${import.meta.env.VITE_APP_ACCESS_KEY}`)
      .then(response => response.json())
      .then(data => setCryptoList(data))
      .catch(err => console.log("There was an error: " + toString(err)))
    }

    fetchAllCoinData();
  }, []);

  return (
    <>
      <div className="App">
        <section className="crypto-list-section">
          <div className="crypto-list-container">
            <h1 className="crypto-list-title">My Crypto</h1>
            <ul className="crypto-list">
              {cryptoList && Object.entries(cryptoList.Data).map(([coin]) => 
                cryptoList.Data[coin].PlatformType=="blockchain" ? (
                  <li className="crypto-item"
                  key={cryptoList.Data[coin].FullName}>{cryptoList.Data[coin].FullName}</li>
                ) : null
              )}
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
