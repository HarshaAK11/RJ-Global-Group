import React from "react"
import image1 from '../assets/services 1.png'
import image2 from '../assets/services 2.jpg'
import image3 from '../assets/services 3.jpg'
import image4 from '../assets/services 4.jpg'
import image5 from '../assets/services 5.jpg'
import { TextReveal } from "../components/ui/text-reveal"
import rohan from '../assets/rohan.jpg'


const About = () => {
  return (

      <div>

         {/* Hero Section */}
        <section data-scroll data-scroll-speed="1" className="h-[80vh] w-full p-16 flex justify-center items-center ">
          <h1 className="text-[5.25vw] font-medium leading-none mt-24"> <span className="ml-[18rem]">It's simple:</span><br />We help < span className="text-[grey]">businesses</span> transform and lead in the digital world.</h1>
        </section>
  
        {/* Intro images */}
        <section>
          <div className="flex gap-8 justify-center items-center overflow-hidden">
            <img src={image1} alt="Image 1" className="size-[35rem] object-cover rounded-xl"/>
            <img src={image2} alt="Image 2" className="size-[35rem] object-cover rounded-xl"/>
            <div className="flex flex-col min-w-[25rem] gap-8">
              <img src={image3} alt="Image 3" className="w-[25rem] h-[16.5rem] object-cover rounded-xl"/>  
              <img src={image4} alt="Image 4" className="w-[25rem] h-[16.5rem] object-cover rounded-xl"/>
            </div>
            <img src={image5} alt="Image 5" className="size-[35rem] object-cover rounded-xl"/>
          </div>
        </section>

        {/* About text*/}
        <section className="p-16 w-full flex justify-end my-20">
          <div className="w-[55%] flex flex-col gap-8">
            <TextReveal text='We are a team of innovators and problem-solvers, driven by the mission to deliver cutting-edge digital solutions. Our expertise spans software development, branding, digital marketing, and video production, empowering businesses to grow and innovate.' className='text-xl md:text-3xl lg:text-4xl xl:text-3xl tracking-tight' />
            <TextReveal text='Through a seamless blend of technology, creativity, and strategy, we bring ideas to life with precision and excellence. With a strong vision for growth and innovation, we are committed to building impactful digital solutions while shaping our own SaaS-driven future.' className='text-xl md:text-3xl lg:text-4xl xl:text-3xl tracking-tight' />
          </div>
        </section>


        <section className="p-16 flex justify-center items-center gap-8 w-full h-[60%]">
            <div className="flex-1">
            <img src={rohan} alt="Rohan" className="size-[20rem]" />
            </div>
            <div>
            <h1 className="text-7xl">A Message From<br/>Our <span className="text-[grey]">Founder</span></h1>
              <p className="text-xl w-[70%]">As the CEO of RJ Global Group and founder of Storylens Productions, I take immense pride in creating visual stories that go beyond photography and videography.We blend innovation, artistry, and cutting edge technology to craft breathtaking visual legacies. Every frame reflects our dedication to storytelling, preserving fleeting moments with timeless elegance.</p>
            
            <div>
              <p>Rohan RJ</p>
              <p>CEO & Founder, RJ Global Group</p>
            </div>
            </div>
           
        </section>

      </div>

  );
};

export default About;
