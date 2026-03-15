import type { OMDBResponse } from '../../data/data'

import formatDuration from '../../utils/formatters'

import LanguageIcon from '../../assets/icons/language-icon.svg'
import TagIcon from '../../assets/icons/tag-icon.svg'
import CalendarIcon from '../../assets/icons/calendar-icon.svg'
import DurationIcon from '../../assets/icons/duration-icon.svg'
import StackIcon from '../../assets/icons/stack-icon.svg'

import './SearchTitleAttributes.css'

export default function SearchTitleAttributes({ mediaObj }: { mediaObj: OMDBResponse }) {
  return (
    <div className="search-title-attributes">
      <div className="st-attribute-container">
        <img src={LanguageIcon} alt="Language Icon" />
        <div className="st-attribute">{mediaObj.Language.split(", ")[0]}</div>
      </div>

      <div className="st-attribute-container">
        <img src={TagIcon} alt="Tag Icon" />
        <div className="st-attribute">{mediaObj.Genre}</div>
      </div>

      <div className="st-attribute-container">
        <img src={CalendarIcon} alt="Calendar Icon" />
        <div className="st-attribute">{mediaObj.Year}</div>
      </div>

      <div className="st-attribute-container">
        <img src={(mediaObj.Type === "movie") ? DurationIcon : StackIcon} alt="Duration Icon" />
        <div className="st-attribute">
          {
            (mediaObj.Type === "movie") 
              ? (mediaObj.Runtime !== 'N/A' ? formatDuration(Number((mediaObj.Runtime).split(' ')[0])) : "N/A")
              : mediaObj.totalSeasons 
          }
        </div>
      </div>
    </div>
  )
}
