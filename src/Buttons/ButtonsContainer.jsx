import "./ButtonsContainer.css"

function ButtonsContainer({onSave, onLoad}) {
    return (
        <div className='buttons'>
            <button type='button' onClick={onLoad} className='button'>Load</button>
            <button type='button' onClick={onSave} className='button'>Save</button>
        </div>
    )
}

export default ButtonsContainer;