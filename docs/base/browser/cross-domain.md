# 浏览器的跨域
跨域：当浏览器的打开页面的“协议”、“域名”、“端口号”任一个不同时，即为跨域。

### 常用的跨域方法
#### jsonp
script 标签的 src 属性不会被同源策略所约束。参数只能通过 url 传入，仅支持 get 请求。  
实现步骤：
1. 创建 callback 方法
2. 插入 script 标签
3. 后台接受到请求，解析前端传过去的 callback 方法，返回该方法的调用，并且数据作为参数传入该方法。
4. 前端执行服务端返回的方法调用

#### CORS

#### nginx 反向代理

#### websocket

#### postMessage

#### node中间件

#### 其他方法
+ window.name + iframe
+ location.hash + iframe
+ document.domain

<!-- 2019.08.16 创建 -->
