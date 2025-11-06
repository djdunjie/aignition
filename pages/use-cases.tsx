import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

interface UseCaseCardProps {
  industry: string
  company: string
  description: string
  additionalText?: string
}

function UseCaseCard({ industry, company, description, additionalText }: UseCaseCardProps) {
  return (
    <div className="border-2 border-gray-300 rounded-2xl p-6 bg-white h-full flex flex-col">
      <h2 className="text-xl font-bold text-gray-900 mb-1">{industry}</h2>
      <p className="text-sm font-semibold text-gray-600 mb-4 text-center">Featured Success Story</p>
      
      <div className="flex gap-4 mb-4">
        {/* Left: Image placeholder with company name below */}
        <div className="flex-shrink-0">
          <div className="w-24 h-24 bg-gray-100 border-2 border-gray-300 rounded flex items-center justify-center mb-2">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <p className="text-xs font-semibold text-gray-900 w-24 text-center">{company}</p>
        </div>
        
        {/* Right: Description */}
        <div className="flex-1">
          <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
        </div>
      </div>
      
      {additionalText && (
        <p className="text-sm text-gray-700 leading-relaxed text-center mt-4">{additionalText}</p>
      )}
    </div>
  )
}

export default function UseCases() {
  const leftColumnCases: UseCaseCardProps[] = [
    {
      industry: 'Banking & Finance',
      company: 'JP Morgan Chase & Co.',
      description: 'JP Morgan Chase is driving digital transformation by embedding artificial intelligence across its operations. The bank has developed "COiN," an AI platform that analyzes legal documents, saving over 360,000 hours annually. For wealth management, its "Coach AI" tool helped contribute to a 20% increase in gross sales by providing advisors with faster, data-driven insights.',
      additionalText: 'By migrating its infrastructure to the cloud and deploying hundreds of AI use cases, from fraud detection to credit risk prediction, the bank has enhanced efficiency, improved risk management, and delivered significant financial value.'
    },
    {
      industry: 'Insurance',
      company: 'Lemonade Inc.',
      description: 'Lemonade disrupts the insurance industry by building its model on AI and behavioral economics. It uses AI chatbots, "Maya" for onboarding and "Jim" for claims, to provide a digital-first experience. Customers can get insured in as little as 90 seconds, with AI handling a significant percentage of claims without human intervention.',
      additionalText: 'This AI-driven approach drastically reduces operational costs and enhances customer satisfaction, allowing Lemonade to offer competitive pricing and a highly efficient service.'
    }
  ]

  const rightColumnCases: UseCaseCardProps[] = [
    {
      industry: 'Educational Institutions',
      company: 'Georgia State University',
      description: 'Georgia State University transformed its student support system using data and AI, implementing a chatbot called "Pounce" to answer questions and an advisor alert system called GPS Advising. This system proactively tracks 800 risk factors for every undergraduate student, triggering an alert to an advisor if a student is at-risk. With GPS Advising, the university prompts tens of thousands of proactive interventions annually. GSU also uses an AI chatbot, "Pounce," to answer routine questions of prospective students.',
      additionalText: 'This data-driven approach has successfully eliminated achievement gaps based on race and income and significantly boosted graduation rates.'
    },
    {
      industry: 'Small Medium Enterprises (SMEs)',
      company: 'Ah Seng\'s Prata Shop',
      description: 'Featured Success Story'
    }
  ]

  return (
    <>
      <Head>
        <title>Use Cases - AIgnition</title>
        <meta name="description" content="Explore how AIgnition transforms businesses across industries" />
      </Head>

      <Navbar />

      <main className="bg-white">
        {/* Hero Section */}
        <section className="py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
              Get Inspired
            </h1>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:auto-rows-fr">
              {/* Left Column - First Row */}
              <UseCaseCard {...leftColumnCases[0]} />
              <UseCaseCard {...rightColumnCases[0]} />
              
              {/* Second Row */}
              <UseCaseCard {...leftColumnCases[1]} />
              <UseCaseCard {...rightColumnCases[1]} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}