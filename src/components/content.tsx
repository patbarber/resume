import type { Component } from "solid-js";
import { createSignal, For } from "solid-js";
import js from '../assets/skills/javascript-plain.svg'

const Content: Component = () => {
  const [skills, setSkills] = createSignal([
    { name: "Javascript", icon: js },
    { name: "Typescript", icon: "typescript-plain.svg" },
    { name: "C#", icon: "dot-net-plain-wordmark.svg" },
    { name: "Java", icon: "java-plain.svg" },
    { name: "React", icon: "react-original.svg" },
    { name: "Vuejs", icon: "vuejs-original.svg" },
    { name: "Angular", icon: "angularjs-original.svg" },
    { name: "Electron", icon: "electron-original.svg" },
  ]);


  return (
    <div class="h-screen font-mono">
      <p class="m-auto w-fit text-4xl mb-4">Skills</p>
      <div class="grid grid-cols-1 md:grid-cols-2 m-auto w-fit text-center">
        <For each={skills()}>
          {(skill, i) => (
            <div class="m-2 text-xl grid grid-cols-2">
              <img class="h-12" src={skill.icon} />
              <p class="m-auto">{skill.name}</p>
            </div>
          )}
        </For>
      </div>
     
    </div>
  );
};

export default Content;
