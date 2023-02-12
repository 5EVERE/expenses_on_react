import "./CostForm.css";
import { useState } from "react";
const CostForm = function (props) {
  const [description, setDescriptionSate] = useState("");
  const [amount, setAmountSate] = useState("");
  const [date, setDateSate] = useState("");
  const setDescription = function (e) {
    setDescriptionSate(e.target.value);
  };
  const setAmount = function (e) {
    setAmountSate(e.target.value);
  };
  const setDate = function (e) {
    setDateSate(e.target.value);
  };
  const newData = function (e) {
    e.preventDefault();
    const data = {
      date: new Date(date),
      description: description,
      amount: Number(amount),
    };
    props.newCost(data);
    setDescriptionSate("");
    setAmountSate("");
    setDateSate("");
  };

  return (
    <form onSubmit={newData}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Назва</label>
          <input
            type="text"
            onChange={setDescription}
            value={description}
          ></input>
        </div>
        <div className="new-cost__control">
          <label>Сума</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={setAmount}
            value={amount}
          ></input>
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input type="date" onChange={setDate} value={date}></input>
        </div>
        <div className="new-cost__actions">
          <button type="submit">Добавити розхід</button>
          <button>Відміна</button>
        </div>
      </div>
    </form>
  );
};
export default CostForm;
