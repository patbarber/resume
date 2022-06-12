import { splitProps } from "solid-js";

export default function Typerwriter(props) {
  return (
    <>
      <div class="w-fit">
        <p class="typed-out text-2xl text-white">~ {props.text}</p>
      </div>
    </>
  );
}
