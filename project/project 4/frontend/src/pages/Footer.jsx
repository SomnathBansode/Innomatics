import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white shadow-md py-6 mt-10">
      <div className="container mx-auto text-center px-6">
        <p className="text-gray-700 text-sm">&copy; {currentYear} Somnath Bansode. All Rights Reserved.</p>
        <div className="flex justify-center space-x-6 mt-3">
          <a
            href="https://www.linkedin.com/in/somnathbansode"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-medium hover:text-blue-700 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/SomnathBansode"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 font-medium hover:text-gray-900 transition"
          >
            GitHub
          </a>
          <a
            href="https://somnathbansode.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 font-medium hover:text-green-700 transition"
          >
            Portfolio
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;