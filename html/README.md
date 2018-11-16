### html 标签学习

* `<!DOCTYPE html>`                                                 常用的 doctype 声明

* `<html></html>`                                                   根标签
    * `lang="en"`                                                   html 属性-告诉搜索引擎网站的内容包括-`en` `zh`
    * `<head></head>`                                               头标签-给浏览器的配置信息的标签
        * `<meta />`                                                网页配置-可以有多个
            * `charset="utf-8"`                                     meta 属性-网站字符集-字符集有 `utf-8` `unicode` `gb2312` `gbk`
            * `content="关键字" name="keywords"`                    关键字
            * `content="描述语言" name="description"`               描述性语言
            * `name="viewport" content="width=device-width, initial-scale=1.0"` 设置显示窗口大小
            * `http-equiv="X-UA-Compatible" content="ie=edge"`      设置渲染浏览器
        * `<title></title>`                                         网页头

    * `<body></body>`                                               内容标签-展现给用户查看的信息的标签
        * `<h1></h1>`                                               标题标签-`h1-6`
        * `<p></p>`                                                 段落标签
        * `<strong></strong>`                                       加粗内容
        * `<em></em>`                                               斜体内容
        * `<del></del>`                                             内容中间加删除线
        * `<address></address>`                                     地址标签
        * `<div></div>`                                             分行容器标签
        * `<span></span>`                                           不分行容器标签
        * `<br />`                                                  换行
        * `<hr />`                                                  分割线

        * `<ol><li></li>...</ol>`                                   有序列表
            * `<ol type="a"><li></li>...</ol>`                      排序名称-默认: `1` 其他 `a` `A` `i` `I`
                * `<ol type="a" start="5"><li></li>...</ol>`        排序从第几个开始
            * `<ol reversed="reversed"><li></li>...</ol>`           倒序排列

        * `<ul><li></li>...</ul>`                                   无序列表
            * `<ul type="disc"><li></li>...</ul>`                   无序列表的符号-默认: `disc` 其他 `square` `circle`

        * `<img />`                                                 图片标签
            * `<img src="ImageAddress" />`                          图片的地址
            * `<img alt="图片占位符" />`                             在图片发生错误时提示的文字信息

        * `<a ></a>`                                                超链接标签
            * `<a href="http://xxx.html"></a>`                      跳至网页
            * `<a href="#id"></a>`                                  跳至该页面锚点 
            * `<a href="tel:13900000000"></a>`                      拨打电话 
            * `<a href="mailto:abc@qq.com"></a>`                    发送邮件 
            * `<a href="javascript:"></a>`                          协议限定符, 点击后就能运行逻辑代码了

        * `<form></form>`                                           发送数据表单
            * `<form method="get/post"></form>`                     发送的方法
            * `<form action="http://xxx"></form>`                   发送的地址
        
        * `<input type="text" />`                                   输入标签-`text` `password` `submit` `radio`
            * `<input type="text" name="dataName"/>`                数据的名称-值存在 `value` 内
                * `<input type="text" placeholder="提示文字">`       文本输入框提示文字
                * `<input type="text" onfocus="this.value=''">`     当鼠标焦点聚焦时
                * `<input type="text" onblur="this.value=''">`      当鼠标失去焦点时
            * `<input type="radio" name="radioName"/>`              单选框的组及名称
                * `<input type="radio" name="radioName" value="值"/>`   单选框需要发送的值
                * `<input type="radio" name="radioName" value="值"/ checked="checked">`   单选框默认选项
            * `<input type="checkbox" name="checkboxName"/>`        复选框的组及名称
                * `<input type="checkbox" name="checkboxName" value="值"/>`   复选框需要发送的值
                * `<input type="checkbox" name="checkboxName" value="值" checked="checked"/>`   复选框默认选项
            * `<input type="submit" value="显示内容"/>`              提交按钮上的显示内容

        * `<select><option></option>...</select>`                   下拉菜单
            * `<select name="selName"><option></option>...</select>`   数据的名称-值就是 `option` 包含的值
            * `<select name="selName"><option value="值"></option>...</select>`   也可以在 `option` 内添加 `value` 

* html 标签共用属性     
    * `id="test"`                                                   定义ID
    * `class="test"`                                                定义类
    * `style="width: 0;"`                                           定义 CSS 样式
    * `title="提示信息"`                                            提示符

* html 编码
    * `&nbsp;`                                                      空格
    * `&lt;` `&gt;`                                                 左右尖角符合