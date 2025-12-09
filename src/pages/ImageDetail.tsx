import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { images } from './Gallery'

interface SubmittedPhoto {
  id: number
  name: string
  email: string
  photoTitle: string
  description: string
  location: string
  photoData: string
  timestamp: number
}

function ImageDetail() {
  const { id } = useParams<{ id: string }>()
  const pathname = window.location.pathname
  const isSubmitted = pathname.includes('/submitted/')
  const [submittedPhotos, setSubmittedPhotos] = useState<SubmittedPhoto[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('submittedPhotos')
    if (stored) {
      setSubmittedPhotos(JSON.parse(stored))
    }
  }, [])

  if (isSubmitted) {
    const photo = submittedPhotos.find(p => p.id === Number(id))

    if (!photo) {
      return (
        <div className="page-content">
          <h1>Image Not Found</h1>
          <p>
            <Link to="/gallery">Return to Gallery</Link>
          </p>
        </div>
      )
    }

    return (
      <div className="page-content">
        <div className="image-detail-nav">
          <Link to="/gallery" className="back-to-gallery">← Back to Gallery</Link>
        </div>

        <h1>{photo.photoTitle}</h1>
        <p className="image-detail-caption">{photo.location || 'Community submission'}</p>
        <p className="submitted-by-detail">Submitted by {photo.name}</p>

        <div className="image-detail-container">
          <img
            src={photo.photoData}
            alt={photo.photoTitle}
            className="image-detail-photo"
          />
        </div>

        <section className="content-section">
          <p>{photo.description || 'No description provided.'}</p>
        </section>
      </div>
    )
  }

  const image = images.find(img => img.id === Number(id))

  if (!image) {
    return (
      <div className="page-content">
        <h1>Image Not Found</h1>
        <p>
          <Link to="/gallery">Return to Gallery</Link>
        </p>
      </div>
    )
  }

  const currentIndex = images.findIndex(img => img.id === image.id)
  const prevImage = currentIndex > 0 ? images[currentIndex - 1] : null
  const nextImage = currentIndex < images.length - 1 ? images[currentIndex + 1] : null

  return (
    <div className="page-content">
      <div className="image-detail-nav">
        <Link to="/gallery" className="back-to-gallery">← Back to Gallery</Link>
      </div>

      <h1>{image.title}</h1>
      <p className="image-detail-caption">{image.caption}</p>

      <div className="image-detail-container">
        <img
          src={image.url}
          alt={image.title}
          className="image-detail-photo"
        />
      </div>

      <section className="content-section">
        <p>{image.description}</p>
      </section>

      <div className="image-navigation">
        {prevImage && (
          <Link to={`/gallery/${prevImage.id}`} className="nav-button prev-button">
            ← {prevImage.title}
          </Link>
        )}
        {nextImage && (
          <Link to={`/gallery/${nextImage.id}`} className="nav-button next-button">
            {nextImage.title} →
          </Link>
        )}
      </div>
    </div>
  )
}

export default ImageDetail
