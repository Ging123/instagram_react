import {useState} from 'react';
import {useHistory} from 'react-router-dom';

  const month = ["January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"];
  const day = getDays();
  const year = getYears();

const DateForm = () => {

  const history = useHistory();
  const [hasAnErro, setErro] = useState("");

  return (
    <form 
      className="big-margin-bottom"
      onSubmit={(e) => {
        e.preventDefault();
        validateDate(setErro, history);
      }}
    >
      <div id="date-container" className="margin-bottom">
        <select  id="month-select">{month.map(createOption)}</select>
        <select  id="day-select">{day.map(createOption)}</select>
        <select  id="year-select">{year.map(createOption)}</select>
      </div>
      <div className="small-text big-margin-bottom">
        You need to enter the date you were born
      </div>
      <div className="small-text margin-bottom">
        Use your own birthday, even if this account is for a business, 
        a pet, or something else
      </div>
      
      {hasAnErro !== "" && <p className="erro-text margin-bottom">{hasAnErro}</p>}

      <input 
        type="submit"
        value="next"
        className="main-button"
      />
    </form>
  )
}


const createOption = (element, index) => {
  return <option value={index} key={index}>{element}</option>;
}

function getDays() {
  const maxDays = 30;// in the end 31
  const days = new Array(maxDays);
  for(let i = 0; i <= maxDays; i++) { days[i] = i + 1; }
  return days;
}

function getYears() {
  const currentYear = getCurrentYear();
  let nextYear = currentYear - 120;
  const years = new Array(120);
  for(let i = 0; i <= 120; i++) {
    years[i] = nextYear++;
  }
  return years.reverse();
}

function getCurrentYear() {
  const d = new Date();
  const year = d.getFullYear();
  return year;
}


function getCurrentMonth() {
  const d = new Date();
  return d.getMonth();
}


function getCurrentDay() {
  const d = new Date();
  return d.getDate();
}


function validateDate(setErro, history) {
  const indexOfDay = document.getElementById("day-select").value;
  const indexOfMonth = document.getElementById("month-select").value;
  const indexOfYear = document.getElementById("year-select").value;
  const erroInFrontEnd = validatetAge(indexOfDay, indexOfMonth, indexOfYear);
  if(erroInFrontEnd === "") return history.push("/");
  setErro(erroInFrontEnd);
}


function validatetAge(indexOfDay, indexOfMonth, indexOfYear) {
  const minYear = getCurrentYear() - 13;
  if(minYear < year[indexOfYear]) return "you have to be older than 13";
  if(minYear > year[indexOfYear]) return "";
  if(minYear === year[indexOfYear]) return validateMonth(indexOfDay, indexOfMonth);
}


function validateMonth(indexOfDay, indexOfMonth) {
  const currentMonth = getCurrentMonth();
  if(currentMonth > indexOfMonth) return "";
  if(currentMonth < indexOfMonth) return "you have to be older than 13";
  if(currentMonth === indexOfMonth) {return validateDay(indexOfDay);}
}


function validateDay(indexOfDay) {
  console.log('oikj')
  const currentDay = getCurrentDay();
  if(currentDay >= indexOfDay) return "";
  return "you have to be older than 13";
}

export default DateForm;