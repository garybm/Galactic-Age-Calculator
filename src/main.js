// import $ from 'jquery';
  import 'bootstrap';
  import 'bootstrap/dist/css/bootstrap.min.css';
  // import './css/styles.css';s
  import './sass/styles.scss';


   class Birthday {
    constructor(birthday){
      this.month = month;
      this.day = day;
      this.year = year;
      console.log(this.month, this.day, this.year);
    }
  }
    const birthday = new Birthday (28, 1, 1984);


   function calculateAge(){
    const currentDate= new Date();
    const today_year = currentDate.getFullYear();
    const today_month = currentDate.getMonth();
    const today_day = currentDate.getDate();
    // const birthday_year = this.birthday;
