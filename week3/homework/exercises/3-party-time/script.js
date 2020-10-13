
/**
 * 3: Party time
 * 
 * After reading the documentation make a request to https://reservation100-sandbox.mxapps.io/rest-doc/api
 * and print the response to the console. Use async-await and try/catch.
 * 
 * Hints:
 * - make sure to use the correct headers and http method in the request
 */

async function makeReservation(guest) {
  // YOUR CODE GOES IN HERE
  try {
    const fetch = require('node-fetch'),
          response = await fetch('https://reservation100-sandbox.mxapps.io/api/reservations', {
            method: 'post',
            body: JSON.stringify(guest),
            headers: {
              'Content-Type': 'application/json'
            },
          }),
          data = await response.text();
    console.log(data);
  } catch (err) {
    console.error(err)
  }
}
const applicantPerson = {
  "name": "John Doe",
  "numberOfPeople": 3
}

makeReservation(applicantPerson);