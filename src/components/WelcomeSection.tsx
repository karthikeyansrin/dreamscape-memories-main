import romanticHeroBg from '@/assets/romantic-hero-bg.jpg';

const WelcomeSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden"
      style={{
        backgroundImage: `url(${romanticHeroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/60" />
      
      <div className="relative z-20 max-w-4xl mx-auto animate-fade-in-up">
        <h1 className="elegant-heading text-5xl md:text-5xl font-bold mb-6 text-shimmer">
          Happy Birthday,
          Lenisha ❤️
        </h1>
        <h2 className="elegant-heading text-5xl md:text-7xl font-bold mb-8 text-gradient-romantic">



        </h2>
        
        <div className="romantic-card max-w-2xl mx-auto p-8 mb-8">
          <p className="love-quote text-xl md:text-xl leading-relaxed">
            Today marks another beautiful year of your existence, and I can't help but feel overwhelmed with gratitude 
            for having you in my life. You are my sunshine on cloudy days, my anchor in stormy seas, 
            and my greatest blessing.
          </p>
        </div>

        {/* <div className="flex justify-center">
          <button className="btn-romantic px-8 py-4 rounded-full text-lg font-medium animate-gentle-pulse">
            Explore Our Love Story ✨
          </button>
        </div> */}
      </div>

      {/* Decorative elements */}
      {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div> */}
    </section>
  );
};

export default WelcomeSection;