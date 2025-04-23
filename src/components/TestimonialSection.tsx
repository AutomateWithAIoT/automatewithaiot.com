import { $, component$, useSignal } from "@builder.io/qwik";
import { Testimonial } from "./TestimonialCard";

interface TestimonialProps {
  name: string;
  position: string;
  company: string;
  testimonial: string;
  imageUrl: string;
  state?: "collapsed" | "expanded";
}

export const TestimonialSection = component$(() => {
  const testimonials = useSignal<TestimonialProps[]>(
    [
      {
        name: "Dinesh Amarasinghe",
        position: "Director",
        company: "UrbanNest Constructions",
        testimonial: "As a developer of homes, we sought a reliable smart home system that would work well with our housing developments. That's exactly what your AI-powered solution delivered: flexible features, simple to operate controls, and smooth automation. Throughout, the team gave us outstanding support, which enabled us to secure the future of our innovations.",
        imageUrl: "/testimonials/user-1.jpg",
      },
      {
        name: "Anjali Fernando",
        position: "CEO",
        company: "LuxeStay Rentals",
        testimonial: "The change has been remarkable since we installed your smart home automation system in each of our rental properties. The platform significantly improved client happiness and cut our operational costs by 35%, from energy-saving controls to intelligent locks. I highly suggest it to businesses that focus on hospitality.",
        imageUrl: "/testimonials/user-2.jpg",
      },
      {
        name: "Ruwan Perera",
        position: "Founder",
        company: "Elite Interior Designs",
        testimonial: "Your smart systems are installed in all of our opulent interior projects. Our clients now want this level of advanced control, in addition to the fact that it significantly improves the value of our service. Because of its versatility, your AI helper has become a popular feature among homeowners.",
        imageUrl: "/testimonials/user-3.jpg",
      },
      {
        name: "Kasun Jayasinghe",
        position: "Operations Manager",
        company: "SereneVillas Group",
        testimonial: "When we used your automation on the internet, it was very difficult to operate a villa network. AI-driven energy optimization, remote climate control, and real-time surveillance have simplified and improved management.",
        imageUrl: "/testimonials/user-4.jpg",
      },
      {
        name: "Shalini Rodrigo",
        position: "CTO",
        company: "PrimeLiving Realty",
        testimonial: "We wanted to be at the forefront of innovation in the real estate industry, and your smart home automation made us stand out. Artificial intelligence (AI) innovations like voice-activated ambiance, automated lighting, and maintenance warnings impress buyers in mind. This is now the new norm rather than a luxury.",
        imageUrl: "/testimonials/user-5.jpg"
      }
    ]
  );
  const currentIndex = useSignal<number>(0);
  const currentTestimonial = useSignal<TestimonialProps | null>(
    testimonials.value[0],
  );

  const selectTestimonial = $((index: number) => {
    testimonials.value[index].state = "expanded";
    currentTestimonial.value = testimonials.value[index];
  });

  return (
    <div class="flex flex-col items-center justify-center bg-emerald-50 p-4">
      <h2 class="mb-4 text-2xl font-bold">What Our Clients Say</h2>
      {/* <div class="grid grid-cols-2 grid-rows-2 space-y-4 space-x-4 sm:grid-rows-3 md:grid-cols-5 lg:grid-cols-8 select-none h-auto"> */}
      <div class = "flex flex-row justify-center items-center flex-wrap space-x-4 space-y-4">
        {testimonials.value.map((testimonial) => {
          return (
            <div
              key={testimonial.name}
              // class={`${currentTestimonial.value?.name === testimonial.name ? "col-span-2 sm:col-span-3 row-span-2 md:row-span-3 md:col-span-3 lg:col-span-4" : "md:col-span-2"} `}
              class={`${currentTestimonial.value?.name === testimonial.name ? "w-full md:w-1/2" : "w-full sm:w-1/2 md:w-1/4 lg:w-1/6 max-w-60"} `}
            >
              {
                <Testimonial
                  name={testimonial.name}
                  position={testimonial.position}
                  company={testimonial.company}
                  testimonial={testimonial.testimonial}
                  imageUrl={testimonial.imageUrl}
                  state={
                    currentTestimonial.value?.name === testimonial.name
                      ? "expanded"
                      : "collapsed"
                  }
                  nextButton="visible"
                  prevButton="visible"
                  nextButtonAction={$(() => {
                    currentIndex.value =
                      (currentIndex.value + 1) % testimonials.value.length;
                    selectTestimonial(currentIndex.value);
                  })}
                  prevButtonAction={$(() => {
                    currentIndex.value =
                      (currentIndex.value - 1 + testimonials.value.length) %
                      testimonials.value.length;
                    selectTestimonial(currentIndex.value);
                  })}
                  selectionClick={$(() => {
                    currentIndex.value = testimonials.value.indexOf(testimonial);
                    selectTestimonial(currentIndex.value);
                  })}
                  
                />
              }
            </div>
          );
        })}
      </div>
    </div>
  );
});
