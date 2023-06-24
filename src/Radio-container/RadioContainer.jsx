import RadioInput from "../RadioInput/RadioInput";
import "./RadioContainer.css";


function RadioContainer() {

    return (
        <div className='radio-inputs'>
            <RadioInput periodValue="Monthly" />
            <RadioInput periodValue="Weekly" />
            <RadioInput periodValue="Daily" />
            <RadioInput periodValue="Custom" />
        </div>
    )
};

export default RadioContainer;