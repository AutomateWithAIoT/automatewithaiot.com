import { component$, useSignal, useStore, $, useOnDocument } from "@builder.io/qwik"

export default component$(() => {
  const user = useStore({
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    role: "User",
    notifications: {
      email: true,
      push: true,
      sms: false,
    },
    theme: "dark",
  })
  useOnDocument(
    "load", 
    $(() => {
    user.name = sessionStorage.getItem("name") || user.name
    user.email = sessionStorage.getItem("email") || user.email
    user.role = sessionStorage.getItem("role") || user.role
    user.notifications = JSON.parse(sessionStorage.getItem("notifications") || JSON.stringify(user.notifications))
    user.theme = sessionStorage.getItem("theme") || user.theme
  }))

  const isSaving = useSignal(false)
  const showSuccess = useSignal(false)

  const saveSettings = $(async () => {
    sessionStorage.setItem("name", user.name)
    sessionStorage.setItem("email", user.email)
    sessionStorage.setItem("role", user.role)
    sessionStorage.setItem("notifications", JSON.stringify(user.notifications))
    sessionStorage.setItem("theme", user.theme)

    isSaving.value = true

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    isSaving.value = false
    showSuccess.value = true

    setTimeout(() => {
      showSuccess.value = false
    }, 3000)
  })

  const toggleTheme = $(() => {
    user.theme = user.theme === "light" ? "dark" : "light"
    document.documentElement.classList.toggle("dark", user.theme === "dark")
  })

  return (
    <div class="space-y-6">
      <h1 class="text-2xl font-bold text-gray-800 dark:text-white">Settings</h1>

      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div class="p-6">
          <h2 class="text-lg font-semibold text-gray-800 dark:text-white mb-4">User Profile</h2>

          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
              <input
                type="text"
                value={user.name}
                onChange$={(e) => (user.name = (e.target as HTMLInputElement).value)}
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input
                type="email"
                value={user.email}         
                onChange$={(e) => (user.email = (e.target as HTMLInputElement).value)}
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Role</label>
              <select
                value={user.role}          
                onChange$={(e) => (user.role = (e.target as HTMLInputElement).value)}
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="Administrator">Administrator</option>
                <option value="Manager">Manager</option>
                <option value="Viewer">Viewer</option>
              </select>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-200 dark:border-gray-700 p-6">
          <h2 class="text-lg font-semibold text-gray-800 dark:text-white mb-4">Notification Preferences</h2>

          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-gray-700 dark:text-gray-300">Email Notifications</span>
              <button
                onClick$={() => (user.notifications.email = !user.notifications.email)}
                class={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${user.notifications.email ? "bg-emerald-500" : "bg-gray-300 dark:bg-gray-600"}`}
              >
                <span
                  class={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${user.notifications.email ? "translate-x-6" : "translate-x-1"}`}
                />
              </button>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-gray-700 dark:text-gray-300">Push Notifications</span>
              <button
                onClick$={() => (user.notifications.push = !user.notifications.push)}
                class={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${user.notifications.push ? "bg-emerald-500" : "bg-gray-300 dark:bg-gray-600"}`}
              >
                <span
                  class={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${user.notifications.push ? "translate-x-6" : "translate-x-1"}`}
                />
              </button>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-gray-700 dark:text-gray-300">SMS Notifications</span>
              <button
                onClick$={() => (user.notifications.sms = !user.notifications.sms)}
                class={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${user.notifications.sms ? "bg-emerald-500" : "bg-gray-300 dark:bg-gray-600"}`}
              >
                <span
                  class={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${user.notifications.sms ? "translate-x-6" : "translate-x-1"}`}
                />
              </button>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-200 dark:border-gray-700 p-6">
          <h2 class="text-lg font-semibold text-gray-800 dark:text-white mb-4">Appearance</h2>

          <div class="flex items-center justify-between">
            <span class="text-gray-700 dark:text-gray-300">Dark Mode</span>
            <button
              onClick$={toggleTheme}
              class={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${user.theme === "dark" ? "bg-emerald-500" : "bg-gray-300 dark:bg-gray-600"}`}
            >
              <span
                class={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${user.theme === "dark" ? "translate-x-6" : "translate-x-1"}`}
              />
            </button>
          </div>
        </div>

        <div class="border-t border-gray-200 dark:border-gray-700 p-6 flex justify-end">
          <button
            onClick$={saveSettings}
            disabled={isSaving.value}
            class="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSaving.value ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>

      {showSuccess.value && (
        <div class="fixed bottom-4 right-4 bg-emerald-500 text-white px-4 py-2 rounded-lg shadow-lg">
          Settings saved successfully!
        </div>
      )}
    </div>
  )
})
