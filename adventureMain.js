const { totalTrailMiles, totalRiverMiles, shortestRiver, longestRiver, shortestTrail, longestTrail, leastExpenseRiver, mostExpenseRiver, leastExpensiveTrail, mostExpensiveTrail, trailsDetails, riverDetails } = require("./adventureFunctions.js")

const { trails, rivers, wildlife } = require("./adventureData.js")

console.log(`
    B J Ö R N ' S   W I L D N E R N E S S   A D V E N T U R E S
    ***********************************************************

                                                        ###
        ______                                         #o###
       /     /\     (              ______            #####o###
      /     /  \     )            /     /\          #o#\#|#/###
     /_____/----\_    (          /     /  \          ###\|/#o#
    '     '          ).         /_____/----\_         # }|{  #
   _ ___          O (:') o      '  '     '   '          }|{
  (@))_))        O ~/~~\~ o                             }|{
                  o     O                          ____/   \____
                     O
`)


console.log('***************************************************')
console.log('*****              T R A I L S                *****')
console.log('***************************************************')
const trailTotal = totalTrailMiles(trails)
console.log(`We service ${trailTotal} miles of wilderness trails across the US`)

const shortTrail = shortestTrail(trails)
console.log(`The shortest trail is ${shortTrail} kilometers`)

const longest = longestTrail(trails)
console.log(`The longest trail is ${longest} kilometers`)


console.log('\n\n***************************************************')
console.log('*****              R I V E R S                *****')
console.log('***************************************************')
const riverTotal = totalRiverMiles(rivers)
console.log(`We offer ${riverTotal} miles of wilderness rivers across the US`)

const shortRiver = shortestRiver(rivers)
console.log(`The shortest river tour is ${shortRiver} kilometers`)

const longRiver = longestRiver(rivers)
console.log(`The longest river tour is ${longRiver} kilometers`)

const leastExpenseTrail = leastExpensiveTrail(trails)
console.log(`\nThe least expensive trails are: ${leastExpenseTrail}`)

const mostExpenseTrail = mostExpensiveTrail(trails)
console.log(`\nThe most expensive trails are: ${mostExpenseTrail}`)

const leastExpensiveRiver = leastExpenseRiver(rivers)
console.log(`\nThe least expensive river tours are: ${leastExpensiveRiver}`)

const mostExpensiveRiver = mostExpenseRiver(rivers)
console.log(`\nThe most expensive river tours are: ${mostExpensiveRiver}`)

const trailDetails = trailsDetails(trails)
console.log(`\nTRAIL DETAILS: \n-------------------------------\n${trailDetails}`)

const riverDetail = riverDetails(rivers)
console.log(`\nRIVER DETAILS: \n-------------------------------\n${riverDetail}`)