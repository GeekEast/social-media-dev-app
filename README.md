### 零碎
- `Types`实际上分两种: 一种是`action动词`(**LOGOUT**)，一种是`状态名字`(**LOGIN_SUCCESS**)
- 在浏览器**敲回车**到另外一个route，实际上会刷新页面，`重置store`
- `#!` 无链接的`link`
- 快速创建**functional component** `racfe`

### 调研
- 在完全受控的子组件中传入的函数
  - 在组件外定义，reference必须相同
  - 在组件内定义: 要用useCallback进行mutable化, 使得引用相同
- `immutable data, mutable function`


### 参考
- [正交的React组件](https://zhuanlan.zhihu.com/p/96084784)
- [React, Redux, and Context Behavior](https://blog.isquaredsoftware.com/2020/01/blogged-answers-react-redux-and-context-behavior/)