# Project Title
Tracker

## Overview

Tracker provides users with personalized song suggestions based on their favorite tracks.

### Problem

Many music streaming platforms offer recommendation systems based on genres or popularity, but they don't always find songs that the user
already discovered. Tracker aims to address this by providing songs recommendations using AI and blacklisting songs users already know.

### User Profile

- music enthusiasts:
    - looking to discover new songs similar to their favorites
    - save new songs to their spotify

### Features

- As a user, I want to be able to find new songs similar to my current favorite tracks
- As a user, I want to be able to save new songs to my spotify
- As a user, I want to be able to listen to new songs 

## Implementation

### Tech Stack

- React
- Express
- Client libraries: 
    - react
    - axios
    - sass
- Server libraries:
    - express
    - openAi
    - axios
    - cors
    - dotenv
    - nodemon


### APIs

- Spotify Web API for song information
- OpenAi GPT API for generating song recommendations 

### Sitemap

- Main Page

### Mockups

#### Main Page
![](readMeImages/home.jpg)

### Endpoints

**POST /tracks**

- Receive user input, call OpenAI API, and return recommended tracks
- GPT API will take in the song name, the artist and the list of the user’s blacklisted songs
- Responds with songs that match the vibe or sound
- Spotify API takes the song name and artist from the GPT response
- Responds with song data


Parameters:
- Song/Artist

Response:
```
{
    "songId": "6vN77lE9LK6HP2DewaN6HZ",
    "songName": "Track Name"
}
```

**POST /tracks/search**

- Receives search query
- Finds songs from that query using the Spotify API

Parameters:
- Song/Artist

Response:
```
{
    "song": "track name",
    "artists": "track artists"
}
```

## Roadmap

- Create server
    - express project with routing, with placeholder 200 responses

- Integrate Spotify API for song data.

- Integrate OpenAI GPT API for song recommendations.

- Create client

- Implement UI for displaying recommended tracks

- Implement playback functionality using the Spotify Iframe

- Allow users to search for songs

- Allow users to add tracks to liked songs

- Bug fixes

## Nice-to-haves

- Spotify authentication
- Save users to a database
- Blacklist feature that filters out songs the user already knows
- Custom built song widgets using the Spotify Web Playback SDK

## Future Implementations

- Additional filters (genre, mood)
- Filter that prevents the same artist to appear in results
- Manage user playlists within the app itself
- Apple music integration

## Steps to Deploy
- Create a Spotify "app" using your Spotify Credentials. More info here: https://developer.spotify.com/documentation/web-api/concepts/apps
- Get your Spotify app's client id and client secret
- Get an API key from Open AI: https://platform.openai.com/api-keys
- Replace the values in .env.sample with your credentials