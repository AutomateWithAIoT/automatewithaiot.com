import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export const forgotPassword = component$(() => {
  return (
    <div class="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 class="mb-4 text-4xl font-bold">Forgot Password</h1>
      <p class="text-lg">
        Please enter your email address to reset your password.
      </p>
      <form class="mt-6 w-full max-w-sm space-y-4">
        <input
          type="email"
          placeholder="Email Address"
          class="w-full rounded border border-gray-300 px-4 py-2 focus:ring focus:ring-blue-500 focus:outline-none"
          required
        />
        <button
          type="submit"
          class="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Send Reset Link
        </button>
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
