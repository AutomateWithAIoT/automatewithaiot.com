import { component$, useSignal, $ } from "@builder.io/qwik";
import { mockAlerts } from "~/data/mock-alerts";

export const Navbar = component$(() => {
  const isNotificationsOpen = useSignal(false);
  const isProfileOpen = useSignal(false);
  const unreadNotifications = useSignal(
    mockAlerts.filter((alert) => !alert.read).length
  );

  const toggleNotifications = $(() => {
    isNotificationsOpen.value = !isNotificationsOpen.value;
    if (isProfileOpen.value) isProfileOpen.value = false;
  });

  const toggleProfile = $(() => {
    isProfileOpen.value = !isProfileOpen.value;
    if (isNotificationsOpen.value) isNotificationsOpen.value = false;
  });

  const markAllAsRead = $(() => {
    unreadNotifications.value = 0;
  });

  return (
    <header class='bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 h-16 flex items-center justify-between px-4 md:px-6'>
      <div class='flex items-center'>
        <h1 class='text-xl font-semibold text-gray-800 dark:text-white'>
          AI-Powered IoT Solutions
        </h1>
      </div>

      <div class='flex items-center space-x-4'>
        <div class='relative'>
          <button
            onClick$={toggleNotifications}
            class='text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none'
            aria-label='Notifications'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-Linecap='round'
                stroke-Linejoin='round'
                stroke-Width='2'
                d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
              />
            </svg>
            {unreadNotifications.value > 0 && (
              <span class='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
                {unreadNotifications.value}
              </span>
            )}
          </button>

          {isNotificationsOpen.value && (
            <div class='absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden z-10 border border-gray-200 dark:border-gray-700'>
              <div class='p-3 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center'>
                <h3 class='font-semibold text-gray-800 dark:text-white'>
                  Notifications
                </h3>
                <button
                  onClick$={markAllAsRead}
                  class='text-xs text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300'
                >
                  Mark all as read
                </button>
              </div>
              <div class='max-h-96 overflow-y-auto'>
                {mockAlerts.slice(0, 5).map((alert) => (
                  <div
                    key={alert.id}
                    class={`p-3 border-b border-gray-200 dark:border-gray-700 ${!alert.read ? "bg-emerald-50 dark:bg-emerald-900/20" : ""}`}
                  >
                    <div class='flex items-start'>
                      <div
                        class={`flex-shrink-0 rounded-full p-1 ${
                          alert.severity === "critical"
                            ? "bg-red-100 text-red-500 dark:bg-red-900/30 dark:text-red-400"
                            : alert.severity === "warning"
                              ? "bg-yellow-100 text-yellow-500 dark:bg-yellow-900/30 dark:text-yellow-400"
                              : "bg-blue-100 text-blue-500 dark:bg-blue-900/30 dark:text-blue-400"
                        }`}
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          class='h-5 w-5'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          {alert.severity === "critical" ? (
                            <path
                              stroke-Linecap='round'
                              stroke-Linejoin='round'
                              stroke-Width='2'
                              d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
                            />
                          ) : alert.severity === "warning" ? (
                            <path
                              stroke-Linecap='round'
                              stroke-Linejoin='round'
                              stroke-Width='2'
                              d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                            />
                          ) : (
                            <path
                              stroke-Linecap='round'
                              stroke-Linejoin='round'
                              stroke-Width='2'
                              d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                            />
                          )}
                        </svg>
                      </div>
                      <div class='ml-3 flex-1'>
                        <p class='text-sm font-medium text-gray-800 dark:text-white'>
                          {alert.title}
                        </p>
                        <p class='text-xs text-gray-500 dark:text-gray-400'>
                          {alert.message}
                        </p>
                        <p class='text-xs text-gray-400 dark:text-gray-500 mt-1'>
                          {alert.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div class='p-3 text-center'>
                <a
                  href='/dashboard/alerts'
                  class='text-sm text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300'
                >
                  View all notifications
                </a>
              </div>
            </div>
          )}
        </div>

        <div class='relative'>
          <button
            onClick$={toggleProfile}
            class='flex items-center focus:outline-none'
            aria-label='User menu'
          >
            <img
              src='/placeholder.svg?height=32&width=32'
              alt='User avatar'
              class='h-8 w-8 rounded-full'
            />
            <span class='hidden md:block ml-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
              Alex Johnson
            </span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='hidden md:block h-5 w-5 ml-1 text-gray-400'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-Linecap='round'
                stroke-Linejoin='round'
                stroke-Width='2'
                d='M19 9l-7 7-7-7'
              />
            </svg>
          </button>

          {isProfileOpen.value && (
            <div class='absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden z-10 border border-gray-200 dark:border-gray-700'>
              <div class='p-3 border-b border-gray-200 dark:border-gray-700'>
                <p class='text-sm font-medium text-gray-800 dark:text-white'>
                  Alex Johnson
                </p>
                <p class='text-xs text-gray-500 dark:text-gray-400'>
                  alex.johnson@example.com
                </p>
              </div>
              <div class='py-1'>
                <a
                  href='/dashboard/settings'
                  class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                >
                  Settings
                </a>
                <a
                  href='#'
                  class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                >
                  Help & Support
                </a>
                <a
                  href='#'
                  class='block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-red-400 dark:hover:bg-gray-700'
                >
                  Sign out
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
});
