import { useNavigate } from 'react-router'
import { MediaObject, MovieObject, SeriesObject } from '../../data/data'
import formatDuration from '../../utils/formatters'

import CalenderIcon from '../../assets/icons/calendar-icon.svg'
import DurationIcon from '../../assets/icons/duration-icon.svg'
import RatingIcon from '../../assets/icons/rating-icon.svg'
import GenreIcon from '../../assets/icons/tag-icon.svg'
import StackIcon from '../../assets/icons/stack-icon.svg'

import './MediaCard.css'

export default function MediaCard({ mediaObj }: { mediaObj: MediaObject | MovieObject | SeriesObject }) {
  const navigate = useNavigate()

  return (
    <div className="media-card">
      <img
        className="media-poster"
        src={mediaObj.posterPath}
        alt={`${mediaObj.title} movie`}
      />

      <div className="media-card-details">
        <h3 className="media-title">{mediaObj.title}</h3>

        <div className="media-attributes">
          <div className="media-attribute-wrapper">
            <img
              className="media-attribute-icon"
              src={CalenderIcon}
              alt=''
            />
            <span className="media-attribute">{mediaObj.releaseYear}</span>
          </div>

          <div className="media-attribute-wrapper">
            <img
              className="media-attribute-icon"
              src={(mediaObj instanceof MovieObject) ? DurationIcon : StackIcon}
              alt=''
            />
            <span className="media-attribute">{
              (mediaObj instanceof MovieObject) ? formatDuration(mediaObj.durationInMins) : (mediaObj as SeriesObject).seasonsCount
            }</span>
          </div>

          <div className="media-attribute-wrapper">
            <img
              className="media-attribute-icon"
              src={GenreIcon}
              alt=''
            />
            <span className="media-attribute">{mediaObj.genre}</span>
          </div>

          <div className="media-attribute-wrapper media-rating-wrapper">
            <img
              className="media-attribute-icon media-rating-icon"
              src={RatingIcon}
              alt=''
            />
            <span className="media-attribute">{mediaObj.imdbRating}</span>
          </div>
        </div>
      </div>

      <button
        className="btn explore-btn"
        onClick={() => { 
          window.scrollTo({ top: 0, behavior:'instant' })
          navigate(`/search?title=${mediaObj.title}&type=${(mediaObj instanceof MovieObject) ? 'movie' : 'series'}`) 
        }}
      >
        Explore
      </button>
    </div>
  )
}
