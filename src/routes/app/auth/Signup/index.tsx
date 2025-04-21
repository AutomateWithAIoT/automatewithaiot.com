import { $, component$, useSignal } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { ButtonClick } from "~/components/buttonClick";
import { signUpWithEmail } from "~/firebase-auth";

export const Signup = component$(() => {
  const username = useSignal("");
  const email = useSignal("");
  const password = useSignal("");
  const confirmPassword = useSignal("");
  const error = useSignal<string | null>(null);
  const buttonAvailability = useSignal(true);

  const handleSignup = $(async () => {

    if (!email.value || !password.value || !confirmPassword.value) {
      error.value = "Please fill in all fields";
    } else if (password.value !== confirmPassword.value) {
      error.value = "Passwords do not match";
    } else {
        buttonAvailability.value = false;
        const response = await signUpWithEmail(email.value, password.value,username.value);
        buttonAvailability.value = true;
        if (response.success){
          location.href = "/app/auth/Login";
        }else{
          error.value = response.error;
        }
      
      
    }
  });

  return (
    <>
      <div class="mx-auto mt-12 flex w-full flex-col items-center justify-center rounded-4xl border border-white/30 bg-white/20 p-4 shadow-md backdrop-blur-lg">
        <h1 class="mb-4 text-4xl font-bold">Signup</h1>
        <form class="flex w-full flex-col items-center justify-center space-y-4">
          <input
            type="email"
            placeholder="Email"
            class="w-full rounded-lg border px-4 py-2"
            bind:value={email}
          />
          <input 
          type="text"
          placeholder="Username"
          class="w-full rounded-lg border px-4 py-2"
           bind:value={username}
          />
          
          <input
            type="password"
            placeholder="Password"
            class="w-full rounded-lg border px-4 py-2"
            bind:value={password}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            class="w-full rounded-lg border px-4 py-2"
            bind:value={confirmPassword}
          />
          {error.value && <p class="text-red-500">{error.value}</p>}
          {!buttonAvailability.value && <p class="text-emerald-500">Loading...</p>}
          {buttonAvailability.value && <ButtonClick text="Signup" theme="dark" onClick={handleSignup} />}
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
