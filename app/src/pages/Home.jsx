"use client";

import { Link } from "react-router-dom"
import logo from '../assets/RJ.png'
import { cn } from "@/lib/utils";
import { DotPattern } from "../components/magicui/dot-pattern"
import { TextReveal } from "../components/magicui/text-reveal"
import { ArrowRight } from "lucide-react"
import { useTheme } from "next-themes";
import { MagicCard } from "../components/magicui/magic-card";
import DivisionTree from "../components/DivisionTree";
import { HyperText } from "../components/magicui/hyper-text"
import more from '../assets/more.png'
import whyUsBg from '../assets/why us(bg).jpg'


function Home() {

  const { theme } = useTheme();

  const divisions = [
    {
      name: "RJ Tech Innovations",
      description: "Pioneering the future with advanced software and technological solutions, we specialize in web and app development, AI-driven applications, and custom digital tools tailored for businesses.",
    },
    {
      name: "Storylens Production",
      description: "Bringing stories to life through high-quality video production, photography, and creative visual storytelling. We focus on crafting engaging content that resonates with audiences across various platforms.",
    },
    {
      name: "RJ Media Hub",
      description: "A dynamic media and branding powerhouse that provides strategic marketing, social media management, and brand storytelling solutions to help businesses establish a strong digital presence.",
    },
  ]

  const services = [
    {
      name: "Web Development",
      description: "Building seamless digital experiences.",
    },
    {
      name: "Video Production",
      description: "Bringing stories to life through stunning visuals.",
    },
    {
      name: "Digital Marketing",
      description: " Elevating brands with strategic online growth.",
    },
    {
      name: "Know more....",
      description: null
    }
  ]

  return (
    <div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center mx-5"> 

        <div className="flex-1 px-16">
            {/* Hero Title */}
            <h1 className="text-[5.25vw] font-medium mb-8 w-[70%] leading-[1.1]"><span className="text-[gray]">Transforming</span> Visions into Success <span className="text-[gray]">Stories</span></h1>

            {/* Hero Subtitle */}
            <p className="text-xl mb-8 text-secondary">Your one-stop destination for tech, creative, and business solutions that drive growth</p>
        </div> 

        {/* Hero Background */}
        <DotPattern
            className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
            )}
            style={{zIndex: -1}}
        />

      </section>


      {/* Brief Introduction Section */}
      <section className="w-full h-[60vh] flex items-start justify-end px-16">

            <div className="w-[65%] flex flex-col items-start justify-center tracking-tighter">

              {/* Brief Introduction Text */}
              <TextReveal text="RJ Global Groups is a diverse company focused on innovation and excellence across multiple industries, specializing in transforming your ideas into digital solutions." />

              {/* About Us Link */}
              <div className="flex items-center mt-10 border-b-[3px] border-black pb-1 ml-3">
                <Link to='/About' className="text-xl ">Explore Our Journey</Link>
                <ArrowRight className="w-6 h-6 -rotate-45" />
              </div>
        
            </div>

      </section>


      {/* Business Units Section */}
      <section className="p-16 flex items-start justify-center items-start">

        {/* Business Units Content */}
        <div className="flex-1 px-16 h-[120vh] flex flex-col justify-center items-start gap-20">
          <h1 className="text-8xl mb-6">Our <span className="text-[grey]">Business</span> Units</h1>
          <div className="flex flex-col gap-6">
            {divisions.map((division) => (
              <Link to='/Divisions' className="cursor-pointer">
                <MagicCard key={division} className="bg-gray-100 p-6 rounded-lg" gradientColor={theme === "dark" ? "#262626" : "#f0ff7555"}>
                  <h3 className="text-xl font-semibold mb-2">{division.name}</h3>
                  <p>{division.description}</p>
                </MagicCard>
              </Link>
            ))}
          </div>
        </div>   

        {/* Business Units Tree */}
        <div className="flex-1 mt-32 sticky top-[50%] -translate-y-1/2">
          <DivisionTree />
        </div>
      
      </section>


      {/* Services Overview Section */}
      <section className="p-16 h-[100vh]">
        {/* Services Title */}
        <h2 className="text-7xl mb-14 text-center">What We Do</h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            index !== 3 ? (
            <div key={service} className="flex items-center space-x-4 bg-[#F3F4EE] p-10 rounded-lg h-[50vh]">
                <div className="flex flex-col justify-center h-full w-full">
                  <HyperText className="text-2xl h-[70%]">{service.name}</HyperText>
                <hr className="w-full border-t border-gray-300 my-6" />
                <p className="text-lg h-[30%]">{service.description}</p>
              </div>
            </div>
            ) : (
              /* Services Link */
              <Link to='/Services' >
                <div key={service} className="flex items-center space-x-4 bg-[#F3F4EE] hover:bg-[#f0ff75] p-10 rounded-lg h-[50vh] transition-all duration-300">
                  <div className="flex flex-col justify-start h-full w-full">
                    <HyperText className="text-2xl">{service.name}</HyperText>
                    <img src={more} alt="more" className="translate-y-5" />
                  </div>
                </div>
              </Link>
            )
          ))}
        </div>
      </section>


      {/* Why Choose Us Section */} 
      <section className="p-16 h-screen">

        <div className="relative w-full h-full">

          <img src={whyUsBg} alt="why us" className="absolute inset-0 w-full h-full object-cover rounded-3xl" />

          <div className="absolute flex flex-col gap-6 h-[380px] w-[600px] left-0 bottom-0 m-10 bg-white rounded-3xl p-8"> 
              <p className="text-lg border-[1px] font-md w-fit py-1 px-4 border-black rounded-full">Why choose us</p>
              <p className="text-5xl leading-tight">Delivering innovative, tailored solutions with excellence and expertise.</p> 
          </div>

        </div>

          

        

        {/*<h2 className="text-3xl font-bold mb-6 text-center">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Integrated Solutions",
            "Experienced Team",
            "Cutting-edge Technology",
            "Client-centric Approach",
            "Proven Track Record",
            "Continuous Innovation",
          ].map((reason) => (
            <div key={reason} className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{reason}</h3>
              <p>We offer {reason.toLowerCase()} to ensure your success</p>
            </div>
          ))}
        </div>*/}
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <textarea placeholder="Your Message" className="w-full p-2 border rounded" rows={4}></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
            Send Message
          </button>
        </form>
        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center space-x-4">
            {["Facebook", "Twitter", "LinkedIn", "Instagram"].map((social) => (
              <a key={social} href="#" className="text-blue-500 hover:text-blue-600">
                {social}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

