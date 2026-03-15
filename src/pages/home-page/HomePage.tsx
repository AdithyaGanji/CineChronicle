import Header from './header/Header'
import NewArrivals from './new-arrivals/NewArrivals'
import Navbar from '../../components/navbar/Navbar'
import Trailers from './trailers/Trailers'
import Movies from './movies/Movies'
import Series from './series/Series'
import Footer from '../../components/footer/Footer'

import '../../carousels.css'

export default function HomePage() {
  return (
    <main className="home-page">
      <Navbar />
      <Header />
      <NewArrivals />
      <Trailers />
      <Movies />
      <Series />
      <Footer />
    </main>
  )
}
