const returnFirstTwoDrivers = function(driversArray){
    let newArray = []
    return newArray = driversArray.slice(0,2)
}

const returnLastTwoDrivers = function(driversArray){
    let newArray = []
    return newArray = driversArray.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
    return function(fare){
        return fare * multiplier
    }
}

const fareDoubler = function(fare){
    return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare){
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(arrayOfDrivers, driversFunction){
    return driversFunction(arrayOfDrivers)
}