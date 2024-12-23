import Footer from "../src/Components/Footer";
import Clients from "./Components/Clients";
import NavBar from "./Components/NavBar";
import NewTools from "./Components/NewTools";
import OurServices from "./Components/OurServices";
import SparklesPreview from "./Components/SparklesPreview";
import WhyChooseUs from "./Components/WhyChooseUs";
import "./index.css";
function App() {
  return (
    <>
      <NavBar />
      <SparklesPreview />
      <OurServices />
      <NewTools />
      <Clients />
      <WhyChooseUs />
      <Footer />
    </>
  );
}

export default App;
