import React from "react";
import { motion } from "framer-motion";
import Sagar from "../assets/Sagar.jpg";
import harshaImage from "../assets/HarshaAdithyaKumar.jpg";

const teamMembers = [
  { name: "Sagar K", role: "CTO", image: Sagar },
  { name: "Harsha AdithyaKumar", role: "CTO", image: harshaImage },
  { name: "Mike Johnson", role: "Creative Director", image: "/placeholder.svg" },
  { name: "Sarah Brown", role: "Marketing Head", image: "/placeholder.svg" },
];

const About = () => {
  return (
    <div className="bg-[#F7F5F4] text-gray-900">
      {/* Hero Section */}
      <motion.section
        className="bg-[#556B2F] text-white py-20 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-bold">About RJ Global Group</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Innovating for a better future with expertise in technology, media, digital marketing, and real estate.
        </p>
      </motion.section>

      {/* Who We Are */}
      <section className="container mx-auto px-6 py-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl font-semibold text-[#556B2F]">Who We Are</h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            RJ Global Group is a dynamic conglomerate specializing in innovative solutions across multiple industries.
            We drive business success through cutting-edge technology and creative expertise.
          </p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-4xl font-semibold text-[#556B2F]">Our Story</h2>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
              Founded in 2010, we started as an IT consulting firm and expanded into a multi-division powerhouse. Today, we serve global businesses across various industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Team */}
      <section className="container mx-auto px-6 py-16">
        <motion.h2
          className="text-4xl font-semibold text-center text-[#556B2F]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Meet Our Team
        </motion.h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 rounded-full mx-auto mb-4 border-4 border-[#556B2F]"
              />
              <h3 className="text-2xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
