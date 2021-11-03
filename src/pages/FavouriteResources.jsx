// Takes favourites from context and display a list of favourite resources

import { useContext } from "react";

function FavouriteResources(props) {
  const favouritesCtx = useContext(FavouriteResources);

  return (
    <>
      <h2>Favourite Resources</h2>
    </>
  );
}

export default FavouriteResources;
