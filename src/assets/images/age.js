
class YourBirthday {

  constructor(){
    this.month = month;
    this.day = day;
    this.year = year;
    }
  }

  const newBirthday = new YourBirthday ();
  console.log(newBirthday);


  function getAge(dateString) {
      var today = new Date();
      var birthDate = new Date(newBirthday);
      var age = today.getFullYear() - birthDate.getFullYear();
      var month = today.getMonth() - birthDate.getMonth();
      if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
          age--;
      }
      return age;
  }

  console.log('age: ' + getAge("1984/06/17"));
