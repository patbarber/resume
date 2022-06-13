import type { Component } from "solid-js";
import { createSignal, For } from "solid-js";

const Content: Component = () => {
  const [skills, setSkills] = createSignal([
    { name: "Javascript", icon: "javascript-plain.svg" },
    { name: "Typescript", icon: "typescript-plain.svg" },
    { name: "C#", icon: "dot-net-plain-wordmark.svg" },
    { name: "Java", icon: "java-plain.svg" },
    { name: "React", icon: "react-original.svg" },
    { name: "Vuejs", icon: "vuejs-original.svg" },
    { name: "Angular", icon: "angularjs-original.svg" },
    { name: "Electron", icon: "electron-original.svg" },
  ]);

  const [connect, setConnect] = createSignal([
    { name: "Github", icon: "github-original.svg", link: "https://github.com/patbarber" },
    { name: "Linkedin", icon: "linkedin-original.svg", link: "https://www.linkedin.com/in/patrick-barber-326996146/" },
  ]);

  return (
    <div class="h-screen font-mono">
      <p class="m-auto w-fit text-4xl mb-4">Skills</p>
      <div class="grid grid-cols-1 md:grid-cols-2 m-auto w-fit text-center">
        <For each={skills()}>
          {(skill, i) => (
            <div class="m-2 text-xl grid grid-cols-2">
              <img class="h-12" src={`./src/assets/skills/${skill.icon}`} />
              <p class="m-auto">{skill.name}</p>
            </div>
          )}
        </For>
      </div>
      <div>
        <p class="m-auto w-fit text-4xl mt-4 mb-4">Connect with me</p>
        <div class="grid grid-cols-1 md:grid-cols-2 m-auto w-fit text-center">
          <For each={connect()}>
            {(social, i) => (
              <a href={`${social.link}`} target="_blank">
                <div class="m-2 text-xl grid grid-cols-2">
                  <img
                    class="h-12"
                    src={`./src/assets/socials/${social.icon}`}
                  />
                  <p class="m-auto">{social.name}</p>
                </div>
              </a>
            )}
          </For>
        </div>
      </div>
    </div>
  );
};

export default Content;
