import { MediaObject } from '../../../data/data'
import { series } from '../../../data/data'
import MediaCard from '../../../components/media-card/MediaCard'

export default function Series() {
  return (
    <section id="series" className="section">
      <div className="section-header-wrapper">
        <div className="horizontal-ruler"></div>
        <h2 className="series-header section-header">Series</h2>
        <div className="horizontal-ruler"></div>
      </div>

      <div className="section-media container">
        <div className="series-media media-cards-grid carousel">
          {
            series.map((mediaObj: MediaObject) => {
              return <MediaCard key={mediaObj.id} mediaObj={mediaObj} />
            }
            )}
        </div>
      </div>
    </section>
  )
}
