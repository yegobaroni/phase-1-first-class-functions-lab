// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers){
    const twoDrivers = drivers.slice(0, -2);
  return twoDrivers
}
const returnLastTwoDrivers = function (drivers){
    const lastTwoDrivers = drivers.slice(2);
    return lastTwoDrivers
}
const selectingDrivers = [ returnFirstTwoDrivers ,returnLastTwoDrivers];
function createFareMultiplier(num1){
  return function (fare){
    return fare*num1
  }
}const result=createFareMultiplier(4);
console.log(result(50));
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
  return returnFirstTwoDrivers(drivers)
};