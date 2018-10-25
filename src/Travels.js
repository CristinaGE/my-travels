import React from "react";

const Travels = props => (
  <figure>
    <img src={props.photo} alt={props.country} />
    <figcaption>
      <p>{props.desitnation}</p>
      <p>{props.country}</p>
      <p>{props.distance}</p>
    </figcaption>
  </figure>
);

export default Travels;