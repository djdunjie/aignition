import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>AIgnition - Empower your business with AI solutions</title>
        <meta name="description" content="Join forward-thinking companies on their journey to AI transformation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="bg-white py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Empower your business with AI solutions.
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                  Join forward-thinking companies on their journey to AI transformation.
                </p>
              </div>
              <div className="flex justify-center">
                {/* Placeholder rectangle for hero image */}
                <div className="w-full max-w-md lg:max-w-lg h-64 lg:h-80 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Hero Image Placeholder</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Platform Features */}
        <section className="bg-gray-50 py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Platform Features
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Neural Networks */}
              <div className="bg-white p-6 lg:p-8 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-blue-600 text-2xl">🧠</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Neural Networks</h3>
                <p className="text-gray-600">
                  Unlock new levels of automation and intelligence.
                </p>
              </div>

              {/* Convolutional Networks */}
              <div className="bg-white p-6 lg:p-8 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-green-600 text-2xl">🔗</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Convolutional Networks</h3>
                <p className="text-gray-600">
                  Powering next-generation image and video analysis.
                </p>
              </div>

              {/* Vision Models */}
              <div className="bg-white p-6 lg:p-8 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-purple-600 text-2xl">👁️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Vision Models</h3>
                <p className="text-gray-600">
                  Helping businesses make sense of visual data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Start Your AI Transformation - Wireframe Layout */}
        <section className="bg-white py-12 lg:py-20">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
            {/* LEFT: image + caption */}
            <div>
              <div className="aspect-[4/3] rounded-lg border bg-gray-100 flex items-center justify-center text-gray-400 mb-4">
                <span>Image</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">How to start your AI transformation</h2>
              <p className="text-sm text-gray-600 mb-4">
                Stay in step with our company news. Sign up for our newsletter and receive the freshest info.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Learn More
              </button>
            </div>

            {/* RIGHT: three vertical steps with separators */}
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Step 1</h4>
                <p className="text-gray-700 mb-3">Connect with our experts for an introduction.</p>
                <div className="h-px bg-gray-200" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Step 2</h4>
                <p className="text-gray-700 mb-3">Receive a tailored plan based on your needs.</p>
                <div className="h-px bg-gray-200" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Step 3</h4>
                <p className="text-gray-700">Welcome to your AI transformation journey.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Learn AI Concepts Section */}
        <section className="bg-gray-50 py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Learn AI Concepts
                </h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Stay ahead of the curve by learning key AI concepts. From machine learning to deep learning, 
                  explore simplified guides and practical examples.
                </p>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
              <div className="flex justify-center">
                {/* Placeholder image */}
                <div className="w-full max-w-md lg:max-w-lg h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Learn AI Concepts Image</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* User Experiences */}
        <section className="bg-white py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                User Experiences
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Testimonial 1 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "AIgnition gave us the tools to start our AI journey with confidence."
                </p>
                <div className="text-sm text-gray-500">
                  - Sarah Johnson, CEO
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Clear steps and guidance made it easy for our team to adopt AI."
                </p>
                <div className="text-sm text-gray-500">
                  - Mike Chen, CTO
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "We transformed our operations in less than six months."
                </p>
                <div className="text-sm text-gray-500">
                  - Lisa Davis, Director
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="bg-gray-50 py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Latest from Our Blog
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Blog Post 1 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Blog Image Placeholder</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    The Future of AI in Business
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Exploring how companies use AI to stay competitive in today's rapidly evolving market landscape.
                  </p>
                  <a href="#" className="text-blue-600 font-medium hover:text-blue-700">
                    Read More →
                  </a>
                </div>
              </div>

              {/* Blog Post 2 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Blog Image Placeholder</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Getting Started with AI the Right Way
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Practical advice for beginners looking to implement AI solutions in their business operations.
                  </p>
                  <a href="#" className="text-blue-600 font-medium hover:text-blue-700">
                    Read More →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-blue-600 py-12 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Stay Updated with AI Trends
              </h2>
              <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
                Subscribe to get the latest updates on AI trends, guides, and case studies.
              </p>
              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                  />
                  <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
                    Subscribe
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
