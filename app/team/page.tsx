import Image from 'next/image'
import Nav from '../../components/Nav.client'

export default function Team() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#EDEEC9]">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-['Sul_Sans_Test'] text-[#2D2D2B]">
                  Clovermint
                </h1>
                <p className="text-lg text-[#2D2D2B] opacity-80 leading-relaxed">
                  At Clovermint, we embrace innovation, empathy, and inclusivity in our approach to fostering educational change. We actively seek partnerships and collaborations with like-minded individuals, communities, and institutions to amplify our impact and reach.
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-[#2D2D2B] opacity-80 leading-relaxed">
                  We invite you to join us on this transformative journey toward educational equity. Together, we can make a profound difference in the lives of countless children, empowering them with the tools and opportunities they need to succeed. And through collaborative partnerships and community development, we work tirelessly toward a future where quality education knows no bounds.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <Image
                src="/images/teamm.jpeg"
                alt="Team at Clovermint"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}