import "./App.css";
import FooterDaisy from "./components/Daisyfooter/FooterDaisy";
import DaisyNav from "./components/daisyNav/DaisyNav";

function App() {
  return (
    <>
      <div style={{ backgroundColor: "white", minHeight: "100vh" }}>
        <DaisyNav></DaisyNav>
        <FooterDaisy></FooterDaisy>
        
      </div>
    </>
  );
}

export default App;
