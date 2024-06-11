import styles from "./notification.module.css"

type TProps = {
  char: string
}

export const Notification = (props: TProps) => {
  return <div className={styles.notification}>{props.char}</div>
}
