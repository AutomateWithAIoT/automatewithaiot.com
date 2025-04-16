import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export const Dashboard = component$(() => {
  return (
    <div class="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 class="mb-4 text-4xl font-bold">Dashboard</h1>
      <p class="text-lg">Welcome to the Dashboard!</p>
      <p class="mt-2 text-lg">Here you can manage your smart home settings.</p>
      <button class="mt-6 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
        Go to Settings
      </button>
    </div>
  );
});
export default Dashboard;
export const head: DocumentHead = {
  title: "Dashboard",
  meta: [
    {
      name: "description",
      content:
        "Welcome to the Dashboard! Here you can manage your smart home settings.",
    },
  ],
};
