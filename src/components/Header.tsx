import { $, component$, useOnDocument, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Header = component$(() => {
  const scorllTop = useSignal(false);
  useOnDocument(
    "scroll",
    $(() => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        scorllTop.value = true;
      } else {
        scorllTop.value = false;
      }
    })
  );

  return (
    <header class='fixed top-0 z-30 flex w-full max-w-[1440px] items-center justify-between bg-emerald-50 p-4 px-8 py-5 mx-auto text-neutral-950'>
      {scorllTop.value && (
        <div class='flex items-center space-x-4'>
          <img src='/logo.png' alt='Logo' class='h-8 w-8' />
        </div>
      )}
      {!scorllTop.value && (
        <h1 class='text-2xl font-bold underline underline-offset-8 select-none'>
          My Qwik App
        </h1>
      )}
      <nav>
        <ul class='flex space-x-8 text-lg'>
          <li>
            <Link href='/' class='hover:text-emerald-700'>
              Home
            </Link>
          </li>
          <li>
            <Link href='/about' class='hover:text-emerald-700'>
              About
            </Link>
          </li>
          <li>
            <Link href='/contact' class='hover:text-emerald-700'>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <Link
        href='/app/auth/Login'
        class='rounded-full border-2 border-emerald-950 bg-emerald-950 px-14 py-3 text-neutral-50 transition-colors duration-300 hover:bg-neutral-50 hover:text-emerald-950'
      >
        Login
      </Link>
    </header>
  );
});
