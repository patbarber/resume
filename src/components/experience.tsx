import type { Component } from "solid-js";
import { createSignal, For } from "solid-js";
import images from "./images";
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
    {
      name: "Vood",
      icons: [images.typescript, react],
      postion: "Front end developer",
    },
    {
      name: "Department of Education, Skills and Employment",
      icons: [javascript, vuejs, dotnet],
      postion: "Fullstack developer",
    },
    {
      name: "Services Australia",
      icons: [typescript, angularjs, java],
      postion: "Fullstack developer",
    },
    {
      name: "Aurabox",
      icons: [typescript, react, electron],
      postion: "Front end developer",
    },
  ]);

  return (
    <div class="h-screen">
      <div class="w-fit m-auto">
      <p class="w-fit text-4xl mb-4 m-auto">Experience</p>

        <div class="m-auto overflow-x-auto grid gap-4  max-w-3xl">
          <For each={experience()}>
            {(experience, i) => (
              <div class="hover:bg-neutral-900">
                <p class="text-2xl">{experience.name}</p>
                <p>Role: {experience.postion}</p>
                <p class="">Technology used: </p>
                <div class="grid grid-rows-1 grid-flow-col w-fit space-x-1">
                  <For each={experience.icons}>
                    {(icon, i) => <img class="h-12" src={icon} />}
                  </For>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>
    </div>
  );
};

export default Experience;
