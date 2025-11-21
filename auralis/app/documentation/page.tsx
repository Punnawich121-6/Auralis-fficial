import React from 'react';

// Simplified Documentation Header
const DocHeader = () => (
    <header className="sticky top-0 z-50 p-4 bg-black/90 border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 font-bold text-white text-xl">
                AI Hub <span className="text-red-500">X</span> Docs
            </a>
            <a href="/" className="text-red-500 hover:text-white transition text-sm">
                ← Back to Home
            </a>
        </div>
    </header>
);

const DocumentationPage = () => {
    
    // Static Table of Contents links
    const toc = [
        { id: 'quick-start', title: '1. Quick Start' },
        { id: 'unified-api', title: '2. The Unified API' },
        { id: 'smart-routing', title: '3. Smart Routing & Cost' },
        { id: 'enterprise-security', title: '4. Enterprise & Security' },
        { id: 'dashboard-billing', title: '5. Dashboard & Billing' },
    ];

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
            <DocHeader />
            
            <main className="max-w-7xl mx-auto flex">
                
                {/* 1. Left Sidebar: Table of Contents */}
                <aside className="hidden lg:block w-64 p-8 sticky top-[68px] h-[calc(100vh-68px)] border-r border-white/10 overflow-y-auto">
                    <h3 className="text-lg font-bold mb-4 text-red-400">TABLE OF CONTENTS</h3>
                    <nav className="space-y-3">
                        {toc.map((item) => (
                            <a 
                                key={item.id}
                                href={`#${item.id}`} 
                                className="block text-gray-400 hover:text-red-500 transition text-sm"
                            >
                                {item.title}
                            </a>
                        ))}
                    </nav>
                </aside>

                {/* 2. Main Content Area */}
                <article className="flex-grow p-8 lg:p-12">
                    
                    <h1 className="text-5xl font-extrabold mb-4 text-white">
                        AI Hub X Documentation
                    </h1>
                    <p className="text-gray-400 text-lg mb-10">
                        The single API solution for accessing the world's top 10 LLMs with enterprise reliability.
                    </p>
                    
                    {/* --- Section 1: Quick Start --- */}
                    <section id="quick-start" className="mb-12 pt-8 border-t border-white/10">
                        <h2 className="text-3xl font-bold mb-4 text-red-500">1. Quick Start</h2>
                        <p className="text-gray-300 mb-6">
                            Start immediately with a **single API Key**. Forget juggling multiple credentials.
                        </p>
                        
                        <h3 className="text-2xl font-semibold mb-3">1.1 Installation</h3>
                        <div className="bg-[#1e1e1e] p-4 rounded-lg font-mono text-sm overflow-x-auto mb-6">
                            <p className="text-green-400"># Install the official SDK (Node/React)</p>
                            <p className="text-white">$ <span className="text-yellow-400">npm install</span> aihub-x-client</p>
                            <p className="text-green-400"># Install the official SDK (Python)</p>
                            <p className="text-white">$ <span className="text-yellow-400">pip install</span> aihub-x-client</p>
                        </div>

                        <h3 className="text-2xl font-semibold mb-3">1.2 Authentication</h3>
                        <p className="text-gray-300 mb-2">
                            Initialize your client using the Single Unified API Key obtained from your dashboard.
                        </p>
                        <div className="bg-[#1e1e1e] p-4 rounded-lg font-mono text-sm overflow-x-auto">
                            <p><span className="text-blue-400">const</span> <span className="text-yellow-400">apiKey</span> = <span className="text-green-400">"YOUR_AIHUBX_KEY"</span>;</p>
                            <p><span className="text-blue-400">const</span> <span className="text-yellow-400">aiClient</span> = <span className="text-purple-400">new</span> AIHubClient(apiKey);</p>
                        </div>
                    </section>
                    
                    {/* --- Section 2: The Unified API --- */}
                    <section id="unified-api" className="mb-12 pt-8 border-t border-white/10">
                        <h2 className="text-3xl font-bold mb-4 text-red-500">2. The Unified `generate` Method</h2>
                        <p className="text-gray-300 mb-6">
                            Use one powerful method (`aiClient.generate`) to access all 10 models simultaneously or sequentially.
                        </p>

                        <h3 className="text-2xl font-semibold mb-3">2.1 Method Signature (API Endpoint เดียว)</h3>
                        <div className="bg-[#1e1e1e] p-4 rounded-lg font-mono text-sm overflow-x-auto mb-4">
                            <p><span className="text-blue-400">await</span> aiClient.generate({'{'}</p>
                            <p className="pl-4"><span className="text-green-400">models</span>: string[], <span className="text-gray-500">// (Array of Strings) โมเดลที่ต้องการเรียกใช้</span></p>
                            <p className="pl-4"><span className="text-green-400">task</span>: string, <span className="text-gray-500">// ระบุวัตถุประสงค์ของงาน</span></p>
                            <p className="pl-4"><span className="text-green-400">output</span>: string, <span className="text-gray-500">// รูปแบบการส่งออกที่ต้องการ (เช่น 'comparative_report')</span></p>
                            <p>{'}'});</p>
                        </div>

                        <h3 className="text-2xl font-semibold mb-3">2.2 Example: Comparative Analysis</h3>
                        <p className="text-gray-300 mb-2">
                            Request a comparative report using multiple leading models.
                        </p>
                         <div className="bg-[#1e1e1e] p-4 rounded-lg font-mono text-sm overflow-x-auto">
                            <p><span className="text-blue-400">await</span> aiClient.generate({'{'}</p>
                            <p className="pl-4"><span className="text-green-400">models</span>: ['gpt-4', 'claude-3', 'gemini-pro'],</p>
                            <p className="pl-4"><span className="text-green-400">task</span>: 'Analyze market trends',</p>
                            <p className="pl-4"><span className="text-green-400">output</span>: 'comparative_report'</p>
                            <p>{'}'});</p>
                             <p><span className="text-gray-500">// Response Format: ผลลัพธ์รวมจากทุกโมเดลในรูปแบบ JSON เดียว</span></p>
                        </div>
                    </section>

                    {/* --- Section 3: Smart Routing & Cost --- */}
                    <section id="smart-routing" className="mb-12 pt-8 border-t border-white/10">
                        <h2 className="text-3xl font-bold mb-4 text-red-500">3. Smart Routing & Optimization</h2>
                        
                        <h3 className="text-2xl font-semibold mb-3">3.1 Latency & Fallback Optimization</h3>
                        <ul className="space-y-3 list-disc pl-5 text-gray-300 mb-6">
                            <li>**Latency Optimization:** ระบบจะส่ง Request ไปยังโมเดลที่ตอบสนองเร็วที่สุดเพื่อผลลัพธ์ที่รวดเร็วทันใจ</li>
                            <li>**Fallback Logic:** หากโมเดลหลัก (เช่น GPT-4) ล้มเหลวหรือ Down ระบบจะสลับไปใช้โมเดลสำรอง (เช่น Claude) ให้โดยอัตโนมัติ เพื่อรับประกัน **99.9% Uptime SLA Guarantee**.</li>
                        </ul>
                        
                        <h3 className="text-2xl font-semibold mb-3">3.2 Cost Control</h3>
                        <ul className="space-y-3 list-disc pl-5 text-gray-300">
                            <li>แสดงวิธีการตั้งค่า `models` โดยเรียงลำดับจากโมเดลที่คุ้มค่าที่สุดก่อน (เช่น `['haiku-4.5', 'gpt-3.5']`) เพื่อประหยัดค่าใช้จ่าย</li>
                            <li>สามารถตั้งค่าเพดานราคา (Price Caps) ในแดชบอร์ด เพื่อให้ระบบสลับไปใช้โมเดลราคาถูกลงโดยอัตโนมัติเมื่อใกล้ถึงขีดจำกัด</li>
                        </ul>
                    </section>

                    {/* --- Section 4: Enterprise & Security --- */}
                    <section id="enterprise-security" className="mb-12 pt-8 border-t border-white/10">
                        <h2 className="text-3xl font-bold mb-4 text-red-500">4. Enterprise & Security</h2>
                        
                        <h3 className="text-2xl font-semibold mb-3">4.1 Data Handling & Compliance</h3>
                        <p className="text-gray-300 mb-6">
                            เราให้ความสำคัญกับ **Enterprise-Grade Security & Compliance**.
                        </p>
                        <ul className="space-y-3 list-disc pl-5 text-gray-300 mb-6">
                            <li>ข้อมูลของคุณถูกเข้ารหัส (Encryption) แบบ End-to-End</li>
                            <li>ไม่มีการนำข้อมูลไปใช้ในการฝึกฝนโมเดลของบุคคลที่สาม</li>
                            <li>รองรับมาตรฐาน: GDPR & CCPA และอยู่ระหว่างการตรวจสอบ SOC 2 Type II attestation (Pending Q4)</li>
                        </ul>
                    </section>
                    
                    {/* --- Section 5: Dashboard & Billing --- */}
                    <section id="dashboard-billing" className="mb-12 pt-8 border-t border-white/10">
                        <h2 className="text-3xl font-bold mb-4 text-red-500">5. Dashboard & Billing</h2>
                        
                        <h3 className="text-2xl font-semibold mb-3">5.1 Centralized Usage Dashboard</h3>
                        <p className="text-gray-300 mb-4">
                            แดชบอร์ดแบบรวมศูนย์ ช่วยให้คุณติดตามและวิเคราะห์การใช้งาน Token และค่าใช้จ่ายของแต่ละโมเดลได้อย่างละเอียดในที่เดียว
                        </p>
                        
                        
                        <h3 className="text-2xl font-semibold mb-3">5.2 Consolidated Billing</h3>
                        <p className="text-gray-300">
                            รูปแบบการเรียกเก็บเงินรวมศูนย์ (Centralized Billing) ช่วยลดความซับซ้อนในการบริหารจัดการค่าใช้จ่ายจากผู้ให้บริการ AI ถึง 10 ราย ให้เหลือเพียงใบแจ้งหนี้เดียว
                        </p>
                    </section>
                </article>
            </main>
            
            <footer className="py-8 text-center text-gray-600 border-t border-white/10">
                &copy; 2024 AI Hub X Documentation. All rights reserved.
            </footer>
        </div>
    );
};

export default DocumentationPage;