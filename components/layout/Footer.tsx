import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">🎉 Party Supply Calculator</h3>
            <p className="text-gray-400">
              Plan your perfect party with accurate supply calculations.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-rose-400 transition-colors">Home</Link></li>
              <li><Link href="/how-to-use" className="hover:text-rose-400 transition-colors">How to Use</Link></li>
              <li><Link href="/faq" className="hover:text-rose-400 transition-colors">FAQ</Link></li>
              <li><Link href="/blog" className="hover:text-rose-400 transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-rose-400 transition-colors">About Us</Link></li>
              <li><Link href="/privacy" className="hover:text-rose-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-rose-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <p className="text-gray-400">
              Have questions? We&apos;re here to help you plan the perfect party!
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Party Supply Calculator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
