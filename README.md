# Player Info App

A modern and responsive web application to display player details using Next.js and Tailwind CSS. The app fetches player data from an API and presents it in a clean, user-friendly interface.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

## Features

- Fetches player data from an external API
- Displays player details including name, position, height, weight, team, and more
- Responsive design using Tailwind CSS
- Modern UI with user-friendly navigation
- Error handling and data validation

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for server-side rendering
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for rapid UI development
- [Node.js](https://nodejs.org/) - JavaScript runtime environment

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/) (v12.x or later)
- [npm](https://www.npmjs.com/get-npm) (v6.x or later) or [yarn](https://yarnpkg.com/getting-started/install)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/almonteluis/player-info-app.git
    cd player-info-app
    ```

2. Install the dependencies:

    Using npm:

    ```bash
    npm install
    ```

    Using yarn:

    ```bash
    yarn install
    ```

## Running the App

To run the development server:

Using npm:

```bash
npm run dev
```
Using yarn:

```bash
Copy code
yarn dev
```

## Project Structure

```bash
/player-info-app
|-- /components
|   |-- PlayerCard.js        # Component to display player card
|-- /pages
|   |-- /api
|   |   |-- players.js       # API route for fetching player data
|   |-- /player
|   |   |-- [id].js          # Dynamic route for player detail page
|   |-- index.js             # Home page
|-- /public
|   |-- /images              # Public assets like images
|-- /styles
|   |-- globals.css          # Global CSS file with Tailwind imports
|-- /utils
|   |-- api.js               # Utility functions for API calls
|-- .gitignore
|-- package.json
|-- README.md
|-- tailwind.config.js       # Tailwind CSS configuration
|-- postcss.config.js        # PostCSS configuration
```

## API


This app uses an external API to fetch player data. Make sure you set the correct BASE_URL and API endpoints in your utils/api.js file.

Example API Usage
Fetch a list of players:

```bash
import { fetchPlayers } from '../utils/api';

const players = await fetchPlayers();
console.log(players);
Fetch a single player by ID:
```

```bash
javascript
Copy code
import { fetchPlayerById } from '../utils/api';

const player = await fetchPlayerById(1);
console.log(player);
```