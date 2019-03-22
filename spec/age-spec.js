import { getAge } from './../src/age.js';
import { mercuryAge } from './../src/age.js';
import { venusAge } from './../src/age.js';
import { marsAge } from './../src/age.js';
import { jupiterAge } from './../src/age.js';
import { liveLong } from './../src/age.js';

describe ('Age', function(){

  it ("calculates the users age", function(){
    expect(getAge("6/17/1984")).toEqual(34);
  });

  it ("calculates the user age in Mercury", function(){
    expect(mercuryAge("6/17/1984")).toEqual(142);
  });

  it ("calculates the user age in Venus", function(){
    expect(venusAge("6/17/1984")).toEqual(55);
  });

  it ("calculates the user afe in Mars", function() {
    expect(marsAge("6/17/1984")).toEqual(18);
  });

  it ("calculates the age in Jupiter", function() {
    expect(jupiterAge("6/17/1984")).toEqual(3);
  })

  it ("calculates the user life expectancy", function() {
    expect(liveLong("6/17/1984")).toEqual('You are expected to live for 44 more years!');
  });

});
