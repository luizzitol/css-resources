import { useContext } from "react";
import FavouriteContext from "./store/FavouriteContext";

function App() {
  const FavouriteCtx = useContext(FavouriteContext);
  return (
    <div className="App">
      <p>{FavouriteCtx.test}</p>
    </div>
  );
}

export default App;
