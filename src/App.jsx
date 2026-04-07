import Nav from './components/Nav'
import Hero from './sections/Hero'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
