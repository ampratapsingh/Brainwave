import ButtonGradient from "../src/assets/svg/ButtonGradient.jsx";
import Header from "./components/Header.jsx";
import  Hero  from "./components/Hero.jsx";
import Benefits from "./components/Benefits.jsx";
import Collaboration from "./components/Collaboration.jsx";
import Services from "./components/Services.jsx";

const App = () => {
  return (
    <>
      <div className="pt-19 lg:pt-21 overflow-hidden">
        <Header />
        <Hero/>
        <Benefits/>
        <Collaboration/>
        <Services/>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;

// Hiding content that overflows
// Use the overflow-hidden utility to clip any content within an element that overflows the bounds of that element
