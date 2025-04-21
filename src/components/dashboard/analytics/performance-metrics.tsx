import { component$ } from "@builder.io/qwik";

export const PerformanceMetrics = component$(() => {
  return (
    <div class='bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden'>
      <div class='p-4 border-b border-gray-200 dark:border-gray-700'>
        <h2 class='font-semibold text-gray-800 dark:text-white'>
          Performance Metrics
        </h2>
      </div>

      <div class='p-4'>
        <div class='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div class='p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg'>
            <div class='flex items-center'>
              <div class='p-2 rounded-full bg-emerald-100 dark:bg-emerald-800'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='h-5 w-5 text-emerald-600 dark:text-emerald-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-Linecap='round'
                    stroke-Linejoin='round'
                    stroke-Width='2'
                    d='M13 10V3L4 14h7v7l9-11h-7z'
                  />
                </svg>
              </div>
              <div class='ml-3'>
                <p class='text-sm font-medium text-gray-500 dark:text-gray-400'>
                  Energy Efficiency
                </p>
                <p class='text-lg font-semibold text-gray-800 dark:text-white'>
                  92%
                </p>
              </div>
            </div>
            <div class='mt-2'>
              <div class='w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700'>
                <div
                  class='bg-emerald-500 h-2 rounded-full'
                  style='width: 92%'
                ></div>
              </div>
            </div>
          </div>

          <div class='p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg'>
            <div class='flex items-center'>
              <div class='p-2 rounded-full bg-blue-100 dark:bg-blue-800'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='h-5 w-5 text-blue-600 dark:text-blue-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-Linecap='round'
                    stroke-Linejoin='round'
                    stroke-Width='2'
                    d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <div class='ml-3'>
                <p class='text-sm font-medium text-gray-500 dark:text-gray-400'>
                  Uptime
                </p>
                <p class='text-lg font-semibold text-gray-800 dark:text-white'>
                  99.8%
                </p>
              </div>
            </div>
            <div class='mt-2'>
              <div class='w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700'>
                <div
                  class='bg-blue-500 h-2 rounded-full'
                  style='width: 99.8%'
                ></div>
              </div>
            </div>
          </div>

          <div class='p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg'>
            <div class='flex items-center'>
              <div class='p-2 rounded-full bg-purple-100 dark:bg-purple-800'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='h-5 w-5 text-purple-600 dark:text-purple-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-Linecap='round'
                    stroke-Linejoin='round'
                    stroke-Width='2'
                    d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                  />
                </svg>
              </div>
              <div class='ml-3'>
                <p class='text-sm font-medium text-gray-500 dark:text-gray-400'>
                  Response Time
                </p>
                <p class='text-lg font-semibold text-gray-800 dark:text-white'>
                  45ms
                </p>
              </div>
            </div>
            <div class='mt-2'>
              <div class='w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700'>
                <div
                  class='bg-purple-500 h-2 rounded-full'
                  style='width: 85%'
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
