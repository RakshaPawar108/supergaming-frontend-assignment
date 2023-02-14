import { useEffect, useState } from "react";
import { fetchUnits } from "../../services";
import { toast } from "react-toastify";
import { UnitCard } from "../../components";

export const Home = () => {
  const [units, setUnits] = useState([]);

  const authData = JSON.parse(localStorage.getItem("auth"));

  const getUnits = async () => {
    try {
      const response = await fetchUnits(authData.accessToken);
      if (response.status === 200) {
        setUnits(response.data);
      }
    } catch (err) {
      toast.error("Error in fetching units: " + err.message, {
        theme: "dark",
      });
    }
  };

  useEffect(() => {
    getUnits();
  }, []);

  return (
    <div className="ui link centered cards">
      {units.length > 0 ? (
        <>
          {units.map((unit) => (
            <UnitCard key={unit.id} unit={unit} />
          ))}
        </>
      ) : (
        <div>No units to display at the moment.</div>
      )}
    </div>
  );
};
