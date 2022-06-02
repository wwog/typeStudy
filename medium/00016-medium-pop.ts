// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'
import type { Last } from './00015-medium-last'
type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
]


// ============= Your Code Here =============
export type Pop<T extends any[]> = T extends [...infer Pop, infer L] ? Pop : never


