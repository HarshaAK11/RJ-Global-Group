function Contact() {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
  
        <div className="max-w-2xl mx-auto">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">
                Name
              </label>
              <input type="text" id="name" name="name" className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input type="email" id="email" name="email" className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">
                Message
              </label>
              <textarea id="message" name="message" rows={4} className="w-full p-2 border rounded" required></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
              Send Message
            </button>
          </form>
  
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Office Location</h2>
            <p>123 Business Street, Suite 100</p>
            <p>City, State 12345</p>
            <p>Phone: (123) 456-7890</p>
          </div>
  
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Connect With Us</h2>
            <div className="flex space-x-4">
              {["Facebook", "Twitter", "LinkedIn", "Instagram"].map((social) => (
                <a key={social} href="#" className="text-blue-500 hover:text-blue-600">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Contact
  
  