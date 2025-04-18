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
      <section class="relative mx-8 mt-24 flex min-h-screen flex-col items-center justify-start overflow-clip rounded-[55px] bg-gray-900 pt-32">
        <img
          // eslint-disable-next-line qwik/jsx-img
          src="/hero.jpg"
          alt="Hero Image"
          width={1000}
          height={1000}
          class="absolute top-0 right-0 bottom-0 left-0 z-10 h-full w-full object-cover opacity-50"
        />
        <h1 class="z-20 mb-4 text-center font-sans text-7xl font-bold text-emerald-50">
          AI powered Smart Home Solution
        </h1>
        <p class="z-20 mt-4 text-lg text-emerald-50">
          Welcome to our Smart Home Solution!
        </p>
        <p class="z-20 mt-2 pb-8 text-lg text-emerald-50">
          Experience the future of home automation with AI-powered features.
        </p>
        <Button text="Get Started" theme="light" link="/app/auth/Login" />
      </section>
      {/* Features section with multiple card ordered in a masionary structure on the left side and picture with features title at the right*/}
      <section class="relative flex flex-col items-center justify-between">
        <div class="xs:[clip-path:ellipse(70%_70%_at_50%_100%)] z-10 my-auto flex w-full flex-col items-center space-y-4 bg-white pt-64 sm:[clip-path:ellipse(55%_80%_at_50%_100%)] md:[clip-path:ellipse(50%_90%_at_50%_100%)]">
          <h2 class="rounded-4xl bg-neutral-300 px-4 py-1 text-sm">Features</h2>
          <p class="px-20 py-12 text-center text-3xl overflow-ellipsis md:px-52">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quo?
            Quia laborum qui reiciendis, corporis voluptatum eum alias mollitia
            soluta! Ea distinctio laboriosam est incidunt? Et quod in dolor
            accusamus.
          </p>
        </div>
        <div class="grid w-full grid-flow-row grid-cols-1 grid-rows-5 space-y-4 space-x-10 bg-white px-8 pt-20 pb-40 md:h-[700px] md:grid-cols-3">
          <div class="col-start-1 row-span-4 row-start-1">
            <FeatureCard
              title="Feature 1"
              description="lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quo? Quia laborum qui reiciendis, corporis voluptatum eum alias mollitia soluta! Ea distinctio laboriosam est incidunt? Et quod in dolor accusamus."
              imageUrl="https://via.placeholder.com/150"
            />
          </div>
          <div class="col-start-2 row-span-5 row-start-1">
            <FeatureCard
              title="Feature 2"
              description="lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quo? Quia laborum qui reiciendis, corporis voluptatum eum alias mollitia soluta! Ea distinctio laboriosam est incidunt? Et quod in dolor accusamus."
              imageUrl="https://via.placeholder.com/150"
            />
          </div>
          <div class="col-start-3 row-span-3 row-start-3">
            <FeatureCard
              title="Feature 3"
              description="lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quo? Quia laborum qui reiciendis, corporis voluptatum eum alias mollitia soluta! Ea distinctio laboriosam est incidunt? Et quod in dolor accusamus."
              imageUrl="https://via.placeholder.com/150"
            />
          </div>
        </div>
      </section>
      {/* Use cases section with 3 sample use cases if Smart Home automation with IoT  */}
      <section class="flex flex-col items-center justify-center bg-white">
        <div class="xs:[clip-path:ellipse(70%_70%_at_50%_100%)] z-10 my-auto flex w-full flex-col items-center space-y-4 bg-emerald-50 pt-64 sm:[clip-path:ellipse(60%_80%_at_50%_100%)] md:[clip-path:ellipse(55%_80%_at_50%_100%)]">
          <h2 class="rounded-4xl bg-neutral-300 px-4 py-1 text-sm">
            Why Choose Us
          </h2>
          <p class="px-20 py-12 text-center text-4xl overflow-ellipsis md:px-52">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quo?
            Quia laborum qui reiciendis,
          </p>
        </div>
        <div class="grid w-full grid-flow-row grid-cols-1 space-y-4 space-x-10 bg-emerald-50 px-8 pt-20 pb-40 sm:grid-cols-2 md:h-[700px]">
          <div>
            <UseCaseCard
              title="Use Case 1"
              tag="Smart Lighting"
              description="lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quo? Quia laborum qui reiciendis, corporis voluptatum eum alias mollitia soluta! Ea distinctio laboriosam est incidunt? Et quod in dolor accusamus."
              imageUrl="https://via.placeholder.com/150"
            />
          </div>
          <div>
            <UseCaseCard
              title="Use Case 2"
              tag="Smart Home Automation"
              description="lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quo? Quia laborum qui reiciendis, corporis voluptatum eum alias mollitia soluta! Ea distinctio laboriosam est incidunt? Et quod in dolor accusamus."
              imageUrl="https://via.placeholder.com/150"
            />
          </div>
        </div>
      </section>
      <section class="flex flex-col items-center justify-center">
        <div class="xs:[clip-path:ellipse(70%_70%_at_50%_100%)] z-10 my-auto flex w-full flex-col items-center space-y-4 bg-white pt-64 sm:[clip-path:ellipse(60%_80%_at_50%_100%)] md:[clip-path:ellipse(55%_80%_at_50%_100%)]">
          <h2 class="rounded-4xl bg-neutral-300 px-4 py-1 text-sm">
            What's New
          </h2>
        </div>
        <div class="w-full bg-white px-8 pt-20 pb-40 md:h-[700px]">
          <BlogSection />
        </div>
      </section>
      <section class="flex flex-col items-center justify-center bg-white">
        <div class="xs:[clip-path:ellipse(70%_70%_at_50%_100%)] z-10 my-auto flex w-full flex-col items-center space-y-4 bg-emerald-50 pt-64 sm:[clip-path:ellipse(60%_80%_at_50%_100%)] md:[clip-path:ellipse(55%_80%_at_50%_100%)]">
          <h2 class="rounded-4xl bg-neutral-300 px-4 py-1 text-sm">
            What our clients say
          </h2>
        </div>
        <div class="w-full bg-emerald-50 px-8 pt-20 pb-40 md:h-[700px]">
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
