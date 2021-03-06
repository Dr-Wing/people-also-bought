import React from 'react';

const Card = ({ onMouseEnterOrLeave, index, name, price, percentChange, theme }) => {
  let formattedPercentChange = `${(percentChange * 100).toFixed(2)}%`;
  if (percentChange > 0) {
    formattedPercentChange = '+' + formattedPercentChange;
  }

  // TODO: this should come from the other microservice when it's ready ...
  const random = Math.random();
  let rating;
  if (random <= 0.3) {
    rating = 'Buy';
  } else if (random <= 0.6) {
    rating = 'Hold';
  } else {
    rating = 'Sell';
  }

  // random number between 50 and 100
  const ratingPercent = parseInt(((Math.random() * 50) + 50).toFixed());

  const priceTag = <svg width="20" height="20" viewBox="0 0 20 20">
    <g fillRule="evenodd" transform="translate(-4 -4)">
      <path id="tag-a" d="M20.99975,8 C20.44775,8 19.99975,7.552 19.99975,7 C19.99975,6.448 20.44775,6 20.99975,6 C21.55175,6 21.99975,6.448 21.99975,7 C21.99975,7.552 21.55175,8 20.99975,8 M21.99975,4 L14.82775,4 C14.29775,4 13.78875,4.21 13.41375,4.585 L4.58575,13.414 C3.80475,14.195 3.80475,15.461 4.58575,16.242 L11.75675,23.414 C12.53775,24.195 13.80475,24.195 14.58575,23.414 L23.41375,14.586 C23.78875,14.211 23.99975,13.702 23.99975,13.172 L23.99975,6 C23.99975,4.896 23.10375,4 21.99975,4"></path>
    </g>
  </svg>

  return (
    <div className="pab-card" data-theme={theme} data-index={index}>
      <div className="pab-card-top">
        <div className="pab-name">{name}</div>
        <div
          className="pab-rating-container"
          onMouseEnter={onMouseEnterOrLeave}
          onMouseLeave={onMouseEnterOrLeave}
        >
          <span className="price-tag">{priceTag}</span>
          <span className="pab-rating">{ratingPercent}% {rating}</span>
        </div>
      </div>

      <div className="pab-rating-container-tooltip">
        <span className="pab-analysts-summary" data-theme={theme}>
        {ratingPercent}% of analysts rate <span className="pab-summary-name">{name}</span> as a {rating}.
        </span>
      </div>

      <div className="pab-card-bottom">
        <h2 className="pab-price" data-theme={theme}>${price}</h2>
        <div className="pab-percent-change" data-theme={theme}>{formattedPercentChange}</div>
      </div>
    </div>
  );
}

export default Card;