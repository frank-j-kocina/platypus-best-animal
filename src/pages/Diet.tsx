function Diet() {
  return (
    <div className="page-content">
      <h1>The Lunch Menu</h1>

      <section className="content-section">
        <h2>The Hungry, Hungry Puggle</h2>
        <p>
          Being a platypus is hard work, and it builds up a serious appetite. Because they have
          a high metabolism and no stomach (yes, really—food goes straight to the intestines!),
          a platypus needs to eat about 20% of its body weight every single day.
        </p>
      </section>

      <section className="content-section">
        <h2>What's for Dinner?</h2>
        <p>
          The Platypus is a carnivorous bottom-feeder. Their favorite snacks include:
        </p>
        <ul>
          <li>Insect larvae</li>
          <li>Freshwater shrimp</li>
          <li>Crayfish (Yabbies)</li>
          <li>Annelid worms</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>How They Eat</h2>
        <p>
          They scoop up gravel and mud along with their prey and store it in cheek pouches.
          Once they surface, they use the gravel to "chew" the food using grinding pads
          (since they have no teeth!).
        </p>
      </section>

      <section className="content-section">
        <h2>Learn More</h2>
        <p>
          Want to learn more about the freshwater ecosystem? Visit{' '}
          <a
            href="https://www.australia.com/en-us/facts-and-planning/about-australia/australias-animals/platypus.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Australia.com
          </a>
          {' '}for resources on river health.
        </p>
      </section>
    </div>
  )
}

export default Diet
