import React from 'react';
import { Github, Linkedin, Twitter, Download } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-dark-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-600 dark:text-primary-400">
              Atharva Waghale
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              AIML Student | Web Developer | Graphic Designer
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Atha-x0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/atharva-waghale-8361a7204/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/WaghaleAtharva"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-600 dark:text-primary-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-600 dark:text-primary-400">
              Download CV
            </h3>
            <div className="space-y-3">
              <a
                href="https://docs.google.com/document/d/18YKbz72pbRtJyfsn_dl3G3RxVO5vxLjL/edit?usp=sharing&ouid=100263739301291290550&rtpof=true&sd=true"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Download size={18} />
                <span>Academic Resume</span>
              </a>
              <a
                href="https://drive.google.com/file/d/1eOcjidYUJrXvHtlucCrP33U-fmCFFDpb/view?usp=drive_link"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Download size={18} />
                <span>Design Portfolio</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-dark-700">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Atharva Waghale. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;