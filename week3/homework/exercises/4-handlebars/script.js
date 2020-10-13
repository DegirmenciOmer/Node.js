
/**
 * 4. Fun with Handlebars
 * 
 * Write a javascript function that simulates playing the game cards against humanity.
 * The code should choose a subject and a punchline at random,
 * then replace them in a sentece using handlebars.
 * 
 * Hints:
 * - Check the handlebars npm page for examples and documentation
 */
const subjects = [
  'shark',
  'popcorn',
  'poison',
  'fork',
  'cherry',
  'toothbrush',
  'cannon',
];

const punchlines = [
  'watch movie with',
  'spread some love',
  'put on cake',
  'clean toilets',
  'go to the moon',
  'achieve world piece',
  'help people learn programing',
];

function drawCard() {
  // YOUR CODE GOES IN HERE
  const Handlebars = require('handlebars');
  const source = "{{subject}} is greater to {{punchline}}";
  const template = Handlebars.compile(source);
  const data = {
    "subject": subjects[getRandomElement(subjects)],
    "punchline": subjects[getRandomElement(punchlines)]
  };
  console.log(template(data));
}

drawCard();

/**
 * Given an array, return an element from it chosen at random
 */
function getRandomElement(array) {
  // YOUR CODE GOES IN HERE
  return (Math.floor(Math.random() * array.length));
}



