var request = require('request');

var userDetails;
function initialize() {
  // Setting URL and headers for request
  var options = {
    url: 'https://api.github.com/users/tkssharma',
    headers: {
      'User-Agent': 'request'
    }
  };
  // Return new promise
  return new Promise(function(resolve, reject) {
    // Do async job
    request.get(options, function(err, resp, body) {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(body));
      }
    });
  });
}

// initialize().then(function(data) {
// 	console.log(data);
// });
// function main() {
//   var initializePromise = initialize();
//   initializePromise.then(function(result) {
//     userDetails = result;
//     console.log("Initialized user details");
//     // Use user details from here
//     console.log(userDetails);
//     return userDetails;

//   }, function(err) {
//     console.log(err);
//   }).then(function(result) {
//     // Print the code activity. Prints 110
//     console.log(result.public_gists + result.public_repos);
//   })
// }

// function getData(url) {
//   // Setting URL and headers for request
//   var options = {
//       url: url,
//       headers: {
//           'User-Agent': 'request'
//       }
//   };
//   // Return new promise 
//   return new Promise(function(resolve, reject) {
//       // Do async job
//       request.get(options, function(err, resp, body) {
//           if (err) {
//               reject(err);
//           } else {
//               resolve(body);
//           }
//       })
//   })
// }
// var errHandler = function(err) {
//   console.log(err);
// }
// function main() {
//   var userProfileURL = "https://api.github.com/users/narenaryan";
//   var dataPromise = getData(userProfileURL);
//   // Get user details after that get followers from URL
//   dataPromise.then(JSON.parse, errHandler)
//     .then(function(result) {
//       userDetails = result;
//       // Do one more async operation here
//       var anotherPromise = getData(userDetails.followers_url).then(JSON.parse);
//       return anotherPromise;
//     }, errHandler)
//     .then(function(data) {
//       console.dir(data)
//     }, errHandler);
// }
// main();