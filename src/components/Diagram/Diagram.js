import "./Diagram.css";
import Card from "../UI/Card";
import DiagramBar from "./DiagramBar";
const Diagram = function (props) {
  const setDiagramArr = props.setDiagram.map((diagram) => diagram.value);
  const maxVal = Math.max(...setDiagramArr);
  return (
    <Card className="diagram">
      {props.setDiagram.map((diagram, index) => (
        <DiagramBar
          key={index}
          label={diagram.label}
          value={diagram.value}
          maxValue={maxVal}
        />
      ))}
    </Card>
  );
};
export default Diagram;
