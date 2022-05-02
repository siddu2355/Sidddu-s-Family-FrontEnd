import React from "react";

const ListGroup = ({ catogeries, onCatogerySelect, selectedCatogery, currentPage }) => {
  return (
    <ul className="list-group">
      {catogeries.map((catogery) => (
        <li
          key={catogery._id}
          style={{cursor:"pointer", fontSize:18,}}
          className={
            catogery === selectedCatogery
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => onCatogerySelect(catogery)}
        >
          {catogery.name}s
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
