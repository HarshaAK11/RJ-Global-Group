import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import gsap from 'gsap'

const Menu = ({ className, setIsMenuOpen }) => {

  const location = useLocation()
  const navigate = useNavigate()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Know Us', path: '/about' },
    { name: 'Divisions', path: '/divisions' },
  ]

  const handleNavigation = (path, e) => {
    e.preventDefault();

    const curtain = document.querySelector('.transition-curtain')
    
    gsap.timeline()
      .to(curtain, {
        y: '0%',
        duration: 0.6,
        ease: 'power4.inOut',
      })
      .to(curtain, {
        y: '-100%',
        duration: 0.6,
        delay: 0.3,
        ease: 'power4.inOut',
        onComplete: () => {
            navigate(path)
            window.scrollTo(0, 0)
        }
      })
      setIsMenuOpen(false)
    
    // Animate current page up
    gsap.to('.page-content', {
        y: '-100%',
        duration: 0.6,
        ease: 'power4.inOut',
        onComplete: () => {
            navigate(path)
            window.scrollTo(0, 0)
        }
    });
};

  return (
    <>

      {/* Curtain */}
      <div className="transition-curtain fixed inset-0 bg-black z-[100] transform -translate-y-full"></div>

      {/* Menu */}
      <div className={`fixed left-0 h-screen w-full bg-black text-white z-[50] transition-all ease-in-out duration-700 p-8 ${className}`}>

        {/* Links */}
        <ul className='mt-10'>
          {navLinks.map((link, index) => (
            <li className='w-full text-2xl border-b-2 border-[grey] py-4'>
              <Link 
                to={link.path} 
                className={`w-full block ${location.pathname === link.path ? 'text-[#f0ff75]' : ''}`} 
                onClick={(e) => handleNavigation(link.path, e)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <Link to='/contact' className='mt-20 w-full rounded-full flex items-center justify-center gap-2 bg-[#f0ff75] text-black px-5 py-3'>
          <span className="z-10 flex items-center gap-2">
              Let's Talk
              <ArrowRight 
                  className='arrow -rotate-45' 
              />
          </span>
        </Link>

      </div>

    </>
  )
}

export default Menu