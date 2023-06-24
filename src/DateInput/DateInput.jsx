import './DateInput.css';
import { useDispatch, useSelector } from "react-redux";
import { setDateAction } from "../store/dateReducer";

function DateInput() {

    const dispatch = useDispatch();

    const period = useSelector(state => state.period.period);
    const date = useSelector(state => state.date.date);

    const onDateChange = (e) => {
        const newDate = e.target.value;
        dispatch(setDateAction(newDate));
    }

    return (
        <input type="number" min="1" max="31" defaultValue={date} onChange={onDateChange} className="input date-input" placeholder='Day of the month' disabled={period !== 'Monthly' && period !== 'Custom'} />
    )
}

export default DateInput;