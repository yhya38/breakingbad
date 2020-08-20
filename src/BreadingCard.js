import React from "react";
import "./breakingcard.css";

function BreadingCard({ data }) {
  return (
    <div className="container">
      <img className="container__img" alt={data.name} src={data.img} />
      <div className="data">
        <h2 className="data__name">{data.name}</h2>
        <h3>
          Birthday: <span>{data.birthday}</span>
        </h3>

        <h3>
          Status:<span>{data.status}</span>{" "}
        </h3>
        <h3>
          Portrayed:<span className="occupation">{data.portrayed}</span>{" "}
        </h3>
      </div>
    </div>
  );
}

export default BreadingCard;
