
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RegistrationForm from '@/components/RegistrationForm';
import AnimatedBackground from '@/components/AnimatedBackground';

const Register: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="font-bubblegum text-4xl md:text-5xl text-dollhouse-purple mb-4">
              Join Leona's Birthday Party!
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Please fill out the form below to let us know you're coming to celebrate Leona's special day. We can't wait to see you there!
            </p>
          </div>
          
          <RegistrationForm />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Register;
