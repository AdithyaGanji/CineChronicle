export default function formatDuration(durationInMins: number): string {
  const [hours, minutes] = [Math.floor(durationInMins / 60), durationInMins % 60]
  return (minutes === 0) ? `${hours}h` : `${hours}h ${minutes}m`
}
