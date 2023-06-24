import { useDispatch, useSelector } from "react-redux";
import { selectDayAction } from "../store/dayReducer";

function DayOfWeekSelect() {

    const dispatch = useDispatch();
    const period = useSelector(state => state.period.period);
    const day = useSelector(state => state.day.day);

    const onSelectDay = (e) => {
        const selectedDay = e.target.value
        dispatch(selectDayAction(selectedDay));
    }


    return (
        <select className='select' value={day} onChange={onSelectDay} disabled={period !== 'Weekly'} >
            <option value=''>Day of the week</option>
            <option value='Monday'>Monday</option>
            <option value='Tuesday'>Tuesday</option>
            <option value='Wednesday'>Wednesday</option>
            <option value='Thursday'>Thursday</option>
            <option value='Friday'>Friday</option>
            <option value='Saturday'>Saturday</option>
            <option value='Sunday'>Sunday</option>
        </select>
    )
}

export default DayOfWeekSelect;