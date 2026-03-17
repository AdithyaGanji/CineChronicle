import { MediaObject } from '../../../data/data'
import { newArrivals } from '../../../data/data'
import MediaCard from '../../../components/media-card/MediaCard'

export default function NewArrivals() {
  return (
    <section id="new-arrivals" className="container section">
      <h2 className="new-arrivals-header section-header">New Arrivals</h2>

      <div className="new-arrivals-media media-cards-grid carousel">
        {
          newArrivals.map((mediaObj: MediaObject) => {
            return <MediaCard key={mediaObj.id} mediaObj={mediaObj} />
          }
          )}
      </div>
    </section>
  )
}
