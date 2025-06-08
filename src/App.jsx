import AnimatedCounter from "./components/AnimatedCounter"
import Navbar from "./components/Navbar"
import Contact from "./sections/Contact"
import Counter from "./sections/Counter"
import ExperienceSection from "./sections/ExperienceSection"
import FeatureCards from "./sections/FeatureCards"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import LogoShowcase from "./sections/LogoShowcase"
import Personal from "./sections/Personal"
import ShowcaseSection from "./sections/ShowcaseSection"
import TechStack from "./sections/TechStack"
import Testimonials from "./sections/Testimonials"

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Personal></Personal>
      <LogoShowcase></LogoShowcase>
      <Counter></Counter>
      <ShowcaseSection></ShowcaseSection>
      <FeatureCards></FeatureCards>
      <ExperienceSection></ExperienceSection>
      <TechStack></TechStack>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App