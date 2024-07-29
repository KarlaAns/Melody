// import { initializeApp, FirebaseOptions } from 'firebase/app';
// import { init } from 'next-firebase-auth';

// // Define the custom interface based on the configuration you provided
// interface CustomInitAuthOptions {
//   authPageURL: string;
//   appPageURL: string;
//   loginAPIEndpoint: string;
//   logoutAPIEndpoint: string;
//   onLoginRequestError: (err: Error) => void;
//   onLogoutRequestError: (err: Error) => void;
//   firebaseAdminInitConfig: {
//     credential: {
//       projectId: string;
//       clientEmail: string;  
//       privateKey: string;
//     };
//   };
//   firebaseClientInitConfig: FirebaseOptions;
//   cookies: {
//     name: string;
//     keys: string[];
//     httpOnly: boolean;
//     maxAge: number;
//     overwrite: boolean;
//     path: string;
//     sameSite: 'strict' | 'lax' | 'none';
//     secure: boolean;
//     signed: boolean;
//   };
//   onVerifyTokenError: (err: Error) => void;
//   onTokenRefreshError: (err: Error) => void;
// }

// const initAuth = () => {
//   // Validate environment variables
//   const apiKey = process.env.FIREBASE_API_KEY as string;
//   const authDomain = process.env.FIREBASE_AUTH_DOMAIN as string;
//   const projectId = process.env.FIREBASE_PROJECT_ID as string;
//   const clientEmail = process.env.FIREBASE_CLIENT_EMAIL as string;
//   const privateKey = process.env.FIREBASE_PRIVATE_KEY as string;
//   const cookieSecretCurrent = process.env.COOKIE_SECRET_CURRENT as string;
//   const cookieSecretPrevious = process.env.COOKIE_SECRET_PREVIOUS as string;

//   if (!apiKey || !authDomain || !projectId || !clientEmail || !privateKey || !cookieSecretCurrent || !cookieSecretPrevious) {
//     throw new Error('Missing required environment variables');
//   }

//   const firebaseClientInitConfig: FirebaseOptions = {
//     apiKey,
//     authDomain,
//     projectId,
//   };

//   initializeApp(firebaseClientInitConfig);

//   const initAuthOptions: CustomInitAuthOptions = {
//     authPageURL: '/auth',
//     appPageURL: '/',
//     loginAPIEndpoint: '/api/login',
//     logoutAPIEndpoint: '/api/logout',
//     onLoginRequestError: (err: Error) => {
//       console.error('Login request error:', err);
//     },
//     onLogoutRequestError: (err: Error) => {
//       console.error('Logout request error:', err);
//     },
//     firebaseAdminInitConfig: {
//       credential: {
//         projectId,
//         clientEmail,
//         privateKey,
//       },
//     },
//     firebaseClientInitConfig,
//     cookies: {
//       name: 'melody-cookie-app', // required
//       keys: [
//         cookieSecretCurrent,
//         cookieSecretPrevious,
//       ],
//       httpOnly: true,
//       maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
//       overwrite: true,
//       path: '/',
//       sameSite: 'strict',
//       secure: process.env.NODE_ENV === 'production', // true in production, false in development
//       signed: true,
//     },
//     onVerifyTokenError: (err: Error) => {
//       console.error('Token verification error:', err);
//     },
//     onTokenRefreshError: (err: Error) => {
//       console.error('Token refresh error:', err);
//     },
//   };

//   init(initAuthOptions as any); // Use 'any' if exact typing is not available
//   console.log({
//     apiKey,
//     authDomain,
//     projectId,
//     clientEmail,
//     privateKey,
//     cookieSecretCurrent,
//     cookieSecretPrevious,
//   });

// };



// export default initAuth;
