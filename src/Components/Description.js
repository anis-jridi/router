import React from "react";

const Description = ({ match, list }) => {
  let item = list.find((el) => el.id == match.params.id);
  return (
    <div>
      <h1 style={{ fontSize: "30px" }}>{item.name}</h1>
      <iframe
        width="700"
        height="400"
        src={item.trailer}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <h3 style={{ margin: "auto", width: "1000px" }}> {item.description}</h3>
    </div>
  );
};

export default Description;
