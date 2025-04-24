import { component$, useStore, useTask$ } from "@builder.io/qwik"

export const PerformanceMetrics = component$(() => {
  // Dummy data for performance metrics
  const metrics = useStore({
    uptime: "99.8%",
    responseTime: "124ms",
    cpuUsage: "32%",
    memoryUsage: "45%",
    diskUsage: "28%",
    networkTraffic: "1.2 GB/day",
  })

  // Simulate changing metrics
  useTask$(({ cleanup }) => {
    const interval = setInterval(() => {
      metrics.responseTime = `${Math.floor(Math.random() * 50) + 100}ms`
      metrics.cpuUsage = `${Math.floor(Math.random() * 15) + 25}%`
      metrics.memoryUsage = `${Math.floor(Math.random() * 20) + 35}%`
    }, 5000)

    cleanup(() => clearInterval(interval))
  })

  return (
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
      <div class="p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 class="font-semibold text-gray-800 dark:text-white">Performance Metrics</h2>
      </div>
      <div class="p-4">
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div class="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div class="text-sm text-gray-500 dark:text-gray-400">Uptime</div>
            <div class="text-xl font-semibold text-gray-800 dark:text-white mt-1">{metrics.uptime}</div>
          </div>
          <div class="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div class="text-sm text-gray-500 dark:text-gray-400">Response Time</div>
            <div class="text-xl font-semibold text-gray-800 dark:text-white mt-1">{metrics.responseTime}</div>
          </div>
          <div class="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div class="text-sm text-gray-500 dark:text-gray-400">CPU Usage</div>
            <div class="text-xl font-semibold text-gray-800 dark:text-white mt-1">{metrics.cpuUsage}</div>
          </div>
          <div class="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div class="text-sm text-gray-500 dark:text-gray-400">Memory Usage</div>
            <div class="text-xl font-semibold text-gray-800 dark:text-white mt-1">{metrics.memoryUsage}</div>
          </div>
          <div class="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div class="text-sm text-gray-500 dark:text-gray-400">Disk Usage</div>
            <div class="text-xl font-semibold text-gray-800 dark:text-white mt-1">{metrics.diskUsage}</div>
          </div>
          <div class="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div class="text-sm text-gray-500 dark:text-gray-400">Network Traffic</div>
            <div class="text-xl font-semibold text-gray-800 dark:text-white mt-1">{metrics.networkTraffic}</div>
          </div>
        </div>

        {/* Simple line chart for overall performance trend */}
        <div class="mt-6 h-24">
          <div class="text-sm text-gray-500 dark:text-gray-400 mb-2">Overall Performance Trend</div>
          <div class="relative h-16">
            <svg class="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
              <defs>
                <linearGradient id="performanceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-Color="rgb(16, 185, 129)" stop-Opacity="0.2" />
                  <stop offset="100%" stop-Color="rgb(16, 185, 129)" stop-Opacity="0" />
                </linearGradient>
              </defs>

              {/* Performance trend line with area fill */}
              <path
                d="M0,20 C10,18 20,8 30,10 C40,12 50,5 60,3 C70,1 80,5 90,8 L100,8 L100,40 L0,40 Z"
                fill="url(#performanceGradient)"
                stroke="none"
              />
              <path
                d="M0,20 C10,18 20,8 30,10 C40,12 50,5 60,3 C70,1 80,5 90,8 L100,8"
                fill="none"
                stroke="rgb(16, 185, 129)"
                stroke-Width="1.5"
                vector-Effect="non-scaling-stroke"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
})
