
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Calendar, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Add sparkle effect on mouse move
    const container = containerRef.current;
    if (!container) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.85) { // Only create sparkles occasionally
        const sparkle = document.createElement('div');
        
        // Set positions relative to container
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        sparkle.className = 'sparkle';
        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;
        sparkle.style.width = `${Math.random() * 10 + 5}px`;
        sparkle.style.height = `${Math.random() * 10 + 5}px`;
        
        container.appendChild(sparkle);
        
        // Remove sparkle after animation completes
        setTimeout(() => {
          if (container.contains(sparkle)) {
            container.removeChild(sparkle);
          }
        }, 2000);
      }
    };
    
    container.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div ref={containerRef} className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 h-full">
        <div className="flex flex-col items-center justify-center h-full text-center">
          <div className="inline-flex items-center justify-center relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-dollhouse-pink via-dollhouse-purple to-dollhouse-blue opacity-75 blur-md animate-pulse-gentle"></div>
            <h2 className="relative font-bubblegum text-2xl md:text-3xl text-white bg-dollhouse-pink px-6 py-2 rounded-full">
              You're Invited!
            </h2>
          </div>
          
          <h1 className="mt-8 font-bubblegum text-5xl md:text-7xl lg:text-8xl text-dollhouse-purple">
            <span className="block relative animate-bounce-slow inline-block">
              Leona's 6<sup>th</sup>
            </span>
            <span className="block text-dollhouse-pink mt-2">
              Birthday Party!
            </span>
          </h1>
          
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-4xl mx-auto">
            <div className="dollhouse-card p-6 flex flex-col items-center">
              <Calendar className="text-dollhouse-blue mb-4" size={40} />
              <p className="text-lg font-bold text-dollhouse-purple">
                Friday, April 5th
              </p>
              <p className="text-gray-600">
                2:00 PM - 5:00 PM
              </p>
            </div>
            
            <div className="dollhouse-card p-6 flex flex-col items-center">
              <MapPin className="text-dollhouse-pink mb-4" size={40} />
              <p className="text-lg font-bold text-dollhouse-purple">
                Ackerstrasse 11
              </p>
              <p className="text-gray-600">
                8005 Zürich
              </p>
            </div>
            
            <div className="dollhouse-card p-6 md:col-span-2 lg:col-span-1 flex flex-col items-center">
              <div className="mb-4 bg-dollhouse-yellow/20 p-3 rounded-full">
                <img 
                  src="https://source.unsplash.com/featured/?kitty,dollhouse" 
                  alt="Birthday Theme" 
                  className="w-16 h-16 object-cover rounded-full"
                  style={{objectPosition: 'center'}}
                />
              </div>
              <p className="text-lg font-bold text-dollhouse-purple">
                Gabby's Dollhouse Theme
              </p>
              <p className="text-gray-600">
                Games, Treats & Fun!
              </p>
            </div>
          </div>
          
          <Link
            to="/register"
            className="mt-12 dollhouse-button bg-gradient-to-r from-dollhouse-purple to-dollhouse-pink text-lg md:text-xl px-10"
          >
            RSVP Now!
          </Link>
          
          <div className="mt-16 animate-bounce">
            <ArrowDown className="text-dollhouse-purple" size={32} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
