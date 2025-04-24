import { component$, useStore, useTask$, } from "@builder.io/qwik"

interface TemperatureChartProps {
  deviceId: string
  timeRange: string
}

export const TemperatureChart = component$<TemperatureChartProps>(({ deviceId, timeRange }) => {
  // Dummy data for the temperature chart
  const chartData = useStore({
    labels: ["12am", "4am", "8am", "12pm", "4pm", "8pm", "12am"],
    values: [68, 67, 69, 72, 74, 73, 70],
    min: 65,
    max: 75,
  })

  // Update chart data when device or time range changes
  useTask$(({ track }) => {
    track(() => deviceId)
    track(() => timeRange)

    // Simulate different data for different devices and time ranges
    const baseValues = [68, 67, 69, 72, 74, 73, 70]

    // Add some randomness based on deviceId and timeRange
    const deviceSeed = deviceId.charCodeAt(0) % 5
    const timeSeed = timeRange === "24h" ? 0 : timeRange === "7d" ? 1 : timeRange === "30d" ? 2 : 3

    chartData.values = baseValues.map((value) => {
      const randomOffset = Math.random() * 6 - 3
      return Math.round(value + deviceSeed + timeSeed + randomOffset)
    })

    chartData.min = Math.min(...chartData.values) - 2
    chartData.max = Math.max(...chartData.values) + 2
  })

  return (
    <div class="h-64">
      {/* Chart legend */}
      <div class="flex justify-between items-center mb-2">
        <div class="text-sm text-gray-500 dark:text-gray-400">
          Range: {chartData.min}°F - {chartData.max}°F
        </div>
        <div class="flex items-center">
          <div class="w-3 h-3 bg-emerald-500 rounded-full mr-1"></div>
          <span class="text-sm text-gray-500 dark:text-gray-400">Temperature</span>
        </div>
      </div>

      {/* Chart visualization */}
      <div class="relative h-52 mt-4">
        {/* Y-axis labels */}
        <div class="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-gray-500 dark:text-gray-400">
          <div>{chartData.max}°F</div>
          <div>{Math.round((chartData.max + chartData.min) / 2)}°F</div>
          <div>{chartData.min}°F</div>
        </div>

        {/* Chart area */}
        <div class="absolute left-10 right-0 top-0 bottom-0">
          {/* Horizontal grid lines */}
          <div class="absolute left-0 right-0 top-0 h-px bg-gray-200 dark:bg-gray-700"></div>
          <div class="absolute left-0 right-0 top-1/2 h-px bg-gray-200 dark:bg-gray-700"></div>
          <div class="absolute left-0 right-0 bottom-0 h-px bg-gray-200 dark:bg-gray-700"></div>

          {/* Line chart */}
          <svg class="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="temperatureGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-Color="rgb(16, 185, 129)" stop-Opacity="0.2" />
                <stop offset="100%" stop-Color="rgb(16, 185, 129)" stop-Opacity="0" />
              </linearGradient>
            </defs>

            {/* Area fill */}
            <path
              d={`
      M 0 ${100 - ((chartData.values[0] - chartData.min) / (chartData.max - chartData.min)) * 100}
      ${chartData.values
        .map((value, index) => {
          const x = (index / (chartData.values.length - 1)) * 100
          const y = 100 - ((value - chartData.min) / (chartData.max - chartData.min)) * 100
          return `L ${x} ${y}`
        })
        .join(" ")}
      L 100 100
      L 0 100
      Z
    `}
              fill="url(#temperatureGradient)"
              stroke="none"
            />

            {/* Line */}
            <path
              d={`
      M 0 ${100 - ((chartData.values[0] - chartData.min) / (chartData.max - chartData.min)) * 100}
      ${chartData.values
        .map((value, index) => {
          const x = (index / (chartData.values.length - 1)) * 100
          const y = 100 - ((value - chartData.min) / (chartData.max - chartData.min)) * 100
          return `L ${x} ${y}`
        })
        .join(" ")}
    `}
              fill="none"
              stroke="rgb(16, 185, 129)"
              stroke-Width="1.5"
              vector-Effect="non-scaling-stroke"
            />

            {/* Data points */}
            {chartData.values.map((value, index) => {
              const x = (index / (chartData.values.length - 1)) * 100
              const y = 100 - ((value - chartData.min) / (chartData.max - chartData.min)) * 100
              return (
                <circle
                  key={index}
                  cx={`${x}`}
                  cy={`${y}`}
                  r="1.5"
                  fill="white"
                  stroke="rgb(16, 185, 129)"
                  stroke-Width="1.5"
                  vector-Effect="non-scaling-stroke"
                />
              )
            })}
          </svg>
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
