import { ReactNode } from 'react'
import styles from './Table.module.css'

export interface TableColumn<T> {
  key: keyof T | string
  header: string
  render?: (row: T) => ReactNode
}

export interface TableProps<T> {
  columns: TableColumn<T>[]
  data: T[]
  compact?: boolean
  striped?: boolean
  stickyHeader?: boolean
}

export function Table<T extends Record<string, unknown>>({
  columns,
  data,
  compact = false,
  striped = false,
  stickyHeader = false,
}: TableProps<T>) {
  return (
    <div className={styles.scrollWrap}>
      <table className={`${styles.table} ${compact ? styles.compact : ''} ${striped ? styles.striped : ''} ${stickyHeader ? styles.stickyHeader : ''}`}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={String(col.key)}>{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {columns.map((col) => (
                <td key={String(col.key)}>
                  {col.render
                    ? col.render(row)
                    : String(row[col.key as keyof T] ?? '')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
