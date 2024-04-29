// 动态规划三个概念  1.状态转移方程 2.最优子结构 3.边界

/** 最短路径 */
export function dp(arr, m, n) {
    let dp = (m, n) => {
        if (m === 2 && n === 2) {
            return arr[1][1] === 1 || arr[1][0] + arr[0][1] === 2
                ? 0
                : arr[1][0] === 1 || arr[0][1] === 1
                ? 1
                : 2;
        } else if (n < 2 || m < 2) {
            if (m < 2) {
                // 单行有1就返回0，没有1返回1
                return arr[m - 1].includes(1) ? 0 : 1;
            } else {
                // 单列中不能有障碍物(1)有它返回0,没有返回1
                for (let i = 0; i < m; i++) {
                    if (arr[i][0] === 1) {
                        return 0;
                    }

                    return 1;
                }
            }
        } else {
            return dp(m - 1, n) + dp(m, n - 1);
        }
    };
}

export function fly(src, dst, k) {
    // 对n个城市m个航班做飞行说明
    let fights = [
        [0, 1, 100],
        [1, 2, 100],
        [0, 2, 500],
    ];

    let cheap = (src, dst, k) => {
        // 找到dst的前一站
        let prev = fights.filter((item) => item[1] === dst);
        let min = Math.min.apply(
            null,
            prev.map((item) => {
                // 从dst往前找，找了起始城市
                if (item[0] === src && k > -1) {
                    return item[2];
                } else if (k === 0 && item[0] !== src) {
                    return Number.MAX_SAFE_INTEGER;
                } else {
                    return item[2] + cheap(src, item[0], k - 1);
                }
            })
        );

        return min;
    };

    return cheap(src, dst, k) || -1;
}
