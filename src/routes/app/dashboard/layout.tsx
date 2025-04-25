import { component$, Slot, useVisibleTask$ } from "@builder.io/qwik";
import { Sidebar } from "~/components/dashboard/sidebar/sidebar";
import { Navbar } from "~/components/dashboard/navbar/navbar";

export default component$(() => {
  useVisibleTask$(() => {
      const isLoggedIn = sessionStorage.getItem("isLoggedIn");
      if (!isLoggedIn) {
        location.href = "/app/auth/Login";
      }
    }
  );
  return (
    <div class="flex h-screen bg-emerald-50 dark:bg-gray-900">
      <Sidebar />
      <div class="flex flex-1 flex-col overflow-hidden">
        <Navbar />
        <main class="flex-1 overflow-y-auto p-4 md:p-6">
          <Slot />
        </main>
      </div>
    </div>
  );
});
