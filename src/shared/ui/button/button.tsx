import { ButtonHTMLAttributes, CSSProperties } from "react"
import styles from "./button.module.css"

type Props = ButtonHTMLAttributes<any> & {
  children: React.ReactNode
  width?: string
  height?: string
}

export const Button = ({
  children,
  width = "135px",
  height = "40px",
  ...props
}: Props) => {
  const baseStyles = {
    width,
    height,
  }

  const disabledStyles = props.disabled ? " " + styles.disabled : ""

  return (
    <button
      style={{ ...baseStyles }}
      className={styles.button + disabledStyles}
      {...props}
    >
      {children}
    </button>
  )
}
