import type { OMDBResponse } from '../../data/data'
import './SearchTitleCredits.css'

export default function SearchTitleCredits({ mediaObj }: { mediaObj: OMDBResponse }) {
  return (
    <div className="search-title-credits">
      <div className="st-credits-container">
        <span className="st-credits-key">Actors</span>
        <span className="st-credits-value">{mediaObj.Actors}</span>
      </div>

      <div className="divider"></div>

      <div className="st-credits-container">
        <span className="st-credits-key">Writers</span>
        <span className="st-credits-value">{mediaObj.Writer}</span>
      </div>

      {mediaObj.Director !== 'N/A' &&
        (
          <>
            <div className="divider"></div>

            <div className="st-credits-container">
              <span className="st-credits-key">Director</span>
              <span className="st-credits-value">{mediaObj.Director}</span>
            </div>
          </>
        )
      }

      <div className="divider"></div>

      <div className="st-credits-container">
        <span className="st-credits-key">Awards</span>
        <span className="st-credits-value">{mediaObj.Awards}</span>
      </div>
    </div>
  )
}
