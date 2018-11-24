### css 样式学习

##### 引入 css
1. `<div style="css"></div>`                                    行间样式
2. `<style>css</style>`                                         页面样式-在 `head` 内写入
3. `<link rel="stylesheet" type="text/css" href="style.css">`   外部引入样式-在 `head` 内写入
4. 优先级别
    * `行间样式 > 页面样式 > 外部引入样式`

##### css 选择器
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

* css 其他复杂选择器 - 这种多个选择器应用需要考虑权重问题
    * 把同个 css 的所有的标签的权重加起来进行比较判断优先级
    * 如果两个比较权重一致, 那么后面一个会覆盖前面一个

1. 父子选择器 - 包含所有层级子元素
    * `Parent Child`                                            父在前 子在后 中间空格(可有由标签、类、id等使用)
2. 直接子元素选择器 - 包含下一级子元素
    * `Parent > Child`                                          父在前 子在后 中间空格(可有由标签、类、id等使用)
3. 并列选择器 - 同时两个及两个以上的条件进行选择
    * `div.demo`                                                加多个选择条件进行选者(可有由标签、类、id等使用-标签选择器必须在最前面)  
4. 分组选择器
    * `div,ul,li`                                               可以同时对多个选择器加入同一个 css 用 逗号 分割              

* css 伪类选择器
    1. `a:hover`                                                 鼠标移入

* css 伪元素选择器                                               每个标签都存在伪元素, 不选择不会看到
    1. `div::before`                                            在标签最前
    2. `div::after`                                             在标签最后

    * `content`                                                 伪元素必须要加的属性, 可以直接给 "" 不然看不到伪元素

* css 
    * `p:nth-child(1)`                                          标签组的第一个元素
    * `p:nth-last-child(1)`                                     标签组的最后个元素
    * `li:nth-of-type(2n)`                                      规定属于父类的第 n 给元素的每个元素; n 是计数器, 其他数是偏移量
    * `li:nth-last-of-type(2n)`                                 规定属于父类(最后开始)的第 n 给元素的每个元素; n 是计数器, 其他数是偏移量

##### css 样式
* 字体控制
    * font-size                                                 字体大小(默认 16px), 内部设置的是字体的高度
    * font-weight                                               字体的粗细(默认 normal)
    * font-style                                                字体样式(默认 normal),比如斜体等
    * font-family                                               字体,比如 arial
    * text-align                                                字体对齐方式
    * line-height                                               字体单行文本高度
    * vertical-align                                            字体纵向对齐
    * text-decoration                                           字体文本装饰, (line-through 删除线, underline 下划线, overline 上划线, none 没有线)
    * text-indent                                               字体首行缩进
    * white-space                                               字体空间控制
    * text-overflow                                             字体溢出部分控制
    * color                                                     字体颜色
* 盒子模型
    * margin                                                    外边距
        * margin-left                                           左外边距
        * margin-right                                          右外边距
        * margin-top                                            上外边距
        * margin-bottom                                         下外边距
    * padding                                                   内边距
        * padding-left                                          左内边距
        * padding-right                                         右内边距
        * padding-top                                           上内边距
        * padding-bottom                                        下内边距
    * border                                                    边框
        * border-left                                           左边框
        * border-right                                          右边框
        * border-top                                            上边框
        * border-bottom                                         下边框

        * border-width                                          边框宽度
        * border-style                                          边框样式
        * border-color                                          边框颜色
        * border-radius                                         边框圆角
    * overflow                                                  溢出部分处理
        * overflow-x                                            横向溢出部分
        * overflow-y                                            纵向溢出部分
* 定位
    * position                                                  定位
    * left                                                      距离左边位置
    * right                                                     距离右边位置
    * top                                                       距离上边位置
    * bottom                                                    距离下边位置
* 浮动
    * float                                                     设置浮动流, block 元素不会有感应到空间
    * clear                                                     清楚浮动流, 只有用 block 元素才能清除
* 背景
    * background                                                背景
        * background-color                                      背景颜色
        * background-image                                      背景图片
        * background-size                                       背景图片大小
        * background-repeat                                     背景图片重复
        * background-position                                   背景图片位置
* 光标
    * cursor                                                    光标样式
* 列表
    * list-style                                                列表样式
* 层
    * z-index                                                   层级数
* 显示属性
    * display                                                   显示的级别
    

* 系统单位
    * px 像素
    * em 相对单位

* BUG 及解决方法
    * margin 塌陷 BUG
        * 当父级与子级块元素同时都使用 margin-top 时发生, BUG html 网页会查找最大的一个 margin-top 进行设置到父级上, 子级 还是 0 不变
        * 解决办法: 触发 block format context 改变盒子模型规则
        * 4 种不同的触发方式
            1. position: absolute
            2. display: inline-block
            3. float: left / right
            4. overflow: hidden
    * margin 合并 BUG
        * 当同级块元素 一个使用 margin-bottom 另一个使用 margin-top 时, 他们之间的距离会取这两者的最大值 而不会把他们相加
        * 解决办法: 触发 block format context 改变盒子模型规则
        * 4 种不同的触发方式
            1. position: absolute
            2. display: inline-block
            3. float: left / right
            4. overflow: hidden