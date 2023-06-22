import "./WritingInputs.css";

function WritingInputs( {day, time, timeInterval, onDayChange, onTimeChange, onTimeIntervalChange}) {
    return (
        <div className='writing-inputs'>
            <select className='select' value={day} onChange={onDayChange} >
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
                <option>Saturday</option>
                <option>Sunday</option>
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