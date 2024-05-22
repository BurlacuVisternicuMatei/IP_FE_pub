import './CommunityHomePage.css';
import Button from '../button';
import Dropdown from '../common/dropDown';
import { FaPlus } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import {FaAnglesDown} from "react-icons/fa6";
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";

function CommunityHomePage(){


    function onChangeCommunity(event) {
        const selectedOptionName = event.target.options[event.target.selectedIndex].text;
        alert(selectedOptionName);
      }


    return (
    <div className='CommunityHomePage'>
        <Link to="/createcommunity">
         <Button name="Create Community" icon={<FaPlus size={30}/>} />
        </Link>
        <Link to="/communities">
            <Button name="All Comunities" icon={<FaPeopleGroup size={30}/>} />
        </Link>
        <Dropdown name={"My Communities"} icon={<FaAnglesDown size={30}/>} />
        <Dropdown name={"Followed Communities"} icon={<FaAnglesDown size={30}/>}/>
    </div>
    );
}

export default CommunityHomePage;
