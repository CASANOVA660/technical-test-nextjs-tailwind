import React from 'react';
import Nav from '../../components/Nav.client';

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#EDEEC9]">
      <Nav />
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">
        <h1 className="font-['Flecha_Test_M'] text-[40px] md:text-[60px] lg:text-[80px] leading-[1.2] text-[#2D2D2B] mb-8">
          Get in touch
        </h1>

        <p className="text-[#2D2D2B] text-lg leading-relaxed mb-12">
          Complete the form or email us at contact@mint.com.
        </p>

        <form className="max-w-2xl space-y-6">
          <div>
            <input
              type="text"
              placeholder="YOUR NAME"
              className="w-full bg-white/80 border-none rounded-none px-6 py-4 font-['Sul_Sans_Test'] placeholder-[#2D2D2B] text-[#2D2D2B]"
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="PHONE NUMBER"
              className="w-full bg-white/80 border-none rounded-none px-6 py-4 font-['Sul_Sans_Test'] placeholder-[#2D2D2B] text-[#2D2D2B]"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              className="w-full bg-white/80 border-none rounded-none px-6 py-4 font-['Sul_Sans_Test'] placeholder-[#2D2D2B] text-[#2D2D2B]"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="SUBJECT"
              className="w-full bg-white/80 border-none rounded-none px-6 py-4 font-['Sul_Sans_Test'] placeholder-[#2D2D2B] text-[#2D2D2B]"
            />
          </div>
          <div>
            <textarea
              placeholder="MESSAGE"
              rows={6}
              className="w-full bg-white/80 border-none rounded-none px-6 py-4 font-['Sul_Sans_Test'] placeholder-[#2D2D2B] text-[#2D2D2B] resize-none"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-[#2D2D2B] text-white px-8 py-4 hover:bg-opacity-90"
            >
              SUBMIT
              <span className="ml-2">→</span>
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
