

//Function to calculate the AGE

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


  //Mercury Age

  function mecuryAge(dateString) {
  const mercuryAge = getAge(dateString) / .24;
  return Math.round(mercuryAge);
}

  //Venus
  function venusAge(dateString) {
  const venusAge = getAge(dateString) / .62;
  Math.round(venusAge);
  console.log(venusAge);
}

  //Mars

  function marsAge(dateString) {
  const marsAge = getAge(dateString) / 1.88;
  return Math.round(marsAge);
  }

  //Jupiter
  function jupiterAge(dateString) {
  const jupiterAge = getAge(dateString) /11.86;
  return Math.round(jupiterAge);
  }



  console.log('age: ' + getAge("1984/06/17"));
