#  Galactic Age Calculator

_Published_  2/15/2019 <br>
_Author_ **Gary Bermudez**

### Description
Javascript objects allowing a User to input a birthday and find out life expectancy and age on different planets.
Used to practice testing with Jasmine and Karma

### Installation
* Clone from https://github.com/garybm/independent-project1
* Run `$ npm install`
* Use `$ npm run test` to view testing in Karma - Chrome Browser

### Development Specs

Specification | Input | Output
------------- | ----- | ------
Givin a birthday should be able to determine how old they are. | June, 17 1984 | 34
Can Determine Age on Mercury based on that age | 34 | 142
Can Determine Age on Venus based on that age | 34 | 55
Can Determine Age on Mars based on that age | 34 | 18
Can Determine Age on Jupiter based on that age | 34 | 3
Can give the user life expectancy based on two options | Gender - Male and Country - Japan | 78.6 years old
Can compare age and life expectancy on a given planet to see if they have already lived past their life expectancy | Life-Expectancy on Mercury | You've lived 42 years past your life expectancy

### Known Bugs
* None identified

### Technologies Used
* Webpack
* Tested with Karma and Jasmine
