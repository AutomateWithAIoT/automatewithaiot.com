import { component$, Slot } from "@builder.io/qwik";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
// Layout for the login and signup pages
export default component$(() => {
  return (
    < div class="max-w-[1440px] mx-auto">
    <Header/>
      <section class="mx-auto mt-32 mb-12 flex w-1/3 min-w-md flex-col justify-center rounded-4xl bg-white bg-linear-to-b from-emerald-50 to-emerald-200 p-12 shadow-md">
        <div>
          <h4 class="mb-4 text-center text-2xl font-bold">
            Welcome to Smart Home Solution
          </h4>
          <p class="mt-4 text-center">
            Experience the future of home automation with AI-powered features.
          </p>
        </div>
        <Slot />
      </section>
      <Footer/>
    </div>
  );
});
