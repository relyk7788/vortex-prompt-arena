
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-background bg-grid-pattern bg-[length:30px_30px]">
      <Header />
      <main className="flex-1 container mx-auto py-8 px-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
