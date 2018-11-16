### css 样式学习

* 引入 css
1. `<div style="css"></div>`                                    行间样式
2. `<style>css</style>`                                         页面样式-在 `head` 内写入
3. `<link rel="stylesheet" type="text/css" href="style.css">`   外部引入样式-在 `head` 内写入
4. 优先级别
    * `行间样式 > 页面样式 > 外部引入样式`

* css 选择器
1. `id` 选择器-一个标签只能有一个 id
    * `<div id="test"></div>`                                   标签定义 id
    * `#test`                                                   样式内使用 #test
2. `class` 选择器-一个标签可以有多个 class
    * `<div class="test"></div>`                                标签定义 class
    * `.test`                                                   样式内使用 .test
3. `标签` 选择器-场景内所有的对应标签
    * `div`                                                     样式内使用 标签
4. `通配符` 选择器-场景内所有标签
    * `*`                                                       样式内使用 通配符
5. `属性` 选择器
    * `<div name="test"></div>`                                 标签定义属性
    * `[name]`                                                  样式内使用 [属性名]
    * `[name="属性值"]`                                          样式内使用 [属性名="属性值"]
6. `!important` 选择器
    * `width: 70px!important;`                                  样式内的属性后面使用 !important
5. 优先级别
    * `!important > 行间样式 > id > class | 属性选择器 > 标签 > 通配符`

* css 选择器权重-以 256 进制进行权重计算
    * `!important`              Infinity
    * `行间样式`                 1000
    * `id`                      100
    * `class|属性|伪类`          10
    * `标签|伪元素`              1
    * `通配符`                   0