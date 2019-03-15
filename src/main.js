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

    //Mercury
    function mecuryAge(dateString) {
    const mercuryAge = getAge(dateString) / .24;
    return Math.round(mercuryAge);
  }


  //Jupiter
  function jupiterAge(dateString) {
    const jupiterAge = getAge(dateString) / 11.86;
    return Math.round(jupiterAge);
  }

    //Mars

    function marsAge(dateString) {
    const marsAge = getAge(dateString) / 1.88;
    return Math.round(marsAge);
    }

    //Venus
    function venusAge(dateString) {
      const venusAge = getAge(dateString) / .62;
      Math.round(venusAge);
    }

  $(document).ready( function() {
    $(".date").submit(function(event) {
      event.preventDefault();
      const newDate = $('#date-input').val();
      const output = getAge(newDate);
      $("#age").append(output);
      const mars = marsAge(newDate);
      $("#mars").append(mars);
      const jupiter = jupiterAge(newDate);
      $("#jupiter").append(jupiter);
      const venus = venusAge(newDate);
      $("#venus").append(venus);
      const mercury = mecuryAge(newDate);
      $("#mercury").append(mercury);
    });
});
