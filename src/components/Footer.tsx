
import React from 'react';
import { Heart, Cake, PartyPopper } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t-2 border-dollhouse-pink/20 py-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-3">
            <PartyPopper size={18} className="text-dollhouse-purple" />
            <span className="font-bubblegum text-xl text-dollhouse-purple">
              Leona's 7th Birthday
            </span>
            <Cake size={18} className="text-dollhouse-pink" />
          </div>
          
          <p className="text-center text-gray-600 mb-3">
            Friday, April 5th, 2024 • 2:00 PM - 5:00 PM<br />
            Ackerstrasse 11, 8005 Zürich
          </p>
          
          <div className="flex items-center text-gray-500 text-sm">
            <span>Made with</span>
            <Heart size={14} className="text-dollhouse-pink mx-1" fill="#FF70B9" />
            <span>for Leona</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
