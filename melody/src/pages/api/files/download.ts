// /files/download.ts

import { downloadFromSpotify } from '../spotify/spotifyService';
import fs from 'fs';
import path from 'path';

export const handleDownload = async (songId: string) => {
  try {
    const { fileBuffer, filename } = await downloadFromSpotify(songId);

    // Define la ruta de la carpeta downloads
    const downloadsDir = path.join(__dirname, '../../downloads');

    // Asegúrate de que la carpeta exista
    if (!fs.existsSync(downloadsDir)) {
      fs.mkdirSync(downloadsDir, { recursive: true });
    }

    // Guarda el archivo en el disco
    const filePath = path.join(downloadsDir, filename);
    fs.writeFileSync(filePath, fileBuffer);

    console.log(`Archivo descargado y guardado como ${filename}`);
    return filePath;
  } catch (err) {
    console.error('Error al descargar la canción', err);
    throw err;
  }
};
