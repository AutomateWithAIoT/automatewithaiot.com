import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
// About us page with 2 sections with descriptions of the company and the team there should be 2 images for those sections
export const About = component$(() => {
  return (
    <>
      <section class="flex flex-col items-center justify-center bg-emerald-100 p-4 pt-64 pb-48">
        <h1 class="mb-4 text-4xl font-bold">About Us</h1>
        <p class="mt-4 text-lg">
          We are a leading company in smart home solutions.
        </p>
        <p class="mt-2 text-lg">
          Our mission is to provide innovative and user-friendly products.
        </p>
      </section>
      <section class="flex min-h-screen flex-row items-center justify-around space-y-10 space-x-10 bg-emerald-50 p-4 md:flex-row">
        <img
          src="./team.jpg"
          alt="Team Image"
          width={10}
          height={10}
          class="mb-4 h-full w-1/2 rounded-full"
        />
        <p class="mt-4 h-8/12 w-1/2 px-12 text-justify text-lg font-light">
          Meet our dedicated team of professionals. We are committed to
          delivering the best service.
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
      content: "Learn more about our company and team.",
    },
  ],
};
