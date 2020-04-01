# 超链接 a

\<a> 定义超链接，用于从一个页面链接到另一个页面。  
属性：  
+ download(H5)：指定下载链接。
+ href：规定链接的目标 URL。
+ hreflang：规定目标 URL 的基准语言。
+ media(H5)：规定目标 URL 的媒介类型。
+ rel：规定当前文档与目标 URL 之间的关系。
+ target
+ type(H5)：规定目标 URL 的 MIME 类型。

### href
如果没有使用 href ，a 不是一个链接，不能使用 hreflang、media、rel、target 以及 type 属性。

### target
+ _blank：在新窗口中打开被链接文档。
+ _self：默认。在相同的框架中打开被链接文档。
+ _parent：在父框架中打开被链接文档。
+ _top：在整个窗口中打开被链接文档。
+ framename：在指定的框架中打开被链接文档。
