import { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

// Sample photos with captions - users can replace these with real photos
const photos = [
  {
    id: 1,
    url: "../src/assets/Img1.jpg",
    caption: "Where it all began ✨",
    category: "childhood"
  },
  {
    id: 2,
    url: "../src/assets/Img3.jpg",
    caption: "Standing by you at all times 🌟",
    category: "growing_up"
  },
  {
    id: 3,
    url: "../src/assets/Img2.jpg",
    caption: "The moment my world changed forever 💫",
    category: "us"
  },
  {
    id: 4,
    url: "../src/assets/Img4.jpg",
    caption: "Our first date - the beginning of countless memories 🗺️",
    category: "us"
  },
  {
    id: 5,
    url: "../src/assets/Img5.jpg",
    caption: "Being together 🎉",
    category: "achievements"
  },
  {
    id: 6,
    url: "../src/assets/Img6.jpg",
    caption: "This will always be special 💕",
    category: "recent"
  },
  {
    id: 7,
    url: "../src/assets/Img7.jpg",
    caption: "When my family felt you as their own ✨",
    category: "us"
  },
  {
    id: 8,
    url: "../src/assets/Img8.jpg",
    caption: "Still making me fall in love with you over and over 💕",
    category: "achievements"
  },
  {
    id: 9,
    url: "../src/assets/Img9.jpg",
    caption: "This one's special 🌟",
    category: "recent"
  }
];

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openPhoto = (index: number) => {
    setSelectedPhoto(photos[index].id);
    setCurrentIndex(index);
  };

  const closePhoto = () => {
    setSelectedPhoto(null);
  };

  const nextPhoto = () => {
    const nextIndex = (currentIndex + 1) % photos.length;
    setCurrentIndex(nextIndex);
    setSelectedPhoto(photos[nextIndex].id);
  };

  const prevPhoto = () => {
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    setCurrentIndex(prevIndex);
    setSelectedPhoto(photos[prevIndex].id);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="elegant-heading text-5xl md:text-5xl font-bold mb-6 text-gradient-romantic">
            Our Story in Photos
          </h2>
          <p className="love-quote text-xl max-w-2xl mx-auto">
            From our beautiful beginnings to the precious moments we've shared together - 
            each photo tells a piece of our love story.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="romantic-card group cursor-pointer overflow-hidden flex flex-col items-center"
              onClick={() => openPhoto(index)}
              style={{ aspectRatio: '2/3', maxWidth: '340px', margin: '0 auto' }}
            >
              <div className="relative w-full h-[420px]">
                <img
                  src={photo.url}
                  alt={`Memory ${photo.id}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-xl"
                  style={{ aspectRatio: '2/3' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <p className="text-white text-sm font-medium">{photo.caption}</p>
                </div>
                <Heart className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-6 h-6" />
              </div>
            </div>
          ))}
  </div>

        {/* Modal for selected photo */}
        {selectedPhoto && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={closePhoto}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors z-10"
              >
                ✕
              </button>
              
              <button
                onClick={prevPhoto}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextPhoto}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="romantic-card p-0 overflow-hidden">
                <img
                  src={photos[currentIndex].url}
                  alt={`Memory ${photos[currentIndex].id}`}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                <div className="p-6 bg-gradient-dreamy">
                  <p className="love-quote text-lg text-center">
                    {photos[currentIndex].caption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;