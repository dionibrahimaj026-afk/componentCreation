import { useState, ReactNode } from 'react'
import styles from './Tooltip.module.css'

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right'

export interface TooltipProps {
  content: string
  children: ReactNode
  position?: TooltipPosition
}

export function Tooltip({ content, children, position = 'top' }: TooltipProps) {
  const [visible, setVisible] = useState(false)

  return (
    <span
      className={styles.wrapper}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      {visible && (
        <span
          className={`${styles.tooltip} ${styles[position]}`}
          role="tooltip"
        >
          {content}
        </span>
      )}
    </span>
  )
}
