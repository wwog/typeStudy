// ============= Test Cases =============
import type { Equal, Expect } from "../test-utils";
import type { MyPick } from "../easy/00004-easy-pick";
import type { MyExclude } from "../easy/00043-easy-exclude";
type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, "description">>>,
  Expect<Equal<Expected2, MyOmit<Todo, "description" | "completed">>>
];

// @ts-expect-error
type error = MyOmit<Todo, "description" | "invalid">;

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
  completed: boolean;
}

interface Expected2 {
  title: string;
}

// ============= Your Code Here =============
type MyOmit<T, K extends keyof T> = MyPick<T, MyExclude<keyof T, K>>;
