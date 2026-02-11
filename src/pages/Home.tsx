import React from 'react';
import { Button } from '../components/ui/Button';
import { SectionHeader } from '../components/ui/SectionHeader';

// Import images
import imgPatio from 'figma:asset/70b02e25929fb5c891ce3970174bceeac7747451.png';
import imgModern from 'figma:asset/f15302aa9bab97ab4c6004854fbe9b5337ce5038.png';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const services = [
    { title: "Garden Maintenance", icon: "🌿", desc: "Regular care to keep your sanctuary thriving year-round." },
    { title: "Landscaping", icon: "🏞️", desc: "Complete garden transformations from design to planting." },
    { title: "Decking & Outdoor", icon: "🪵", desc: "Custom timber decks, pergolas, and outdoor living areas." },
    { title: "Renovation Builds", icon: "🏠", desc: "Structural home improvements and artisan updates." },
  ];

  const projects = [
    { title: "Riverside Terrace", category: "Landscaping", img: imgModern },
    { title: "The Heritage Front", category: "Renovation", img: "https://images.unsplash.com/photo-1768321903885-d0a6798485d2?auto=format&fit=crop&q=80&w=600" },
    { title: "Paved Courtyard", category: "Paving", img: imgPatio },
    { title: "Stone Pathway", category: "Landscaping", img: "https://images.unsplash.com/photo-1663185776834-0c86f6ced17b?auto=format&fit=crop&q=80&w=600" },
    { title: "Timber Feature", category: "Detail", img: "https://images.unsplash.com/photo-1601391548091-de4ff62ee29c?auto=format&fit=crop&q=80&w=600" },
    { title: "Native Garden", category: "Planting", img: "https://images.unsplash.com/photo-1689728318937-17d24bc0a65c?auto=format&fit=crop&q=80&w=600" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image & Gradient */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1721222204128-3f8262e14f35?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#5C4033]/90 via-[#3A2920]/80 to-[#2C3E28]/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[700px]">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-[#C4956A]" />
              <span className="text-[#C4956A] uppercase tracking-[0.2em] font-semibold text-sm">
                Landscaping & Renovations
              </span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#FAFAF7] leading-tight mb-8">
              Crafting Spaces <br/>
              <span className="italic font-light text-[#D4AD88]">Built to Last</span>
            </h1>
            
            <p className="text-xl text-[#FAFAF7]/90 mb-10 leading-relaxed max-w-lg">
              We bring an artist's eye to the trades. From bespoke gardens to structural renovations, we build with purpose and precision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" onClick={() => onNavigate('Contact')}>
                Get a Free Quote
              </Button>
              <Button variant="outline" onClick={() => onNavigate('Gallery')}>
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-[#F5F0EB]">
        <div className="container mx-auto px-6">
          <SectionHeader 
            label="What We Do" 
            title="From Lawns to Full Builds" 
            subtitle="Comprehensive trades and landscaping services for the modern home."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-md border border-[#E0D8D0] overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-[220px] bg-gradient-to-br from-[#E0D8D0] to-[#F5F0EB] flex items-center justify-center relative overflow-hidden">
                   {/* Abstract Pattern or Image could go here */}
                   <div className="absolute inset-0 bg-[#5C4033]/5 group-hover:bg-[#5C4033]/10 transition-colors" />
                   <span className="text-6xl filter drop-shadow-sm transform group-hover:scale-110 transition-transform duration-300">{service.icon}</span>
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-xl font-bold text-[#5C4033] mb-3">{service.title}</h3>
                  <p className="text-[#6B6B6B] leading-relaxed mb-4">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="secondary" onClick={() => onNavigate('Services')}>View All Services</Button>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader 
            label="Recent Projects" 
            title="Work We're Proud Of" 
            className="mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative aspect-square overflow-hidden rounded-md cursor-pointer"
                onClick={() => onNavigate('Gallery')}
              >
                <img 
                  src={project.img} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-[#C4956A] text-xs uppercase tracking-widest font-bold mb-2">{project.category}</span>
                  <h4 className="text-white font-serif text-2xl">{project.title}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="secondary" onClick={() => onNavigate('Gallery')}>View Full Gallery</Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#F5F0EB]">
        <div className="container mx-auto px-6">
          <SectionHeader 
            label="Kind Words" 
            title="What Our Clients Say" 
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "Absolutely transformed our backyard. The attention to detail is unlike any other trade we've used.", name: "Sarah J.", loc: "Paddington" },
              { quote: "Professional, clean, and incredibly creative. They solved drainage issues we didn't even know we had.", name: "Michael R.", loc: "Red Hill" },
              { quote: "The decking looks stunning. A true craftsman who takes pride in every board laid.", name: "Emma T.", loc: "New Farm" },
            ].map((t, i) => (
              <div 
                key={i}
                className="bg-white p-10 rounded-md border border-[#E0D8D0] relative"
              >
                <span className="absolute top-6 left-6 text-6xl text-[#C4956A]/20 font-serif leading-none">“</span>
                <p className="relative z-10 italic text-[#3A3A3A] mb-6 leading-relaxed">
                  {t.quote}
                </p>
                <div>
                  <h5 className="font-bold text-[#5C4033] font-serif text-lg">{t.name}</h5>
                  <span className="text-xs uppercase text-[#6B6B6B] tracking-widest">{t.loc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
