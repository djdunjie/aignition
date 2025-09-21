import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Terminology() {
  return (
    <>
      <Head>
        <title>AIgnition Enterprise Portal — Terminology</title>
        <meta name="description" content="Explore terminology, courses, videos, and resources." />
      </Head>

      <Navbar />

      <main className="bg-white py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[280px,1fr] gap-10">
          {/* Sidebar */}
          <aside>
            <div className="border border-gray-300 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-3">
                {['Terminology', 'Online Courses', 'Educational Videos', 'Other Resources'].map((c) => (
                  <Link
                    key={c}
                    href="#"
                    className={`block w-full text-left border border-gray-300 rounded px-3 py-2 hover:bg-gray-50 ${
                      c === 'Terminology' ? 'bg-gray-100' : ''
                    }`}
                  >
                    {c}
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          {/* Content */}
          <section>
            {/* Management / Technical toggles */}
            <div className="flex items-center gap-4 mb-6">
              <button className="border border-gray-300 rounded px-4 py-2">Management</button>
              <button className="border border-gray-300 rounded px-4 py-2">Technical</button>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Neural Network',
                'Big Data',
                'Deep Learning',
                'Convolutional Neural Network',
                'Transformers'
              ].map((title) => (
                <div key={title} className="border-2 border-gray-300 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">{title}</h4>
                  <div className="h-40 bg-gray-100 border border-gray-300 rounded mb-3" />
                  <p className="text-gray-600">lorem ipsum</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}