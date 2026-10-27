

import "./IdCard.css";

function IdCard({ firstName, lastName, gender, height, birth, picture }) {
  return (
    <article className="id-card">
      <img src={picture} alt={`${firstName} ${lastName}`} />
      <div className="id-card__details">
        <p><strong>First name:</strong> {firstName}</p>
        <p><strong>Last name:</strong> {lastName}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Height:</strong> {(height / 100).toFixed(2)}m</p>
        <p><strong>Birth:</strong> {birth.toDateString()}</p>
      </div>
    </article>
  );
}

export default IdCard;