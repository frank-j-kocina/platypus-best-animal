function Habitat() {
  return (
    <div className="page-content">
      <h1>Where Do They Live?</h1>

      <section className="content-section">
        <h2>Home Sweet Burrow</h2>
        <p>
          You can only find wild platypuses in one country: <strong>Australia</strong>.
        </p>
      </section>

      <section className="content-section">
        <h2>Map Location</h2>
        <p>
          They live in <strong>Eastern Australia</strong> and on the island of <strong>Tasmania</strong>.
        </p>
      </section>

      <section className="content-section">
        <h2>Their House</h2>
        <p>
          They live in <strong>Freshwater</strong> rivers, lakes, and streams.
        </p>
        <img
          src={`${import.meta.env.BASE_URL}images/platypus4.webp`}
          alt="Platypus in its natural freshwater habitat"
          style={{ width: '100%', maxWidth: '600px', margin: '1.5rem auto', display: 'block', borderRadius: '12px' }}
        />
      </section>

      <section className="content-section">
        <h2>The Burrow</h2>
        <p>
          They dig tunnels called "burrows" in the dirt banks along the river. This keeps them
          safe and dry when they aren't swimming.
        </p>
        <img
          src={`${import.meta.env.BASE_URL}images/image2.png`}
          alt="Platypus on the riverbank near its burrow"
          style={{ width: '100%', maxWidth: '600px', margin: '1.5rem auto', display: 'block' }}
        />
      </section>

      <section className="content-section">
        <h2>Project Tip</h2>
        <p>
          If you are drawing a habitat poster, make sure to draw a river with a muddy bank and
          lots of tree roots!
        </p>
      </section>
    </div>
  )
}

export default Habitat
