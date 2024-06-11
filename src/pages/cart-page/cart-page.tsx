import { FormProvider, useForm } from "react-hook-form"
import { OrderForm } from "src/features/create-order/model/order-form"
import { Cart } from "src/pages/cart-page/ui/cart"
import { DeliveryWay } from "src/shared/types/productDTO"
import { Helmet } from "react-helmet"

export const CartPage = () => {
  const form = useForm<OrderForm>({
    reValidateMode: "onBlur",
    defaultValues: {
      deliveryWay: DeliveryWay.Self,
    },
  })
  return (
    <FormProvider {...form}>
      <Helmet title={"Корзина"} />
      <Cart />
    </FormProvider>
  )
}
