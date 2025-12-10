function Classification() {
  return (
    <div className="page-content">
      <h1>What is a Platypus?</h1>

      <section className="content-section">
        <h2>The Animal Puzzle</h2>
        <p>
          The Platypus looks like a mix of three different animals: a duck, a beaver, and an otter!
          But it is actually its own special kind of creature.
        </p>
        <img
          src={`${import.meta.env.BASE_URL}images/classification.png`}
          alt="Diagram showing platypus classification and characteristics"
          style={{ width: '100%', maxWidth: '700px', margin: '1.5rem auto', display: 'block' }}
        />
      </section>

      <section className="content-section">
        <h2>Scientific Name</h2>
        <p className="scientific-name">Ornithorhynchus anatinus</p>
        <p style={{ textAlign: 'center', fontStyle: 'italic', color: '#5a5a52' }}>
          Pronounced: Or-nith-o-rink-us An-ah-teen-us
        </p>
      </section>

      <section className="content-section">
        <h2>What is it?</h2>
        <p>
          It is a <strong>Mammal</strong>. This means it has fur and drinks milk.
        </p>
      </section>

      <section className="content-section">
        <h2>The Special Group: Monotremes</h2>
        <p>
          The platypus is in a special group of mammals called <strong>Monotremes</strong>.
        </p>
        <p>
          <strong>Vocabulary Word:</strong> Monotreme = A mammal that lays eggs instead of
          giving birth to live babies.
        </p>
      </section>

      <section className="content-section">
        <h2>Family</h2>
        <p>
          The only other animal in this family is the Echidna.
        </p>
      </section>

      <section className="content-section">
        <h2>🧬 Presentation Idea: "Platypus: The Detective Mystery"</h2>
        <p><strong>Idea:</strong> Present why the platypus confused scientists using a "What am I?" detective board.</p>
        <p><strong>How to do it:</strong></p>
        <ul>
          <li>Make a poster titled "The Case of the Weird Animal!"</li>
          <li>Include clues:
            <ul>
              <li>Bill like a duck</li>
              <li>Tail like a beaver</li>
              <li>Lays eggs like a reptile</li>
              <li>Furry like a mammal</li>
            </ul>
          </li>
          <li>Reveal the answer: "It's a mammal called a monotreme!"</li>
          <li>Kids can pin "evidence cards" like a detective solving an animal mystery.</li>
        </ul>
      </section>
    </div>
  )
}

export default Classification
