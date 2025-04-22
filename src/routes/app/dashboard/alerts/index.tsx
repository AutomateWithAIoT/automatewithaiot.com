import { component$, useSignal, $ } from "@builder.io/qwik"
import { AlertItem } from "~/components/dashboard/alerts/alert-item"
import { mockAlerts } from "~/data/mock-alerts"

export default component$(() => {
  const alerts = useSignal([...mockAlerts])
  const filter = useSignal("all")

  const clearAlert = $((alertId:string) => {
    alerts.value = alerts.value.filter((alert) => alert.id !== alertId)
  })

  const clearAllAlerts = $(() => {
    alerts.value = []
  })

  const filteredAlerts = useSignal([...mockAlerts])

  const updateFilter = $((newFilter:string) => {
    filter.value = newFilter
    if (newFilter === "all") {
      filteredAlerts.value = [...alerts.value]
    } else {
      filteredAlerts.value = alerts.value.filter((alert) => alert.severity === newFilter)
    }
  })

  return (
    <div class="space-y-6">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white">Alerts & Notifications</h1>

        <div class="flex items-center gap-2">
          <button
            onClick$={() => updateFilter("all")}
            class={`px-3 py-1 rounded-lg text-sm ${filter.value === "all" ? "bg-emerald-500 text-white" : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"}`}
          >
            All
          </button>
          <button
            onClick$={() => updateFilter("critical")}
            class={`px-3 py-1 rounded-lg text-sm ${filter.value === "critical" ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"}`}
          >
            Critical
          </button>
          <button
            onClick$={() => updateFilter("warning")}
            class={`px-3 py-1 rounded-lg text-sm ${filter.value === "warning" ? "bg-yellow-500 text-white" : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"}`}
          >
            Warning
          </button>
          <button
            onClick$={() => updateFilter("info")}
            class={`px-3 py-1 rounded-lg text-sm ${filter.value === "info" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"}`}
          >
            Info
          </button>
        </div>
      </div>

      {filteredAlerts.value.length > 0 ? (
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div class="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <h2 class="font-semibold text-gray-800 dark:text-white">Notification History</h2>
            <button
              onClick$={clearAllAlerts}
              class="text-sm text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400"
            >
              Clear All
            </button>
          </div>
          <div class="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredAlerts.value.map((alert) => (
              <AlertItem key={alert.id} alert={alert} onClear$={() => clearAlert(alert.id)} />
            ))}
          </div>
        </div>
      ) : (
        <div class="text-center py-12 bg-white dark:bg-gray-800 rounded-xl shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 mx-auto text-gray-400"
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
          <h3 class="mt-4 text-lg font-medium text-gray-900 dark:text-white">No notifications</h3>
          <p class="mt-1 text-gray-500 dark:text-gray-400">You're all caught up! No new alerts to display.</p>
        </div>
      )}
    </div>
  )
})
