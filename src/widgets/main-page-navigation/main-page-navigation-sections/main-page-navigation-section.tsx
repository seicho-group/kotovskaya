import classes from "./main-page-navigation-section.module.css"
import { useNavigate } from "react-router-dom"
import { Text } from "src/shared/ui/text/text"
import { MoveRight } from "lucide-react"
import { useContext } from "react"
import { IsMobileContext } from "src/app/app"

type TProps = {
  /** Ссылка на изображение */
  img: string
  /** Название категории */
  categoryName: string
  /** Ссылка на страницу категории */
  categoryLink?: string
}

export const MainPageNavigationSection = ({
  img,
  categoryName,
  categoryLink,
}: TProps) => {
  const navigate = useNavigate()
  const { isMobile } = useContext(IsMobileContext)
  return (
    <li className={classes.navigationSection}>
      <img alt={categoryName} src={img}></img>
      <div
        className={classes.navigationSectionOverlap}
        onClick={() => categoryLink && navigate(categoryLink)}
      >
        <Text isBolder>{categoryName}</Text>
        <MoveRight height={isMobile ? 16 : 20} color={"white"} />
      </div>
    </li>
  )
}
