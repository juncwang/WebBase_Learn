// javascript 工具方法
// 深度拷贝并返回新对象 - deepClone(origin, target)
// 判断类型返回类型字符串 - type(target)
// 数组去重并返回新数组 - Array.prototype.unique() - 把方法直接放入到 Array 的方法

// document 工具方法 
// 获取浏览器滚动条值对象 {x, y} - getScrollOffset()
// 获取浏览器可视宽高对象 {w, h} - getViewportOffset()
// 获取元素的样式信息 - getStyle(elem, str)
// 为元素绑定事件 - addEvent(elem, eventType, func)
// 阻止事件冒泡功能 - stopBubble(event)
// 取消默认事件功能 - cancelDefaultEvent (event)
// 异步加载 js 功能 - loadScript(url, callback)
    // 调用举例
    // loadScript('./javascript/Tools.js', function(){ loadScript() })
// 实现在元素下一位加入新元素 - Element.prototype.insertAfter(Ele, eleChild) - 类似于 insertBefore 方法

// 文件处理
// 文件预先需要处理一下
// let files = [...input.files]
// files.forEach(file => {
// 具体方法使用位置
// });
// 将input.files文件转成可在html内使用的文件链接 - getObjectURL(file) 并返回链接地址
// 将input.files文件转成 base64 字符串链接 - getBase64URL(file) 并返回base64字符串链接
// 将input.files文件上传至服务器 - uploadfile(file) 

function deepClone(origin, target) {
    var target = target || {},
        toStr = Object.prototype.toString,
        arrStr = '[object Array]';
    for(var prop in origin){
        if(origin.hasOwnProperty(prop)){
            if(origin[prop] != 'null' && typeof(origin[prop]) == 'object'){
                target[prop] = toStr.call(origin[prop]) == arrStr ? [] : {};
                deepClone(origin[prop], target[prop]);
            }else{
                target[prop] = origin[prop];
            }
        }
    }
    return target;
}

function type(target){
    var typeStr = typeof(target),
        template = {
        '[object Array]' : 'array - object',
        '[object Object]' : 'object - object',
        '[object Number]' : 'number - object',
        '[object Boolean]' : 'boolean - object',
        '[object String]' : 'string - object'
    }
    if(target === null){
        return 'null';
    }
    if(typeStr === 'object'){
        return template[Object.prototype.toString.call(target)];
    }else{
        return typeStr;
    }
}

Array.prototype.unique = function(){
    var temp = {},
        arr = [],
        len = this.length;
    for(var i = 0; i < len; i++){
        if(!temp[this[i]]){
            temp[this[i]] = true;
            arr.push(this[i]);
        }
    }
    return arr;
}

function getScrollOffset(){
    if(window.pageXOffset){
        return {
            x : window.pageXOffset,
            y : window.pageYOffset
        }
    }else{
        return {
            x : document.body.scrollLeft + document.documentElement.scrollLeft,
            y : document.body.scrollTop + document.documentElement.scrollTop
        }
    }
}

function getViewportOffset(){
    if(window.innerWidth){
        return {
            w : window.innerWidth,
            h : window.innerHeight
        }
    }else{
        if(document.compatMode === 'BackCompat'){
            return {
                w : document.body.clientWidth,
                h : document.body.clientHeight
            }
        }else{
            return {
                w : document.documentElement.clientWidth,
                h : document.documentElement.clientHeight
            }
        }
    }
}

function getStyle(elem, prop){
    if(window.getComputedStyle){
        return window.getComputedStyle(elem, null)[prop]
    }else{
        return elem.currentStyle[prop]
    }
}

function addEvent(elem, eventType, func) {
    if(elem.addEventListener){
        elem.addEventListener(eventType, func, false)
    }else if(elem.attachEvent){
        elem.attachEvent('on' + eventType, function(){
            func.call(elem);
        })
    }else{
        elem['on' + eventType] = func;
    }
}

function stopBubble(event){
    if(event.stopPropagation()){
        event.stopPropagation()
    }else{
        event.cancelBubble = true
    }
}

function cancelDefaultEvent (event){
    if(event.preventDefault()){
        event.preventDefault()
    }else{
        event.returnValue = false
    }
}

function loadScript(url, callback) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    if (script.readyState) {
        script.onreadystatechange = function () {
            if (script.readyState == 'complete' || script.readyState == 'loaded') {
                callback();
            }
        }
    } else {
        script.onload = function () {
            callback();
        }
    }
    script.src = url;
    document.head.appendChild(script);
}

Element.prototype.insertAfter = function(Ele, EleChild){
    var child = this.children
    var childlen = child.length
    if(childlen > 0){
        for(var i = 0; i < childlen; i++){
            if(child[i].nodeName == EleChild.nodeName){
                if(i === childlen-1){
                    this.appendChild(Ele)
                }else{
                    this.insertBefore(Ele,child[i+1])
                }
                return Ele
            }
        }
    }
    console.error("Uncaught DOMException: Failed to execute 'insertAfter' on 'Node': The node before which the new node is to be inserted is not a child of this node.\n\tat <anonymous>:1:5")
}

getObjectURL(file) {
      let url = null;
      if (window.createObjectURL != undefined) {
        // basic
        url = window.createObjectURL(file);
      } else if (window.URL != undefined) {
        // mozilla(firefox)
        url = window.URL.createObjectURL(file);
      } else if (window.webkitURL != undefined) {
        // webkit or chrome
        url = window.webkitURL.createObjectURL(file);
      }
      return url;
    }

getBase64URL(file){
    let reader = new FileReader()
    reader.onload = function(e){
        // 把文件转换成 base64
        return e.target.result
    }
    reader.readAsDataURL(file)
}

uploadfile(file){
            let formdata = new FormData()
            formdata.append('file',file)
            formdata.append('submit',false)
            let config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            this.$axios.post('/api/files/upload', formdata, config)
                .then(res => {
                    console.log(res.data)
                })
        }
