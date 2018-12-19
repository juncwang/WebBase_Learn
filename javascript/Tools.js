// 深度拷贝 - deepClone(origin, target)
// 判断类型 - type(target)
// 数组去重 - Array.prototype.unique() - 把方法直接放入到 Array 的方法
// 实现在元素下一位加入新元素 - Element.prototype.insertAfter(Ele, eleChild) - 类似于 insertBefore 方法


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
                return true
            }
        }
    }
    return false
}