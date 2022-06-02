// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Last2<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
]


// ============= Your Code Here =============
//数组头部添加合并新数组，取长度. 秒啊
export type Last<T extends any[]> = [any, ...T][T['length']]

type Last2<T extends any[]> = T extends [...infer R, infer L] ? L : never