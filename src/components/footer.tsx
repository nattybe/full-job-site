import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin, faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import React from 'react'

export default function Footer() {
  return (
    <footer className="py-8 w-full border-t text-text border-accent">
      <div className="container mx-auto flex flex-wrap justify-evenly items-center">
        {/* Logo or Site Name */}
        <div className="text-4xl font-bold">A</div>

        {/* Navigation Links */}
        <nav className="flex flex-col flex-wrap justify-center">
          <a href="/" className="hover:text-gray-300">
            Home
          </a>
          <a href="/about" className="hover:text-gray-300">
            About Us
          </a>
          <a href="services" className="hover:text-gray-300">
            Services
          </a>
          <a href="contact" className="hover:text-gray-300">
            Contact
          </a>
        </nav>

        {/* Social Media Icons */}
        <div className="flex flex-col">
          <a
            href="https://github.com/nattybe/"
            target="_blank"
            className="text-xl hover:text-accent"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://github.com/nattybe/"
            target="_blank"
            className="text-xl hover:text-accent"
          >
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
        &copy; 2023 Ahadu Jobs. All rights reserved.
      </div>
    </footer>
  );
}
