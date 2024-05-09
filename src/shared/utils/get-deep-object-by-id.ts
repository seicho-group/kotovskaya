import { Category } from "src/packages/mobile/pages/soapmaking/soapmaking"

export const searchObject = <T extends Category>(
  objs: T[],
  category_id: string,
  childName: keyof T,
): null | object => {
  if (objs === null || objs === undefined) {
    return null
  }
  const res = objs.map((obj) => {
    if (obj.category_id === category_id) {
      return obj
    } else {
      const found = searchObject(obj[childName] as T[], category_id, childName)
      if (found !== null) {
        return found
      } else {
        return null
      }
    }
  })
  return res.find((r) => r !== null) || null
}
