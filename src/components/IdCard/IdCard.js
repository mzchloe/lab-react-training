import './IdCard.css';

export function IdCard({ img, firstName, lastName, gender, height, birth }) {
  return (
    <div className="idCard">
      <div className="card_img">
        <img src={img} alt={img} />
      </div>
      <ul>
        <li>
          <span>
            <b>First name:</b> {firstName}
          </span>
        </li>
        <li>
          <span>
            <b>Last name:</b> {lastName}
          </span>
        </li>
        <li>
          <span>
            <b>Gender:</b> {gender}
          </span>
        </li>
        <li>
          <span>
            <b>Height:</b> {height / 100}
          </span>
        </li>
        <li>
          <span>
            <b>Birth:</b> {birth}
          </span>
        </li>
      </ul>
    </div>
  );
}
