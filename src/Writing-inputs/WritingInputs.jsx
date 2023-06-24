import "./WritingInputs.css";
import DayOfWeekSelect from "../DayOfWeekSelect/DayOfWeekSelect";
import MonthSelect from "../MonthSelect/MonthSelect";
import TimeSetter from "../TimeSetter/TimeSetter";
import DateInput from "../DateInput/DateInput";

function WritingInputs() {

    return (
        <div className='writing-inputs'>

            <DateInput />
            <DayOfWeekSelect />
            <MonthSelect />
            <TimeSetter />

        </div>
    )
}

export default WritingInputs;