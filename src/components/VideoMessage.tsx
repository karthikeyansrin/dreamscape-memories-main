import { Play, Heart, Camera } from 'lucide-react';
import { useState } from 'react';

const VideoMessage = () => {
  const [showVideoPlaceholder, setShowVideoPlaceholder] = useState(false);

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="elegant-heading text-5xl md:text-6xl font-bold mb-6 text-gradient-romantic">
            A Special Message for You
          </h2>
          <p className="love-quote text-xl max-w-2xl mx-auto">
            I've prepared something extra special - a personal message just for you, 
            straight from my heart to yours.
          </p>
        </div>

        {/* Video/Audio Message Area */}
        <div className="romantic-card p-8 mb-8">
          {!showVideoPlaceholder ? (
            <div 
              className="relative bg-gradient-sunset rounded-lg p-12 cursor-pointer group"
              onClick={() => setShowVideoPlaceholder(true)}
            >
              <div className="flex flex-col items-center">
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                  <div className="absolute inset-0 bg-white/10 rounded-full animate-gentle-pulse"></div>
                </div>
                <h3 className="elegant-heading text-2xl font-semibold text-white mb-2">
                  Click to Play My Birthday Message
                </h3>
                <p className="text-white/80">
                  A heartfelt video message recorded just for your special day ✨
                </p>
              </div>
              
              {/* Decorative hearts */}
              <Heart className="absolute top-4 right-4 text-white/30 w-6 h-6" />
              <Heart className="absolute bottom-4 left-4 text-white/30 w-4 h-4" />
            </div>
          ) : (
            <div className="relative bg-black rounded-lg overflow-hidden">
              {/* Placeholder for actual video */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <Camera className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-lg text-muted-foreground">
                    Replace this with your actual video/audio message
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    You can embed YouTube, Vimeo, or upload your own media
                  </p>
                </div>
              </div>
              
              {/* Video controls placeholder */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 rounded p-2 flex items-center">
                <button className="text-white mr-4">
                  <Play className="w-5 h-5" />
                </button>
                <div className="flex-1 bg-white/20 rounded-full h-1 mr-4">
                  <div className="bg-primary h-full rounded-full w-1/3"></div>
                </div>
                <span className="text-white text-sm">2:35</span>
              </div>
            </div>
          )}
        </div>

        {/* Audio Message Option */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="romantic-card p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                <Play className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="elegant-heading text-lg font-semibold">Voice Message</h4>
                <p className="text-sm text-muted-foreground">Listen to my words of love</p>
              </div>
            </div>
            <p className="love-quote text-sm">
              A sweet audio recording where I share my favorite memories and birthday wishes for you.
            </p>
          </div>

          <div className="romantic-card p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                <Heart className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h4 className="elegant-heading text-lg font-semibold">Love Playlist</h4>
                <p className="text-sm text-muted-foreground">Our special songs</p>
              </div>
            </div>
            <p className="love-quote text-sm">
              A curated playlist of songs that remind me of you and our beautiful journey together.
            </p>
          </div>
        </div> */}

        {/* Instructions for user */}
        {/* <div className="mt-12 romantic-card p-6 text-left">
          <h4 className="elegant-heading text-lg font-semibold mb-3 text-center">
            How to Add Your Personal Message:
          </h4>
          <div className="love-quote text-sm space-y-2">
            <p>• <strong>Video:</strong> Upload to YouTube/Vimeo and embed the link, or use HTML5 video element</p>
            <p>• <strong>Audio:</strong> Use HTML5 audio element or embed from SoundCloud/Spotify</p>
            <p>• <strong>Playlist:</strong> Embed Spotify playlist or create a custom music player</p>
            <p className="text-primary font-medium mt-4">
              💡 Tip: Record a heartfelt birthday message and replace the placeholder above!
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default VideoMessage;