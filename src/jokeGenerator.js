/**
 * Random Joke Generator
 * Fetches random jokes from the Official Joke API
 */

const axios = require('axios');

/**
 * Fetch a random joke from the Official Joke API
 * @returns {Promise<Object>} Joke object with setup and punchline
 */
async function fetchRandomJoke() {
  try {
    const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
    return response.data;
  } catch (error) {
    console.error('Error fetching joke:', error.message);
    throw new Error('Failed to fetch joke from API');
  }
}

/**
 * Display a formatted joke
 * @param {Object} joke - Joke object with setup and punchline
 */
function displayJoke(joke) {
  console.log('\n🎭 Random Joke Generator 🎭');
  console.log('────────────────────────────');
  console.log(`\n📝 ${joke.setup}`);
  console.log(`\n😂 ${joke.punchline}\n`);
  console.log(`Type: ${joke.type}`);
  console.log('────────────────────────────\n');
}

/**
 * Fetch and display a random joke
 */
async function getJoke() {
  try {
    const joke = await fetchRandomJoke();
    displayJoke(joke);
  } catch (error) {
    console.error('Could not get joke:', error.message);
    process.exit(1);
  }
}

// Run the joke generator if this file is executed directly
if (require.main === module) {
  getJoke();
}

module.exports = {
  fetchRandomJoke,
  displayJoke,
  getJoke,
};
