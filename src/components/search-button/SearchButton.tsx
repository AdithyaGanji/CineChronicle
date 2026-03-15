import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router'

import SearchIcon from '../../assets/icons/search-icon.svg'
import CloseIcon from '../../assets/icons/close-icon.svg'

import './SearchButton.css'

export default function SearchButton() {
  const [enableOverlay, setEnableOverlay] = useState(false)

  const [searchInput, setSearchInput] = useState('')
  const inputRef = useRef<HTMLInputElement | null>(null)

  const [searchType, setSearchType] = useState('movie')

  useEffect(() => {
    if (enableOverlay && inputRef.current)
      inputRef.current.focus()
      
  }, [enableOverlay])

  const navigate = useNavigate()

  function handleKeyPress(event: React.KeyboardEvent) {
    if (event.key === 'Escape')
      setEnableOverlay(false)

    if (event.key === 'Enter')
      handleSearchClick()
  }

  function handleSearchClick() {
    if (!searchInput)
      return

    setEnableOverlay(false)
    setSearchInput('')

    window.scrollTo({ top: 0, behavior:'instant' })
    navigate(`/search?title=${searchInput}&type=${searchType}`)
  }

  return (
    <>
      <div className={`overlay ${enableOverlay ? 'enable-overlay': ''}`}>
        <div className="search-wrapper">
          <div className="search-bar-wrapper">
            <input
              className="search-bar"
              type="text"
              placeholder="Search"
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
              autoFocus
              onKeyUp={(event) => handleKeyPress(event)}
              ref={inputRef}
            />
            <div
              className={`search-icon-wrapper hover-on-bg ${searchInput.length > 0 ? 'enable-search' : ''}`}
              onClick={() => handleSearchClick()}
            >
              <img
                className="search-icon"
                src={SearchIcon}
                alt="Search icon"
              />
            </div>
            <div
              className="close-icon-wrapper hover-on-bg"
              onClick={() => { 
                setEnableOverlay(false)
                setSearchInput('')
              }}
            >
              <img
                className="close-icon"
                src={CloseIcon}
                alt="Close icon"
              />
            </div>
          </div>

          <div className="media-type-input-container">
            <div className="mt-input-wrapper">
              <button 
                className={`mt-input-btn ${(searchType === 'movie') ? 'active' : ''}`}
                onClick={() => {
                    setSearchType('movie')
                    if(inputRef.current)
                      inputRef.current.focus()
                  }
                }
                onKeyUp={(event) => handleKeyPress(event)}
              >Movies</button>

              <div className={`bg-on-btn ${(searchType === 'series') ? 'slide-right' : ''}`}></div>

              <button 
                className={`mt-input-btn ${(searchType === 'series') ? 'active' : ''}`}
                onClick={() => {
                    setSearchType('series')
                    if(inputRef.current)
                      inputRef.current.focus()
                  }
                }
                onKeyUp={(event) => handleKeyPress(event)}
              >Series</button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="search-icon-wrapper hover-on-bg"
        onClick={() => setEnableOverlay(true)}
      >
        <img
          className="search-icon"
          src={SearchIcon}
          alt="Search icon"
        />
      </div>
    </>
  )
}
