import Image from 'next/image'
import Link from 'next/link'
import Nav from '../../components/Nav.client'

export default function Blog() {
  const blogPosts = [
    {
      category: 'FINDINGS',
      title: 'Education Equity Report Reveals Disparities in Access and Opportunities',
      date: 'December 05, 2023',
      image: '/images/image66.jpeg',
      slug: 'education-equity-report'
    },
    {
      category: 'AWARDS',
      title: 'Honoring Education Champions: Celebrating Outstanding Teachers\' Contributions',
      date: 'December 03, 2023',
      image: '/images/image77.jpeg',
      slug: 'honoring-education-champions'
    },
    {
      category: 'UPDATES',
      title: 'Latest Updates on Educational Programs and Initiatives',
      date: 'December 01, 2023',
      image: '/images/image88.jpeg',
      slug: 'latest-updates'
    }
  ]

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#EDEEC9]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="space-y-12">
            {blogPosts.map((post, index) => (
              <Link href={`/blog/${post.slug}`} key={index}>
                <article className="group cursor-pointer">
                  <div className="relative aspect-[3/1] overflow-hidden rounded-2xl mb-6">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="text-sm font-medium text-[#2D2D2B] opacity-80">
                      {post.category}
                    </div>
                    <h2 className="text-3xl font-['Sul_Sans_Test'] text-[#2D2D2B]">
                      {post.title}
                    </h2>
                    <div className="text-sm text-[#2D2D2B] opacity-60">
                      {post.date}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}