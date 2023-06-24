import { setPeriodAction } from "../store/periodReducer";
import "./RadioContainer.css";
import { useDispatch } from "react-redux";



function RadioContainer(isDisabled) {

    const dispatch = useDispatch();

    const onPeriodChange = (e) => {
        const period = e.target.value;
        dispatch(setPeriodAction(period));
    };

    return (
        <div className='radio-inputs'>
            <label className='label'>
                <input type='radio' name='choice' value="monthly" id="monthly" onChange={onPeriodChange} />
                Monthly
            </label>
            <label className='label'>
                <input type='radio' name='choice' value="weekly" id="weekly" onChange={onPeriodChange} />
                Weekly
            </label>
            <label className='label'>
                <input type='radio' name='choice' value="daily" id="daily" onChange={onPeriodChange} />
                Daily
            </label>
            <label className='label'>
                <input type='radio' name='choice' value="custom" id="custom" className='checkbox' onChange={onPeriodChange} />
                Custom
            </label>
        </div>
    )
};

export default RadioContainer;