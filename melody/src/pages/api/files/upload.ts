import type { NextApiRequest, NextApiResponse } from 'next';
import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: 'postgres',
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { trackId, filename, title, artist, album, duration, fileData } = req.body;

    if (!title || !trackId || !filename || !artist || !album || !duration || !fileData) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      const client = await pool.connect();

      const result = await client.query(
        'INSERT INTO songs (id, filename, title, artist, album, duration, file_data) VALUES ($1, $2, $3, $4, $5, $6, $7)',
        [trackId, filename, title, artist, album, duration, fileData]
      );

      client.release();

      res.status(200).json({ message: 'File uploaded successfully' });
    } catch (error) {
      console.error('Error uploading file:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}