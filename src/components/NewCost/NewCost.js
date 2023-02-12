import "./NewCost.css";
import CostForm from "./CostForm";
import Card from "../UI/Card";
import { useState } from "react";
const NewCost = function (props) {
  const [visible, setVisible] = useState(false);
  const onAddNewCost = function (data) {
    props.onAddCost(data);
    setVisible(!visible);
  };
  const visibleHandler = function () {
    setVisible(!visible);
  };
  return (
    <Card className="new-cost">
      {!visible && <button onClick={visibleHandler}>Новий розхід</button>}
      {visible && <CostForm newCost={onAddNewCost} />}
    </Card>
  );
};
export default NewCost;
