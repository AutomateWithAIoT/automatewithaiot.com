import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { ButtonClick } from "~/components/buttonClick";

export const Signup = component$(() => {
  return (
    <>
      <div class="mx-auto mt-12 flex w-full flex-col items-center justify-center rounded-4xl border border-white/30 bg-white/20 p-4 shadow-md backdrop-blur-lg">
        <h1 class="mb-4 text-4xl font-bold">Signup</h1>
        <form class="flex w-full flex-col items-center justify-center space-y-4">
          <input
            type="text"
            placeholder="Username"
            class="w-full rounded-lg border px-4 py-2"
          />
          <input
            type="email"
            placeholder="Email"
            class="w-full rounded-lg border px-4 py-2"
          />
          <input
            type="password"
            placeholder="Password"
            class="w-full rounded-lg border px-4 py-2"
          />

          <ButtonClick text="Signup" theme="dark" />
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
