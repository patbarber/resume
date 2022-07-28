import { Component, createSignal, Show } from "solid-js";
import Header from "./components/header";
import Content from "./components/content";
import About from "./components/about";
import Experience from "./components/experience";
import images from "./components/images";
const App: Component = () => {
  const [showButton, setShowButton] = createSignal(true);

  window.addEventListener("scroll", function (e) {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 100
    ) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  });
  const scroll = () => {
    window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth",
    });
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 100
    ) {
      setShowButton(false);
    }
  };

  return (
    <div class="container m-auto flex flex-col">
      <Header></Header>
      <About></About>
      <Experience></Experience>

      <div class=" fixed w-full left-0 bottom-4 max-w-full animate-bounce flex justify-center">
        <Show when={showButton()}>
          <button onclick={scroll}>
            <img class="h-12 w-12" src={images.downArrow} />
          </button>
        </Show>
      </div>
    </div>
  );
};

export default App;
