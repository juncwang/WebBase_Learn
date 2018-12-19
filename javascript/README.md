### javascript 行为学习

##### 引入 javascripts
* `<script type="text/javascript" src="script.js"></script>` 外部引入方式
* `<script type="text/javascript">...</script>`    内部使用方式

##### 系统默认使用 es3 的方法

* 强制执行 es5 的方法
    * `"use strict"`              在文档前面加入该字符串 开启 es5 严格模式

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
            * `arguments.callee`                自身对象
        * `name`                                函数名称
        * `[[scope]]`                           作用域链 scope[0] 存放 AO, scope[1] 存放 GO
        * `return`                              函数返回值
    2. `test(2,6)`                              使用时的传入值叫实参
    3. `caller`                                 调用函数的对象

* 立即执行函数
    * `(function(){}())`                        立即执行函数

* 进阶为对象方式
    * `new func()`                              使用 new 关键字将方法转为对象
    * 方法内, 程序会在第一行执行一个默认语句
        * `var this = Object.create(func.prototype)`

##### 定义对象

* 对象的定义
    1. `var object = {}`                        对象的一般定义
    2. `var object = new Object()`              通过系统定义对象
    3. `var object = Object.create(Object.prototype)`   

* 对象内定义属性及方法
    1. `name : "Wang"`                          属性定义
    2. `fun : function(){}`                     方法定义 

* 对象属性访问
    1. `obj.name`                               
    2. `obj['name']`

* 对象的关键字
    1. `this.name`                              表示调用自身的 name 属性
    2. `delete object.name`                     表示删除 object 的 name 属性, undefine

* 对象的默认方法
    1. `toString()`                             默认打印结果
        * `call(值)`                            使用此方法调用 toString 方法等到返回结果
    2. `create(原型)`                           使用原型对象创建对象(只能使用原型或 null )
    3. `call(值, ...)`                          执行函数 等同于 abc(), 如果给值, 那么方法内的 this 就会指向给的值, 其他参数就是传入的实参列表
                                                使用类使用此方法就可以使用其他类的方法来构造自己
    4. `apply(值, [.. , ..]`                    与 call 一样, 只是一个传实参列表, 一个传数组
    5. `obj.hasOwnProperty(key)`                判断是否不是继承的属性
    6. `obj instanceof Obj`                     判断 obj对象 是否为 Obj类 构造出来的

* 参数
    * `__proto__`                               原型指向
        * `prototype`                           原型对象包含函数实例共享的方法和属性(类调用)
            * `constructor`                     构造器(对象调用)

* 继承
    * 继承实现原理 - 实现 target 继承自 origin
    ```js
        var inherit = (function(){                              // 定义一个立即执行函数
            var F = function(){}                                // 利用闭包实现私有变量
            return function(target, origin){                    // 返回一个函数实现 target 继承于 origin
                F.prototype = origin.prototype                  // 使用 F 的 prototype 属性获取 origin 的 prototype 属性
                target.prototype = new F()                      // 获取一个 F 的对象
                target.prototype.constuctor = target            // 构造函数指定为 target
                target.prototype.uber = origin.prototype        // 父类指定为 origin 的 prototype 属性
            }
        }())
    ```

##### try{}catch(e){}
* 属性
    1. `e.name`                     // 错误名称
        * `EvalError`               eval() 使用与定义不一样
        * `RangeError`              数值越界
        * `ReferenceError`          非法或不能识别的引用数值
        * `SyntaxError`             发生语法解析错误
        * `TypeError`               操作数类型错误
        * `URIError`                URI 处理函数使用不当
    2. `e.message`                  // 错误信息

##### 数组

* 创建方式
    1. `var arr = [1,2,3]`                      
    2. `var arr = new Array(1,2,3,)`

* 默认属性
    * `length`                                  数组长度

* 方法
    * `push`                                    在数组末尾增加一个元素
    * `pop`                                     删除数组末位, 并返回删除的数
    * `shift`                                   把数组第一位删除
    * `unshift`                                 在数组最前面加一个元素
    * `reverse`                                 倒叙
    * `splice`                                  从第几位开始, 截取多少长度, 在切开出添加新的数据
    * `sort`                                    排序, 参数为回调函数, 从数组中依次取出两个数进行比较, 返回负值或零食不变，正值就调换位置
    ```js
    arr.sort((a,b) => a - b)
    ```
    
    * `concat`                                  一个数组拼接另一个数组, 并返回新的数组
    * `join`                                    使用一个字符串, 对数组进行元素间拼接, 并返回字符串
    * `s`                                       使用一个字符, 把字符串拆分为数组, 并返回数组
    * `toString`                                把字符串内容用字符串返回
    * `slice`                                   从第几位开始, 截取到第几位, 并返回新的数组

* 类数组
    1. 属性必须为索引(数字)属性
    2. 必须有 length 属性
    3. 最好加上 push 方法或其他数组方法
        ```js
            var obj = {
                '0' : 'a',
                '1' : 'b',
                '2' : 'c',
                'length' : 3,
                'push' : Array.prototype.push,
                'slice' : Array.prototype.slice
            }
        ```

##### 执行函数

* 控制台
* `console.`                                    控制台
    * `log(str)`                                控制台输出

* 文档
* `document`                                    整个文档
    * `documentElement`                         html 内容
    * `head`                                    head 内容
    * `body`                                    body 内容
    * `createElement(str)`                      创建元素节点
    * `createTextNode(str)`                     创建文本节点                        
    * `createComment(str)`                      创建注释节点
    * `createDocumentFragment(str)`             创建文档碎片节点
    * `write(str)`                              网页输出   
    * 选择器
    * `getElementById(str)`                     通过 id 获取元素
    * `getElementsByClassName(str)`             通过 class 获取元素组, 元素也可使用
    * `getElementsByTagName(str)`               通过标签名字获取元素组
    * `getElementsByName(str)`                  通过 name 属性获取元素组
    * `querySelector(str)`                      通过 css 选择器规则选择元素, 副本
    * `querySelectorAll(str)`                   通过 css 选择器规则选择元素组, 副本

