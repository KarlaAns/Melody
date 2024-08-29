// import SpotifyWebApi from 'spotify-web-api-node';

// const spotifyApi = new SpotifyWebApi({
//   clientId: process.env.SPOTIFY_CLIENT_ID,
//   clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
//   redirectUri: 'http://localhost:3000/callback', // URL de redirección después de autenticación
// });

// // Obtener el token de acceso utilizando el Client ID y Client Secret
// const getAccessToken = async () => {
//   try {
//     const data = await spotifyApi.clientCredentialsGrant();
//     spotifyApi.setAccessToken(data.body['access_token']);
//   } catch (err) {
//     console.error('Error al obtener el token de acceso', err);
//   }
// };

// // Ejecuta esta función al iniciar tu aplicación para asegurar que tengas el token de acceso
// getAccessToken();
