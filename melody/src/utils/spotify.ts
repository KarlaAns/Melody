// spotify.ts
import axios from 'axios';

const CLIENT_ID = '';
const CLIENT_SECRET = '';

export const getAccessToken = async (): Promise<string> => {
  const response = await axios.post(
    'https://accounts.spotify.com/api/token',
    new URLSearchParams({
      grant_type: 'client_credentials',
    }),
    {
      headers: {
        'Authorization': `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );

  return response.data.access_token;
};

export const fetchSongDetails = async (trackId: string): Promise<any> => {
  const accessToken = await getAccessToken();
  const response = await axios.get(`https://api.spotify.com/v1/tracks/${trackId}`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
  });

  return response.data;
};
