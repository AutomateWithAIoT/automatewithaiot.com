import { component$, type PropFunction } from "@builder.io/qwik"
import type { Alert } from "~/types/alert"

interface AlertItemProps {
  alert: Alert
  onClear$: PropFunction<() => void>
}

export const AlertItem = component$<AlertItemProps>(({ alert, onClear$ }) => {
  return (
    <div class="p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50">
      <div class="flex items-start">
        <div
          class={`flex-shrink-0 rounded-full p-1 ${
            alert.severity === "critical"
              ? "bg-red-100 text-red-500 dark:bg-red-900/30 dark:text-red-400"
              : alert.severity === "warning"
                ? "bg-yellow-100 text-yellow-500 dark:bg-yellow-900/30 dark:text-yellow-400"
                : "bg-blue-100 text-blue-500 dark:bg-blue-900/30 dark:text-blue-400"
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {alert.severity === "critical" ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            ) : alert.severity === "warning" ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            )}
          </svg>
        </div>
        <div class="ml-3 flex-1">
          <div class="flex items-center justify-between">
            <p class="text-sm font-medium text-gray-800 dark:text-white">{alert.title}</p>
            <button onClick$={onClear$} class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p class="mt-1 text-sm text-gray-600 dark:text-gray-300">{alert.message}</p>
          <div class="mt-2 flex items-center justify-between">
            <p class="text-xs text-gray-500 dark:text-gray-400">{alert.deviceName}</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">{alert.time}</p>
          </div>
        </div>
      </div>
    </div>
  )
})
