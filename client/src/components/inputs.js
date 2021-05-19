import React, {useRef} from 'react';

const DefaultInput = ({type, value, onChange, classOfContainer, placeholder}) => {
  const placeholderRef = useRef();
  const inputRef = useRef();

  return (
    <div className={`position-relative ${classOfContainer}`}>
      <input 
        type={type}
        value={value}
        className="default-input text-up"
        ref={inputRef}
        onChange={(e) => {
          onChange(e.target.value);
          manipulatePlaceholderPosition(placeholderRef.current, inputRef.current);
          }
        }
      />
      <span className="placeholder position-down" ref={placeholderRef}>
        {placeholder}
      </span>
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


function manipulatePlaceholderPosition(placeholder, input) {
  const mustMovePlaceholder = verifyIfMustMovePlaceholder(input, placeholder);
  if(mustMovePlaceholder.to === "up") {
    moveInputPlaceholderUp(placeholder);
    moveInputTextDown(input);
  }
  if(mustMovePlaceholder.to === "down") {
    moveInputPlaceholderDown(placeholder);
    moveInputTextUp(input)
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

const moveInputTextUp = input => {input.className = "default-input text-up";}
const moveInputTextDown = input => {input.className = "default-input text-down";}

export {DefaultInput};