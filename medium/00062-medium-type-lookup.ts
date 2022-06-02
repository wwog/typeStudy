// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal' | 1
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer' | 1
  color: 'brown' | 'white' | 'black'
}

type Animal = Cat | Dog

type cases = [
  Expect<Equal<LookUp<Animal, 'dog'>, Dog>>,
  Expect<Equal<LookUp<Animal, 1>, Animal>>,
]


// ============= Your Code Here =============
type LookUp<U, T> =
  U extends infer V
  ? T extends V[keyof V] ? V : never
  : never