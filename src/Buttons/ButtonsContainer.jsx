import Button from "../Button/Button";
import "./ButtonsContainer.css"

function ButtonsContainer({ onSave, onLoad }) {
    return (
        <div className='buttons'>
            <Button name="Load" onClick={onLoad} />
            <Button name="Save" onClick={onSave} />
        </div>
    )
}

export default ButtonsContainer;