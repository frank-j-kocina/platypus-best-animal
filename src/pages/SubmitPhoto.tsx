import { useState } from 'react'

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

function SubmitPhoto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    photoTitle: '',
    description: '',
    location: ''
  })
  const [photoFile, setPhotoFile] = useState<File | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!photoFile) {
      alert('Please select a photo to upload')
      return
    }

    const reader = new FileReader()
    reader.onloadend = () => {
      const photoData = reader.result as string

      const existingPhotos = localStorage.getItem('submittedPhotos')
      const photos: SubmittedPhoto[] = existingPhotos ? JSON.parse(existingPhotos) : []

      const newPhoto: SubmittedPhoto = {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        photoTitle: formData.photoTitle,
        description: formData.description,
        location: formData.location,
        photoData,
        timestamp: Date.now()
      }

      photos.push(newPhoto)
      localStorage.setItem('submittedPhotos', JSON.stringify(photos))

      setFormData({
        name: '',
        email: '',
        photoTitle: '',
        description: '',
        location: ''
      })
      setPhotoFile(null)
      setSubmitted(true)
    }

    reader.readAsDataURL(photoFile)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert('File size must be less than 10MB')
        e.target.value = ''
        return
      }
      setPhotoFile(file)
    }
  }

  if (submitted) {
    return (
      <div className="page-content">
        <h1>Thank You!</h1>
        <section className="content-section">
          <div className="submission-success">
            <p>
              Your platypus photo submission has been received! Our team of puggle enthusiasts
              will review your submission and may feature it in our gallery.
            </p>
            <p>
              We appreciate you sharing your platypus sighting with the Club Puggle community.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="submit-button"
            >
              Submit Another Photo
            </button>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="page-content">
      <h1>Share Your Platypus Photos</h1>

      <section className="content-section">
        <p className="page-intro">
          Got a great platypus photo? We want to see it! Share your sightings and snapshots
          with the Club Puggle community. The best submissions may be featured in our gallery.
        </p>

        <form onSubmit={handleSubmit} className="photo-submission-form">
          <div className="form-group">
            <label htmlFor="name">Your Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="photoTitle">Photo Title *</label>
            <input
              type="text"
              id="photoTitle"
              name="photoTitle"
              value={formData.photoTitle}
              onChange={handleChange}
              required
              placeholder="Give your photo a catchy title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Where was this photo taken?"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us about your platypus encounter..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="photo">Upload Photo *</label>
            <input
              type="file"
              id="photo"
              name="photo"
              accept="image/*"
              required
              className="file-input"
              onChange={handleFileChange}
            />
            <p className="form-hint">
              Accepted formats: JPG, PNG, WEBP. Max size: 10MB
            </p>
          </div>

          <button type="submit" className="submit-button">
            Submit Photo
          </button>
        </form>
      </section>
    </div>
  )
}

export default SubmitPhoto
