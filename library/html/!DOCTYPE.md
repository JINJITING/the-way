# !DOCTYPE 声明
\<!DOCTYPE> 声明位于文档中的最前面的位置，处于 html 标签之前。  
\<!DOCTYPE> 声明不是一个 HTML 标签；是用来告知 Web 浏览器页面使用了哪种 HTML 版本。  
在 HTML 4.01 中，\<!DOCTYPE> 声明需引用 DTD（文档类型声明），因为 HTML 4.01 是基于 SGML（Standard Generalized Markup Language 标准通用标记语言），DTD 指定了标记语言的规则，确保了浏览器能够正确的渲染内容。  
HTML5 不是基于 SGML,因此不要求引用 DTD。  
给HTML 文档添加 <!DOCTYPE> 声明，确保浏览器能够预先知道文档类型。  
\<!DOCTYPE> 标签没有结束标签。  
\<!DOCTYPE> 声明不区分大小写。  
常见的 DOCTYPE 声明：
+ HTML 5
```html
<!DOCTYPE html>
```
+ HTML 4.01 Strict，这个 DTD 包含所有 HTML 元素和属性，但不包括表象或过时的元素（如 font ）。框架集是不允许的。
```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```
+ HTML 4.01 Transitional，这个 DTD 包含所有 HTML 元素和属性，包括表象或过时的元素（如 font ）。框架集是不允许的。
```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```
+ HTML 4.01 Frameset，这个 DTD 与 HTML 4.01 Transitional 相同，但是允许使用框架集内容。
```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
```

## 兼容模式（怪异模式）
DOCTYPE 不存在或格式不正确会导致文档以兼容模式（怪异模式）呈现。

### 标准模式（严格模式）与兼容模式（怪异模式）各有什么区别?
标准模式的排版和 JS 作模式都是以该浏览器支持的最高标准运行。  
在兼容模式中，页面以宽松的向后兼容的方式显示，模拟老式浏览器的行为以防止站点无法工作。  

1. width、height 不同。
```
// 在严格模式中，width 是内容宽度。  
elementWidth = margin-left + border-left-width + padding-left + width + padding-right + border-right- width +  margin-right
```
```
// 在兼容模式中，width 则是元素的实际宽度（不包括margin）。  
contentWidth = width - (padding-left + padding-right + border-left-width + border-right-width)
```

2. 兼容模式下可设置百分比的高度和行内元素的高宽。
在标准模式下，给 span 等行内元素设置 wdith 和 height 都不会生效，而在兼容模式下，则会生效。
在标准模式下，一个元素的高度是由其包含的内容来决定的，如果父元素没有设置高度，子元素设置一个百分比的高度是无效的。

3. 用“margin:0 auto”设置水平居中在 IE 下会失效。
使用“margin:0 auto”在标准模式下可以使元素水平居中,
但在兼容模式下却会失效（用 text-align 属性解决）
```css
body { text-align: center };
#content{ text-align: left };
```

4. 兼容模式下 table 中的字体属性不能继承上层的设置，“white-space: pre”会失效，设置图片的 padding 会失效