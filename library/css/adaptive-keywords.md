# CSS3 自适应的4个关键字

## fill-available
```css
.fill-available {
  width: fill-available;
  width: -webkit-fill-available;/* Chrome */
  width: -moz-available;/*Firefox*/
}
```
fill-available 表示撑满可用空间，**最大的 fill-available 值为父级元素的 content-box 的宽/高**。  
fill-available 的宽度受子级和内部文本的最大长度影响。当内部文本不换行（英文和数字文本默认的方式）时，元素会随文本变宽直到最大的长度。  
**当父级无高度时，即使 height 设置为 fill-available，也无法撑起高度**。所以用 fill-available 来实现等高布局不如用百分比——“height:100%;”简单明了。  

## fit-content
```css
.fit-content {
  width: fit-content;
  width: -webkit-fit-content;/* Chrome */
  width: -moz-fit-content;/* Firefox */
}
```
fit-content 表示宽度收缩为内容宽度。**最大的 fit-content 值由子级或内部不换行文本的宽度决定**。如果内部是换行文本，最大的宽度是可用的剩余宽度。  
fit-content 用于 block 元素时，可以通过“margin:auto”实现居中。而 inline-block 元素想要实现居中还要父级设置为“text-align:center”。  

## max-content
```css
.max-content {
  width: max-content;
}
```
max-content 由最宽子元素决定，如果有文本则文本不换行。（flex 布局下，文本依然会换行）  

## min-content
```css
.min-content {
  width: min-content;
}
```
min-content 以最小宽度值最大的子元素的宽度作为宽度，即不换行的宽度。  

## 总结
+ 4个关键字都受子级或内部文本宽度的影响，但 fill-available 由父级宽度的决定。  
+ fit-content、max-content、min-content 用于 block 元素时，都可轻易实现居中。（本质是 block 元素）  
+ fit-content 与 max-content 的区别：max-content 会使文本不换行（非 flex）  