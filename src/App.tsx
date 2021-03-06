import type { Component } from "solid-js";
import Header from "./components/header";
import Content from "./components/content";
import About from "./components/about";
import Experience from "./components/experience";

const App: Component = () => {
  return (
    <div class="container m-auto">
      <Header></Header>
      <About></About>

      <Experience></Experience>

      {/*   <Content></Content> */}
    </div>
  );
};

export default App;
