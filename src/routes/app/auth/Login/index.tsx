import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { Button } from "~/components/button";
import { ButtonClick } from "~/components/buttonClick";

export const Login = component$(() => {
  return (
    <div>
      <section class="mx-auto mt-12 flex w-full flex-col items-center justify-center rounded-4xl border border-white/30 bg-white/20 p-4 shadow-md backdrop-blur-lg">
        <h4 class="mb-4 text-2xl font-bold">Login</h4>
        <form class="flex w-full flex-col items-center justify-center space-y-4">
          <input
            type="email"
            placeholder="Email"
            class="rounded-lg border p-2"
            required
          />
          <input
            type="password"
            placeholder="Password"
            class="rounded-lg border p-2"
            required
          />
          <ButtonClick text="Login" theme="dark" />
        </form>
        <p class="mt-4 text-sm">
          Forgot your password?{" "}
          <a
            href="/app/auth/Login/Forgot-password/"
            class="text-blue-500 hover:underline"
          >
            Reset Password
          </a>
        </p>
        <p class="mt-4 text-sm">
          Don't have an account?{" "}
          <a href="/app/auth/Signup/" class="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
      </section>
    </div>
  );
});
export default Login;

export const head: DocumentHead = {
  title: "Login",
  meta: [
    {
      name: "description",
      content: "Login to your account",
    },
  ],
};
