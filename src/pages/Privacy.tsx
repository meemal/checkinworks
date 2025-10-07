import Button from '../components/Button';

interface PrivacyProps {
  onNavigate: (path: string) => void;
}

export default function Privacy({ onNavigate }: PrivacyProps) {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-gray-800 to-gray-700 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Privacy Policy</h1>
        </div>
      </section>

      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">How we handle your data</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Check-In Works is committed to protecting your privacy. This policy explains how we collect, use and protect your personal information.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">What information we collect</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            We collect information you provide when you contact us through our enquiry forms, make a referral or download our reports. This may include your name, email address, phone number, organisation and the content of your message.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">How we use your information</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            We use your information to respond to your enquiries, process referrals and provide information about our services. We will only contact you for the purpose you have requested.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">How we protect your information</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            We take appropriate technical and organisational measures to protect your personal information. We do not share your information with third parties without your consent, except where required by law.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">Cookies and tracking</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            This website does not use tracking cookies by default. We do not collect analytics or user behaviour data without your explicit consent.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">Your rights</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            You have the right to request access to, correction of, or deletion of your personal information. You can also withdraw consent for us to contact you at any time.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">Contact us about your data</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you have questions about how we handle your data or wish to exercise your rights, please contact us at info@checkinworks.co.uk.
          </p>

          <div className="mt-10">
            <Button onClick={() => onNavigate('/contact')}>
              Contact us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
