import { MapPin, Calendar, Home, Heart, Star, Sparkles } from 'lucide-react';

const dreams = [
  {
    icon: MapPin,
    title: "Travel the World Together",
    description: "Exploring Paris in spring, watching sunsets in Santorini, and creating memories in every corner of the world.",
    timeline: "Our next adventure awaits"
  },
  {
    icon: Home,
    title: "Build Our Dream Home",
    description: "A cozy place filled with laughter, love, and the warmth of our shared dreams. A space that's truly ours.",
    timeline: "When we're ready to nest"
  },
  {
    icon: Heart,
    title: "Grow Old Together",
    description: "Celebrating countless more birthdays, watching each other achieve dreams, and loving deeper with each passing year.",
    timeline: "For all eternity"
  },
  {
    icon: Star,
    title: "Create Our Legacy",
    description: "Whether it's a family, impactful work, or simply the love we share - leaving the world better than we found it.",
    timeline: "Our lasting impact"
  }
];

const promises = [
  "I promise to love you through every season of life",
  "I promise to support your dreams as if they were my own",
  "I promise to laugh with you and comfort you in tears",
  "I promise to choose you, every single day",
  "I promise to build a beautiful future by your side"
];

const FutureTogether = () => {
  return (
    <section className="py-20 px-4 bg-gradient-sunset">
      <div className="max-w-6xl mx-auto">
        {/* <div className="text-center mb-16">
          <h2 className="elegant-heading text-5xl md:text-6xl font-bold mb-6 text-white">
            Our Future Together
          </h2>
          <p className="love-quote text-xl max-w-2xl mx-auto text-white/90">
            Every birthday marks not just the past, but the beautiful future that awaits us. 
            Here are my dreams, hopes, and promises for our journey ahead.
          </p>
        </div> */}

        {/* Dreams Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {dreams.map((dream, index) => {
            const IconComponent = dream.icon;
            return (
              <div 
                key={index}
                className="romantic-card p-8 group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start mb-6">
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="elegant-heading text-xl font-semibold mb-2">
                      {dream.title}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-3">
                      {dream.timeline}
                    </p>
                  </div>
                </div>
                <p className="love-quote leading-relaxed">
                  {dream.description}
                </p>
              </div>
            );
          })}
        </div> */}

        {/* Promises Section */}
        {/* <div className="text-center mb-16">
          <h3 className="elegant-heading text-4xl font-bold mb-8 text-white">
            My Promises to You
          </h3>
          <div className="romantic-card p-8 max-w-3xl mx-auto">
            <div className="space-y-6">
              {promises.map((promise, index) => (
                <div 
                  key={index}
                  className="flex items-start animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Heart className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <p className="love-quote text-lg text-left">
                    {promise}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Timeline Visual */}
        <div className="romantic-card p-8">
          <h3 className="elegant-heading text-3xl font-bold text-center mb-8">
            Our Love Timeline Continues...
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-full"></div>
            
            <div className="space-y-12">
              <div className="flex items-center">
                <div className="flex-1 text-right pr-8">
                  <h4 className="elegant-heading text-lg font-semibold">Today</h4>
                  <p className="love-quote">Your beautiful birthday</p>
                </div>
                <div className="w-4 h-4 bg-primary rounded-full border-4 border-background z-10 relative"></div>
                <div className="flex-1 pl-8">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-1 text-right pr-8">
                  <Calendar className="w-6 h-6 text-accent ml-auto" />
                </div>
                <div className="w-4 h-4 bg-accent rounded-full border-4 border-background z-10 relative"></div>
                <div className="flex-1 pl-8">
                  <h4 className="elegant-heading text-lg font-semibold">Every Day Forward</h4>
                  <p className="love-quote">More love, more memories, more us</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-1 text-right pr-8">
                  <h4 className="elegant-heading text-lg font-semibold">Forever</h4>
                  <p className="love-quote">My love for you, infinite and eternal</p>
                </div>
                <div className="w-4 h-4 bg-romantic-gold rounded-full border-4 border-background z-10 relative animate-gentle-pulse"></div>
                <div className="flex-1 pl-8">
                  <Heart className="w-6 h-6 text-romantic-gold" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureTogether;