// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
  Expect<Equal<Trim<''>, ''>>,
  Expect<Equal<Trim<' \n\t '>, ''>>,
]


// ============= Your Code Here =============
type Space = ' ' | '\n' | '\t';
//1 函数式|声明式
type TrimLeft<S extends string> = S extends `${Space}${infer Rest}` ? TrimLeft<Rest> : S;
type TrimRight<S extends string> = S extends `${infer Rest}${Space}` ? TrimRight<Rest> : S;
type Trim<S extends string> = TrimLeft<TrimRight<S>>

//2 命令式
type Trim2<S extends string> = S extends `${Space}${infer P}` ? Trim2<P> : S extends `${infer P}${Space}` ? Trim2<P> : S

//3 利用联合类型的分布式条件类型进行去空
type Trim3<S extends string> = S extends `${Space}${infer T}` | `${infer T}${Space}` ? Trim3<T> : S


