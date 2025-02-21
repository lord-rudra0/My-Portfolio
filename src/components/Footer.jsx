import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Portfolio</h3>
            <p className="text-secondary mt-2">Building digital experiences</p>
          </div>
          
          <div className="flex space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-secondary">
          <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;