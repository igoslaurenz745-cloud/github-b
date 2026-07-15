/**
 * Main entry point for the github-b application
 */

const app = require('./app');
const { getJoke } = require('./jokeGenerator');

// Start the application
app.run();

// Uncomment below to get a joke on startup
// getJoke().catch(console.error);

console.log('\nTip: Run "npm run joke" to generate a random joke!');
