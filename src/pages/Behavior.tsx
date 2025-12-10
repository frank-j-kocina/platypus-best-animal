function Behavior() {
  return (
    <div className="page-content">
      <h1>Cool Powers</h1>

      <section className="content-section">
        <h2>How They Sense the World</h2>
        <p>
          The platypus has a "Super Sense" called <strong>Electroreception</strong>.
        </p>
      </section>

      <section className="content-section">
        <h2>How it works</h2>
        <p>
          When a platypus dives underwater, it closes its eyes, ears, and nose. It uses its
          special bill to feel the tiny bit of electricity made by shrimp and worms moving in
          the mud. It finds food without seeing it!
        </p>
      </section>

      <section className="content-section">
        <h2>Venom</h2>
        <p>
          Male platypuses have a sharp spur on their back legs. It has poison (venom) in it!
          They use it to protect their territory.
        </p>
        <img
          src={`${import.meta.env.BASE_URL}images/venom.png`}
          alt="Diagram showing the venomous spur on male platypus hind leg"
          style={{ width: '100%', maxWidth: '600px', margin: '1.5rem auto', display: 'block' }}
        />
      </section>

      <section className="content-section">
        <h2>Sleep</h2>
        <p>
          They sleep a lot—up to 14 hours a day!
        </p>
      </section>

      <section className="content-section">
        <h2>🧠 Presentation Idea: "Platypus Superpowers Trading Cards"</h2>
        <p><strong>Idea:</strong> Create trading cards for different behaviors.</p>
        <p><strong>How to do it:</strong></p>
        <ul>
          <li>Each card shows a "superpower," like:
            <ul>
              <li>Electrolocation — "Can sense electricity from wiggly prey!"</li>
              <li>Night Hunter — "Active at night!"</li>
              <li>Burrow Builder — "Makes long tunnels."</li>
            </ul>
          </li>
          <li>Add drawings and a "fun fact" on each card.</li>
          <li>The child can show cards one by one during the presentation.</li>
        </ul>
      </section>
    </div>
  )
}

export default Behavior
