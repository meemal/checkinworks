import { Users, Award, Heart, ArrowRight, UserPlus, HandHeart } from 'lucide-react';
import Button from '../components/Button';

interface HomeProps {
  onNavigate: (path: string) => void;
}

const supporters = [
  {
    name: 'Wolfson Foundation',
    logo: '/images/supporters-logos/the wolfson foundation.svg',
    url: 'https://www.wolfson.org.uk/case-study-checkin-works/',
    alt: 'The Wolfson Foundation - supporting Check-In Works'
  },
  {
    name: 'Gannochy Trust',
    logo: '/images/supporters-logos/gannochy trust logo.jpg',
    url: 'https://www.gannochytrust.org.uk/',
    alt: 'The Gannochy Trust charitable foundation logo'
  },
  {
    name: 'Robertson Trust',
    logo: '/images/supporters-logos/the robertson trust.svg',
    url: 'https://www.therobertsontrust.org.uk/',
    alt: 'The Robertson Trust Scotland logo'
  },
  {
    name: 'Perth & Kinross Council',
    logo: '/images/supporters-logos/Perth and kinross council.png',
    url: 'https://www.pkc.gov.uk/',
    alt: 'Perth and Kinross Council local authority logo'
  },
  {
    name: 'National Lottery Community Fund',
    logo: '/images/supporters-logos/the-national-lottery-community-fund-logo.svg',
    url: 'https://www.tnlcommunityfund.org.uk/',
    alt: 'The National Lottery Community Fund logo'
  }
];

