# 闭包（closure）
闭包:指有权访问另一个函数作用域中的变量的函数，创建闭包的常用方法就是在函数中创建另一个函数。  

### 闭包的作用  
+ 私有化变量 
```JavaScript
function baseObj(range=1) {
  var x = 0;
  return {
    count: function() {
      return x+=range;
    }
  }
}
```  
+ 模拟块级作用域  
```JavaScript
(function () {
  for(var i=0; i<3; i++){
    console.log(i)
  }
})()
```  

### 闭包的缺点  
缺点：闭包引用的函数变量一直保存在内存中，过多的变量会导致内存泄漏。 
解决方案：将闭包引用的变量赋值为 null。  