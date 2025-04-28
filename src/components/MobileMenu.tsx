import { $, component$, useOnDocument, useSignal, useStore } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const MobileMenu = component$(() => {
    const LoginStatus = useStore({
        isLoggedIn: false,
        username: "",
      });
    const isOpen = useSignal(false);
    const toggleMenu = $(() => {
        isOpen.value = !isOpen.value;
    })
    useOnDocument(
        "load",
        $(() => {
          const isLoggedIn = sessionStorage.getItem("isLoggedIn");
          if (isLoggedIn) {
            LoginStatus.isLoggedIn = true;
            LoginStatus.username = sessionStorage.getItem("username") || "";
          }
        }),
      )
      
    return (
        <div class={`fixed top-0 right-0 z-50 flex w-full flex-col items-center justify-center bg-emerald-50 text-emerald-950 ${isOpen.value ? "h-screen":"h-auto"}`}>
            <button onClick$={toggleMenu} class='absolute top-4 right-4 text-4xl'>
                {isOpen.value ? 
                <i class="material-symbols-outlined">Close</i>
                : 
                <i class="material-symbols-outlined">Menu</i>}
            </button>
            {isOpen.value && (
                <div class='flex flex-col items-center justify-center h-full'>
                <nav>
                    <ul class='flex flex-col items-center space-y-8 text-3xl font-bold uppercase'>
                        <li>
                            <Link href='/' class='hover:text-emerald-700' >
                                <div onClick$={toggleMenu}>
                                Home
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href='/about' class='hover:text-emerald-700' >
                                <div onClick$={toggleMenu}>
                                About
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href='/contact' class='hover:text-emerald-700' >
                                <div onClick$={toggleMenu}>
                                Contact
                                </div>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Link
                    href={`${LoginStatus.isLoggedIn ? '/app/dashboard' : '/app/auth/Login'}`}
                    class='fixed bottom-4 rounded-full border-2 border-emerald-950 bg-emerald-950 px-14 py-3 text-neutral-50 transition-colors duration-300 hover:bg-neutral-50 hover:text-emerald-950'>
                        {LoginStatus.isLoggedIn ? "Dashboard" : "Login"}
                      </Link>
            </div>
            )}
        </div>
    );
});
