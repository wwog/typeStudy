// ============= Test Cases =============
import type { Equal, Expect } from "../test-utils";

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: "tesla";
        "model 3": "model 3";
        "model X": "model X";
        "model Y": "model Y";
      }
    >
  >
];

type error = TupleToObject<[[1, 2], {}]>;

// ============= Your Code Here =============
type TupleToObject<T extends readonly any[]> = {
  [P in T[number]]: P
};

type TupleToObject2<T extends readonly any[]> = {
  [P in T[number]]: string
};

//等同于js for in 可以在数组和对象是循环,数组循环value,对象循环key

//ts可以循环一个联合类型