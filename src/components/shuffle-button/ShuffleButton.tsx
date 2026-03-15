import { useNavigate } from 'react-router'

import { randomMedia } from '../../data/data'
import ShuffleIcon from '../../assets/icons/shuffle-icon.svg'

import './ShuffleButton.css'

export default function ShuffleButton() {
  const navigate = useNavigate()

  function handleClick() {
    const randomIndex = Math.floor(Math.random() * randomMedia.length)
    const randomMediaTitle = randomMedia[randomIndex]

    navigate(`/search?title=${randomMediaTitle}`)
  }

  return (
    <div 
      className="hover-on-bg"
      onClick={() => handleClick()}
    >
      <img
        className="random-icon"
        src={ShuffleIcon}
        alt="Random icon"
      />
    </div>
  )
}
