
import React, { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Check, Calendar, CalendarCheck, MapPin, PartyPopper } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';

const Confirmation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData;
  
  useEffect(() => {
    // If no form data, redirect to registration page
    if (!formData) {
      navigate('/register');
    }
  }, [formData, navigate]);
  
  if (!formData) {
    return null; // Will redirect via useEffect
  }
  
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10 text-center">
              <div className="inline-flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-dollhouse-green/20 rounded-full flex items-center justify-center">
                  <Check size={32} className="text-dollhouse-green" />
                </div>
              </div>
              
              <h1 className="font-bubblegum text-4xl md:text-5xl text-dollhouse-purple mb-4">
                You're All Set!
              </h1>
              
              <p className="text-gray-600">
                Thanks for registering for Leona's 7th birthday party. We're so excited to see you there!
              </p>
            </div>
            
            <div className="dollhouse-card p-8 md:p-12 mb-8">
              <h2 className="font-bubblegum text-2xl text-dollhouse-purple mb-6 text-center">
                Registration Details
              </h2>
              
              <div className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <p className="text-gray-500 text-sm">Child's Name</p>
                    <p className="font-bold text-dollhouse-purple">{formData.childName}</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-500 text-sm">Parent's Name</p>
                    <p className="font-bold text-dollhouse-purple">{formData.parentName}</p>
                  </div>
                </div>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <p className="text-gray-500 text-sm">Email Address</p>
                    <p className="font-bold text-dollhouse-purple">{formData.email}</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-500 text-sm">Phone Number</p>
                    <p className="font-bold text-dollhouse-purple">{formData.phone}</p>
                  </div>
                </div>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <p className="text-gray-500 text-sm">Number of Guests</p>
                    <p className="font-bold text-dollhouse-purple">
                      {formData.numberOfGuests} {formData.numberOfGuests === 1 ? 'guest' : 'guests'}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-gray-500 text-sm">Allergies or Dietary Restrictions</p>
                    <p className="font-bold text-dollhouse-purple">
                      {formData.allergies || 'None'}
                    </p>
                  </div>
                </div>
                
                {formData.message && (
                  <div>
                    <p className="text-gray-500 text-sm">Message</p>
                    <p className="font-bold text-dollhouse-purple">{formData.message}</p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="dollhouse-card p-8 text-center mb-8">
              <h2 className="font-bubblegum text-2xl text-dollhouse-purple mb-6">
                Party Details
              </h2>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col items-center">
                  <CalendarCheck size={28} className="text-dollhouse-pink mb-3" />
                  <p className="font-bold text-dollhouse-purple">Saturday, April 5th, 2024</p>
                  <p className="text-gray-600">2:00 PM - 5:00 PM</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <MapPin size={28} className="text-dollhouse-blue mb-3" />
                  <p className="font-bold text-dollhouse-purple">Ackerstrasse 11</p>
                  <p className="text-gray-600">8005 Zürich</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link to="/" className="dollhouse-button inline-flex items-center">
                <PartyPopper size={20} className="mr-2" />
                Back to Homepage
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Confirmation;
