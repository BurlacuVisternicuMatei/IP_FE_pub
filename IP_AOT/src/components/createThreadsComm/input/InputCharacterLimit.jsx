import React, { useState } from 'react';

const InputWithCharacterLimit = ({ placeholder,withCount,handleInput, showError }) => {
  const [text, setText] = useState('');
  const maxLength = 100;
  const maxLengthTag = 20;
  const handleChange = (event) => {
    const inputText = event.target.value;
    if (placeholder=="Title" && inputText.length <= maxLength) {
      setText(inputText);
      handleInput(text);
    } 
    if(placeholder=="Tag" && inputText.length<=maxLengthTag){
      setText(inputText);
      handleInput(inputText);
    }
    
  };

  return (
    <div className="flex flex-col">
        <div className={`flex flex-row w-full px-4 py-2 rounded-[10px] ${placeholder === "Title" ? "bg-[#2b2b3e]" : "bg-[#222233]"} text-white placeholder-gray-500 border-transparent focus:border-[#222233]`} style={showError ? {border: '2px solid red', borderRadius: '10px', backgroundColor: '#222233',boxSizing: 'border-box'}:{}}>
          <input
              type="text"
              placeholder={placeholder}   
              value={text}
              onChange={handleChange}
              className={`w-full focus:outline-none py-[4px] ${placeholder==='Title' ? "bg-[#2b2b3e]" : "bg-[#222233]"}`}
              // style={{ boxSizing: 'border-box', borderWidth: '2px', borderStyle: 'solid', borderColor: showError ? 'red' : 'transparent' }}
          />
          {withCount &&
          <div className="flex items-center pl-5 text-gray-500">
        
              {placeholder=="Title" ? <div>{text.length}/{maxLength}</div> : <div>{text.length}/{maxLengthTag}</div>}
        
          </div>}
        </div>
        <div>
        {showError && 
          <div className="absolute text-[red] text-[12px] italic">
            There already is a tag with this name!!
          </div>

        }
        </div>
    </div>
  );
};

export default InputWithCharacterLimit;
