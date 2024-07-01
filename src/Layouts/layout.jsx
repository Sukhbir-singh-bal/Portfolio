import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from 'react-helmet';

const Layout = ({ title, description, children }) => {
  return (
      <div className="relative text-black dark:text-white">
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Helmet>
        <div
          className="
            absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-gray-50 dark:bg-gray-950
            bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))]
            dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]
          "
        ></div>
        <Header />
        {children}
        <Footer />
      </div>
  );
};

export default Layout;
