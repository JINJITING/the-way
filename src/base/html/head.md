# head 元素
\<head> 元素是所有头部元素的容器。  
以下元素能被用在 \<head> 元素内部：
+ \<base>
+ \<link>
+ \<meta>
+ \<title>（必须）
+ \<style>
+ \<script>
+ \<noscript>

## base 元素
规定页面上所有链接的默认 URL 和默认目标。  
页面最多能使用一个 \<base> 元素。\<base> 标签必须位于 \<head> 元素内部，最好为第一个，这样 head 区域中其他元素就可以使用 \<base> 元素。如果使用了 \<base> 标签，href 属性和 target 属性至少需要一个。
```html
<head>
  <base href="" target="">
</head>
```

## link 元素
link 定义文档与外部资源的关系。  
属性：
+ rel
+ href
+ hreflang
+ media：规定被链接文档显示在什么设备上。
+ sizes：规定图标的尺寸，对 rel="icon" 才有用。可以是一个具体的宽高值：16x16，也可以是 any（任何尺寸）
```html
<head>
  <link rel="icon" sizes="16x16">
  <link rel="stylesheet" href="">
</head>
```

### link 的 rel 属性
rel 必需，定义当前文档与链接文档之间的关系，rel的值：
+ alternate：链接到该文档的替代版本
+ author：链接到文档作者
+ help：链接到帮助文档
+ icon：导入表示该文档的图标
+ license：链接到该文档的版权信息
+ next：表示该文档是集合的一部分，且集合的下一个文档是被引用的文档
+ prefetch：规定应该对目标资源进行缓存
+ prev：表示该文档是集合的一部分，且集合的上一个文档是被引用的文档
+ search：链接到针对文档的搜索工具
+ stylesheet：要导入样式表的URL

## meta 元素
meta 描述了一些基本的元数据（Metadata，是数据的数据信息）。元数据可以被使用浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他 Web 服务调用。  
meta 必须包含在 \<head> 元素中并且在 HTML 代码的前1024个字节内，因为某些浏览器在选择编码之前只查看前面这些字节。

meta 属性：
+ charset(H5)：定义文档的字符编码。charset 属性可以通过任意元素上的 lang 属性来重写。常用的值有：UTF-8 - Unicode 字符编码，ISO-8859-1 - 拉丁字母表的字符编码。
+ content：定义与 http-equiv 或 name 属性相关的元信息。
+ http-equiv：把 content 属性关联到 HTTP 头部。
+ name：把 content 属性关联到一个名称。

### http-equiv 属性
http-equiv 属性值：
+ content-language(out)：指令定义页面使用的默认语言。（请用 \<html> 元素上全局的 lang 属性来替代）
+ content-security-policy：内容安全策略。
+ content-type(out)：规定文档的字符编码。（请用 \<meta> 元素的 charset 属性代替）
+ default-style：规定要使用的预定义的样式表。content 属性必须包含 \<link> 元素的标题, href 属性链接到 CSS 样式表或包含 CSS 样式表的 \<style> 元素的标题。
+ refresh：定义文档自动刷新的时间间隔，会使页面不受用户控制。
```html
<!-- 如果 content 只包含一个正整数,则是重新载入页面的时间间隔(秒); -->
<meta http-equiv="refresh" content="30">
<!-- 如果 content 包含一个正整数并且跟着一个字符串,则是重定向到指定链接的时间间隔（秒） -->
<meta http-equiv="refresh" content="30;URL=https://github.com/JINJITING">
```
+ set-cookie(out)：为页面定义cookie。（请改用HTTP的Set-Cookie头部）

### meta 的 name 属性
name 属性值：

## title 元素
定义文档的标题。title 的内容可以方便搜索引擎索引页面。只能有一个 \<title> 元素
+ 定义浏览器工具栏中的标题
+ 提供页面被添加到收藏夹时的标题
+ 显示在搜索引擎结果中的页面标题

## style 元素
定义 HTML 文档的样式信息。每个 HTML 文档能包含多个 \<style> 元素。属性：
+ media：为样式表规定不同的媒体类型。
+ scoped(H5)：如果使用该属性，则样式仅仅应用到 style 元素的父元素及其子元素。
+ type：text/css，规定样式表的 MIME 类型。

### style 的 media
media 属性规定目前资源是为何种媒介/设备优化的。该属性大多用在为不同媒介类型规定不同样式的 CSS 样式表。  
#### 运算符类型

