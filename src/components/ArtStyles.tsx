import React, { useEffect } from 'react';
import ArtStyleCard from './ArtStyleCard';

const ART_STYLES_DATA = [
  {
    id: 1,
    title: "Digital Art",
    description: "Modern artistic compositions created using digital tools, ranging from 2D digital paintings to complex 3D works.",
    imageSrc: "https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
  },
  {
    id: 2,
    title: "Watercolor",
    description: "Characterized by transparent, flowing washes and a luminous quality achieved through layering translucent colors.",
    imageSrc: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
  },
  {
    id: 3,
    title: "Anime & Manga",
    description: "Japanese-inspired illustration style characterized by colorful graphics, vibrant characters, and fantastical themes.",
    imageSrc: "https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
  },
  {
    id: 4,
    title: "Concept Art",
    description: "Illustrations that convey a visual representation of a design, idea, or mood for use in films, video games, or animation.",
    imageSrc: "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2544&q=80"
  },
  {
    id: 5,
    title: "Pixel Art",
    description: "Digital art form where images are created at the pixel level, characterized by its distinctive blocky appearance.",
    imageSrc: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
  },
  {
    id: 6,
    title: "Fantasy",
    description: "Art depicting imaginative and mystical themes, often featuring magical elements, mythical creatures, and enchanted worlds.",
    imageSrc: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2684&q=80"
  }
];

const ArtStyles = () => {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    document.querySelectorAll('.fade-in-section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="content-wrap py-16 bg-gray-50 dark:bg-gray-900">
      <div className="fade-in-section">
        <h2 className="text-3xl font-bold mb-2 text-center">
          Explore <span className="artful-gradient-text">Art Styles</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-10">
          Discover different artistic techniques and find inspiration for your next masterpiece
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ART_STYLES_DATA.map((style, index) => (
          <div key={style.id} className="fade-in-section" style={{ transitionDelay: `${index * 100}ms` }}>
            <ArtStyleCard
              title={style.title}
              description={style.description}
              imageSrc={style.imageSrc}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtStyles;
