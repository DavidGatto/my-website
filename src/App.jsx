import Header from "./components/common/header/Header";
import Nav from "./components/layout/nav/Nav";
import About from "./components/pages/about/About";
import Banner from "./components/pages/banner/Banner";
import Skills from "./components/pages/skills/Skills";
import Works from "./components/pages/work/Works";

function App() {
  return (
    <div className=" bg-site bg-no-repeat bg-cover overflow-hidden">
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
