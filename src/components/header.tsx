import type { Component } from "solid-js";
import Typerwriter from "./typewriter";

const Header: Component = () => {
  return (
    <div class="grid h-screen">
      <div class="w-fit m-auto">
        <Typerwriter text="Patrick Barber Resume"></Typerwriter>
        <Typerwriter text="Web Developer"></Typerwriter>
      </div>
    </div>
  );
};

export default Header;
