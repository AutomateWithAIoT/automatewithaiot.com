import { component$ } from "@builder.io/qwik";
import { DeviceOverview } from "~/components/dashboard/device-overview/device-overview";
import { RecentAlerts } from "~/components/dashboard/alerts/recent-alerts";
import { PerformanceMetrics } from "~/components/dashboard/analytics/performance-metrics";
import { AiInsights } from "~/components/dashboard/ai-insights/ai-insights";

export default component$(() => {
  return (
    <div class='space-y-6'>
      <h1 class='text-2xl font-bold text-gray-800 dark:text-white'>
        Dashboard
      </h1>

      <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        <DeviceOverview />
      </div>

      <div class='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        <div class='lg:col-span-2'>
          <PerformanceMetrics />
        </div>
        <div class='space-y-6'>
          <RecentAlerts />
          <AiInsights />
        </div>
      </div>
    </div>
  );
});
