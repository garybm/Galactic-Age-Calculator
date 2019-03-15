  import $ from 'jquery';
  // import { getAge } from './../src/age.js';


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

  $(document).ready( function() {
    $(".date").submit(function(event) {
      event.preventDefault();
      const newDate = $('#date-input').val();
      const output = getAge(newDate);
      console.log(output);
      $(".output").text(output);
      });
});
