// import $ from 'jquery';
  import 'bootstrap';
  import 'bootstrap/dist/css/bootstrap.min.css';
  // import './css/styles.css';s
  import './sass/styles.scss';



    calculateAge(){
    const currentDate= new Date();
    const today_year = currentDate.getFullYear();
    const today_month = currentDate.getMonth();
    const today_day = currentDate.getDate();



    $(document).ready( function() {
      $(".date").submit(function(event) {
        event.preventDefault();
        const month = $('#month').val();
        const day = $('#day').val();
        const year = $('#year').val();
        const birthday = month.concat(" ", day, ", ", year);
        const output = calculateAge(newDate);
        $(".output").text(output);

      })

    })
