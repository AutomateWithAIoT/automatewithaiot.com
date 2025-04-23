import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { Button } from "./button";
import type { Blog } from "~/types/blog";

export const BlogSection = component$(() => {
  const blogs = useSignal<Blog[]>([
    {
      id: 1,
      title: "How AI-Powered Smart Home Automation is Transforming the Property Value Landscape",
      content:`<div><p>AI-powered home automation is more than just a convenience in today's technologically advanced world; it's a calculated investment that raises the real estate market's value. Smart automation technologies have become a potent differentiator as companies in the home construction and real estate sectors search for creative methods to draw clients and boost asset value. This blog examines how AI-powered smart home automation is changing the way real estate is valued, making homes more appealing to buyers, and creating new business opportunities.</p><h2>The New Real Estate Standard: Smart Home Automation</h2><p>Hardwood floors and granite countertops were once the best selling factors, but those days are long gone. Homebuyers of today look for properties with AI-enabled technologies like energy management programs, voice-activated assistants, security systems, smart lighting, and thermostats. These solutions greatly increase a property's perceived and actual worth in addition to improving comfort and efficiency. Agents and developers in the real estate industry that understand this change can command greater prices and quicker sales cycles.</p><h2>AI as a Strategy for Long-Term Investments</h2><p>From a commercial standpoint, incorporating AI into homes is about future-proofing investments rather than just technology. Homes with learning algorithms that adjust based on user behavior are viewed as more progressive and sustainable. Higher returns on investment, lower vacancy rates, and more appeal to all demographics—especially tech-savvy millennials and Gen Z buyers—are the results for real estate developers and investors.</p><h2>Cost Savings and Energy Efficiency: A Business Advantage</h2><p>Intelligent energy use is made possible by AI-driven automation, which modifies appliances, heating, and lighting according to usage trends. This results in cheaper utility costs for residences. It makes a strong case for companies by reducing operating expenses and environmental effects. Businesses can attract ESG-conscious investors and buyers by emphasizing eco-friendliness and efficiency when building or retrofitting homes using these technologies.</p><h2>Predictive Maintenance and Security: Boosting Confidence</h2><p>AI-powered smart security systems are able to identify faces, spot odd activity, and even anticipate security threats before they materialize. Predictive maintenance programs also notify users when systems or appliances require repair, reducing malfunctions and prolonging equipment life. This lowers post-sale liabilities and increases client satisfaction for real estate and property management companies.</p><h2>Innovative Revenue Streams and Business Models</h2><p>Service-based business models are made possible by smart houses. For example, businesses can provide subscription services for data analytics, device repair, and home monitoring. Automation experts and integrators can create SaaS models that guarantee recurrent revenue by adding value long after a house is sold.</p><h2>In Summary: A Business Necessity</h2><p>Smart home automation driven by AI is becoming a necessity for businesses, not a luxury. It raises the value of real estate, lowers operating expenses, and opens up new revenue streams. In a market that is changing quickly, real estate stakeholders who embrace this change will find themselves ahead of the curve.</p></div>`,
      tags: "Automation, PropTech, Sustainability",
      author: "Alex Carter",
      date: "202-06-12",
      imageUrl: "/blogs/recent/1.jpg",
      count: 3,
    },
    {
      id: 2,
      title: "The Role of AI Home Automation in Shaping the Future of Facility Management",
      content:
      "<div><p>A paradigm shift in facility management has been brought about by the use of AI into smart home automation. The use of AI in residential and commercial property management has grown in popularity as companies aim for operational excellence, redefining roles, efficiencies, and value generation.</p><h2>AI for Operational Efficiency and Predictive Maintenance</h2><p>Reactive solutions used to be the focus of facility management. AI, on the other hand, makes predictive maintenance possible. Environmental variables, usage patterns, and equipment health are tracked by sensors and AI algorithms. By identifying any issues early on, this data lowers maintenance expenses and downtime.</p><h2>Energy and Utility Management Automation</h2><p>AI-enabled automation aids building managers in optimizing use as energy costs rise and sustainability gains prominence. When the weather and occupancy patterns change, smart HVAC controls, lighting systems, and thermostats react instantly. This lowers utility costs while also bringing operations into line with business sustainability objectives.</p><h2>Centralized Control and Remote Monitoring</h2><p>AI-based dashboards give managers centralized control over several locations, enabling them to monitor maintenance, lighting, energy, and security from a single interface. Real-time decision-making is ensured via remote accessibility, which additionally improves operational flexibility and lessens the requirement for locally personnel.</p><h2>Improved Tenant Experience</h2><p>Raising tenant happiness is another important function of AI-powered home automation. AI contributes to the creation of responsive, comfortable living spaces, from smart appliances and easy access controls to customized climate settings. This results in lower tenant turnover and greater retention rates for property management firms.</p><h2>Data-Based Understanding and Improvement</h2><p>AI gathers and examines enormous volumes of data from networked devices. These insights can be used by facility managers to estimate energy requirements, plan upgrades, and improve operations. Facility management is transformed from a cost center into a strategic function by this data-centric strategy.</p><h2>Conclusion: Facility Management Enters a New Era</h2><p>Smart automation driven by AI brings facilities management into the twenty-first century. Better tenant experiences, more cost control, and more intelligent operations are all made possible by it. Companies that use AI into their facility plans stand to benefit from a competitive edge in a market that requires efficiency and creativity.</p></div>",
      tags: "Automation, PropTech, AI-Driven",
      author: "Alex Carter",
      date: "2024-09-18",
      imageUrl: "/blogs/recent/2.jpg",
      count: 3,
    },
    {
      id: 3,
      title: "Business Opportunities in AI-Driven Smart Home Automation Services",
      content:"<div><p>AI gathers and examines enormous volumes of data from networked devices. These insights can be used by facility managers to estimate energy requirements, plan upgrades, and improve operations. Facility management is transformed from a cost center into a strategic function by this data-centric strategy.</p><h2>Customized AI-Powered Home Automation Solutions</h2><p>Creating customized AI-driven solutions that are suited to certain customer requirements presents one of the largest potential. Companies can provide customized platforms that work with a variety of devices, recognize patterns using machine learning, and enable smooth control via mobile apps, voice commands, or gestures. Developers may be able to white-label these systems, opening up business-to-business potential.</p><h2>Services for Integration and Installation</h2><p>A lot of homeowners look for expertise while integrating and configuring AI home automation systems. To close this gap, companies can provide high-end installation, consulting, and integration services. Moreover, offering post-installation assistance creates opportunities for enduring service agreements and client loyalty.</p><h2>SaaS Platforms for Home Automation</h2><p>Cloud-based platforms that let homeowners control, monitor, and enhance their smart home devices can be introduced by businesses. Analytics dashboards, energy reports, and real-time security alerts are examples of subscription-based services that provide steady value and recurring income.</p><h2>Manufacturing of Smart Appliances and Devices</h2><p>From washing machines that suggest cycles based on fabric kinds to freezers that handle groceries, there is a lot of space for innovation in the development of AI-enhanced gadgets. Tech companies can collaborate with OEMs to create branded smart gadgets or access hardware production.</p><h2>Data Monetization and AI Training Models</h2><p>As smart homes generate vast amounts of data, ethical monetization and use of this data for improving AI models present a profitable venture. Businesses can develop data platforms that anonymize and sell usage insights to manufacturers, researchers, and energy companies.</p><h2>Conclusion: A Lucrative Horizon</h2><p>The AI-powered smart home automation sector is rich with business potential. By offering tailored solutions, leveraging data, and creating new service models, businesses can capitalize on the ongoing smart home revolution. The time to invest and innovate is now.</p></div>",

      tags: "Automation, AI-Driven, Innovation",
      author: "Alex Carter",
      date: "2025-02-07",
      imageUrl: "/blogs/recent/3.jpg",
      count: 3,
    },
  ]);

  const currentIndex = useSignal<number>(0);
  const currentBlog = useSignal<Blog | null>(null);

  // **Track the blog state mutation using useTask$**
  useTask$(async ({ track }) => {
    track(currentIndex); // Ensures tracking of index changes
    currentBlog.value = blogs.value[currentIndex.value]; // Set initial blog

  });

  return (
    <div class="relative flex h-full w-full flex-col justify-end overflow-hidden rounded-4xl bg-white p-4 shadow-md">
      {/* eslint-disable-next-line qwik/jsx-img */}
      <img
        src={currentBlog.value?.imageUrl}
        alt={currentBlog.value?.title}
        class="absolute top-0 left-0 z-0 h-full w-full object-cover"
      />
      <div class="relative bottom-0 left-0 z-10 flex w-9/12 flex-col justify-around space-x-4 md:flex-row">
        <div class="flex max-w-full flex-col gap-2 md:max-w-6/12">
          <div class="flex flex-row gap-2">
            {currentBlog.value?.tags.split(",").map((tag, index) => (
              <div key={index} class="w-fit rounded-full border px-4 py-2">
                <p>{tag}</p>
              </div>
            ))}
          </div>
          <h2 class="text-xl font-semibold">{currentBlog.value?.title}</h2>
        </div>
        <div class="flex max-w-full md:max-w-5/12 items-start flex-col gap-2">
          <p class="text-sm text-black">
            {currentBlog.value?.content.slice(0, 200)}...
          </p>
          <Button
            text="Read More"
            link={`/blogs/${currentBlog.value?.id}`}
            theme="dark"
          />
          {/* <button>
            <a href={`/blogs/${currentBlog.value?.id}`}>Read More</a>
          </button> */}
        </div>
      </div>
      <div
        class="absolute right-0 bottom-0 z-20 h-3/12 w-3/12 cursor-pointer"
        onClick$={() => {
          currentIndex.value = (currentIndex.value + 1) % blogs.value.length;
        }}
      >
      {/* eslint-disable-next-line qwik/jsx-img */}
        <img
          src={
            blogs.value[(currentIndex.value + 1) % blogs.value.length].imageUrl
          }
          alt={blogs.value[(currentIndex.value + 1) % blogs.value.length].title}
          class="absolute top-0 left-0 z-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
});
