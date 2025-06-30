'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className={`text-2xl font-bold transition-colors ${
            scrolled ? 'text-blue-600' : 'text-white'
          }`}>
            TechSolutions
          </Link>
          <ul className="flex space-x-8">
            <li>
              <button onClick={() => scrollToSection('hero')} className={`font-medium transition-colors hover:text-blue-400 ${
                scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white'
              }`}>
                Accueil
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('services')} className={`font-medium transition-colors hover:text-blue-400 ${
                scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white'
              }`}>
                Services
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('portfolio')} className={`font-medium transition-colors hover:text-blue-400 ${
                scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white'
              }`}>
                Portfolio
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('about')} className={`font-medium transition-colors hover:text-blue-400 ${
                scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white'
              }`}>
                À propos
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')} className={`font-medium transition-colors hover:text-blue-400 ${
                scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white'
              }`}>
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}