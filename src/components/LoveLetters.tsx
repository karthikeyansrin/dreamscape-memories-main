import { Quote, Heart } from 'lucide-react';

const quotes = [
  {
    text: "In you, I've found the love of my life and my closest, truest friend.",
    author: "My Heart"
  },
  {
    text: "Every day I love you more than yesterday but not as much as tomorrow.",
    author: "My Promise"
  },
  {
    text: "You are my today and all of my tomorrows.",
    author: "My Forever"
  }
];

const loveNotes = [
  {
    title: "To My Beautiful Soul",
    content: "Your kindness lights up every room you enter. Your laughter is the most beautiful sound in the world. Your love has transformed me into the best version of myself. Thank you for being you, completely and authentically you.",
    date: "Written with all my love"
  },
  {
    title: "My Gratitude",
    content: "I'm grateful for your patience when I'm difficult, your understanding when I'm confused, your love when I'm unlovable, and your presence that makes everything better. You are my safe haven and my greatest adventure.",
    date: "Today and always"
  },
  {
    title: "My Promise to You",
    content: "I promise to love you in good times and bad, to support your dreams, to celebrate your victories, to comfort you in defeats, and to grow old with you by my side. You are my heart, my home, my everything.",
    date: "For all eternity"
  }
];

const LoveLetters = () => {
  return (
    <section className="py-20 px-4 bg-gradient-romantic">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="elegant-heading text-5xl md:text-6xl font-bold mb-6 text-romantic-deep">
            Love Letters & Quotes
          </h2>
          <p className="love-quote text-xl text-romantic-deep/70">
            Words from my heart to yours, capturing the depth of my feelings for you.
          </p>
        </div>

        {/* Romantic Quotes */}
        <div className="mb-16">
          <h3 className="elegant-heading text-3xl font-semibold text-center mb-10 text-romantic-deep">
            Words of Love
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quotes.map((quote, index) => (
              <div key={index} className="romantic-card p-8 text-center">
                <Quote className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="love-quote text-lg mb-4 text-romantic-deep">
                  "{quote.text}"
                </p>
                <p className="text-sm font-medium text-primary">
                  — {quote.author}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Love Notes */}
        <div>
          <h3 className="elegant-heading text-3xl font-semibold text-center mb-10 text-romantic-deep">
            Letters from My Heart
          </h3>
          <div className="space-y-8">
            {loveNotes.map((note, index) => (
              <div 
                key={index} 
                className="romantic-card p-8 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-4">
                  <Heart className="w-6 h-6 text-primary mr-3" />
                  <h4 className="elegant-heading text-2xl font-semibold text-romantic-deep">
                    {note.title}
                  </h4>
                </div>
                <p className="love-quote text-lg leading-relaxed mb-4 text-romantic-deep/80">
                  {note.content}
                </p>
                <p className="text-sm italic text-primary font-medium">
                  {note.date}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="romantic-card p-8 inline-block">
            <p className="love-quote text-xl text-romantic-deep mb-4">
              "And if I had to choose between loving you and breathing... 
              I would use my last breath to tell you I love you."
            </p>
            <p className="text-lg font-medium text-primary">
              Forever yours ❤️
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveLetters;