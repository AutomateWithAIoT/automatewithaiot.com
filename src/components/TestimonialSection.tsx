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
  const testimonials = useSignal<TestimonialProps[]>([
    {
      name: "John Doe",
      position: "CEO",
      company: "Tech Innovations",
      testimonial:
        "This product has revolutionized our workflow and increased productivity.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      name: "Jane Smith",
      position: "CTO",
      company: "Creative Solutions",
      testimonial:
        "An essential tool for any modern business. Highly recommend!",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      name: "Alice Johnson",
      position: "Product Manager",
      company: "Future Tech",
      testimonial:
        "The best investment we've made this year. Exceptional support too!",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      name: "Bob Brown",
      position: "Marketing Director",
      company: "Global Enterprises",
      testimonial:
        "A game changer in our marketing strategy. The results speak for themselves.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      name: "Charlie Green",
      position: "Sales Manager",
      company: "Sales Pros",
      testimonial: "Incredible features and user-friendly interface. Love it!",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      name: "Diana Prince",
      position: "HR Specialist",
      company: "People First",
      testimonial:
        "Streamlined our hiring process significantly. A must-have tool!",
      imageUrl: "https://via.placeholder.com/150",
    },
  ]);
  const currentIndex = useSignal<number>(0);
  const currentTestimonial = useSignal<TestimonialProps | null>(
    testimonials.value[0],
  );

  const selectTestimonial = $((index: number) => {
    testimonials.value[index].state = "expanded";
    currentTestimonial.value = testimonials.value[index];
  });

  return (
    <div class="flex flex-col items-center justify-center bg-gray-50 p-4">
      <h2 class="mb-4 text-2xl font-bold">What Our Clients Say</h2>
      <div class="grid grid-cols-2 grid-rows-4 space-y-4 space-x-4 sm:grid-cols-3 sm:grid-rows-3 md:grid-cols-5 md:grid-rows-3 lg:grid-cols-7 lg:grid-rows-2 select-none">
        {testimonials.value.map((testimonial) => {
          return (
            <div
              key={testimonial.name}
              class={`${currentTestimonial.value?.name === testimonial.name ? "col-span-2 row-span-2 md:col-span-3 lg:col-span-2" : ""} flex items-center justify-center`}
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
                />
              }
            </div>
          );
        })}
      </div>
    </div>
  );
});
