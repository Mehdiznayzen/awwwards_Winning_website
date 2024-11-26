import { 
  Hero, 
  About, 
  Navbar, 
  Features, 
  Story, 
  Contact, 
  Footer 
} from './components'

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  )
}

export default App