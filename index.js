// Code your solution here
function findMatching() {
    const  drivers = ['Bobby', 
    'Sammy', 
    'Sally', 
    'Annette',
     'Sarah',
      'Bobby']
}
function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
  }
  
  function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
  }
  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
  }
  function matchName(drivers, query) {
    return drivers.filter(driver => driver.name.toLowerCase() === query.toLowerCase());
  }
  const drivers = ['Bobby', 
  'Sammy', 
  'Sally', 
  'Annette',
   'Sarah',
    'Bobby'];

console.log(findMatching(drivers, "Bobby")); // Output: ["Bobby"]
console.log(fuzzyMatch(drivers, "sa")); // Output: ["Sammy", "Sarah","Sally"]
console.log(matchName([  {
  name: 'Bobby',
  hometown: 'Pittsburgh' },
{
  name: 'Sammy',
  hometown: 'New York' } ,
{
  name: 'Sally',
  hometown: 'Cleveland' },
{
  name: 'Annette',
  hometown: 'Los Angeles' },
{
  name: 'Bobby',
  hometown: 'Tampa Bay' }
]));

