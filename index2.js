// const {fetchMyIP, fetchISSFlyOverTimes} = require('./isspromised');
// const {fetchCoordsByIP} = require('./isspromised');
// const { nextISSTimesForMyLocation } = require('./iss_promised');

// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then(body => console.log(body));


//   nextISSTimesForMyLocation()
//   .then((passTimes) => {
//     printPassTimes(passTimes);
//   })
//   .catch((error) => {
//     console.log("It didn't work: ", error.message);
//   });
  const { nextISSTimesForMyLocation } = require('./iss_promised');

  nextISSTimesForMyLocation();