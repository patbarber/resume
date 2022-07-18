import type { Component } from "solid-js";
import { createSignal, For } from "solid-js";
import github from "../assets/socials/github-original.svg";
import linkedin from "../assets/socials/linkedin-original.svg";
import email from "../assets/socials/email-svgrepo-com.svg";
import Experience from "./experience";

const About: Component = () => {
  const [connect, setConnect] = createSignal([
    {
      name: "Github",
      icon: github,
      link: "https://github.com/patbarber",
    },
    {
      name: "Linkedin",
      icon: linkedin,
      link: "https://www.linkedin.com/in/patrick-barber-326996146/",
    },
    { 
      name: "Email@email.com",
      icon: email,
      link: "mailto:email@email.com",
    },
  ]);

  return (
    <div class="h-screen">
      <div class="w-fit m-auto">
        <div class="grid grid-cols-1 gap-y-4 md:grid-cols-2 m-auto w-fit">
          <div class="">
            <p class="w-fit text-4xl mb-4 m-auto">About Me</p>
            <div class="font-mono p-4">
              I am a full stack developer and front end specialist currently
              working at Annex Digital as a consultant. I am experienced in
              working in a range of multidisciplinary teams of various sizes
              from large government organisations to small businesses.
            </div>
          </div>
          <div>
            <p class="w-fit text-4xl mb-4 m-auto">Connect with me</p>
            <div class="grid grid-cols-1  m-auto p-4 max-w-fit">
              <For each={connect()}>
                {(social, i) => (
                  <a href={`${social.link}`} target="_blank">
                    <div class="m-2 text-xl grid grid-cols-2">
                      <img
                        class="h-12 m-auto"
                        src={social.icon}
                      />
                      <p class="w-full text-left m-auto">{social.name}</p>
                    </div>
                  </a>
                )}
              </For>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default About;
