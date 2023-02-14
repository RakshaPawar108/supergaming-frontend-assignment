import { Link } from "react-router-dom";

export const UnitCard = ({ unit }) => {
  return (
    <div className="card">
      <div className="image">
        <img src={unit.imageUrl} alt={unit.name} />
      </div>
      <div className="content">
        <div className="header">{unit.name}</div>
        <div className="meta">
          <a>Code: {unit.code}</a>
        </div>
        <div className="description">{unit.description}</div>
        <div className="labels">
          <a class="ui orange tiny label">{unit.type}</a>
          <a class="ui violet tiny label">{unit.role}</a>
          <a class="ui pink tiny label">{unit.faction}</a>
          <a class="ui yellow tiny label">{unit.attackType}</a>
        </div>
        <div className="description">
          <strong>Ability:</strong> {unit.ability.name}
        </div>
      </div>
      <div className="extra content">
        <Link to="/" className="right floated">
          See More
        </Link>
        <span>
          <i className="user icon"></i>
          <strong>Id: {unit.id}</strong>
        </span>
      </div>
    </div>
  );
};
