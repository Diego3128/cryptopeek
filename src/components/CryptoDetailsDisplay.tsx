import { useCryptoStore } from "../stores/crypto-store";

export const CryptoDetailsDisplay = () => {
  const cryptoResult = useCryptoStore((state) => state.cryptoResult);

  return (
    <div className="result-wrapper">
      {cryptoResult && (
        <>
          <h2 className="result-title">Cryptocurrency Details</h2>
          <div className="result-card">
            <div className="result-img-wrapper">
              <img
                src={`https://www.cryptocompare.com${cryptoResult.IMAGEURL}`}
                alt="Cryptocurrency icon"
                draggable={false}
                className="result-img"
              />
            </div>

            <div className="detail-field">
              <p>Current Price:</p>
              <p className="detail">{cryptoResult.PRICE}</p>
            </div>

            <div className="detail-field">
              <p>Last Updated At:</p>
              <p className="detail">{cryptoResult.LASTUPDATE}</p>
            </div>

            <div className="detail-field">
              <p>24-Hour Change:</p>
              <p className="detail">{cryptoResult.CHANGEPCT24HOUR}%</p>
            </div>

            <div className="detail-field">
              <p>Highest Price Today:</p>
              <p className="detail">{cryptoResult.HIGHDAY}</p>
            </div>

            <div className="detail-field">
              <p>Lowest Price Today:</p>
              <p className="detail">{cryptoResult.LOWDAY}</p>
            </div>

          </div>
        </>
      )}
    </div>
  );
};
