# CSS 盒模型/Box Model

### display
+ none：此元素不会被显示
+ block：此元素将显示为块级元素，此元素前后会带有换行符
+ inline：默认，此元素会被显示为内联元素，元素前后没有换行符
+ inline-block：行内块元素
+ list-item：此元素会作为列表显示
+ run-in：此元素会根据上下文作为块级元素或内联元素显示
+ table：此元素会作为块级表格来显示（类似 ```<table>```），表格前后带有换行符（从这里开始，除 table 标签一般不怎么使用）
+ inline-table：此元素会作为内联表格来显示（类似```<table>```），表格前后没有换行符
+ table-row-group：此元素会作为一个或多个行的分组来显示（类似```<tbody>```）
+ table-header-group：此元素会作为一个或多个行的分组来显示（类似```<thead>```）
+ table-footer-group：此元素会作为一个或多个行的分组来显示（类似```<tfoot>```）
+ table-row：此元素会作为一个表格行显示（类似```<tr>```）
+ table-column-group：此元素会作为一个或多个列的分组来显示（类似```<colgroup>```）
+ table-column：此元素会作为一个单元格列显示（类似```<col>```）
+ table-cell：此元素会作为一个表格单元格显示（类似```<td>```和```<th>```）
+ table-caption：此元素会作为一个表格标题显示（类似```<caption>```）
+ inherit：规定应该从父元素继承 display 属性的值

### 边框 border
```css
.border {
  border: 10px solid pink;				  /* 简写 */
  border-top: 10px solid red;				/* 上边框 */
  border-bottom: 10px solid yellow;	/* 下边框 */
  border-left: 10px solid green;		/* 左边框 */
  border-right: 10px solid blue;		/* 右边框 */
}
```
+ **border—style**：边框样式  
	- none：无边框
	- solid：实线
	- dotted：点状边框
	- dashed：虚线，不需要和其他样式配合，可以直接显示效果
+ **border-color**：边框颜色，需要和边框样式配合使用
+ **border-width**：边框粗细，需要和边框样式配合使用才能看到效果
+ **border-image-source**：图像的位置，```border-image-source: url(path);```
+ **border-image-slice**：图像边界向内偏移。如果 slice 切割的左右距离之和大于背景图的宽，则上下边框不显示。如果 slice 切割的上下距离之和大于背景图的高，则左右边框不显示
	- number：数字表示图像的像素位图图像）或向量的坐标（如果图像是矢量图像），默认数值的单位是 px，但是不能在数值后面加 px
	- %：百分比图像的大小是相对的，水平偏移图像的宽度，垂直偏移图像的高度
	- fill：保留图像的中间部分
+ **border-image-width**：图像边界的宽度。border-image-width 的4个值指定用于把 border 图像区域分为九个部分。代表上，右，底部，左，两侧向内距离。如果第四个值被省略，它和第二个是相同的。如果也省略了第三个，它和第一个是相同的。如果也省略了第二个，它和第一个是相同的。负值是不允许的
	- number：表示相应的 border-width 的倍数
	- %：边界图像区域的大小，横向偏移的宽度的面积，垂直偏移的高度的面积
	- auto：如果指定，宽度是相应的 image slice 的内在宽度或高度
+ **border-image-outset**：指定边款外部绘制 border-image-area 的量。值为 length|number，包括上下部和左右部分。如果第四个值被省略，它和第二个是相同的。如果也省略了第三个，它和第一个是相同的。如果也省略了第二个，它和第一个是相同的。不允许border-im-outset拥有负值。
+ **border-image-repeat**：设置图像边界是否重复、拉伸、铺满
	- stretch：默认值。拉伸图像来填充区域
	- repeat：平铺（repeated）图像来填充区域
	- round：类似 repeat 值。如果无法完整平铺所有图像，则对图像进行缩放以适应区域
  - space：类似 repeat 值。如果无法完整平铺所有图像，扩展空间会分布在图像周围
	- initial：将此属性设置为默认值
	- inherit：从父元素中继承该属性

### 圆角边框 border-radius
```css
.border-radius0 {
  border-top-left-radius: 10px;     /* 左上角 */
  border-top-right-radius: 20px;    /* 右上角 */
  border-bottom-left-radius: 30px;  /* 左下角 */
  border-bottom-right-radius: 40px; /* 右下角 */
	border-radius: 10px 20px 30px 40px;
}
```