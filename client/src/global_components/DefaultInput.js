import React, {useRef} from 'react';

function setInputClass(inputType) {
  if(inputType !=="password") return "default-input text-up";
  return "default-input text-up input-password";
}

const DefaultInput = ({type, value, onChange, classOfContainer, placeholder}) => {
  const placeholderRef = useRef();
  const inputRef = useRef();
  const showAndHideRef = useRef();
  const inputClass = setInputClass(type);

  return (
    <div className={`position-relative ${classOfContainer}`}>
      <input 
        type={type}
        value={value}
        className={inputClass}
        ref={inputRef}
        onChange={(e) => {
          onChange(e.target.value);
          manipulatePlaceholderPosition(placeholderRef.current, inputRef.current);
          if(type === "password") {
            manipulateShowAndHideVisibility(showAndHideRef.current, inputRef.current);
          }  
        }
        }
      />
      <span className="placeholder position-down" ref={placeholderRef}>
        {placeholder}
      </span>
      {type === "password" && 
        <div 
          ref={showAndHideRef} 
          className="show-and-hide invisible" 
          onClick={() => manipulatePasswordVisibility(showAndHideRef.current,
          inputRef.current)}
          >Show
        </div>
      }
    </div>
  )
}

DefaultInput.defaultProps = {
  type:"text",
  classOfContainer:"",
  onChange:() => "",
  value:"",
  placeholder:""
}


//FUNCTIONS TO MANIPULATE PLACEHOLDER MOVES
function manipulatePlaceholderPosition(placeholder, input) {
  const mustMovePlaceholder = verifyIfMustMovePlaceholder(input, placeholder);
  if(mustMovePlaceholder.to === "up") {
    moveInputPlaceholderUp(placeholder);
    moveInputTextDown(input);
  }
  if(mustMovePlaceholder.to === "down") {
    moveInputPlaceholderDown(placeholder);
    moveInputTextUp(input);
  }
}


function verifyIfMustMovePlaceholder(input, placeholder) {
  if(input.value !== "") return verifyIfPlaceholderMustUp(placeholder);
  return verifyIfPlaceholderMustDown(placeholder);
}

function verifyIfPlaceholderMustUp(placeholder) {
  if(placeholder.className === "placeholder position-up") return {to:""}
  return {to:"up"}
}

function verifyIfPlaceholderMustDown(placeholder) {
  if(placeholder.className === "placeholder position-down") return {to:""}
  return {to:"down"}
}


const moveInputPlaceholderUp = (placeholder) => {
  placeholder.className = "placeholder position-up";
};

const moveInputPlaceholderDown = (placeholder) => {
  placeholder.className = "placeholder position-down";
}

const moveInputTextUp = (input) => {
  if(input.type !== "password") return input.className = "default-input text-up";
  input.className = "default-input text-up input-password"
}

const moveInputTextDown = (input) => {
  if(input.type !== "password") return input.className = "default-input text-down";
  input.className = "default-input text-down input-password";
}


//FUNCTION TO MANIPULATE SHOW AND HIDE VISIBILITY FROM PASSWORD TYPES
function manipulateShowAndHideVisibility(showOrHide, input) {
  if(input.value !== "" && showOrHide.className !== "show-and-hide") {
    showOrHide.className = "show-and-hide";
  }
  if(input.value === "") showOrHide.className = "show-and-hide invisible";
}


//FUNCTIONS TO MANIPULATE THE PASSWORD VISIBILITY
function manipulatePasswordVisibility(showAndHide, input) {
  if(input.type === "password") return turnPasswordVisible(showAndHide, input);
  hidePassoword(showAndHide, input);
}

function turnPasswordVisible(showAndHide, input) {
  input.type = "text";
  showAndHide.textContent = "Hide";
}

function hidePassoword(showAndHide, input) {
  input.type = "password";
  showAndHide.textContent = "Show";
}
 

export default DefaultInput;