// pages/userProfile.tsx
import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import UserInfo from "../components/UserInfo";
import { Header } from "../components/Header";
import Footer from "../components/Footer";
import GradientEllipses from "../components/GradientEllipses";
import Ellipse21 from "../components/Ellipse21";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const UserProfile: React.FC = () => {
  const { uid, email } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (!uid) {
      router.push('/login');
    }
  }, [uid, router]);

  if (!uid) {
    return null; // O un loading spinner si lo prefieres
  }

  return (
    <div className="relative bg-neutral-950 overflow-x-hidden min-h-screen">
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>
      <GradientEllipses />

      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16 text-white relative z-20 pt-24">
        <div className="w-full max-w-4xl bg-gray-700 rounded-lg shadow-lg p-8 mb-12">
          <div className="flex flex-col items-center">
            {/* Eliminar imagen y solo mantener el círculo */}
            <div className="w-24 h-24 bg-gray-900 rounded-full shadow-xl mb-6 flex items-center justify-center">
              <p className="text-3xl text-gray-300">U</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{email ? email.split('@')[0] : 'Usuario'}</h1>
            <p className="mt-2 text-lg md:text-xl font-light text-gray-300 text-center">
              Bienvenido a tu perfil. Aquí puedes ver tus detalles de usuario y gestionar tu cuenta.
            </p>
          </div>
          <div className="mt-10">
            <UserInfo />
          </div>
        </div>
        
        <div className="relative w-full max-w-4xl mt-12">
          <Ellipse21 />
        </div>
      </main>

      <Footer className="fixed bottom-0 left-0 w-full z-50" />
    </div>
  );
};

export default UserProfile;
