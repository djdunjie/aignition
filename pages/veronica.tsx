import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function Veronica() {
  const [selectedPrompt, setSelectedPrompt] = useState('')

  const handlePromptClick = (prompt: string) => {
    setSelectedPrompt(prompt)
  }

  const prompts = [
    'Help me assemble an appropriate team for AI transformation',
    'Help me draft a 6 months learning plan using resources from this platform',
    'Craft an AI transformation roadmap for my company',
    'Summarise the current trends in AI development',
    'Explain succinctly Transformer models and their role in LLMs',
    '...'
  ]

  const features = [
    { icon: '⚡', title: 'Instant Answers 24/7' },
    { icon: '🔒', title: 'Secure & Private' },
    { icon: '👤', title: 'Personalised Support' },
    { icon: '🌐', title: 'Multi Language Support' },
    { icon: '✨', title: 'Creative Assistance' },
    { icon: '🎤', title: 'Voice-to-Text Capability' }
  ]

  return (
    <>
      <Head>
        <title>Meet Veronica - Your AI Companion | AIgnition</title>
        <meta name="description" content="Unlock the power of conversational AI with Veronica, your customised AI companion" />
      </Head>

      <Navbar />

      <main className="bg-white">
        {/* Top Section */}
        <section className="py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4">
            {/* Title and Description */}
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Meet Veronica, your AI companion
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Unlock the power of conversational AI with our very own customised chatbot. 
                Veronica is designed to assist and engage with you.
              </p>
            </div>

            {/* Large Image Placeholder */}
            <div className="max-w-2xl mx-auto mb-16">
              <div className="w-full aspect-square bg-gray-100 border-2 border-gray-300 rounded-lg flex items-center justify-center">
                <svg className="w-32 h-32 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-8">
                {/* Purpose & Vision Card */}
                <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Purpose & Vision
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-100 border-2 border-gray-300 flex items-center justify-center flex-shrink-0">
                          <span className="text-lg">{feature.icon}</span>
                        </div>
                        <span className="text-gray-700 text-sm font-medium">
                          {feature.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Effective Prompt Guidelines Card */}
                <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Effective Prompt Guidelines (CREATE)
                  </h2>
                  <p className="text-sm text-gray-500 mb-6">Credits to Dave Birss</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Character:</h3>
                      <p className="text-sm text-gray-600">
                        Define the persona (e.g., &quot;You are a CTO&quot;)
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Request:</h3>
                      <p className="text-sm text-gray-600">
                        Define the core task or goal (e.g., &quot;Review this article...&quot;)
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Examples:</h3>
                      <p className="text-sm text-gray-600">
                        Provide a reference for style or format
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Adjustments:</h3>
                      <p className="text-sm text-gray-600">
                        Provide constraints to guide the AI
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Type of Output:</h3>
                      <p className="text-sm text-gray-600">
                        Define the desired format (e.g., a bullet list)
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Extras:</h3>
                      <p className="text-sm text-gray-600">
                        Additional instructions (e.g., &quot;Check for missing details before starting&quot;)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div>
                {/* Try Asking Card */}
                <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Try Asking...
                  </h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {prompts.map((prompt, index) => (
                      <button
                        key={index}
                        onClick={() => handlePromptClick(prompt)}
                        className="p-4 bg-white border-2 border-gray-300 rounded-xl text-left hover:border-orange-500 hover:bg-orange-50 transition-all duration-200 min-h-[120px] flex items-center justify-center text-center"
                      >
                        <span className="text-sm text-gray-700 font-medium">
                          {prompt}
                        </span>
                      </button>
                    ))}
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
