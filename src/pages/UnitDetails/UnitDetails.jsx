import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchUnitById } from "../../services";

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
    <div className="ui grid">
      <div className="eight wide column">
        <div className="ui items">
          {unit && (
            <div className="item">
              <div className="ui medium bordered image">
                <img src={unit.imageUrl} alt={unit.name} />
              </div>
              <div className="content">
                <div className="header">{unit.name}</div>
                <div className="meta">
                  <div className="sub header">Code: {unit.code}</div>
                  <div className="sub header">Id: {unit.id}</div>
                </div>
                <div className="description">{unit.description}</div>

                {unit.ability && (
                  <>
                    <div className="header">Ability</div>
                    <div className="meta">
                      <div className="sub header">
                        Name: {unit.ability.name}
                      </div>
                    </div>
                    <div className="description">
                      Description: {unit.ability.description}
                    </div>
                  </>
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
