import "./CostDate.css";
const CostDate = function (props) {
    const day =  props.date.toLocaleString('ua-UA', {day: '2-digit'});
    const month = props.date.toLocaleString('ua-UA', {month: 'long'});
    const year =  props.date.getFullYear();
    return (
        <div className="cost-date">
            <div className="cost-date__month">{month}</div>
            <div className="cost-date__year">{year}</div>
            <div className="cost-date__day">{day}</div>
        </div>
    )
};
export default CostDate;
