import { useState, useRef, useEffect } from 'react'
import styles from './Dropdown.module.css'

export interface DropdownOption {
  value: string
  label: string
}

export interface DropdownProps {
  options: DropdownOption[]
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  disabled?: boolean
  label?: string
}

export function Dropdown({
  options,
  placeholder = 'Choose...',
  value,
  onChange,
  disabled = false,
  label,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const selectedLabel = value ? options.find((o) => o.value === value)?.label : null

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') setIsOpen(false)
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setIsOpen((prev) => !prev)
    }
  }

  const id = `dropdown-${Math.random().toString(36).slice(2)}`

  return (
    <div ref={containerRef} className={styles.wrapper}>
      {label && (
        <label id={`${id}-label`} className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <div className={styles.container}>
        <button
          id={id}
          type="button"
          className={`${styles.trigger} ${isOpen ? styles.open : ''} ${disabled ? styles.disabled : ''}`}
          onClick={() => !disabled && setIsOpen((p) => !p)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-labelledby={label ? `${id}-label` : undefined}
        >
          <span className={selectedLabel ? styles.value : styles.placeholder}>
            {selectedLabel || placeholder}
          </span>
          <span className={styles.chevron} aria-hidden>▼</span>
        </button>
        {isOpen && (
          <ul
            role="listbox"
            className={styles.list}
            aria-labelledby={id}
          >
            {options.map((opt) => (
              <li
                key={opt.value}
                role="option"
                className={`${styles.option} ${opt.value === value ? styles.selected : ''}`}
                onClick={() => {
                  onChange?.(opt.value)
                  setIsOpen(false)
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    onChange?.(opt.value)
                    setIsOpen(false)
                  }
                }}
              >
                {opt.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
