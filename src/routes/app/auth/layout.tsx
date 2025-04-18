import { component$, Slot } from "@builder.io/qwik";
// Layout for the login and signup pages
export default component$(() => {
  return (
    <>
      <section class="mx-auto mt-32 mb-12 flex w-1/3 min-w-md flex-col justify-center rounded-4xl bg-white bg-linear-to-b from-emerald-50 to-emerald-200 p-12 shadow-md">
        <div>
          <h4 class="mb-4 text-center text-2xl font-bold">
            Welcome to Smart Home Solution
          </h4>
          <p class="mt-4">
            Experience the future of home automation with AI-powered features.
          </p>
        </div>
        <Slot />
      </section>
    </>
  );
});
