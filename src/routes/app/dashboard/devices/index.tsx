import { component$, useSignal, useStore, $ } from "@builder.io/qwik";
import { DeviceCard } from "~/components/dashboard/devices/device-card";
import { DeviceSettingsModal } from "~/components/dashboard/devices/device-settings-modal";
import { mockDevices } from "~/data/mock-devices";

interface Device {
  id: string;
  name: string;
  type: string;
  location: string;
  isOnline: boolean;
  status: "healthy" | "warning" | "critical";
  lastUpdated: string;
  metrics: Array<{ name: string; value: string; unit: string }>;
  aiInsight?: string;
}

export default component$(() => {
  const devices = useStore(mockDevices);
  const searchQuery = useSignal("");
  const selectedDevice = useSignal<Device | null>(null);
  const isModalOpen = useSignal(false);

  const filteredDevices = useStore<{ list: Device[] }>({
    list: devices,
  });

  $(() => {
    filteredDevices.list = devices.filter(
      (device) =>
        device.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        device.type.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });

  const openModal = $((device: Device) => {
    selectedDevice.value = device;
    isModalOpen.value = true;
  });

  const closeModal = $(() => {
    isModalOpen.value = false;
  });

  const toggleDeviceStatus = $((deviceId: string) => {
    const device = devices.find((d) => d.id === deviceId);
    if (device) {
      device.isOnline = !device.isOnline;
    }
  });

  return (
    <div class='space-y-6'>
      <div class='flex flex-col md:flex-row md:items-center justify-between gap-4'>
        <h1 class='text-2xl font-bold text-gray-800 dark:text-white'>
          Devices
        </h1>

        <div class='relative'>
          <input
            type='text'
            placeholder='Search devices...'
            class='w-full md:w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white'
            bind:value={searchQuery}
          />
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class='h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              stroke-linecap='round'
              stroke-Linejoin='round'
              stroke-Width='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </div>
      </div>

      <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filteredDevices.list.map((device) => (
          <DeviceCard
            key={device.id}
            device={device}
            onToggle$={() => toggleDeviceStatus(device.id)}
            onSettings$={() => openModal(device)}
          />
        ))}
      </div>

      {filteredDevices.list.length === 0 && (
        <div class='text-center py-12'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class='h-12 w-12 mx-auto text-gray-400'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              stroke-Linecap='round'
              stroke-Linejoin='round'
              stroke-Width='2'
              d='M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 14h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          <h3 class='mt-4 text-lg font-medium text-gray-900 dark:text-white'>
            No devices found
          </h3>
          <p class='mt-1 text-gray-500 dark:text-gray-400'>
            Try adjusting your search or filter to find what you're looking for.
          </p>
        </div>
      )}

      {isModalOpen.value && selectedDevice.value && (
        <DeviceSettingsModal
          device={selectedDevice.value}
          onClose$={closeModal}
        />
      )}
    </div>
  );
});
