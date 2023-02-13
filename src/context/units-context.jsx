import { createContext, useContext } from "react";

const UnitsContext = createContext(null);

const UnitsProvider = ({ children }) => {
  return <UnitsContext.Provider>{children}</UnitsContext.Provider>;
};

const useUnits = () => useContext(UnitsContext);

export { UnitsProvider, useUnits };
