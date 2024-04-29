export function curry(fn: Function) {
    const fnArgsLength = fn.length;
    let args: any[] = [];

    function calc(...newArgs: any[]) {
        // 积累参数
        args = [...args, ...newArgs];

        if (args.length < fnArgsLength) {
            // 参数不够，返回函数
            return calc;
        } else {
            // 参数够了，返回执行结果
            return fn.apply(this, args.slice(0, fnArgsLength));
        }
    }

    return calc;
}
