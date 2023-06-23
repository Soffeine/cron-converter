import "./WritingInputs.css";
import { useDispatch, useSelector } from "react-redux";
import { selectDayAction } from "../store/dayReducer";
// import { useEffect } from "react";

function WritingInputs({ time, timeInterval, onTimeChange, onTimeIntervalChange }) {

    const dispatch = useDispatch();

    const day = useSelector(state => state.day.day);
    
    const selectDay = (e) => {
        const selectedDay = e.target.value
        dispatch(selectDayAction(selectedDay));
    }

    // useEffect(() => {
    //     console.log(cronValue);
    // }, [cronValue]);
    return (
        <div className='writing-inputs'>
            <select className='select' value={day} onChange={selectDay} >
                <option value='Monday'>Monday</option>
                <option value='Tuesday'>Tuesday</option>
                <option value='Wednesday'>Wednesday</option>
                <option value='Thursday'>Thursday</option>
                <option value='Friday'>Friday</option>
                <option value='Saturday'>Saturday</option>
                <option value='Sunday'>Sunday</option>
            </select>
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