import { getAge } from './../src/age.js';

describe ('userDate', function() {

  const testDate = new userDate(3, 13, 1300);

  it('should have three values', function(){
    expect(testDate.checkArgs()).toEqual("true")
  });
