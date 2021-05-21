const DateForm = () => {
  const month = ["January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"];
  const day = getDays();
  const year = getYears();

  return (
    <form className="big-margin-bottom">
      <div id="date-container" className="margin-bottom">
        <select id="month-select">{month.map(createOption)}</select>
        <select id="day-select">{day.map(createOption)}</select>
        <select id="year-select">{year.map(createOption)}</select>
      </div>
      <div className="small-text big-margin-bottom">
        You need to enter the date you were born
      </div>
      <div className="small-text margin-bottom">
        Use your own birthday, even if this account is for a business, 
        a pet, or something else
      </div>
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

export default DateForm;