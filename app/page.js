import About from "@/components/Homepage/About"
import Contact from "@/components/Homepage/Contact"
import Hero from "@/components/Homepage/Hero"
import Projects from "@/components/Homepage/Projects"

export const metadata = {
  title: "Portfolio - Home"
}

const Homepage = async () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default Homepage