import ToolComponent from '@/components/tool/ToolComponent'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 via-white to-rose-50/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            🎉 Party Supply Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Calculate the perfect amount of food, drinks, and supplies for your party. 
            Never run out of refreshments or over-order again!
          </p>
        </div>
      </section>

      {/* Tool Section */}
      <section className="py-12 px-4">
        <ToolComponent />
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Use Our Calculator?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Accurate Estimates</h3>
              <p className="text-gray-600">
                Our calculations are based on industry standards and real party planning experience.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Budget Planning</h3>
              <p className="text-gray-600">
                Get instant cost estimates to help you plan your party budget effectively.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Save & Compare</h3>
              <p className="text-gray-600">
                Save multiple party plans and compare them to find the best option.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-rose-500 to-pink-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Plan Your Perfect Party?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Start calculating now and take the guesswork out of party planning!
          </p>
          <Link
            href="/#top"
            className="inline-block bg-white text-rose-600 font-semibold px-8 py-3 rounded-xl hover:bg-rose-50 transition-colors"
          >
            Start Calculating →
          </Link>
        </div>
      </section>
    </main>
  )
}
