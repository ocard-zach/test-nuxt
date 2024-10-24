/**
 * 事件防抖
 * @param func - 回調函式
 * @param wait - 延遲時間
 * @returns 執行結果
 */
export const debounce = <Fn extends (...args: any[]) => any>(func: Fn, wait: number) => {
  let timeout: undefined | number | null = null

  const debounced = (...args: Parameters<Fn>) => {
    if (timeout !== null) {
      clearTimeout(timeout)
      timeout = null
    }
    timeout = window.setTimeout(() => func(...args), wait)
  }

  return debounced as (...args: Parameters<Fn>) => ReturnType<Fn>
}