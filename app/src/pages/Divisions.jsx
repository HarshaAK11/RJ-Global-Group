import { Link } from "react-router-dom"

const divisions = [
  {
    name: "RJ Tech Innovations",
    description: "Cutting-edge IT & software solutions for businesses of all sizes.",
    services: ["Website development", "Custom software solutions", "SaaS platforms", "Mobile app development"],
    technologies: ["React", "Node.js", "Python", "AI/ML", "Cloud computing"],
  },
  {
    name: "Storylens Production",
    description: "Professional video production & photography services for brands and individuals.",
    services: ["Corporate videos", "TV commercials", "Brand photography", "Video editing", "Animation"],
    equipment: ["4K cameras", "Drones", "Professional lighting", "State-of-the-art editing suites"],
  },
  {
    name: "RJ Media Hub",
    description: "Comprehensive media & marketing solutions to boost your brand presence.",
    services: ["Social media marketing", "Content creation", "SEO optimization", "Branding", "Graphic design"],
    platforms: ["Facebook", "Instagram", "LinkedIn", "TikTok", "YouTube"],
  },
  {
    name: "RJ Realty",
    description: "Expert real estate services for buyers, sellers, and investors.",
    services: ["Property listings", "Investment consulting", "Property management", "Real estate marketing"],
    specialties: ["Residential", "Commercial", "Industrial", "Land development"],
  },
]

function Divisions() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Divisions</h1>

      {divisions.map((division) => (
        <section key={division.name} className="mb-12 p-6 bg-gray-100 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">{division.name}</h2>
          <p className="text-lg mb-4">{division.description}</p>

          <h3 className="text-xl font-semibold mb-2">Services:</h3>
          <ul className="list-disc list-inside mb-4">
            {division.services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>

          {division.technologies && (
            <>
              <h3 className="text-xl font-semibold mb-2">Technologies:</h3>
              <ul className="list-disc list-inside mb-4">
                {division.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </>
          )}

          {division.equipment && (
            <>
              <h3 className="text-xl font-semibold mb-2">Equipment:</h3>
              <ul className="list-disc list-inside mb-4">
                {division.equipment.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          )}

          {division.platforms && (
            <>
              <h3 className="text-xl font-semibold mb-2">Platforms:</h3>
              <ul className="list-disc list-inside mb-4">
                {division.platforms.map((platform) => (
                  <li key={platform}>{platform}</li>
                ))}
              </ul>
            </>
          )}

          {division.specialties && (
            <>
              <h3 className="text-xl font-semibold mb-2">Specialties:</h3>
              <ul className="list-disc list-inside mb-4">
                {division.specialties.map((specialty) => (
                  <li key={specialty}>{specialty}</li>
                ))}
              </ul>
            </>
          )}
        </section>
      ))}

      <div className="text-center mt-8">
        <Link to="/services" className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
          View All Services
        </Link>
      </div>
    </div>
  )
}

export default Divisions

