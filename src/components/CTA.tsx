import { component$ } from "@builder.io/qwik";

export const CTA = component$(() => {
  return (
    <section class="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      {/* eslint-disable-next-line qwik/jsx-img */}
      <img
        src="./hero.png"
        alt="Hero Image"
        width={10}
        height={10}
        class="mb-4 h-48 w-48 rounded-full"
      />
      <h1 class="mb-4 text-4xl font-bold">AI powered Smart Home Solution</h1>
      <p class="mt-4 text-lg">Welcome to our Smart Home Solution!</p>
      <p class="mt-2 text-lg">
        Experience the future of home automation with AI-powered features.
      </p>
      <button class="mt-6 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
        Get a Quote
      </button>
    </section>
  );
});
