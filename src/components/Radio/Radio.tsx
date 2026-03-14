import { InputHTMLAttributes, forwardRef } from 'react'
import styles from './Radio.module.css'

export interface RadioOption {
  value: string
  label: string
}

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  options: RadioOption[]
  name: string
  label?: string
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ options, name, label, id, className = '', ...props }, ref) => {
    const groupId = id || `radio-${name}-${Math.random().toString(36).slice(2)}`
    return (
      <fieldset className={`${styles.fieldset} ${className}`} id={groupId}>
        {label && (
          <legend className={styles.legend} id={`${groupId}-legend`}>{label}</legend>
        )}
        <div className={styles.group} role="radiogroup" aria-labelledby={label ? `${groupId}-legend` : undefined}>
          {options.map((opt, i) => (
            <label key={opt.value} className={styles.wrapper}>
              <input
                ref={i === 0 ? ref : undefined}
                type="radio"
                name={name}
                value={opt.value}
                className={styles.input}
                {...props}
              />
              <span className={styles.dot} aria-hidden="true" />
              <span className={styles.label}>{opt.label}</span>
            </label>
          ))}
        </div>
      </fieldset>
    )
  }
)

Radio.displayName = 'Radio'
