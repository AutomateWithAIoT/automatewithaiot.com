import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
// About us page with 2 sections with descriptions of the company and the team there should be 2 images for those sections
export const About = component$(() => {
  return (
    <>
      <section class="flex flex-col items-center justify-center bg-emerald-100 p-4 pt-64 pb-48">
        <h1 class="mb-4 text-4xl font-bold">About Us</h1>
        <p class="mt-4 text-lg text-center max-w-4/5">
        We Define Next Gen Automation Solutions That Upgrade Energy Efficiency, Security and Excellence.Through smart, connected ideas suited to modern lifestyles, our modern technology enables homeowners to effortlessly handle and optimize their living areas.
Our specialty is AI-driven smart home automation systems that change contemporary living. Our modern innovations provide consumers intelligent control, improved security, and energy-efficient operations by blending in seamlessly with common devices.
        </p>
        
      </section>
      <section class="flex min-h-screen flex-row items-center justify-around space-y-10 space-x-10 bg-emerald-50 p-4 md:flex-row">
        <img
          src="/About.webp"
          alt="Team Image"
          width={10}
          height={10}
          class="mb-4 h-full w-1/2 rounded-full"
        />
        <p class="mt-4 h-8/12 w-1/2 px-12 text-justify text-lg font-light">
        Our goal is to provide automated, customized interactions that adjust to each user's routines and preferences. Our modern technology redefines comfort and convenience in everything from lighting and climate control to surveillance and appliance management. We want to be at the forefront of smart living in the future, driven by a commitment to innovation, reliability, and client satisfaction.
        </p>
      </section>
    </>
  );
});
export default About;
export const head: DocumentHead = {
  title: "About Us",
  meta: [
    {
      name: "description",
      content: "Learn more about our AutomatewithAIoT.",
    },
  ],
};
