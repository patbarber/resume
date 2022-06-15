import type { Component } from "solid-js";
import { createSignal, For } from "solid-js";
import javascript from '../assets/skills/javascript-plain.svg'
import typescript from '../assets/skills/typescript-plain.svg'
import dotnet from '../assets/skills/dot-net-plain-wordmark.svg'
import java from '../assets/skills/java-plain.svg'
import react from '../assets/skills/react-original.svg'
import vuejs from '../assets/skills/vuejs-original.svg'
import angularjs from '../assets/skills/angularjs-original.svg'
import electron from '../assets/skills/electron-original.svg'

const Content: Component = () => {
  const [skills, setSkills] = createSignal([
    { name: "Javascript", icon:  javascript},
    { name: "Typescript", icon:  typescript},
    { name: "C#", icon: dotnet },
    { name: "Java", icon:  java},
    { name: "React", icon: react },
    { name: "Vuejs", icon: vuejs },
    { name: "Angular", icon:  angularjs},
    { name: "Electron", icon:  electron},
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
