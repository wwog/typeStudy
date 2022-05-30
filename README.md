# 泛型
- 类型参数.通过传递类型变量来动态捕获我们的参数类型。可以应用于函数,类,接口,类型。
- 可以类似于js的默认值形式给予泛型的默认类型,也可以通过extends关键字来约束类型的
- 当定义了多个泛型参数时,后面的泛型参数可以使用前面的泛型参数进行约束，变体等操作


```typescript
//分布式条件类型
//https://www.typescriptlang.org/docs/handbook/advanced-types.html#conditional-types
//这意味着条件类型适用于联合的每个成员，结果将是所有应用的联合
// 你以为的 Exclude
type c = 'a' | 10 extends 'a' | 'b' | 'c' ? never : 'a' | 10
// 实际上的 Exclude
type c =
  | ('a' extends 'a' | 'b' | 'c' ? never : 'a')
  | (10 extends 'a' | 'b' | 'c' ? never : 10)

//通常，分配性是期望的行为。extends为避免这种行为，您可以用方括号将关键字的每一侧括起来。

type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;
 
// 'StrArrOrNumArr' is no longer a union.
type StrArrOrNumArr = ToArrayNonDist<string | number>;
           
type StrArrOrNumArr = (string | number)[]
```