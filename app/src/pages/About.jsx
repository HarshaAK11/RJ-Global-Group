import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import Sagar from "../assets/Sagar.jpg";
import harshaImage from "../assets/HarshaAdithyaKumar.jpg";
import Rohan from "../assets/Rohan.jpg";
import aboutImage from "../assets/about.jpg"; // ✅ Correct import

const teamMembers = [
  { 
    name: "Rohan", 
    role: "Founder, Graphic Designer", 
    image: Rohan,
    linkedin: "https://www.linkedin.com/in/rohanrjedu/", 
    instagram: "https://www.instagram.com/_its_rj_2" 
  },
  { 
    name: "Sagar K", 
    role: "UI/UX Developer", 
    image: Sagar,
    linkedin: "https://linkedin.com/in/sagarkpoojary", 
    instagram: "https://instagram.com/sagarrpoojaryy" 
  },
  { 
    name: "Harsha AdithyaKumar", 
    role: "Co-founder, Lead Developer", 
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

const About = (props) => {
  return (
    <div id="about" className="bg-gray-200 text-gray-900">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center">
          {/* About Image */}
          <div className="md:w-2/5 mt-9 sm:mt-12 lg:mt-16">
            <img 
              src={aboutImage} 
              className="w-full h-auto rounded-lg shadow-lg object-cover" 
              alt="About Us" 
            />
          </div>

          {/* About Content */}
          <div className="md:w-1/2 mt-6 md:mt-0 md:pl-10">
            <h2 className="text-3xl font-bold">
              About Us
            </h2>
            <p className="mt-4">
              {props.data ? props.data.paragraph : `RJ Global Groups is a team of innovators and problem-solvers
              dedicated to delivering cutting-edge digital solutions. We specialize in software development, branding, digital marketing,
              and video production, helping businesses grow and innovate.
              By blending technology, creativity, and strategy, we transform ideas into reality, 
              ensuring excellence in every project. Our goal is to drive business success through
              innovation and strategic execution, shaping a future where digital transformation meets impactful solutions.`}
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us - Separate Section */}
      <motion.div
        className="container mx-auto px-6 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        <motion.h3
          className="text-3xl font-semibold text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Why Choose Us?
        </motion.h3>

        {/* Points Appear One by One */}
        <motion.div className="mt-6 space-y-4 max-w-xl mx-auto text-center">
          {[
            { emoji: "🚀", text: "Innovative & Future-Ready" },
            { emoji: "🎯", text: "Multi-Domain Expertise" },
            { emoji: "✅", text: "Quality-Driven" },
            { emoji: "💡", text: "Customized for You" },
            { emoji: "🤝", text: "Your Growth Partner" }
          ].map((item, index) => (
            <motion.p 
              key={index} 
              className="text-lg flex items-center justify-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <span className="mr-2 text-xl">{item.emoji}</span> 
              <strong>{item.text}</strong>
            </motion.p>
          ))}
        </motion.div>
      </motion.div>

      {/* Team Section */}
      <motion.section
        className="container mx-auto px-6 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.h2
          className="text-4xl font-semibold text-center text-gray-800"
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Meet Our Team
        </motion.h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-600 text-center">
          Our team is a diverse group of passionate individuals, each bringing unique skills and perspectives to the table.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
            >
              <motion.img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 rounded-full mx-auto mb-4 border-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              <div className="flex justify-center mt-4 space-x-4">
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
