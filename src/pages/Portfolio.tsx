import React from 'react'

const Portfolio = () => {
  return (
      <Router>
          <div className="min-h-screen bg-gray-900 text-white p-8">
              <nav className="mb-8 flex justify-center space-x-4">
                  <Link to="/" className="text-blue-300 hover:underline">Home</Link>
                  <Link to="/about" className="text-blue-300 hover:underline">About</Link>
                  <Link to="/skills" className="text-blue-300 hover:underline">Skills</Link>
                  <Link to="/projects" className="text-blue-300 hover:underline">Projects</Link>
                  <Link to="/contact" className="text-blue-300 hover:underline">Contact</Link>
              </nav>

              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
              </Routes>
          </div>
      </Router>
  )
}

export default Portfolio