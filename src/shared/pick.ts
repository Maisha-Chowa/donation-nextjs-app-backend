// ['page','limit','sortBy','sortOrder']

//here Record is used instead of Object
const pick = <T extends Record<string, unknown>, k extends keyof T>(
  obj: T,
  keys: k[],
): Partial<T> => {
  const finalObj: Partial<T> = {}
  for (const key of keys) {
    if (obj && Object.hasOwnProperty.call(obj, key)) {
      finalObj[key] = obj[key] // finalObj er modhe append
    }
  }
  return finalObj
}

export default pick
