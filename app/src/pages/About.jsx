import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import Sagar from "../assets/Sagar.jpg";
import harshaImage from "../assets/HarshaAdithyaKumar.jpg";
import Rohan from "../assets/Rohan.jpg";

const teamMembers = [
  { 
    name: "Rohan", 
    role: "CEO", 
    image: Rohan,
    linkedin: "https://www.linkedin.com/in/rohanrjedu/", 
    instagram: "https://www.instagram.com/_its_rj_2" 
  },
  { 
    name: "Sagar K", 
    role: "CTO", 
    image: Sagar,
    linkedin: "https://linkedin.com/in/sagarkpoojary", 
    instagram: "https://instagram.com/sagarrpoojaryy" 
  },
  { 
    name: "Harsha AdithyaKumar", 
    role: "CIO", 
    image: harshaImage,
    linkedin: "https://linkedin.com/in/harsha", 
    instagram: "https://instagram.com/harsha" 
  },
  { 
    name: "Placeholder", 
    role: "Marketing Head", 
    image: "/placeholder.svg",
    linkedin: "#", 
    instagram: "#" 
  },
];

const About = () => {
  return (
    <div className="bg-gray-200 text-gray-900" style={{ backgroundImage: "radial-gradient(darkgray 2%, transparent 3%)", backgroundSize: "10px 10px" }}>
      {/* Hero Section */}
      <motion.section
        className="bg-gray-800 text-white py-32 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 className="text-5xl font-bold flex justify-center">
          {"About R J Global Group".split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="mr-2">
              {word.split("").map((char, charIndex) => (
                <motion.span 
                  key={charIndex} 
                  whileHover={{ y: -5 }} 
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>
      </motion.section>

      {/* Mission Statement Section */}
      <motion.section className="py-16 text-center" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-300">
          Innovating for a better future with expertise in technology, media, digital marketing, and real estate.
        </p>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-300">
          At R J Global Group, we believe in harnessing the power of innovation to create solutions that not only meet the needs of today but also pave the way for a sustainable tomorrow.
        </p>
      </motion.section>

      {/* Vision Section */}
      <motion.section className="py-16 text-center bg-gray-100" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
        <h2 className="text-3xl font-semibold">Our Vision</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-600">
          We envision a world where technology and creativity converge to create impactful solutions that enhance lives and drive progress.
        </p>
      </motion.section>

      {/* Team Section */}
      <motion.section className="container mx-auto px-6 py-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
        <motion.h2 className="text-4xl font-semibold text-center text-gray-800" initial={{ y: -20 }} animate={{ y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
          Meet Our Team
        </motion.h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-600 text-center">
          Our team is a diverse group of passionate individuals, each bringing unique skills and perspectives to the table. Together, we strive to push boundaries and redefine excellence in our fields.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
            >
              <motion.img src={member.image} alt={member.name} className="w-40 h-40 rounded-full mx-auto mb-4 border-4" />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              <div className="mt-4 flex justify-center space-x-4">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-blue-600 text-2xl" />
                </a>
                <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-pink-600 text-2xl" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default About;
