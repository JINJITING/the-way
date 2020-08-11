# Flex 布局
Flexible Box，弹性布局。

### 父级样式
```css
.father {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: 
}
```
+ **flex-direction** 决定项目的主轴和交叉方向
  - row：默认值，主轴为水平方向，起点在左端
  - row-reverse：主轴为水平方向，起点在右端
  - column：主轴为垂直方向，起点在上沿
  - column-reverse：主轴为垂直方向，起点在下沿
+ **flex-wrap** 决定项目是否换行
  - nowrap：默认，不换行
  - wrap：换行，第一行在上方
  - wrap-reverse：换行，第一行在下方
+ **flex-flow** 是 flex-direction 属性和 flex-wrap 属性的简写形式
  - 默认值为row nowrap
+ **justify-content** 决定项目在主轴上的对齐方式
  - flex-start：默认值，左对齐
  - flex-end：右对齐
  - center：居中
  - space-between：两端对齐，项目之间的间隔都相等
  - space-around：每个项目两侧的间隔相等，项目之间的间隔比项目与边框的间隔大一倍
+ **align-items** 定义项目在交叉轴上的对齐方式
  - flex-start：交叉轴的起点对齐
  - flex-end：交叉轴的终点对齐
  - center：交叉轴的中点对齐
  - baseline：项目的第一行文字的基线对齐
  - stretch：默认值，如果项目未设置高度或设为auto，将占满整个容器的高度*/
+ **align-content** 定义项目在多跟轴线上的对齐方式，一根轴线时候不起作用
  - flex-start：与交叉轴的起点对齐
  - flex-end：与交叉轴的终点对齐
  - center：与交叉轴的中点对齐
  - space-between：与交叉轴两端对齐，轴线之间的间隔平均分布
  - space-around：每根轴线两侧的间隔都相等，轴线之间的间隔比轴线与边框的间隔大一倍
  - stretch：默认值，轴线占满整个交叉轴

### 子级样式
```css
.child {
  order: 2;
  flex-grow: 2;
  flex-basis: 50px;
  flex-shrink: 0;
  align-self: auto;
}
```
+ **order** 属性定义项目的排列顺序。数值越小，排列越靠前，默认为 0
+ **flex-grow** 属性定义项目的放大比例，默认为 0，即如果存在剩余空间，也不放大。如果所有项目的 flex-grow 属性都为1，则它们将等分剩余空间；如果一个项目的 flex-grow 属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。  
+ **flex-basis** 定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间，默认值为 auto，即项目的本来大小。
+ **flex-shrink** 定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小。如果所有项目的 flex-shrink 属性都为1，当空间不足时，都将等比例缩小；如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。（**负值对该属性无效**）
+ **flex** 是 flex-grow、flex-shrink、flex-basis 的简写，默认值为```0 1 auto```后两个属性可选。
  ```css
  .flex1 {
    flex: auto; /* === flex: 1 1 auto */
  }
  .flex2 {
    flex: none; /* === flex: 0 0 auto */
  }
  ```
+ **align-self** 允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性。默认值为auto，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch。该属性可能取6个值，除了 auto，其他都与 align-items 属性完全一致。