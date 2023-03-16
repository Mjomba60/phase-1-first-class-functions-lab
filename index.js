// Code your solution in this file!
const returnFirstTwoDrivers =  function(drivers){
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}

let selectingDrivers = [];
selectingDrivers[0] = returnFirstTwoDrivers;
selectingDrivers[1] = returnLastTwoDrivers;

function createFareMultiplier(number){
    function multiplier(fare){
        return fare * number;
    }
    return multiplier;
}

function fareDoubler(fare){
    return fare * 2;
}

function fareTripler(fare){
    return fare * 3;
}

function selectDifferentDrivers(drivers, func){
    if (func = returnFirstTwoDrivers){
        return returnFirstTwoDrivers(drivers);
    } else if (func = returnLastTwoDrivers){
        return drivers.slice(-2);
    };
}