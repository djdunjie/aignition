import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Enterprise AI Pathfinder</title>
        <meta name="description" content="Enterprise AI Pathfinder — discover how AI can transform your enterprise operations." />
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
                  Discover how AI can radically transform your operations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Get Started
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="flex justify-center">
                {/* Placeholder with X as per wireframe */}
                <div className="w-full max-w-md lg:max-w-lg h-64 lg:h-80 bg-gray-200 border-2 border-gray-300 rounded-lg flex items-center justify-center relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Below hero text */}
            <div className="text-center mt-12">
              <p className="text-gray-600">
                Join other enterprises embarking on their own AI odysseys.
              </p>
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
              {/* Interactive Personalised Roadmap */}
              <div className="bg-white p-6 lg:p-8 rounded-lg shadow-sm text-center">
                <div className="w-full h-32 bg-gray-200 border-2 border-gray-300 rounded-lg flex items-center justify-center mb-6 relative">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Interactive Personalised Roadmap</h3>
                <p className="text-gray-600">
                  Evaluate and chart your enterprise journey with us!
                </p>
              </div>

              {/* Curated Newsfeed */}
              <div className="bg-white p-6 lg:p-8 rounded-lg shadow-sm text-center">
                <div className="w-full h-32 bg-gray-200 border-2 border-gray-300 rounded-lg flex items-center justify-center mb-6 relative">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Curated Newsfeed</h3>
                <p className="text-gray-600">
                  Specially selected content across the web
                </p>
              </div>

              {/* Veronica */}
              <div className="bg-white p-6 lg:p-8 rounded-lg shadow-sm text-center">
                <div className="w-full h-32 bg-gray-200 border-2 border-gray-300 rounded-lg flex items-center justify-center mb-6 relative">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Veronica</h3>
                <p className="text-gray-600">
                  Meet our amazing chatbot to aid you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Click Here Section */}
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full h-24 bg-gray-100 border-2 border-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-700">click here</span>
            </div>
          </div>
        </section>

        {/* How to Start Your AI Transformation */}
        <section className="bg-gray-50 py-12 lg:py-20">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
            {/* LEFT: image + caption */}
            <div>
              <div className="aspect-[4/3] rounded-lg border-2 border-gray-300 bg-gray-200 flex items-center justify-center text-gray-400 mb-4 relative">
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">How to start your AI transformation</h2>
              <p className="text-sm text-gray-600 mb-4">
                Stay in loop with our company news, Sign up to our newsletter and receive the freshest info.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Let's Go
              </button>
            </div>

            {/* RIGHT: three vertical steps with separators */}
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Step 1</h4>
                <p className="text-gray-700 mb-3">Connect with our experts for an introduction.</p>
                <div className="h-px bg-gray-300" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Step 2</h4>
                <p className="text-gray-700 mb-3">Receive a tailored plan based on your needs.</p>
                <div className="h-px bg-gray-300" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Step 3</h4>
                <p className="text-gray-700">Welcome to your AI transformation journey.</p>
              </div>
            </div>
          </div>
        </section>

        {/* AIgnition Academy Section */}
        <section className="bg-white py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-center lg:text-left">
                <p className="text-sm text-blue-600 mb-2 italic">AIgnition Academy</p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Learn AI concepts smartly
                </h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Access a trove of educational resources, included articles, tutorials and interactive content to deepen your understanding of AI.
                </p>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Begin
                </button>
              </div>
              <div className="flex justify-center">
                {/* Placeholder image */}
                <div className="w-full max-w-md lg:max-w-lg h-64 bg-gray-200 border-2 border-gray-300 rounded-lg flex items-center justify-center relative">
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* User Experiences */}
        <section className="bg-gray-50 py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                User Experiences
              </h2>
              <p className="text-gray-600 text-lg">
                Discover how AI has changed enterprises.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white p-6 rounded-lg text-center">
                <p className="text-gray-600 mb-4 italic">
                  "Since using AIgnition, we've completely overhauled our operations."
                </p>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <div className="font-semibold text-gray-900">Alex Turner</div>
                <div className="text-sm text-gray-500">Operations Lead, TechnoWaltz</div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white p-6 rounded-lg text-center">
                <p className="text-gray-600 mb-4 italic">
                  "A game changer in our strategy for navigating these turbulent times."
                </p>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <div className="font-semibold text-gray-900">Ashley Wong</div>
                <div className="text-sm text-gray-500">Senior Vice President, InnovateCo</div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white p-6 rounded-lg text-center">
                <p className="text-gray-600 mb-4 italic">
                  "Insanely invaluable insights for us."
                </p>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <div className="font-semibold text-gray-900">Novia Chan</div>
                <div className="text-sm text-gray-500">CEO, RoboNexus</div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="bg-white py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Blog
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Blog Post 1 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-200 border-2 border-gray-300 flex items-center justify-center relative">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Evolutionary AI algorithms herald a paradigm shift
                  </h3>
                  <p className="text-gray-600 italic">
                    Company news
                  </p>
                </div>
              </div>

              {/* Blog Post 2 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-200 border-2 border-gray-300 flex items-center justify-center relative">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Protecting the endangered species known as fresh grads
                  </h3>
                  <p className="text-gray-600 italic">
                    The darkside of AI disruptions in the modern day workforce
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gray-50 py-12 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Newsletter
              </h2>
              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Input field"
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                  />
                  <button className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors whitespace-nowrap">
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="bg-white py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Event 1 */}
              <div className="border-2 border-gray-300 rounded-lg p-6 flex items-start gap-4">
                <div className="text-center min-w-[72px]">
                  <div className="text-3xl font-bold text-gray-900 leading-none">24</div>
                  <div className="text-sm uppercase tracking-wide text-gray-600">SEP</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">Workshop</div>
                  <div className="text-gray-900 font-medium">
                    Product Development and Manufacturing of IVDs and SaMD: Validation and Verification
                  </div>
                </div>
              </div>

              {/* Event 2 */}
              <div className="border-2 border-gray-300 rounded-lg p-6 flex items-start gap-4">
                <div className="text-center min-w-[72px]">
                  <div className="text-3xl font-bold text-gray-900 leading-none">30</div>
                  <div className="text-sm uppercase tracking-wide text-gray-600">SEP</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">Seminar</div>
                  <div className="text-gray-900 font-medium">
                    World Global AI Innovation Summit Keynote Address
                  </div>
                </div>
              </div>

              {/* Event 3 */}
              <div className="border-2 border-gray-300 rounded-lg p-6 flex items-start gap-4">
                <div className="text-center min-w-[72px]">
                  <div className="text-3xl font-bold text-gray-900 leading-none">16</div>
                  <div className="text-sm uppercase tracking-wide text-gray-600">OCT</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">APAC AI Talent Conference</div>
                  <div className="text-gray-900 font-medium">
                    Best practices and showcase of successful AI transformation by SMEs and enterprises alike
                  </div>
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
