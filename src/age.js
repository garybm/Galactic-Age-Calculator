

//Function to calculate the AGE
export function getAge(dateString) {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate()))
    {
        age = age - 1;
    }
    return age;
  }

  //Mercury Age
  export function mercuryAge(dateString) {
    const mercuryAge = getAge(dateString) / .24;
    return Math.round(mercuryAge);
}

  //Venus
  export function venusAge(dateString) {
    const venusAge = getAge(dateString) / .62;
    return Math.round(venusAge);
 }

  //Mars

  export function marsAge(dateString) {
    const marsAge = getAge(dateString) / 1.88;
    return Math.round(marsAge);
  }

  //Jupiter
  export function jupiterAge(dateString) {
    const jupiterAge = getAge(dateString) /11.86;
    return Math.round(jupiterAge);
  }
