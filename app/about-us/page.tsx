import Image from "next/image";
import React from "react";
import { Mail, Linkedin, Globe } from "lucide-react";

const committeeMembers = [
  {
    name: "Anish Dangol",
    designation: "President",
    contact: "dangol.anish001@gmail.com",
    linkedin: "https://www.linkedin.com/in/dangol-anish/",
    website: "https://portfolio1.com",
    image: "/anish.webp",
  },
  {
    name: "Prithvi Ghatani",
    designation: "Vice President",
    contact: "prithvighatani7@gmail.com",
    linkedin: "https://www.linkedin.com/in/prithvi-ghatani-a9a433290/",
    website: "https://portfolio2.com",
    image: "/prithvi.webp",
  },
  {
    name: "Sajat Bajracharya",
    designation: "Secretary",
    contact: "sajatbazz@gmail.com",
    linkedin: "https://www.linkedin.com/in/sajat-bajracharya/",
    website: "https://portfolio3.com",
    image: "/sajat.webp",
  },
  {
    name: "Sushil Nemkul",
    designation: "Treasurer",
    contact: "namecoolsusil@gmail.com",
    linkedin: "https://www.linkedin.com/in/sushil-nemkul-7868b2261/",
    website: "https://portfolio4.com",
    image: "/sushil.jpeg",
  },
  {
    name: "Diya Khadgi",
    designation: "Social Media Lead",
    contact: "khadgidiya8@gmail.com",
    linkedin: "https://www.linkedin.com/in/diya-khadgi/",
    website: "https://portfolio5.com",
    image: "/diya.webp",
  },
  {
    name: "Anushma Shakya",
    designation: "Design Lead",
    contact: "anushmasky@gmail.com",
    linkedin: "https://www.linkedin.com/in/anushma-shakya-40389226a/",
    website: "https://portfolio6.com",
    image: "/anushma.jpeg",
  },
  {
    name: "Aarzan Shakya",
    designation: "Documentation Lead",
    contact: "shakyaarzan@gmail.com",
    linkedin: "https://www.linkedin.com/in/aarzan-shakya-a516932a7/",
    website: "https://portfolio7.com",
    image: "/aarzan.jpg",
  },
];

const AboutUsPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-28">
      {/* About Us Section */}
      <section className="mb-16 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
          About Us
        </h1>
        <p className="text-center text-lg text-gray-400 mb-10">
          The Cognito D.A.V. IT Club at D.A.V. College is a student-led group
          that aims to help students improve their technical skills, work on
          real-world problems, and collaborate on innovative projects. Our goal
          is to bridge the gap between classroom learning and practical
          application through workshops, competitions, and networking with
          industry experts. This proposal is to seek approval to organize a
          hackathon, a coding competition where students will work in teams to
          solve real-world problems creatively.
        </p>
      </section>
      <h1 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
        Organizing Committee
      </h1>
      <div className="flex flex-col items-center gap-8">
        {/* Row 1: President */}
        <div className="flex flex-row flex-wrap justify-center gap-8">
          {[committeeMembers[0]].map((member, idx) => (
            <div
              key={idx}
              className="w-64 sm:w-60 lg:w-56 h-56 bg-[#101828]/80 rounded-2xl shadow-lg p-4 flex flex-col justify-between items-center border border-blue-500/20"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={80}
                height={80}
                className="w-20 h-20 rounded-xl object-cover border-2 border-blue-500/30 mb-3 bg-stone-800"
              />
              <div className="text-center">
                <h2 className="text-lg font-semibold text-white mb-1 truncate w-full">
                  {member.name}
                </h2>
                <p className="text-xs text-blue-400 font-medium mb-1 truncate w-full">
                  {member.designation}
                </p>
              </div>
              <div className="flex flex-row items-center justify-center gap-3 mt-1">
                {member.contact && (
                  <a
                    href={`mailto:${member.contact}`}
                    className="text-stone-300 hover:text-blue-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mail size={18} />
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    className="text-stone-300 hover:text-blue-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={18} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Row 2: Vice President, Secretary */}
        <div className="flex flex-row flex-wrap justify-center gap-8">
          {committeeMembers.slice(1, 3).map((member, idx) => (
            <div
              key={idx}
              className="w-64 sm:w-60 lg:w-56 h-56 bg-[#101828]/80 rounded-2xl shadow-lg p-4 flex flex-col justify-between items-center border border-blue-500/20"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={80}
                height={80}
                className="w-20 h-20 rounded-xl object-cover border-2 border-blue-500/30 mb-3 bg-stone-800"
              />
              <div className="text-center">
                <h2 className="text-lg font-semibold text-white mb-1 truncate w-full">
                  {member.name}
                </h2>
                <p className="text-xs text-blue-400 font-medium mb-1 truncate w-full">
                  {member.designation}
                </p>
              </div>
              <div className="flex flex-row items-center justify-center gap-3 mt-1">
                {member.contact && (
                  <a
                    href={`mailto:${member.contact}`}
                    className="text-stone-300 hover:text-blue-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mail size={18} />
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    className="text-stone-300 hover:text-blue-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={18} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Row 3: Treasurer, Social Media Lead, Design Lead, Documentation Lead */}
        <div className="flex flex-row flex-wrap justify-center gap-4 lg:gap-6 xl:gap-8">
          {committeeMembers.slice(3, 7).map((member, idx) => (
            <div
              key={idx}
              className="w-64 sm:w-60 lg:w-56 h-56 bg-[#101828]/80 rounded-2xl shadow-lg p-4 flex flex-col justify-between items-center border border-blue-500/20"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={80}
                height={80}
                className="w-20 h-20 rounded-xl object-cover border-2 border-blue-500/30 mb-3 bg-stone-800"
              />
              <div className="text-center">
                <h2 className="text-lg font-semibold text-white mb-1 truncate w-full">
                  {member.name}
                </h2>
                <p className="text-xs text-blue-400 font-medium mb-1 truncate w-full">
                  {member.designation}
                </p>
              </div>
              <div className="flex flex-row items-center justify-center gap-3 mt-1">
                {member.contact && (
                  <a
                    href={`mailto:${member.contact}`}
                    className="text-stone-300 hover:text-blue-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mail size={18} />
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    className="text-stone-300 hover:text-blue-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={18} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
