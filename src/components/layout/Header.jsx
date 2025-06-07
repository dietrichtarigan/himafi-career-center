import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Alumni Portal', href: '/alumni' },
    { name: 'Career Board', href: '/careers' },
    { name: 'Media Center', href: '/media' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-max section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-text-dark rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-text-dark">ARCADE</h1>
              <p className="text-sm text-text-primary">HIMAFI ITB</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-text-dark border-b-2 border-text-dark'
                    : 'text-text-primary hover:text-text-dark'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/login"
              className="bg-text-dark text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Login Admin
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block py-2 font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-text-dark'
                    : 'text-text-primary hover:text-text-dark'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/login"
              className="block mt-4 bg-text-dark text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Login Admin
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
