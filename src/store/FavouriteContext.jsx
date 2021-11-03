import { createContext } from "react";

const FavouriteContext = createContext({ test: "test" });

export function FavouriteContextProvider(props) {
  const context = { test: "test" };

  return (
    <FavouriteContext.Provider value={context}>
      {props.children}
    </FavouriteContext.Provider>
  );
}

export default FavouriteContext;
