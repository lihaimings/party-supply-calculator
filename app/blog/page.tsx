import Link from 'next/link'

const posts = [
  {
    slug: 'getting-started',
    title: 'Getting Started with Party Supply Calculator',
    excerpt: 'Learn how to use our party supply calculator to plan your perfect event.',
    date: 'January 2, 2026',
    readTime: '3 min read'
  },
  {
    slug: 'party-planning-tips',
    title: '10 Essential Party Planning Tips',
    excerpt: 'Expert tips to help you plan a successful party that your guests will love.',
    date: 'January 1, 2026',
    readTime: '5 min read'
  },
  {
    slug: 'budget-friendly-parties',
    title: 'How to Throw a Great Party on a Budget',
    excerpt: 'Discover creative ways to host an amazing party without breaking the bank.',
    date: 'December 28, 2025',
    readTime: '4 min read'
  }
]

export default function BlogPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Blog</h1>
        <p className="text-gray-600 text-center mb-12">
          Tips, guides, and insights for planning the perfect party
        </p>

        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl shadow-lg border border-rose-100 p-8 hover:shadow-xl transition-shadow"
            >
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-bold text-gray-800 mb-3 hover:text-rose-600 transition-colors">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
