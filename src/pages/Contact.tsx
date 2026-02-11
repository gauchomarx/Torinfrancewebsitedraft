import React, { useState } from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API
    setTimeout(() => {
        setFormStatus('success');
        setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#2C2C2C] py-20 text-center px-6">
        <h1 className="font-serif text-5xl font-bold text-[#FAFAF7] mb-4">Get in Touch</h1>
        <p className="text-[#FAFAF7]/60 text-lg">Let's discuss your project.</p>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
                
                {/* Info Column */}
                <div>
                    <h3 className="font-serif text-3xl font-bold text-[#5C4033] mb-6">Let's Build Something</h3>
                    <p className="text-[#6B6B6B] text-lg mb-12 leading-relaxed">
                        Ready to transform your space? Whether it's a small garden update or a major renovation, we're here to help. Reach out for a free quote.
                    </p>
                    
                    <div className="space-y-8">
                        {[
                            { icon: Phone, text: "0400 123 456", sub: null },
                            { icon: Mail, text: "hello@artisanbuilds.com.au", sub: null },
                            { icon: MapPin, text: "Brisbane & Surrounds", sub: "Servicing Northside & Inner West" },
                            { icon: Clock, text: "Mon — Fri, 7am — 5pm", sub: "Sat by Appointment" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full bg-[#F5F0EB] flex items-center justify-center flex-shrink-0 text-[#5C4033]">
                                    <item.icon size={20} />
                                </div>
                                <div>
                                    <p className="font-bold text-[#3A3A3A] text-lg">{item.text}</p>
                                    {item.sub && <p className="text-[#6B6B6B] text-sm mt-1">{item.sub}</p>}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 pt-12 border-t border-[#E0D8D0] flex gap-4">
                        <a href="#" className="p-3 bg-[#F5F0EB] rounded-full text-[#5C4033] hover:bg-[#C4956A] hover:text-white transition-colors"><Instagram /></a>
                        <a href="#" className="p-3 bg-[#F5F0EB] rounded-full text-[#5C4033] hover:bg-[#C4956A] hover:text-white transition-colors"><Facebook /></a>
                    </div>
                </div>

                {/* Form Column */}
                <div className="bg-[#FAFAF7] p-8 md:p-12 rounded-lg border border-[#E0D8D0] relative overflow-hidden">
                    {formStatus === 'success' ? (
                        <div 
                            className="absolute inset-0 bg-[#6B7F5E] flex flex-col items-center justify-center text-white z-10 p-10 text-center transition-all duration-300"
                        >
                            <CheckCircle size={64} className="mb-6" />
                            <h3 className="font-serif text-3xl font-bold mb-4">Message Sent!</h3>
                            <p className="text-lg opacity-90">Thanks for reaching out. We'll be in touch within 24 hours.</p>
                        </div>
                    ) : null}

                    <form onSubmit={handleSubmit} className="space-y-6 relative">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest font-bold text-[#6B7F5E]">Name *</label>
                                <input required type="text" className="w-full px-4 py-3 bg-white border border-[#E0D8D0] rounded-[3px] focus:outline-none focus:border-[#C4956A] focus:ring-1 focus:ring-[#C4956A]" placeholder="Your Name" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest font-bold text-[#6B7F5E]">Phone</label>
                                <input type="tel" className="w-full px-4 py-3 bg-white border border-[#E0D8D0] rounded-[3px] focus:outline-none focus:border-[#C4956A] focus:ring-1 focus:ring-[#C4956A]" placeholder="0400..." />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest font-bold text-[#6B7F5E]">Email *</label>
                            <input required type="email" className="w-full px-4 py-3 bg-white border border-[#E0D8D0] rounded-[3px] focus:outline-none focus:border-[#C4956A] focus:ring-1 focus:ring-[#C4956A]" placeholder="you@email.com" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest font-bold text-[#6B7F5E]">Service Interest</label>
                            <select className="w-full px-4 py-3 bg-white border border-[#E0D8D0] rounded-[3px] focus:outline-none focus:border-[#C4956A] focus:ring-1 focus:ring-[#C4956A]">
                                <option>Garden Maintenance</option>
                                <option>Landscaping</option>
                                <option>Decking & Outdoor</option>
                                <option>Renovation Build</option>
                                <option>Not sure / Other</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest font-bold text-[#6B7F5E]">Message *</label>
                            <textarea required className="w-full px-4 py-3 bg-white border border-[#E0D8D0] rounded-[3px] min-h-[140px] focus:outline-none focus:border-[#C4956A] focus:ring-1 focus:ring-[#C4956A]" placeholder="Tell us about your project..." />
                        </div>

                        <Button variant="primary" type="submit" className="w-full" disabled={formStatus === 'submitting'}>
                            {formStatus === 'submitting' ? 'Sending...' : 'Send Enquiry'}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#F5F0EB]">
        <div className="container mx-auto px-6 max-w-3xl">
            <SectionHeader label="FAQ" title="Common Questions" />
            
            <div className="space-y-0 mt-12 border-t border-[#E0D8D0]">
                {[
                    { q: "Do you charge for quotes?", a: "No, our initial consultation and quote are completely free and obligation-free." },
                    { q: "What areas do you service?", a: "We primarily service Brisbane Northside and Inner West suburbs, but travel for larger projects." },
                    { q: "How long do projects typically take?", a: "Maintenance is ongoing. Small decks take ~1 week. Full landscaping or renovations can take 3-6 weeks depending on scope." },
                    { q: "Are you insured?", a: "Yes, we are fully licensed and insured for all structural landscaping and building works." }
                ].map((faq, i) => (
                    <div key={i} className="py-8 border-b border-[#E0D8D0]">
                        <h4 className="font-serif text-xl font-bold text-[#5C4033] mb-3">{faq.q}</h4>
                        <p className="text-[#6B6B6B]">{faq.a}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};
