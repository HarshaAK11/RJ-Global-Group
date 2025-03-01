import React, { useState } from "react"
import work from '../assets/work together.png'
import { Instagram, Mail, Linkedin, ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"
import Toaster from '../components/ui/Toaster'


function Contact() {
  const navigate = useNavigate()
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState({ title: '', description: '' });

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    try {
      const response = await fetch('http://localhost:3000/api/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message')
        })
      })

      const data = await response.json()
      console.log(data)

      if (response.ok) {
        setToastMessage({ title: 'Your message has been sent successfully', description: 'we will get back to you soon.' })
        setShowToast(true)
        e.target.reset()
      } else {
        setToastMessage({ title: 'Failed to send message', description: 'Please try again.' })
        setShowToast(true)
        console.error('Failed to send message')
      }


    } catch (error) {
      console.error(error.message)
    }
  }

    return (
      <div className="h-screen flex items-start gap-16 py-20 px-[150px]">

        {showToast && <Toaster title={toastMessage.title} description={toastMessage.description} onClose={() => setShowToast(false)} />}

        {/* Left Section */}
        <div className="flex-1 flex flex-col items-center">
          <h1 className="text-6xl font-semibold mb-8">What Can We Create Together?</h1>
          <h2 className="text-[grey]">Every great project starts with a conversation. Share your thoughts, and let's explore the possibilities of what we can achieve for you.</h2>
          <img src={work} alt="Work Together" className="size-[25rem] mt-14" />
        </div>
        
        {/* Right Section */}
        <div className="max-w-2xl flex-1 flex flex-col items-center">

          <form className="space-y-6 p-8 rounded-xl border w-[500px] shadow-[0_0_8px_-5px_rgba(0,0,0,0.8)]" onSubmit={handleSubmit}>
            <h1 className="text-4xl font-semibold mb-4">Leave Us a Message</h1>
            <div>
              <label htmlFor="name" className="block mb-1">
                Name<sup className="text-red-500">*</sup>
              </label>
              <input type="text" id="name" name="name" className="w-full py-2 px-4 border rounded-lg outline-none" placeholder="Rohan RJ" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">
                Email<sup className="text-red-500">*</sup>
              </label>
              <input type="email" id="email" name="email" className="w-full py-2 px-4 border rounded-lg outline-none" placeholder="hello@RJ.com" required />
            </div>  
            <div>
              <label htmlFor="message" className="block mb-1">
                Message<sup className="text-red-500">*</sup>
              </label>
              <textarea id="message" name="message" rows={4} className="w-full py-2 px-4 border rounded-lg outline-none" placeholder="Tell us about your needs" required></textarea>
            </div>
            <button type="submit" className="bg-black text-white px-6 py-2 rounded-lg hover:bg-[#f0ff75] hover:text-black transition duration-300">
              Send
            </button>
          </form>
  
          {/* Social Media Section */}
          <div className="mt-8 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Connect With Us</h2>
            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/in/rohan-rj/" target="_blank" rel="noopener noreferrer">
                <Linkedin />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram />
              </a>
              <a href="mailto:rjglobalg@gmail.con" target="_blank" rel="noopener noreferrer">
                <Mail />
              </a>
            </div>
          </div>
        </div>

        <p onClick={() => navigate(-1)} className="absolute top-4 left-4 flex items-center gap-2 cursor-pointer"><ArrowLeft />Go Back</p>

      </div>
    )
  }
  
  export default Contact
  
  