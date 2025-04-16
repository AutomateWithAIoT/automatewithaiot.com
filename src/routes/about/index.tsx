import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
// About us page with 2 sections with descriptions of the company and the team there should be 2 images for those sections
export const About = component$(() => {
  return (
    <>
      <section class="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
        <h1 class="mb-4 text-4xl font-bold">About Us</h1>
        <p class="mt-4 text-lg">
          We are a leading company in smart home solutions.
        </p>
        <p class="mt-2 text-lg">
          Our mission is to provide innovative and user-friendly products.
        </p>
        <img
          src="./about-us.jpg"
          alt="About Us Image"
          width={10}
          height={10}
          class="mb-4 h-48 w-48 rounded-full"
        />
      </section>
      <section class="flex min-h-screen flex-col items-center justify-center bg-gray-200 p-4">
        <h1 class="mb-4 text-4xl font-bold">Our Team</h1>
        <p class="mt-4 text-lg">Meet our dedicated team of professionals.</p>
        <p class="mt-2 text-lg">
          We are committed to delivering the best service.
        </p>
        <img
          src="./team.jpg"
          alt="Team Image"
          width={10}
          height={10}
          class="mb-4 h-48 w-48 rounded-full"
        />
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
