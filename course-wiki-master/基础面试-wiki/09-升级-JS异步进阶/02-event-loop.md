### 本资源由 itjc8.com 收集整理

# event loop

### event loop 过程 1

-   同步代码，一行一行放在 Call Stack 执行
-   遇到异步，会先“记录”下，等待时机（定时，网络请求等）
-   时机到了，就移动到 Callback Queue

### event loop 过程 2

-   如 Call Stack 为空（即同步代码执行完）Event Loop 开始工作
-   轮询查找 Callback Queue,如果有则移动到 Call Stack 执行
-   然后继续轮询查找（永动机一样）

写一段代码，画图讲解即可

```js
console.log('Hi');

setTimeout(function cb1() {
    console.log('cb1'); // cb 即 callback
}, 5000);

console.log('Bye');
```

---

DOM 事件，也用 event loop

```html
<button id="btn1">提交</button>

<script>
    console.log('Hi');

    $('#btn1').click(function (e) {
        console.log('button clicked');
    });

    console.log('Bye');
</script>
```
