import { $, component$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { ButtonClick } from "~/components/buttonClick";

export const ContactUs = component$(() => {
  const formData = useStore({
    name: "",
    email: "",
    message: "",
  });
  return (
    <>
      <section class="flex min-h-screen flex-col items-center justify-center bg-white">
        {/* eslint-disable-next-line qwik/jsx-img */}
        <img
          src="./hero.png"
          alt="Hero Image"
          width={10}
          height={10}
          class="mb-4 h-48 w-full rounded-4xl px-12 py-4"
        />
        <h2 class="rounded-4xl bg-neutral-300 px-4 py-1 text-sm">Contact Us</h2>
        <p class="mt-4 text-lg">We would love to hear from you!</p>
        <p class="mt-2 text-lg">Please fill out the form below.</p>
      </section>
      <section class="flex flex-col items-center justify-center bg-white">
        <div class="flex w-full flex-col items-center space-y-4 bg-emerald-50 pt-64 [clip-path:ellipse(70%_70%_at_50%_100%)] sm:[clip-path:ellipse(55%_80%_at_50%_100%)] md:[clip-path:ellipse(55%_80%_at_50%_100%)]"></div>
        <div class="items-scratch flex w-full flex-col justify-center space-y-10 space-x-10 bg-emerald-50 px-8 pt-20 pb-40 md:flex-row">
          <div class="bg-fixeed w-full rounded-4xl border border-emerald-300 bg-[url('/contact.png')] bg-cover bg-center bg-no-repeat object-contain p-4 md:w-1/2"></div>
          <form class="itmes-center w-full flex-col mx-auto flex justify-center space-y-4 px-10 md:w-1/2">
            <input
              type="text"
              placeholder="Your Name"
              class="w-full rounded-lg border p-2"
              required
              onInput$={(e) => {
                formData.name = (e.target as HTMLInputElement).value;
              }}
              value={formData.name}
            />
            <input
              type="email"
              placeholder="Your Email"
              class="w-full rounded-lg border p-2"
              required
              onInput$={(e) => {
                formData.email = (e.target as HTMLInputElement).value;
              }}
              value={formData.email}
            />
            <textarea
              placeholder="Your Message"
              class="w-full rounded-lg border p-2"
              required
              onInput$={(e) => {
                formData.message = (e.target as HTMLInputElement).value;
              }}
              value={formData.message}
            ></textarea>
            <ButtonClick
              text="Submit"
              theme="dark"
              onClick={$(async () => {
                try {
                  const response = await fetch("/api/send-email", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                  });
                  const result = await response.json();
                  if (result.success) {
                    alert("Email sent successfully!");
                    formData.name = "";
                    formData.email = "";
                    formData.message = "";
                  }else{
                    throw new Error(result.error);
                  }
                } catch (error) {
                  console.error("Error during form submission:", error);
                  alert(
                    "An error occurred while submitting the form. Please try again.",
                  );
                }
              })}
            />
          </form>
        </div>
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
