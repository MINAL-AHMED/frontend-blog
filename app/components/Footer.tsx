import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <footer className="py-12 bg-neutral-100 dark:bg-neutral-900 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className=" text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            Join our vibrant community of explorers as we share our love for
            immersive travel experiences, hidden gems, and cultural encounters
            that leave a lasting impact.
          </p>
        </div>
        <div>
          <h2 className=" text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <Link
                href="/"
                className="hover:text-neutral-400 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-neutral-400 transition-colors duration-300"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/video"
                className="hover:text-neutral-400 transition-colors duration-300"
              >
                Video
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-neutral-400 transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="contact"
                className="hover:text-neutral-400 transition-colors duration-300"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className=" text-lg font-semibold mb-4">Follow Us</h2>
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
        <div>
          <h2 className=" text-lg font-semibold mb-4">Contact Us</h2>
          <p>Dhaka, Bangladesh</p>
          <p>Dhaka 10001</p>
          <p>Email: info@blog.com</p>
          <p>Phone: (017) 456-7890</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">
        © 2024 Tom Blog. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
