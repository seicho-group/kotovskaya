/** Функция форматирования телефона.
 * Возвращает нормализованный мобильный телефон.
 * Возможно, даже городской вернет. Но не факт
 */
export const normalizePhone = (phone?: string): string => {
  try {
    return phone?.replace(/\D/g, "").slice(-10) ?? ""
  } catch (e) {
    console.error("Phone with error:", phone, e)
    return ""
  }
}

const phoneGroupsRegex = /(\d{3})(\d{3})(\d{2})(\d{2})/g
const phoneGroupStringFormat = "+7 $1 $2-$3-$4"
export const formatPhone = (phone: string): string => {
  const normalizedPhone = normalizePhone(phone)
  if (normalizedPhone.length === 10) {
    return normalizedPhone.replace(phoneGroupsRegex, phoneGroupStringFormat)
  }

  /** Возвращаем неформатированный телефон. */
  return phone
}

export const validatePhoneNumber = (phone: string) => {
  console.log(normalizePhone(phone))
  return (
    (phone?.startsWith("+7") && normalizePhone(phone).length === 10) ||
    "Телефон не отвечает правилам валидации"
  )
}
