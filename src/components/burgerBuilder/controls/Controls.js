import React from "react";

import { Card, CardHeader, CardBody, CardFooter } from "reactstrap";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControl = (props) => {
  return (
    <div className="d-flex justify-content-between">
      <div
        className="mr-auto ml-5"
        style={{
          fontWeight: "bold",
          fontSize: "1.2rem",
        }}
      >
        {props.label}
      </div>
      <div>
        <button className="btn btn-danger btn-sm m-1" onClick={props.remove}>
          -
        </button>
        <button className="btn btn-success btn-sm m-1" onClick={props.added}>
          +
        </button>
      </div>
    </div>
  );
};

const Controls = (props) => {
  return (
    <div
      className="container ml-md-5"
      style={{
        textAlign: "center",
      }}
    >
      <Card
        style={{
          marginTop: "30px",
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        <CardHeader
          style={{
            backgroundColor: "#D70F64",
            color: "white",
          }}
        >
          <h4>Add Ingredients</h4>
        </CardHeader>
        <CardBody>
          {controls.map((item) => {
            return (
              <BuildControl
                label={item.label}
                type={item.type}
                key={Math.random()}
                added={() => props.addedIngredient(item.type)}
                remove={() => props.removeIngredient(item.type)}
              />
            );
          })}
        </CardBody>
        <CardFooter>
          <h5>Price: <strong>{props.price}</strong>  BDT</h5>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Controls;
