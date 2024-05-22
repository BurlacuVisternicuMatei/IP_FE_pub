import "./Button.css";
import Icon from '../icon'

function Button({icon, name, onClick}) {
    return <button className="flex pl-5 w-60 h-20 items-center hover:bg-gray mb-4 Button" onClick={onClick}>
        <span>{icon}</span>
        <span className="ml-5">{name}</span>
    </button>
    
}
export default Button;
