import { toRaw } from "vue"

/**
 * 消除物件的響應性
 * @param object - 資料來源
 * @returns 回傳重新組合的資料
 * @remarks 應用於處理傳送回後端的資料格式
 */
const toRawObject = (object: any): any => {
  if (Array.isArray(object)) {
    return object.map((item) => toRawObject(item))
  }

  if (object !== null && typeof object === "object") {
    const rawObject: Record<string, any> = {}
    Object.keys(object).forEach(
      (key) => (rawObject[key] = toRawObject(object[key]))
    )
    return rawObject
  }

  return toRaw(object)
}

export default toRawObject
