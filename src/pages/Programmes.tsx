import { Users, GraduationCap, Briefcase, Heart } from 'lucide-react';
import Button from '../components/Button';

interface ProgrammesProps {
  onNavigate: (path: string) => void;
}

export default function Programmes({ onNavigate }: ProgrammesProps) {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#A66D3C] to-[#8a5730] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Programme</h1>
        </div>
      </section>

      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-[#A62D37] to-[#8a2530] text-white rounded-2xl p-10 shadow-xl">
              <Users size={56} className="mb-6" />
              <h2 className="text-3xl font-bold mb-4">Life skills and confidence</h2>
              <p className="text-lg leading-relaxed">
                Foundations for daily life, such as timekeeping, communication, teamwork, planning and problem solving. Confidence building runs through everything we do.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#035AA6] to-[#024a8a] text-white rounded-2xl p-10 shadow-xl">
              <GraduationCap size={56} className="mb-6" />
              <h2 className="text-3xl font-bold mb-4">Accredited training</h2>
              <p className="text-lg leading-relaxed">
                Opportunities to gain recognised learning. We set goals together, track progress and celebrate each achievement.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#A66D3C] to-[#8a5730] text-white rounded-2xl p-10 shadow-xl">
              <Briefcase size={56} className="mb-6" />
              <h2 className="text-3xl font-bold mb-4">Supported work experience</h2>
              <p className="text-lg leading-relaxed">
                Real work alongside experienced staff in safe, supportive settings. Trainees learn transferable skills that can lead to further education or employment.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#D99E6A] to-[#A66D3C] text-white rounded-2xl p-10 shadow-xl">
              <Heart size={56} className="mb-6" />
              <h2 className="text-3xl font-bold mb-4">Wellbeing and social activities</h2>
              <p className="text-lg leading-relaxed">
                Walks, groups and community events that build friendships and reduce isolation. Being active and included matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#ADD1D9] to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
                Who can take part
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Adults and young people from 16 upwards, primarily in Perth and Kinross. We also accept referrals from neighbouring areas when practical.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/images/Giraffe Volunteers.jpg"
                alt="Volunteers and trainees working together at Check-In Works"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#A62D37] to-[#8a2530] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
           <a
              href="https://www.giraffe-trading.co.uk/referral-form"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#A62D37] border-2 border-white rounded-lg hover:bg-transparent hover:text-white transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              Make a referral
            </a>
            <Button onClick={() => onNavigate('/contact')} variant="tertiary" size="large">
              Ask a question
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
