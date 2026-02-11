import React, { useState } from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Import images
import imgPatio from 'figma:asset/70b02e25929fb5c891ce3970174bceeac7747451.png';
import imgModern from 'figma:asset/f15302aa9bab97ab4c6004854fbe9b5337ce5038.png';

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const projects = [
    { id: 1, category: "Landscaping", title: "Modern Residence", img: imgModern },
    { id: 2, category: "Decking", title: "Modern Deck", img: "https://images.unsplash.com/photo-1768173756660-45fd2bfe6be6?auto=format&fit=crop&q=80&w=800" },
    { id: 3, category: "Renovations", title: "Heritage Reno", img: "https://images.unsplash.com/photo-1768321903885-d0a6798485d2?auto=format&fit=crop&q=80&w=800" },
    { id: 4, category: "Landscaping", title: "Paved Courtyard", img: imgPatio },
    { id: 5, category: "Maintenance", title: "Lawn Care", img: "https://images.unsplash.com/photo-1689728318937-17d24bc0a65c?auto=format&fit=crop&q=80&w=800" },
    { id: 6, category: "Landscaping", title: "Stone Path", img: "https://images.unsplash.com/photo-1663185776834-0c86f6ced17b?auto=format&fit=crop&q=80&w=800" },
    { id: 7, category: "Decking", title: "Poolside Deck", img: "https://images.unsplash.com/photo-1710046385390-d8f68517c21b?auto=format&fit=crop&q=80&w=800" },
    { id: 8, category: "Renovations", title: "Timber Detail", img: "https://images.unsplash.com/photo-1601391548091-de4ff62ee29c?auto=format&fit=crop&q=80&w=800" },
    { id: 9, category: "Landscaping", title: "Backyard Oasis", img: "https://images.unsplash.com/photo-1558905549-05244e8c1488?auto=format&fit=crop&q=80&w=800" }, // New mock
    { id: 10, category: "Maintenance", title: "Hedge Trimming", img: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=800" }, // New mock
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const filters = ['All', 'Landscaping', 'Decking', 'Renovations', 'Maintenance'];

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredProjects.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredProjects.length) % filteredProjects.length);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#2C2C2C] py-24 text-center px-6">
        <h1 className="font-serif text-5xl font-bold text-[#FAFAF7] mb-4">Portfolio</h1>
        <p className="text-[#FAFAF7]/60 text-lg">A selection of our finest work.</p>
      </section>

      {/* Filters */}
      <section className="py-12 bg-[#FAFAF7] border-b border-[#E0D8D0] sticky top-[80px] z-30">
        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-4">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-full uppercase tracking-widest text-xs font-bold transition-all
                ${filter === f 
                  ? 'bg-[#C4956A] text-white' 
                  : 'bg-white border border-[#E0D8D0] text-[#6B6B6B] hover:border-[#C4956A]'}
              `}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-white min-h-[600px]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="aspect-square relative group cursor-pointer overflow-hidden rounded-md bg-gray-100"
                  onClick={() => setLightboxIndex(index)}
                >
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-[#C4956A] text-xs uppercase tracking-widest font-bold mb-1">{project.category}</span>
                    <h3 className="text-white font-serif text-xl">{project.title}</h3>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
          <div 
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 transition-opacity duration-300"
            onClick={() => setLightboxIndex(null)}
          >
            <button className="absolute top-6 right-6 text-white/50 hover:text-white">
              <X size={40} />
            </button>
            
            <button className="absolute left-4 md:left-8 text-white/50 hover:text-white" onClick={prevImage}>
              <ChevronLeft size={48} />
            </button>
            
            <div className="max-w-5xl max-h-[80vh] relative" onClick={e => e.stopPropagation()}>
              <img 
                src={filteredProjects[lightboxIndex].img} 
                alt={filteredProjects[lightboxIndex].title}
                className="max-h-[80vh] w-auto object-contain rounded-sm"
              />
              <div className="text-center mt-4">
                <h3 className="text-white font-serif text-2xl">{filteredProjects[lightboxIndex].title}</h3>
                <span className="text-[#C4956A] uppercase tracking-widest text-sm">{filteredProjects[lightboxIndex].category}</span>
              </div>
            </div>

            <button className="absolute right-4 md:right-8 text-white/50 hover:text-white" onClick={nextImage}>
              <ChevronRight size={48} />
            </button>
          </div>
      )}
    </div>
  );
};
