// input form to add resources to database

import { useEffect, useState } from "react";

function NewResource(props) {
  const [resourceData, setResourceData] = useState({
    title: "",
    description: "",
    image: "",
  });

  function submitHandler() {}

  function inputHandler(event) {
    setResourceData((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value,
    }));
    console.log(resourceData);
  }

  function getScreenShot(url) {
    fetch(`https://image.thum.io/get/width/600/crop/800/${url}`)
      .then((response) => response.blob())
      .then((blob) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () =>
          setResourceData((previousState) => ({
            ...previousState,
            image: reader.result,
          }));
      });
  }

  function getDescription(url) {
    fetch(
      `https://www.googleapis.com/customsearch/v1?key=AIzaSyBfKfCOrxxdrhMR0UzvXssSIJt-91WRf5s&cx=70bb494cfd51f14bd&q=${url}`
    )
      .then((response) => response.json())
      .then((data) =>
        setResourceData((previousState) => ({
          ...previousState,
          title: data.items[0].title,
          description: data.items[0].snippet,
        }))
      );
  }

  useEffect(() => {
    getDescription("https://www.google.es");
    getScreenShot("https://www.google.es");
  }, []);

  return (
    <>
      <img src={resourceData.image} alt="" />

      <form onSubmit={submitHandler}>
        <div className="control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={resourceData.title}
            name="title"
            onChange={inputHandler}
          />
        </div>
        <div className="control">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            value={resourceData.description}
            name="description"
            onChange={inputHandler}
          />
        </div>
      </form>
    </>
  );
}

export default NewResource;
