import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const PricingSection = component$(() => {
  const plans = [
    {
      name: "Basic",
      price: "$9.99/month",
      features: [
        "Access to AI-powered insights",
        "Basic analytics and performance metrics",
        "Email notifications",
        "Up to 3 devices",
      ],
      buttonText: "Try for Free",
      buttonLink: "/app/auth/Login",
      popular: false,
      id: 1,
    },
    {
      name: "Pro",
      price: "$19.99/month",
      features: [
        "Everything in Basic",
        "Advanced analytics and AI insights",
        "Push notifications",
        "Up to 10 devices",
        "Priority support",
      ],
      buttonText: "Most Popular",
      buttonLink: "/app/auth/Login",
      popular: true,
      id: 2,
    },
    {
      name: "Enterprise",
      price: "Custom Pricing",
      features: [
        "Everything in Pro",
        "Unlimited devices",
        "Custom AI model integration",
        "Dedicated account manager",
        "24/7 support",
      ],
      buttonText: "Contact Us",
      buttonLink: "/contact",
      popular: false,
      id: 3,
    },
  ];

  return (
    <div class="container mx-auto px-4 sm:py-8">
      <h2 class="text-3xl font-bold text-center text-emerald-900 mb-6">
        Choose Your Plan
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
            <div class="group" key={plan.name}>
            <div
                class={`relative p-6 rounded-4xl border-emerald-950 transition duration-100 ease-in-out group-hover:shadow-2xl group-hover:z-30 ${
              plan.popular ? "border bg-emerald-900 text-emerald-50 group-hover:border-emerald-900" : "border bg-emerald-50 text-emerald-900 w-5/6 mx-auto group-hover:border-emerald-50"
            } ${plan.id ===1? "translate-y-12 pb-10 md:pb-6 md:translate-y-28 z-10": plan.id ===2? " z-20": "translate-y-[-48px] z-10"}`}
            >
            <h3 class="text-xl font-semibold  ">
              {plan.name}
            </h3>
            <p class="text-2xl font-bold  mb-4">
              {plan.price}
            </p>
            <ul class="list-disc list-inside cursor-default select-none mb-6">
              {plan.features.map((feature, index) => (
                <li key={index} class="mb-2">
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={plan.buttonLink}
              class={`rounded-full text-center px-4 py-2 ${plan.popular ? "bg-emerald-50 text-emerald-900" : "bg-emerald-900 text-white"} transition duration-300 ease-in-out`}
            >
              {plan.buttonText}
            </a>
          </div>
          </div>
        ))}
      </div>
      <Link
        href="/contact">
      <div class="sm:mt-32 flex flex-col items-center justify-center space-y-4">
        <hr class="w-5/6 border-emerald-900" />
        <p class="flex flex-row items-center justify-center space-x-4"><span class="material-symbols-outlined animate-ping text-emerald-500">keyboard_double_arrow_down</span>More Information</p>
      </div>
      </Link>
    </div>
  );
});