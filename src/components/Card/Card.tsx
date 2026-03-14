import { ReactNode } from 'react'
import styles from './Card.module.css'

export type CardVariant = 'default' | 'bordered' | 'elevated'

export interface CardProps {
  title?: string
  children: ReactNode
  footer?: ReactNode
  variant?: CardVariant
}

export function Card({ title, children, footer, variant = 'default' }: CardProps) {
  return (
    <div className={`${styles.card} ${styles[variant]}`}>
      {title && (
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
        </div>
      )}
      <div className={styles.body}>{children}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  )
}
