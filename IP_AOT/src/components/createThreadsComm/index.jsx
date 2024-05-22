import { useState, useEffect,useRef } from 'react';
import { useNavigate } from 'react-router-dom';
<link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'></link>
import '../editor/Editor.css';
import Tiptap from '../editor/Editor';
import Dropdown from './dropdown/Dropdown';
import InputWithCharacterLimit from './input/InputCharacterLimit';
import ImagesUpload from './uploadImages/ImagesUpload';
import { CiCirclePlus } from "react-icons/ci";
import "./style.css";
import Popup from './popup/Popup';


const CreateMenu = ( {pageName} ) => {
  const crCom = ["Create community"];
  const crTh = ["Create thread"];
  const comms = ["comm1", "comm2", "comm3"];
  const [selectedOption, setSelectedOption] = useState("Text");
  const [selectedPage, setSelectedPage] = useState(pageName);
  const [showPopup, setShowPopup] = useState(false);
  const [popupType,setPopupType] = useState("");
  const [selectedCommunities, setSelectedCommunities] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const navigateTo = useNavigate();

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSelectPage = (option) => {
    setSelectedPage(option);
    if (option === "Create thread") {
      navigateTo("/createthread");
      setSelectedOption("Text");
    } else if (option === "Create community") {
      navigateTo("/createcommunity");
    }
  };
  const handleSelectedOptionsComm = (selectedOptions) => {
    // console.log('Aici sunt selected options:', selectedOptions);
    setSelectedCommunities(selectedOptions);
  }
  const handleSelectedOptionsTags = (selectedOptions) => {
    // console.log('Aici sunt selected options:', selectedOptions);
    setSelectedTags(selectedOptions);
  }
  useEffect(() => {
    // console.log("Selected Page:", selectedPage);
  }, [selectedPage]);

  const togglePopup = (type) => {
    setShowPopup(true);
    setPopupType(type);
  };
  const closePopup = () => {
    setShowPopup(false);
  };
  const handleCreateCommButton = () => {
    setSelectedPage("Create community");
    navigateTo("/createcommunity");
    setShowPopup(false);
  }

  return (
    <div className="w-2/3 bg-[#212130]">
      {selectedPage === "Create thread" ? (
  
        <div className="create-menu">
          
            <Dropdown title="Create thread" options={crCom} onSelect={handleSelectPage} />
            
          <div className="mt-12 w-full">
            <InputWithCharacterLimit placeholder="Title" withCount={true} />
          </div>
          <div className="flex flex-col justify-between	md:flex-row w-full py-6">
            <div className="flex flex-row w-full bg-[#2b2b3e] rounded-[10px] py-3 mr-3 cursor-pointer" onClick={()=>togglePopup('comm')} >
              <div className="flex items-center px-2">
                <CiCirclePlus />
              </div>
              {selectedCommunities.length == 0 ? <div>Add thread to a community</div> :<div> See selected communities</div>}
              
            </div>
            <div className="flex flex-row w-full bg-[#2b2b3e] rounded-[10px] py-3 cursor-pointer" onClick={()=>togglePopup('tag')}>
            <div className="flex items-center px-2">
                <CiCirclePlus />
              </div>
              {selectedTags.length == 0 ? <div>Add tags </div> : <div>See selected tags</div>}
            </div>
          </div>
          <div className="flex w-full mb-3">
            <div className="flex">
              <div
                className={`px-4 py-2 mr-2 bg-[#222233] cursor-pointer ${selectedOption === "Text" ? 'border-b border-[#4246B2]': ''}   `}
                onClick={() => handleSelect('Text')}
              >
                Text
              </div>
              <div
                className={`px-4 py-2 bg-[#222233]  cursor-pointer ${selectedOption === "Image" ? 'border-b border-[#4246B2]' : ''} ` }
                onClick={() => handleSelect('Image')}
              >
                Image
              </div>
          </div>
          </div>
          {selectedOption === "Text" ? <Tiptap /> : <ImagesUpload />}
          <div className='flex w-full mt-3'>
            <div className="w-0 md:w-1/2">

            </div>
            <button className="w-full md:w-1/2 bg-blue-500 focus:outline-none hover:bg-blue-700 text-white font-bold py-2 px-4 rounded bg-[#2b2b3e]">
              Post
            </button>
          </div>
          {showPopup && (    
            <div>
              <Popup defaultComm={selectedCommunities} defaultTags={selectedTags} type={popupType} closePopup={closePopup} handleCreateCommButton={handleCreateCommButton} handleSelectedOptionsComm={handleSelectedOptionsComm} handleSelectedOptionsTags={handleSelectedOptionsTags}/>
            </div>
          )}
        </div>
      ) : (
        <div className="create-menu">
            <Dropdown title="Create community" options={crTh} onSelect={handleSelectPage} />
          
          <div className="mt-12 w-full">
            <InputWithCharacterLimit placeholder="Title" withCount={true} />
          </div>
          <div className="flex w-full mt-3">
            <Tiptap />
          </div>
          <div className='flex w-full mt-3'>
            <div className="w-0 md:w-1/2">

            </div>
            <button className="w-full md:w-1/2 bg-blue-500 focus:outline-none hover:bg-blue-700 text-white font-bold py-2 px-4 rounded bg-[#2b2b3e]">
              Create
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateMenu;
