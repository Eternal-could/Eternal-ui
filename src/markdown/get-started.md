# 开始使用

请先[安装](#/doc/install)本组件库。

然后在你的代码中写入下面的代码
```
import {ButtonLib, TabsLib, SwitchLib, DialogLib} from "Eternal-ui"
```

就可以使用我提供的组件了。

## Vue 单文件组件

代码示例：

```
<template>
  <div><ButtonLib>按钮</ButtonLib></div>
</template>
<script>
import {ButtonLib, TabsLib, SwitchLib, DialogLib} from "Eternal-ui"
export default {
  components: {ButtonLib}
}
</script>
```