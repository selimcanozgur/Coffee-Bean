import { createContext, useContext, useEffect, useState } from "react";

const API = "https://fake-coffee-api.vercel.app/api";

const CoffeeContext = createContext();
// eslint-disable-next-line react/prop-types
function CoffeeProvider({ children }) {
  const [coffee, setCoffee] = useState([]);

  useEffect(() => {
    const getAllData = async () => {
      try {
        const res = await fetch(API);
        const data = await res.json();
        setCoffee(data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllData();
  }, []);

  return (
    <CoffeeContext.Provider value={{ coffee }}>
      {children}
    </CoffeeContext.Provider>
  );
}

function useCoffee() {
  const context = useContext(CoffeeContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");
  return context;
}

export { CoffeeProvider, useCoffee };
