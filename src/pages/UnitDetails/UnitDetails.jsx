import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchUnitById } from "../../services";
import "./UnitDetails.css";

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
    <div className="ui stackable relaxed grid">
      <div className="eight wide column">
        <div className="ui stackable items">
          {unit && (
            <div className="item">
              <div
                className="ui medium bordered image"
                style={{ margin: "1rem", border:'1px solid black' }}
              >
                <img src={unit.imageUrl} alt={unit.name} />
              </div>
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
                    {unit.name}
                  </div>
                  <div className="meta">
                    <div
                      className="sub header"
                      style={{ lineHeight: "2rem" }}
                    >
                      <strong>Code: </strong> {unit.code}
                    </div>
                    <div className="sub header">
                      <strong>Id: </strong> {unit.id}
                    </div>
                  </div>
                  <div className="description">
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
                      }}
                    >
                      Ability
                    </div>
                    <div className="meta">
                      <div
                        className="sub header"
                        style={{ lineHeight: "2rem" }}
                      >
                        <strong>Name: </strong> {unit.ability.name}
                      </div>
                    </div>
                    <div className="description">
                      <strong>Description: </strong> {unit.ability.description}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="eight wide column">Col 2</div>
    </div>
  );
};
