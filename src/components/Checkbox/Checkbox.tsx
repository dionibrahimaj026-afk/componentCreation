import { InputHTMLAttributes, forwardRef, useEffect, useRef } from 'react'
import styles from './Checkbox.module.css'

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  indeterminate?: boolean
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, indeterminate, id, className = '', ...props }, ref) => {
    const inputId = id || `checkbox-${Math.random().toString(36).slice(2)}`
    const inputRef = useRef<HTMLInputElement | null>(null)
    const setRef = (el: HTMLInputElement | null) => {
      inputRef.current = el
      if (typeof ref === 'function') ref(el)
      else if (ref) ref.current = el
    }
    useEffect(() => {
      if (inputRef.current) inputRef.current.indeterminate = !!indeterminate
    }, [indeterminate])
    return (
      <label htmlFor={inputId} className={`${styles.wrapper} ${className}`}>
        <input
          ref={setRef}
          type="checkbox"
          id={inputId}
          className={styles.input}
          aria-checked={indeterminate ? 'mixed' : undefined}
          {...props}
        />
        <span className={styles.box} aria-hidden="true" />
        {label && <span className={styles.label}>{label}</span>}
      </label>
    )
  }
)

Checkbox.displayName = 'Checkbox'
