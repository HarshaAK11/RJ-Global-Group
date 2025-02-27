import { React, useEffect, useRef } from 'react'
import { Link } from "react-router-dom"
import { ArrowDown } from "lucide-react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import hero from '../assets/hero.mp4'

const divisions = [
  {
    name: "RJ Tech Innovations",
    description: "Pioneering the future with advanced software and technological solutions, we specialize in web and app development, AI-driven applications, and custom digital tools tailored for businesses.",
    services: ["Website development", "Custom software solutions", "SaaS platforms", "Mobile app development"],
  },
  {
    name: "Storylens Production",
    description: "Bringing stories to life through high-quality video production, photography, and creative visual storytelling. We focus on crafting engaging content that resonates with audiences across various platforms.",
    services: ["Corporate videos", "TV commercials", "Brand photography", "Video editing", "Animation"],
  },
  {
    name: "RJ Media Hub",
    description: "A dynamic media and branding powerhouse that provides strategic marketing, social media management, and brand storytelling solutions to help businesses establish a strong digital presence.",
    services: ["Social media marketing", "Content creation", "SEO optimization", "Branding", "Graphic design"],
  },
]

gsap.registerPlugin(ScrollTrigger)

function Divisions() {
  const divisionRefs = useRef([]);

  // Division box animation
  useEffect(() => {
    divisionRefs.current.forEach((div, index) => {
      if (index < divisionRefs.current.length - 1) {
        gsap.to(div, {
          scale: 0.8,
          filter: "blur(4px)",
          opacity: 0.6,
          scrollTrigger: {
            trigger: divisionRefs.current[index + 1],
            start: "top bottom",
            end: "top 20%",
            scrub: 1,
            toggleActions: "play reverse play reverse",
          }
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div>
      
      <style>
        {`
          .numbered-list {
            counter-reset: section;
            list-style-type: none;
          }
          .numbered-list li {
            counter-increment: section;
            margin-bottom: 0.5rem;
          }
          .numbered-list li::before {
            content: "0" counter(section) " ";
            
            margin-right: 0.5rem;
          }
          .division {
            transition: background-color 0.5s ease;
          }
        `}
      </style>

      {/* Hero section */}
      <section className="transparent-section h-[100vh] w-full bg-[#171717] text-white relative overflow-hidden">

        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40 "
        >
          <source src={hero} type="video/mp4" />
        </video>

        {/* Content */} 
        <div className="relative z-10 h-full flex flex-col gap-6 items-center justify-center p-16 ">

          <div className='flex gap-10 text-2xl'>
            <h1>The world is changing</h1>
            <span>-</span>
            <h1>The real question is</h1>
          </div>
          
          <h1 className="text-7xl font-semibold uppercase">are you <span className='text-[grey]'>leading</span> or <span className='text-[grey]'>following</span>?</h1>
          <p className="text-4xl">At RJ Global Group, we don't wait for the future. We create it.</p>
          <p className="absolute bottom-6 text-xl flex gap-2">
            <ArrowDown className="text-[#f0ff75]"/>
            Scroll to explore our divisions & discover what's next.
          </p>

        </div>
        
      </section>

      { /* Divisions */}
      <section className="dark-section bg-[#171717] p-16 pt-[150px] text-white">

        <h1 className="text-8xl mb-20">Our <span className="text-[#606060]">Divisions.</span></h1>

        <div className="relative min-h-[300vh]">
          {divisions.map((division, index) => (
            <div 
              key={division.name} 
              ref={el => divisionRefs.current[index] = el}
              className="division h-fit flex justify-between mb-[200px] sticky top-[20%] bg-[#171717] p-8"
              style={{
                zIndex: index + 1 
              }}
            >
              <div className="w-[35%]">
                <h2 className="text-3xl mb-4">{division.name}</h2>
                <p className="text-lg mb-4">{division.description}</p>
                <h3 className="text-xl mb-2">Services:</h3> 
                <ol className="numbered-list mb-4">
                  {division.services.map((service) => (
                    <li key={service} className="border-b-[1px] border-[rgba(255,255,255,0.2)] py-2">{service}</li>
                  ))}
                </ol>

                {division.technologies && (
                  <>
                    <h3 className="text-xl mb-2">Technologies:</h3>
                    <ol className="numbered-list mb-4">
                      {division.technologies.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ol>
                  </>
                )}

                {division.equipment && (
                  <>
                    <h3 className="text-xl font-semibold mb-2">Equipment:</h3>
                    <ol className="numbered-list mb-4">
                      {division.equipment.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ol>
                  </>
                )}

                {division.platforms && (
                  <>
                    <h3 className="text-xl font-semibold mb-2">Platforms:</h3>
                    <ol className="numbered-list mb-4">
                      {division.platforms.map((platform) => (
                        <li key={platform}>{platform}</li>
                      ))}
                    </ol>
                  </>
                )}
              </div>

              <div className="w-[50%] h-[450px] bg-[#606060] rounded-xl">
              </div>
            </div>
          ))}
        </div>

      </section>
    </div>
  )
}

export default Divisions

