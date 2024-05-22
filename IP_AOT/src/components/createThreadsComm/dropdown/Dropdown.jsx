import { useState,useRef, useEffect } from 'react';
import '../../editor/Editor.css'
import { IoMdArrowDropdown } from "react-icons/io";

const Dropdown = ({ title, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
  }

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="text-white px-4 py-2 rounded-[10px] focus:outline-none dropdown-btn"
        
      >
        <div  className="flex items-center justify-center">
            <div className={`icon-dropdown ${isOpen ? 'rotate-180' : ''}`}>
                <IoMdArrowDropdown />
            </div>
            {selectedOption || title}
        </div>
      </button>
      {isOpen && (
        <div className="absolute shadow-md top-full left-0 rounded-[10px] z-10 dropdown-btn ">
          <ul className="w-full text-center">
            {options.map((option, index) => (
              <li key={index} className="w-full py-2 px-4 hover:bg-custom222233 cursor-pointer" onClick={() => handleOptionSelect(option)}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
