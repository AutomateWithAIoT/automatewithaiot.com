import {
  component$,
  useSignal,
  $,
  useStore,
  useVisibleTask$,
} from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";

export const Sidebar = component$(() => {
  const user = useStore({
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    role: "User",
    notifications: {
      email: true,
      push: true,
      sms: false,
    },
    theme: "light",
  });
  useVisibleTask$(() => {
    user.name = sessionStorage.getItem("name") || "Alex Johnson";
    user.email = sessionStorage.getItem("email") || "alex.johnson@example.com";
    user.role = sessionStorage.getItem("role") || "User";
    user.notifications = JSON.parse(
      sessionStorage.getItem("notifications") ||
        JSON.stringify({
          email: true,
          push: true,
          sms: false,
        }),
    );
    user.theme = sessionStorage.getItem("theme") || "light";
  });

  const location = useLocation();
  const isCollapsed = useSignal(false);

  const toggleSidebar = $(() => {
    isCollapsed.value = !isCollapsed.value;
  });

  const isActive = (path: string) => {
    return location.url.pathname.startsWith(`/app/dashboard${path}`);
  };

  const navItems = [
    {
      name: "Dashboard",
      path: "",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-Linecap="round"
            stroke-Linejoin="round"
            stroke-Width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      name: "Devices",
      path: "/devices",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-Linecap="round"
            stroke-Linejoin="round"
            stroke-Width="2"
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      ),
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-Linecap="round"
            stroke-Linejoin="round"
            stroke-Width="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      name: "Alerts",
      path: "/alerts",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-Linecap="round"
            stroke-Linejoin="round"
            stroke-Width="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      ),
    },
    {
      name: "Pet Tracking",
      path: "/pet-tracking",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-Linecap="round"
            stroke-Linejoin="round"
            stroke-Width="2"
            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
          />
        </svg>
      ),
      tags: "New, AI",
    },

    {
      name: "Settings",
      path: "/settings",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-Linecap="round"
            stroke-Linejoin="round"
            stroke-Width="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            stroke-Linecap="round"
            stroke-Linejoin="round"
            stroke-Width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <aside
      class={`bg-white shadow-md transition-all duration-300 dark:bg-gray-800 ${isCollapsed.value ? "w-16" : "w-64"} flex h-screen flex-col`}
    >
      <div class="flex items-center justify-between border-b border-gray-200 p-4 dark:border-gray-700">
        <div
          class={`flex items-center ${isCollapsed.value ? "w-full justify-center" : ""}`}
        >
          <div class="text-emerald-600 dark:text-emerald-400">
            <img src="/favicon.png" alt="Logo" class="w-12" />
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-Linecap="round"
                stroke-Linejoin="round"
                stroke-Width="2"
                d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
              />
            </svg> */}
          </div>
          {!isCollapsed.value && (
            <span class="ml-2 cursor-default text-lg font-semibold text-gray-800 dark:text-white">
              IoT Dashboard
            </span>
          )}
        </div>
        <button
          onClick$={toggleSidebar}
          class="cursor-pointer text-gray-500 hover:text-gray-700 focus:outline-none dark:text-gray-400 dark:hover:text-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isCollapsed.value ? (
              <path
                stroke-Linecap="round"
                stroke-Linejoin="round"
                stroke-Width="2"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            ) : (
              <path
                stroke-Linecap="round"
                stroke-Linejoin="round"
                stroke-Width="2"
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            )}
          </svg>
        </button>
      </div>

      <nav class="flex-1 overflow-y-auto py-4">
        <ul class="space-y-2 px-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={`/app/dashboard${item.path}`}
                class={`flex items-center ${isCollapsed.value ? "justify-center" : "px-4"} rounded-lg py-2 transition-colors ${isActive(item.path) ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400" : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"}`}
              >
                <span class="flex-shrink-0">{item.icon}</span>
                {!isCollapsed.value && <span class="ml-3">{item.name}</span>}
                {!isCollapsed.value &&
                  item.tags?.split(",").map((tag) => (
                    <span
                      key={tag}
                      class="ml-2 inline-flex items-center rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400"
                    >
                      {tag.trim()}
                    </span>
                  ))}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div class="cursor-default overflow-hidden border-t border-gray-200 p-4 dark:border-gray-700">
        <div
          class={`flex ${isCollapsed.value ? "justify-center" : "items-center"}`}
        >
          <div class="flex-shrink-0">
            <img
              src="/placeholder.svg?height=32&width=32"
              alt="User avatar"
              class="h-8 w-8 rounded-full"
            />
          </div>
          {!isCollapsed.value && (
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-800 dark:text-white">
                {user.name}
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                {user.email}
              </p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
});
