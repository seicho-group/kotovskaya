import { FormProvider, useForm } from "react-hook-form"
import { OrderForm } from "src/packages/desktop/features/order/model/order-form"
import { Cart } from "src/packages/desktop/pages/cart-page/ui/cart"

export const CartPage = () => {
  const form = useForm<OrderForm>({ reValidateMode: "onBlur" })
  return (
    <FormProvider {...form}>
      <Cart />
    </FormProvider>
  )
}
