import React from "react";
import { useParams } from "react-router-dom";

const data = {
  1: { name: "Item 1", description: "Description for Item 1" },
  2: { name: "Item 2", description: "Description for Item 2" },
  3: { name: "Item 3", description: "Description for Item 3" }
};

function ItemDetail() {
  const { id } = useParams();
  const item = data[id];

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
    </div>
  );
}

export default ItemDetail;
