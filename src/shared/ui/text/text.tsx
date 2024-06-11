import { FC, PropsWithChildren } from "react"
import styles from "./text.module.css"

type TextVariant = "common" | "subtitle" | "title"

type TProps = {
  variant?: TextVariant
  isSelected?: boolean
}

export const Text: FC<PropsWithChildren<TProps>> = ({
  variant = "common",
  isSelected = false,
  children,
}) => {
  const selectedClass = isSelected ? " " + styles.selected : ""

  if (variant === "subtitle") {
    return <h3 className={styles.subtitle + selectedClass}>{children}</h3>
  }

  if (variant === "title") {
    return <h2 className={styles.title + selectedClass}>{children}</h2>
  }

  return <p className={styles.text + selectedClass}>{children}</p>
}
