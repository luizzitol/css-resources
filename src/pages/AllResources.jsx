// Display all resurces pulled from the database

import { useEffect, useState } from "react";

function AllResources(props) {
  const [resources, setResources] = useState([]);

  function fetchResources() {}

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
