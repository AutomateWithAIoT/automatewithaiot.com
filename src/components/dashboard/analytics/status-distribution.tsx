import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik"

interface StatusDistributionProps {
  deviceId: string
}

export const StatusDistribution = component$<StatusDistributionProps>(({ deviceId }) => {
  // Dummy data for the status distribution
  const chartData = useStore({
    labels: ["Healthy", "Warning", "Critical", "Offline"],
    values: [75, 15, 5, 5],
    colors: ["#10B981", "#F59E0B", "#EF4444", "#6B7280"],
  })

  // Update chart data when device changes
  useVisibleTask$(({ track }) => {
    track(() => deviceId)

    // Simulate different data for different devices
    const deviceSeed = deviceId.charCodeAt(0) % 5

    if (deviceSeed === 0) {
      chartData.values = [75, 15, 5, 5]
    } else if (deviceSeed === 1) {
      chartData.values = [65, 20, 10, 5]
    } else if (deviceSeed === 2) {
      chartData.values = [80, 10, 5, 5]
    } else if (deviceSeed === 3) {
      chartData.values = [60, 25, 10, 5]
    } else {
      chartData.values = [70, 15, 10, 5]
    }
  })

  return (
    <div class="h-64">
      {/* Chart visualization - Donut chart */}
      <div class="flex justify-center items-center h-full">
        <div class="relative w-40 h-40">
          <svg viewBox="0 0 36 36" class="w-full h-full">
            {/* Create donut chart segments */}
            {
              chartData.values.reduce(
                (acc, value, index) => {
                  const startAngle = acc.offset
                  const sliceAngle = (value / 100) * 360
                  const endAngle = startAngle + sliceAngle

                  // Convert angles to radians for sin/cos
                  const startAngleRad = (startAngle - 90) * (Math.PI / 180)
                  const endAngleRad = (endAngle - 90) * (Math.PI / 180)

                  // Calculate path coordinates
                  const x1 = 18 + 16 * Math.cos(startAngleRad)
                  const y1 = 18 + 16 * Math.sin(startAngleRad)
                  const x2 = 18 + 16 * Math.cos(endAngleRad)
                  const y2 = 18 + 16 * Math.sin(endAngleRad)

                  // Determine if the slice is more than 180 degrees
                  const largeArcFlag = sliceAngle > 180 ? 1 : 0

                  // Create SVG path for the slice
                  const pathData = [`M 18 18`, `L ${x1} ${y1}`, `A 16 16 0 ${largeArcFlag} 1 ${x2} ${y2}`, `Z`].join(
                    " ",
                  )

                  return {
                    paths: [...acc.paths, <path key={index} d={pathData} fill={chartData.colors[index]} />],
                    offset: endAngle,
                  }
                },
                { paths: [] as any[], offset: 0 },
              ).paths
            }

            {/* Inner circle to create donut hole */}
            <circle cx="18" cy="18" r="10" fill="white" class="dark:fill-gray-800" />
          </svg>
        </div>

        {/* Legend */}
        <div class="ml-6 space-y-2">
          {chartData.labels.map((label, index) => (
            <div key={index} class="flex items-center">
              <div class="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: chartData.colors[index] }}></div>
              <span class="text-sm text-gray-700 dark:text-gray-300">{label}</span>
              <span class="ml-2 text-sm font-medium text-gray-900 dark:text-white">{chartData.values[index]}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
})
