import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useState } from 'react'

const terminologyData = {
  management: [
    {
      title: 'Artificial Intelligence',
      description: 'The simulation of human intelligence processes by machines, especially computer systems.'
    },
    {
      title: 'Agile',
      description: 'An iterative approach to project management and software development that helps teams deliver value faster.'
    },
    {
      title: 'MLOps',
      description: 'A set of practices that combines Machine Learning, DevOps and Data Engineering to deploy and maintain ML systems in production.'
    },
    {
      title: 'Data Lake',
      description: 'A centralized repository that allows you to store all your structured and unstructured data at any scale.'
    },
    {
      title: 'Neural Network',
      description: 'A series of algorithms that attempt to recognize underlying relationships in data through a process that mimics the human brain.'
    }
  ],
  technical: [
    {
      title: 'Machine Learning',
      description: 'A subset of AI that enables systems to learn and improve from experience without being explicitly programmed.'
    },
    {
      title: 'Deep Learning',
      description: 'A subset of machine learning based on artificial neural networks with multiple layers.'
    },
    {
      title: 'Neural Network',
      description: 'A series of algorithms that attempt to recognize underlying relationships in data through a process that mimics the human brain.'
    },
    {
      title: 'Agentic AI',
      description: 'AI systems that can act autonomously to achieve goals, make decisions, and interact with their environment.'
    },
    {
      title: 'Generative AI',
      description: 'AI systems that can generate new content, such as text, images, or code, based on patterns learned from training data.'
    }
  ]
}

export default function Terminology() {
  const [activeTab, setActiveTab] = useState<'management' | 'technical'>('technical')

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
              <button
                onClick={() => setActiveTab('management')}
                className={`border rounded px-6 py-2 transition-colors ${
                  activeTab === 'management'
                    ? 'bg-gray-900 text-white border-gray-900'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                Management
              </button>
              <button
                onClick={() => setActiveTab('technical')}
                className={`border rounded px-6 py-2 transition-colors ${
                  activeTab === 'technical'
                    ? 'bg-gray-900 text-white border-gray-900'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                Technical
              </button>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {terminologyData[activeTab].map((term) => (
                <div key={term.title} className="border-2 border-gray-300 rounded-lg p-6 bg-white">
                  <h4 className="font-semibold text-gray-900 mb-3">{term.title}</h4>
                  <div className="h-40 bg-gray-100 border border-gray-300 rounded mb-3 flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-sm">{term.description}</p>
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