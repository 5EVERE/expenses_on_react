import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import { useState } from "react";
const costs = [
  {
    date: new Date(2023, 2, 12),
    description: "Холодильник",
    amount: 999.99,
  },
  {
    date: new Date(2023, 11, 3),
    description: "Машина",
    amount: 4999.99,
  },
  {
    date: new Date(2022, 3, 2),
    description: "Телевізор",
    amount: 1250,
  },
  {
    date: new Date(2022, 2, 22),
    description: "Годинник",
    amount: 80.99,
  },
  {
    date: new Date(2021, 5, 24),
    description: "Одяг",
    amount: 49.5,
  },
  {
    date: new Date(2021, 2, 12),
    description: "Тумбочка",
    amount: 100.99,
  },
  {
    date: new Date(2021, 2, 12),
    description: "Телефон",
    amount: 1100,
  },
  {
    date: new Date(2020, 7, 1),
    description: "Ліжко",
    amount: 249.5,
  },
  {
    date: new Date(2020, 0, 20),
    description: "Навушнки",
    amount: 200,
  },
];
function App() {
  const [itinialCosts, setInitialCosts] = useState(costs);
  const addCost = function (data) {
    setInitialCosts((prevCosts) => {
      return [data, ...prevCosts];
    });
  };
  return (
    <div>
      <NewCost onAddCost={addCost} />
      <Costs costs={itinialCosts} />
    </div>
  );
}

export default App;
