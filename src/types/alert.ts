export interface Alert {
  id: string
  title: string
  message: string
  severity: "info" | "warning" | "critical"
  deviceId: string
  deviceName: string
  time: string
  read: boolean
}
