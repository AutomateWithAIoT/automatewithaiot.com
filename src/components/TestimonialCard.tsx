import { component$, useSignal } from "@builder.io/qwik";

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
  selectionClick?: () => void;
}

export const Testimonial = component$<TestimonialProps>((props) => {
  const styleList = [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ];

  const color = useSignal(
    styleList[Math.floor(Math.random() * styleList.length)],
  );
  const textColor = Number(color.value) < 600 ? "950" : "50";
  const textColor2 = Number(color.value) < 600 ? "black" : "white";
  return (
    <div
      class={`items-scratch relative flex flex-row justify-center rounded-lg bg-emerald-${color.value} p-4 shadow-md`}
    >
      <div>
        {props.prevButton === "visible" && props.state === "expanded" ? (
          <button
            class="absolute top-0 left-0 z-10 m-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-emerald-950"
            onClick$={props.prevButtonAction}
          >
            <i class="material-icons text-emerald-50">arrow_back</i>
          </button>
        ) : (
          ""
        )}
      </div>
      <div
        class={`flex transform w-full items-stretch justify-between space-x-4 transition-all duration-500 ease-in-out ${props.state === "collapsed" ? "flex-row" : "px-12 flex-col"}`}
      >
        {/* eslint-disable-next-line qwik/jsx-img */}
        <img
          src={props.imageUrl}
          alt={props.name}
          class={`mb-4 h-full min-h-24 max-h-48 w-full object-cover ${props.state === "collapsed" ? "rounded-2xl cursor-pointer" : "rounded-3xl"}`}
          onClick$={props.selectionClick}
        />
        {props.state === "expanded" && (
          <div>
            <p class={`t-2 text-justify text-emerald-${textColor}`}>{props.testimonial}</p>
            <h3 class={`text-lg font-semibold text-${textColor2}`}>
              {props.name}
            </h3>
            <p class={`text-sm text-${textColor2}`}>
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
