'use client';
import Image from "next/image";
import { ChevronRight, Trophy, Users, Target, Award, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [showFullText, setShowFullText] = useState(false);

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-20">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm">
              <Image
                src="/fenching2.jpg"
                alt="Fencing 1"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm">
              <Image
                src="/fenccinng22.jpg"
                alt="Fencing 2"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">THE LEGACY OF FENCING IN RAJASTHAN</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-8 text-gray-700 mb-6">
                Fencing, a sport rooted in chivalry and tradition, has a long and distinguished history. Rajasthan, known for its valiant swordsmen, has carried this legacy forward with remarkable achievements. The Rajasthan State Fencing Association has brought immense pride to the state, securing numerous Gold, Silver, and Bronze medals at the national and international level.
              </p>

              {/* Collapsible content */}
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${showFullText ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-lg leading-8 text-gray-700 mb-6">
                  Rajasthan claimed its first Senior National Fencing Championship title in 1981 at Lucknow (U.P.), marking the beginning of an illustrious journey. The 1993 Senior National Fencing Championship held in Bhilwara saw Rajasthan secure one Gold, one Silver, and two Bronze medals, earning the position of runners-up in the General Championship.
                </p>

                <p className="text-lg leading-8 text-gray-700 mb-6">
                  The state continued its success in 1994-95 at the Pune National Olympic Games, where it secured a Silver medal. The following year, in 1995-96 at the Patna Nationals Team Games, Rajasthan triumphed in the team event, adding a Bronze medal to its tally. In 1998, during the Guwahati(Assam) Nationals, the state claimed yet another Bronze medal.
                </p>

                <p className="text-lg leading-8 text-gray-700 mb-6">
                  In 1999, during the 1st Sub-Junior National Fencing Championship, Jaipur, Rajasthan excelled once again, winning two individual Bronze medals—one in the Girls' Championship and another in the Boys' Championship.
                </p>

                <p className="text-lg leading-8 text-gray-700 mb-6">
                  By 2001, at the Bangalore National Team Games, Rajasthan continued its dominance, securing another Bronze medal in the team event.
                </p>

                <p className="text-lg leading-8 text-gray-700">
                  Rajasthan's fencing legacy is a testament to its dedication, perseverance, and the undying spirit of sportsmanship. With each passing year, the state continues to elevate its status on the national and international stage, fostering a new generation of skilled fencers ready to uphold its glorious tradition.
                </p>
              </div>

              {/* More/Less Button */}
              <div className="text-center mt-8">
                <button
                  onClick={() => setShowFullText(!showFullText)}
                  className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300 font-semibold shadow-lg"
                >
                  {showFullText ? 'Show Less' : 'Read More'}
                  <ChevronDown className={`ml-2 w-5 h-5 transition-transform duration-300 ${showFullText ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-700 mb-8"> OUR MENTORS</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Mentor 1 */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition duration-300">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
                  <Image
                    src="/Daudkhan.jpeg"
                    alt="Daud Khan"
                    width={150}
                    height={150}
                    className="w-full h-full object-contain object-center"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">DAUD KHAN</h4>
                <p className="text-blue-600 font-semibold">CEO</p>
                <p className="text-blue-600 font-semibold">Chairman Technical Committee</p>
                <p className="text-blue-600 font-semibold">Ex. Sr.V.P FAI</p>

              </div>

              {/* Mentor 2 */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition duration-300">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
                  <Image
                    src="/abdul.jpeg"
                    alt="Abdul Jabbar Khan"
                    width={150}
                    height={150}
                    className="w-full h-full object-contain object-center"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">ABDUL JABBAR KHAN</h4>
                <p className="text-green-600 font-semibold">National & International Fencer &</p>
                <p className="text-green-600 font-semibold">Founder Member RSFA</p>

              </div>

              {/* Mentor 3 */}
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition duration-300">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
                  <Image
                    src="/masood.jpeg"
                    alt="Masood Khan Suri"
                    width={150}
                    height={150}
                    className="w-full h-full object-contain object-center"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">MASOOD KHAN SURI</h4>
                <p className="text-purple-600 font-semibold">
                Founder Member RSFA</p>
              </div>
            </div>
          </div>
          {/* Office Bearers Row */}
          {/* <div>
            <h3 className="text-2xl font-bold text-center text-gray-700 mb-8">OFFICE BEARERS</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition duration-300">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gray-200 shadow-lg mb-6">
                  <Image
                    src="/bk.jpeg"
                    alt="N. Babar"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">N. BABAR</h4>
                <p className="text-indigo-600 font-semibold">TREASURER</p>
              </div>

              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition duration-300">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gray-200 shadow-lg mb-6">
                  <Image
                    src="/vsnu.jpeg"
                    alt="Vishnu Sharma"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">MR. VISHNU SHARMA</h4>
                <p className="text-indigo-600 font-semibold">HON. SECRETARY</p>
              </div>

              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition duration-300">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gray-200 shadow-lg mb-6">
                  <Image
                    src="/gore1.jpeg"
                    alt="Gauhar F.K. Suri"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">GAUHAR F.K. SURI</h4>
                <p className="text-indigo-600 font-semibold">PRESIDENT</p>
              </div>
            </div>
          </div> */}

<h3 className="text-2xl font-bold text-center text-gray-700 mb-8">OFFICE BEARERS</h3>
<div className="grid md:grid-cols-3 gap-8">
   {/* Gauhar F.K. Suri */}
   <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition duration-300">
    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gray-200 shadow-lg mb-6">
      <Image
        src="/gore1.jpeg"
        alt="Gauhar F.K. Suri"
        width={150}
        height={150}
        className="w-full h-full object-contain object-center"
      />
    </div>
    <h4 className="text-xl font-bold text-gray-800 mb-2">GAUHAR F.K. SURI</h4>
    <p className="text-indigo-600 font-semibold">PRESIDENT</p>
  </div>
  {/* N. Babar */}
  <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition duration-300">
    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gray-200 shadow-lg mb-6">
      <Image
        src="/NASEEM.jpeg"
        alt=" NASEEM"
        width={150}
        height={150}
        className="w-full h-full object-contain object-center"
      />
    </div>
    <h4 className="text-xl font-bold text-gray-800 mb-2"> NASEEM BANO</h4>
    <p className="text-indigo-600 font-semibold">Vice.President</p>
  </div>

  {/* Vishnu Sharma */}
  <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition duration-300">
    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gray-200 shadow-lg mb-6">
      <Image
        src="/vsnu.jpeg"
        alt="Vishnu Sharma"
        width={150}
        height={150}
        className="w-full h-full object-contain object-center"
      />
    </div>
    <h4 className="text-xl font-bold text-gray-800 mb-2">MR. VISHNU SHARMA</h4>
    <p className="text-indigo-600 font-semibold">HON. SECRETARY</p>
  </div>

 
</div>

        </div>
      </section>
    </main>
  );
}