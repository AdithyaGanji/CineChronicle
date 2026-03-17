import { useState } from 'react'
import { otherTrailers } from '../../../data/data'
import PlayIcon from '../../../assets/icons/play-icon.svg'
import './Trailers.css'

export default function Trailers() {
  const [activeTrailerLink, setActiveTrailerLink] = useState('https://www.youtube.com/embed/8yh9BPUBbbQ?si=EpuS6VFG1fsoeIAI')

  return (
    <section id="trailers" className="container section trailers">
      <h2 className="trailers-header section-header">Trailers</h2>

      <div className="trailers-wrapper">
        <iframe className="main-trailer" width="850" height="485" src={activeTrailerLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

        <div className="other-trailers">
          {
            Object.entries(otherTrailers).map((trailerObject) => {
              return (
                <div 
                  key={trailerObject[0]}
                  className="other-trailer-wrapper"
                  onClick={() => setActiveTrailerLink(trailerObject[1].trailerLink)}
                >
                  <img className="play-icon" src={PlayIcon} />
                  <img className="other-trailer" src={trailerObject[1].thumbnailLink}></img>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}
