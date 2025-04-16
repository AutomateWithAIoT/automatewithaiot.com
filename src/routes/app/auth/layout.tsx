import { component$, Slot } from "@builder.io/qwik";
// Layout for the login and signup pages
export default component$(() => {
  return (
    <>
      <section class="flex min-h-screen w-1/3 min-w-md flex-col items-center justify-center bg-gray-100">
        <Slot />
        <div>
          <h4 class="mb-4 text-2xl font-bold">
            Welcome to Smart Home Solution
          </h4>
          <p class="mt-4 text-lg">
            Experience the future of home automation with AI-powered features.
          </p>
        </div>
      </section>
    </>
  );
});
