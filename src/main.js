  import $ from 'jquery';
  import { getAge} from './../src/age.js';
  import { mercuryAge } from './../src/age.js';
  import { venusAge } from './../src/age.js';
  import { marsAge } from './../src/age.js';
  import { jupiterAge } from './../src/age.js';


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
      const mercury = mercuryAge(newDate);
      $("#mercury").append(mercury);
    });
});
