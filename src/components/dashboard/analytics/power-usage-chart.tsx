import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik"

interface PowerUsageChartProps {
  deviceId: string
  timeRange: string
}

export const PowerUsageChart = component$<PowerUsageChartProps>(({ deviceId, timeRange }) => {
  // Dummy data for the power usage chart
  const chartData = useStore({
    labels: ["12am", "4am", "8am", "12pm", "4pm", "8pm", "12am"],
    values: [2.1, 1.8, 2.3, 3.2, 3.5, 3.0, 2.5],
    min: 1.5,
    max: 4.0,
  })

  // Update chart data when device or time range changes
  useVisibleTask$(({ track }) => {
    track(() => deviceId)
    track(() => timeRange)

    // Simulate different data for different devices and time ranges
    const baseValues = [2.1, 1.8, 2.3, 3.2, 3.5, 3.0, 2.5]

    // Add some randomness based on deviceId and timeRange
    const deviceSeed = (deviceId.charCodeAt(0) % 5) * 0.1
    const timeSeed = timeRange === "24h" ? 0 : timeRange === "7d" ? 0.2 : timeRange === "30d" ? 0.4 : 0.6

    chartData.values = baseValues.map((value) => {
      const randomOffset = Math.random() * 0.6 - 0.3
      return Number.parseFloat((value + deviceSeed + timeSeed + randomOffset).toFixed(1))
    })

    chartData.min = Number.parseFloat((Math.min(...chartData.values) - 0.5).toFixed(1))
    chartData.max = Number.parseFloat((Math.max(...chartData.values) + 0.5).toFixed(1))
  })

  return (
    <div class="h-64">
      {/* Chart legend */}
      <div class="flex justify-between items-center mb-2">
        <div class="text-sm text-gray-500 dark:text-gray-400">
          Range: {chartData.min}W - {chartData.max}W
        </div>
        <div class="flex items-center">
          <div class="w-3 h-3 bg-purple-500 rounded-full mr-1"></div>
          <span class="text-sm text-gray-500 dark:text-gray-400">Power Usage</span>
        </div>
      </div>

      {/* Chart visualization - Bar chart */}
      <div class="relative h-52 mt-4">
        {/* Y-axis labels */}
        <div class="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-gray-500 dark:text-gray-400">
          <div>{chartData.max}W</div>
          <div>{((chartData.max + chartData.min) / 2).toFixed(1)}W</div>
          <div>{chartData.min}W</div>
        </div>

        {/* Chart area */}
        <div class="absolute left-10 right-0 top-0 bottom-0">
          {/* Horizontal grid lines */}
          <div class="absolute left-0 right-0 top-0 h-px bg-gray-200 dark:bg-gray-700"></div>
          <div class="absolute left-0 right-0 top-1/2 h-px bg-gray-200 dark:bg-gray-700"></div>
          <div class="absolute left-0 right-0 bottom-0 h-px bg-gray-200 dark:bg-gray-700"></div>

          {/* Bar chart */}
          <div class="absolute inset-0 flex items-end justify-between px-1">
            {chartData.values.map((value, index) => {
              const height = ((value - chartData.min) / (chartData.max - chartData.min)) * 100
              return (
                <div key={index} class="h-full flex-1 flex items-end justify-center">
                  <div
                    class="w-full max-w-[20px] bg-purple-500 rounded-t transition-all duration-300 ease-in-out"
                    style={{ height: `${height}%` }}
                  ></div>
                </div>
              )
            })}
          </div>
        </div>

        {/* X-axis labels */}
        <div class="absolute left-10 right-0 bottom-0 translate-y-6 flex justify-between text-xs text-gray-500 dark:text-gray-400">
          {chartData.labels.map((label, index) => (
            <div key={index}>{label}</div>
          ))}
        </div>
      </div>
    </div>
  )
})
