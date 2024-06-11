import { Navigate, Route, Routes } from "react-router-dom"
import { Main } from "src/pages/main/ui/main"
import { KotovskayaContacts } from "../../pages/information-pages/kotovskaya-contacts/ui/kotovskaya-contacts"
import { DeliveryInformation } from "../../pages/information-pages/delivery-information/ui/delivery-information"
import { ProductPage } from "../../pages/product-page/product-page"
import { Ordered } from "src/pages/ordered/ordered"
import { PopularCategoriesPage } from "src/pages/popular-categories-page/popular-categories-page"
import { NewCategoriesPage } from "src/pages/new-categories-page/ui/new-categories-page"
import { SalesPage } from "src/pages/sales-page/sales-page"
import { CategoryPage } from "src/pages/category-page/category-page"
import { ShowAllResults } from "../../pages/show-all-results/show-all-results"
import { CartPage } from "src/pages/cart-page/cart-page"
import React from "react"
import { TopCategoryPage } from "src/pages/top-category-page/top-category-page"
import {
  candlesMaking,
  cosmeticsMaking,
  soapmaking,
  soapmaking2,
  soapmaking3,
} from "src/packages/desktop/widgets/catalog-menu/ui/catalog-menu"

export const DesktopRouter = () => {
  return (
    <Routes>
      <Route path="/contacts" element={<KotovskayaContacts />} />
      <Route path="/delivery" element={<DeliveryInformation />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/ordered" element={<Ordered />} />
      <Route
        path="/soapmaking"
        element={
          <TopCategoryPage
            categoriesArray={[...soapmaking2, ...soapmaking, ...soapmaking3]}
          />
        }
      />
      <Route
        path="/cosmetics"
        element={<TopCategoryPage categoriesArray={cosmeticsMaking} />}
      />
      <Route
        path="/candlesmaking"
        element={<TopCategoryPage categoriesArray={candlesMaking} />}
      />
      <Route path="/popular" element={<PopularCategoriesPage />} />
      <Route path="/new" element={<NewCategoriesPage />} />
      <Route path="/sale" element={<SalesPage />} />
      <Route path="/category/:id" element={<CategoryPage />} />
      <Route path="/searchresults" element={<ShowAllResults />} />
      <Route path="/" element={<Main />} />
      <Route path="*" element={<Navigate replace to={"/"} />} />
    </Routes>
  )
}