const partners = [
  {
    name: 'PKAVS',
    logo: '/images/partners-logos/pkavs-logo.svg',
    url: 'https://www.pkavs.org.uk/',
    alt: 'PKAVS - Perth and Kinross Association of Voluntary Service logo'
  },
  {
    name: 'Plus Perth',
    logo: '/images/partners-logos/plusperth.png',
    url: 'https://plusperth.co.uk/',
    alt: 'Plus Perth community support logo'
  },
  {
    name: 'PUSH',
    logo: '/images/partners-logos/push-logo.png',
    url: 'https://www.pushinfo.org/',
    alt: 'PUSH Perth and Kinross information service logo'
  },
  {
    name: 'Perth Autism Support',
    logo: '/images/partners-logos/Perth autism support.jpg',
    url: 'https://www.perthautismsupport.org.uk/',
    alt: 'Perth Autism Support charity logo'
  },
  {
    name: 'SCVO',
    logo: '/images/partners-logos/scvo-rowan.svg',
    url: 'https://scvo.scot/',
    alt: 'Scottish Council for Voluntary Organisations logo'
  },
  {
    name: 'NHS Tayside',
    logo: '/images/partners-logos/NHS Tayside.png',
    url: 'https://www.nhstayside.scot.nhs.uk/index.htm',
    alt: 'NHS Tayside health board logo'
  },
  {
    name: 'Perth High School',
    logo: '/images/partners-logos/Perth-High-School-Logo.png',
    url: 'https://perthhigh.net/',
    alt: 'Perth High School education partner logo'
  },
  {
    name: 'PK Business Partnership',
    logo: '/images/partners-logos/pk business partnership.png',
    url: 'https://pkbusinesspartnership.co.uk/',
    alt: 'Perth and Kinross Business Partnership logo'
  }
];

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-[#A62D37] via-[#8a2530] to-[#A62D37] text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Supporting people with barriers to life
          </h1>
          <p className="text-lg sm:text-xl mb-10 max-w-3xl mx-auto leading-relaxed opacity-95">
            We help autistic people and people with learning disabilities to build skills, confidence and meaningful connections. Our programmes include life skills, accredited training, supported work experience and wellbeing activities in Perth and Kinross and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => onNavigate('/get-involved')} variant="secondary" size="large">
              Make a referral
            </Button>
            <Button onClick={() => onNavigate('/impact')} variant="tertiary" size="large">
              Read our latest impact
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#ADD1D9] to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
            Real change, close to home
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-[#A62D37] mb-3">60</div>
              <p className="text-gray-700 leading-relaxed">
                Around 60 trainees supported each year through direct programmes.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-[#035AA6] mb-3">25</div>
              <p className="text-gray-700 leading-relaxed">
                25 additional support needs pupils gain work experience with us.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-[#A66D3C] mb-3">30</div>
              <p className="text-gray-700 leading-relaxed">
                A further 30 people join our activity and social groups.
              </p>
            </div>
          </div>
          <p className="text-center text-lg text-gray-700 italic">
            Every journey is different. We tailor support around the person.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
            Practical support that builds confidence
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <img
                src="/images/giraffe staff and trainees.jpg"
                alt="Check-In Works staff and trainees working together"
                className="w-full h-48 object-cover"
              />
              <div className="bg-gradient-to-br from-[#A62D37] to-[#8a2530] text-white p-8">
                <Users size={48} className="mb-4" />
                <h3 className="text-2xl font-bold mb-3">Life skills and confidence</h3>
                <p className="leading-relaxed">
                  Timekeeping, communication, teamwork and independence.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <img
                src="/images/Dionne cooking - Giraffe trainee.jpg"
                alt="Trainee learning cooking skills in the kitchen"
                className="w-full h-48 object-cover"
              />
              <div className="bg-gradient-to-br from-[#035AA6] to-[#024a8a] text-white p-8">
                <Award size={48} className="mb-4" />
                <h3 className="text-2xl font-bold mb-3">Training and work experience</h3>
                <p className="leading-relaxed">
                  Accredited learning and supported shifts alongside our team.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <img
                src="/images/Trainees Wellness Walk on Kinnoull Hill.jpg"
                alt="Trainees on a wellness walk enjoying outdoor activities"
                className="w-full h-48 object-cover"
              />
              <div className="bg-gradient-to-br from-[#A66D3C] to-[#8a5730] text-white p-8">
                <Heart size={48} className="mb-4" />
                <h3 className="text-2xl font-bold mb-3">Wellbeing and social connection</h3>
                <p className="leading-relaxed">
                  Walks, groups and activities that reduce isolation.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Button onClick={() => onNavigate('/programmes')}>
              Explore our programmes
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#D99E6A] to-[#A66D3C] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-10 shadow-2xl">
            <blockquote className="text-2xl sm:text-3xl font-bold text-[#A62D37] mb-6 italic">
              "We are the comfort blanket if our trainees ever need it."
            </blockquote>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Read how Steve moved from zero experience to paid work, new roles and an ongoing connection with us.
            </p>
            <Button onClick={() => onNavigate('/about')}>
              Read Steve's story
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
            Our social enterprise partner
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Check-In Works is the charity. Giraffe Trading is our community interest company. The trading activity helps fund our social purpose.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => onNavigate('/about')}>
              Learn about the relationship
            </Button>
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
      </section>

      <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900">
            Recognised and accredited
          </h2>
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <img
                src="/images/logos/Giraffe OSCR Logo.png"
                alt="OSCR Registered Charity - Scottish Charity Regulator"
                className="max-h-24 object-contain"
              />
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <img
                src="/images/logos/DisabilityConfidentLeader-Giraffe.png"
                alt="Disability Confident Leader - UK Government Accreditation"
                className="max-h-24 object-contain"
              />
            </div>
          </div>
          <Button onClick={() => onNavigate('/impact')}>
            See our latest report
          </Button>
        </div>
      </section>

      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900 text-center">
            Our supporters
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 leading-relaxed max-w-3xl mx-auto">
            Thank you to the funders and donors who make this work possible.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
            {supporters.map((supporter) => (
              <a
                key={supporter.name}
                href={supporter.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-gray-200 rounded-xl p-6 flex items-center justify-center hover:border-[#A62D37] hover:shadow-lg transition-all duration-200 group"
              >
                <img
                  src={supporter.logo}
                  alt={supporter.alt}
                  className="max-w-full max-h-20 object-contain group-hover:scale-105 transition-transform duration-200"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#ADD1D9] to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900 text-center">
            Our partners
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 leading-relaxed max-w-3xl mx-auto">
            We work with schools, local authorities, community groups and employers to deliver meaningful support across Perth and Kinross.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-gray-200 rounded-xl p-6 flex items-center justify-center hover:border-[#035AA6] hover:shadow-lg transition-all duration-200 group"
              >
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className="max-w-full max-h-20 object-contain group-hover:scale-105 transition-transform duration-200"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900 text-center">
            Get Involved
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <div className="bg-gradient-to-br from-[#035AA6] to-[#024a8a] text-white p-8">
                <UserPlus size={56} className="mb-6" />
                <h3 className="text-2xl font-bold mb-4">Make a referral or self-refer</h3>
                <p className="leading-relaxed mb-6">
                  Use our simple form to tell us about the person and their goals. We will get back to you to discuss next steps.
                </p>
                <Button onClick={() => onNavigate('/contact')} variant="tertiary">
                  Make a referral
                </Button>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <div className="bg-gradient-to-br from-[#A66D3C] to-[#8a5730] text-white p-8">
                <Heart size={56} className="mb-6" />
                <h3 className="text-2xl font-bold mb-4">Support our work</h3>
                <p className="leading-relaxed mb-6">
                  Your funding helps people build confidence, learn new skills and move forward. We welcome conversations with trusts, foundations, businesses and individuals.
                </p>
                <Button onClick={() => onNavigate('/contact')} variant="tertiary">
                  Start a conversation
                </Button>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <div className="bg-gradient-to-br from-[#A62D37] to-[#8a2530] text-white p-8">
                <HandHeart size={56} className="mb-6" />
                <h3 className="text-2xl font-bold mb-4">Volunteer with us</h3>
                <p className="leading-relaxed mb-6">
                  We keep a small pool of volunteers for specific roles. If you would like to help, please share your interests and availability.
                </p>
                <Button onClick={() => onNavigate('/contact')} variant="tertiary">
                  Register interest
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
