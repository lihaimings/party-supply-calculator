export default function PrivacyPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none text-gray-600">
          <p className="text-sm text-gray-500 mb-8">Last updated: January 2026</p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Introduction</h2>
          <p>
            Party Supply Calculator (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. 
            This Privacy Policy explains how we handle information when you use our website.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Information We Collect</h2>
          <p>
            We do not collect any personal information. All calculations and saved party plans 
            are stored locally in your browser using localStorage technology. This data never 
            leaves your device and is not transmitted to our servers.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Local Storage</h2>
          <p>
            Our tool uses your browser&apos;s localStorage to save your party plans. This allows 
            you to access your saved plans when you return to the site. You can clear this 
            data at any time by clearing your browser&apos;s local storage or using the delete 
            function within the app.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Cookies</h2>
          <p>
            We may use essential cookies to ensure the proper functioning of our website. 
            These cookies do not track your personal information or browsing habits.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Third-Party Services</h2>
          <p>
            Our website may use third-party services for analytics purposes. These services 
            may collect anonymous usage data to help us improve our tool. No personally 
            identifiable information is shared with these services.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Data Security</h2>
          <p>
            Since all your data is stored locally on your device, you have full control 
            over its security. We recommend keeping your browser and device secure to 
            protect your saved party plans.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be 
            posted on this page with an updated revision date.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us 
            through our website.
          </p>
        </div>
      </div>
    </main>
  )
}
