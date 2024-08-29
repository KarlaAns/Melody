// api/files/upload.ts
import axios from 'axios';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

export const uploadFile = async (file: File) => {
  const state: RootState = useSelector((state: RootState) => state);
  const { uid } = state.auth;

  if (!uid) {
    throw new Error('User not authenticated');
  }

  const formData = new FormData();
  formData.append('file', file);
  formData.append('uid', uid); // Add UID to the form data

  try {
    const response = await axios.post('/api/files/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Upload failed');
  }
};
