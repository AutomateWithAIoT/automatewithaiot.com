import { component$, Slot } from "@builder.io/qwik";
import { Sidebar } from "~/components/dashboard/sidebar/sidebar";
import { Navbar } from "~/components/dashboard/navbar/navbar";

export default component$(() => {
  return (
    <div class='flex h-screen bg-emerald-50 dark:bg-gray-900'>
      <Sidebar />
      <div class='flex flex-col flex-1 overflow-hidden'>
        <Navbar />
        <main class='flex-1 overflow-y-auto p-4 md:p-6'>
          <Slot />
        </main>
      </div>
    </div>
  );
});
