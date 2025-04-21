import { DocumentHead } from "@builder.io/qwik-city";
import { sendResetPasswordEmail } from "~/firebase-auth";
import { component$, useSignal, $ } from "@builder.io/qwik"
import { ButtonClick } from "~/components/buttonClick";

export const forgotPassword = component$(() => {
  const email = useSignal("");
  const message = useSignal<string | null>(null);

  const handleSendResetLink = $(async () => {
    try {
      await sendResetPasswordEmail(email.value);
      message.value = "Password reset link sent!";
    } catch (err: any) {
      message.value = err.message;
    }
  });

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
          bind:value={email}
        />
        <ButtonClick text="Send Reset Link" theme="dark" onClick={handleSendResetLink} />
        {message.value && <>
        <p class="text-emerald-500">{message.value}</p>
        <a href="/app/auth/Login" class="text-blue-500 hover:underline">Go back to Login</a></>}
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
