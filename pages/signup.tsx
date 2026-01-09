import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState, FormEvent } from 'react'
import { useRouter } from 'next/router'
import { signUp } from '@/lib/authUtils'

export default function SignUp() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    username: '',
    displayName: '',
    password: '',
    industry: '',
    jobRole: '',
    countryRegion: ''
  })
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      const result = await signUp(
        formData.username,
        formData.displayName,
        formData.password,
        formData.industry,
        formData.jobRole,
        formData.countryRegion
      )

      if (result.success) {
        router.push('/veronica')
      } else {
        setError(result.error || 'Sign up failed')
      }
    } catch (err) {
      setError('An unexpected error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (error) setError('')
  }

  return (
    <>
      <Head>
        <title>Sign Up - Join the AIgnition Community</title>
        <meta name="description" content="Join the AIgnition Community to transform your AI journey" />
      </Head>

      <Navbar />

      <main className="bg-white">
        {/* Hero Section with Form */}
        <section className="py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-16 text-center">
              Join the AIgnition Community
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              {/* Left: Form */}
              <div className="w-full max-w-md mx-auto lg:mx-0">
                {error && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">
                    {error}
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      value={formData.username}
                      onChange={(e) => handleInputChange('username', e.target.value)}
                      placeholder="Input field"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      required
                      minLength={3}
                    />
                  </div>

                  <div>
                    <label htmlFor="displayName" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="displayName"
                      value={formData.displayName}
                      onChange={(e) => handleInputChange('displayName', e.target.value)}
                      placeholder="Input field"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      placeholder="Input field"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      required
                      minLength={8}
                    />
                  </div>

                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                      Industry
                    </label>
                    <input
                      type="text"
                      id="industry"
                      value={formData.industry}
                      onChange={(e) => handleInputChange('industry', e.target.value)}
                      placeholder="Input field"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="jobRole" className="block text-sm font-medium text-gray-700 mb-2">
                      Job Role
                    </label>
                    <input
                      type="text"
                      id="jobRole"
                      value={formData.jobRole}
                      onChange={(e) => handleInputChange('jobRole', e.target.value)}
                      placeholder="Input field"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="countryRegion" className="block text-sm font-medium text-gray-700 mb-2">
                      Country/Region
                    </label>
                    <input
                      type="text"
                      id="countryRegion"
                      value={formData.countryRegion}
                      onChange={(e) => handleInputChange('countryRegion', e.target.value)}
                      placeholder="Input field"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-white border-2 border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Signing Up...' : 'Sign Up'}
                  </button>
                </form>
              </div>

              {/* Right: Placeholder Image */}
              <div className="hidden lg:flex lg:justify-center lg:items-center">
                <div className="w-full max-w-md h-96 bg-gray-100 border-2 border-gray-300 rounded-lg flex items-center justify-center">
                  <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Offices Section */}
        <section className="bg-gray-50 py-12 lg:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Our offices</h2>
                <p className="text-gray-600 text-sm">
                  Find our offices around the world and feel free to pay us a visit
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Asia Pacific</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>Singapore</li>
                  <li>Japan</li>
                  <li>China</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Europe</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>London</li>
                  <li>Germany</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 lg:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Find us here</h2>
            <div className="w-full h-96 bg-gray-100 border-2 border-gray-300 rounded-lg flex items-center justify-center">
              <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}