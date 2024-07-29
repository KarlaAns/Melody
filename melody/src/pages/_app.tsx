import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';  // Importa Provider desde react-redux
import store from '../redux/store';
import initAuth from '../utils/initAuth'; // Asegúrate de que esta ruta sea correcta
import '../styles/globals.css';
import { useEffect } from 'react';



function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const dispatch = store.dispatch; // Obtén el dispatch de Redux
    initAuth(dispatch); // Inicializa la autenticación
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

