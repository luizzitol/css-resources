// input form to add resources to database

import { useEffect, useState } from "react";

function NewResource(props) {
  const [resourceData, setResourceData] = useState({
    title: "",
    description: "",
    image: "",
  });

  function submitHandler() {}

  function inputHandler() {}

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
    getScreenShot("https://www.thum.io/documentation/api/url");
    getDescription("https://www.thum.io/documentation/api/url");
  }, []);

  return (
    <>
      <img src={resourceData.image} alt="" />
      <p>{resourceData.title}</p>
      <p>{resourceData.description}</p>
      <form onSubmit={submitHandler}></form>
    </>
  );
}

export default NewResource;