* 元素方法
* `addEventListener()`                          添加一个事件
* `appendChild(Ele)`                            添加一个子节点
* `insertBefore(Ele,EleChild)`                  为子元素节点 strChild 之前的位置插入一个节点
* `remove()`                                    删除自身
* `removeChild(EleChild)`                       删除子节点 strChild
* `replaceChild(Ele,EleChild)`                  使用 Ele 替换子元素节点 strChild
* `className`                                   对元素的 class 进行操作
* `innerHTML`                                   设置元素内的 html 内容(参数)
* `innerTEXT`                                   设置元素内的 TEXT 内容(参数)
* `textContent`                                 元素的内容
* `setAttribute(attName,strVal)`                设置元素的属性
* `getAttribute(attName)`                       获取元素的属性
                               
* `style`                                       样式
    * `cssText`                                 设置 css 样式(参数)
    * --------------------------------------------------------------------------
    * `background`                              背景
    * `backgroundColor`                         背景颜色
    * `display`                                 显示
    * `width`                                   宽度
    * `height`                                  高度

* 属性
    * `nodeName`                                节点名称(只读)
    * `nodeType`                                节点类型节点类型
        1. 元素节点
        2. 属性节点
        3. 文本节点
        8. 注释节点
        9. document 节点
        11. DocumentFragment
    * `nodeValue`                               节点的值(只有文本节点有)
    * `attributes`                              属性节点集合
    * `hasChildNodes()`                         是否有子节点
* 关系
    * 节点
        * `parentNode`                                  父节点
        * `childNodes`                                  子节点组
        * `firstChild`                                  第一个子节点
        * `lastChild`                                   最后一个子节点
        * `nextSibling`                                 下一个兄弟节点
        * `previousSibling`                             上一个兄弟节点
    * 元素节点
        * `parentElement`                               父元素节点
        * `children`                                    子元素节点组
        * `childElementCount`                           子元素节点的个数
        * `firstElementChild`                           第一个元素子节点
        * `lastElementChild`                            最后一个元素子节点
        * `nextElementSibling`                          下一个兄弟元素节点
        * `previousElementSibling`                      上一个兄弟元素节点
* 事件
    * `click()`                                     调用元素点击事件
    * `onclick`                                     设置点击事件的回调函数(参数)
    * `onmouseover`                                 鼠标滑动事件的回调函数(参数e)
    * `onkeydown`                                   键盘按下事件的回调函数(参数e)
    
* 窗口
* `window`                                      窗口工具
    * `alert(str)`                              提示框
    * `confirm(str)`                            判断提示框
    * `eval(str)`                               把字符串当代码执行, es3 不能使用
    * `prompt(str)`                             输入框 
    * `setInterval(function,num)`               系统每过 n 毫秒调用一次回调函数, 返回一个时间句柄
    * `clearInterval(timer)`                    通过时间句柄清除计时器
    * `setTimeout(function,num)`                系统等待 n 毫秒后启动回调函数, 返回一个定时器句柄
    * `clearTimeout(timer)`                     通过事件句柄清除定时器
    * `event`                                   事件, ie 兼容性问题, 一般直接用传入的 e 
        * `target`                              事件目标
        * `srcElement`                          事件目标, ie 兼任性问题



* 类型转换
* `Boolean(var)`                                转换为布林类型
* `Number(var)`                                 字符串数字转换成数
* `parseFloat(var)`                             其他类型转换成浮点数
* `parseInt(var)`                               其他类型转换成整数,第二个参数为进制(默认10)
* `String(var)`                                 把其他类型转换成字符串
* `typeof(var)`                                 返回变量类型
* `isNaN(var)`                                  返回传入值是否为 NaN, 此方法先使用 Number 方法进行转换后比较

* 变量方法
* `charAt(num)`                                 取出字符串第几个字符
* `charCodeAt(num)`                             返回字符串第 n 位 asc 编码
* `toFixed(num)`                                保留多少位数, 下一位四舍五入
* `toString()`                                  其他类型转换成字符串,参数为进制(默认10)

* 数组方法
* `length`                                      数组的长度(参数)

* 数学相关
* `Math`                                        
    * `abs(num)`                                绝对值
    * `acos(num)`                               反余玄值
    * `asin(num)`                               反正玄值
    * `atan(numX,numY)`	                        介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值
    * `atan2(numX,numY)`	                    从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间）
    * `ceil(num)`	                            对数进行上舍入
    * `cos(num)`	                            数的余弦
    * `exp(num)`	                            返回 e 的指数
    * `floor(num)`	                            对数进行下舍入
    * `log(num)`	                            返回数的自然对数（底为e）
    * `max(numX,numY)`	                        返回 x 和 y 中的最高值
    * `min(numX,numY)`	                        返回 x 和 y 中的最低值
    * `pow(numX,numY)`	                        返回 x 的 y 次幂
    * `random()`	                            返回 0 ~ 1 之间的随机数
    * `round(num)`	                            把数四舍五入为最接近的整数
    * `sin(num)`	                            返回数的正弦
    * `sqrt(num)`	                            返回数的平方根
    * `tan(num)`	                            返回角的正切
    * `toSource(num)`	                        返回该对象的源代码
    * `valueOf(num)`	                        返回 Math 对象的原始值

##### 类

* 时间类
* `new Date()`
    * `getTime()`                               获取当前时间的时间戳


