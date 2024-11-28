import React from "react";
import { Outlet } from "react-router-dom";
import Header from '../components/Header'
import LandingPage from "@/pages/LandingPage";

const AppLayout = () => {
  return (
    <>
      <header className="bg-blue-600 text-white p-4">
        {/* Header content */}
      
        <Header/>
    
      </header>

      <main className="min-h-screen container mx-auto p-4">
        {/* Body content rendered from the Outlet */}

        <Outlet />
      </main>

      <footer className="bg-gray-800 text-white p-10 mt-10">
        <div className="text-center">
          Made with 💖 by Alok
        </div>
      </footer>
    </>
  );
};

export default AppLayout;

