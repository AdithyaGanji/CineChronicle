import { MediaObject } from '../../../data/data'
import { movies } from '../../../data/data'
import MediaCard from '../../../components/media-card/MediaCard'

export default function Movies() {
  return (
    <section id="movies" className="section">
      <div className="section-header-wrapper">
        <div className="horizontal-ruler"></div>
        <h2 className="movies-header section-header">Movies</h2>
        <div className="horizontal-ruler"></div>
      </div>

      <div className="section-media container">
        <div className="movies-media media-cards-grid carousel">
          {
            movies.map((mediaObj: MediaObject) => {
              return <MediaCard key={mediaObj.id} mediaObj={mediaObj} />
            }
            )}
        </div>
      </div>
    </section>
  )
}
