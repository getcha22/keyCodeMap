# key Code Map
通过JS监听可以获得键盘按键的键值，但如何使用键值来判断到底触发了哪个按键？
此时可以用到Key Code Map，它提供了键值到按键的反映射。

## Import

- 使用打包工具加载
- 直接通过 `<script>` 标签引入，请自行修改代码避免污染作用域。

## Example

```js
// 获取16键值所对应的按键类型以及按键内容
var result = keyCodeMap.getTypeAndChar('16');
console.log(result); 
// { type: 'modifierKey', character: 'shift' } 
```

# MIT
