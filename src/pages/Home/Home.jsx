import { useEffect, useState } from "react";
import { fetchUnits } from "../../services";
import { toast } from "react-toastify";

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

  return <div>This is the Home page</div>;
};
