function Diet() {
  return (
    <div className="page-content">
      <h1>What's for Dinner?</h1>

      <section className="content-section">
        <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem' }}>
          The Platypus is a carnivorous bottom-feeder. Their favorite snacks include:
        </p>

        <div className="diet-grid">
          <div className="diet-item">
            <div className="diet-header">
              <span className="diet-emoji">🐛</span>
              <div className="diet-info">
                <h3>Insect larvae</h3>
                <span className="diet-percentage">40%</span>
              </div>
            </div>
            <p className="diet-description">Found in riverbeds and muddy substrates</p>
          </div>

          <div className="diet-item">
            <div className="diet-header">
              <span className="diet-emoji">🦐</span>
              <div className="diet-info">
                <h3>Freshwater shrimp</h3>
                <span className="diet-percentage">30%</span>
              </div>
            </div>
            <p className="diet-description">Small crustaceans provide essential protein</p>
          </div>

          <div className="diet-item">
            <div className="diet-header">
              <span className="diet-emoji">🦞</span>
              <div className="diet-info">
                <h3>Crayfish (Yabbies)</h3>
                <span className="diet-percentage">20%</span>
              </div>
            </div>
            <p className="diet-description">A favorite crustacean snack</p>
          </div>

          <div className="diet-item">
            <div className="diet-header">
              <span className="diet-emoji">🪱</span>
              <div className="diet-info">
                <h3>Annelid worms</h3>
                <span className="diet-percentage">10%</span>
              </div>
            </div>
            <p className="diet-description">Common prey in their freshwater habitat</p>
          </div>
        </div>
      </section>

      <section className="content-section how-they-eat">
        <h2>How They Eat</h2>
        <p>
          They scoop up gravel and mud along with their prey and store it in cheek pouches.
          Once they surface, they use the gravel to "chew" the food using grinding pads (since they have no teeth!).
        </p>
      </section>
    </div>
  )
}

export default Diet