| 运算符 | 描述 |
|:-----:|:----|
| and   | AND 操作符 |
| not   | NOT 操作符 |
| ,     | OR 操作符  |

#### 设备类型
+ all：默认。适应所有设备。
+ aural：语音合成器。
+ braille：盲人用点字法反馈设备。
+ handheld：手持设备（小屏幕、有限的带宽）。
+ projection：放映机。
+ print：打印预览模式/打印页。
+ screen：计算机屏幕（默认值）。
+ tty：电传打字机以及使用等宽字符网格的类似媒介。
+ tv：电视类型设备（低分辨率、有限的屏幕翻滚能力）。

#### 具体的值
+ width：规定目标显示区域的宽度。可使用 "min-" 和 "max-" 前缀。
```html
<style media="screen and (min-width:500px)">
```
+ height：规定目标显示区域的高度。可使用 "min-" 和 "max-" 前缀。
```html
<style media="screen and (max-height:700px)">
```
+ device-width：规定目标显示器/纸张的宽度。可使用 "min-" 和 "max-" 前缀。
```html
<style media="screen and (device-width:500px)">
```
+ device-height：规定目标显示器/纸张的高度。可使用 "min-" 和 "max-" 前缀。
```html
<style media="screen and (device-height:500px)">
```
+ orientation：规定目标显示器/纸张的方向。可能的值："portrait" or "landscape"
```html
<style media="all and (orientation: landscape)">
```
+ aspect-ratio：规定目标显示区域的宽度/高度比。可使用 "min-" 和 "max-" 前缀。
```html
<style media="screen and (aspect-ratio:16/9)">
```
+ device-aspect-ratio：规定目标显示器/纸张的 device-width/device-height 比率。可使用 "min-" 和 "max-" 前缀。
```html
<style media="screen and (aspect-ratio:4/3)">
```
+ color：规定目标显示器的 bits/color，可使用 "min-" 和 "max-" 前缀。
```html
<style media="screen and (color:3)">
```
+ color-index：规定目标显示器可以处理的颜色数。可使用 "min-" 和 "max-" 前缀。
```html
<style media="screen and (min-color-index:256)">
```
+ monochrome：规定单色帧缓冲中的 bits/pixel。可使用 "min-" 和 "max-" 前缀。
```html
<style media="screen and (monochrome:2)">
```
+ resolution：规定目标显示器/纸张的像素密度 (dpi 或 dpcm)。可使用 "min-" 和 "max-" 前缀。
```html
<style media="print and (resolution:300dpi)">
```
+ scan：规定 tv 显示器的扫描方式。可能的值："progressive" 和 "interlace"。
```html
<style media="tv and (scan:interlace)">
```
+ grid：规定输出设备是否是网格或位图。可能的值："1" 为网格，否则为 "0"。
```html
<style media="handheld and (grid:1)">
```

## script 元素
用于定义客户端脚本，比如 JavaScript。既可包含脚本语句，也可以通过 "src" 属性指向外部脚本文件（如果使用 src 属性，则 script 元素必须是空的）。  
属性：
+ async(H5)：规定异步执行脚本（仅适用于外部脚本）。
+ charset：规定在脚本中使用的字符编码（仅适用于外部脚本）。
+ defer：规定当页面已完成解析后，执行脚本（仅适用于外部脚本）。
+ src：规定外部脚本的 URL。
+ type：规定脚本的 MIME 类型。

### js 脚本的执行方法
+ 如果 async="async"：脚本相对于页面的其余部分异步地执行（当页面继续进行解析时，脚本将被执行）
+ 如果不使用 async 且 defer="defer"：脚本将在页面完成解析时执行
+ 如果既不使用 async 也不使用 defer：在浏览器继续解析页面之前，立即读取并执行脚本

### script 的 type 属性
常用的值：
+ text/javascript （默认）
+ text/ecmascript
+ application/ecmascript
+ application/javascript
+ text/vbscript

## noscript 元素
用来定义在脚本未被执行时的替代内容（文本）。如果浏览器支持脚本，那么它不会显示出 noscript 元素中的文本。  
```html
<script>
  console.log('支持 script');
</script>
<noscript>不支持 JavaScript</noscript>
```
当浏览器不识别 script 时，会把标签的内容显示到页面上，应当在注释标签中隐藏脚本。
```html
<script>
<!--
alert("Hello World!")
//-->
</script> 
```