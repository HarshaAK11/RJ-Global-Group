import { Link } from "react-router-dom"
import image1 from '../assets/services 1.png'
import image2 from '../assets/services 2.jpg'
import image3 from '../assets/services 3.jpg'
import image4 from '../assets/services 4.jpg'
import image5 from '../assets/services 5.jpg'

const services = [
  {
    "category": "Software Development",
    "items": [
        "Custom web applications",
        "Mobile app development",
        "SaaS solutions",
        "Enterprise software",
        "E-commerce solutions",
        "AI & ML-based applications"
    ]
  },
  {
    "category": "Branding & Digital Marketing",
    "items": [
        "SEO optimization",
        "Social media marketing",
        "Content creation",
        "Brand strategy",
        "Email marketing campaigns",
        "Influencer marketing & collaborations"
    ]
  },
  {
    "category": "Video Production & Photography",
    "items": [
        "Corporate videos",
        "TV commercials",
        "Brand photography",
        "Event coverage",
        "Product photography",
        "Motion graphics & animation"
    ]
  },
]

function Services() {
  let stickyOffset = 45
  return (
    <div>
      
      {/* Hero Section */}
      <section data-scroll data-scroll-speed="1" className="h-[80vh] w-full p-16 flex justify-center items-center">
        <h1 className="text-8xl text-center">Empowering Businesses<br/>with Cutting-Edge<br/>Digital Services.</h1>
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

      <section className="relative p-16">

        <h1 className="text-7xl font-[500] my-[140px] sticky top-[20%] min-h-[10rem]"><span className="text-[grey]">Services</span> to<br/>fuel your <span className="text-[grey]">growth.</span></h1>

        <div className="h-[210vh] flex flex-col justify-evenly">
          {services.map((service) => {
            let currentOffset = stickyOffset
            stickyOffset += 10
            return(
              <div key={service.category} className="mb-12 sticky">
                <h2 className="text-5xl" style={{"top": `${currentOffset}%`}}>{service.category}</h2>
              </div>
            )
          }
        )}
        </div>

      </section>
      
    </div>
  )
}

export default Services
