import { useState } from "react"
import Button from "../../button"
import { MdAccountCircle } from "react-icons/md";


export default function Dropdown(props) {

    const [dropDownStatus, setDropDownStatus] = useState(false);

    return (
        <div>
            <Button icon={props.icon} name={props.name} onClick={()=> setDropDownStatus((status) => !status)}>Lista</Button>
            {
                dropDownStatus &&
                <div className="flex flex-col">
                    <Button icon={<MdAccountCircle size={30}/>}></Button>
                    <Button icon={<MdAccountCircle size={30}/>}></Button>
                    <Button icon={<MdAccountCircle size={30}/>}></Button>
                    <Button icon={<MdAccountCircle size={30}/>}></Button>
                    <Button icon={<MdAccountCircle size={30}/>}></Button>
                    <Button icon={<MdAccountCircle size={30}/>}></Button>
                    <Button icon={<MdAccountCircle size={30}/>}></Button>
                    <Button icon={<MdAccountCircle size={30}/>}></Button>
                </div>
            }
        </div>
    )
} 