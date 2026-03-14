import { ReactNode } from 'react'
import styles from './ScrollArea.module.css'

export interface ScrollAreaProps {
  children: ReactNode
  maxHeight?: string | number
  className?: string
}

export function ScrollArea({ children, maxHeight = 200, className = '' }: ScrollAreaProps) {
  const style = typeof maxHeight === 'number'
    ? { maxHeight: `${maxHeight}px` }
    : { maxHeight }

  return (
    <div className={`${styles.scrollArea} ${className}`} style={style}>
      {children}
    </div>
  )
}
