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
                Supporting inclusion
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
   Our primary aim is to support autistic people and people with learning disabilities to move towards inclusion, socialisation, attainment, realising their own potential and, if appropriate, into meaningful work. 
                 </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We achieve this through a person-centred programme of life skills, team building, accredited training, supported work experience, goal setting, wellbeing activities and social activities.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
           We focus on overlooked aspects, such as confidence building, which enables our trainees to move their lives forward as well as being an active and included part in our local communities.
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
            <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/images/Giraffe trainees playing foot golf.jpg"
                alt="Giraffe trainees playing foot golf"
                className="w-full h-full object-cover"
              />
            </div>
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
            What a typical journey can look like
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            There is no typical journey! For example, a trainee may begin with a simple goal such as making eye contact, whereas others aim for accredited training or a first job. 
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
         We are guided by each individual's aspirations and support them through every step of that journey.
          </p>
        </div>
             </div>
               </div>
      </section>


      <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden ">
              <img
                src="/images/logos/Giraffe Logo.svg"
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
                href="https://www.giraffe-trading.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#035AA6] text-white rounded-lg hover:bg-[#024a8a] transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
                aria-label="Visit Giraffe Trading website (opens in new tab)"
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
            <a
              href="https://www.giraffe-trading.co.uk/referral-form"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#A62D37] border-2 border-white rounded-lg hover:bg-transparent hover:text-white transition-all duration-200 font-semibold text-lg"
            >
              Make a referral
            </a>
            <Button onClick={() => onNavigate('/annual-reports')} variant="tertiary" size="large">
              Read our annual reports
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
