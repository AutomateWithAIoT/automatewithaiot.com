import { component$, useStore } from "@builder.io/qwik"
import { mockDevices } from "~/data/mock-devices"

export const DeviceOverview = component$(() => {
  const stats = useStore({
    total: mockDevices.length,
    online: mockDevices.filter((device) => device.isOnline).length,
    offline: mockDevices.filter((device) => !device.isOnline).length,
    critical: mockDevices.filter((device) => device.status === "critical").length,
  })

  const cards = [
    {
      title: "Total Devices",
      value: stats.total,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-emerald-600 dark:text-emerald-400"
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
      bgColor: "bg-white dark:bg-gray-800",
    },
    {
      title: "Online Devices",
      value: stats.online,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-green-600 dark:text-green-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-Linecap="round"
            stroke-Linejoin="round"
            stroke-Width="2"
            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
          />
        </svg>
      ),
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      title: "Offline Devices",
      value: stats.offline,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-600 dark:text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-Linecap="round"
            stroke-Linejoin="round"
            stroke-Width="2"
            d="M18.364 5.636a9 9 0 010 12.728m-3.536-3.536a5 5 0 010-7.07m-3.536 3.536a1 1 0 010-1.414"
          />
        </svg>
      ),
      bgColor: "bg-gray-50 dark:bg-gray-800",
    },
    {
      title: "Critical Alerts",
      value: stats.critical,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-red-600 dark:text-red-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-Linecap="round"
            stroke-Linejoin="round"
            stroke-Width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
      bgColor: "bg-red-50 dark:bg-red-900/20",
    },
  ]

  return (
    <>
      {cards.map((card, index) => (
        <div key={index} class={`${card.bgColor} rounded-xl shadow-md p-6`}>
          <div class="flex items-center">
            <div class="p-3 rounded-full bg-white dark:bg-gray-700 shadow-sm">{card.icon}</div>
            <div class="ml-5">
              <p class="text-sm font-medium text-gray-500 dark:text-gray-400">{card.title}</p>
              <p class="text-2xl font-semibold text-gray-800 dark:text-white">{card.value}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
})
