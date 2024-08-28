import SpotifyWebApi from 'spotify-web-api-js';

const CLIENT_ID = 'b70db89780dd4a3083e04f22c0357337';
const REDIRECT_URI = 'http://localhost:3000/Callback'; // Ajusta esto a tu URI de redirección

export const spotifyApi = new SpotifyWebApi();

const scopes = [
  'streaming',
  'user-read-email',
  'user-read-private',
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing',
  'app-remote-control'
].join(' ');

export const loginUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${encodeURIComponent(scopes)}&response_type=token&show_dialog=true`;

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial: { [key: string]: string }, item) => {
      let parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const setAccessToken = (token: string) => {
  spotifyApi.setAccessToken(token);
};

export const play = () => spotifyApi.play();
export const pause = () => spotifyApi.pause();
export const skipToNext = () => spotifyApi.skipToNext();
export const skipToPrevious = () => spotifyApi.skipToPrevious();
export const setVolume = (volume: number) => spotifyApi.setVolume(volume);
export const getMyCurrentPlayingTrack = () => spotifyApi.getMyCurrentPlayingTrack();