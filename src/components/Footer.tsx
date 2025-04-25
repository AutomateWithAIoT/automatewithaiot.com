import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Button } from "./button";

export const Footer = component$(() => {
  return (
    <footer class="flex flex-col items-center justify-between rounded-t-4xl bg-black p-8 text-white">
      <div class="h-60 w-full rounded-4xl bg-[url(/Footer.webp)] bg-fixed object-contain" />
      <div class="flex w-full flex-col items-start justify-around space-y-8 py-8 md:flex-row md:space-y-0 md:space-x-8">
        <div class="flex flex-col items-start space-y-4 md:w-2/5">
          {/* eslint-disable-next-line qwik/jsx-img */}
          <img src="/logo-dark.webp" alt="Logo" class="h-20 w-auto" />
          <p class="max-w-92 overflow-clip text-lg font-light text-emerald-50">
            Making everyday life easier with smart, friendly AI-powered home
            automation solutions with AutomatewithAIoT
          </p>
          <Button text="Contact Us" theme="light" link="/contact" />
        </div>
        <div class="flex flex-col space-y-4 md:w-1/5">
          <h3 class="text-xl font-semibold">Resources</h3>
          <ul class="flex flex-col space-y-2 font-light">
            <li class="hover:text-emerald-500">
              <Link href="/Privacy-Policy">Privacy Policy</Link>
            </li>
            <li class="hover:text-emerald-500">
              <Link href="/Terms-Conditions">Terms of Service</Link>
            </li>
          </ul>
        </div>
        <div class="flex flex-col space-y-4 md:w-1/5">
          <h3 class="text-xl font-semibold">Quick Links</h3>
          <ul class="flex flex-col space-y-2 font-light">
            <li class="hover:text-emerald-500">
              <Link href="/about">About Us</Link>
            </li>
            <li class="hover:text-emerald-500">
              <Link href="/#features">Features</Link>
            </li>
            <li class="hover:text-emerald-500">
              <Link href="/blogs/1">Blog</Link>
            </li>
            <li class="hover:text-emerald-500">
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div class="flex flex-col space-y-4 md:w-1/5">
          <h3 class="text-xl font-semibold">Follow Us</h3>
          <ul class="flex flex-col space-y-2 font-light">
            <li class="hover:text-blue-500">
              <Link href="https://www.facebook.com" class="relative group w-fit">
                Facebook
                <span class="absolute left-0 bottom-[-5px] h-0.5 bg-blue-500 w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
            </li>
            <li class="hover:text-neutral-500">
              <Link href="https://x.com/AMatewithAIOT" class="relative group w-fit">
              X
                <span class="absolute left-0 bottom-[-5px] h-0.5 bg-neutral-500 w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </li>
            <li class="hover:text-red-500">
              <Link href="https://www.youtube.com/@AutomateAIoT" class="relative group w-fit">
              YouTube
                <span class="absolute left-0 bottom-[-5px] h-0.5 bg-red-500 w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </li>
            <li class="hover:text-red-900">
              <Link href="https://www.quora.com/profile/Automate-AIoT" class="relative group w-fit">
                Quora
                <span class="absolute left-0 bottom-[-5px] h-0.5 bg-red-950 w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <Link
          href="https://www.automatewithaiot.com"
          class="text-emerald-500 hover:text-emerald-50"
        >
          AutomateWithAIoT.com
        </Link>
        . All rights reserved.
      </p>
      <p>Built with 💚 using Qwik</p>
      <div class="hidden">
        <span class="h-4 w-4 cursor-pointer bg-emerald-50"></span>
        <span class="h-4 w-4 cursor-pointer bg-emerald-100"></span>
        <span class="h-4 w-4 cursor-pointer bg-emerald-200"></span>
        <span class="h-4 w-4 cursor-pointer bg-emerald-300"></span>
        <span class="h-4 w-4 cursor-pointer bg-emerald-400"></span>
        <span class="h-4 w-4 cursor-pointer bg-emerald-500"></span>
        <span class="h-4 w-4 cursor-pointer bg-emerald-600"></span>
        <span class="h-4 w-4 cursor-pointer bg-emerald-700"></span>
        <span class="h-4 w-4 cursor-pointer bg-emerald-800"></span>
        <span class="h-4 w-4 cursor-pointer bg-emerald-900"></span>
      </div>
    </footer>
  );
});
