export default function HowToUsePage() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">How to Use Party Supply Calculator</h1>

        <div className="space-y-8">
          <section className="bg-white rounded-2xl shadow-lg border border-rose-100 p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                1
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">Enter Guest Count</h2>
                <p className="text-gray-600">
                  Start by entering the number of guests you expect at your party. 
                  This is the most important factor in calculating supplies. 
                  If you&apos;re unsure, estimate on the higher side to be safe.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-lg border border-rose-100 p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                2
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">Set Party Duration</h2>
                <p className="text-gray-600">
                  Use the slider to set how long your party will last. 
                  Longer parties require more drinks and potentially more food. 
                  A typical party is 3-4 hours.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-lg border border-rose-100 p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                3
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">Choose Event Type</h2>
                <p className="text-gray-600">
                  Select the type of event you&apos;re planning. Different events have 
                  different consumption patterns. A wedding reception typically needs 
                  more food than a casual BBQ, for example.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-lg border border-rose-100 p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                4
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">Include Alcohol (Optional)</h2>
                <p className="text-gray-600">
                  Check this box if you&apos;ll be serving alcoholic beverages. 
                  This will add alcohol calculations to your results. 
                  Leave unchecked for family-friendly or dry events.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-lg border border-rose-100 p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                5
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">Calculate & Review</h2>
                <p className="text-gray-600">
                  Click the Calculate button to see your results. You&apos;ll get 
                  detailed breakdowns for food, drinks, supplies, and estimated budget. 
                  Review the numbers and adjust your inputs if needed.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-lg border border-rose-100 p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                6
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">Save Your Plan</h2>
                <p className="text-gray-600">
                  Give your plan a name and click Save to store it locally. 
                  You can save multiple plans and compare them later. 
                  Your plans are stored in your browser and will be available when you return.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-12 bg-rose-50 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">💡 Pro Tips</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-rose-600">•</span>
              Always add 10-15% extra to your calculations for unexpected guests
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-600">•</span>
              Consider dietary restrictions when planning food quantities
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-600">•</span>
              For outdoor events, increase drink quantities by 20%
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-600">•</span>
              Save multiple plans to compare different scenarios
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
