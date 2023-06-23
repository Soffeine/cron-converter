import { useState } from "react";
import "./Form.css";
import RadioContainer from "../Radio-container/RadioContainer";
import WritingInputs from "../Writing-inputs/WritingInputs";
import ButtonsContainer from "../Buttons/ButtonsContainer";
import { useSelector } from "react-redux";

function Form() {

    const [cronValue, setCronValue] = useState('');

    const intervalCron = useSelector(state => state.interval.cronValue);





  //   *      *   *    *     *
  // минуты часы день месяц день-недели 

    const onSave = () => { 
        console.log(intervalCron);
        setCronValue(intervalCron);
    };


    return (
        <form className='form'>
            <div className='fields'>
                <RadioContainer />
                <WritingInputs />
            </div>
            <ButtonsContainer onSave={onSave} />
            <input type='text' value={cronValue} className='input cron-input' onChange={(e) => setCronValue(e.target.value)} />
        </form>
    )
}

export default Form;