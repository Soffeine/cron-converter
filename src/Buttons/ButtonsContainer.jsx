import "./ButtonsContainer.css"

function ButtonsContainer({onSave}) {
    return (
        <div className='buttons'>
            <button type='button' className='button'>Load</button>
            <button type='button' onClick={onSave} className='button'>Save</button>
        </div>
    )
}

export default ButtonsContainer;