import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export const ContactUs = component$(() => {
  return (
    <>
      <section class="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        {/* eslint-disable-next-line qwik/jsx-img */}
        <img
          src="./hero.png"
          alt="Hero Image"
          width={10}
          height={10}
          class="mb-4 h-48 w-48 rounded-full"
        />
        <h1 class="mb-4 text-4xl font-bold">Contact Us</h1>
        <p class="mt-4 text-lg">We would love to hear from you!</p>
        <p class="mt-2 text-lg">Please fill out the form below.</p>
      </section>
      <section class="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        <form class="mt-6 w-full max-w-md space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            class="w-full rounded border p-2"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            class="w-full rounded border p-2"
            required
          />
          <textarea
            placeholder="Your Message"
            class="w-full rounded border p-2"
            required
          ></textarea>
          <button class="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Send Message
          </button>
        </form>
      </section>
    </>
  );
});
export default ContactUs;
export const head: DocumentHead = {
  title: "Contact Us",
  meta: [
    {
      name: "description",
      content: "Contact us for any inquiries or support.",
    },
  ],
};
