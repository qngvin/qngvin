// Format date to 'Mon YYYY' in English, e.g. 'Jan 2024'
export function formatMonthYear(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleString('en-US', { month: 'short', year: 'numeric' })
}
