import "./WritingInputs.css";
import { useDispatch, useSelector } from "react-redux";
import { selectWeekDay } from "../store/dayReducer";

function WritingInputs( { time, timeInterval, onTimeChange, onTimeIntervalChange }) {

    const dispatch = useDispatch();

    const day = useSelector(state => state.day);
    const cronValue = useSelector(state => state.cronValue);

    const selectWDay = (day) => {
        dispatch(selectWeekDay(day));
    }

    return (
        <div className='writing-inputs'>
            <select className='select' value={day} onChange={selectWDay} >
                <option value='Monday'>Monday</option>
                <option value='Tuesday'>Tuesday</option>
                <option value='Wednesday'>Wednesday</option>
                <option value='Thursday'>Thursday</option>
                <option value='Friday'>Friday</option>
                <option value='Saturday'>Saturday</option>
                <option value='Sunday'>Sunday</option>
            </select>
            <p>{day}</p>
            <div className='time-setter'>
                <label className='label time-label'>
                    At
                    <input type='text' value={time} onChange={onTimeChange} className="input" />
                </label>
                <label className='label time-label'>
                    <input type='number' defaultValue={timeInterval} onChange={onTimeIntervalChange} className='input' />
                    minutes
                </label>


            </div>
        </div>
    )
}
  
  export default WritingInputs;