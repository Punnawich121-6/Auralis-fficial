// use client ไม่จำเป็นสำหรับ Component นี้เนื่องจากไม่มีการใช้ state/effect
// แต่ถ้าใช้ Next.js App Router, Component ที่ไม่มี 'use client' จะเป็น Server Component โดยอัตโนมัติ

import React from 'react';

// ส่วนนี้คือ Pricing Section ทั้งหมด
export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-black/70 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">Flexible Pricing for Every Scale</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Whether you're a startup or a global enterprise, choose the payment model that fits your operational needs.
          </p>
        </div>

        {/* Pricing Cards Container */}
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch">
          
          {/* --- Plan 1: Pay-as-You-Go (สำหรับ SME/Startups) --- */}
          <div className="bg-black/70 p-8 rounded-xl border border-white/10 shadow-2xl w-full max-w-md flex flex-col hover:border-gray-500 transition duration-300">
            <h3 className="text-2xl font-bold text-white mb-2">Pay-as-You-Go</h3>
            <p className="text-gray-400 mb-4">เหมาะสำหรับบริษัทขนาดเล็ก หรือโครงการนำร่อง</p>
            
            <div className="text-5xl font-black text-white mb-6">
              $0.015
              <span className="text-lg font-medium text-gray-500">/ 1K Tokens</span>
            </div>
            
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start gap-2 text-gray-300">
                <span className="text-red-500 mt-1">✓</span> 
                **จ่ายตามจริง:** ไม่มีค่าบริการรายเดือนขั้นต่ำ
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <span className="text-red-500 mt-1">✓</span> 
                **เข้าถึง 10 Models:** ใช้ Models ระดับรอง/กลางได้ทันที
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <span className="text-red-500 mt-1">✓</span> 
                **Single API Key:** เริ่มต้นง่ายด้วย API เดียว
              </li>
              <li className="flex items-start gap-2 text-gray-500">
                <span className="text-red-500 mt-1">✓</span> 
                **ไม่จำกัดการใช้งาน:** ยืดหยุ่นตามปริมาณงาน
              </li>
            </ul>
            
            <a 
              href="#hero-form"
              className="w-full text-center py-3 rounded-lg bg-gray-700 text-white font-bold hover:bg-gray-600 transition"
            >
              เริ่มใช้แบบ Pay-as-You-Go
            </a>
          </div>
          
          {/* --- Plan 2: Enterprise Subscription (สำหรับบริษัทใหญ่) --- */}
          <div className="bg-white p-8 rounded-xl border border-red-500 shadow-2xl w-full max-w-md flex flex-col transform scale-105 relative">
            <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              RECOMMENDED
            </span>
            <h3 className="text-2xl font-bold text-black mb-2">Enterprise Tier</h3>
            <p className="text-gray-600 mb-4">สำหรับองค์กรขนาดใหญ่ที่ต้องการปริมาณงานสูงและฟีเจอร์พิเศษ</p>
            
            <div className="text-5xl font-black text-black mb-6">
              $2,500
              <span className="text-lg font-medium text-gray-500">/ Month</span>
            </div>
            
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start gap-2 text-black">
                <span className="text-red-500 mt-1">⭐</span> 
                **Token เหมาจ่าย:** รวม 100M Tokens/เดือน (ราคาลดลง 40%)
              </li>
              <li className="flex items-start gap-2 text-black">
                <span className="text-red-500 mt-1">⭐</span> 
                **Access All Models:** รวม Models ระดับสูงสุด (Opus, GPT-5)
              </li>
              <li className="flex items-start gap-2 text-black">
                <span className="text-red-500 mt-1">⭐</span> 
                **Dedicated Support:** ทีมงานช่วยเหลือเฉพาะกิจ
              </li>
              <li className="flex items-start gap-2 text-black">
                <span className="text-red-500 mt-1">⭐</span> 
                **Custom Fine-Tuning:** บริการปรับจูน Models เฉพาะองค์กร
              </li>
            </ul>
            
            <a 
              href="#hero-form"
              className="w-full text-center py-3 rounded-lg bg-red-600 text-white font-bold hover:bg-red-700 transition shadow-[0_4px_14px_0_rgba(220,38,38,0.4)]"
            >
              ติดต่อฝ่ายขายเพื่อขอ Demo
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}