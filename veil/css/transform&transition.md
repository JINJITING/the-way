# transform 转换和 transition 过渡
## transform 
```css
.transform {
  transform: scale(2, 0.5) rotate(-30deg) skew(30deg, 30deg) translate(-100px, -100px); /* 组合效果的先后顺序决定变换效果以及最后停留的位置 */
	transform-origin: 50% 50%; /* 更改转换元素的位置 */
}
```
### 平移
+ translate(x, y)：平移
+ translateX()：水平方向平移，沿 X 轴方向
+ translateY()：垂直方向平移，沿 Y 轴方向
+ translateZ()：前后平移，沿 Z 轴方向，（3D）

### 缩放
具有相同的缩放中心点和基数，其中心点就是元素的中心位置。缩放基数为 1，如果大于 1，元素放大；0-1，元素缩小
+ scale(x, y)：缩放
+ scaleX()：水平方向缩放，沿 X 轴缩放
+ scaleY()：垂直方向缩放，沿 Y 轴缩放
		
### 倾斜
+ skew(Xdeg, Ydeg)：倾斜
+ skewX()：水平倾斜，沿 X 轴方向 
+ skewY()：垂直倾斜，沿 Y 轴方向
### 旋转
+ rotate(angle)：2D 旋转，在参数中规定角度。设置的值为正数表示顺时针旋转，设置的值为负数，表示逆时针旋转
+ rotate3d(x, y, z, angle)：3D 旋转
+ rotateX(angle)：沿着 X 轴的 3D 旋转
+ rotateY(angle)：沿着 Y 轴的 3D 旋转
+ rotateZ(angle)：沿着 Z 轴的 3D 旋转

## transition 过渡
```css
.transition {
  transition: width 3s 0 linear, height 1s 2s ease-in;/* 属性有冲突不执行 */
  transition: width 5s 2s ease; /* 缩写 */ 
}
```
+ transition-property：代表要改变的 CSS 属性，改变多个属性时中间用逗号隔开或者使用 all；none 表示没有属性需要过渡
+ transition-duration：定义完成过渡过程所需要的时间
+ transition-delay：规定过渡效果何时开始
+ transition-timing-function：规定过渡效果的时间曲线
	- linear：匀速，等于```cubic-bezier(0, 0, 1, 1)```
	- ease：慢 => 快 => 慢，```cubic-bezier(0.25, 0.1, 0.25, 1)```，浏览器默认，最后速度比开始慢
	- ease-in：慢 => 快，等于```cubic-bezier(0.42, 0, 1, 1)```
	- ease-out：快 => 慢，等于```cubic-bezier(0, 0, 0.58, 1)```
	- ease-in-out：慢 => 快 => 慢，等于```cubic-bezier(0.42, 0, 0.58, 1)```，最后速度与开始相同
	- cubic-bezier(n, n, n, n)：贝塞尔曲线，数值 0-1 之间