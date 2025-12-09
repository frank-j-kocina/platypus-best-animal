import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <section className="home-hero">
        <div className="home-content">
          <div className="home-text">
            <h2 className="home-headline">
              Welcome to Club Puggle: The Internet's #1 Fan Zone for the Platypus!
            </h2>
            <p className="home-subheadline">
              Where weird is wonderful and the bill fits the bill.
            </p>
            <div className="home-body">
              <p>
                Welcome to the club! You've just waddled into the ultimate sanctuary for fans
                of the world's most puzzling creature. Club Puggle is a community dedicated
                entirely to the duck-billed, beaver-tailed, egg-laying wonder of Down Under.
              </p>
              <p>
                This isn't just a biology textbook—it's a celebration. Whether you are a wildlife
                geek here to study their venomous spurs, or just here to swoon over pictures of
                adorable baby puggles, you are among friends. We believe the Platypus is the
                coolest animal on the planet, and we've built this site to prove it.
              </p>
            </div>

          </div>

          <div className="home-image">
            <img
              src="/images/platypus-hero.jpg"
              alt="Platypus in natural habitat"
              className="home-photo"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
