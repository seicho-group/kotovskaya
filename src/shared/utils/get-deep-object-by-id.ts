export const searchObject = (
  objs: any[],
  category_id: string,
): null | object => {
  if (objs === null || objs === undefined) {
    return null
  }
  const res = objs.map((obj) => {
    if (obj.category_id === category_id) {
      return obj
    } else {
      const found = searchObject(obj["category_items"], category_id)
      if (found !== null) {
        return found
      }
    }
  })
  if (res.length > 0) {
    return res[0]
  }

  return null
}
