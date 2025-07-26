import "./App.css";
import FooterDaisy from "./components/Daisyfooter/FooterDaisy";
import DaisyNav from "./components/daisyNav/DaisyNav";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <>
      <div style={{ backgroundColor: "white", minHeight: "100vh" }}>
        <DaisyNav></DaisyNav>
        <Hero></Hero>
        <FooterDaisy></FooterDaisy>
        
      </div>
    </>
  );
}

export default App;
