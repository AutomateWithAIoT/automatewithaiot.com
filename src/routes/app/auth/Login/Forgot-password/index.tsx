import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { Button } from "~/components/button";
import { ButtonClick } from "~/components/buttonClick";

export const forgotPassword = component$(() => {
  return (
    <div class="mx-auto mt-12 flex w-full flex-col items-center justify-center space-y-7 rounded-4xl border border-white/30 bg-white/20 p-4 shadow-md backdrop-blur-lg">
      <h1 class="mb-4 text-4xl font-bold">Forgot Password</h1>
      <p class="text-lg">
        Please enter your email address to reset your password.
      </p>
      <form class="flex w-full flex-col items-center justify-center space-y-7">
        <input
          type="email"
          placeholder="Email Address"
          class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring focus:ring-blue-500 focus:outline-none"
          required
        />
        <ButtonClick text="Send Reset Link" theme="dark" />
      </form>
    </div>
  );
});
export default forgotPassword;
export const head: DocumentHead = {
  title: "Forgot Password",
  meta: [
    {
      name: "description",
      content: "Reset your password",
    },
  ],
};
