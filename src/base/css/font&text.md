# 字体 font 和文本 text
## 字体
+ font-family：设置字体。应该设置几个字体名称作为一种“后备”机制，如果浏览器不支持第一种字体，将尝试下一种字体。如果字体系列的名称超过一个字，必须用引号，如font-family："宋体"，多个字体系列是用一个逗号分隔指明。
+ font-size：字体大小。浏览器默认的字体大小为```16px=1em```,浏览器一般支持的最小字体为 12px
+ color：字体颜色
+ font-style：字体样式。italic 是手写的斜体，oblique 是电脑做的仿斜体，在 windows 里可以区分，对于汉字不易区分。常用 italic，不支持时会自动套用 oblique
  - normal：正常
  - italic：斜体
  - oblique：倾斜的文字，文字向一边倾斜
+ font-weight：设置字体的粗细
	- normal：正常
  - bold：定义粗体
  - bolder：定义更粗的字体，比粗体更加粗 
  - lighter：定义更细的字体，比正常字体淡
	- 100 - Thin
	- 200 - Extra Light (Ultra Light)
	- 300 - Light
	- 400 - Regular (Normal、Book、Roman)
	- 500 - Medium	
	- 600 - Semi Bold (Demi Bold)
	- 700 - Bold
	- 800 - Extra Bold (Ultra Bold)
	- 900 - Black (Heavy)

  ### 自定义字体
  ```css
  @font-face{
		font-family: myfont1; /* 设置字体库字体的名称 */
		src:url(); /* 引入字体库文件 */
	}
  ```

  ## 文本
  # text 文本
+ text-align：文本的水平对齐方式
+ text-indent：文本缩进
+ text-decoration：文本修饰
+ line-height：行高
+ text-shadow：文本阴影，四个值：```h v blur color```
 	- h-shadow：必需，水平阴影的位置。允许负值
	- v-shadow：必需，垂直阴影的位置。允许负值
	- blur：可选。模糊的距离
	- color：可选。阴影的颜色
+ text-stroke：文字描边效果。须添加浏览器前缀```-webkit-```
  - text-stroke-width：描边宽度
	- text-stroke-color：描边颜色
+ direction：文本方向 ltr 左到右，rtl 右到左