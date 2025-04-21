import { component$ } from "@builder.io/qwik"

interface TimeRangeSelectorProps {
  timeRange: { value: string }
}

export const TimeRangeSelector = component$<TimeRangeSelectorProps>(({ timeRange }) => {
  const options = [
    { value: "1h", label: "Last Hour" },
    { value: "24h", label: "Last 24 Hours" },
    { value: "7d", label: "Last 7 Days" },
    { value: "30d", label: "Last 30 Days" },
  ]

  return (
    <div>
      <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Time Range</label>
      <div class="flex space-x-2">
        {options.map((option) => (
          <button
            key={option.value}
            onClick$={() => (timeRange.value = option.value)}
            class={`px-3 py-1 text-sm rounded-lg ${
              timeRange.value === option.value
                ? "bg-emerald-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
})
