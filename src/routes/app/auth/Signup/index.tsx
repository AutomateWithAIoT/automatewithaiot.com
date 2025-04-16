import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export const Signup = component$(() => {
  return (
    <>
      <section class="flex min-h-screen w-1/3 min-w-md flex-col items-center justify-center bg-gray-100">
        <h4 class="mb-4 text-2xl font-bold">Welcome to Smart Home Solution</h4>
        <p class="mt-4 text-lg">
          Experience the future of home automation with AI-powered features.
        </p>
      </section>
      <div class="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        <h1 class="mb-4 text-4xl font-bold">Signup</h1>
        <form class="w-full max-w-sm space-y-4">
          <input
            type="text"
            placeholder="Username"
            class="w-full rounded border px-4 py-2"
          />
          <input
            type="email"
            placeholder="Email"
            class="w-full rounded border px-4 py-2"
          />
          <input
            type="password"
            placeholder="Password"
            class="w-full rounded border px-4 py-2"
          />
          <button class="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Signup
          </button>
        </form>
        <p class="mt-4 text-sm">
          Already have an account?{" "}
          <a href="/app/auth/Login" class="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </>
  );
});
export default Signup;
export const head: DocumentHead = {
  title: "Signup",
  meta: [
    {
      name: "description",
      content: "Signup for an account",
    },
  ],
};
