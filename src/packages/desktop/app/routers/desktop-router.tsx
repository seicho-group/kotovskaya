import { Route, Routes } from "react-router-dom"
import { Main } from "../../pages/main/ui/main"
import { KotovskayaContacts } from "../../pages/information-pages/kotovskaya-contacts/ui/kotovskaya-contacts"
import { DeliveryInformation } from "../../pages/information-pages/delivery-information/ui/delivery-information"
import { Cart } from "../../pages/cart-page/ui/cart"
import { ProductPage } from "../../pages/product-page/product-page"
import { Ordered } from "../../pages/ordered/ordered"
import { PopularCategoriesPage } from "../../pages/popular-categories-page/popular-categories-page"
import { NewCategoriesPage } from "../../pages/new-categories-page/ui/new-categories-page"
import { SalesPage } from "../../pages/sales-page/sales-page"
import { CategoryFullPage } from "../../pages/category-page/category-full-page/category-full-page"
import { ShowAllResults } from "../../pages/show-all-results/show-all-results"

export const DesktopRouter = () => {
  return (
    <Routes>
      <Route path="/contacts" element={<KotovskayaContacts />} />
      <Route path="/delivery" element={<DeliveryInformation />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<ProductPage id={123} />} />
      <Route path="/ordered" element={<Ordered />} />
      <Route path="/popular" element={<PopularCategoriesPage />} />
      <Route path="/new" element={<NewCategoriesPage />} />
      <Route path="/sale" element={<SalesPage />} />
      <Route path="/categorypage/:id" element={<CategoryFullPage />} />
      <Route path="/searchresults" element={<ShowAllResults />} />
      <Route path="*" element={<Main />} />
    </Routes>
  )
}
