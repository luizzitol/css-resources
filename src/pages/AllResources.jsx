// Display all resurces pulled from the database

import { useEffect, useState } from "react";

function AllResources(props) {
  const [resources, setResources] = useState([]);

  function fetchResources() {
    fetch(
      "https://css-resources-1636109253051-default-rtdb.europe-west1.firebasedatabase.app/resources.json"
    )
      .then((response) => response.json())
      .then((data) => setResources(data));
  }

  useEffect(() => {
    fetchResources();
  }, []);

  return (
    <>
      <h2>All Resources</h2>
    </>
  );
}

export default AllResources;
