import './Button.css';

function Button ({name, onClick}) {
    return (
        <button type='button' onClick={onClick} className='button'>{name}</button>
    )
}

export default Button;