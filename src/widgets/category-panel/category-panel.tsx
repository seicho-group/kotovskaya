import { Link } from "react-router-dom"
import styles from "./category-panel.module.css"
import { TCategoryInfo } from "src/packages/desktop/widgets/catalog-menu/ui/catalog-menu"
import { Text } from "src/shared/ui/text/text"

export function CategoryPanel(props: { category: TCategoryInfo }) {
  return (
    <Link to={`/category/${props.category.id}`}>
      <div className={styles.categoryPanel}>
        <Text isBolder>{props.category.name}</Text>
      </div>
    </Link>
  )
}
