import { component$, useSignal, useStore, $, useVisibleTask$ } from "@builder.io/qwik"

export default component$(() => {
  // Pet profile data
  const pet = useStore({
    name: "Max",
    breed: "Golden Retriever",
    age: "3 years",
    weight: "65 lbs",
    photo: "/placeholder.svg?height=100&width=100",
  })

  // Simulated video state
  const isPlaying = useSignal(true)
  const currentBehavior = useSignal("Playing")
  const confidenceScore = useSignal(92)
  const wellnessScore = useSignal(85)

  // Behavior log entries
  const behaviorLog = useStore({
    entries: [
      { timestamp: "10:45 AM", behavior: "Playing", confidence: 92, isAnomaly: false,isManual: false },
      { timestamp: "10:42 AM", behavior: "Drinking Water", confidence: 88, isAnomaly: false, isManual: false },
      { timestamp: "10:38 AM", behavior: "Scratching", confidence: 76, isAnomaly: true, isManual: false },
      { timestamp: "10:35 AM", behavior: "Resting", confidence: 95, isAnomaly: false, isManual: false },
      { timestamp: "10:30 AM", behavior: "Eating", confidence: 91, isAnomaly: false, isManual: false },
      { timestamp: "10:25 AM", behavior: "Barking", confidence: 89, isAnomaly: false, isManual: false },
      { timestamp: "10:20 AM", behavior: "Playing", confidence: 94, isAnomaly: false, isManual: false },
    ],
  })

  // Behavior breakdown data for chart
  const behaviorBreakdown = useStore({
    labels: ["Playing", "Resting", "Eating", "Scratching", "Barking", "Drinking"],
    data: [42, 28, 12, 8, 6, 4],
  })

  // Time range for chart
  const timeRange = useSignal("1h")

  // Manual log entry form
  const manualEntry = useStore({
    behavior: "",
    notes: "",
  })

  // Toggle video playback
  const togglePlayback = $(() => {
    isPlaying.value = !isPlaying.value
  })

  // Add manual log entry
  const addManualEntry = $(() => {
    if (manualEntry.behavior) {
      const now = new Date()
      const hours = now.getHours() % 12 || 12
      const minutes = now.getMinutes().toString().padStart(2, "0")
      const ampm = now.getHours() >= 12 ? "PM" : "AM"

      behaviorLog.entries.push({
        timestamp: `${hours}:${minutes} ${ampm}`,
        behavior: `${manualEntry.behavior} (Manual)`,
        confidence: 100,
        isAnomaly: false,
        isManual: true,
      })

      manualEntry.behavior = ""
      manualEntry.notes = ""
    }
  })

  // Simulate changing behaviors over time
  useVisibleTask$(({ cleanup }) => {
    const behaviors = ["Playing", "Resting", "Eating", "Scratching", "Barking", "Drinking"]
    const confidences = [92, 95, 91, 76, 89, 88]
    let currentIndex = 0

    const interval = setInterval(() => {
    //   if (isPlaying.value) {
        currentIndex = (currentIndex + 1) % behaviors.length
        currentBehavior.value = behaviors[currentIndex]
        confidenceScore.value = confidences[currentIndex]
        // Add to log occasionally
        if (Math.random() > 0.6) {
          const now = new Date()
          const hours = now.getHours() % 12 || 12
          const minutes = now.getMinutes().toString().padStart(2, "0")
          const ampm = now.getHours() >= 12 ? "PM" : "AM"

          const isAnomalous = currentBehavior.value === "Scratching" && Math.random() > 0.5

          behaviorLog.entries.push({
            timestamp: `${hours}:${minutes} ${ampm}`,
            behavior: currentBehavior.value,
            confidence: confidenceScore.value,
            isAnomaly: isAnomalous,
            isManual: false,
          })
          // Keep log at reasonable size
          if (behaviorLog.entries.length > 20) {
            behaviorLog.entries.shift()
          }
        }
    //   }
    }, 3000)

    cleanup(() => clearInterval(interval))
  })

  // Update chart based on time range
  const updateTimeRange = $((range: string) => {
    timeRange.value = range

    // Simulate different data for different time ranges
    if (range === "1h") {
      behaviorBreakdown.data = [42, 28, 12, 8, 6, 4]
    } else if (range === "6h") {
      behaviorBreakdown.data = [38, 32, 15, 5, 7, 3]
    } else if (range === "24h") {
      behaviorBreakdown.data = [35, 35, 14, 6, 5, 5]
    }
  })

  return (
    <div class="space-y-6">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white">AI Pet Wellness Demo</h1>

        <div class="flex items-center gap-2">
          <button
            onClick$={() => updateTimeRange("1h")}
            class={`px-3 py-1 rounded-lg text-sm ${timeRange.value === "1h" ? "bg-emerald-500 text-white" : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"}`}
          >
            Last Hour
          </button>
          <button
            onClick$={() => updateTimeRange("6h")}
            class={`px-3 py-1 rounded-lg text-sm ${timeRange.value === "6h" ? "bg-emerald-500 text-white" : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"}`}
          >
            Last 6 Hours
          </button>
          <button
            onClick$={() => updateTimeRange("24h")}
            class={`px-3 py-1 rounded-lg text-sm ${timeRange.value === "24h" ? "bg-emerald-500 text-white" : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"}`}
          >
            Last 24 Hours
          </button>
        </div>
      </div>

      <p class="text-gray-600 dark:text-gray-400">
        Experience how AI can analyze pet behavior and help owners better understand their furry companions. This demo
        showcases real-time behavior detection, anomaly identification, and wellness tracking.
      </p>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column - Video feed and pet profile */}
        <div class="lg:col-span-2 space-y-6">
          {/* Simulated video feed with AI overlay */}
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div class="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h2 class="font-semibold text-gray-800 dark:text-white">Live Camera Feed</h2>
              <div class="flex items-center gap-2">
                <button
                  onClick$={togglePlayback}
                  class="text-gray-500 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400"
                >
                  {isPlaying.value ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-Linecap="round"
                        stroke-Linejoin="round"
                        stroke-Width="2"
                        d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-Linecap="round"
                        stroke-Linejoin="round"
                        stroke-Width="2"
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        stroke-Linecap="round"
                        stroke-Linejoin="round"
                        stroke-Width="2"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div class="relative aspect-video bg-gray-900 flex items-center justify-center">
              {/* Placeholder for video - in a real app, this would be a video element */}
              <div class="text-center text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-16 w-16 mx-auto mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-Linecap="round"
                    stroke-Linejoin="round"
                    stroke-Width="2"
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <p class="text-sm">Video feed simulation</p>
              </div>

              {/* AI detection overlay */}
              <div
                class={`absolute bottom-4 left-4 right-4 bg-black/70 text-white p-3 rounded-lg flex justify-between items-center ${currentBehavior.value === "Scratching" ? "border-2 border-red-500" : ""}`}
              >
                <div>
                  <span
                    class={`text-sm font-medium ${currentBehavior.value === "Scratching" ? "text-red-400" : "text-emerald-400"}`}
                  >
                    {currentBehavior.value === "Scratching" ? "ANOMALY DETECTED: " : ""}
                    {currentBehavior.value}
                  </span>
                  <div class="text-xs text-gray-300">Confidence: {confidenceScore.value}%</div>
                </div>
                {currentBehavior.value === "Scratching" && (
                  <div class="text-xs text-red-400">Excessive scratching may indicate skin irritation</div>
                )}
              </div>
            </div>
          </div>

          {/* Behavior breakdown chart */}
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div class="p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 class="font-semibold text-gray-800 dark:text-white">Behavior Breakdown</h2>
            </div>
            <div class="p-4">
              <div class="h-64 w-full">
                {/* Simulated chart - in a real app, this would use a chart library */}
                <div class="h-full flex items-end space-x-4 pt-6">
                  {behaviorBreakdown.labels.map((label, index) => (
                    <div key={label} class="flex-1 flex flex-col items-center">
                        <div class="text-xs mt-2 text-gray-600 dark:text-gray-400 truncate w-full text-center">
                      <div
                        class={`w-full ${label === "Scratching" ? "bg-red-500" : "bg-emerald-500"} rounded-t-sm`}
                        style={{ height: `${behaviorBreakdown.data[index] * 2}px` }}
                      ></div>
                        {label}
                      </div>
                      <div class="text-xs text-gray-500 dark:text-gray-500">{behaviorBreakdown.data[index]}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - Pet profile, wellness score, and behavior log */}
        <div class="space-y-6">
          {/* Pet profile */}
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div class="p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 class="font-semibold text-gray-800 dark:text-white">Pet Profile</h2>
            </div>
            <div class="p-4 flex items-center space-x-4">
              <div class="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <img src={pet.photo || "/placeholder.svg"} alt={pet.name} class="w-full h-full object-cover" />
              </div>
              <div>
                <h3 class="font-medium text-gray-800 dark:text-white">{pet.name}</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">{pet.breed}</p>
                <div class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  {pet.age} • {pet.weight}
                </div>
              </div>
            </div>
          </div>

          {/* Wellness score */}
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div class="p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 class="font-semibold text-gray-800 dark:text-white">Wellness Score</h2>
            </div>
            <div class="p-6 flex flex-col items-center">
              <div class="relative w-32 h-32">
                <svg class="w-full h-full" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#E5E7EB"
                    stroke-Width="3"
                    stroke-Dasharray="100, 100"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke={wellnessScore.value > 70 ? "#10B981" : wellnessScore.value > 40 ? "#F59E0B" : "#EF4444"}
                    stroke-Width="3"
                    stroke-Dasharray={`${wellnessScore.value}, 100`}
                  />
                </svg>
                <div class="absolute inset-0 flex items-center justify-center flex-col">
                  <span class="text-3xl font-bold text-gray-800 dark:text-white">{wellnessScore.value}</span>
                  <span class="text-sm text-gray-500 dark:text-gray-400">/ 100</span>
                </div>
              </div>
              <p class="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
                Based on activity levels, sleep patterns, and detected anomalies
              </p>
            </div>
          </div>

          {/* Behavior log */}
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div class="p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 class="font-semibold text-gray-800 dark:text-white">Behavior Log</h2>
            </div>
            <div class="divide-y divide-gray-200 dark:divide-gray-700 max-h-80 overflow-y-auto">
              {behaviorLog.entries.map((entry, index) => (
                <div
                  key={index}
                  class={`p-3 flex justify-between ${entry.isAnomaly ? "bg-red-50 dark:bg-red-900/20" : entry.isManual ? "bg-blue-50 dark:bg-blue-900/20" : ""}`}
                >
                  <div>
                    <div class="flex items-center">
                      <span
                        class={`font-medium ${entry.isAnomaly ? "text-red-600 dark:text-red-400" : entry.isManual ? "text-blue-600 dark:text-blue-400" : "text-gray-800 dark:text-white"}`}
                      >
                        {entry.behavior}
                      </span>
                      {entry.isAnomaly && (
                        <span class="ml-2 px-1.5 py-0.5 text-xs bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 rounded">
                          Anomaly
                        </span>
                      )}
                    </div>
                    <div class="text-xs text-gray-500 dark:text-gray-500">{entry.timestamp}</div>
                  </div>
                  {!entry.isManual && (
                    <div class="text-xs text-gray-500 dark:text-gray-500">Confidence: {entry.confidence}%</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Manual log entry */}
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div class="p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 class="font-semibold text-gray-800 dark:text-white">Add Manual Log Entry</h2>
        </div>
        <div class="p-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Behavior/Activity</label>
              <select
                value={manualEntry.behavior}
                onChange$={(e) => (manualEntry.behavior = (e.target as HTMLSelectElement).value)}
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="">Select behavior...</option>
                <option value="Medication Given">Medication Given</option>
                <option value="Walked">Walked</option>
                <option value="Groomed">Groomed</option>
                <option value="Vet Visit">Vet Visit</option>
                <option value="Training Session">Training Session</option>
                <option value ="other">Other</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Notes (Optional)</label>
              <input
                type="text"
                value={manualEntry.notes}
                onChange$={(e) => (manualEntry.notes = (e.target as HTMLInputElement).value)}
                placeholder="Add any relevant details..."
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
          </div>
          <div class="mt-4 flex justify-end">
            <button
              onClick$={addManualEntry}
              disabled={!manualEntry.behavior}
              class="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Add Entry
            </button>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl shadow-md overflow-hidden">
        <div class="p-6 text-center">
          <h2 class="text-xl font-bold text-emerald-700 dark:text-emerald-400 mb-2">
            Ready to monitor your pet's wellness?
          </h2>
          <p class="text-emerald-600 dark:text-emerald-300 mb-4">
            Get started with our AI-powered pet monitoring system today and gain valuable insights into your pet's
            health and behavior.
          </p>
          <p class="text-emerald-700 dark:text-emerald-500 mb-4">Please send us a message through contact from.</p>
          <div class="flex flex-col sm:flex-row gap-3 justify-center">
            <button disabled class="px-6 py-2 bg-emerald-600 text-white rounded-lg  focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
              Coming Soon..!
            </button>
            <button class="cursor-pointer px-6 py-2 bg-white text-emerald-600 border border-emerald-600 rounded-lg hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:bg-transparent dark:hover:bg-emerald-900/30" onClick$={() => location.href="/contact?message=Pet-Tracking-Demo-Inquiry"}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
})
