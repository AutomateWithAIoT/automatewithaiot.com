import { component$ } from "@builder.io/qwik"
import { mockStatusDistribution } from "~/data/mock-chart-data"

interface StatusDistributionProps {
  deviceId: string
}

export const StatusDistribution = component$<StatusDistributionProps>(({ deviceId }) => {
  // In a real app, you would filter data based on deviceId
  const data = mockStatusDistribution

  return (
    <div class="h-64 flex items-center justify-center">
      <div class="text-center text-gray-500 dark:text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
          />
        </svg>
        <p class="mt-2">Pie chart visualization would render here</p>
        <p class="text-sm">Device ID: {deviceId}</p>
      </div>
    </div>
  )
})
