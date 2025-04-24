import { component$ } from "@builder.io/qwik"

interface Device {
  id: string
  name: string
  type: string
  location: string
}

interface DeviceSelectorProps {
  devices: Device[]
  selectedDeviceId: { value: string }
}

export const DeviceSelector = component$<DeviceSelectorProps>(({ devices, selectedDeviceId }) => {
  return (
    <div class="w-full md:w-64">
      <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Select Device</label>
      <select
        value={selectedDeviceId.value}
        onChange$={(e) => (selectedDeviceId.value = (e.target as HTMLSelectElement).value)}
        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        {devices.map((device) => (
          <option key={device.id} value={device.id}>
            {device.name +"-"+ device.location}
          </option>
        ))}
      </select>
    </div>
  )
})
