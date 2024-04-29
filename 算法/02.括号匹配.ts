/**
 * 判断左右括号是否匹配
 * @param left 左括号
 * @param right 右括号
 */
function isMatch(left: string, right: string) {
    if (left === '{' && right === '}') return true;
    if (left === '[' && right === ']') return true;
    if (left === '(' && right === ')') return true;

    return false;
}

function matchBracket(str: string): boolean {
    const length = str.length;

    if (length === 0) {
        return true;
    }

    const stack: any = [];

    const leftSymbols = '{[(';
    const rightSymbols = '}])';

    for (let i = 0; i < length; i++) {
        const s = str[i];

        if (leftSymbols.includes(s)) {
            // 左括号，压站
            stack.push(s);
        } else {
            // 右括号，判断栈顶(是否出栈)
            const top = stack[stack.length - 1];
            if (isMatch(top, s)) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length === 0;
}
