import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Mission from './components/Mission'
import Donate from './components/Donate'
import Volunteer from './components/Volunteer'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-amber-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Mission />
        <Donate />
        <Volunteer />
        <Contact />

        <footer className="py-12 border-t border-amber-200 bg-amber-50">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-amber-900/70">© {new Date().getFullYear()} Hope Foundation. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm text-amber-900/70">
              <a href="#about" className="hover:text-amber-900">About</a>
              <a href="#mission" className="hover:text-amber-900">Mission</a>
              <a href="#donate" className="hover:text-amber-900">Donate</a>
              <a href="#volunteer" className="hover:text-amber-900">Volunteer</a>
              <a href="#contact" className="hover:text-amber-900">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
