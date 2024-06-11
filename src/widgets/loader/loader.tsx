import { LoaderCircle } from "lucide-react"
import styles from "./loader.module.css"

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <LoaderCircle className={styles.icon} speed={1} />
    </div>
  )
}
