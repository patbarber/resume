import type { Component } from "solid-js";
import { createSignal, For } from "solid-js";

import linkedin from "../assets/socials/linkedin-original.svg";
import javascript from "../assets/skills/javascript-plain.svg";
import typescript from "../assets/skills/typescript-plain.svg";
import dotnet from "../assets/skills/dot-net-plain-wordmark.svg";
import java from "../assets/skills/java-plain.svg";
import react from "../assets/skills/react-original.svg";
import vuejs from "../assets/skills/vuejs-original.svg";
import angularjs from "../assets/skills/angularjs-original.svg";
import electron from "../assets/skills/electron-original.svg";

const Experience: Component = () => {
  const [experience, setExperience] = createSignal([
    { name: "Vood", icons: [typescript, react] },
    { name: "Department of Education, Skills and Employment", icons: [javascript, vuejs,] },
    { name: "Services Australia", icons: [typescript, angularjs, java] },
    { name: "Aurabox", icons: [typescript, react, electron] },
  ]);

  return (
    <div class="p-4 overflow-x-auto grid grid-cols-4 grid-rows-1">
      <For each={experience()}>
        {(experience, i) => (
          <div>
            <p class="text-2xl mb-2">{experience.name}</p>
           {/*  <p>Role: {experience.postions}</p> */}
            <p class="mb-2">Skills used: </p>
            <div class="grid grid-rows-1 grid-flow-col w-fit space-x-1">
              <For each={experience.icons}>
                {(icon, i) => <img class="h-12" src={icon} />}
              </For>
            </div>
          </div>
        )}
      </For>
    </div>
  );
};

export default Experience;
