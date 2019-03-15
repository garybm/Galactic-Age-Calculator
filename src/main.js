// import $ from 'jquery';
  import 'bootstrap';
  import 'bootstrap/dist/css/bootstrap.min.css';
  // import './css/styles.css';s
  import './sass/styles.scss';


  export class Birthday {
    constructor(birthday){
      this.birthday = birthday;
    }

     calculateAge(){
      const today_date = new Date();
      console.log("today_date");
      const today_year = today_date.getFullYear();
      const today_month = today_date.getMonth();
      const today_day = today_date.getDate();
      const age = today_year - birth_year;

      if ( today_month < (birth_month - 1))
      {
          age--;
      }
      if (((birth_month - 1) == today_month) && (today_day < birth_day))
      {
          age--;
      }
