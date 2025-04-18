import { component$ } from "@builder.io/qwik";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  theme?: "light" | "dark";
}

export const ButtonClick = component$<ButtonProps>((props) => {
  return (
    <button
      class={
        "z-20 cursor-pointer rounded-full border-2 px-12 py-4 transition-colors duration-300 " +
        (props.theme === "dark"
          ? "border-emerald-950 bg-emerald-950 text-neutral-50 hover:bg-neutral-50 hover:text-emerald-950"
          : "border-neutral-50 bg-neutral-50 text-emerald-950 hover:border-emerald-950 hover:bg-emerald-950 hover:text-neutral-50")
      }
      onClick$={props.onClick && props.onClick}
    >
      {props.text}
    </button>
  );
});
