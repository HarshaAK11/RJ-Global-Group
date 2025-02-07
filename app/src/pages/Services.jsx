import { Link } from "react-router-dom"

const services = [
  {
    category: "Software Development",
    items: ["Custom web applications", "Mobile app development", "SaaS solutions", "Enterprise software"],
  },
  {
    category: "Branding & Digital Marketing",
    items: ["SEO optimization", "Social media marketing", "Content creation", "Brand strategy"],
  },
  {
    category: "Video Production & Photography",
    items: ["Corporate videos", "TV commercials", "Brand photography", "Event coverage"],
  },
  {
    category: "Real Estate & Property Solutions",
    items: ["Property listings", "Investment consulting", "Property management", "Real estate marketing"],
  },
]

function Services() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>

      {services.map((service) => (
        <section key={service.category} className="mb-12">
          <h2 className="text-3xl font-bold mb-4">{service.category}</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.items.map((item) => (
              <li key={item} className="bg-gray-100 p-4 rounded-lg">
                {item}
              </li>
            ))}
          </ul>
        </section>
      ))}

      <div className="text-center mt-8">
        <Link to="/contact" className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
          Get in Touch
        </Link>
      </div>
    </div>
  )
}

export default Services

