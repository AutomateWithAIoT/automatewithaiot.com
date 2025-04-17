import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Button } from "~/components/button";
import { CTA } from "~/components/CTA";
export default component$(() => {
  return (
    <>
      <section class="relative mx-8 mt-24 flex min-h-screen flex-col items-center justify-start overflow-clip rounded-[55px] bg-gray-900 pt-32">
        <img
          // eslint-disable-next-line qwik/jsx-img
          src="/hero.jpg"
          alt="Hero Image"
          width={1000}
          height={1000}
          class="absolute top-0 right-0 bottom-0 left-0 z-10 h-full w-full object-cover opacity-50"
        />
        <h1 class="z-20 mb-4 text-center font-sans text-7xl font-bold text-emerald-50">
          AI powered Smart Home Solution
        </h1>
        <p class="z-20 mt-4 text-lg text-emerald-50">
          Welcome to our Smart Home Solution!
        </p>
        <p class="z-20 mt-2 pb-8 text-lg text-emerald-50">
          Experience the future of home automation with AI-powered features.
        </p>
        <Button text="Get Started" theme="light" link="/app/auth/Login" />
      </section>
      {/* Features section with multiple card ordered in a masionary structure on the left side and picture with features title at the right*/}
      <section class="xs:[clip-path:ellipse(70%_70%_at_50%_100%)] relative flex flex-row items-center justify-between bg-white p-8 pt-60 sm:[clip-path:ellipse(60%_80%_at_50%_100%)] md:[clip-path:ellipse(50%_90%_at_50%_100%)]">
        <div class="z-10 my-auto flex w-full flex-col items-center space-y-4">
          <h2 class="text-sm ">Features</h2>
          <div class="flex h-56 flex-col flex-wrap items-center justify-center space-y-4 space-x-4">
            <div class="rounded-lg bg-white p-4 shadow-md">
              <h3 class="text-xl font-semibold">Feature 1</h3>
              <p class="mt-2 text-gray-600">Description of Feature 1.</p>
            </div>
            <div class="rounded-lg bg-white p-4 shadow-md">
              <h3 class="text-xl font-semibold">Feature 2</h3>
              <p class="mt-2 text-gray-600">Description of Feature 2.</p>
            </div>
            <div class="rounded-lg bg-white p-4 shadow-md">
              <h3 class="text-xl font-semibold">Feature 3</h3>
              <p class="mt-2 text-gray-600">Description of Feature 3.</p>
            </div>
          </div>
        </div>
        <img
          src="./features.png"
          alt="Features Image"
          width={10}
          height={10}
          class="absolute top-0 right-0 bottom-0 z-0 h-full w-full rounded-lg object-contain"
        />
      </section>
      {/* Use cases section with 3 sample use cases if Smart Home automation with IoT  */}
      <section class="flex flex-col items-center justify-center bg-gray-100 p-8">
        <h2 class="mb-4 text-3xl font-bold">Use Cases</h2>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div class="rounded-lg bg-white p-4 shadow-md">
            <h3 class="text-xl font-semibold">Use Case 1</h3>
            <p class="mt-2 text-gray-600">
              Description of Use Case 1. Automate your home lighting with smart
              bulbs.
            </p>
          </div>
          <div class="rounded-lg bg-white p-4 shadow-md">
            <h3 class="text-xl font-semibold">Use Case 2</h3>
            <p class="mt-2 text-gray-600">
              Description of Use Case 2. Monitor your home security with smart
              cameras.
            </p>
          </div>
          <div class="rounded-lg bg-white p-4 shadow-md">
            <h3 class="text-xl font-semibold">Use Case 3</h3>
            <p class="mt-2 text-gray-600">
              Description of Use Case 3. Control your home temperature with
              smart thermostats.
            </p>
          </div>
        </div>
      </section>
      {/* FAQ section with accordtion */}
      <section class="flex flex-col items-center justify-center bg-gray-200 p-8">
        <h2 class="mb-4 text-3xl font-bold">Frequently Asked Questions</h2>
        <div class="accordion w-full max-w-md">
          <div class="accordion-item">
            <input type="checkbox" id="faq1" class="accordion-toggle" />
            <label for="faq1" class="accordion-label">
              What is Smart Home Automation?
            </label>
            <div class="accordion-content">
              Smart home automation refers to the use of technology to control
              and automate various household functions, such as lighting,
              heating, security, and appliances.
            </div>
          </div>
          {/* Add more FAQ items here */}
        </div>
      </section>
      <CTA />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
