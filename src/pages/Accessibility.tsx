export default function Accessibility() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#035AA6] to-[#024a8a] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Accessibility</h1>
        </div>
      </section>

      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Our commitment to accessibility</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Check-In Works is committed to ensuring our website is accessible to everyone, including people with disabilities. We strive to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">What we do</h3>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
            <li>Use clear, plain English throughout the site</li>
            <li>Provide descriptive alternative text for all images</li>
            <li>Ensure high colour contrast between text and backgrounds</li>
            <li>Use readable fonts with appropriate sizing</li>
            <li>Structure content with logical headings and landmarks</li>
            <li>Make all forms keyboard navigable</li>
            <li>Design large tap targets for touch devices</li>
            <li>Avoid colour-only information conveyance</li>
            <li>Keep sentences short and information front-loaded</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">Keyboard navigation</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            All interactive elements on this website can be accessed using a keyboard. Use the Tab key to move between links and buttons, and press Enter to activate them.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">Screen readers</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            This website has been designed to work well with screen readers. We use semantic HTML, ARIA labels where appropriate, and provide clear text alternatives for non-text content.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">Feedback and support</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            We are always working to improve accessibility. If you experience any difficulties accessing content on this website or have suggestions for improvement, please let us know.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Contact us at info@checkinworks.co.uk with details of the issue and we will do our best to help.
          </p>

          <div className="mt-10">
            <a
              href="/contact.html"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#035AA6] text-white rounded-lg hover:bg-[#024a8a] transition-colors font-semibold shadow-md hover:shadow-lg"
            >
              Report an accessibility issue
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
