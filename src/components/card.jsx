import React from "react";

const Card = ({ name, img, desc }) => {
  return (
    <div className="row" style={{ padding: 20, marginTop: 20 }}>
      <h2 style={{ marginBottom: 27, color:"#5ab9ea" }}>{name} Family</h2>
      <div className="col" style={{paddingLeft:30}}>
        <img src={img} alt="mega" style={{ width: "90%", height: 270 }} />
      </div>
      <div className="col" style={{textAlign: "center"}}>
        <p
          style={{
            fontSize: 18,
            fontStyle:"italic",
            fontWeight: "400",
            marginTop: 50,
            color:"#5d5c61"
          }}
        >
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Card;
