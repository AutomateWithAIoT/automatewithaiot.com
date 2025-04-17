import { component$, useSignal } from "@builder.io/qwik";

interface FeatureCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const FeatureCard = component$<FeatureCardProps>((props) => {
  const buttonStatus = useSignal(false);

  return (
    <div class="relative flex h-full flex-col items-center justify-end overflow-hidden rounded-4xl bg-white p-4 shadow-md">
      {/* eslint-disable-next-line qwik/jsx-img */}
      <img
        src={props.imageUrl}
        alt={props.title}
        class="absolute top-0 left-0 z-0 h-full w-full object-cover"
      />
      <div
        class={`relative z-10 w-full rounded-3xl bg-emerald-950 px-4 py-2 text-emerald-50 transition-all duration-500 ease-in select-none flex flex-col justify-around ${
          buttonStatus.value ? "h-full" : "h-12"
        }`}
        style={{}}
        onMouseOver$={() => (buttonStatus.value = true)}
        onMouseOut$={() => (buttonStatus.value = false)}
      >
        <h3 class="text-center text-xl font-semibold">{props.title}</h3>
        {buttonStatus.value && (
          <p class="text-center text-white transition-opacity duration-500 ease-in-out">
            {props.description}
          </p>
        )}
      </div>
    </div>
  );
});
