import Header from "./components/common/header/Header";
import Nav from "./components/layout/nav/Nav";
import About from "./components/pages/about/About";
import Banner from "./components/pages/banner/Banner";
import Skills from "./components/pages/skills/Skills";
import Works from "./components/pages/work/Works";

function App() {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dzmn27ifb/image/upload/v1703100385/fondo_ml1o4j.png)",
      }}
      className="bg-no-repeat bg-cover overflow-hidden"
    >
      <Header />
      <Nav />
      <Banner />
      <About />
      <Skills />
      <Works />
    </div>
  );
}

export default App;
