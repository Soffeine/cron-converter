import { useState } from 'react';
import './App.css';

function App() {
  const [checkbox, setCheckbox] = useState('');
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');
  const [timeInterval, setTimeInterval] = useState(0);
  const [cronValue, setCronValue] = useState('');

  // изменение значения радиочекбокса

  // изменение значения дня недели

  // изменение значения времени
  const onTimeChange = (e) => {
    const inputTime = e.target.value;
    const formattedTime = formatTime(inputTime);
    setTime(formattedTime);
  };

  const formatTime = (inputTime) => {
    const numericTime = inputTime.replace(/[^\d]/g, '');
    let formattedTime = '';
    for (let i = 0; i < numericTime.length; i += 2) {
      if (i !== 0) {
        formattedTime += ':';
      }
      formattedTime += numericTime.slice(i, i + 2);
    }
    return formattedTime;
  };

  const validateTime = (inputTime) => {
    const timeRegex = /^([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/;
    return timeRegex.test(inputTime);
  };

  //добавить в валидацию времени
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateTime(time)) {
      // Действия при успешной валидации времени
      console.log('Время введено корректно:', time);
    } else {
      // Действия при ошибке валидации времени
      console.log('Некорректный формат времени:', time);
    }
  };

  // изменение значения временного интервала

  return (
    <div className="App">
      <section className='schedule'>
        <form className='form'>
          <div className='radio-inputs'>
            <input type='radio' name='choice' value="monthly" id="monthly" />
            <input type='radio' name='choice' value="weekly" id="weekly" />
            <input type='radio' name='choice' value="daily" id="daily" />
            <input type='radio' name='choice' value="custom" id="custom" />
          </div>
          <div className='writing inputs'>
            <select>
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
              <option>Saturday</option>
              <option>Sunday</option>
            </select>
            <div className='time-setter'>
              <input type='text' value={time} onChange={onTimeChange} className="time-setter__input" />
              <input type='number' value={timeInterval} onChange={(e) => setTimeInterval(e.target.value)} />

            </div>
          </div>
          <div className='buttons'>
            <button />
            <button />
          </div>
          <input type='text' value={cronValue} className='input' onChange={(e) => setCronValue(e.target.value)}/>
        </form>
        <div className='inputs'></div>
      </section>
    </div>
  );
}

export default App;
