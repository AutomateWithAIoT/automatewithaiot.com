import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
// This page is to tell the customers the benefits if automation, expalin the automation, the use of IoT in automation and how to make the lives easiear with the smart home solution automation
export const WHy = component$(() => {
  return (
    <>
      <section class="flex flex-col items-center justify-center bg-gray-100 p-8">
        <h1 class="mb-4 text-4xl font-bold">Why Smart Home Automation?</h1>
        <p class="mt-4 text-lg">
          Smart home automation is the future of living. It offers convenience,
          security, and energy efficiency, making your life easier and more
          comfortable.
        </p>
        <p class="mt-2 text-lg">
          With IoT (Internet of Things) technology, you can control your home
          devices from anywhere, ensuring peace of mind and a smarter lifestyle.
        </p>
      </section>
      <section class="flex flex-col items-center justify-center bg-gray-100 p-8">
        <h2 class="mb-4 text-3xl font-bold">
          Benefits of Smart Home Automation
        </h2>
        <ul class="list-disc space-y-2 text-lg">
          <li>Convenience: Control your devices from anywhere.</li>
          <li>Security: Monitor your home in real-time.</li>
          <li>Energy Efficiency: Save on energy bills.</li>
          <li>Comfort: Create personalized environments.</li>
        </ul>
      </section>
      <section class="flex flex-col items-center justify-center bg-gray-100 p-8">
        <h2 class="mb-4 text-3xl font-bold">How to Get Started</h2>
        <p class="mt-4 text-lg">
          Getting started with smart home automation is easy. Choose the devices
          you want to automate, install them, and connect them to your home
          network. Then, use a mobile app or voice assistant to control your
          devices.
        </p>
        <p class="mt-2 text-lg">
          Explore our range of smart home devices and start your automation
          journey today!
        </p>
      </section>
      <section class="flex flex-col items-center justify-center bg-gray-100 p-8">
        <h2 class="mb-4 text-3xl font-bold">Conclusion</h2>
        <p class="mt-4 text-lg">
          Smart home automation is not just a trend; it's a lifestyle choice.
          Embrace the future of living with our smart home solutions and
          experience the difference it can make in your life.
        </p>
        <p class="mt-2 text-lg">
          For more information, visit our website or contact us today!
        </p>
      </section>
    </>
  );
});
export default WHy;
export const head: DocumentHead = {
  title: "Smart Home Solution - Why Smart Home Automation?",
  meta: [
    {
      name: "description",
      content: "Learn about the benefits of smart home automation.",
    },
  ],
};
