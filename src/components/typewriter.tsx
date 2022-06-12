import { splitProps } from "solid-js";

export default function Typerwriter(props) {
  return (
    <>
      <div class="w-fit">
        <p class="typed-out text-2xl md:text-4xl text-white font-mono">~ {props.text}</p>
      </div>
    </>
  );
}
