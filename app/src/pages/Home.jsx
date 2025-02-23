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
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef, useEffect } from "react";

function Home() {

  const { theme } = useTheme()

  const whyUsRef = useRef(null)
  const whyUsContentRef = useRef(null)
  const floatingElements = useRef([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Why Us main content animation 
    gsap.fromTo(whyUsContentRef.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: whyUsRef.current,
          start: "top center",
          once: true  
        }
      }
    )

    // Why us single floating elements animation 
    floatingElements.current.forEach((element, index) => {
      gsap.fromTo(element,
        {
          opacity: 0,
          scale: 0.8,
          y: 50
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: whyUsRef.current,
            start: "top center",
            once: true  
          }
        }
      )
    })
  }, [])

  

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
              <div className="relative flex items-center mt-10 pb-1 ml-3 group overflow-hidden">

                <Link to='/About' className="text-xl">Explore Our Journey</Link>
                <ArrowRight className="w-6 h-6 -rotate-45 transition-all duration-300 group-hover:rotate-0" />

                {/* Underline */}
                <div className='absolute w-full bottom-0 left-0 flex gap-5 flex-nowrap h-[2px] bg-black group-hover:translate-x-full transition-all duration-300'></div>

              </div>
        
            </div>

      </section>


      {/* Business Units Section */}
      <section className="p-16 h-[160vh] flex items-start justify-center items-start relative">

        {/* Business Units Content */}
        <div className="flex-1 px-16 h-[120vh] flex flex-col justify-center items-start gap-20">
          <h1 className="text-8xl mb-6">Our <span className="text-[grey]">Business</span> Units</h1>
          <div className="flex flex-col gap-10">
            {divisions.map((division) => (
              <Link to='/Divisions' className="cursor-pointer">
                <MagicCard key={division} className="bg-gray-100 px-8 py-12 rounded-lg" gradientColor={theme === "dark" ? "#262626" : "#f0ff7555"}>
                  <h3 className="text-xl font-semibold mb-2">{division.name}</h3>
                  <p>{division.description}</p>
                </MagicCard>
              </Link>
            ))}
          </div>
        </div>   

        {/* Business Units Tree */}
        <div className="flex-1 mt-32 sticky top-[50%] bottom-[500px] -translate-y-1/2">
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
      <section ref={whyUsRef} className="p-16 h-screen mb-20">
        <div className="relative w-full h-full">
          <img src={whyUsBg} alt="why us" className="absolute inset-0 w-full h-full object-cover rounded-3xl brightness-90" />

          {/* Main Content */}
          <div ref={whyUsContentRef} className="absolute flex flex-col gap-6 h-[380px] w-[600px] left-0 bottom-0 m-10 bg-white rounded-3xl p-8"> 
            <p className="text-lg border-[1px] font-md w-fit py-1 px-4 border-black rounded-full">Why choose us</p>
            <p className="text-5xl leading-tight">Delivering innovative, tailored solutions with excellence and expertise.</p> 
          </div>
          
          {/* Floating Elements */}
          <div 
            ref={el => floatingElements.current[0] = el}
            className="absolute top-10 left-[10%] bg-white rounded-full p-1 w-fit text-xl flex items-center gap-8 cursor-default group"
          >
            <p className="ml-2">Innovative Solutions</p>
            <div className="w-12 h-12 border-[1px] border-black rounded-full flex items-center justify-center text-3xl group-hover:rotate-90 transition-all duration-300">+</div>
          </div>

          <div 
            ref={el => floatingElements.current[1] = el}
            className="absolute top-[60%] right-[30%] bg-white rounded-full p-1 w-fit text-xl flex items-center gap-8 cursor-default group"
          >
            <p className="ml-2">Client-Centric Approach</p>
            <div className="w-12 h-12 border-[1px] border-black rounded-full flex items-center justify-center text-3xl group-hover:rotate-90 transition-all duration-300">+</div>
          </div>

          <div 
            ref={el => floatingElements.current[2] = el}
            className="absolute bottom-20 right-[5%] bg-white rounded-full p-1 w-fit text-xl flex items-center gap-8 cursor-default group"
          >
            <p className="ml-2">Multi-Domain Expertise</p>
            <div className="w-12 h-12 border-[1px] border-black rounded-full flex items-center justify-center text-3xl group-hover:rotate-90 transition-all duration-300">+</div>
          </div>

          <div 
            ref={el => floatingElements.current[3] = el}
            className="absolute top-[20%] right-[10%] bg-white rounded-full p-1 w-fit text-xl flex items-center gap-8 cursor-default group"
          >
            <p className="ml-2">End-to-End Services</p>
            <div className="w-12 h-12 border-[1px] border-black rounded-full flex items-center justify-center text-3xl group-hover:rotate-90 transition-all duration-300">+</div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home

