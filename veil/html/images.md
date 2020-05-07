# 图像标签

## img 标签：定义图像
img 是空标签（只包含属性，没有闭合标签）。  
被引用的图像并不会插入到页面中，而是链接到页面上。img 标签的作用是为被引用的图像创建占位符。  
```html
<img width="" height="" title="" src="" alt="">
```
属性：
+ alt（必须）
+ crossorigin(H5)：设置图像的跨域属性
+ height
+ ismap：将图像规定为服务器端图像映射（图像映射指的是带有可点击区域的图像）
+ src
+ usemap：将图像定义为客户器端图像映射
+ width

### alt
alt 文本的使用原则：
1. 如果图像包含信息，使用 alt 描述图像
2. 如果图像在 a 元素中，使用 alt 描述目标链接
3. 如果图像仅供装饰，使用 alt=""

### ismap
当 img 元素属于带有有效 href 属性的 a 元素后代时，才能使用 ismap 属性。  
ismap 是一个布尔属性。
当点击一个服务器端图像映射时，点击坐标会以 URL 查询字符串端形式发送到服务器。  
```html
<img ismap>
```

### usemap
只有当 img 元素不属于 a 或 button 元素的后代时，才允许使用 usemap 属性。  
usemap 属性与 map 元素的 name 或 id 属性相关联，以建立 img 与 map 之间的关系。
```html
<img usemap="#mapname">
<!-- #mapname：一个 hash 字符 ("#") 加上要使用的 <map> 元素的 name 或 id。 -->
```

## map 标签：定义图像地图
img 中的 usemap 属性可引用 map 中的 id 或 name 属性（取决于浏览器），所以我们应同时向 map 添加 id 和 name 属性。  
area 元素永远嵌套在 map 元素内部。area 元素可定义图像映射中的区域。
```html
<map name="" id="">
  <area>
</map>
```
## area 标签：定义图像地图中的可点击区域
area 元素始终嵌套在 map 标签内部。  
属性：
+ alt
+ coords：规定区域的坐标
+ href
+ hreflang(H5)：规定目标 URL 的语言
+ media(H5)：规定目标 URL 是为何种媒介/设备优化的。默认：all
+ rel(H5)：规定当前文档与目标 URL 之间的关系
+ shape：规定区域的形状
+ target
+ type(H5)：规定目标 URL 的 MIME（Multipurpose Internet Mail Extensions） 类型

### rel
+ alternate：文档的替代版本（比如打印页、翻译或镜像）
+ author：链接到文档的作者
+ bookmark：用于书签的永久网址
+ help：链接到帮助文档
+ license：链接到文档的版权信息
+ next：选项中的下一个文档
+ nofollow：nofollow 是一个HTML标签的属性值。这个标签的意义是告诉搜索引擎"不要追踪此网页上的链接"或"不要追踪此特定链接
+ noreferrer：如果用户点击链接指定浏览不要发送 HTTP referer 头部信息
+ prefetch：指定的目标文件应该被缓存
+ prev：选项中的前一个文档
+ search：文档链接到搜索工具
+ tag：当前文档的标签（关键词）