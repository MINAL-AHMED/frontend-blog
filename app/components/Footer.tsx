// components/Footer.js

import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full pt-20 md:pt-24 lg:pt-28 bg-neutral-100 dark:bg-neutral-900 border-t">
      <div className="grid grid-cols-1 max-w-5xl items-center gap-2 px-8 mx-auto md:grid-cols-3 md:gap-6">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            cursus convallis dui vel pulvinar.
          </p>
        </div>
        {/* Quick Links Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-sm hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-sm hover:text-gray-400">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/blogvideo" className="text-sm hover:text-gray-400">
                Video
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-sm hover:text-gray-400">
                About
              </Link>
            </li>
          </ul>
        </div>
        {/* Social Media Section */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-xl hover:text-gray-400"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-xl hover:text-gray-400"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-xl hover:text-gray-400"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-xl hover:text-gray-400"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center border-t">
        <p className="text-sm py-4">
          &copy; {new Date().getFullYear()} Your Tom. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
