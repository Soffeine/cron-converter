import { useDispatch, useSelector } from "react-redux";
import { selectMonthAction } from "../store/monthReducer";

function MonthSelect() {

    const dispatch = useDispatch();

    const period = useSelector(state => state.period.period);
    const month = useSelector(state => state.month.month);

    const onSelectMonth = (e) => {
        const selectedMonth = e.target.value;
        dispatch(selectMonthAction(selectedMonth))
    }

    return (
        <select className='select' value={month} onChange={onSelectMonth} disabled={period !== 'Custom'} >
            <option value=''>Month</option>
            <option value='01'>January</option>
            <option value='02'>February</option>
            <option value='03'>March</option>
            <option value='04'>April</option>
            <option value='05'>May</option>
            <option value='06'>June</option>
            <option value='07'>July</option>
            <option value='08'>August</option>
            <option value='09'>September</option>
            <option value='10'>October</option>
            <option value='11'>November</option>
            <option value='12'>December</option>
        </select>
    )
}

export default MonthSelect;