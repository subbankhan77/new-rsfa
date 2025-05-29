"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Trophy } from "lucide-react";

export default function About() {
  // For animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const achievements = [
    {
      year: "1981",
      title: "First Senior National Championship",
      location: "Lucknow (U.P.)",
      description: "Rajasthan won its first Senior National Fencing Championship—marking the start of a glorious journey.",
      medal: "gold"
    },
    {
      year: "1993",
      title: "Bhilwara Nationals",
      location: "Bhilwara",
      description: "1 Gold, 1 Silver & 2 Bronze – Rajasthan secured Runners-up in the General Championship.",
      medal: "silver"
    },
    {
      year: "1994-95",
      title: "Pune National Olympic Games",
      location: "Pune",
      description: "Won Silver at the prestigious Pune National Olympic Games.",
      medal: "silver"
    },
    {
      year: "1995-96",
      title: "Patna Nationals",
      location: "Patna",
      description: "Bronze in Team Event at Patna Nationals.",
      medal: "bronze"
    },
    {
      year: "1998",
      title: "Guwahati Nationals",
      location: "Guwahati",
      description: "Claimed Bronze at Guwahati Nationals.",
      medal: "bronze"
    },
    {
      year: "1999",
      title: "1st Sub-Junior Nationals",
      location: "Jaipur",
      description: "Earned two individual Bronze medals – Girls' & Boys' categories.",
      medal: "bronze"
    },
    {
      year: "2001",
      title: "National Team Games",
      location: "Bangalore",
      description: "Bronze in Team Event at Bangalore National Team Games.",
      medal: "bronze"
    }
  ];

  const getMedalColor = (medal) => {
    switch(medal) {
      case "gold": return "from-yellow-400 to-yellow-500";
      case "silver": return "from-gray-400 to-gray-500";
      case "bronze": return "from-amber-600 to-amber-700";
      default: return "from-gray-400 to-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/fencing-pattern.png')] bg-repeat opacity-20"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center animate-on-scroll">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">About RSFA</h1>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              The legacy of excellence in fencing across Rajasthan - developing champions and promoting the art of swordsmanship.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white px-6 md:px-8 lg:px-16 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Legacy Section */}
          <div className="mb-24 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-800 text-center">
              Our Legacy
              <div className="w-20 h-1 bg-red-600 mx-auto mt-4"></div>
            </h2>

            <div className="grid md:grid-cols-5 gap-12 items-center">
              <div className="md:col-span-3">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg border border-gray-200">
                  <h3 className="font-bold text-red-600 text-2xl mb-4">The Legacy of Fencing in Rajasthan</h3>
                  <p className="text-lg leading-8 mb-6 text-gray-700">
                    Fencing, a sport rooted in chivalry and tradition, has a long and distinguished history. Rajasthan, known for its valiant swordsmen, carries this legacy with pride, consistently achieving top honors at national and international levels.
                  </p>
                  <p className="text-lg leading-8 text-gray-700">
                    Rajasthan's fencing legacy is built on perseverance, excellence, and sportsmanship. With every year, it continues to inspire a new generation of fencers to uphold and expand this proud tradition on both national and international platforms.
                  </p>
                </div>
              </div>
              <div className="md:col-span-2 flex justify-center">
                <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-red-200">
                  <Image 
                    src="/demmy.jpg" 
                    alt="Fencing Legacy" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-800 text-center">
              Our Achievements
              <div className="w-20 h-1 bg-red-600 mx-auto mt-4"></div>
            </h2>

            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${getMedalColor(achievement.medal)}`}></div>
                  <div className="p-8">
                    <div className="flex flex-wrap items-start gap-6">
                      <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-lg border-4 border-white">
                        <span className="text-lg font-bold text-white">{achievement.year}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{achievement.title}</h3>
                        <p className="text-red-600 text-base font-semibold mb-3">{achievement.location}</p>
                        <p className="text-gray-700 text-lg leading-relaxed">{achievement.description}</p>
                      </div>
                      <div className="flex-shrink-0">
                        <div className={`p-3 rounded-full ${
                          achievement.medal === "gold" ? "bg-yellow-50 border-2 border-yellow-300" : 
                          achievement.medal === "silver" ? "bg-gray-50 border-2 border-gray-300" : "bg-amber-50 border-2 border-amber-300"
                        }`}>
                          <Trophy className={`w-8 h-8 ${
                            achievement.medal === "gold" ? "text-yellow-600" : 
                            achievement.medal === "silver" ? "text-gray-600" : "text-amber-700"
                          }`} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vision Section */}
          <div className="mt-24 bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 p-10 rounded-3xl shadow-xl animate-on-scroll">
            <h2 className="text-4xl font-bold mb-8 text-red-800 text-center">Our Vision</h2>
            <div className="w-16 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl leading-9 text-gray-700 text-center max-w-4xl mx-auto">
              To become a center of excellence in fencing, nurturing talent from grassroots to international level, and to establish Rajasthan as a powerhouse in the world of fencing.
            </p>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease forwards;
        }
        
        .animate-on-scroll {
          opacity: 0;
        }
      `}</style>
    </div>
  );
}