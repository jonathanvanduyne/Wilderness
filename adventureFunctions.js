// Get the sum of all trail miles
const totalTrailMiles = (trails) => {
    let total = 0
    for (const trail of trails) {
        total += trail.length
    }

    return Math.round(total)
}

// Get the shortest of all trails
const shortestTrail = (trailArray) => {
    let shortArr = trailArray.map(function (trailArray) {
        return trailArray.length
    })
    const shortestTrailLength = shortArr.reduce(function (p, c) {
        return c < p ? c : p
    })
    return shortestTrailLength
}

// Get the longest of all trails
const longestTrail = (trailArray) => {
    let longArr = trailArray.map(function (trailArray) {
        return trailArray.length
    })
    const longestTrailLength = longArr.reduce(function (p, c) {
        return c > p ? c : p
    })
    return longestTrailLength
}

// Get the sum of all river miles
const totalRiverMiles = (riverArray) => {
    let total = 0
    for (const river of riverArray) {
        total += river.length
    }

    return Math.round(total)
}

// Get the shortest of all rivers
const shortestRiver = (riverArray) => {
    let shortArr = riverArray.map(function (riverArray) {
        return riverArray.length
    })
    const shortestRiver = shortArr.reduce(function (p, c) {
        return c < p ? c : p
    })
    return shortestRiver
}


// Get the longest of all rivers
const longestRiver = (riverArray) => {
    let longArr = riverArray.map(function (riverArray) {
        return riverArray.length
    })
    const longestRiverLength = longArr.reduce(function (p, c) {
        return c > p ? c : p
    })
    return longestRiverLength
}

const leastExpensiveTrail = (trailArray) => {
    let message = ""
    for (const cheap of trailArray) {
        let x = cheap.price.split("$").length - 1;
        if (x === 1) {
            message += `\n ${cheap.trailName}`
        }
    }
    return message;
}

const mostExpensiveTrail = (trailArray) => {
    let message = ""
    for (const expense of trailArray) {
        let x = expense.price.split("$").length - 1;
        if (x >= 4) {
            message += `\n ${expense.trailName}`
        }
    }
    return message;
}
const leastExpenseRiver = (riverArray) => {
    let message = ""
    for (const cheap of riverArray) {
        let x = cheap.price.split("$").length - 1;
        if (x === 1) {
            message += `\n ${cheap.river}`
        }
    }
    return message;
}
const mostExpenseRiver = (riverArray) => {
    let message = ""
    for (const expense of riverArray) {
        let x = expense.price.split("$").length - 1;
        if (x >= 4) {
            message += `\n ${expense.river}`
        }
    }
    return message;
}

const trailsDetails = (trailArray) => {
    let message = ""
    for (const detail of trailArray) {
         message += `   ${detail.trailName} starts at [${detail.latitude}, ${detail.longitude}] and is ${detail.length} miles long. \n The highlighted plant for the trip is ${detail.plantHighlight}.\n`
    }
    return message
}

const riverDetails = (riverArray) => {
    let message = ""
    for (const detail of riverArray) {
        message += `    ${detail.river} starts at [${detail.latitude}, ${detail.longitude}] and is ${detail.length} miles long.\n The unique fish for the trip is ${detail.uniqueFish}.\n`
    }
    return message
}

module.exports = {totalTrailMiles, totalRiverMiles, shortestRiver, longestRiver, shortestTrail, longestTrail, leastExpenseRiver, mostExpenseRiver, leastExpensiveTrail, mostExpensiveTrail, trailsDetails, riverDetails}