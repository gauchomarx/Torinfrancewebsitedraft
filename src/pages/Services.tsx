import React from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';

interface ServicesProps {
    onNavigate: (page: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const serviceList = [
    {
      title: "Garden Maintenance",
      desc: "More than just mowing. We provide holistic garden care to ensure your plants thrive in every season.",
      bullets: ["Lawn care & edging", "Hedge trimming & pruning", "Weed control & fertilization", "Seasonal planting"],
      img: "https://images.unsplash.com/photo-1689728318937-17d24bc0a65c?auto=format&fit=crop&q=80&w=800",
      align: "left"
    },
    {
      title: "Landscaping",
      desc: "Full-scale garden renovations. We take your vision and turn it into a living, breathing reality.",
      bullets: ["Garden design & layout", "Turf installation", "Retaining walls", "Irrigation systems"],
      img: "https://images.unsplash.com/photo-1721222204128-3f8262e14f35?auto=format&fit=crop&q=80&w=800",
      align: "right"
    },
    {
      title: "Decking & Outdoor",
      desc: "Extend your living space outdoors with custom timber work designed to last.",
      bullets: ["Hardwood decking", "Pergolas & gazebos", "Privacy screens", "Outdoor seating"],
      img: "https://images.unsplash.com/photo-1768173756660-45fd2bfe6be6?auto=format&fit=crop&q=80&w=800",
      align: "left"
    },
    {
      title: "Renovation Builds",
      desc: "High-quality structural updates for your home. We handle the tricky stuff with finesse.",
      bullets: ["Structural alterations", "Bathroom upgrades", "Carports", "Fencing & gates"],
      img: "https://images.unsplash.com/photo-1768321903885-d0a6798485d2?auto=format&fit=crop&q=80&w=800",
      align: "right"
    }
  ];

  return (
    <div className="pt-20">
      {/* Page Hero */}
      <section className="bg-gradient-to-b from-[#5C4033] to-[#3A2920] py-32 text-center px-6">
        <div>
          <span className="text-[#C4956A] uppercase tracking-[0.2em] font-semibold text-sm mb-4 block">
            Our Expertise
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#FAFAF7] mb-6">
            Services & Craftsmanship
          </h1>
          <p className="text-xl text-[#FAFAF7]/80 max-w-2xl mx-auto">
            Professional trades executed with an artist's touch.
          </p>
        </div>
      </section>

      {/* Service Sections */}
      {serviceList.map((service, idx) => (
        <section 
          key={idx} 
          className={`py-24 ${idx % 2 === 0 ? 'bg-white' : 'bg-[#F5F0EB]'}`}
        >
          <div className="container mx-auto px-6">
            <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${service.align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image */}
              <div 
                className="w-full lg:w-1/2"
              >
                <div className="aspect-[16/10] rounded-lg overflow-hidden shadow-2xl relative">
                   <img 
                    src={service.img} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                   />
                </div>
              </div>

              {/* Content */}
              <div 
                className="w-full lg:w-1/2"
              >
                <span className="text-[#6B7F5E] text-sm uppercase tracking-[0.2em] font-bold mb-2 block">
                  Service 0{idx + 1}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#5C4033] mb-6">
                  {service.title}
                </h2>
                <p className="text-[#3A3A3A] text-lg leading-relaxed mb-8">
                  {service.desc}
                </p>
                <ul className="space-y-3">
                  {service.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-center text-[#6B6B6B]">
                      <span className="text-[#C4956A] mr-3 font-bold text-lg">—</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <SectionHeader label="How It Works" title="Our Process" subtitle="Simple, transparent, and collaborative." />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                {[
                    { title: "Chat", desc: "We meet to discuss your ideas and budget." },
                    { title: "Design", desc: "We plan the project and select materials." },
                    { title: "Build", desc: "Our team gets to work with minimal disruption." },
                    { title: "Enjoy", desc: "We handover your beautiful new space." }
                ].map((step, i) => (
                    <div 
                        key={i}
                        className="relative p-6 border-t border-[#E0D8D0]"
                    >
                        <span className="text-8xl font-serif text-[#C4956A]/10 absolute top-4 right-4 leading-none select-none">
                            {i + 1}
                        </span>
                        <h4 className="font-serif text-xl font-bold text-[#5C4033] mb-3 relative z-10">{step.title}</h4>
                        <p className="text-[#6B6B6B] relative z-10">{step.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};
