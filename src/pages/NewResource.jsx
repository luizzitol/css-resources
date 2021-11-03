// input form to add resources to database

import { useState } from "react";

function NewResource(props) {
  const [userInput, setUserInput] = useState({});

  function submitHandler() {}

  function inputHandler() {}

  return (
    <>
      <h2>New Resource</h2>
      <form onSubmit={submitHandler}></form>
    </>
  );
}

export default NewResource;
