import { useCartStore } from "src/entities/cart/model/cart-store"
import { useMutationCreateOrder } from "src/pages/cart-page/api/use-mutation-create-order"
import { useNavigate } from "react-router-dom"
import { useFormContext } from "react-hook-form"
import { OrderForm } from "src/packages/desktop/features/create-order/model/order-form"
import { useOrderIdStore } from "src/pages/cart-page/lib/use-order-id-store"

export const useCreateOrder = () => {
  const { handleSubmit } = useFormContext<OrderForm>()

  const { cart } = useCartStore()
  const { mutateAsync: createOrderMutation, isPending } =
    useMutationCreateOrder()
  const navigate = useNavigate()
  const { setOrderId } = useOrderIdStore()

  function createOrder() {
    handleSubmit(
      async (formValues) => {
        const id = await createOrderMutation({
          formValues,
          cart: Object.values(cart),
        })

        setOrderId(id)
        navigate("/ordered")
      },
      (e) => console.log(e),
    )()
  }

  return { createOrder, isPending }
}
