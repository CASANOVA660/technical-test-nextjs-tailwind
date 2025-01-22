'use client';

import React, { useState } from 'react';
import Nav from '../../components/Nav.client';

export default function Partner() {
  const [showForm, setShowForm] = useState(false);

  return (
    <main className="min-h-screen bg-[#A5D6A7]">
      <Nav />
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16 flex flex-col items-center">
        <div className="w-full max-w-2xl">
          <h1 className="font-['Flecha_Test_M'] text-[40px] md:text-[60px] lg:text-[80px] leading-[1.2] text-[#2D2D2B] mb-8 text-center">
            Let's Be Education Allies
          </h1>
          <p className="text-[#2D2D2B] text-lg md:text-xl mb-12 text-center">
            Join us in our mission to transform education. As a partner, you'll help create better learning environments and support students in their educational journey.
          </p>

          <div className={`transition-all duration-500 ease-in-out ${showForm ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'} ${!showForm && 'hidden'}`}>
            <form className="space-y-6">
              {/* Organization Information */}
              <div className="space-y-6">
                <div>
                  <label htmlFor="organization" className="block text-[#2D2D2B] text-sm mb-2">Organization Name</label>
                  <input
                    type="text"
                    id="organization"
                    className="w-full px-4 py-3 bg-white rounded-lg border-2 border-[#2D2D2B] focus:outline-none focus:ring-2 focus:ring-[#2D2D2B] focus:border-transparent"
                    placeholder="Your organization's name"
                  />
                </div>
                
                <div>
                  <label htmlFor="website" className="block text-[#2D2D2B] text-sm mb-2">Website</label>
                  <input
                    type="url"
                    id="website"
                    className="w-full px-4 py-3 bg-white rounded-lg border-2 border-[#2D2D2B] focus:outline-none focus:ring-2 focus:ring-[#2D2D2B] focus:border-transparent"
                    placeholder="https://"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[#2D2D2B] text-sm mb-2">Contact Person</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white rounded-lg border-2 border-[#2D2D2B] focus:outline-none focus:ring-2 focus:ring-[#2D2D2B] focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#2D2D2B] text-sm mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white rounded-lg border-2 border-[#2D2D2B] focus:outline-none focus:ring-2 focus:ring-[#2D2D2B] focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-[#2D2D2B] text-sm mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-white rounded-lg border-2 border-[#2D2D2B] focus:outline-none focus:ring-2 focus:ring-[#2D2D2B] focus:border-transparent"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              {/* Partnership Details */}
              <div className="space-y-6">
                <div>
                  <label htmlFor="type" className="block text-[#2D2D2B] text-sm mb-2">Partnership Type</label>
                  <select
                    id="type"
                    className="w-full px-4 py-3 bg-white rounded-lg border-2 border-[#2D2D2B] focus:outline-none focus:ring-2 focus:ring-[#2D2D2B] focus:border-transparent"
                  >
                    <option value="">Select partnership type</option>
                    <option value="financial">Financial Support</option>
                    <option value="resources">Educational Resources</option>
                    <option value="mentorship">Mentorship Program</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[#2D2D2B] text-sm mb-2">How would you like to contribute?</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-white rounded-lg border-2 border-[#2D2D2B] focus:outline-none focus:ring-2 focus:ring-[#2D2D2B] focus:border-transparent"
                    placeholder="Tell us about how you'd like to partner with us..."
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-8 py-4 bg-white text-[#2D2D2B] rounded-full hover:bg-opacity-90 transition-colors border-2 border-[#2D2D2B]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#2D2D2B] text-white rounded-full hover:bg-opacity-90 transition-colors"
                >
                  Submit Partnership Request
                </button>
              </div>
            </form>
          </div>

          <div className={`transition-all duration-500 ease-in-out ${!showForm ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'} ${showForm && 'hidden'}`}>
            <div className="flex justify-center">
              <button
                onClick={() => setShowForm(true)}
                className="px-8 py-4 bg-white text-[#2D2D2B] rounded-full hover:bg-opacity-90 transition-colors border-2 border-[#2D2D2B] text-lg font-medium"
              >
                Become a Partner
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
