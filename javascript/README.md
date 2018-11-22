### javascript 行为学习

##### 引入 javascripts
* `<script type="text/javascript" src="script.js"></script>` 外部引入方式
* `<script type="text/javascript">...</script>`    内部使用方式

##### 定义函数

* 定义方式
    1. `function test(){}`                      函数的 name 值等于 test
    2. `var test = function test2(){}`          函数的 name 值等于 test2
    3. `var test = function(){}`                函数的 name 值等于 test

* 参数
    1. `function test(a,b){}`                   定义时的参数叫形参
        * `sum`                                 所有定义的形参数组
        * `arguments`                           所有传入值的数组, 与形参有映射规则, 与引用一样改一个另一个也会改变
        * `return`                              函数返回值
    2. `test(2,6)`                              使用时的传入值叫实参

##### 执行函数

* `console.`                                    控制台
    * `log`                                     控制台输出

* `document`                                    文档 
    * `write`                                   网页输出   

* `window`                                      窗口工具
    * `alert`                                   提示框
    * `confirm`                                 判断提示框
    * `prompt`                                  输入框 

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
* `toFixed`                                     保留多少位数, 下一位四舍五入
* `toString`                                    其他类型转换成字符串,参数为进制(默认10)

* 数组方法
* `length`                                      数组的长度(参数)
