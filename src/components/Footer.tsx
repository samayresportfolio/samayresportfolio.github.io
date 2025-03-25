
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-primary">Sam Ayres</a>
            <p className="text-gray-600 mt-2">UX Designer crafting thoughtful digital experiences.</p>
          </div>
          
          <div>
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              <a href="#home" className="text-gray-600 hover:text-primary transition-colors">Home</a>
              <a href="#projects" className="text-gray-600 hover:text-primary transition-colors">Projects</a>
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">About</a>
              <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © {currentYear} Sam Ayres. All rights reserved.
          </p>
          <div className="flex items-center text-gray-600 text-sm">
            <span>Made with</span>
            <Heart size={14} className="mx-1 text-primary" fill="currentColor" />
            <span>and attention to detail.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
