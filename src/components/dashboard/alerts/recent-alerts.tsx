import { component$ } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"
import { mockAlerts } from "~/data/mock-alerts"

export const RecentAlerts = component$(() => {
  const recentAlerts = mockAlerts.slice(0, 3)

  return (
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
      <div class="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <h2 class="font-semibold text-gray-800 dark:text-white">Recent Alerts</h2>
        <Link
          href="/dashboard/alerts"
          class="text-sm text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
        >
          View all
        </Link>
      </div>

      {recentAlerts.length > 0 ? (
        <div class="divide-y divide-gray-200 dark:divide-gray-700">
          {recentAlerts.map((alert) => (
            <div key={alert.id} class="p-4">
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
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
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-800 dark:text-white">{alert.title}</p>
                  <p class="mt-1 text-xs text-gray-600 dark:text-gray-300">{alert.message}</p>
                  <div class="mt-1 flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <span>{alert.deviceName}</span>
                    <span class="mx-1">•</span>
                    <span>{alert.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div class="p-4 text-center">
          <p class="text-sm text-gray-500 dark:text-gray-400">No recent alerts</p>
        </div>
      )}
    </div>
  )
})
