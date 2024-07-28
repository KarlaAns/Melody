import React from 'react';
import Header from '../components/HeaderDashB';
import Footer from '../components/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col pb-20 bg-neutral-950">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;