import { $, component$, useSignal, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { ButtonClick } from "~/components/buttonClick";
import FaqItem from "~/components/FaqItem";
import { Resend } from "resend";

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
  const selectedIndex = useSignal<number|null>(null);
  const formData = useStore({
    name: "",
    email: "",
    message: "",
  });
  return (
    <>
      <section class="flex min-h-screen flex-col md:flex-row items-center justify-center bg-white">
        {/* eslint-disable-next-line qwik/jsx-img */}
        <img
          src="./hero.png"
          alt="Hero Image"
          width={10}
          height={10}
          class="mb-4 h-48 rounded-4xl px-12 py-4 w-full md:w-1/3 "
        />
        <div class="flex flex-col w-full md:w-2/3 items-center justify-center space-y-4 px-12 py-4">
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
                //   if (!formData.name || !formData.email || !formData.message) {
                //     alert("Please fill in all fields.");
                //     return;
                //   }
                //   const response = await fetch("/api/contact", {
                //     method: "POST",
                //     headers: {
                //       "Content-Type": "application/json",
                //     },
                //     body: JSON.stringify(formData),
                //   });
                //   const result = await response.json();
                //   if (result.success) {
                //     alert("Email sent successfully!");
                //     formData.name = "";
                //     formData.email = "";
                //     formData.message = "";
                //   }else{
                //     throw new Error(result.error);
                //   }
                // } catch (error) {
                //   console.error("Error during form submission:", error);
                //   alert(
                //     "An error occurred while submitting the form. Please try again.",
                //   );

                const resend = new Resend(import.meta.env.PUBLIC_RESEND_API_KEY); // Create instance inside the scope
                await resend.emails.send({
                  from: "dev@automatewithaiot.com",
                  to: "support@automatewithaiot.com",
                  subject: `New Contact Form Submission from ${formData.name}`,
                  html: `
                    <h1>New Contact Form Submission</h1>
                    <p><strong>Name:</strong> ${formData.name}</p>
                    <p><strong>Email:</strong> ${formData.email}</p>
                    <p><strong>Message:</strong> ${formData.message}</p>
                  `,
                });
                formData.name = "";
                formData.email = "";
                formData.message = "";
                alert("Email sent successfully!");
                
              } catch (error) {
                console.error("Error during form submission:", error);
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
