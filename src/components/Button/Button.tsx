import { ButtonHTMLAttributes } from 'react'
import classNames from 'classnames'
import styles from './Button.module.scss'

export type ButtonVariant = 'primary' | 'outline'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  fullWidth?: boolean
  className?: string
}

export const Button = ({
  variant = 'primary',
  fullWidth = false,
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        styles.button,
        styles[`button--${variant}`],
        {
          [styles['button--full-width']]: fullWidth,
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
