import classes from "./main-page-navigation.module.css"
import sharedClasses from "src/shared/styles/shared.module.css"
import { MainPageNavigationSection } from "src/widgets/main-page-navigation/main-page-navigation-sections/main-page-navigation-section"

const categories = [
  {
    name: "Мыловарение",
    link: "/soapmaking",
    img: "https://storage.yandexcloud.net/kotovskaya.products/assets/soapmaking-nav.jpg",
  },
  {
    name: "Свечеварение",
    link: "/candlesmaking",
    img: "https://storage.yandexcloud.net/kotovskaya.products/assets/candlesmaking-nav.jpg",
  },
  {
    name: "Компоненты для косметики",
    link: "/cosmetics",
    img: "https://storage.yandexcloud.net/kotovskaya.products/assets/cosmetics-nav.jpg",
  },
]

export const MainPageNavigation = () => {
  return (
    <nav className={`${classes.navigation} ${sharedClasses.contentWrapper}`}>
      <div className={classes.navigationTitle}>
        <h2>Выберите категорию</h2>
      </div>
      <ul className={classes.navigationList}>
        {categories.map((cat) => (
          <MainPageNavigationSection
            categoryLink={cat.link}
            categoryName={cat.name}
            img={cat.img}
            key={cat.name}
          />
        ))}
      </ul>
    </nav>
  )
}
