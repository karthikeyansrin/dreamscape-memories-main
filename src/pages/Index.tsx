import { useEffect, useState } from 'react';
import FloatingHearts from '@/components/FloatingHearts';
import WelcomeSection from '@/components/WelcomeSection';
import PhotoGallery from '@/components/PhotoGallery';
import LoveLetters from '@/components/LoveLetters';
import VideoMessage from '@/components/VideoMessage';
import FutureTogether from '@/components/FutureTogether';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Floating hearts animation */}
      <FloatingHearts />
      
      {/* Main content */}
      <main className="relative">
        {/* Welcome/Hero Section */}
        <WelcomeSection />
        
        {/* Photo Gallery */}
        <PhotoGallery />
        
        {/* Love Letters & Quotes */}
        {/* <LoveLetters /> */}
        
        {/* Video/Audio Message */}
        <VideoMessage />
        
        {/* Future Together */}
        <FutureTogether />
        
        {/* Footer */}
        <footer className="py-12 px-4 text-center bg-gradient-dreamy">
          <div className="max-w-2xl mx-auto romantic-card p-8">
            <h3 className="elegant-heading text-2xl font-bold mb-4 text-gradient-romantic">
              Happy Birthday, Lenisha ❤️
            </h3>
            {/* <p className="love-quote text-lg mb-4">
              This website is just a small glimpse into the love I have for you. 
              You deserve all the happiness in the world, today and always.
            </p> */}
            <p className="text-primary font-medium">
              Made with infinite love, just for you!
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
