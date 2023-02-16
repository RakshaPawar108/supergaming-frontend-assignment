import { useEffect, useState } from "react";
import { fetchUnits } from "../../services";
import { toast } from "react-toastify";
import { CodeSort, Loader, UnitCard } from "../../components";

export const Home = () => {
  const [units, setUnits] = useState([]);
  const [sortOrder, setSortOrder] = useState("DEFAULT");
  const [loading, setLoading] = useState(true);

  const authData = JSON.parse(localStorage.getItem("auth"));

  const getUnits = async () => {
    try {
      const response = await fetchUnits(authData.accessToken);
      if (response.status === 200) {
        setUnits(response.data);
        setLoading(false);
      }
    } catch (err) {
      toast.error("Error in fetching units: " + err.message, {
        theme: "dark",
      });
    }
  };

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  useEffect(() => {
    getUnits();
  }, []);

  const sortUnits = (units, sortOrder) => {
    if (sortOrder === "ASC") {
      return units.sort((a, b) => {
        return a.code - b.code;
      });
    } else if (sortOrder === "DESC") {
      return units.sort((a, b) => {
        return b.code - a.code;
      });
    } else {
      return units;
    }
  };

  const sortedUnits = sortUnits(units, sortOrder);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div
            className="ui center aligned header"
            style={{ fontSize: "1.5rem", fontFamily: "Poppins" }}
          >
            Available Units
          </div>
          <div
            className="ui container"
            style={{ padding: "1.5rem", width: "50%" }}
          >
            <CodeSort handleSortOrderChange={handleSortOrderChange} />
          </div>
          <div className="ui link centered cards">
            {sortedUnits.length > 0 ? (
              <>
                {sortedUnits.map((unit) => (
                  <UnitCard key={unit.id} unit={unit} />
                ))}
              </>
            ) : (
              <div className="ui center-aligned container">
                No units to display at the moment. Please Login!
              </div>
            )}
          </div>{" "}
        </>
      )}
    </>
  );
};
