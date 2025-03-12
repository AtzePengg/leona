
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Cake, PartyPopper } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 group"
        >
          <Cake 
            className="text-dollhouse-pink transform transition-all duration-300 group-hover:rotate-12" 
            size={32} 
          />
          <span className="font-bubblegum text-2xl md:text-3xl text-dollhouse-pink">
            Leona's 6th Birthday!
          </span>
        </Link>
        
        <nav>
          <Link
            to="/register"
            className={`
              flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300
              ${location.pathname === '/register' 
                ? 'bg-dollhouse-purple text-white font-bold shadow-md' 
                : 'bg-white/80 text-dollhouse-purple hover:bg-dollhouse-purple hover:text-white hover:shadow-md'}
            `}
          >
            <PartyPopper size={18} />
            <span>Register</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
