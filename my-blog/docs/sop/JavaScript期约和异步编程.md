---
tags:
  - JavaScript
title: JavaScript-期约和异步编程
slug: "javascript-11"
categories:
  - 前端
date: 2025-05-11T10:30:00+08:00
description: "本篇笔记总结了 JavaScript 中 Promise 与异步编程的核心内容。"
author: linrunxinnn
---

# `Promise`对象

### `Promise`构造：

```
let promise = new Promise(function (resolve,reject){
	//执行函数，当创建Promise对象时自动执行
})
```

- 它的参数  `resolve`  和  `reject`  是由 JavaScript 本身提供的回调。我们的代码只在 executor 里面
- Promise 对象的**三个状态**：**pedding/fulfilled/rejected**；且只有一个结果，且**更改即最终**
- 期约通过调用它的两个函数参数实现的，通常命名为**`resolve`和`reject`**
- 如果出现问题，执行者应该调用  `reject`。这可以用任何类型的参数来完成（就像  `resolve 一样` ）。但建议使用  `Error`  对象（或从  `Error`  继承的对象）

### `Promise`对象方法

#### `then`：

- 参数：只接收**函数类型参数**，其他会被静默忽略
- 只提供`onRejected`参数则写成`(null或undefined,onRejected)`
- 返回新期约：
  - 通过`resolve()`包装成新期约
  - 如果没有显示返回语句，则默认返回 undefined
- 抛出异常会返回**拒绝的期约**，但是，返回错误值会把错误对象包装再一个**兑现的期约**中

#### `catch`：

- 相当于调用`then(null,onReject)`
- 期约都会以拒绝对象为由被拒绝

#### `finally`：

- 不能理解成最后完成，而是**必须要做的事情**，到他这里就直接做了，而不必一定等到最后

#### 传递兑现的值和拒绝理由：

- 在执行函数中，兑现的值和拒绝的理由是分别作为`resolve` `reject`的第一个参数往后传递的

```
let p1 = new Promise((resolve,reject)=> resolve('foo'))
p1.then((value) => console.log(value))       //foo
```

#### 期约连锁与期约合成

##### `Promise.all()`

- 在一组期约**全部解决**之后解决
- 会以第一个拒绝的期约的理由作为合成期约的拒绝理由，之后再拒绝的期约不会影响最终期约的拒绝理由

##### `Promise.allSettled()`

- 等待一组期约全部**落地**
- 完成后，合成期约的兑现值会是一个对象的**数组**，每一个对象都有**status**属性记录，根据前一个属性值还有一个 value 或 reason 属性

##### `Promise.race()`

- 返回一个包装的期约，是一组集合中**最先兑现或拒绝**的期约的镜像

##### `Promise.any()`

- 用于等待期约集合中的**第一个兑现**的期约

##### 把任意多函数作为处理程序合成一个连续传值的期约连锁

```
function compose (...fns){
	return (x) => fns.reduce((promise,fn) => promise.then(fn),Promise.resolve(x))
}
```

---

# 异步函数

### 基础：

#### 关键字：

- `async`
  - 异步函数如果用 return 返回了值，会被`Promise.resolve()`返回成对象，**异步函数始终返回期约对象**
  - 如果返回的值是**thenable**接口对象，这个对象可以有提供给`then()`的处理程序解包
  - 如果没有则返回值就被当作已经兑现的期约
- `await`
  - 如果接收的是**thenable**接口对象，这个对象可以有提供给`then()`的处理程序解包
  - 如果没有则返回值就被当作已经兑现的期约
  - 在 await 中，`Promise.reject()`不会被异步函数捕获，而是会抛出未捕获错误
  - **`for-await0of`循环**：
    - 提供一种可迭代**异步数据流**的方式：`for await (let variable of iterable) {}`
