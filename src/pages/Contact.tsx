import { useState } from 'react';
import { MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import Button from '../components/Button';
import { supabase } from '../lib/supabase';

interface ContactProps {
  onNavigate: (path: string) => void;
}

export default function Contact({}: ContactProps) {
  const [formData, setFormData] = useState({
    reason: '',
    name: '',
    organisation: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const { error: submitError } = await supabase
        .from('contact_submissions')
        .insert([{
          reason: formData.reason,
          name: formData.name,
          organisation: formData.organisation || null,
          email: formData.email,
          phone: formData.phone || null,
          message: formData.message,
          consent: formData.consent,
        }]);

      if (submitError) throw submitError;

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          reason: '',
          name: '',
          organisation: '',
          email: '',
          phone: '',
          message: '',
          consent: false,
        });
      }, 3000);
    } catch (err) {
      setError('Failed to submit form. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
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
                    value={formData.reason}
                    onChange={handleChange}
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
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.organisation}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
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
                    value={formData.phone}
                    onChange={handleChange}
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
                    value={formData.message}
                    onChange={handleChange}
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
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                    className="mt-1 w-5 h-5 text-[#A62D37] border-gray-300 rounded focus:ring-[#A62D37]"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-700">
                    I am happy for Check-In Works to contact me about this enquiry.
                  </label>
                </div>

                <Button type="submit" size="large" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send message'}
                </Button>
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
                    <p className="text-gray-700">Perth & Kinross<br />Scotland</p>
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
