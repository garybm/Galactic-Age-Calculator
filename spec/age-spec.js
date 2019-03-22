import { getAge } from './../src/age.js';
import { mercuryAge } from './../src/age.js';
import { venusAge } from './../src/age.js';
import { marsAge } from './../src/age.js';
import { jupiterAge } from './../src/age.js';
import { liveLong } from './../src/age.js';

describe ('getAge', function(){

  it ("calculate the users age", function(){
    expect(getAge("6/17/1984")).toEqual(34);
  });

  it ("calculate the user age in Mercury", function(){
    expect(mercuryAge("6/17/1984")).toEqual(142);
  });

  it ("calculate the user age in Venus", function(){
    expect(venusAge("6/17/1984")).toEqual(55);
  });

  it ("calculate the user afe in Mars", function() {
    expect(marsAge("6/17/1984")).toEqual(18);
  });

  it ("calculate the age in Jupiter", function() {
    expect(jupiterAge("6/17/1984")).toEqual(3);
  })

  it ("calculate the user life expectancy", function() {
    expect(liveLong("6/17/1984")).toEqual('You are expected to live for 44 more years!');
  });

});
