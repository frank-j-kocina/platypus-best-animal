import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export const images = [
  {
    id: 1,
    url: `${import.meta.env.BASE_URL}images/image.png`,
    title: 'Platypus Swimming',
    caption: 'A platypus gracefully gliding through the water',
    description: 'This magnificent platypus showcases its streamlined body design perfectly adapted for aquatic life. Notice the dense, waterproof fur that keeps them warm even in cold mountain streams. Their webbed feet act as powerful paddles, while their broad tail serves as a rudder for precise maneuvering through the water.'
  },
  {
    id: 2,
    url: `${import.meta.env.BASE_URL}images/platypus2.jpeg`,
    title: 'Bill Close-Up',
    caption: 'The distinctive duck-like bill that makes the platypus famous',
    description: 'The platypus bill is not hard like a duck\'s beak, but soft and rubbery, covered with thousands of electroreceptors. These specialized sensors allow the platypus to detect the electrical signals produced by the muscle contractions of their prey, making them expert hunters even with their eyes closed underwater.'
  },
  {
    id: 3,
    url: `${import.meta.env.BASE_URL}images/image2.png`,
    title: 'On the Riverbank',
    caption: 'A platypus emerging from its burrow near the water',
    description: 'Platypuses are most active during dawn and dusk, spending much of their day resting in burrows they dig into riverbanks. These burrows can be quite extensive, with tunnels reaching up to 30 meters long. The entrance is typically just above the waterline, providing easy access for foraging trips.'
  },
  {
    id: 4,
    url: `${import.meta.env.BASE_URL}images/platypus4.webp`,
    title: 'In Natural Habitat',
    caption: 'Swimming in the freshwater streams of Eastern Australia',
    description: 'The platypus inhabits freshwater systems along the eastern coast of Australia and Tasmania. They prefer clean, flowing streams with stable banks for burrowing. These remarkable creatures are considered a key indicator species for waterway health, as they require pristine aquatic environments to thrive.'
  },
]

interface SubmittedPhoto {
  id: number
  name: string
  photoTitle: string
  description: string
  location: string
  photoData: string
  timestamp: number
}

function Gallery() {
  const [submittedPhotos, setSubmittedPhotos] = useState<SubmittedPhoto[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('submittedPhotos')
    if (stored) {
      setSubmittedPhotos(JSON.parse(stored))
    }
  }, [])

  return (
    <div className="page-content">
      <h1>Pictures for Your Project</h1>

      <section className="content-section">
        <h2>Photo Gallery</h2>
        <p className="page-intro">
          Need a picture for your poster? Check out our gallery!
        </p>
      </section>

      <div className="gallery-grid">
        {images.map((image) => (
          <Link key={image.id} to={`/gallery/${image.id}`} className="gallery-item">
            <img
              src={image.url}
              alt={image.title}
              className="gallery-image"
            />
            <h3>{image.title}</h3>
            <p>{image.caption}</p>
          </Link>
        ))}

        {submittedPhotos.map((photo) => (
          <Link key={`submitted-${photo.id}`} to={`/gallery/submitted/${photo.id}`} className="gallery-item submitted-photo">
            <img
              src={photo.photoData}
              alt={photo.photoTitle}
              className="gallery-image"
            />
            <h3>{photo.photoTitle}</h3>
            <p>{photo.location || 'Community submission'}</p>
            <p className="submitted-by">Submitted by {photo.name}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Gallery
