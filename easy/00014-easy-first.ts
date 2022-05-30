// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
]

type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>,
]


// ============= Your Code Here =============
//我只想到这个,下面来自于大佬
//限制了T为数组,判断T是否为空的元组,是返回never(为何不是undefined),否则返回第一个元素的类型
type First2<T extends any[]> = T extends [] ? never : T[0]

//判断T.length的类型是否继承0
type First1<T extends any[]> = T["length"] extends 0 ? never : T[0]

//这个能看懂但不是很能够理解。
type First3<T extends any[]> = T[0] extends T[number] ? T[0] : never;

//推断还是比较生动的,通过infer推断T的首位类型.但为了通过类型校验,必须多出一个rest类型。 ...展开,剩余语法
type First<T extends any[]> = T extends [infer First, ... infer Rest] ? First : never;

