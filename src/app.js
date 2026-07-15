/**
 * Application logic for github-b
 */

/**
 * Run the application
 */
function run() {
  console.log('Running github-b application...');
  
  // Add your application logic here
  greet('igoslaurenz745-cloud');
}

/**
 * Simple greeting function
 * @param {string} name - The name to greet
 */
function greet(name) {
  console.log(`Hello, ${name}! Welcome to github-b.`);
}

module.exports = {
  run,
  greet,
};
