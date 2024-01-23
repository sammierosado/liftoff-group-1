const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const SPACE_DELIMITER = "%20";
const RESPONSE_TYPE = "token";
const SCOPES = [
    'user-top-read',
    'user-read-private',
    'user-library-read',
    'playlist-read-private',
];
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

// defining constants for use in SpotifyLogin.js
//test comment for push delete whenever

module.exports = { CLIENT_ID, CLIENT_SECRET, AUTH_ENDPOINT, REDIRECT_URI, SPACE_DELIMITER, RESPONSE_TYPE, SCOPES, SCOPES_URL_PARAM }