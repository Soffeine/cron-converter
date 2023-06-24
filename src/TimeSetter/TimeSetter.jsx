import './TimeSetter.css';
import { useDispatch, useSelector } from "react-redux";
import { setIntervalAction } from "../store/intervalReducer";
import { setTimeAction } from "../store/timeReducer";

function TimeSetter() {
    
    const dispatch = useDispatch();

    const interval = useSelector(state => state.interval.interval);
    const time = useSelector(state => state.time.time);

    const onSetInterval = (e) => {
        const newInterval = e.target.value;
        dispatch(setIntervalAction(newInterval));
    }

    const onTimeChange = (e) => {
        const newTime = e.target.value;
        dispatch(setTimeAction(newTime));
    }

    return (
        <div className='time-setter'>
            <label className='label time-label'>
                At
                <input type='time' value={time} onChange={onTimeChange} className="input" />
            </label>
            <label className='label time-label'>
                <input type='number' min="1" defaultValue={interval} onChange={onSetInterval} className='input' />
                minutes
            </label>
        </div>
    )
}

export default TimeSetter;