import "./WritingInputs.css";
import { useDispatch, useSelector } from "react-redux";
import { selectDayAction } from "../store/dayReducer";
import { setIntervalAction } from "../store/intervalReducer";
import { setTimeAction } from "../store/timeReducer";
import { selectMonthAction } from "../store/monthReducer";
import { setDateAction } from "../store/dateReducer";

function WritingInputs() {

    const dispatch = useDispatch();

    const period = useSelector(state => state.period.period);
    const date = useSelector(state => state.date.date);
    const month = useSelector(state => state.month.month);
    const day = useSelector(state => state.day.day);
    const interval = useSelector(state => state.interval.interval);
    const time = useSelector(state => state.time.time);

    const onSelectMonth = (e) => {
        const selectedMonth = e.target.value;
        dispatch(selectMonthAction(selectedMonth))
    }
    
    const onSelectDay = (e) => {
        const selectedDay = e.target.value
        dispatch(selectDayAction(selectedDay));
    }

    const onSetInterval = (e) => {
        const newInterval = e.target.value;
        dispatch(setIntervalAction(newInterval));
    }

    const onTimeChange = (e) => {
        const newTime = e.target.value;
        dispatch(setTimeAction(newTime));
    }

    const onDateChange = (e) => {
        const newDate = e.target.value;
        dispatch(setDateAction(newDate));
        console.log(date)
    }


    
    return (
        <div className='writing-inputs'>

            <input type="number" defaultValue={date} onChange={onDateChange} className="input" disabled={period !== 'monthly' && period !== 'custom'} />

            <select className='select' value={day} onChange={onSelectDay} disabled={period !== 'weekly'} >
                <option value='Monday'>Monday</option>
                <option value='Tuesday'>Tuesday</option>
                <option value='Wednesday'>Wednesday</option>
                <option value='Thursday'>Thursday</option>
                <option value='Friday'>Friday</option>
                <option value='Saturday'>Saturday</option>
                <option value='Sunday'>Sunday</option>
            </select>

            <select className='select' value={month} onChange={onSelectMonth} disabled={period !== 'custom'} >
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
            

            <div className='time-setter'>
                <label className='label time-label'>
                    At
                    <input type='time' value={time} onChange={onTimeChange} className="input" />
                </label>
                <label className='label time-label'>
                    <input type='number' defaultValue={interval} onChange={onSetInterval} className='input' />
                    minutes
                </label>


            </div>
        </div>
    )
}

export default WritingInputs;