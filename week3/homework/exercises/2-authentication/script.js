
/**
 * 2. Authentication
 * 
 * Using node-fetch make an authenticated request to https://restapiabasicauthe-sandbox.mxapps.io/api/books
 * Print the response to the console. Use async-await and try/catch.
 * 
 * Hints:
 * - for basic authentication the username and password need to be base64 encoded
 */
const printBooks = async () => {
  // YOUR CODE GOES IN HERE
  try {
      const fetch = require('node-fetch'),
           response = await fetch('https://restapiabasicauthe-sandbox.mxapps.io/api/books', {
              method: 'GET',
              headers: { Authorization: 'Basic YWRtaW46aHZnWDhLbFZFYQ==' },
            }),
            data = await response.json()
      console.log(data)
    } catch (err) {
      console.error(err)
    }
  } 

printBooks();