import { component$ } from "@builder.io/qwik";

interface UseCaseCardProps {
  title: string;
  tag: string;
  description: string;
  imageUrl: string;
}

export const UseCaseCard = component$<UseCaseCardProps>((props) => {
  return (
    <div class="relative flex h-full w-full flex-col items-center justify-end overflow-hidden rounded-4xl bg-white p-4 shadow-md">
      {/*  eslint-disable-next-line qwik/jsx-img */}
      <img
        src={props.imageUrl}
        alt={props.title}
        class="absolute top-0 left-0 z-0 h-full w-full object-cover"
      />
      <div class="relative bottom-0 left-0 z-10 w-full rounded-3xl px-4 py-2 text-emerald-50">
        <div class="w-fit rounded-full border border-emerald-50 bg-transparent px-4 py-2 backdrop:blur-3xl">
          <p>{props.tag}</p>
        </div>
        <h2 class="overflow-clip text-xl font-semibold">{props.title}</h2>
        <p class="max-w-4/5 overflow-clip text-sm text-white">
          {props.description}
        </p>
      </div>
    </div>
  );
});
