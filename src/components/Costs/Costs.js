import "./Costs.css";
import CostItem from "./CostItem";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import CostsDiagram from "./CostsDiagram";
import React from "react";
import { useState } from "react";
const Costs = function (props) {
  const [currentYear, setCurrentYear] = useState("2023");
  const changeYear = function (event) {
    setCurrentYear(event);
  };

  return (
    <Card className="costs">
      <CostsFilter year={currentYear} onChangeYear={changeYear} />
      <CostsDiagram
        costs={props.costs.filter(
          (cost) => cost.date.getFullYear().toString() === currentYear
        )}
      />
      {React.Children.toArray(
        props.costs
          .filter((cost) => cost.date.getFullYear().toString() === currentYear)
          .map((cost, index) => (
            <div>
              <CostItem
                key={index}
                date={cost.date}
                description={cost.description}
                amount={cost.amount}
              />
            </div>
          ))
      )}
    </Card>
  );
};
export default Costs;
