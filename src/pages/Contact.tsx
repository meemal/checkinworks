import { useState } from 'react';
import { MapPin, Phone, Mail, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mvgwbzaw', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      setSubmitted(true);
      form.reset();
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      setError('Failed to submit form. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#035AA6] to-[#024a8a] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl opacity-95">
            We would love to hear from you. Choose a reason for contact and we will route your message to the right person.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-500 rounded-xl p-10 text-center">
                <CheckCircle size={64} className="mx-auto mb-6 text-green-600" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank you!</h2>
                <p className="text-lg text-gray-700">We will respond as soon as we can.</p>
              </div>
            ) : (
              <>
                {error && (
                  <div className="bg-red-50 border-2 border-red-500 rounded-lg p-4 mb-6">
                    <p className="text-red-700">{error}</p>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="reason" className="block text-sm font-semibold text-gray-700 mb-2">
                    Reason for contact
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#A62D37] focus:outline-none text-gray-900"
                  >
                    <option value="">Please select...</option>
                    <option value="referral">Make a referral</option>
                    <option value="support">Support our work</option>
                    <option value="volunteer">Volunteer with us</option>
                    <option value="general">General enquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#A62D37] focus:outline-none text-gray-900"
                  />
                </div>

                <div>
                  <label htmlFor="organisation" className="block text-sm font-semibold text-gray-700 mb-2">
                    Organisation (optional)
                  </label>
                  <input
                    type="text"
                    id="organisation"
                    name="organisation"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#A62D37] focus:outline-none text-gray-900"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#A62D37] focus:outline-none text-gray-900"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#A62D37] focus:outline-none text-gray-900"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#A62D37] focus:outline-none text-gray-900 resize-none"
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    className="mt-1 w-5 h-5 text-[#A62D37] border-gray-300 rounded focus:ring-[#A62D37]"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-700">
                    I am happy for Check-In Works to contact me about this enquiry.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#A62D37] text-white rounded-lg hover:bg-[#8a2530] transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send message'}
                </button>
              </form>
              </>
            )}
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gradient-to-br from-[#ADD1D9] to-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin size={24} className="text-[#A62D37] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-700">Suite B Riverview House<br />Friarton Road<br />Perth<br />PH2 8DF<br />Scotland</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={24} className="text-[#A62D37] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-700">01738 449227</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail size={24} className="text-[#A62D37] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-700">info@checkinworks.co.uk</p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>
    </div>
  );
}
