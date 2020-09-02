# sczts-helpers
![Node.js Package](https://github.com/eiixy/sczts-helpers/workflows/Node.js%20Package/badge.svg)
> 助手函数包

## 安装
```
npm i sczts-helpers
```

## 快速开始

### 使用助手函数
```js
// 全部引入
import Helpers from "sczts-helpers"

// 映入指定工具类
import { Obj,Debounce } from "sczts-helpers"

Helpers.Cache.remember('key',600,()=>123)
Arr.pluck([{id:1,name:'name1'},{id:2,name:'name2'}],'id') // => [1,2]
Obj.pop({a:1,b:2,c:3},'b') // => 2
```

## 助手函数
* [Arr](#Arr)
    * *pluck(array, colunm)* 获取数组指定一列数据
    * *wrap(value)* 将给定值转换为数组
    * *has(array, values)* 判断数组中是否存在某些值
    * *unique(array,colunms)* 数组去重
* [Cache](#Cache)
    * remember(key, ttl, fn) 获取和存储缓存
    * rememberPromise(key, ttl, fn) 获取和存储缓存（返回Promise对象）
    * set(key, data) 设置缓存数据
    * get(key, ?defalut) 获取缓存数据
    * forget(key) 删除指定缓存
    * clear() 清空全部缓存
* [Obj](#Obj)
    * pop(key, default) 弹出对象值
    * diff(val1, val2)  比较两个对象之间的差异
* [Debounce](#Debounce) 防抖
* [Throttle](#Throttle) 节流


### Arr
#### pluck(array, colunm) 
#### wrap(value)
#### has(array, values)
#### unique(array,colunms)

### Cache

### Obj


### Debounce
```js
import { debounce } from "sczts-helpers";
for(let i = 0; i < 5; i++){
  setTimeout(function (){
    console.log('test Debounce', i)
    debounce('key',()=>{
      console.log('exec Debounce')
    },1000)()
  }, 200 * i);
}
/**
 * console.log:
 * test Debounce 0
 * test Debounce 1
 * test Debounce 2
 * test Debounce 3
 * test Debounce 4
 * exec Debounce
 **/
```

### Throttle
```js
import { throttle } from "sczts-helpers";
for(let i = 0; i < 5; i++){
  setTimeout(function (){
    console.log('test Throttle', i)
    throttle('key',()=>{
      console.log('exec Throttle')
    },1000)()
  }, 200 * i);
}
/**
 * console.log:
 * test Throttle 0
 * exec Throttle
 * test Throttle 1
 * test Throttle 2
 * test Throttle 3
 * test Throttle 4
 * exec Throttle
 **/
```