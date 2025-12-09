function Anatomy() {
  return (
    <div className="page-content">
      <h1>What Do They Look Like?</h1>

      <section className="content-section">
        <h2>Body Parts & Features</h2>
        <p>
          Here are the important parts of the platypus to label on your diagram:
        </p>
        <img
          src="/images/anatomy.png"
          alt="Labeled diagram of platypus anatomy showing bill, tail, fur, and feet"
          style={{ width: '100%', maxWidth: '800px', margin: '1.5rem auto', display: 'block' }}
        />
      </section>

      <section className="content-section">
        <h3>The Bill</h3>
        <p>
          It looks like a duck's beak, but it is soft and rubbery (like a sneaker sole!).
          It helps them feel for food underwater.
        </p>
      </section>

      <section className="content-section">
        <h3>The Tail</h3>
        <p>
          It looks like a beaver's tail. It stores fat to give them energy.
        </p>
      </section>

      <section className="content-section">
        <h3>The Fur</h3>
        <p>
          It is dark brown, thick, and waterproof. It works like a wetsuit to keep them warm.
        </p>
      </section>

      <section className="content-section">
        <h3>The Feet</h3>
        <p>
          They have webbed feet for swimming. When they walk on land, the webs fold back so
          they can use their claws to dig.
        </p>
      </section>

      <section className="content-section">
        <h2>The Stats</h2>

        <div className="stats-grid">
          <div className="stat-box">
            <h3>Length</h3>
            <p>They typically grow to about 40–50 cm (15–20 inches) long.</p>

            <div className="comparison-box">
              <p className="comparison-title">About the size of:</p>
              <div className="comparison-items">
                <div className="comparison-item">
                  <span className="comparison-emoji">💻</span>
                  <p className="comparison-label">Laptop<br />(15")</p>
                </div>
                <div className="comparison-item">
                  <span className="comparison-emoji">🥖</span>
                  <p className="comparison-label">Baguette<br />(17")</p>
                </div>
                <div className="comparison-item">
                  <span className="comparison-emoji">🧳</span>
                  <p className="comparison-label">Carry-on<br />(20")</p>
                </div>
              </div>
            </div>
          </div>

          <div className="stat-box">
            <h3>Weight</h3>
            <p>Ranging from 0.7 kg to 2.4 kg (1.5–5.3 lbs), with males generally being larger than females.</p>

            <div className="comparison-box">
              <p className="comparison-title">About the weight of:</p>
              <div className="comparison-items">
                <div className="comparison-item">
                  <span className="comparison-emoji">📕</span>
                  <p className="comparison-label">Hardcover<br />book (2 lbs)</p>
                </div>
                <div className="comparison-item">
                  <span className="comparison-emoji">🍍</span>
                  <p className="comparison-label">Pineapple<br />(4 lbs)</p>
                </div>
                <div className="comparison-item">
                  <span className="comparison-emoji">🐱</span>
                  <p className="comparison-label">Small cat<br />(5 lbs)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="stat-full">
          <h3>Lifespan</h3>
          <p>In the wild, they can live up to 12 years. In captivity, they've been known to reach the ripe old age of 17!</p>
        </div>
      </section>
    </div>
  )
}

export default Anatomy
