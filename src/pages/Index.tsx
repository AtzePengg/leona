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
        
        <section className="py-16 bg-white/70 backdrop-blur-sm">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-bubblegum text-4xl md:text-5xl text-dollhouse-purple mb-4">
                Party Details
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-dollhouse-pink to-dollhouse-purple mx-auto rounded-full"></div>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              <div className="dollhouse-card p-8 text-center group transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 mx-auto mb-6 bg-dollhouse-pink/10 rounded-full flex items-center justify-center group-hover:bg-dollhouse-pink/20 transition-all">
                  <Calendar size={32} className="text-dollhouse-pink" />
                </div>
                <h3 className="font-bubblegum text-2xl text-dollhouse-purple mb-3">When</h3>
                <p className="text-gray-700 mb-2">Friday, April 5th, 2024</p>
                <div className="flex items-center justify-center space-x-2 text-gray-600">
                  <Clock size={16} />
                  <p>2:00 PM - 5:00 PM</p>
                </div>
              </div>
              
              <div className="dollhouse-card p-8 text-center group transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 mx-auto mb-6 bg-dollhouse-blue/10 rounded-full flex items-center justify-center group-hover:bg-dollhouse-blue/20 transition-all">
                  <MapPin size={32} className="text-dollhouse-blue" />
                </div>
                <h3 className="font-bubblegum text-2xl text-dollhouse-purple mb-3">Where</h3>
                <p className="text-gray-700 mb-2">Ackerstrasse 11</p>
                <p className="text-gray-600">8005 Zürich</p>
              </div>
              
              <div className="dollhouse-card p-8 text-center md:col-span-2 lg:col-span-1 group transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 mx-auto mb-6 bg-dollhouse-green/10 rounded-full flex items-center justify-center group-hover:bg-dollhouse-green/20 transition-all">
                  <Gift size={32} className="text-dollhouse-green" />
                </div>
                <h3 className="font-bubblegum text-2xl text-dollhouse-purple mb-3">What to Bring</h3>
                <p className="text-gray-700 mb-2">Just your smiles and excitement!</p>
                <p className="text-gray-600">No gifts necessary, but if you wish, Leona loves arts & crafts.</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link
                to="/register"
                className="dollhouse-button inline-flex items-center"
              >
                <Star className="mr-2" size={20} />
                RSVP Now
              </Link>
            </div>
          </div>
        </section>
        
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
