import { Route, Routes } from "react-router-dom";
import { MainPage } from "../../mobile-pages/mainpage";
import { Soapmaking } from "../../mobile-pages/soapmaking/soapmaking";
import { DeliveryMobile } from "../../mobile-pages/delivery-information-mobile/DeliveryMobile";
import { ContactsMobile } from "../../mobile-pages/ContactsMobile/ContactsMobilex";
import { CartMobile } from "../../mobile-pages/cart-mobile/cart-mobile";
import { CategoryPageMobile } from "../../mobile-pages/category-page/category-page";
import { ShowAllResults } from "../../mobile-pages/show-all-results/show-all-results";
import { SliderFirst } from "../../mobile-pages/sliderFirst/slider-first";
import { ProductPageMobile } from "../../mobile-pages/product-page-mobile/product-page-mobile";

export const MobileRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/soapmaking" element={<Soapmaking />} />
      <Route path="/delivery" element={<DeliveryMobile />} />
      <Route path="/contacts" element={<ContactsMobile />} />
      <Route path="/cartmobile" element={<CartMobile />} />
      <Route path="/categorypage/:id" element={<CategoryPageMobile />} />
      <Route path="/showallresults" element={<ShowAllResults />} />
      <Route path="/slider/:id" element={<SliderFirst />} />
      <Route path="/product/:id" element={<ProductPageMobile id={123} />} />
    </Routes>
  );
};
