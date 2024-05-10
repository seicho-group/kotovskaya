import { ButtonHTMLAttributes, CSSProperties } from "react"

type Props = ButtonHTMLAttributes<any> & {
  children: React.ReactNode
  width?: string
  height?: string
}

const buttonStyles: CSSProperties = {
  // colors
  color: "white",
  backgroundColor: "#c1a88a",
  // positioning
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // typography
  fontSize: "16px",
  fontWeight: "500",
  // decorations none
  cursor: "pointer",
  borderRadius: "5px",
  outline: "none",
  border: "none",
}

const disabledButtonStyles: CSSProperties = {
  ...buttonStyles,
  backgroundColor: "#a19f9f",
  cursor: "not-allowed",
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
  const getStyle = () => {
    if (props.disabled) {
      return disabledButtonStyles
    }
    return buttonStyles
  }

  return (
    <button style={{ ...getStyle(), ...baseStyles }} {...props}>
      {children}
    </button>
  )
}
