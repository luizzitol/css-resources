import NewResource from "./pages/NewResource";

import { Route, Routes } from "react-router-dom";
import AllResources from "./pages/AllResources";
import FavouriteResources from "./pages/FavouriteResources";
import Layout from "./components/ui/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<AllResources />} />
        <Route exact path="/add" element={<NewResource />} />
        <Route exact path="/favourites" element={<FavouriteResources />} />
      </Routes>
    </Layout>
  );
}

export default App;
