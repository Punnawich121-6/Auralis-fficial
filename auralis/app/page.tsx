'use client';

import { useState } from 'react';
// แก้ไข Import ให้ตรงกับไฟล์ Component ที่คุณมี
import Navbar from '@/components/Navbar';
import Pricing from '@/components/pricing'; // <<< Import Component Pricing ใหม่

export default function Home() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError(true);
    } else {
      setError(false);
      alert(`Requesting demo for: ${email}`);
    }
  };

  // ข้อมูล AI Features: แปลงรุ่นย่อยจาก String เป็น Array ใน subModels 
  // และใช้ desc เป็นคำอธิบายทั่วไป
  const aiFeatures = [
    {
      title: "ChatGPT",
      icon: "/logos/logo_chatgpt (1).png",
      desc: "OpenAI's industry-leading models.",
      subModels: ["GPT-5", "GPT-5 Nano", "GPT-5 Mini", "GPT-4.1"]
    },
    {
      title: "Claude",
      icon: "/logos/logo_claude (1).png",
      desc: "Anthropic's powerful and reliable AI.",
      subModels: ["Sonnet 4.5", "Haiku 4.5", "Sonnet 4", "3.7 Sonnet"]
    },
    {
      title: "DeepSeek",
      icon: "/logos/logo_deepseek (1).png",
      desc: "An advanced open-source reasoning model.",
      subModels: ["DeepSeek V3.2 Exp"]
    },
    {
      title: "Gemini",
      icon: "/logos/logo_gimini (1).png",
      desc: "Google's versatile multimodal intelligence.",
      subModels: ["2.5 Flash", "2.5 Pro", "2.5 Flash Lite"]
    },
    {
      title: "Meta Llama",
      icon: "/logos/logo_meta (1).png",
      desc: "Next-generation open source models from Meta.",
      subModels: ["Llama 4 Maverick", "Llama 4 Scout"]
    },
    {
      title: "Mistral",
      icon: "/logos/logo_Mistral (1).png",
      desc: "Efficient and high-performing French AI.",
      subModels: ["Medium 3"]
    },
    {
      title: "Nova",
      icon: "/logos/logo_nova (1).png",
      desc: "Cutting-edge generative AI solution.",
      subModels: ["Nova Pro 1.0"]
    },
    {
      title: "Perplexity",
      icon: "/logos/logo_Perplexity (1).png",
      desc: "AI-powered answer engine for research.",
      subModels: ["Sonar Pro"]
    },
    {
      title: "Qwen",
      icon: "/logos/logo_qwen (1).png",
      desc: "Alibaba's large-scale conversational model.",
      subModels: ["Qwen3 Next 80B A3B Instruct"],
    },
    {
      title: "Grok (xAI)",
      icon: "/logos/xai_logo (1).png",
      desc: "Elon Musk's AI with a touch of sarcasm.",
      subModels: ["Grok 4", "Grok 3"]
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-black font-sans text-white selection:bg-red-600 selection:text-white">

      {/* --- Background Layers (FIXED Position) --- */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auto=format&fit=crop')" }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/20 to-black/90"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      </div>

      {/* --- Scrollable Content Wrapper --- */}
      <div className="relative z-10">

        {/* --- 1. Navbar Component --- */}
        <Navbar />

        {/* --- 2. Hero Section --- */}
        <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-4 max-w-6xl mx-auto pb-20 pt-10">

          <span className="text-red-400 font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-6 border border-red-500/50 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md shadow-lg animate-fade-in-up">
            Unified Intelligence Platform
          </span>

          <h1 className="text-5xl sm:text-7xl font-black mb-8 leading-tight text-white drop-shadow-2xl">
            Access Top 10 AI Models <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-white">
              In One Simple Interface
            </span>
          </h1>

          <p className="text-lg sm:text-2xl font-medium text-gray-200 mb-12 max-w-3xl leading-relaxed drop-shadow-md">
            Stop juggling multiple API keys. We aggregate the world's 10 most powerful AI engines into a single, enterprise-ready platform.
            <br className="hidden sm:block" /> Designed for seamless integration and effortless scaling.
          </p>

          {/* Hero Form */}
          <div id="hero-form" className="w-full max-w-2xl bg-black/70 p-4 rounded-xl border border-white/10 backdrop-blur-md shadow-2xl transform hover:scale-[1.01] transition duration-300">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="relative w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (e.target.value) setError(false);
                  }}
                  className={`w-full h-14 bg-black/50 border ${error ? 'border-red-500' : 'border-gray-500'} rounded px-4 text-white placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition`}
                  placeholder="Enter business email to start free trial"
                />
              </div>
              <button
                type="submit"
                className="h-14 bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 rounded flex items-center justify-center gap-2 transition whitespace-nowrap shadow-[0_4px_14px_0_rgba(220,38,38,0.4)] min-w-[180px]"
              >
                Get Access
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
              </button>
            </form>
          </div>
          {error && (
            <p className="mt-4 text-red-400 font-semibold bg-black/80 px-4 py-2 rounded-md border border-red-900/50">
              ⚠️ Please provide a valid work email.
            </p>
          )}
        </section>

        {/* --- 3. Feature Grid (The 10 AIs) --- */}
        <section id="features" className="py-24 px-6 bg-black/80 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold mb-4">The Power of 10</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Why settle for one? We combine the best capabilities of the top 10 AI models into a unified ecosystem for your business.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {aiFeatures.map((item, index) => (
                <div key={index} className="group p-6 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-red-600/50 transition duration-300 cursor-pointer flex flex-col items-center text-center h-full">

                  {/* Icon Image */}
                  <div className="mb-4 h-14 w-14 flex items-center justify-center group-hover:scale-110 transition duration-300">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="object-contain w-full h-full drop-shadow-md"
                    />
                  </div>

                  <h3 className="text-lg font-bold mb-2 text-white group-hover:text-red-400">{item.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4 flex-grow">{item.desc}</p>

                  {/* --- SUB MODELS TAGS (Rendered from subModels Array) --- */}
                  {item.subModels && (
                    <div className="flex flex-wrap justify-center gap-1.5 mt-auto pt-2 w-full border-t border-white/5">
                      {item.subModels.map((model, idx) => (
                        <span
                          key={idx}
                          className="text-[9px] font-semibold tracking-wide text-gray-400 bg-black/40 border border-white/10 px-1.5 py-0.5 rounded hover:text-white hover:border-red-500/50 transition-all"
                        >
                          {model}
                        </span>
                      ))}
                    </div>
                  )}
                  {/* -------------------------------------------------------- */}

                </div>
              ))}
            </div>
          </div>
        </section>
        

        {/* --- 4. Value Proposition (Integration) --- */}
        <section id="solutions" className="py-24 px-6 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/20 rounded-full blur-[120px]"></div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold mb-6 leading-tight">
                Integration Made <br />
                <span className="text-red-500">Effortless</span>
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Forget about managing 10 different subscriptions, 10 different documentations, and 10 different security protocols.
              </p>
              <ul className="space-y-4">
                {[
                  "Single Unified API for all 10 models",
                  "Centralized Billing & Usage Dashboard",
                  "Enterprise-Grade Security & Compliance",
                  "99.9% Uptime SLA Guarantee"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white font-medium">
                    <div className="w-6 h-6 rounded-full bg-red-600/20 flex items-center justify-center border border-red-600/50">
                      <svg className="w-3 h-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="/documentation" // <<< เปลี่ยนเป็น Link ไปหน้า Documentation
                target="_blank"        // <<< แนะนำให้เปิดใน Tab ใหม่
                className="mt-8 px-8 py-3 rounded bg-white text-black font-bold hover:bg-gray-200 transition inline-block"
              >
                View Demo
              </a>
            </div>

            <div className="relative">
              <div className="rounded-xl border border-white/20 bg-black/60 p-6 backdrop-blur-xl shadow-2xl">
                <div className="flex gap-2 mb-4 border-b border-white/10 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="font-mono text-sm text-gray-300 space-y-2">
                  <p><span className="text-blue-400">const</span> <span className="text-yellow-400">aiClient</span> = <span className="text-purple-400">new</span> AIHubClient(apiKey);</p>
                  <p className="text-gray-500">// Use multiple models with one line</p>
                  <p><span className="text-blue-400">await</span> aiClient.generate({'{'}</p>
                  <p className="pl-4"><span className="text-green-400">models</span>: ['gpt-4', 'claude-3', 'gemini-pro'],</p>
                  <p className="pl-4"><span className="text-green-400">task</span>: 'Analyze market trends',</p>
                  <p className="pl-4"><span className="text-green-400">output</span>: 'comparative_report'</p>
                  <p>{'}'});</p>
                  <p className="text-green-500 mt-4">{'>'} Report generated successfully (0.4s)</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-red-600 p-4 rounded-lg shadow-lg shadow-red-900/50">
                <p className="font-bold text-white text-xl">10x Faster</p>
                <p className="text-xs text-white/80">Development Time</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- 6. Pricing Section (Imported from components/Pricing.tsx) --- */}
        <Pricing />

        {/* --- 5. Footer --- */}
        <footer className="bg-black py-12 border-t border-white/10 text-center md:text-left px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
                <div className="w-6 h-6 bg-red-600 rounded-sm flex items-center justify-center">
                  <span className="font-bold text-white text-xs">A</span>
                </div>
                <span className="font-bold text-lg">AI HUB X</span>
              </div>
              <p className="text-gray-500 text-sm max-w-xs mx-auto md:mx-0">
                Empowering enterprises with the combined intelligence of the world's top 10 AI models.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Product</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="hover:text-red-500 cursor-pointer">Features</li>
                <li className="hover:text-red-500 cursor-pointer">Integration</li>
                <li className="hover:text-red-500 cursor-pointer">Security</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="hover:text-red-500 cursor-pointer">About</li>
                <li className="hover:text-red-500 cursor-pointer">Contact</li>
                <li className="hover:text-red-500 cursor-pointer">Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/5 text-center text-gray-600 text-xs">
            &copy; 2024 AI HUB X Solutions. All rights reserved.
          </div>
        </footer>

      </div>
    </div>
  );
}