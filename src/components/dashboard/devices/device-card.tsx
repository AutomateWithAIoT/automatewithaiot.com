import { component$, type PropFunction } from "@builder.io/qwik"
import type { Device } from "~/types/device"

interface DeviceCardProps {
  device: Device
  onToggle$: PropFunction<() => void>
  onSettings$: PropFunction<() => void>
}

export const DeviceCard = component$<DeviceCardProps>(({ device, onToggle$, onSettings$ }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "healthy":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
      case "warning":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
      case "critical":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
    }
  }

  return (
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
      <div class="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <div class="flex items-center">
          <div
            class={`p-2 rounded-lg ${device.isOnline ? "bg-emerald-100 dark:bg-emerald-900/30" : "bg-gray-100 dark:bg-gray-700"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class={`h-6 w-6 ${device.isOnline ? "text-emerald-600 dark:text-emerald-400" : "text-gray-500 dark:text-gray-400"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {device.type === "thermostat" ? (
                <path
                  stroke-Linecap="round"
                  stroke-Linejoin="round"
                  stroke-Width="2"
                  d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                />
              ) : device.type === "camera" ? (
                <path
                  stroke-Linecap="round"
                  stroke-Linejoin="round"
                  stroke-Width="2"
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              ) : device.type === "light" ? (
                <path
                  stroke-Linecap="round"
                  stroke-Linejoin="round"
                  stroke-Width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              ) : (
                <path
                  stroke-Linecap="round"
                  stroke-Linejoin="round"
                  stroke-Width="2"
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              )}
            </svg>
          </div>
          <div class="ml-3">
            <h3 class="text-lg font-medium text-gray-800 dark:text-white">{device.name}</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">{device.location}</p>
          </div>
        </div>
        <button
          onClick$={onSettings$}
          class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-Linecap="round"
              stroke-Linejoin="round"
              stroke-Width="2"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path stroke-Linecap="round" stroke-Linejoin="round" stroke-Width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>

      <div class="p-4">
        <div class="flex justify-between items-center mb-4">
          <span class={`px-2 py-1 text-xs rounded-full ${getStatusColor(device.status)}`}>
            {device.status.charAt(0).toUpperCase() + device.status.slice(1)}
          </span>
          <span class="text-xs text-gray-500 dark:text-gray-400">Last updated: {device.lastUpdated}</span>
        </div>

        <div class="space-y-3">
          {device.metrics.map((metric, index) => (
            <div key={index} class="flex justify-between items-center">
              <span class="text-sm text-gray-600 dark:text-gray-300">{metric.name}</span>
              <span class="text-sm font-medium text-gray-800 dark:text-white">
                {metric.value} {metric.unit}
              </span>
            </div>
          ))}
        </div>

        <div class="mt-6 flex items-center justify-between">
          <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
            {device.isOnline ? "Online" : "Offline"}
          </span>
          <button
            onClick$={onToggle$}
            class={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${device.isOnline ? "bg-emerald-500" : "bg-gray-300 dark:bg-gray-600"}`}
          >
            <span
              class={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${device.isOnline ? "translate-x-6" : "translate-x-1"}`}
            />
          </button>
        </div>

        {device.aiInsight && (
          <div class="mt-4 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
            <div class="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-emerald-600 dark:text-emerald-400 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-Linecap="round" stroke-Linejoin="round" stroke-Width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <div class="ml-2">
                <p class="text-xs font-medium text-emerald-800 dark:text-emerald-300">AI Insight</p>
                <p class="text-xs text-emerald-700 dark:text-emerald-400">{device.aiInsight}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
})
