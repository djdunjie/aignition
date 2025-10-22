import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useState } from 'react'

export default function About() {
  const [activeTab, setActiveTab] = useState<'management' | 'technical'>('management')

  const jobRoles = {
    management: [
      {
        title: 'AI Product Designer',
        description: 'Design and optimize AI model solutions for various applications.',
        action: 'Discover more'
      },
      {
        title: 'AI Engineer',
        description: 'Design and optimize AI model solutions for various applications.',
        action: 'Discover more'
      },
      {
        title: 'AI Project Lead',
        description: 'Manages AI projects as a consultant, ensuring timely delivery and quality.',
        action: 'Discover more'
      },
      {
        title: 'Data Scientist',
        description: 'Developing powerful models and algorithms to drive the next-gen of solutions.',
        action: 'Discover more'
      },
      {
        title: 'AI Analyst',
        description: 'Evaluates AI performance and suggests improvements.',
        action: 'Discover more'
      },
      {
        title: "Can't find the role you want?",
        description: 'Reach out to us!',
        action: 'Get in touch'
      }
    ]
  }

  return (
    <>
      <Head>
        <title>Meet the minds behind AIgnition</title>
        <meta name="description" content="We're dedicated to building your AI journey." />
      </Head>

      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-white py-12 lg:py-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="relative w-full h-80 lg:h-96 bg-gray-200 border-2 border-gray-300 rounded-lg flex items-center justify-center">
              <svg className="absolute w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <div className="relative z-10 text-center px-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                  Meet the minds behind AIgnition
                </h1>
                <p className="text-gray-600">We're dedicated to building your AI journey.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Journey */}
        <section className="bg-gray-50 py-12 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-700 mb-6">
              Founded by a team of AI enthusiasts, our platform has evolved to support enterprises as they navigate the complexities of AI integration.
            </p>
            <div className="w-full h-72 bg-gray-200 border-2 border-gray-300 rounded-lg flex items-center justify-center">
              <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
        </section>

        {/* Our Impact */}
        <section className="bg-white py-12 lg:py-20">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Impact</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-gray-900">2023</div>
                <div className="text-gray-500">Year Launched</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900">100+</div>
                <div className="text-gray-500">Enterprises onboard</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900">US$57M</div>
                <div className="text-gray-500">In value realized</div>
              </div>
            </div>
          </div>
        </section>

        {/* The Team */}
        <section className="bg-gray-50 py-12 lg:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">The Team</h2>
            <p className="text-gray-600 text-center mb-8">Meet the team</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="text-center">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gray-200 border-2 border-gray-300 mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="font-semibold text-gray-800">Name</div>
                  <div className="text-sm text-gray-500">Role</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our partners and collaborators */}
        <section className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Our partners and collaborators</h2>
          </div>
        </section>

        {/* Join our team */}
        <section className="bg-gray-50 py-12 lg:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Join our team</h3>
            <p className="text-gray-600 mb-8 text-center">
              We're looking for passionate and like-minded individuals to transform the world.
            </p>
            
            {/* Management / Technical tabs */}
            <div className="flex justify-center items-center gap-4 mb-8">
              <Link
                href="/about"
                className={`border rounded px-6 py-2 transition-colors ${
                  activeTab === 'management'
                    ? 'bg-gray-900 text-white border-gray-900'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  setActiveTab('management')
                }}
              >
                Management
              </Link>
              <Link
                href="/terminology"
                className="border border-gray-300 rounded px-6 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Technical
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobRoles[activeTab].map((role, idx) => (
                <div key={idx} className="border-2 border-gray-300 rounded-lg p-5 bg-white">
                  <h4 className="font-semibold text-gray-900 mb-2">{role.title}</h4>
                  <p className="text-gray-600 mb-4 text-sm">
                    {role.description}
                  </p>
                  <button className="inline-block border border-gray-300 px-4 py-2 rounded hover:bg-gray-50 transition-colors text-sm">
                    {role.action}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}