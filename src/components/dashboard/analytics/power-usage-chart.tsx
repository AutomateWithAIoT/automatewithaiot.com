import { component$ } from "@builder.io/qwik"
import { mockPowerUsageData } from "~/data/mock-chart-data"

interface PowerUsageChartProps {
  deviceId: string
  timeRange: string
}

export const PowerUsageChart = component$<PowerUsageChartProps>(({ deviceId, timeRange }) => {
  // In a real app, you would filter data based on deviceId and timeRange
  const data = mockPowerUsageData

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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <p class="mt-2">Chart visualization would render here</p>
        <p class="text-sm">
          Device ID: {deviceId}, Time Range: {timeRange}
        </p>
      </div>
    </div>
  )
})
