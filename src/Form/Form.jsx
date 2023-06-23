import { useState } from "react";
import "./Form.css";
import RadioContainer from "../Radio-container/RadioContainer";
import WritingInputs from "../Writing-inputs/WritingInputs";
import ButtonsContainer from "../Buttons/ButtonsContainer";

function Form() {
    const [period, setPeriod] = useState('');
    const [time, setTime] = useState('');
    const [cronValue, setCronValue] = useState('');

    //  // изменение значения периода времени
    // const onPeriodChange = (e) => {
    //     setPeriod(e.target.value);
    // }

    // // изменение значения времени
    // const onTimeChange = (e) => {
    //     const inputTime = e.target.value;
    //     const formattedTime = formatTime(inputTime);
    //     setTime(formattedTime);
    // };



    // const formatTime = (inputTime) => {
    //     const numericTime = inputTime.replace(/[^\d]/g, '');
    //     let formattedTime = '';
    //     for (let i = 0; i < numericTime.length; i += 2) {
    //         if (i !== 0) {
    //             formattedTime += ':';
    //         }
    //         formattedTime += numericTime.slice(i, i + 2);
    //     }
    //     return formattedTime;
    // };

    // const validateTime = (inputTime) => {
    //     const timeRegex = /^([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/;
    //     return timeRegex.test(inputTime);
    // };

    //добавить в валидацию времени
    const handleSubmit = (event) => {
        // event.preventDefault();
        // if (validateTime(time)) {
        //     // Действия при успешной валидации времени
        //     console.log('Время введено корректно:', time);
        // } else {
        //     // Действия при ошибке валидации времени
        //     console.log('Некорректный формат времени:', time);
        // }
    };


    return (
        <form className='form'>
            <div className='fields'>
                <RadioContainer />
                <WritingInputs />
            </div>
            <ButtonsContainer />
            <input type='text' value={cronValue} className='input cron-input' onChange={(e) => setCronValue(e.target.value)} />
        </form>
    )
}

export default Form;