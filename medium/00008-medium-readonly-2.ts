// ============= Test Cases =============
import type { Alike, Expect } from "../test-utils";
import type { MyReadonly } from "../easy/00007-easy-readonly";

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, "title" | "description">, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, "title" | "description">, Expected>>
];

interface Todo1 {
  title: string;
  description?: string;
  completed: boolean;
}

interface Todo2 {
  readonly title: string;
  description?: string;
  completed: boolean;
}

interface Expected {
  readonly title: string;
  readonly description?: string;
  completed: boolean;
}

// ============= Your Code Here =============
type PickAndReadonly<T, K extends keyof T> = {
  readonly [P in K]: T[P]
}
type MyReadonly2<T, K extends keyof T = keyof T> = PickAndReadonly<T, K> & Omit<T, K>