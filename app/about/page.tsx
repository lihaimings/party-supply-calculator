export default function AboutPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Party Supply Calculator</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Party Supply Calculator is a free online tool designed to help party planners, 
            event coordinators, and hosts calculate the right amount of food, drinks, and 
            supplies for any event.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            We believe that party planning should be fun, not stressful. Our mission is to 
            take the guesswork out of event planning by providing accurate, easy-to-use 
            calculation tools that help you prepare the perfect amount of everything.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">How It Works</h2>
          <p className="text-gray-600 mb-6">
            Our calculator uses industry-standard formulas and real-world party planning 
            experience to estimate quantities. We factor in guest count, party duration, 
            event type, and other variables to give you accurate recommendations.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Features</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Calculate food portions based on guest count and party duration</li>
            <li>Estimate drink quantities for both alcoholic and non-alcoholic beverages</li>
            <li>Generate supply checklists for plates, cups, napkins, and utensils</li>
            <li>Get instant budget estimates with cost breakdowns</li>
            <li>Save and compare multiple party plans</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-600">
            Have questions or suggestions? We&apos;d love to hear from you! 
            Your feedback helps us improve our tools and serve you better.
          </p>
        </div>
      </div>
    </main>
  )
}
