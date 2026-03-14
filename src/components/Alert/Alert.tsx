import { ReactNode } from 'react'
import styles from './Alert.module.css'

export type AlertType = 'info' | 'success' | 'warning' | 'error'

export interface AlertProps {
  title?: string
  message: ReactNode
  type?: AlertType
  onDismiss?: () => void
}

const icons: Record<AlertType, string> = {
  info: 'ℹ',
  success: '✓',
  warning: '⚠',
  error: '✕',
}

export function Alert({ title, message, type = 'info', onDismiss }: AlertProps) {
  return (
    <div className={`${styles.alert} ${styles[type]}`} role="alert">
      <span className={styles.icon} aria-hidden="true">
        {icons[type]}
      </span>
      <div className={styles.content}>
        {title && <div className={styles.title}>{title}</div>}
        <div className={styles.message}>{message}</div>
      </div>
      {onDismiss && (
        <button
          type="button"
          className={styles.dismiss}
          onClick={onDismiss}
          aria-label="Dismiss"
        >
          ×
        </button>
      )}
    </div>
  )
}
