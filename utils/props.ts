import type { PropType } from 'vue'

/**
 * 驗證特定屬性類型定義
 * @param val - 屬性來源
 * @returns 類型驗證結果
 */
export const definePropType = <T>(val: any): PropType<T> => val