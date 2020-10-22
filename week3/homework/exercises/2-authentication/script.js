
/**
 * 2. Authentication
 * 
 * Using node-fetch make an authenticated request to https://restapiabasicauthe-sandbox.mxapps.io/api/books
 * Print the response to the console. Use async-await and try/catch.
 * 
 * Hints:
 * - for basic authentication the username and password need to be base64 encoded
 */
const fetch = require('node-fetch');
const buf = Buffer.from("admin:hvgX8KlVEa", "utf8");
const credentials = buf.toString("base64");

const printBooks = async () => {
  // YOUR CODE GOES IN HERE
  try {
    const response = await fetch('https://restapiabasicauthe-sandbox.mxapps.io/api/books', {
      method: 'GET',
      headers: { Authorization: `Basic ${credentials}` },
    });
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

printBooks();