'use client';

import Link from 'next/link'
import { useState, useEffect, useCallback, useMemo } from 'react'
import { usePathname } from 'next/navigation'
import Logo from './Logo.client'

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoColor, setLogoColor] = useState('#77BFA3');
  const pathname = usePathname();

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.05) {
        const sectionClass = entry.target.className;
        if (sectionClass.includes('bg-[#EDEEC9]')) {
          setLogoColor('#98C9A3');
        } else if (sectionClass.includes('bg-[#98C8A3]')) {
          setLogoColor('#EDEEC9');
        } else if (sectionClass.includes('bg-[#DDE7C7]')) {
          setLogoColor('#EDEEC9');
        } else if (sectionClass.includes('bg-[#333333]')) {
          setLogoColor('#EDEEC9');
        }
      }
    });
  }, []);

  useEffect(() => {
    const options = {
      threshold: [0, 0.05],
      rootMargin: '-1px 0px 0px 0px'
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, [handleIntersection]);

  // Force specific logo colors on blog and partner pages
  useEffect(() => {
    if (pathname === '/blog') {
      setLogoColor('#77BFA3'); // Green for blog page
    } else if (pathname === '/partner') {
      setLogoColor('#EDEEC9'); // Yellow for partner page
    }
  }, [pathname]);

  const currentLogoColor = useMemo(() => {
    if (pathname === '/blog') return '#77BFA3'; // Green for blog page
    if (pathname === '/partner') return '#EDEEC9'; // Yellow for partner page
    return logoColor;
  }, [pathname, logoColor]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Logo color={currentLogoColor} />
          <span className="font-['Sul_Sans_Test'] text-lg text-[#2D2D2B]">
            Clovermint
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="relative group">
            <button className="text-[#2D2D2B] hover:opacity-75 flex items-center gap-1">
              Discover
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <Link 
            href="/team" 
            className={`text-[#2D2D2B] hover:opacity-75 ${
              pathname === '/team' ? 'px-4 py-1 bg-white rounded-full shadow-sm' : ''
            }`}
          >
            Team
          </Link>
          <Link 
            href="/blog" 
            className={`text-[#2D2D2B] hover:opacity-75 ${
              pathname === '/blog' ? 'px-4 py-1 bg-white rounded-full shadow-sm' : ''
            }`}
          >
            Blog
          </Link>
          <Link 
            href="/partner" 
            className={`text-[#2D2D2B] hover:opacity-75 ${
              pathname === '/partner' ? 'px-4 py-1 bg-white rounded-full shadow-sm' : ''
            }`}
          >
            Become a partner
          </Link>
          <Link 
            href="/contact" 
            className="px-6 py-2 bg-[#2D2D2B] text-white rounded-full hover:bg-opacity-90"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden w-8 h-8 flex flex-col justify-center items-end"
          onClick={() => setIsMenuOpen(true)}
        >
          <div className="w-6 h-0.5 bg-[#2D2D2B] mb-1.5 transition-all duration-300 ease-in-out"></div>
          <div className="w-6 h-0.5 bg-[#2D2D2B] mb-1.5 transition-all duration-300 ease-in-out"></div>
          <div className="w-6 h-0.5 bg-[#2D2D2B] transition-all duration-300 ease-in-out"></div>
        </button>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 bg-[#EDEEC9] z-50 lg:hidden overflow-y-auto transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="px-6 py-6">
            <div className="flex justify-between items-center mb-8">
              <Link 
                href="/" 
                className="flex items-center gap-2 transform transition-transform duration-300 hover:scale-105" 
                onClick={() => setIsMenuOpen(false)}
              >
                <Logo color="#77BFA3" />
                <span className="font-['Sul_Sans_Test'] text-lg text-[#2D2D2B]">
                  Clovermint
                </span>
              </Link>
              <button 
                className="w-8 h-8 flex items-center justify-center transform transition-transform duration-300 hover:rotate-90"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2D2D2B" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="space-y-6">
              <div>
                <button className="font-['Sul_Sans_Test'] text-[#2D2D2B] text-2xl flex items-center gap-2 transform transition-all duration-300 hover:translate-x-2">
                  Discover
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              {[
                { href: '/team', text: 'Team' },
                { href: '/blog', text: 'Blog' },
                { href: '/partner', text: 'Become a partner' }
              ].map((item, index) => (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className={`block font-['Sul_Sans_Test'] text-2xl transform transition-all duration-300 hover:translate-x-2 ${
                    pathname === item.href 
                      ? 'text-[#77BFA3]' 
                      : 'text-[#2D2D2B]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  {item.text}
                </Link>
              ))}
              <Link 
                href="/contact" 
                className="inline-block px-6 py-2 bg-[#2D2D2B] text-white rounded-full hover:bg-opacity-90 font-['Sul_Sans_Test'] text-lg transform transition-all duration-300 hover:scale-105 hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
                style={{
                  transitionDelay: '300ms'
                }}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}