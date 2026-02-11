import React from 'react';
import { FileText, Code, CheckSquare, HardDrive } from 'lucide-react';

export const Admin: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1a1a2e] text-[#e0e0e0] p-8 pt-24 font-mono">
        <div className="container mx-auto max-w-5xl">
            <header className="mb-12 border-b border-[#2a2a4a] pb-8">
                <h1 className="text-3xl font-bold text-[#C4956A] mb-2">Site Administrator Reference</h1>
                <p className="text-[#8FA47E]">Internal documentation & maintenance guide</p>
            </header>

            <div className="grid md:grid-cols-2 gap-8">
                {/* File Structure */}
                <div className="bg-[#16213e] p-6 rounded-lg border border-[#2a2a4a]">
                    <div className="flex items-center gap-3 mb-4 text-[#8FA47E]">
                        <HardDrive size={20} />
                        <h2 className="text-lg font-bold uppercase tracking-widest">File Structure</h2>
                    </div>
                    <ul className="space-y-2 text-sm text-[#a0a0b0]">
                        <li className="pl-2 border-l border-[#2a2a4a]">/components/ui <span className="text-[#555] ml-2">// Reusable atoms (Buttons, Headers)</span></li>
                        <li className="pl-2 border-l border-[#2a2a4a]">/components/layout <span className="text-[#555] ml-2">// Nav, Footer</span></li>
                        <li className="pl-2 border-l border-[#2a2a4a]">/pages <span className="text-[#555] ml-2">// Main views</span></li>
                        <li className="pl-2 border-l border-[#2a2a4a]">App.tsx <span className="text-[#555] ml-2">// Router & Global State</span></li>
                    </ul>
                </div>

                {/* Launch Checklist */}
                <div className="bg-[#16213e] p-6 rounded-lg border border-[#2a2a4a]">
                    <div className="flex items-center gap-3 mb-4 text-[#8FA47E]">
                        <CheckSquare size={20} />
                        <h2 className="text-lg font-bold uppercase tracking-widest">Launch Checklist</h2>
                    </div>
                    <div className="space-y-3">
                         {[
                             "Verify all contact forms send to correct email",
                             "Check mobile responsiveness on all pages",
                             "Compress images (tinypng) before production build",
                             "Set up Google Analytics",
                             "Configure domain DNS records"
                         ].map((item, i) => (
                             <label key={i} className="flex items-center gap-3 cursor-pointer opacity-80 hover:opacity-100">
                                 <input type="checkbox" className="accent-[#C4956A]" />
                                 <span className="text-sm">{item}</span>
                             </label>
                         ))}
                    </div>
                </div>

                {/* Code Snippets */}
                <div className="bg-[#16213e] p-6 rounded-lg border border-[#2a2a4a] md:col-span-2">
                    <div className="flex items-center gap-3 mb-4 text-[#8FA47E]">
                        <Code size={20} />
                        <h2 className="text-lg font-bold uppercase tracking-widest">Common Edits</h2>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-[#C4956A] text-sm font-bold mb-2">Updating Hours</h3>
                            <div className="bg-[#0f3460] p-4 rounded text-xs overflow-x-auto">
                                <code>
                                    // In /pages/Contact.tsx<br/>
                                    {`{ icon: Clock, text: "Mon — Fri, 7am — 5pm" }`}
                                </code>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-[#C4956A] text-sm font-bold mb-2">Adding Projects</h3>
                            <div className="bg-[#0f3460] p-4 rounded text-xs overflow-x-auto">
                                <code>
                                    // In /pages/Gallery.tsx<br/>
                                    {`const projects = [ ...newProject ]`}
                                </code>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
