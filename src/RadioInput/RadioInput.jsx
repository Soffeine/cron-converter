import './RadioInput.css';
import { useDispatch } from "react-redux";
import { setPeriodAction } from "../store/periodReducer";


function RadioInput({ periodValue }) {

    const dispatch = useDispatch();

    const onPeriodChange = (e) => {
        const period = e.target.value;
        dispatch(setPeriodAction(period));
    };

    return (
        <label className='label'>
            <input type='radio' name='choice' value={periodValue} id={periodValue} onChange={onPeriodChange} />
            {periodValue}
        </label>
    )
}

export default RadioInput;