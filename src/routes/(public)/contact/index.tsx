import { $, component$, useSignal } from "@builder.io/qwik";
import { useLocation, type DocumentHead } from "@builder.io/qwik-city";
import FaqItem from "~/components/FaqItem";
// import { Resend } from "resend";

const faqList = 
  [
    {
      "question": "In terms of conventional home automation, how does your AI-powered smart home automation solution different?",
      "answer": "By employing artificial intelligence to study user behavior, anticipate needs, and make intelligent choices, our solution goes beyond simple automation. It is more adaptable than conventional systems and improves comfort, security, and energy efficiency without requiring human input."
    },
    {
      "question": "Can you adapt your smart home automation platform to other kinds of properties?",
      "answer": "Of course. Any of the types of space—residential, commercial, or multi-unit—our system can be customized to meet particular demands. We provide scalable integration with customized automation programs for security, lighting, and climate management, among other things."
    },
    {
      "question": "How safe is your home automation system that uses AI?",
      "answer": "Our first concern is security. To guarantee that your data and devices are always completely safe, our system makes use of full encryption, multi-layer authentication, and constant threat detection."
    },
    {
      "question": "Is it possible for your automation system to lower energy and operating costs?",
      "answer": "Yes, by identifying occupancy trends and adjusting device automation accordingly, our AI systems improve energy use. Over time, this saves a lot of money for both individuals and companies that manage several properties."
    },
    {
      "question": "What sort of post-installation assistance and upkeep do you offer?",
      "answer": "We provide remote diagnostics, frequent system updates, and round-the-clock technical assistance. For certain continuous maintenance, our business clients additionally take use of active maintenance programs and committed account managers."
    },
    {
      "question": "How can your solution work with the systems and smart devices that are already in place?",
      "answer": "Numerous smart home appliances and third-party systems can be seamlessly integrated with our platform. To save your current investments and improve functionality, we guarantee compatibility with well-known brands and technology."
    }
  ]
  


export const ContactUs = component$(() => {
  const location = useLocation();
  const qparams = new URLSearchParams(location.url.search);
  const selectedIndex = useSignal<number|null>(null);
  const name = useSignal<string>("");
  const email = useSignal<string>("");
  const message = useSignal<string>("Subject : "+qparams.get("message")==null?"":qparams.get("message")!);
 
  return (
    <>
      <section class="flex min-h-screen flex-col md:flex-row items-center justify-center bg-white">
        {/* eslint-disable-next-line qwik/jsx-img */}
        <img
          src="/Contact_1.webp"
          alt="Hero Image"
          width={10}
          height={10}
          class="mb-4 h-72 object-cover rounded-4xl mx-12 my-4 w-full md:w-2/5 "
        />
        <div class="flex flex-col w-full md:w-3/5 items-center justify-center space-y-4 px-12 py-4">
        <h2 class="rounded-4xl bg-neutral-300 px-4 py-1 text-sm">FAQ</h2>

        {faqList.map((faq) => {
          return (
            <FaqItem
            key={faqList.indexOf(faq)}
              question={faq.question}
              answer={faq.answer}
              onClick={$(() => {
                if (selectedIndex.value === faqList.indexOf(faq)) {
                  selectedIndex.value = null;
                } else {
                  selectedIndex.value = faqList.indexOf(faq);
                }
              })}
              state={selectedIndex.value === faqList.indexOf(faq) ? "expanded" : "collapsed"}
              />
            );
          })}
        
          </div>
        
      </section>
      <section class="flex flex-col items-center justify-center bg-white">
        <div class="flex w-full flex-col items-center space-y-4 bg-emerald-50 pt-64 [clip-path:ellipse(70%_70%_at_50%_100%)] sm:[clip-path:ellipse(55%_80%_at_50%_100%)] md:[clip-path:ellipse(55%_80%_at_50%_100%)]">
        <h2 class="rounded-4xl bg-neutral-300 px-4 py-1 text-sm">Contact Us</h2>
        <p class="text-center text-lg text-shadow-emerald-950">Please fill the below form to get in touch with us.<br/> We will get back to you as soon as possible.</p>

        </div>
        <div class="items-scratch flex w-full flex-col justify-center space-y-10 space-x-10 bg-emerald-50 px-8 pt-20 pb-40 md:flex-row">
          <div class="bg-fixeed w-full rounded-4xl border border-emerald-300 bg-[url(/Contact_2.webp)] bg-cover bg-center bg-no-repeat object-contain p-4 md:w-1/2"></div>
          <form class="itmes-center w-full flex-col mx-auto flex justify-center space-y-4 px-10 md:w-1/2" action="https://getform.io/f/bjjmgnjb" method="POST">
            <input
              type="text"
              placeholder="Your Name"
              class="w-full rounded-lg border p-2"
              required
              name="name"
              bind:value={name}
            />
            <input
              type="email"
              placeholder="Your Email"
              class="w-full rounded-lg border p-2"
              required
              name="email"
              bind:value={email}
            />
            <textarea
              placeholder="Your Message"
              class="w-full rounded-lg border p-2"
              required
              name="message"
              bind:value={message}
            ></textarea>
            <button type="submit" class="rounded-lg bg-emerald-950 px-4 py-2 text-white hover:bg-emerald-700 transition duration-300 ease-in-out">
              Submit
            </button>
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
