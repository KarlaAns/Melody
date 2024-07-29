// src/api/users/login.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { auth } from '../../utils/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      res.status(200).json({ user: userCredential.user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
