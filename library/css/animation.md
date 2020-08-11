# 动画 animation

## 动画属性
+ **animation-name**：为动画指定一个名称
+ **animation-duration**：定义动画完成一个周期需要的时间
+ **animation-delay**：设置动画在启动前的延迟时间
+ **animation-iteration-count**：定义动画的播放次数
  - infinite：无限次
+ **animation-timing-function**：定义动画速度
  - linear：动画从头到尾的速度是相同的
	- ease：默认，动画以低速开始，然后加快，在结束前变慢
	- ease-in：动画以低速开始
	- ease-out：动画以低速结束
	- ease-in-out：动画以低速开始和结束
	- cubic-bezier(n,n,n,n)：在 cubic-bezier 函数中自己的值，可能的值是0-1的数值
+ **animation-direction**：指定是否应该轮流反向播放动画
  - normal：默认值,动画按正常播放，from => to
	- reverse：动画反向播放，to => from
	- alternate：动画在奇数次正向播放，在偶数次反向播放（即先执行一遍动画，再反向执行）
	- alternate-reverse：动画在奇数次反向播放，在偶数次正向播放
	- initial：设置该属性为它的默认值（还原默认值）
	- inherit：从父元素继承
+ **animation-fill-mode**：规定当动画不播放时（1-当动画完成时，2-当动画有一个延迟未开始播放时），要应用到元素的样式；条件2需要探究延迟的指代：加载延迟?执行延迟?
	- none：默认值，动画在动画执行之前和之后不会应用任何样式到目标元素
	- forwards：动画结束后（由 animation-iteration-count 决定）动画将应用该属性值（在结束位置停留）
	- backwards：动画将应用在 animation-delay 定义期间启动动画的第一次迭代的关键帧中定义的属性值。这些都是 from 关键帧中的值（当 animation-direction 为```normal```或```alternate```时）或 to 关键帧中的值（当animation-direction 为```reverse```或```alternate-reverse```时）（在起始位置停留）
	- both：动画遵循 forwards 和 backwards 的规则。即动画会在两个方向上扩展动画属性
	- initial：设置该属性为它的默认值
	- inherit：从父元素继承该属性
+ **animation-play-state**：指定暂停动画
  - paused
+ **animation-play-state**：指定正在运行的动画
  - running

### 兼容性
+ -webkit-animation
+ -moz-animation
+	-o-animation


## 定义动画
```css
@keyframes animate1 {
	from {
		transform: translate(0px, 0px);
	}
	to {
		transform: translate(200px, 200px);
	}
}
@keyframes animate2 {
	0% {
	  transform: translate(0px, 0px);
	}
	25% {
		transform: translate(400px, 0px);
	}
	50% {
		transform: translate(400px, 400px);
	}
	75% {
		transform: translate(0px, 400px);
	}
	100% {
		transform: translate(0px, 0px);
	}
}
```