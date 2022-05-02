import React from "react";

const Input = ({id, onChange, type, value, name, label, error, ...rest}) => {
  return (
    <div className="form-group" style={{width:550,position:"relative", marginLeft:390}}>
      <label htmlFor={id}>{label}</label>
      <input
        style={{borderStartStartRadius:100, borderEndEndRadius:100}}
        value={value}
        onChange={onChange}
        type={type}
        id={id}
        name={name}
        className="form-control"
        {...rest}
      />
      {error && <div style={{color:"red"}}>{error}</div>}
    </div>
  );
};

export default Input;
