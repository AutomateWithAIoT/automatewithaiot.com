import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export const Login = component$(() => {
  return (
    <div>
      <section class="flex min-h-screen w-1/3 min-w-md flex-col items-center justify-center bg-gray-100">
        <h4 class="mb-4 text-2xl font-bold">Welcome to Smart Home Solution</h4>
        <p class="mt-4 text-lg">
          Experience the future of home automation with AI-powered features.
        </p>
      </section>
      <section class="flex min-h-screen w-1/3 min-w-md flex-col items-center justify-center bg-gray-100">
        <h4 class="mb-4 text-2xl font-bold">Login</h4>
        <form class="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            class="rounded border p-2"
            required
          />
          <input
            type="password"
            placeholder="Password"
            class="rounded border p-2"
            required
          />
          <button
            type="submit"
            class="mt-6 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Login
          </button>
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
