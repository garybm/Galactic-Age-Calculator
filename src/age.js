
  export class userDate {
  constructor(month, date, year) {
    this.month = month;
    this.date = date;
    this.year = year;
  }

   checkArgs() {
    if ((isNaN(this.month) === false) && (isNaN(this.date) === false) && (isNaN(this.year) === false)) {
      return "true";
    } else {
      return "false";
    }
  }

  checkMin() {
    if (( this.month !== 0 ) && ( this.date !== 0 ) && ( this.year !== 0 )) {
      return "input non-zero";
    }
  }

  checkMaxDays() {
    if (this.date > 31) {
      return 'date exceeds 31';
    }
  }

  checkMaxMonths() {
    if (this.month > 12) {
      return 'month exceeds 12';
    }
  }
//DO NOT need this funtion for AGE calculation.
  getDay() {
    const days = ["Sunday", "Monday", "Tuesady", "Wednesday", "Thursday", "Friday", "Saturday"]
    const validMonth = (this.month - 1)
    const newDate = new Date(this.year, validMonth, this.date);
    const dayIndex = newDate.getDay();
    const dayOfWeek = days[dayIndex];
    return dayOfWeek;
  }
}

export function dayConvert(date) {
  const dateArray = date.split("/");
  const inputDate = new userDate (parseInt(dateArray[0]), parseInt(dateArray[1]), parseInt(dateArray[2]));
  console.log(inputDate);
  console.log(inputDate.checkMin());
  console.log(inputDate.checkArgs());
  if (inputDate.checkArgs() === "true") {
    if (inputDate.checkMin() === "input non-zero") {
      if (inputDate.checkMaxMonths() !== 'month exceeds 12'){
        if (inputDate.checkMaxDays() !== 'date exceeds 31') {
          const dayOfWeek = inputDate.getDay();
          return dayOfWeek;
        } else {
          alert ("Something went wrong. Please enter a valid day of the month!")
        }
      } else {
        alert("Something went wrong. Please enter a valid month!");
      }
    } else {
      alert("Something went wrong. Please make sure you entered a date in MM/DD/YYYY format!");
    }
  } else {
    alert("Something went wrong. Please make sure you entered only numbers!");
  }
}


//Function to calculate the AGE

  function getAge(dateString) {
      const today = new Date();
      const birthDate = new Date(dateString);
      let age = today.getFullYear() - birthDate.getFullYear();
      const month = today.getMonth() - birthDate.getMonth();
      if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
          age--;
      }
      return age;
  }

  console.log('age: ' + getAge("1984/06/17"));

  //Mercury Age
  const mercuryAge = getAge(dateString) / .24;
  return Math.round(mercuryAge);

  //Venus
  const venusAge = getAge(dateString) / .62;
  return Math.round(venusAge);

  //Mars

  const marsAge = getAge(dateString) / 1.88;
  return Math.round(marsAge);

  //Jupiter
  const jupiterAge = getAge(dateString) /11.86;
  return Math.round(jupiterAge);












  console.log('age: ' + getAge("1984/06/17"));
