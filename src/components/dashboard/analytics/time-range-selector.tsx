import { component$ } from "@builder.io/qwik"

interface TimeRangeSelectorProps {
  timeRange: { value: string }
}

export const TimeRangeSelector = component$<TimeRangeSelectorProps>(({ timeRange }) => {
  return (
    <div class="flex items-center space-x-2">
      <button
        onClick$={() => (timeRange.value = "24h")}
        class={`px-3 py-1 rounded-lg text-sm ${
          timeRange.value === "24h"
            ? "bg-emerald-500 text-white"
            : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
        }`}
      >
        24h
      </button>
      <button
        onClick$={() => (timeRange.value = "7d")}
        class={`px-3 py-1 rounded-lg text-sm ${
          timeRange.value === "7d"
            ? "bg-emerald-500 text-white"
            : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
        }`}
      >
        7d
      </button>
      <button
        onClick$={() => (timeRange.value = "30d")}
        class={`px-3 py-1 rounded-lg text-sm ${
          timeRange.value === "30d"
            ? "bg-emerald-500 text-white"
            : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
        }`}
      >
        30d
      </button>
      <button
        onClick$={() => (timeRange.value = "90d")}
        class={`px-3 py-1 rounded-lg text-sm ${
          timeRange.value === "90d"
            ? "bg-emerald-500 text-white"
            : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
        }`}
      >
        90d
      </button>
    </div>
  )
})
