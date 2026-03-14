import { useState } from 'react'
import styles from './Calendar.module.css'

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export interface CalendarProps {
  year?: number
  month?: number
  onSelectDate?: (date: Date) => void
}

export function Calendar({
  year = new Date().getFullYear(),
  month = new Date().getMonth(),
  onSelectDate,
}: CalendarProps) {
  const [selected, setSelected] = useState<Date | null>(null)
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const startOffset = firstDay.getDay()
  const daysInMonth = lastDay.getDate()

  const cells: (number | null)[] = []
  for (let i = 0; i < startOffset; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)

  function handleClick(day: number) {
    const date = new Date(year, month, day)
    setSelected(date)
    onSelectDate?.(date)
  }

  function isToday(day: number) {
    return (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    )
  }

  function isSelected(day: number) {
    return (
      selected &&
      day === selected.getDate() &&
      month === selected.getMonth() &&
      year === selected.getFullYear()
    )
  }

  const monthName = new Date(year, month).toLocaleString('default', {
    month: 'long',
    year: 'numeric',
  })

  return (
    <div className={styles.calendar}>
      <div className={styles.header}>{monthName}</div>
      <div className={styles.weekdays}>
        {DAYS.map((d) => (
          <div key={d} className={styles.weekday}>
            {d}
          </div>
        ))}
      </div>
      <div className={styles.grid}>
        {cells.map((day, i) =>
          day === null ? (
            <div key={`empty-${i}`} className={styles.cell} />
          ) : (
            <button
              key={day}
              type="button"
              className={`${styles.cell} ${styles.day} ${isToday(day) ? styles.today : ''} ${isSelected(day) ? styles.selected : ''}`}
              onClick={() => handleClick(day)}
            >
              {day}
            </button>
          )
        )}
      </div>
    </div>
  )
}
