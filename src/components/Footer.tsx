import { component$ } from "@builder.io/qwik";

export const Footer = component$(() => {
  return (
    <footer class="bg-gray-800 p-4 text-center text-white">
      <p>&copy; {new Date().getFullYear()} My Qwik App. All rights reserved.</p>
      <p>Built with ❤️ using Qwik</p>
    </footer>
  );
});
