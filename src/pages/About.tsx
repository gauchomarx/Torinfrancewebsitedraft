import React from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';

export const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#F5F0EB] py-24 text-center px-6">
        <div>
            <span className="text-[#6B7F5E] uppercase tracking-[0.2em] font-semibold text-sm mb-4 block">
            Our Story
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#5C4033] mb-8">
            The Artisan Behind the Build
            </h1>
            <p className="text-xl text-[#3A3A3A] italic font-serif max-w-3xl mx-auto">
            "An artist by nature. A tradesman by craft. Every project is a canvas."
            </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div
                className="relative"
            >
                <div className="aspect-[3/4] rounded-lg overflow-hidden bg-gray-200">
                    <img 
                        src="https://images.unsplash.com/photo-1620049644455-278ce458370f?auto=format&fit=crop&q=80&w=800" 
                        alt="Portrait"
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Decorative Element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#F5F0EB] -z-10 rounded-full" />
                <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-[#C4956A] -z-10 rounded-full" />
            </div>

            {/* Text */}
            <div>
                <SectionHeader label="The Story" title="Craftsmanship Meets Creativity" centered={false} className="mb-8" />
                
                <div className="space-y-6 text-[#6B6B6B] leading-relaxed">
                    <p>
                        I started my career in the fine arts, sculpting and painting. But I found a deeper satisfaction in creating functional art—spaces where people live, gather, and grow.
                    </p>
                    <p>
                        Transitioning into trades, I brought that artistic discipline with me. Whether it's the precise joinery of a deck or the flowing lines of a garden path, I see every job as a composition.
                    </p>
                    <p>
                        Artisan Builds was founded on a simple promise: to bring premium quality and creative vision to standard trade work. No cutting corners, just honest craftsmanship.
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-[#E0D8D0]">
                    {[
                        { num: "100+", label: "Projects" },
                        { num: "5+", label: "Years Exp" },
                        { num: "100%", label: "Owner Operated" },
                    ].map((stat, i) => (
                        <div key={i}>
                            <span className="block font-serif text-3xl font-bold text-[#5C4033] mb-1">{stat.num}</span>
                            <span className="text-[0.65rem] uppercase tracking-widest text-[#6B7F5E] font-bold">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#F5F0EB]">
        <div className="container mx-auto px-6">
            <SectionHeader label="What Drives Us" title="Built on Values" />
            
            <div className="grid md:grid-cols-3 gap-12 text-center mt-12">
                {[
                    { title: "Quality Over Speed", desc: "We never rush. Good work takes time, and we'd rather do it right once." },
                    { title: "Honest Communication", desc: "No hidden costs. We keep you in the loop at every stage of the build." },
                    { title: "Creative Thinking", desc: "We love a challenge. Complex sites and unique ideas are where we thrive." }
                ].map((val, i) => (
                    <div key={i}>
                        <h3 className="font-serif text-xl font-bold text-[#5C4033] mb-4">{val.title}</h3>
                        <p className="text-[#6B6B6B] leading-relaxed">{val.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Artist Link */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 max-w-2xl">
            <span className="text-[#6B7F5E] uppercase tracking-[0.2em] font-semibold text-sm mb-4 block">The Other Side</span>
            <h2 className="font-serif text-4xl font-bold text-[#5C4033] mb-6">The Artist</h2>
            <p className="text-[#6B6B6B] text-lg mb-8">
                Curious about my background in sculpture and painting? View my personal art portfolio to see where the inspiration comes from.
            </p>
            <Button variant="secondary" onClick={() => window.open('#', '_blank')}>Visit Art Website →</Button>
        </div>
      </section>
    </div>
  );
};
