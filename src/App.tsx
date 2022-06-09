import type { Component } from "solid-js";
import Header from "./components/header";
import Content from "./components/content";


const App: Component = () => {
  return (
    <div class="container m-auto">
      <Header></Header>
      <Content></Content>
   
    </div>
  );
};

export default App;
