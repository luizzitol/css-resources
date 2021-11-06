import { useContext, useEffect, useState } from "react";
import NewResource from "./pages/NewResource";
import FavouriteContext from "./store/FavouriteContext";

function App() {
  return <NewResource />;
}

// const localPicUrl = URL.createObjectURL(imageblob);
// AIzaSyBfKfCOrxxdrhMR0UzvXssSIJt-91WRf5s
// "https://www.googleapis.com/customsearch/v1?key=AIzaSyBfKfCOrxxdrhMR0UzvXssSIJt-91WRf5s&cx=70bb494cfd51f14bd&q=http://tools.buzzstream.com/meta-tag-extractor"
export default App;
