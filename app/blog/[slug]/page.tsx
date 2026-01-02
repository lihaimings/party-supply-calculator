import Link from 'next/link'
import { notFound } from 'next/navigation'

const posts: Record<string, { title: string; content: string; date: string }> = {
  'getting-started': {
    title: 'Getting Started with Party Supply Calculator',
    date: 'January 2, 2026',
    content: `
      <p>Planning a party can be overwhelming, especially when it comes to figuring out how much food, drinks, and supplies you need. That's where Party Supply Calculator comes in!</p>
      
      <h2>Why Use a Party Calculator?</h2>
      <p>Running out of food or drinks at a party is every host's nightmare. On the other hand, over-ordering leads to waste and unnecessary expenses. Our calculator helps you find the perfect balance.</p>
      
      <h2>How It Works</h2>
      <p>Simply enter your guest count, party duration, and event type. Our algorithm calculates the optimal quantities based on industry standards and real-world party planning experience.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li>Accurate food portion calculations</li>
        <li>Drink estimates for both alcoholic and non-alcoholic beverages</li>
        <li>Supply checklist generation</li>
        <li>Budget estimation with cost breakdown</li>
        <li>Save and compare multiple party plans</li>
      </ul>
      
      <h2>Get Started Today</h2>
      <p>Head to our homepage and start planning your perfect party. It's free, easy to use, and will save you time and money!</p>
    `
  },
  'party-planning-tips': {
    title: '10 Essential Party Planning Tips',
    date: 'January 1, 2026',
    content: `
      <p>Whether you're planning a birthday bash, holiday gathering, or casual get-together, these tips will help ensure your party is a success.</p>
      
      <h2>1. Start Planning Early</h2>
      <p>Give yourself at least 2-3 weeks for small parties and 1-2 months for larger events.</p>
      
      <h2>2. Know Your Guest Count</h2>
      <p>Send invitations early and track RSVPs. This is crucial for calculating supplies.</p>
      
      <h2>3. Set a Realistic Budget</h2>
      <p>Use our calculator to estimate costs and stick to your budget.</p>
      
      <h2>4. Plan Your Menu</h2>
      <p>Consider dietary restrictions and preferences. Offer a variety of options.</p>
      
      <h2>5. Don't Forget the Drinks</h2>
      <p>Plan for 2-3 drinks per person per hour. Include non-alcoholic options.</p>
      
      <h2>6. Create a Timeline</h2>
      <p>Plan what needs to happen and when, from setup to cleanup.</p>
      
      <h2>7. Prepare in Advance</h2>
      <p>Do as much prep work as possible before the day of the party.</p>
      
      <h2>8. Have Extra Supplies</h2>
      <p>Always order 10-15% more than you think you need.</p>
      
      <h2>9. Plan for Entertainment</h2>
      <p>Music, games, or activities keep guests engaged.</p>
      
      <h2>10. Enjoy Your Own Party</h2>
      <p>With good planning, you can relax and have fun with your guests!</p>
    `
  },
  'budget-friendly-parties': {
    title: 'How to Throw a Great Party on a Budget',
    date: 'December 28, 2025',
    content: `
      <p>You don't need to spend a fortune to throw an amazing party. Here are our top tips for hosting on a budget.</p>
      
      <h2>Choose the Right Time</h2>
      <p>Afternoon parties typically cost less than dinner parties. Brunch or dessert-only events are also budget-friendly options.</p>
      
      <h2>DIY Decorations</h2>
      <p>Get creative with homemade decorations. Pinterest is full of affordable DIY ideas.</p>
      
      <h2>Potluck Style</h2>
      <p>Ask guests to bring a dish to share. This reduces your food costs significantly.</p>
      
      <h2>BYOB</h2>
      <p>For adult parties, asking guests to bring their own beverages can save a lot of money.</p>
      
      <h2>Shop Smart</h2>
      <p>Buy supplies in bulk, look for sales, and consider dollar stores for basics.</p>
      
      <h2>Keep It Simple</h2>
      <p>Sometimes the best parties are the simplest. Focus on good company over elaborate setups.</p>
      
      <h2>Use Our Calculator</h2>
      <p>Avoid over-buying by using our Party Supply Calculator to get accurate estimates.</p>
    `
  }
}

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug]

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link
          href="/blog"
          className="text-rose-600 hover:text-rose-700 mb-8 inline-block"
        >
          ← Back to Blog
        </Link>

        <article>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <p className="text-gray-500 mb-8">{post.date}</p>

          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-li:text-gray-600"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Ready to Plan Your Party?</h3>
          <Link
            href="/"
            className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Try Party Supply Calculator →
          </Link>
        </div>
      </div>
    </main>
  )
}
