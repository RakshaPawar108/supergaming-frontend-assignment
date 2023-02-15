import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchUnitById } from "../../services";
import "./UnitDetails.css";
import { Progress } from "semantic-ui-react";

export const UnitDetails = () => {
  const [unit, setUnit] = useState({});

  const authData = JSON.parse(localStorage.getItem("auth"));
  const { unitId } = useParams();

  const getUnit = async () => {
    try {
      const response = await fetchUnitById(authData.accessToken, unitId);
      if (response.status === 200) {
        setUnit(response.data);
      } else if (response.status === 404) {
        toast.error("Unit not found", {
          theme: "dark",
        });
      } else {
        toast.error("Error in fetching unit: " + response.data.message, {
          theme: "dark",
        });
      }
    } catch (err) {
      toast.error("Error in fetching unit: " + err.message, {
        theme: "dark",
      });
    }
  };

  useEffect(() => {
    getUnit();
  }, []);

  return (
    <div className="ui stackable relaxed divided grid">
      <div className="eight wide column">
        {unit && (
          <div className="item">
            <div className="ui container" style={{ margin: "1rem" }}>
              <img
                className="ui bordered medium centered image"
                src={unit.imageUrl}
                alt={unit.name}
              />
            </div>
            <div
              className="content"
              style={{ margin: "1rem", fontFamily: "Poppins" }}
            >
              <div className="part1">
                <div
                  className="ui center aligned header"
                  style={{
                    fontSize: "1.5rem",
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                  }}
                >
                  {unit.name}
                </div>
                <div className="meta" style={{ margin: "1rem" }}>
                  <div className="sub header" style={{ lineHeight: "2rem" }}>
                    <strong>Code: </strong> {unit.code}
                  </div>
                  <div className="sub header">
                    <strong>Id: </strong> {unit.id}
                  </div>
                </div>
                <div className="description" style={{ margin: "1rem" }}>
                  <strong>Description: </strong>
                  {unit.description}
                </div>
              </div>

              {unit.ability && (
                <div className="part2">
                  <div
                    className="header"
                    style={{
                      fontSize: "1.5rem",
                      fontFamily: "Poppins",
                      fontWeight: "bold",
                      margin: "1rem",
                    }}
                  >
                    Ability
                  </div>
                  <div className="meta" style={{ margin: "1rem" }}>
                    <div className="sub header" style={{ lineHeight: "2rem" }}>
                      <strong>Name: </strong> {unit.ability.name}
                    </div>
                  </div>
                  <div className="description" style={{ margin: "1rem" }}>
                    <strong>Description: </strong> {unit.ability.description}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="eight wide column">
        <div className="ui stackable items">
          {unit && (
            <div className="item">
              <div
                className="content"
                style={{ margin: "1rem", fontFamily: "Poppins" }}
              >
                <div className="part1">
                  <div
                    className="header"
                    style={{
                      fontSize: "1.5rem",
                      fontFamily: "Poppins",
                      fontWeight: "bold",
                    }}
                  >
                    Details
                  </div>
                  <div className="meta" style={{ lineHeight: "2rem" }}>
                    <div className="sub header">
                      <strong>Unit Type: </strong>{" "}
                      <a className="ui orange medium label">{unit.type}</a>
                    </div>
                    <div className="sub header">
                      <strong>Unit Role: </strong>{" "}
                      <a className="ui violet medium label">{unit.role}</a>
                    </div>
                    <div className="sub header">
                      <strong>Faction: </strong>{" "}
                      <a className="ui pink medium label">{unit.faction}</a>
                    </div>
                    <div className="sub header">
                      <strong>Quality: </strong>{" "}
                      <a className="ui teal medium label">{unit.quality}</a>
                    </div>
                  </div>
                </div>

                <div className="part2">
                  <div
                    className="header"
                    style={{
                      fontSize: "1.5rem",
                      fontFamily: "Poppins",
                      fontWeight: "bold",
                    }}
                  >
                    Stats
                  </div>
                  <div className="description" style={{ marginTop: "1rem" }}>
                    <div className="label">
                      <i className="heartbeat icon"></i>
                      <strong>Health:</strong> {unit.health} / 10000
                    </div>
                    <Progress
                      value={unit.health}
                      total={10000}
                      success
                    ></Progress>
                  </div>
                  <div className="description" style={{ marginTop: "1rem" }}>
                    <div className="label">
                      <i className="bolt icon"></i>
                      <strong>Attack:</strong> {unit.attack} / 500
                    </div>
                    <Progress
                      value={unit.attack}
                      total={500}
                      color="red"
                    ></Progress>
                  </div>
                  <div className="description" style={{ marginTop: "1rem" }}>
                    <div className="label">
                      <i className="crosshairs icon"></i>
                      <strong>Attack Type: </strong> {unit.attackType}
                    </div>
                  </div>
                  <div className="description" style={{ marginTop: "1rem" }}>
                    <div className="label">
                      <i className="bullseye icon"></i>
                      <strong>Attack Range: </strong> {unit.attackRangeType}
                    </div>
                  </div>
                  <div className="description" style={{ marginTop: "1rem" }}>
                    <div className="label">
                      <i className="user icon"></i>
                      <strong>Attack Target Type: </strong>{" "}
                      {unit.attackTargetType}
                    </div>
                  </div>
                  <div className="description" style={{ marginTop: "1rem" }}>
                    <div className="label">
                      <i className="users icon"></i>
                      <strong>Max Targets: </strong> {unit.maxTargetCount}
                    </div>
                  </div>
                  <div className="description" style={{ marginTop: "1rem" }}>
                    <div className="label">
                      <i className="street view icon"></i>
                      <strong>Movement Type: </strong> {unit.movementType}
                    </div>
                  </div>
                  <div className="description" style={{ marginTop: "1rem" }}>
                    <div className="label">
                      <i className="fast forward icon"></i>
                      <strong>Speed: </strong> {unit.movementSpeedType}
                    </div>
                  </div>
                  <div className="description" style={{ marginTop: "1rem" }}>
                    <div className="label">
                      <i class="dollar sign icon"></i>
                      <strong>Spawn Cost: </strong> {unit.spawnCost}
                    </div>
                  </div>
                  <div className="description" style={{ marginTop: "1rem" }}>
                    <div className="label">
                      <i class="stopwatch icon"></i>
                      <strong>Spawn Cooldown: </strong> {unit.spawnCooldownInSeconds}{" "}
                      seconds
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
