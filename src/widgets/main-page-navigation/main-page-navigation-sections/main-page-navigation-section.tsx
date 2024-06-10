import classes from "./main-page-navigation-section.module.css"
import { useNavigate } from "react-router-dom"

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
  return (
    <li className={classes.navigationSection}>
      <img alt={categoryName} width={"100%"} src={img}></img>
      <div
        className={classes.navigationSectionOverlap}
        onClick={() => categoryLink && navigate(categoryLink)}
      >
        <p>{categoryName}</p>
      </div>
    </li>
  )
}
