# mask 遮罩
http://www.zhangxinxu.com/wordpress/2017/11/css-css3-mask-masks/
```css
.mask {
  -webkit-mask: url(../image/hot.png)  center center no-repeat;
	-webkit-mask-size: 100% 100%;/* 同 background-size 不能写入缩写 */
}
.mask1 {
	-webkit-mask: linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0)); /* 渐变作为遮罩图片 mask-image */
}
```
+ mask-image：遮罩使用的图片资源，默认值是 none，```webkit-mask-image: url();```
+ mask-repeat
	- repeat-x：水平 x 平铺
	- repeat-y：垂直 y 平铺
	- repeat：默认，水平和垂直平铺
	- no-repeat：不平铺
	- space：同 background 等属性中的 space，表示遮罩图片尽可能的平铺同时不发生任何剪裁
	- round：表示遮罩图片尽可能靠在一起没有任何间隙，同时不发生任何剪裁。这就意味着图片可能会有比例的缩放
+ mask-position：和 background-position 支持的属性值和表现基本上一样。Chrome 和 Firefox 浏览器都支持 mask-position 属性，Chrome 需要 -webkit- 前缀，Firefox 浏览器不需要
+ mask-clip：对于普通元素而言，生效的其实就前面3个，Firefox 浏览器还支持 no-clip
  - content-box
	- padding-box
	- border-box
	- fill-box
	- stroke-box
	- view-box
	- no-clip
+ mask-origin：对于普通元素而言，目前生效的其实就前面 3 个
  - content-box
	- padding-box;
	- border-box;
	- fill-box;
	- stroke-box;
	- view-box;
+ mask-size：属性性质上和```background-size```类似，支持的属性值也类似，作用是控制遮罩图片尺寸
  - auto
  - cover
	- contain		