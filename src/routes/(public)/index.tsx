import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { BlogSection } from "~/components/BlogSection";
import { Button } from "~/components/button";
import { FeatureCard } from "~/components/feature";
import { TestimonialSection } from "~/components/TestimonialSection";
import { UseCaseCard } from "~/components/UseCaseCard";
export default component$(() => {
  return (
    <>
      <section class="mx-8 mt-24 flex min-h-screen flex-col items-center justify-start overflow-clip rounded-[55px] pt-32">
        <div class="flex items-center space-x-2 rounded-full border border-emerald-700 px-3 py-1">
          <div class="flex flex-row justify-center space-x-[-5px]">
            <img
              src="/testimonials/Image_2.webp"
              alt=""
              class="h-8 w-8 rounded-full border-emerald-700 border" 
            />
            <img
              src="/testimonials/Image_3.webp"
              alt=""
              class="h-8 w-8 rounded-full border-emerald-700 border" 
            />
            <img
              src="/testimonials/Image_5.webp"
              alt=""
              class="h-8 w-8 rounded-full border-emerald-700 border" 
            />
          </div>
          <p>Innovating Comfort Through Smart Technology.</p>
        </div>
        <h1 class="z-20 my-12 text-center font-sans text-7xl leading-20 font-light text-emerald-950">
          Transforming Modern Living with Smart Automation, Seamless Security,
          and Unmatched Comfort.
        </h1>
        <div class="my-12 flex items-center justify-center space-x-4">
          <Button text="Get Started" theme="dark" link="/app/dashboard/" />
          <Button text="Contact us" theme="light" link="/contact" />
        </div>
        <div class="relative flex flex-col space-y-12 sm:block">
          <div class="top-0 bottom-0 left-0 z-10 flex h-1/2 max-h-80 w-full flex-col items-start justify-around space-y-4 rounded-4xl bg-white p-4 text-emerald-950 sm:absolute sm:my-auto sm:w-64">
            <i class="material-symbols-outlined text-emerald-950">
              nest_doorbell_visitor
            </i>
            <h2 class="text text-2xl font-semibold">
              Welcome To The Home Solutions
            </h2>
            <p>
              We provide AI-powered smart home solutions designed to enhance
              modern living by improving sustainability, convenience, and
              security.
            </p>
          </div>
          <img
            // eslint-disable-next-line qwik/jsx-img
            src="/Hero.webp"
            alt="Hero Image"
            width={1000}
            height={1000}
            class="z-0 mx-auto w-full rounded-3xl object-cover sm:h-[800px] sm:w-4/5"
          />
          <div class="right-0 z-10 flex h-1/2 max-h-80 w-full flex-col items-start justify-around space-y-4 rounded-4xl bg-white p-4 text-emerald-950 sm:absolute sm:top-0 sm:bottom-0 sm:my-auto sm:mt-96 sm:w-64">
            <h2 class="text-2xl font-semibold">Welcome To Our Land</h2>
            <p>We make your home smarter, safer, and full of comfort.</p>
            <i class="material-symbols-outlined text-emerald-950">handshake</i>
          </div>
        </div>
      </section>
      {/* Features section with multiple card ordered in a masionary structure on the left side and picture with features title at the right*/}
      <section class="relative flex flex-col items-center justify-between">
        <div class=" z-10 my-auto flex w-full flex-col items-center space-y-4 bg-white pt-64 sm:[clip-path:ellipse(55%_80%_at_50%_100%)] md:[clip-path:ellipse(50%_90%_at_50%_100%)] xs:[clip-path:ellipse(70%_70%_at_50%_100%)]">
          <h2
            class="rounded-4xl bg-neutral-300 px-4 py-1 text-sm"
            id="features"
          >
            Features
          </h2>
          <p class="px-20 py-12 text-center text-3xl overflow-ellipsis md:px-64">
            AI-powered energy optimizing, maintenance planning, and adaptive
            control can improve customer happiness and operational effectiveness
            while offering more intelligent and economical solutions for modern
            home service providers.
          </p>
        </div>
        <div class="grid h-[1000px] w-full grid-cols-1 grid-rows-12 space-y-4 bg-white px-8 pt-20 pb-40 md:h-[700px] md:grid-cols-3 md:grid-rows-5 md:space-x-10">
          <div class="row-span-4 row-start-1 md:col-start-1 md:row-span-4 md:row-start-1">
            <FeatureCard
              title="Intelligent Energy Optimization"
              description="By managing energy use based on real-time consumption trends, our AI solution optimizes long-term return investment for service providers while improving energy efficiency for homes."
              imageUrl="/Feature_1.webp"
            />
          </div>
          <div class="row-span-4 row-start-5 md:col-start-2 md:row-span-5 md:row-start-1">
            <FeatureCard
              title="Predictive Maintenance Alerts"
              description="Our approach uses machine learning to identify abnormalities in appliances early on, avoiding failures. This makes it a key asset for home service companies as it lowers service costs, improves customer happiness, and reduces downtime."
              imageUrl="/Feature_2.webp"
            />
          </div>
          <div class="row-span-4 row-start-9 md:col-start-3 md:row-span-3 md:row-start-3">
            <FeatureCard
              title="Adaptive Environment Control"
              description="AI uses human behavior and choices to dynamically modify the temperature, lighting, and air quality. For businesses that supply smart home solutions, it assures comfort, increases the quality of lifestyle, and raises product value."
              imageUrl="/Feature_3.webp"
            />
          </div>
        </div>
      </section>
      {/* Use cases section with 3 sample use cases if Smart Home automation with IoT  */}
      <section class="flex flex-col items-center justify-center bg-white">
        <div class=" z-10 my-auto flex w-full flex-col items-center space-y-4 bg-emerald-50 pt-64 sm:[clip-path:ellipse(55%_80%_at_50%_100%)] md:[clip-path:ellipse(50%_90%_at_50%_100%)] xs:[clip-path:ellipse(70%_70%_at_50%_100%)]">
          <h2 class="rounded-4xl bg-neutral-300 px-4 py-1 text-sm">
            Use Cases
          </h2>
          <p class="px-32 py-12 text-center text-4xl leading-14 overflow-ellipsis md:px-52">
            AI-Powered Smart Home Automation: Optimize Energy,
            <br /> Improve Security, Lower Costs, and Provide Smooth Automation
            for Safe and Healthy Living.
          </p>
        </div>
        <div class="grid w-full grid-flow-row grid-cols-1 space-y-4 bg-emerald-50 px-8 pt-20 pb-40 sm:grid-cols-2 md:h-screen md:space-y-0 md:space-x-10">
          <div>
            <UseCaseCard
              title="Predictive Energy Management"
              tag="EcoComfort"
              description="We discover energy usage with AI Based automation to reduce costs and control efficiency when there’s consistent comfortability and sustainable home preference."
              imageUrl="/UseCases_1.webp"
            />
          </div>
          <div>
            <UseCaseCard
              title="Intelligent Security & Surveillance"
              tag="Smart Surveillance"
              description="Our transfer to AI-power Surveillance that detect threats in real-time ,reducing risks, and build up trust via smart protection."
              imageUrl="/UseCases_2.webp"
            />
          </div>
        </div>
      </section>
      <section class="flex flex-col items-center justify-center">
        <div class=" z-10 my-auto flex w-full flex-col items-center space-y-4 bg-white pt-64 sm:[clip-path:ellipse(55%_80%_at_50%_100%)] md:[clip-path:ellipse(50%_100%_at_50%_100%)] xs:[clip-path:ellipse(70%_70%_at_50%_100%)]">
          <h2 class="rounded-4xl bg-neutral-300 px-4 py-1 mt-40 text-sm">
            What's New
          </h2>
        </div>
        <div class="w-full bg-white px-8 pt-20 pb-40 md:h-screen">
          <BlogSection />
        </div>
      </section>
      <section class="flex flex-col items-center justify-center bg-white">
        <div class=" z-10 my-auto flex w-full flex-col items-center space-y-4 bg-emerald-50 pt-64 sm:[clip-path:ellipse(55%_80%_at_50%_100%)] md:[clip-path:ellipse(50%_90%_at_50%_100%)] xs:[clip-path:ellipse(70%_70%_at_50%_100%)]">
          <h2 class="rounded-4xl bg-neutral-300 px-4 py-1 mt-40 text-sm">
            What our clients say
          </h2>
        </div>
        <div class="w-full bg-emerald-50 px-8 pt-20 pb-20">
          <TestimonialSection />
        </div>
      </section>
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
