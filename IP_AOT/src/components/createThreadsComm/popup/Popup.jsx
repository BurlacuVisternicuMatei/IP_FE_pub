import {useState, useRef, useEffect} from 'react'
import "./style.css";
import Search from '../search/Search.jsx'
import SearchTag from '../search/SearchTag.jsx'
import { FiXCircle } from "react-icons/fi";
import InputWithCharacterLimit from '../input/InputCharacterLimit.jsx';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";


const Popup = ({ type, closePopup, handleCreateCommButton, handleSelectedOptionsComm, handleSelectedOptionsTags, defaultComm, defaultTags }) => {
    const popupRef = useRef(null);
    const [selectedOptionsComm, setSelectedOptionsComm] = useState([]);
    const [selectedOptionsTags, setSelectedOptionsTags] = useState([]);
    const [showCreateNewTag, setShowCreateNewTag] = useState(false);
    const [showColorMenu, setShowColorMenu] = useState(false);
    const [selectedColor, setSelectedColor] = useState("#2b2b3e");
    const [newTagName, setNewTagName] = useState('tag name');
    const [showErrorTagName, setShowErrorTagName] = useState(false);
    const [showErrorSubmitTag, setShowErrorSubmitTag] = useState(false);

    useEffect(() => {
    }, [newTagName]);

    const colors = [
        "#3c603c",
        "#bdbd00",
        "#f3567180",
        "#ffffff80",
        "violet",
        "red",
        "#00000075",
        "#2b2b3e",
    ]
    const [tags,setTags] = useState([
        { title: 'programming', color: '#3c603c' },
        { title: 'sfaturi', color:'#bdbd00' },
        { title: 'secretariat', color: '#f3567180' },
        { title: 'ip', color: '#ffffff80' },
        { title: 'pa' , color: 'violet'},
        { title: 'asii' , color:'red'},
        { title: 'sgbd', color: '#00000075' },
    ]);

    const handleClickComm = (value) => {
        setSelectedOptionsComm(value);
    };
    useEffect(() => {
        // console.log(selectedOptionsComm);
    }, [selectedOptionsComm]);

    const handleClickTags = (value) => {
        setSelectedOptionsTags(prevOptions => value);
    };
    useEffect(() => {
        // console.log(selectedOptionsComm);
    }, [selectedOptionsComm]);

    useEffect(()=>{
        setShowErrorSubmitTag(false);
    },[newTagName])
    useEffect(()=> {
    },[showCreateNewTag])
    
      const handleSaveComm = () => {
        closePopup();
        // console.log("Selected communities:", selectedOptionsComm);
        handleSelectedOptionsComm(selectedOptionsComm);
      }

    const handleSaveTags = () => {
        closePopup();
        // console.log("Selected tags:", selectedOptionsTags);
        handleSelectedOptionsTags(selectedOptionsTags);
    }
    const handleCreateNewTag = () => {
        setShowCreateNewTag(!showCreateNewTag);
    }
    const handleChooseColor = () => {
        setShowColorMenu(!showColorMenu);
    }
    const handleColorSelection = (chosenColor) => {
        setSelectedColor(chosenColor);
    }
    const handleInput = (input) => {
        const trimmedInput = input.trim();

        if(tags.some(tag => tag.title === trimmedInput)){
            setShowErrorTagName(true);
            setNewTagName('tag name');
        } else {
            setShowErrorTagName(false);
            setNewTagName(input);
        }
    }
    const handleSubmitNewTag = () => {
        if(showErrorTagName == true || newTagName=="tag name" || newTagName==""){
            // console.log('eroare');
            setShowErrorSubmitTag(true);
        } else {
            // console.log('success');
            setShowErrorSubmitTag(false);
            setTags(prevTags => [...prevTags, { title: newTagName, color: selectedColor }]);
            setShowCreateNewTag(false);
            setNewTagName("tag name");
            setSelectedColor("#2b2b3e");
        }
    }
    return (
        <div className="popup-wrapper">
            
            <div className="popup">
                <div className="flex justify-between">
                    {type=='comm'?(
                        <h1>Add your thread to a community</h1>
                    ):(
                        <h1>Add tags to your thread</h1>
                    )}
                    <FiXCircle size={20} onClick={closePopup} className='text-[red] close-icon'/>
                </div>
                {type=='comm'? (
                    <div>
                        <div  className="flex w-full mt-[20px] mb-[20px]" style={{ border: '1px solid #222233', borderRadius: '10px', backgroundColor: '#222233' }} >
                            <Search defaultComm = {defaultComm} handleSelectedCommunities={handleClickComm}/>
                        </div>
                        <div className="flex-column">
                            <div className="flex pb-[20px]">
                                Didn't find the community you wanted? Create it yourself!
                            </div>
                            <div className="flex w-full justify-between ">
                                <div className="flex w-1/2 items-center justify-center p-[15px] cursor-pointer" onClick={handleCreateCommButton} style={{width: "fit-content", border: '1px solid #222233', borderRadius: '10px', backgroundColor: '#222233' }}>
                                    Create community
                                </div>
                                <div className="flex justify-end w-1/2">
                                    <div className="flex  items-center justify-center px-8 cursor-pointer" onClick={handleSaveComm} style={{ width: '100%', border: '1px solid #222233', borderRadius: '10px', backgroundColor: '#222233' }}>
                                        Save
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                    ):(
                        <div className="flex-column justify-between">
                        <div  className="flex w-full mt-[20px] mb-[20px]" style={{ border: '1px solid #222233', borderRadius: '10px', backgroundColor: '#222233' }} >
                            <SearchTag defaultTags = {defaultTags} handleSelectedTags={handleClickTags} listOfTags={tags}/>
                        </div>
                        <div className="flex-column justify-between">
                            <div className="flex pb-[20px]">
                                Didn't find the tag you wanted? Create it yourself!
                            </div>
                            <div className="flex justify-between">
                                <div className="flex flex-row  px-8 py-3 cursor-pointer" onClick={handleCreateNewTag} style={{ border: '1px solid #222233', borderRadius: '10px', backgroundColor: '#222233' }}>
                                    <div className="flex  items-center">
                                        Create new tag
                                    </div>
                                    <div className={`${showCreateNewTag ? 'rotate-180' : ''} flex items-center pl-[10px]`} >
                                        <IoMdArrowDropdown className="size-[20px]"/>
                                    </div>    
                                </div>
                                <div className={`${showCreateNewTag ?'hidden':'flex justify-center'} items-center px-8 py-3 cursor-pointer`} onClick={handleSaveTags} style={{ width: '50%', border: '1px solid #222233', borderRadius: '10px', backgroundColor: '#222233' }}>
                                    Save
                                </div>
                                <div className={`${showCreateNewTag ?'flex flex-row':'hidden'} items-center px-8 py-3 cursor-pointer`} onClick={handleSubmitNewTag} style={{ width: '50%', border: showErrorSubmitTag?'2px solid red': '1px solid #222233', borderRadius: '10px', backgroundColor: '#222233'} }>
                                    <div className="flex w-1/2" >
                                        Create tag:
                                    </div>
                                    <div className="flex w-full justify-center">
                                        <div className="flex flex-row  py-[5px] px-[8px] ml-[15px]" style={{ width: 'fit-content', border: '1px solid #222233', borderRadius: '20px', backgroundColor: `${selectedColor}` }}>
                                                <div className="flex items-center text-sm">
                                                    {newTagName}
                                                </div>
                                                <div className="flex items-center ml-[10px]">
                                                    <IoMdCloseCircle size="15px"/>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end w-full">
                                <div className={`w-fit ${showErrorSubmitTag ? 'flex ' : 'hidden'} text-[red] italic text-[12px]` }>
                                    Can't submit this tag!!
                                </div>
                            </div>
                            {showCreateNewTag && 
                                <div>
                                    <div className="pt-[20px] pb-[20px]" >
                                        <InputWithCharacterLimit placeholder="Tag" withCount={true} handleInput={handleInput} showError={showErrorTagName}/>
                                    </div>
                                    <div className={`flex ${showColorMenu ? 'w-full' : 'w-fit'} items-center justify-between px-8 `} style={{ border: '1px solid #222233', borderRadius: '10px', backgroundColor: '#222233' }}>
                                        <div className="flex w-full py-5"  onClick={handleChooseColor}>
                                            <div className="flex items-center cursor-pointer">
                                                Choose the background
                                            </div>
                                            <div
                                                    className="w-7 h-7 rounded-full ml-[10px] cursor-pointer"
                                                    style={{ backgroundColor: selectedColor }}
                                            />
                                        </div>
                                    
                                        {showColorMenu &&   
                                        <div className="flex justify-end w-full bg-[#222233]">
                                            {colors.map((color, index) => (
                                                <div
                                                    key={index}
                                                    className="w-7 h-7 rounded-full mr-[10px] cursor-pointer"
                                                    style={{ backgroundColor: color }}
                                                    onClick={() => handleColorSelection(color)}
                                                />
                                            ))}
                                        </div>
                                    }
                                    </div>
                                </div>
                            }
                        </div>
                     </div>
                    )
                }
            </div>  
        </div>
    )
}


export default Popup
