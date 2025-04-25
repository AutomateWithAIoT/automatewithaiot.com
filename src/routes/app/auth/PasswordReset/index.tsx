import { $, component$, useSignal, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import { ButtonClick } from "~/components/buttonClick";
import { confirmResetPassword, verifyResetPasswordCode } from "~/firebase-auth";

export default component$(() => {
  const navigate = useNavigate();
  const state = useStore({ resetCode: "", email: "", error: "" });
  const password = useSignal("");
  const buttonAvailability = useSignal(false);
  // Extract reset code from URL
  useVisibleTask$(() => {
    const urlParams = new URLSearchParams(window.location.search);
    state.resetCode = urlParams.get("oobCode") || "";

    if (state.resetCode) {
    verifyResetPasswordCode(state.resetCode)
    .then((email) => {
        state.email = email.email||"";
        buttonAvailability.value = true; // Disable button if email is valid
      })
    .catch(() => {
        state.error = "Invalid or expired reset code.";
      });
    } else {
      state.error = "No reset code provided.";
    }  
  });

  // Handle password reset
  const handleResetPassword = $(async() => {
    const result =await confirmResetPassword(state.resetCode, password.value)
    if (result.success) {
      alert("Password reset successful!");
      navigate("/app/auth/Login");
    }
    else {
      state.error = result.error;
    }
  });

  return (
    <div class="mx-auto mt-12 flex w-full flex-col items-center justify-center rounded-4xl border border-white/30 bg-white/20 p-4 shadow-md backdrop-blur-lg">
      <h1 class="mb-4 text-4xl font-bold">Reset Password</h1>
      {state.error && <p class="text-red-500">{state.error}</p>}

      {state.email && (
        <p class="text-gray-700">Resetting password for: {state.email}</p>
      )}

      <input
        type="password"
        placeholder="New Password"
        class="rounded-lg border px-4 py-2 mb-4 w-full"
        bind:value={password}
      />
      {buttonAvailability.value && (
        <ButtonClick text="Reset Password" onClick={handleResetPassword} theme="dark" />
        )
      }
    </div>
  );
});