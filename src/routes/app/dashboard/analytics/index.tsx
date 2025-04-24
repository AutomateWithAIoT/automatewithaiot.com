import { component$, useSignal } from "@builder.io/qwik"
import { DeviceSelector } from "~/components/dashboard/analytics/device-selector"
import { TimeRangeSelector } from "~/components/dashboard/analytics/time-range-selector"
import { TemperatureChart } from "~/components/dashboard/analytics/temperature-chart"
import { HumidityChart } from "~/components/dashboard/analytics/humidity-chart"
import { PowerUsageChart } from "~/components/dashboard/analytics/power-usage-chart"
import { StatusDistribution } from "~/components/dashboard/analytics/status-distribution"
import { PerformanceMetrics } from "~/components/dashboard/analytics/performance-metrics"
import { mockDevices } from "~/data/mock-devices"

export default component$(() => {
  const selectedDeviceId = useSignal(mockDevices[0]?.id || "")
  const timeRange = useSignal("24h")

  return (
    <div class="space-y-6">
      <h1 class="text-2xl font-bold text-gray-800 dark:text-white">Analytics</h1>

      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
        <DeviceSelector devices={mockDevices} selectedDeviceId={selectedDeviceId} />
        <TimeRangeSelector timeRange={timeRange} />
      </div>

      {/* Performance Metrics Overview */}
      <PerformanceMetrics />

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
          <h2 class="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Temperature</h2>
          <TemperatureChart deviceId={selectedDeviceId.value} timeRange={timeRange.value} />
        </div>

        <div class="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
          <h2 class="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Humidity</h2>
          <HumidityChart deviceId={selectedDeviceId.value} timeRange={timeRange.value} />
        </div>

        <div class="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
          <h2 class="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Power Usage</h2>
          <PowerUsageChart deviceId={selectedDeviceId.value} timeRange={timeRange.value} />
        </div>

        <div class="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
          <h2 class="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Status Distribution</h2>
          <StatusDistribution deviceId={selectedDeviceId.value} />
        </div>
      </div>

      {/* Summary section */}
      <div class="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
        <h2 class="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Analytics Summary</h2>
        <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <p class="text-gray-700 dark:text-gray-300">
            Based on the collected data, your device{" "}
            <span class="font-medium">
              {mockDevices.find((d) => d.id === selectedDeviceId.value)?.name || "Unknown"}
            </span>{" "}
            is performing within normal parameters. The temperature and humidity levels are stable, and power
            consumption is consistent with expected usage patterns.
          </p>
          <div class="mt-4 flex flex-wrap gap-3">
            <div class="px-3 py-1 bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 rounded-full text-sm">
              No anomalies detected
            </div>
            <div class="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-sm">
              Optimal performance
            </div>
            <div class="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 rounded-full text-sm">
              Energy efficient
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})
