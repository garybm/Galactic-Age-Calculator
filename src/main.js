  import $ from 'jquery';
  // import 'bootstrap';
  // import 'bootstrap/dist/css/bootstrap.min.css';
  // import './css/styles.css';s
  // import './sass/styles.scss';
  import { YourBirthday  } from './age.js';



    $(document).ready( function() {
      $(".date").submit(function(event) {
        event.preventDefault();
        const month = $('#month').val();
        const day = $('#day').val();
        const year = $('#year').val();
        const birthday = month.concat(" ", day, ", ", year);
        const output = YourBirthday (newDate);
        $(".output").text(output);

      })

    })
