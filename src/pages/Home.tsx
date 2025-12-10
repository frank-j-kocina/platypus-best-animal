function Home() {
  return (
    <div>
      <section className="home-hero">
        <div className="home-content">
          <div className="home-text">
            <h2 className="home-headline">
              Welcome to Club Puggle: Your Platypus Project Helper!
            </h2>
            <p className="home-subheadline">
              Everything you need for your school report, poster, or essay.
            </p>
            <div className="home-body">
              <p>
                Hi there! Are you learning about the Platypus in school? You've come to the right place.
                Club Puggle is the best place to find fun facts, cool pictures, and easy-to-read
                information for your homework.
              </p>
              <p>
                The Platypus is one of the strangest animals on Earth. It has a bill like a duck,
                a tail like a beaver, and it lays eggs!
              </p>
            </div>

          </div>

          <div className="home-image">
            <img
              src={`${import.meta.env.BASE_URL}images/platypus-hero.jpg`}
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
