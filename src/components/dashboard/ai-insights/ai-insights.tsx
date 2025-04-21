import { component$ } from "@builder.io/qwik"

export const AiInsights = component$(() => {
  const insights = [
    {
      title: "Energy Optimization",
      message: "Based on usage patterns, you could save 15% on energy by adjusting thermostat schedules.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-emerald-600 dark:text-emerald-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Maintenance Alert",
      message: "Predictive analysis suggests Living Room Camera may need maintenance within 2 weeks.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-yellow-600 dark:text-yellow-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      ),
    },
  ]

  return (
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
      <div class="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
        <h2 class="font-semibold text-gray-800 dark:text-white">AI Insights</h2>
      </div>

      <div class="divide-y divide-gray-200 dark:divide-gray-700">
        {insights.map((insight, index) => (
          <div key={index} class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">{insight.icon}</div>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-800 dark:text-white">{insight.title}</p>
                <p class="mt-1 text-sm text-gray-600 dark:text-gray-300">{insight.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
})
