import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Calendar, MapPin } from 'lucide-react';
import { IMAGES } from '@/lib/constants';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState({
    logo: false,
    leona: false,
    cakey: false,
    group: false,
    characters: false
  });
  
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
  
  useEffect(() => {
    // Check if images exist by creating new Image objects
    const checkImage = (src: string, imageKey: keyof typeof imagesLoaded) => {
      const img = new Image();
      img.onload = () => {
        setImagesLoaded(prev => ({ ...prev, [imageKey]: true }));
      };
      img.onerror = () => {
        console.error(`Failed to load image: ${src}`);
        setImagesLoaded(prev => ({ ...prev, [imageKey]: false }));
      };
      img.src = src;
    };

    checkImage(IMAGES.GABBYS_LOGO, 'logo');
    checkImage(IMAGES.LEONA_PEACE, 'leona');
    checkImage(IMAGES.CAKEY_CAT, 'cakey');
    checkImage(IMAGES.GABBYS_GROUP, 'group');
    checkImage(IMAGES.GABBYS_CHARACTERS, 'characters');
  }, []);
  
  return (
    <div ref={containerRef} className="relative min-h-screen bg-white/90">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center py-12 text-center">
          {!imagesLoaded.logo ? (
            <div className="w-64 md:w-96 h-32 mb-8 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Gabby's Dollhouse Logo</p>
            </div>
          ) : (
            <img 
              src={IMAGES.GABBYS_LOGO}
              alt="Gabby's Dollhouse"
              className="w-64 md:w-96 mb-8 animate-bounce-slow"
            />
          )}
          
          <div className="inline-flex items-center justify-center relative mb-8">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-dollhouse-pink via-dollhouse-purple to-dollhouse-blue opacity-75 blur-md"></div>
            <h2 className="relative font-bubblegum text-2xl md:text-3xl text-white bg-dollhouse-pink px-6 py-2 rounded-full">
              Welcome to Gabby's Dollhouse Party!
            </h2>
          </div>
          
          <div className="relative mb-12">
            {!imagesLoaded.leona ? (
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-dollhouse-pink shadow-xl mx-auto bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Leona's Image</p>
              </div>
            ) : (
              <img 
                src={IMAGES.LEONA_PEACE}
                alt="Leona"
                className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-dollhouse-pink shadow-xl mx-auto"
              />
            )}
            
            {imagesLoaded.cakey && (
              <img 
                src={IMAGES.CAKEY_CAT}
                alt="Cakey Cat"
                className="absolute -right-4 -bottom-4 w-24 h-24 md:w-32 md:h-32 animate-bounce-slow"
              />
            )}
          </div>
          
          <h1 className="font-bubblegum text-5xl md:text-7xl lg:text-8xl text-dollhouse-purple mb-12">
            <span className="block relative animate-bounce-slow inline-block">
              Leona's 6<sup>th</sup>
            </span>
            <span className="block text-dollhouse-pink mt-2">
              Birthday Party!
            </span>
          </h1>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
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
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Party Image</span>
                </div>
              </div>
              <p className="text-lg font-bold text-dollhouse-purple">
                Party Motto: Gabby's Dollhouse
              </p>
              <p className="text-gray-600">
                Games, Treats & Fun!
              </p>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <div className="dollhouse-card p-4 overflow-hidden">
              {!imagesLoaded.group ? (
                <div className="w-full h-64 md:h-80 bg-gray-200 rounded-2xl flex items-center justify-center">
                  <p className="text-gray-500">Gabby's Group Image</p>
                </div>
              ) : (
                <img 
                  src={IMAGES.GABBYS_GROUP}
                  alt="Gabby's Dollhouse Characters"
                  className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl"
                />
              )}
            </div>
            <div className="dollhouse-card p-4 overflow-hidden">
              {!imagesLoaded.characters ? (
                <div className="w-full h-64 md:h-80 bg-gray-200 rounded-2xl flex items-center justify-center">
                  <p className="text-gray-500">Gabby's Characters Image</p>
                </div>
              ) : (
                <img 
                  src={IMAGES.GABBYS_CHARACTERS}
                  alt="More Gabby's Dollhouse Friends"
                  className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl"
                />
              )}
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
