import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});

(async () => {
  try {
    // Obtener el token de acceso
    const data = await spotifyApi.clientCredentialsGrant();
    spotifyApi.setAccessToken(data.body['access_token']);
  } catch (err) {
    console.error('No se pudo obtener el token de acceso', err);
  }
})();

export const downloadFromSpotify = async (songId: string) => {
  try {
    const songData = await spotifyApi.getTrack(songId);
    
    // Obtener metadata de la canción
    const { name, artists, album, preview_url } = songData.body;

    if (!preview_url) {
      throw new Error('No se encontró un preview disponible para esta canción.');
    }

    // Descargar el preview de la canción
    const fileBuffer = await downloadFileFromUrl(preview_url);

    return {
      fileBuffer,
      filename: `${name}-${artists[0].name}.mp3`,
      title: name,
      artist: artists[0].name,
      album: album.name,
      duration: songData.body.duration_ms / 1000, // En segundos
    };
  } catch (err) {
    console.error('Error al descargar la canción desde Spotify', err);
    throw err;
  }
};

// Función auxiliar para descargar el archivo desde una URL
const downloadFileFromUrl = async (url: string) => {
  const response = await fetch(url);
  return Buffer.from(await response.arrayBuffer());
};
