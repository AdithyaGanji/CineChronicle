import { useLocation } from 'react-router'
import { Link } from 'react-router'
import { HashLink } from 'react-router-hash-link'

import SearchButton from '../search-button/SearchButton'
import ShuffleButton from '../shuffle-button/ShuffleButton'

import './Navbar.css'

export default function Navbar() {
  const location = useLocation()

  return (
    <nav className={`navbar ${location.pathname === '/search' ? 'not-fixed' : ''}`}>
      <Link 
        className="cinechronicle-logo" to="/"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span className="c-letter">C</span>ine<span className="c-letter">C</span>hronicle
      </Link>

      <div className="navbar-menu">
        <HashLink smooth className="navbar-menu-item" to="/#">Home</HashLink>
        <HashLink smooth className="navbar-menu-item" to="/#new-arrivals">New Arrivals</HashLink>
        <HashLink smooth className="navbar-menu-item" to="/#trailers">Trailers</HashLink>
        <HashLink smooth className="navbar-menu-item" to="/#movies">Movies</HashLink>
        <HashLink smooth className="navbar-menu-item" to="/#series">Series</HashLink>
      </div>

      <div className="navbar-end-wrapper">
        <SearchButton />
        <ShuffleButton />
      </div>
    </nav>
  )
}
