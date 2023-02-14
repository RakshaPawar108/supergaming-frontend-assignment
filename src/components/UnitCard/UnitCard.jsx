import { Link } from "react-router-dom";
import "./UnitCard.css";

export const UnitCard = ({ unit }) => {
  return (
    <div className="card">
      <div className="image">
        <img className="unit-image" src={unit.imageUrl} alt={unit.name} />
      </div>
      <div className="content">
        <div
          className="header unit-name"
          style={{ fontSize: "1.2rem", fontFamily: "Poppins" }}
        >
          {unit.name}
        </div>
        <div className="sub header">
          <a>Code: {unit.code}</a>
        </div>
        <div className="description unit-description">{unit.description}</div>
        <div className="description ability-description">
          <strong>Ability:</strong> {unit.ability.name}
        </div>
      </div>
      <div className="content">
        <div className="labels">
          <a className="ui orange tiny label">{unit.type}</a>
          <a className="ui violet tiny label">{unit.role}</a>
          <a className="ui pink tiny label">{unit.faction}</a>
          <a className="ui red tiny label">{unit.attackType}</a>
        </div>
      </div>
      <div
        className="extra content unit-extra-content"
        style={{ fontSize: "0.9rem" }}
      >
        <Link to="/" className="right floated">
          See More
        </Link>
        <span>
          <i class="gamepad icon"></i>
          <strong>Id: {unit.id}</strong>
        </span>
      </div>
    </div>
  );
};
