import { useState } from "react";
import "./Form.css";
import RadioContainer from "../Radio-container/RadioContainer";
import WritingInputs from "../Writing-inputs/WritingInputs";
import ButtonsContainer from "../Buttons/ButtonsContainer";
import { useDispatch, useSelector } from "react-redux";
import { resetDateAction } from "../store/dateReducer";
import { resetDayAction } from "../store/dayReducer";
import { resetIntervalAction } from "../store/intervalReducer";
import { resetMonthAction } from "../store/monthReducer";
import { resetTimeAction } from "../store/timeReducer";


function Form() {

    const dispatch = useDispatch();

    const [cronString, setCronString] = useState('');

    const interval = useSelector(state => state.interval.interval);
    const intervalCron = useSelector(state => state.interval.cronValue);

    const time = useSelector(state => state.time.time);
    const timeCron = useSelector(state => state.time.cronValue);

    const date = useSelector(state => state.date.date);
    const dateCron = useSelector(state => state.date.cronValue);

    const month = useSelector(state => state.month.month)
    const monthCron = useSelector(state => state.month.cronValue);

    const day = useSelector(state => state.day.day);
    const dayCron = useSelector(state => state.day.cronValue);

    const fullCronString = `${intervalCron} ${timeCron} ${dateCron} ${monthCron} ${dayCron}`;

    //   *      *    *      *        *
    // минуты часы  день  месяц  день-недели 

    const onSave = () => {
        setCronString(fullCronString);
    }

    const onLoad = () => {
        setCronString('');
        dispatch(resetDateAction(date));
        dispatch(resetDayAction(day));
        dispatch(resetIntervalAction(interval));
        dispatch(resetMonthAction(month));
        dispatch(resetTimeAction(time));
    }


    return (
        <form className='form'>
            <div className='fields'>
                <RadioContainer />
                <WritingInputs />
            </div>
            <ButtonsContainer onSave={onSave} onLoad={onLoad} />
            <input type='text' value={cronString} className='input cron-input' onChange={(e) => setCronString(e.target.value)} />
        </form>
    )
}

export default Form;