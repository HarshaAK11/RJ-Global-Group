import { Link } from "react-router-dom"
import logo from '../assets/RJ.png'



function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="flex items-center justify-center py-20 "> 
        <div>
            <h1 className="text-4xl font-bold mb-4">Welcome to RJ Global Group</h1>
            <p className="text-xl mb-8 text-secondary">Innovative solutions across technology, media, and real estate</p>
            <div className="space-x-4">
            <Link to="/services" className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
                Explore Services
            </Link>
            <Link to="/contact" className="bg-gray-500 text-white px-6 py-2 rounded-full hover:bg-gray-600">
                Get in Touch
            </Link>
            </div>
        </div> 
        
        <img src={logo} alt="RJ Global Group" className="mix-blend-multiply" />
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">About RJ Global Group</h2>
        <p className="text-lg mb-4">
          RJ Global Group is a dynamic conglomerate offering innovative solutions across various sectors. We combine
          expertise in technology, media production, digital marketing, and real estate to deliver comprehensive
          services tailored to our clients' needs.
        </p>
        <div className="text-center">
          <Link to="/about" className="text-blue-500 hover:underline">
            Read More
          </Link>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Divisions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {["RJ Tech Innovations", "Storylens Production", "RJ Media Hub", "RJ Realty"].map((division) => (
            <div key={division} className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{division}</h3>
              <p>Innovative solutions in {division.toLowerCase()}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Services Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {["Web Development", "Video Production", "Digital Marketing", "Real Estate"].map((service) => (
            <div key={service} className="flex items-center space-x-4">
              <div className="bg-blue-500 text-white p-3 rounded-full">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold">{service}</h3>
                <p>Comprehensive {service.toLowerCase()} solutions</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Us?</h2>
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
        </div>
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

