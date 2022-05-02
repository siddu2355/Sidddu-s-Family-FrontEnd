import React, {Component} from "react";
import f from "../images/f.png"
class Home extends Component {

render(){
  return (
    <>
      <div
        className="row"
        style={{
          backgroundColor: "#000",
          width: 1531,
          height: 660,
          color: "#ff652f",
          paddingTop: 190,
        }}
      >
        <div
          className="col"
          style={{
            paddingLeft: 290,
          }}
        >
          <img src={f} alt="F" style={{ width: 250, height: 250 }} />
        </div>
        <div
          className="col"
          style={{
            paddingRight: 380,
          }}
        >
          <h1 style={{ fontSize: 200 }}>AMILY</h1>
        </div>
      </div>
    </>
  );
}
};
export default Home;
