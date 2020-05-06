# background
```css
.bg {
  width: 100px;
  height: 100px;
  background: url()  no-repeat scroll padding-box border-box aliceblue;
}
```
+ **background-image**：指定对象的背景图像，可以是真实图片路径或使用渐变创建的“背景图像” 
  ```css
  background-image: url();
  ```
+ **background-position**：定义背景图片位置，第一个值是水平位置，第二个值是垂直。
  - left top：默认，如果仅指定一个关键字，其他值将会是"center"
  - ...
	- x% y%：左上角是起点坐标。如果仅指定了一个值，其他值将是50％。 默认值为：0％0％
	- xpos ypos：左上角是0，单位可以是像素（0px0px）或任何其他 CSS 单位。如果仅指定了一个值，其他值将是50％。
+ **background-size**：指定对象的背景图像的尺寸大小，不支持写入background 缩写方式。
  - x% y%：将计算相对于背景定位区域的百分比。第一个值设置宽度，第二个值设置的高度。如果只给出一个值，第二个是设置为“auto”
  - `a`px `y`px：设置背景图片高度和宽度。第一个值设置宽度，第二个值设置的高度。如果只给出一个值，第二个是设置为“atuo”
  - cover：保持图像的纵横比并将图像缩放成将完全覆盖背景定位区域的最小大小
  - contain：保持图像的纵横比并将图像缩放成将适合背景定位区域的最大大小
  - auto：背景图像的真实大小
  - 
+ **background-repeat**：定义背景图片是否重复
	- repeat-x：水平重复
	- repeat-y：垂直重复
	- repeat：背景图像在横向和纵向平铺
	- no-repeat：不会重复
	- round：背景图像自动缩放直到适应且填充满整个容器
	- space：背景图像以相同的间距平铺且填充满整个容器或某个方向
+ **background-attachment**：定义背景图片是否固定
	- scroll：默认，背景图片随页面的其余部分滚动
  - fixed：背景图像是固定的
+ **background-origin**：指定对象的背景图像显示的原点
  - padding-box：默认背景图片 padding 开始算起
  - border-box：背景位置从 border 区域开始算起
  - content-box：背景位置从 content 内容区域开始算起
+ **background-clip**：指定对象的背景图像向外裁剪的区域
  - border-box：默认，从 border 区域（不含 border）开始向外裁剪背景
	- padding-box：从 padding 区域（不含 padding）开始向外裁剪背景
  - content-box：从 content 区域开始向外裁剪背景
	- text：从前景内容的形状，如文字作为裁剪区域向外裁剪，即可实现使用背景作为填充色之类的遮罩效果
+ **background-color**：指定对象的背景颜色, 只能设置一次，且由于写在前面的背景会叠在之后的背景之上，所以背景色通常都定义在最后一组上，避免背景色将图像盖住