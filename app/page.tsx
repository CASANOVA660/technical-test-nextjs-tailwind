import Image from 'next/image'
import Nav from '../components/Nav.client'
import Card from '../components/card'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Nav />
      {/* Hero Section */}
      <section id="hero" className="bg-[#EDEEC9]">
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Content */}
            <div className="max-w-2xl">
              <h1 className="font-['Sul_Sans_Test'] text-[#2D2D2B] text-9xl lg:text-7xl  leading-tight mb-8">
                <div>A nonprofit</div>
                <div>organization</div>
                <div>fostering children's educational</div>
                <div>opportunities.</div>
              </h1>
              <p className="text-[#2D2D2B] text-lg leading-relaxed mb-12 opacity-80 max-w-xl">
                We prioritize enhancing school facilities and providing financial aid for
                unhindered education. Our commitment involves creating improved learning spaces,
                empowering young minds, and offering essential resources and funding for their
                educational requirements.
              </p>
            </div>

            {/* Right Images */}
            <div className="relative h-[1000px]"> 
              <div className="absolute top-8 right-32 mr-[200px] mt-[-50px] w-32 h-48 rounded-[30px] overflow-hidden shadow-lg z-20" style={{ transform: 'rotate(-35deg)' }}>
                <Image
                  src="/images/image1.jpeg"
                  alt="Children playing outdoors"
                  fill
                  className="object-cover transform scale-x-[-1]"
                />
              </div>
              <div className="absolute top-24 left-4 w-32 h-48 rounded-[30px] ml-[350px] overflow-hidden transform -rotate-12 shadow-lg z-20">
                <Image
                  src="/images/image2.jpeg"
                  alt="Children learning"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-48 right-28 w-32 h-48 rounded-[30px] mr-[150px] mt-[30px] overflow-hidden transform rotate-6 shadow-lg z-20">
                <Image
                  src="/images/image3.jpeg"
                  alt="Happy children"
                  fill
                  className="object-cover transform scale-x-[-1]"
                />
              </div>
              <div className="absolute top-0 left-0 w-[1000px] h-[1500px] z-10 ml-[350px] mt-[-150px]" style={{ transform: 'rotate(-35deg)' }}>
                <Image
                  src="/images/image4.png"
                  alt="Supporting hand"
                  fill
                  className="object-contain"
                  style={{ transform: 'scaleX(-1) translateY(-20px)' }}
                />
              </div>
            </div>
          </div>

          {/* Cards Section */}
          <div id="cards" className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-[-200px]">
            <Card
              title="Education Accessibility"
              description="Ensuring equal access to quality education and learning tools regardless of their background or circumstances"
            />
            <Card
              title="Community Empowerment"
              description="Fostering collaboration and engagement to help communities actively participate in improving educational effectiveness"
            />
            <Card
              title="Innovation and Adaptability"
              description="Embracing innovation and flexibility in our approaches to continuously enhance educational experiences"
            />
            <Card
              title="Transparency and Accountability"
              description="Operating with transparency in all aspects of our work, ensuring clarity for actions and decisions"
            />
            <Card
              title="Continuous Support Systems"
              description="Committing to sustainable, long-term aid and support through comprehensive community engagement"
            />
          </div>

          {/* About Us Button */}
          <div className="mt-16 flex justify-center">
            <button className="group flex items-center space-x-2 text-[#2D2D2B] hover:opacity-75">
              <span className="text-lg font-medium">ABOUT US</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="statistics" className="bg-[#98C8A3] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Content */}
            <div>
              <h2 className="font-['Sul_Sans_Test'] text-[#2D2D2B] text-5xl leading-tight mb-6">
                Exceptional<br />
                dedication.<br />
                Exceptional<br />
                results.
              </h2>
              <p className="text-[#2D2D2B] opacity-80 mb-8">
                Clovermint's dedicated efforts have transformed education and empowered communities. Here are key statistics demonstrating our mission's progress.
              </p>
              <button className="bg-white px-6 py-2 rounded-full text-[#2D2D2B] hover:bg-opacity-90 inline-flex items-center">
                OUR TEAM
              </button>
            </div>

            {/* Right Content - Statistics */}
            <div className="space-y-12 bg-[#98C8A3] p-12 rounded-3xl" >
              <div>
                <div className="text-5xl font-['Sul_Sans_Test'] text-[#2D2D2B] mb-2">100+</div>
                <div className="text-[#2D2D2B] opacity-80">Schools Improved</div>
              </div>
              
              <div>
                <div className="text-5xl font-['Sul_Sans_Test'] text-[#2D2D2B] mb-2">$13.2M+</div>
                <div className="text-[#2D2D2B] opacity-80">Spent funding</div>
              </div>
              
              <div>
                <div className="text-5xl font-['Sul_Sans_Test'] text-[#2D2D2B] mb-2">50</div>
                <div className="text-[#2D2D2B] opacity-80">Local communities engagement</div>
              </div>
              
              <div>
                <div className="text-5xl font-['Sul_Sans_Test'] text-[#2D2D2B] mb-2">8,000+</div>
                <div className="text-[#2D2D2B] opacity-80">Impacted lives</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-[#EDEEC9] py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative">
            {/* Left Content */}
            <div className="max-w-[600px]">
              <h2 className="font-['Flecha_Test_M'] text-[100px] leading-[1.1] text-[#333333] mb-20 font-bold">
                Discover us<br />
                from others
              </h2>
              
              <div className="flex items-center space-x-8 border-b border-[#333333] pb-3 mb-16">
                <span className="text-[#333333] font-medium">Willowbrook</span>
                <span className="text-[#333333] opacity-50">Lakeside High</span>
                <span className="text-[#333333] opacity-50">Oakwood</span>
                <span className="text-[#333333] opacity-50">Sunflower Hills</span>
                <span className="text-[#333333] opacity-50">Maple Grove</span>
              </div>

              <div className="space-y-12">
                <div className="text-[#333333] text-[28px] font-['Sul_Sans_Test'] font-light leading-[36px] max-w-[580px] text-left [text-underline-position:from-font] [text-decoration-skip-ink:none]">
                  Your support for Willowbrook Academy has been extraordinary. The upgrades to our facilities have created a better learning environment, while your grants have allowed many students to pursue their education without financial barriers.
                </div>
                
                <div className="text-[#333333] text-[28px] font-['Sul_Sans_Test'] font-light leading-[36px] max-w-[580px] text-left [text-underline-position:from-font] [text-decoration-skip-ink:none]">
                  Thank you for being a crucial part of our journey towards educational excellence. Your commitment to empowering students is truly appreciated.
                </div>

                <div className="mt-16">
                  <div className="text-[#333333] text-[32px] font-bold mb-2">Dexter Gleichner</div>
                  <div className="text-[#333333] opacity-50 text-lg">Headmaster of Willowbrook Academy</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="absolute top-0 right-[-450px] w-[850px] h-[700px] mt-[100px]">
              <div className="relative w-full h-full">
                <Image
                  src="/images/image55.jpeg"
                  alt="Students gathered outdoors for learning activities"
                  fill
                  className="object-cover object-[100%_40%]"
                  sizes="850px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section id="latest-news" className="bg-[#DDE7C7] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-16">
            <h2 className="font-['Flecha_Test_M'] text-[80px] leading-[1.1] text-[#333333]">
              Latest news
            </h2>
            <button className="bg-white px-6 py-2.5 rounded-full text-sm">
              DISCOVER MORE →
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* First Article - Larger */}
            <div className="bg-white p-8 rounded-sm w-[379px] h-[720px] relative">
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-4">EDUCATION FUNDING ANNOUNCEMENT</div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-sm text-gray-600 mb-4">December 04, 2023</div>
                <h3 className="font-['Sul_Sans_Test'] text-[28px] font-light leading-tight">
                  Government unveils 10 million dollar education grant initiative for underprivileged schools
                </h3>
              </div>
            </div>

            {/* Middle Column */}
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-sm h-[349px] relative">
                <div className="text-xs uppercase tracking-wider text-gray-500 mb-4">FINDINGS</div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="text-sm text-gray-600 mb-4">December 04, 2023</div>
                  <h3 className="font-['Sul_Sans_Test'] text-[28px] font-light leading-tight">
                    Education equity report reveals disparities in access and opportunities
                  </h3>
                </div>
              </div>

              <div className="bg-white p-8 rounded-sm h-[349px] relative">
                <div className="text-xs uppercase tracking-wider text-gray-500 mb-4">CAMPAIGN LAUNCH</div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="text-sm text-gray-600 mb-4">December 02, 2023</div>
                  <h3 className="font-['Sul_Sans_Test'] text-[28px] font-light leading-tight">
                    Nationwide literacy drive: promoting reading culture among youth
                  </h3>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-sm h-[349px] relative">
                <div className="text-xs uppercase tracking-wider text-gray-500 mb-4">AWARDS</div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="text-sm text-gray-600 mb-4">December 03, 2023</div>
                  <h3 className="font-['Sul_Sans_Test'] text-[28px] font-light leading-tight">
                    Honoring education champions: celebrating outstanding teachers' contributions
                  </h3>
                </div>
              </div>

              <div className="bg-white p-8 rounded-sm h-[349px] relative">
                <div className="text-xs uppercase tracking-wider text-gray-500 mb-4">EDUCATION RECAP</div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="text-sm text-gray-600 mb-4">December 02, 2023</div>
                  <h3 className="font-['Sul_Sans_Test'] text-[28px] font-light leading-tight">
                    STEM education leaders gather for symposium: advancing science and tech learning
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#333333] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-4 gap-24 mb-16">
            {/* Quick links */}
            <div>
              <h3 className="font-['Flecha_Test_M'] text-[18px] leading-[32px] text-white opacity-50 uppercase mb-6">Quick links</h3>
              <ul className="space-y-4">
                <li><a href="#" className="font-['Flecha_Test_M'] text-[16px] leading-[32px] text-white">About us</a></li>
                <li><a href="#" className="font-['Flecha_Test_M'] text-[16px] leading-[32px] text-white">Our impact</a></li>
                <li><a href="#" className="font-['Flecha_Test_M'] text-[16px] leading-[32px] text-white">Team</a></li>
                <li><a href="#" className="font-['Flecha_Test_M'] text-[16px] leading-[32px] text-white">Blog</a></li>
                <li><a href="#" className="font-['Flecha_Test_M'] text-[16px] leading-[32px] text-white">Become a partner</a></li>
                <li><a href="#" className="font-['Flecha_Test_M'] text-[16px] leading-[32px] text-white">Careers</a></li>
                <li><a href="#" className="font-['Flecha_Test_M'] text-[16px] leading-[32px] text-white">Media kit</a></li>
              </ul>
            </div>

            {/* Connect with us */}
            <div>
              <h3 className="font-['Flecha_Test_M'] text-[18px] leading-[32px] text-white opacity-50 uppercase mb-6">Connect with us</h3>
              <ul className="space-y-4">
                <li><a href="#" className="font-['Flecha_Test_M'] text-[16px] leading-[32px] text-white">Facebook</a></li>
                <li><a href="#" className="font-['Flecha_Test_M'] text-[16px] leading-[32px] text-white">Instagram</a></li>
                <li><a href="#" className="font-['Flecha_Test_M'] text-[16px] leading-[32px] text-white">LinkedIn</a></li>
                <li><a href="#" className="font-['Flecha_Test_M'] text-[16px] leading-[32px] text-white">X (Twitter)</a></li>
              </ul>
            </div>

            {/* How to reach us */}
            <div>
              <h3 className="font-['Flecha_Test_M'] text-[18px] leading-[32px] text-white opacity-50 uppercase mb-6">How to reach us</h3>
              <ul className="space-y-4">
                <li><a href="mailto:contact@mint.com" className="font-['Flecha_Test_M'] text-[16px] leading-[32px] text-white">contact@mint.com</a></li>
                <li><a href="tel:+16025679445" className="font-['Flecha_Test_M'] text-[16px] leading-[32px] text-white">+1 602 567 9445</a></li>
                <li className="font-['Flecha_Test_M'] text-[16px] leading-[32px] text-white">
                  601 Markham St<br />
                  Toronto Ontario<br />
                  M6G 2L7
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-['Flecha_Test_M'] text-[18px] leading-[32px] text-white opacity-50 uppercase mb-6">Legal</h3>
              <ul className="space-y-4">
                <li><a href="#" className="font-['Flecha_Test_M'] text-[16px] leading-[32px] text-white">Terms of service</a></li>
                <li><a href="#" className="font-['Flecha_Test_M'] text-[16px] leading-[32px] text-white">Privacy policy</a></li>
                <li><a href="#" className="font-['Flecha_Test_M'] text-[16px] leading-[32px] text-white">Accessibility</a></li>
              </ul>
            </div>
          </div>

          {/* Logo and Copyright */}
          <div className="mt-24">
            <div className="relative">
              <div className="text-[#EDEEC9] text-[21.6vw] font-['Sul_Sans_Test'] font-bold leading-[0.85] tracking-[-0.03em]  ml-[-135px] ">
                Clovermint
              </div>
            </div>
            <div className="mt-8">
              <div className="font-['Flecha_Test_M'] text-[14px] leading-[32px] text-white opacity-50">
                &copy; Clovermint 2023. All rights reserved.<br />
                Site by QuarterTech.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
