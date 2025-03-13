import React from 'react';
import { Link } from 'react-router-dom';
import { Gift, Calendar, MapPin, Star, Heart, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import { IMAGES } from '@/lib/constants';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Header />
      
      <main>
        <Hero />
        
        
        <section className="py-16 bg-gradient-to-r from-dollhouse-pink/10 via-dollhouse-purple/10 to-dollhouse-blue/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-bubblegum text-4xl md:text-5xl text-dollhouse-purple mb-4">
                Gabby's Dollhouse Theme
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-dollhouse-pink to-dollhouse-purple mx-auto rounded-full"></div>
            </div>
            
            <div className="max-w-3xl mx-auto text-center">
              <div className="dollhouse-card p-8 md:p-12 overflow-hidden relative">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-dollhouse-yellow/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-dollhouse-pink/20 rounded-full blur-3xl"></div>
                
                <div className="relative">
                  <div className="mb-8 grid grid-cols-3 gap-4">
                    <div className="aspect-square rounded-2xl overflow-hidden bg-dollhouse-pink/20 flex items-center justify-center animate-float" style={{animationDelay: '0.5s'}}>
                      <img 
                        src={IMAGES.LEONA} 
                        alt="Leona" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="aspect-square rounded-2xl overflow-hidden bg-dollhouse-purple/20 flex items-center justify-center animate-float" style={{animationDelay: '0s'}}>
                      <img 
                        src={IMAGES.LEONA_SMILE} 
                        alt="Leona smiling" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="aspect-square rounded-2xl overflow-hidden bg-dollhouse-blue/20 flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
                      <img 
                        src={IMAGES.LEONA_PEACE} 
                        alt="Leona peace" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6">
                    Join us for a magical celebration inspired by Gabby's Dollhouse! We'll have colorful decorations, fun games, tasty treats, and lots of surprises. Wear your favorite playful outfit and get ready for an afternoon of fun!
                  </p>
                  
                  <div className="flex items-center justify-center">
                    <Heart fill="#FF70B9" className="text-dollhouse-pink mr-2" size={20} />
                    <p className="text-dollhouse-purple font-bold">
                      We can't wait to celebrate with you!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
