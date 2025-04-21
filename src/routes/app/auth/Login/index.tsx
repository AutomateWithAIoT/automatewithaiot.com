import { component$, useSignal,$, useStore } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { ButtonClick } from "~/components/buttonClick";
import { googleSignIn, loginWithEmail } from "~/firebase-auth";

export const AppState = {
  user:{
    email:"",
    username: "",
    isLoggedIn: false,
  }
}


export const Login = component$(() => {
  const email= useSignal("");
  const password = useSignal("");
  const error = useSignal<string|null>(null);
  const appState = useStore(AppState);
  
  const handleLoginSuccess = $(( email:string, username:string) => {
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("isLoggedIn", "true");
    appState.user.email = email;
    appState.user.username = username;
    appState.user.isLoggedIn = true;
  })


  const handleLogin = $(async () => {
    const response = await loginWithEmail(email.value, password.value);
    if (response.success && response.user) {
      error.value = null;
      handleLoginSuccess(response.user.email, response.user.username);
      location.href = "/app/dashboard/";
    } else {
      error.value = response.error;
    }
    });

  const handleGoogleSignIn = $(async () => {
    const response = await googleSignIn();
    if (response.success && response.user) {
      handleLoginSuccess(response.user.email, response.user.username);
      location.href="/app/dashboard/";
    } else {
      error.value = response.error;
    }
  });

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
            bind:value={email}
          />
          <input
            type="password"
            placeholder="Password"
            class="rounded-lg border p-2"
            required
            bind:value={password}
          />
          {error.value && <p class="text-red-500">{error.value}</p>}
          <ButtonClick text="Login" theme="dark" onClick={handleLogin} />
          <ButtonClick text="Continue with Google" theme="light" onClick={handleGoogleSignIn}/>
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
