import { component$ } from "@builder.io/qwik";

interface TestimonialProps {
  name: string;
  position: string;
  company?: string;
  testimonial: string;
  imageUrl: string;
  state?: "collapsed" | "expanded";
  nextButton?: "visible" | "hidden";
  prevButton?: "visible" | "hidden";
  nextButtonAction?: () => void;
  prevButtonAction?: () => void;
}

export const Testimonial = component$<TestimonialProps>((props) => {
  return (
    <div class="items-scratch relative flex flex-row justify-center rounded-lg bg-gray-100 p-4 shadow-md">
      <div>
        {props.prevButton === "visible" && props.state === "expanded" ? (
          <button
            class="absolute top-0 left-0 z-10 m-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-black"
            onClick$={props.prevButtonAction}
          >
            <i class="material-icons text-emerald-50">arrow_back</i>
          </button>
        ) : (
          ""
        )}
      </div>
      <div
        class={`flex w-full transform flex-row items-stretch justify-between space-x-4 transition-all duration-500 ease-in-out ${props.state === "collapsed" ? "" : "px-12"}`}
      >
        {/* eslint-disable-next-line qwik/jsx-img */}
        <img
          src={props.imageUrl}
          alt={props.name}
          class={`mb-4 h-full min-h-24 rounded-full object-contain ${props.state === "collapsed" ? "" : ""}`}
        />
        {props.state === "expanded" && (
          <div>
            <p class="mt-2 text-gray-700">{props.testimonial}</p>
            <h3 class="text-lg font-semibold">{props.name}</h3>
            <p class="text-sm text-gray-500">
              {props.position} at {props.company ? props.company : ""}
            </p>
          </div>
        )}
      </div>
      <div>
        {props.nextButton === "visible" && props.state === "expanded" ? (
          <button
            class="absolute right-0 bottom-0 z-10 m-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-black"
            onClick$={props.nextButtonAction}
          >
            <i class="material-icons text-emerald-50">arrow_forward</i>
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
});
