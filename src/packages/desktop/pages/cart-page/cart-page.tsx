import { FormProvider, useForm } from "react-hook-form"
import { OrderForm } from "src/packages/desktop/features/order/model/order-form"
import { Cart } from "src/packages/desktop/pages/cart-page/ui/cart"
import { DeliveryWay } from "src/shared/types/productDTO"

export const CartPage = () => {
  const form = useForm<OrderForm>({
    reValidateMode: "onBlur",
    defaultValues: {
      deliveryWay: DeliveryWay.Self,
    },
  })
  return (
    <FormProvider {...form}>
      <Cart />
    </FormProvider>
  )
}
