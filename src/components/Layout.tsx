import { Link, useLocation } from 'react-router-dom'

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const navigationLinks = [
    { title: 'Home Base', path: '/' },
    { title: 'What Am I?', path: '/classification' },
    { title: 'Where Do They Live?', path: '/habitat' },
    { title: 'How Do They Look?', path: '/anatomy' },
    { title: "What's for Lunch?", path: '/diet' },
    { title: 'Baby Puggles!', path: '/mating' },
    { title: 'Superpowers & Skills', path: '/behavior' },
    { title: 'Cool Facts', path: '/cool-facts' },
    { title: 'Famous Faces', path: '/pop-culture' },
    { title: 'Take the Quiz!', path: '/presentation' },
  ]

  return (
    <div className="app">
      <header className="header">
        <div className="header-top">
          <Link to="/" className="logo-link">
            <img src={`${import.meta.env.BASE_URL}images/Logo.svg`} alt="Club Puggle Logo" className="site-logo" />
          </Link>
          <div className="header-title">
            <Link to="/" className="title-link">
              <h1>Club Puggle</h1>
              <p className="subtitle">Your Educational Resource for Learning About the Platypus</p>
            </Link>
          </div>
        </div>

        <nav className="top-nav">
          <ul className="nav-menu">
            {navigationLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`nav-item ${location.pathname === link.path ? 'active' : ''}`}
                >
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
