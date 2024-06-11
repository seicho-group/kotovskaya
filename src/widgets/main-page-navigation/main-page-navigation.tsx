import classes from "./main-page-navigation.module.css"
import { MainPageNavigationSection } from "src/widgets/main-page-navigation/main-page-navigation-sections/main-page-navigation-section"
import { Text } from "src/shared/ui/text/text"
import { ContentWrapper } from "src/widgets/content-wrapper/content-wrapper"

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
    <ContentWrapper>
      <nav className={classes.navigation}>
        <div className={classes.navigationTitle}>
          <Text variant={"subtitle"}>Выберите категорию</Text>
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
    </ContentWrapper>
  )
}
