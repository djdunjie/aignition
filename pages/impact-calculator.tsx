import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function ImpactCalculator() {
  const [selectedCategory, setSelectedCategory] = useState('Cost Reduction')

  const categories = [
    'Cost Reduction',
    'Productivity Gains',
    'Revenue Uplift',
    'Customer Experience',
    'Risk Reduction'
  ]

  const categoryContent: Record<string, { description: string; drivers: string }> = {
    'Cost Reduction': {
      description: 'Lorem Ipsum',
      drivers: ''
    },
    'Productivity Gains': {
      description: 'Lorem Ipsum',
      drivers: ''
    },
    'Revenue Uplift': {
      description: 'Lorem Ipsum',
      drivers: ''
    },
    'Customer Experience': {
      description: 'Lorem Ipsum',
      drivers: ''
    },
    'Risk Reduction': {
      description: 'Lorem Ipsum',
      drivers: ''
    }
  }

  return (
    <>
      <Head>
        <title>Impact Calculator - AIgnition</title>
        <meta name="description" content="Estimate AI Impact in Minutes - Master the mathematics of AI transformation" />
      </Head>

      <Navbar />

      <main className="bg-white">
        <section className="py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Estimate AI Impact in Minutes
              </h1>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Master the mathematics of AI transformation. Explore the frameworks and industry benchmarks used by world-class enterprises to measure impact.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding AI Impact</h2>
              
              <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full border-2 font-medium transition-all ${
                      selectedCategory === category
                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                        : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                {categories.map((category) => (
                  <div
                    key={category}
                    className="border-2 border-gray-300 rounded-2xl p-6 bg-white flex flex-col min-h-[300px]"
                  >
                    <div className="flex-1 mb-4">
                      <p className="text-gray-700">
                        {categoryContent[category].description}
                      </p>
                    </div>
                    <div className="border-t-2 border-gray-300 pt-4 mt-auto">
                      <p className="font-semibold text-gray-900 mb-2">Common Drivers:</p>
                      <p className="text-sm text-gray-600">{categoryContent[category].drivers || ''}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="border-2 border-gray-300 rounded-2xl p-8 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Key Assumptions</h3>
                <div className="text-center py-12">
                  <p className="text-gray-600">Lorem Ipsum</p>
                </div>
              </div>

              <div className="border-2 border-gray-300 rounded-2xl p-8 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Impact Equation Library</h3>
                <div className="space-y-4 py-8">
                  <p className="text-gray-600 text-right">Lorem Ipsum</p>
                  <p className="text-gray-600 text-right">Lorem Ipsum</p>
                  <p className="text-gray-600 text-right">Lorem Ipsum</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="border-2 border-gray-300 rounded-2xl p-8 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Industry Benchmarks & Evidence</h3>
                <div className="mt-6">
                  <div className="bg-blue-600 rounded-t-lg p-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-white/20 h-8 rounded"></div>
                      <div className="bg-white/20 h-8 rounded"></div>
                      <div className="bg-white/20 h-8 rounded"></div>
                    </div>
                  </div>
                  <div className="bg-blue-400 p-4 space-y-2">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-white h-8 rounded"></div>
                      <div className="bg-yellow-400 h-8 rounded"></div>
                      <div className="bg-yellow-400 h-8 rounded"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-yellow-400 h-8 rounded"></div>
                      <div className="bg-yellow-400 h-8 rounded"></div>
                      <div className="bg-yellow-400 h-8 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="border-2 border-gray-300 rounded-2xl p-6 bg-white flex-1 flex items-center justify-center">
                  <button className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
                    Explore Next Steps
                  </button>
                </div>
                <div className="bg-blue-900 rounded-2xl p-6 flex-1 flex items-center justify-center">
                  <button className="text-white font-semibold hover:bg-blue-800 transition-colors">
                    Download Executive Summary
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
