import { Link } from 'react-router-dom'

function Layout({ children }: { children: React.ReactNode }) {
  const navigationLinks = [
    { title: 'Home', path: '/' },
    { title: 'Gallery', path: '/gallery' },
    { title: 'Submit Photo', path: '/submit-photo' },
    { title: 'Diet', path: '/diet' },
    { title: 'Mating', path: '/mating' },
    { title: 'Habitat', path: '/habitat' },
    { title: 'Classification', path: '/classification' },
    { title: 'Anatomy', path: '/anatomy' },
    { title: 'Behavior', path: '/behavior' },
  ]

  return (
    <div className="app">
      <header className="header">
        <div className="header-top">
          <Link to="/" className="logo-link">
            <img src="/images/Logo.svg" alt="Club Puggle Logo" className="site-logo" />
          </Link>
          <div className="header-title">
            <Link to="/" className="title-link">
              <h1>Club Puggle</h1>
              <p className="subtitle">The Internet's #1 Fan Zone for the Platypus</p>
            </Link>
          </div>
        </div>

        <nav className="top-nav">
          <ul className="nav-menu">
            {navigationLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="nav-item">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="main-content">
        {children}
      </main>
    </div>
  )
}

export default Layout
