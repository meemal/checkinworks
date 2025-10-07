import { Download } from 'lucide-react';

export default function AnnualReports() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#035AA6] to-[#024a8a] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Annual Reports</h1>
        </div>
      </section>

      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900">
            The difference your support makes
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="bg-gradient-to-br from-[#A62D37] to-[#8a2530] text-white rounded-xl p-8 shadow-lg">
              <div className="text-5xl font-bold mb-3">60</div>
              <p className="text-lg leading-relaxed">
                We support around 60 trainees each year through direct programmes.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#035AA6] to-[#024a8a] text-white rounded-xl p-8 shadow-lg">
              <div className="text-5xl font-bold mb-3">25</div>
              <p className="text-lg leading-relaxed">
                25 ASN pupils gain work experience with us.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#A66D3C] to-[#8a5730] text-white rounded-xl p-8 shadow-lg">
              <div className="text-5xl font-bold mb-3">30</div>
              <p className="text-lg leading-relaxed">
                Around 30 people join activity and social groups.
              </p>
            </div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Outcomes include increased confidence, new qualifications, improved independence and steps into further education or work.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#ADD1D9] to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900">
            Annual reports and accounts
          </h2>
          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            Funders and partners can access our most recent documents here.
          </p>
          <div className="space-y-4">
            <a
              href="/files/Checkin Final Accounts 2023-24.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-gray-200 rounded-lg p-6 flex items-center justify-between hover:border-[#A62D37] transition-colors"
            >
              <div className="flex items-center gap-4">
                <Download size={32} className="text-[#A62D37]" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Annual Report and Accounts 2023-24</h3>
                  <p className="text-sm text-gray-600">PDF Document</p>
                </div>
              </div>
              <span className="px-6 py-2 bg-[#A62D37] text-white rounded-lg hover:bg-[#8a2530] transition-colors font-semibold">
                Download
              </span>
            </a>
            <a
              href="/files/Checkin Accounts 2022-23.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-gray-200 rounded-lg p-6 flex items-center justify-between hover:border-[#A62D37] transition-colors"
            >
              <div className="flex items-center gap-4">
                <Download size={32} className="text-[#A62D37]" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Annual Report and Accounts 2022-23</h3>
                  <p className="text-sm text-gray-600">PDF Document</p>
                </div>
              </div>
              <span className="px-6 py-2 bg-[#A62D37] text-white rounded-lg hover:bg-[#8a2530] transition-colors font-semibold">
                Download
              </span>
            </a>
            <a
              href="/files/Checkin Works Accounts 21-22.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-gray-200 rounded-lg p-6 flex items-center justify-between hover:border-[#A62D37] transition-colors"
            >
              <div className="flex items-center gap-4">
                <Download size={32} className="text-[#A62D37]" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Annual Report and Accounts 2021-22</h3>
                  <p className="text-sm text-gray-600">PDF Document</p>
                </div>
              </div>
              <span className="px-6 py-2 bg-[#A62D37] text-white rounded-lg hover:bg-[#8a2530] transition-colors font-semibold">
                Download
              </span>
            </a>
          </div>
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
            <a
              href="https://www.wolfson.org.uk/case-study-checkin-works/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-gray-200 rounded-xl p-6 flex items-center justify-center hover:border-[#A62D37] hover:shadow-lg transition-all duration-200 group"
            >
              <img
                src="/images/supporters-logos/the wolfson foundation.svg"
                alt="The Wolfson Foundation - supporting Check-In Works"
                className="max-w-full max-h-20 object-contain group-hover:scale-105 transition-transform duration-200"
              />
            </a>
            <a
              href="https://www.gannochytrust.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-gray-200 rounded-xl p-6 flex items-center justify-center hover:border-[#A62D37] hover:shadow-lg transition-all duration-200 group"
            >
              <img
                src="/images/supporters-logos/gannochy trust logo.jpg"
                alt="The Gannochy Trust charitable foundation logo"
                className="max-w-full max-h-20 object-contain group-hover:scale-105 transition-transform duration-200"
              />
            </a>
            <a
              href="https://www.therobertsontrust.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-gray-200 rounded-xl p-6 flex items-center justify-center hover:border-[#A62D37] hover:shadow-lg transition-all duration-200 group"
            >
              <img
                src="/images/supporters-logos/the robertson trust.svg"
                alt="The Robertson Trust Scotland logo"
                className="max-w-full max-h-20 object-contain group-hover:scale-105 transition-transform duration-200"
              />
            </a>
            <a
              href="https://www.pkc.gov.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-gray-200 rounded-xl p-6 flex items-center justify-center hover:border-[#A62D37] hover:shadow-lg transition-all duration-200 group"
            >
              <img
                src="/images/supporters-logos/Perth and kinross council.png"
                alt="Perth and Kinross Council local authority logo"
                className="max-w-full max-h-20 object-contain group-hover:scale-105 transition-transform duration-200"
              />
            </a>
            <a
              href="https://www.tnlcommunityfund.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-gray-200 rounded-xl p-6 flex items-center justify-center hover:border-[#A62D37] hover:shadow-lg transition-all duration-200 group"
            >
              <img
                src="/images/supporters-logos/the-national-lottery-community-fund-logo.svg"
                alt="The National Lottery Community Fund logo"
                className="max-w-full max-h-20 object-contain group-hover:scale-105 transition-transform duration-200"
              />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#ADD1D9] to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900 text-center">
            Recognition and accreditation
          </h2>
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-all">
              <img
                src="/images/logos/Giraffe OSCR Logo.png"
                alt="OSCR Registered Charity - Scottish Charity Regulator"
                className="max-h-24 object-contain"
              />
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-all">
              <img
                src="/images/logos/DisabilityConfidentLeader-Giraffe.png"
                alt="Disability Confident Leader - UK Government Accreditation"
                className="max-h-24 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#A62D37] to-[#8a2530] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="/contact.html"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#A62D37] border-2 border-white rounded-lg hover:bg-transparent hover:text-white transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              Contact our team
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#A62D37] border-2 border-white rounded-lg hover:bg-transparent hover:text-white transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              Partners and supporters
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
