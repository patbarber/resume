import type { Component } from "solid-js";
import { createSignal, For, createMemo } from "solid-js";
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
import querySnapshot from '../api/api'
import { async } from "@firebase/util";
import getData from "../api/api";
export type Exp = {
  name: string;
  icons: string[];
  postion: string;
  description: string;
  dates: string;
  company: string;
};

const Experience: Component = () => {
  const [experience, setExperience] = createSignal<Exp[]>([
    {
      name: "Vood",
      icons: [images.typescript, react],
      postion: "Front end developer",
      description: "ecommerce",
      dates: "at some point",
      company: "annex",
    },
    {
      name: "Department of Education, Skills and Employment",
      icons: [javascript, vuejs, dotnet],
      postion: "Fullstack developer",
      description: "ecommerce333",
      dates: "at some point",
      company: "annex",
    },
    {
      name: "Services Australia",
      icons: [typescript, angularjs, java],
      postion: "Fullstack developer",
      description: "ecommerce22",
      dates: "at some point",
      company: "Services",
    },
    {
      name: "Aurabox",
      icons: [typescript, react, electron],
      postion: "Front end developer",
      description: "ecommerce1212",
      dates: "at some point",
      company: "annex",
    },
  ]);
  const [selectedExp, setSelectedExp] = createSignal<Exp>();

  const select = async (exp: any) => {
    await getData();
    return setSelectedExp(exp);
  };

  return (
    <div class="h-screen">
      <div class=" m-auto">
        <p class="w-fit text-4xl mb-4 m-auto">Professional experience</p>

        <div class="m-auto p-4 grid grid-cols-3 gap-4">
          <div class="col-span-1">
            <p class="w-fit text-2xl mb-4 m-auto">Projects</p>

            <For each={experience()}>
              {(exp, i) => (
                <div
                  onclick={() => select(exp)}
                  class="hover:bg-neutral-900 cursor-pointer"
                >
                  <p class="text-2xl">{exp.name}</p>
                  <p>Role: {exp.postion}</p>
                  <p class="">Technology used: </p>
                  <div class="grid grid-rows-1 grid-flow-col w-fit space-x-1">
                    <For each={exp.icons}>
                      {(icon, i) => <img class="h-12" src={icon} />}
                    </For>
                  </div>
                </div>
              )}
            </For>
          </div>
          <div class="bg-neutral-900 col-span-2">
            <p class="w-fit text-2xl mb-4 m-auto">Click a project to see more information</p>

            <p class="text-2xl">{selectedExp()?.name}</p>
            <p>company: {selectedExp()?.company}</p>
            <p>Dates: {selectedExp()?.dates}</p>
            <p>Project Description: {selectedExp()?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
