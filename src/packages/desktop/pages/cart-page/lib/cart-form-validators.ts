export const validatePhoneNumber = (phone: string) => {
  return (
    (phone?.startsWith("9") && phone.length === 10) ||
    "Телефон не отвечает правилам валидации"
  )
}
