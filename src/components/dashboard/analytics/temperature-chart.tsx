import { component$ } from "@builder.io/qwik"
// import { mockTemperatureData } from "~/data/mock-chart-data"

interface TemperatureChartProps {
  deviceId: string
  timeRange: string
}

export const TemperatureChart = component$<TemperatureChartProps>(({ deviceId, timeRange }) => {
  // In a real app, you would filter data based on deviceId and timeRange
  // const data = mockTemperatureData

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
            stroke-Linecap="round"
            stroke-Linejoin="round"
            stroke-Width="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
        <p class="mt-2">Chart visualization would render here</p>
        <p class="text-sm">
          Device ID: {deviceId}, Time Range: {timeRange}
        </p>
      </div>
    </div>
  )
})
