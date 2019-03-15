  import $ from 'jquery';
  // import { getAge } from './../src/age.js';


  function getAge(dateString) {
      const today = new Date();
      const birthDate = new Date(dateString);
      let age = today.getFullYear() -birthDate.getFullYear();
      const month = today.getMonth() - birthDate.getMonth();
      if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate()))
      {
          age--;
      }
      return age;
    }

    function venusAge(dateString) {
    const venusAge = getAge(dateString) / .62;
    Math.round(venusAge);
    console.log(venusAge);
    }


  $(document).ready( function() {
    $(".date").submit(function(event) {
      event.preventDefault();
      const newDate = $('#date-input').val();
      const output = getAge(newDate);
      const venusAge1 = venusAge(newDate);
      $(".output").text(output);
      $(".output").text(venusAge1);

    });
});


// function mercuryAge(dateString) {
  //   let mercuryAge = getAge() / 0.24;
  //   return Math.round(mercuryAlive);
  // }

  // //Mercury Age
  // const mercuryAge = getAge(dateString) / .24;
  //  Math.round(mercuryAge);
  //
  // //Venus
  // const venusAge = getAge(dateString) / .62;
  //  Math.round(venusAge);
  //
  // //Mars
  //
  // const marsAge = getAge(dateString) / 1.88;
  // Math.round(marsAge);
  //
  // //Jupiter
  // const jupiterAge = getAge(dateString) / 11.86;
  // Math.round(jupiterAge);
  // console.log(jupiterAge);
