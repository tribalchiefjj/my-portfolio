import React from "react";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-4">
      <p className="text-sm">© {new Date().getFullYear()} Created by Jafar. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://github.com/tribalchiefjj" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white text-2xl hover:text-gray-400" />
        </a>
        <a href="https://instagram.com/_jjafar" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-white text-2xl hover:text-gray-400" />
        </a>
        <a href="https://wa.me/+254728738541" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-white text-2xl hover:text-gray-400" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
