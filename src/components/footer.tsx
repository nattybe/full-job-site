import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin, faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import React from 'react'

export default function Footer() {
  return (
    <footer className="py-8 w-full border-t text-text border-accent">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Logo or Site Name */}
        <div className="text-2xl  font-bold">A</div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center space-x-4">
          <a href="#" className="hover:text-gray-300">
            Home
          </a>
          <a href="#" className="hover:text-gray-300">
            About Us
          </a>
          <a href="#" className="hover:text-gray-300">
            Services
          </a>
          <a href="#" className="hover:text-gray-300">
            Contact
          </a>
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" className="text-xl hover:text-accent">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className="text-xl hover:text-accent">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="#" className="text-xl hover:text-accent">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#" className="text-xl hover:text-accent">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
        </div>
      </div>

      {/* Copyright and Legal Information */}
      <div className="text-center mt-4">
        &copy; 2023 Your Company. All rights reserved.
      </div>
    </footer>
  );
}
