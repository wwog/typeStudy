// ============= Test Cases =============
import type { Equal, Expect } from "../test-utils";

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

// ============= Your Code Here =============
export type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

type T = MyReadonly<Todo1>;

//设置对象，所以返回{}
//循环T的属性,为其新增readonly