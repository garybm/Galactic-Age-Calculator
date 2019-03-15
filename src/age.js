
class YourBirthday {

  constructor(){
    this.month = month;
    this.day = day;
    this.year = year;
    }
  }
  const newBirthday = new YourBirthday ();



  findAge() {
    let today = new Date();
    let birthday = newDate (newBirthday);
    let age = today.getFullYear() - newBirthday.getFullYear();
    let month = today.getMonth() - newBirthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < newBirthday.getDate())) {
      age--;
    }
    return age;
  }
