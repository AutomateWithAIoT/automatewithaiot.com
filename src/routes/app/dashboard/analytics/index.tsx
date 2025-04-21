import { component$, useSignal } from "@builder.io/qwik"
import { DeviceSelector } from "~/components/dashboard/analytics/device-selector"
import { TimeRangeSelector } from "~/components/dashboard/analytics/time-range-selector"
import { TemperatureChart } from "~/components/dashboard/analytics/temperature-chart"
import { HumidityChart } from "~/components/dashboard/analytics/humidity-chart"
import { PowerUsageChart } from "~/components/dashboard/analytics/power-usage-chart"
import { StatusDistribution } from "~/components/dashboard/analytics/status-distribution"
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
    </div>
  )
})
