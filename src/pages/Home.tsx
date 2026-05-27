import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Hero } from "./Hero";

const Home = () => {
  return (
    <div
      className="bg-[#F5F5F5] overflow-x-hidden flex flex-col min-h-screen"
      id="home"
    >
      <Hero />
      <Navbar />
      <main className="flex-1 h-full px-6 bg-[#f5f5f5]">
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};
export default Home;
