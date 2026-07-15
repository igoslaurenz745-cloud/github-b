# github-b

A professional JavaScript project featuring a random joke generator using an external API.

## Features

- 🎭 Random Joke Generator - Fetches jokes from the Official Joke API
- 📦 Professional project structure
- ✨ ESLint configuration for code quality
- 🚀 Easy-to-use npm scripts

## Installation

```bash
npm install
```

## Usage

### Run the main application
```bash
npm start
```

### Generate a random joke
```bash
npm run joke
```

### Lint your code
```bash
npm run lint
npm run lint:fix
```

## Project Structure

```
github-b/
├── src/
│   ├── index.js          # Main entry point
│   ├── app.js            # Application logic
│   └── jokeGenerator.js  # Joke generator module
├── package.json          # Dependencies and scripts
├── .eslintrc.json        # ESLint configuration
├── .gitignore            # Git ignore rules
├── LICENSE               # MIT License
└── README.md             # This file
```

## API Used

- **Official Joke API** - https://official-joke-api.appspot.com/
  - Endpoint: `/random_joke`
  - Returns random jokes with setup and punchline

## Example Output

```
🎭 Random Joke Generator 🎭
────────────────────────────

📝 Why don't scientists trust atoms?

😂 Because they make up everything!

Type: general
────────────────────────────
```

## Dependencies

- **axios** - Promise-based HTTP client for making API requests
- **eslint** - JavaScript linter for code quality

## Author

igoslaurenz745-cloud

## License

MIT License - See LICENSE file for details
