import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';

interface AboutProps {
  onNavigate: (path: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#035AA6] to-[#024a8a] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Check-In Works</h1>
        </div>
      </section>

      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
                People first, always
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We exist to support people who face barriers to life. We focus on inclusion, socialisation, attainment and, where appropriate, the pathway into meaningful work.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Support is person-centred and flexible. There is no fixed end point.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/images/Trainees playing Christmas Uno.jpg"
                alt="Trainees enjoying social activities and games together"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#ADD1D9] to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
            What a typical journey can look like
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            A trainee may begin with a simple goal, such as making eye contact. Others aim for accredited training or a first job. We meet people where they are, build confidence and celebrate progress at every step.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#D99E6A] to-[#A66D3C] rounded-2xl p-10 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-6">Steve's story</h3>
            <p className="text-lg leading-relaxed">
              Steve joined us seven years ago with no work history. After a year he gained paid work, moved to a new job, returned to apply for a services role with us, then moved on again. He still checks in. We remain a critical friend, a cheerleader and a sounding board.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/images/Giraffe Trading.jpg"
                alt="Giraffe Trading - our social enterprise partner"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
                Charity and social enterprise, working together
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                The charity leads on social outcomes. Giraffe Trading carries out trading activity. Income is reinvested so more people can be supported.
              </p>
              <a
                href="https://giraffekitchen.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#035AA6] text-white rounded-lg hover:bg-[#024a8a] transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                Visit Giraffe Trading
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#A62D37] to-[#8a2530] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <Button onClick={() => onNavigate('/get-involved')} variant="secondary" size="large">
              Make a referral
            </Button>
            <Button onClick={() => onNavigate('/impact')} variant="tertiary" size="large">
              Read our impact
            </Button>
            <Button onClick={() => onNavigate('/contact')} variant="secondary" size="large">
              Contact us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
