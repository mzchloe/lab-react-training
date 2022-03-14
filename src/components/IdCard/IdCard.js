import './IdCard.css';

export function IdCard({ img, firstName, lastName, gender, height, birth }) {
  return (
    <div className="idCard">
      <div className="card_img">
        <img src={img} alt={img} />
      </div>
      <div className="card_info">
        <ul>
          <li>
            <h3>First name: {firstName}</h3>
          </li>
          <li>
            <h3>Last name:{lastName}</h3>
          </li>
          <li>
            <h3>Gender:{gender}</h3>
          </li>
          <li>
            <h3>Height:{height}</h3>
          </li>
          <li>
            <h3>Birth:{birth}</h3>
          </li>
        </ul>
      </div>
    </div>
  );
}
