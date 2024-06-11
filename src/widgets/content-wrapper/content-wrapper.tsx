import styles from "./content-wrapper.module.css"
import { FC, PropsWithChildren } from "react"

export const ContentWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.contentContainer}>
      <section className={styles.contentWrapper}>{children}</section>
    </div>
  )
}
