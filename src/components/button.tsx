import { component$ } from "@builder.io/qwik";

interface ButtonProps {
  text: string;
  link?: string;
  theme?: "light" | "dark";
}

export const Button = component$<ButtonProps>((props) => {
  return (
    <button
      class={
        "z-20 cursor-pointer rounded-full border-2 px-12 py-4 transition-colors duration-300 " +
        (props.theme === "dark"
          ? "border-emerald-950 bg-emerald-950 text-neutral-50 hover:bg-neutral-50 hover:text-emerald-950"
          : "border-neutral-50 bg-white text-emerald-950 hover:border-emerald-950 hover:bg-emerald-950 hover:text-neutral-50")
      }
      onClick$={() => {
        if (props.link) {
          window.location.href = props.link;
        }
      }}
    >
      {props.text}
    </button>
  );
});
