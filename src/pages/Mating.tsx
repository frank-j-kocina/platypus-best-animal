function Mating() {
  return (
    <div className="page-content">
      <h1>From Egg to Adult</h1>

      <section className="content-section">
        <h2>Baby Platypuses</h2>
        <p>
          Most mammals (like dogs, cats, and humans) are born alive. But the platypus is different!
        </p>
      </section>

      <section className="content-section">
        <h2>The Egg</h2>
        <p>
          The mother lays 1 to 3 small eggs. They are soft and leathery, like a reptile egg.
        </p>
      </section>

      <section className="content-section">
        <h2>Hatching</h2>
        <p>
          After only 10 days, the eggs hatch.
        </p>
      </section>

      <section className="content-section">
        <h2>The Puggle</h2>
        <p>
          A baby platypus is called a <strong>Puggle</strong>. It is very small (size of a jellybean)
          and has no hair.
        </p>
        <img
          src={`${import.meta.env.BASE_URL}images/puggle.png`}
          alt="Baby platypus puggle"
          style={{ width: '100%', maxWidth: '600px', margin: '1.5rem auto', display: 'block' }}
        />
      </section>

      <section className="content-section">
        <h2>Growing Up</h2>
        <p>
          The puggle drinks milk from the mother for about 4 months inside the burrow. Then, it
          is ready to swim!
        </p>
      </section>

      <section className="content-section">
        <h2>💕 Presentation Idea: "Platypus Love Timeline"</h2>
        <p><strong>Idea:</strong> Make a simple timeline poster showing the steps from meeting to babies.</p>
        <p><strong>How to do it:</strong></p>
        <ul>
          <li>Start with springtime and draw two platypuses swimming.</li>
          <li>Add arrows and short captions like:
            <ul>
              <li>"Mom builds a safe burrow."</li>
              <li>"She lays 1–3 eggs!"</li>
              <li>"Eggs hatch in 10 days."</li>
              <li>"Babies drink milk from mom."</li>
            </ul>
          </li>
          <li>Use soft colors and doodles so it stays age-appropriate and not too biological.</li>
        </ul>
      </section>
    </div>
  )
}

export default Mating
