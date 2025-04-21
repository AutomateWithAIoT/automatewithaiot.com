import { component$, type PropFunction, useSignal, $ } from "@builder.io/qwik"
import type { Device } from "~/types/device"

interface DeviceSettingsModalProps {
  device: Device
  onClose$: PropFunction<() => void>
}

export const DeviceSettingsModal = component$<DeviceSettingsModalProps>(({ device, onClose$ }) => {
  const deviceName = useSignal(device.name)
  const deviceLocation = useSignal(device.location)
  const isSaving = useSignal(false)

  const saveSettings = $(async () => {
    isSaving.value = true

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real app, you would update the device here
    device.name = deviceName.value
    device.location = deviceLocation.value

    isSaving.value = false
    onClose$()
  })

  return (
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg w-full max-w-md overflow-hidden">
        <div class="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Device Settings</h3>
          <button
            onClick$={onClose$}
            class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="p-4">
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Device Name</label>
              <input
                type="text"
                value={deviceName.value}
                onChange$={(e) => (deviceName.value = e.target.value)}
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Location</label>
              <input
                type="text"
                value={deviceLocation.value}
                onChange$={(e) => (deviceLocation.value = e.target.value)}
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Device Type</label>
              <div class="px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {device.type.charAt(0).toUpperCase() + device.type.slice(1)}
              </div>
              <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">Device type cannot be changed</p>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Device ID</label>
              <div class="px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {device.id}
              </div>
            </div>
          </div>
        </div>

        <div class="p-4 border-t border-gray-200 dark:border-gray-700 flex justify-end space-x-3">
          <button
            onClick$={onClose$}
            class="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick$={saveSettings}
            disabled={isSaving.value}
            class="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSaving.value ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  )
})
