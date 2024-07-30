// 实现Optional
// Optional<params, 'name'>

// type params = {
//  name: string
//  age: number
//  color: string
// }

// Optional<params, 'name' | ‘age’>

// type result = {
//  name: string
//  age?: number
//  color?: string
// }

// type Optional<T extends object, K extends keyof T> = Pick<T, K> &
//     Partial<Omit<T, K>>;
