import React, { createContext, useState } from "react";

export const DataContext = createContext();

const Store = ({ children }) => {
  const [moves, setMoves] = useState([]);

  const MOVES = {
    moves,
    setMoves,
  };

  return (
    <DataContext.Provider value={{ MOVES }}>{children}</DataContext.Provider>
  );
};

export default Store;
