export interface Device {
  id: string
  name: string
  type: string
  location: string
  isOnline: boolean
  status: "healthy" | "warning" | "critical"
  lastUpdated: string
  metrics: {
    name: string
    value: string
    unit: string
  }[]
  aiInsight?: string
}
