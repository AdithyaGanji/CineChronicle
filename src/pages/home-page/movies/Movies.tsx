import { MediaObject } from '../../../data/data'
import { movies } from '../../../data/data'
import MediaCard from '../../../components/media-card/MediaCard'
import './Movies.css'

export default function Movies() {
  return (
    <section id="movies" className="container movies">
      <h2 className="movies-header section-header">Movies</h2>

      <div className="movies-media media-cards-grid carousel">
        {
          movies.map((mediaObj: MediaObject) => {
            return <MediaCard key={mediaObj.id} mediaObj={mediaObj} />
          }
          )}
      </div>
    </section>
  )
}
