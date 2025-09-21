import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <>
      <Head>
        <title>Meet the minds behind AIgnition</title>
        <meta name="description" content="We’re dedicated to building your AI journey." />
      </Head>

      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-white py-12 lg:py-20">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1 text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                  Meet the minds behind AIgnition
                </h1>
                <p className="text-gray-600">We’re dedicated to building your AI journey.</p>
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-full h-64 lg:h-80 bg-gray-200 border-2 border-gray-300 rounded-lg flex items-center justify-center relative">
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Journey */}
        <section className="bg-gray-50 py-12 lg:py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-700 mb-6">
              Placeholder text for the company journey. Share milestones, mission, and vision that guide AIgnition.
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
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
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
        </section>

        {/* The Team */}
        <section className="bg-gray-50 py-12 lg:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">The Team</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="text-center">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gray-200 border-2 border-gray-300 mx-auto mb-3" />
                  <div className="font-semibold text-gray-800">Team {i + 1}</div>
                  <div className="text-sm text-gray-500">Role</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our partners and collaborators */}
        <section className="bg-white py-10">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900">Our partners and collaborators</h2>
          </div>
        </section>

        {/* Join our team */}
        <section className="bg-gray-50 py-12 lg:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Join our team</h3>
            <p className="text-gray-600 mb-8">
              We’re looking for passionate and like-minded individuals to transform the world.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'AI Product Designer',
                'AI Engineer',
                'AI Project Lead',
                'Data Scientist',
                'AI Analyst',
                '?'
              ].map((role, idx) => (
                <div key={idx} className="border-2 border-gray-300 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-900 mb-2">{role}</h4>
                  <p className="text-gray-600 mb-4">
                    {role === '?'
                      ? "Can’t find the role you want? Reach out to us!"
                      : 'A short description about responsibilities and expectations.'}
                  </p>
                  <a href="#" className="inline-block border border-gray-300 px-4 py-2 rounded hover:bg-gray-50">
                    {role === '?' ? 'Get in touch' : 'Discover more'}
                  </a>
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