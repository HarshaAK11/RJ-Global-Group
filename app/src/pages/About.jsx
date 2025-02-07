function About() {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">About RJ Global Group</h1>
  
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-lg mb-4">
            RJ Global Group is a dynamic conglomerate that brings together innovative solutions across technology, media
            production, digital marketing, and real estate. Our mission is to empower businesses and individuals with
            cutting-edge services that drive growth and success.
          </p>
          <p className="text-lg mb-4">
            Our vision is to be the leading provider of integrated solutions, recognized for our expertise, creativity,
            and commitment to excellence. We value innovation, integrity, collaboration, and client satisfaction in
            everything we do.
          </p>
        </section>
  
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-lg mb-4">
            Founded in 2010, RJ Global Group started as a small IT consulting firm. Over the years, we recognized the
            growing need for integrated services across various sectors. This led to the expansion of our offerings and
            the creation of our four main divisions: RJ Tech Innovations, Storylens Production, RJ Media Hub, and RJ
            Realty.
          </p>
          <p className="text-lg mb-4">
            Today, we pride ourselves on our ability to offer comprehensive solutions that meet the diverse needs of our
            clients, from startups to established enterprises.
          </p>
        </section>
  
        <section>
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "John Doe", role: "CEO & Founder", image: "/placeholder.svg" },
              { name: "Jane Smith", role: "CTO", image: "/placeholder.svg" },
              { name: "Mike Johnson", role: "Creative Director", image: "/placeholder.svg" },
              { name: "Sarah Brown", role: "Marketing Head", image: "/placeholder.svg" },
              { name: "David Lee", role: "Real Estate Manager", image: "/placeholder.svg" },
              { name: "Emily Chen", role: "Operations Director", image: "/placeholder.svg" },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    )
  }
  
  export default About
  
  