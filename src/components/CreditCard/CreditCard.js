import React from 'react';
import './CreditCard.css';

export default function CreditCard(props) {
    const divStyle = {
        backgroundColor: props.bgColor,
        color: props.color 
    }
    let lastDigits = props.number.slice(props.number.length - 4);

  return (
      <div className="credit-card" style={divStyle}>
        <div className="card-logo">
          <p className="card-type">{props.type}</p>
          <p className="card-number">
            &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;
            &bull;&bull;&bull;&bull;
            {lastDigits}
          </p>
          <ul>
            <li>
              <pre>
                Expires {props.expirationMonth}/{props.expirationYear}  {props.bank}
              </pre>
            </li>
            <li>{props.owner}</li>
          </ul>
          </div>
      </div>
  );
}
