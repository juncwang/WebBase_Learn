### javascript 行为学习

##### 引入 javascripts
* `<script type="text/javascript" src="script.js"></script>` 外部引入方式
* `<script type="text/javascript">...</script>`    内部使用方式

##### 预编译

* Activation Object 方法体
1. 生成 AO {} 对象
2. 寻找代码内所有的变量并给值 `undefined`
3. 把实参的值付给形参
4. 寻找代码内所有的方法并把方法值赋予值

* Global Object 全局
1. 生成 GO {} 对象
2. 寻找代码内所有的变量并给值 `undefined`
3. 寻找代码内所有的方法并把方法值赋予值

##### 定义函数

* 定义方式
    1. `function test(){}`                      函数的 name 值等于 test
    2. `test : function(){}`                    函数的 name 值等于 test
    3. `var test = function test2(){}`          函数的 name 值等于 test2
    4. `var test = function(){}`                函数的 name 值等于 test

* 参数
    1. `function test(a,b){}`                   定义时的参数叫形参
        * `sum`                                 所有定义的形参数组
        * `arguments`                           所有传入值的数组, 与形参有映射规则, 与引用一样改一个另一个也会改变
        * `name`                                函数名称
        * `prototype`                           原型对象包含函数实例共享的方法和属性
        * `[[scope]]`                           作用域链 scope[0] 存放 AO, scope[1] 存放 GO
        * `return`                              函数返回值
    2. `test(2,6)`                              使用时的传入值叫实参

* 立即执行函数
    * `(function(){}())`                        立即执行函数

##### 定义对象

* 对象的定义
    1. `var object = {}`                        对象的一般定义
    2. `var object = new Object()`              通过系统定义对象

* 对象内定义属性及方法
    1. `name : "Wang"`                          属性定义
    2. `fun : function(){}`                     方法定义 

* 对象的关键字
    1. `this.name`                              表示调用自身的 name 属性
    2. `delete object.name`                     表示删除 object 的 name 属性, undefine

##### 执行函数

* 控制台
* `console.`                                    控制台
    * `log`                                     控制台输出

* 文档
* `document`                                    文档
    * `body`                                    内容
        * `appendChild`                         添加一个子元素
    * `createElement`                           创建元素
    * `getElementById`                          通过 id 获取元素
    * `getElementsByTagName`                    通过标签名字获取元素组
    * `write`                                   网页输出   

* 窗口
* `window`                                      窗口工具
    * `alert`                                   提示框
    * `confirm`                                 判断提示框
    * `prompt`                                  输入框 
    * `setTimeout`                              系统等待 n 毫秒后启动回调函数

* 数学相关
* `Math`                                        数学任务
    * `abs`                                     绝对值
    * `acos`                                    反余玄值
    * `asin`                                    反正玄值
    * `atan`	                                介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值
    * `atan2`	                                从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间）
    * `ceil`	                                对数进行上舍入
    * `cos`	                                    数的余弦
    * `exp`	                                    返回 e 的指数
    * `floor`	                                对数进行下舍入
    * `log`	                                    返回数的自然对数（底为e）
    * `max`	                                    返回 x 和 y 中的最高值
    * `min`	                                    返回 x 和 y 中的最低值
    * `pow`	                                    返回 x 的 y 次幂
    * `random`	                                返回 0 ~ 1 之间的随机数
    * `round`	                                把数四舍五入为最接近的整数
    * `sin`	                                    返回数的正弦
    * `sqrt`	                                返回数的平方根
    * `tan`	                                    返回角的正切
    * `toSource`	                            返回该对象的源代码
    * `valueOf`	                                返回 Math 对象的原始值

* 类型转换
* `Boolean`                                     转换为布林类型
* `Number`                                      字符串数字转换成数
* `parseFloat`                                  其他类型转换成浮点数
* `parseInt`                                    其他类型转换成整数,第二个参数为进制(默认10)
* `String`                                      把其他类型转换成字符串
* `typeof`                                      返回变量类型
* `isNaN`                                       返回传入值是否为 NaN, 此方法先使用 Number 方法进行转换后比较

* 变量方法
* `charAt`                                      取出字符串第几个字符
* `charCodeAt`                                  返回字符串第 n 位 asc 编码
* `toFixed`                                     保留多少位数, 下一位四舍五入
* `toString`                                    其他类型转换成字符串,参数为进制(默认10)

* 数组方法
* `length`                                      数组的长度(参数)

* 元素方法
* `addEventListener`                            添加一个事件
* `appendChild`                                 添加一个子元素
* `click`                                       调用元素点击事件
* `innerHTML`                                   设置元素内的 html 内容(参数)
* `innerTEXT`                                   设置元素内的 TEXT 内容(参数)
* `onclick`                                     设置点击事件的回调函数(参数)
* `setAttribute`                                设置元素的属性
* `style`                                       样式
    * `cssText`                                 设置 css 样式(参数)
* `value`                                       元素的值