import Navbar from "./components/Navbar"
import Contact from "./sections/Contact"
import ExperienceSection from "./sections/ExperienceSection"
import FeatureCards from "./sections/FeatureCards"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import LogoShowcase from "./sections/LogoShowcase"
import ShowcaseSection from "./sections/ShowcaseSection"
import TechStack from "./sections/TechStack"
import Testimonials from "./sections/Testimonials"

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <ShowcaseSection></ShowcaseSection>
      <LogoShowcase></LogoShowcase>
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