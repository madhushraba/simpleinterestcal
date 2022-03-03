import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Page from "./components/Page1/Page";
import Servicelist from "./components/Servicelist/Servicelist";
import Social from "./components/Social/Social";
import Topbar from "./components/Topbar/Topbar";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Header />
      <About />
      <Page />
      <Social />
      <Servicelist />

      <Contact />
    </div>
  );
}

export default App;
