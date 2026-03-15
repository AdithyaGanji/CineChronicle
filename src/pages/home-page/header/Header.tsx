import { useNavigate } from "react-router"

import CalendarIcon from "../../../assets/icons/calendar-icon.svg"
import DurationIcon from "../../../assets/icons/duration-icon.svg"
import DotIcon from "../../../assets/icons/dot-icon.svg"

import './Header.css'

export default function Header() {
  const navigate = useNavigate()

  return (
    <>
      <header className="header">
        <div className="header-bg"></div>

        <div className="header-content">
          <h2 className="hm-title">Inception</h2>

          <div className="header-movie-attributes">
            <div className="hm-release-year-container">
              <img src={CalendarIcon} alt="Calendar icon"/>
              <span className="hm-release-year">2010</span>
            </div>

            <img 
              src={DotIcon}
              alt="Dot"
            />

            <span className="hm-genre">Sci-fi/Action</span>

            <img 
              src={DotIcon}
              alt="Dot"
            />

            <div className="hm-duration-container">
              <img src={DurationIcon} alt="Duration icon"/>
              <span className="hm-duration">2h 28m</span>
            </div>
          </div>

          <div className="header-movie-description">
            Cobb steals information from his targets by entering their dreams. He is wanted for his alleged role in his wife's murder and his only chance at redemption is to perform a nearly impossible task.
          </div>

          <button
            className="btn header-explore-btn"
            onClick={() => { 
              window.scrollTo({ top: 0, behavior:'instant' })
              navigate("/search?title=Inception&type=movie")
            }}
          >Explore</button>
        </div>

      </header>
    </>
  )
}
