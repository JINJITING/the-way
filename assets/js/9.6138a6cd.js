(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{364:function(t,_,v){"use strict";v.r(_);var r=v(42),a=Object(r.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"从输入-url-到页面展示-浏览器的工作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#从输入-url-到页面展示-浏览器的工作"}},[t._v("#")]),t._v(" 从输入 URL 到页面展示，浏览器的工作")]),t._v(" "),v("h2",{attrs:{id:"导航流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#导航流程"}},[t._v("#")]),t._v(" 导航流程")]),t._v(" "),v("h3",{attrs:{id:"_1-解析输入内容"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-解析输入内容"}},[t._v("#")]),t._v(" 1. 解析输入内容")]),t._v(" "),v("p",[t._v("根据用户输入的内容，地址栏判断是"),v("strong",[t._v("搜索内容")]),t._v("，还是"),v("strong",[t._v("请求 URL")]),t._v("。")]),t._v(" "),v("ul",[v("li",[t._v("如果判断是搜索内容，地址栏使用默认的搜索引擎，合成新的带搜索关键字的 URL。")]),t._v(" "),v("li",[t._v("如果判断内容符合 URL 规则，会根据规则，加上协议，合成完整的 URL。")])]),t._v(" "),v("h3",{attrs:{id:"_2-url-请求过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-url-请求过程"}},[t._v("#")]),t._v(" 2. URL 请求过程")]),t._v(" "),v("p",[t._v("浏览器进程通过进程间通信（IPC）把 URL 请求发送至网络进程。\n网络进程发起 URL 请求流程：")]),t._v(" "),v("ol",[v("li",[v("strong",[t._v("网络进程查找本地缓存是否缓存了资源")]),t._v("。如果有缓存资源，则直接将资源返回给浏览器进程；如果没有找到资源，进入网络请求流程。进行 DNS 解析，获取 IP 地址。（如果是 HTTPS，还需要建立 TLS 连接）")]),t._v(" "),v("li",[v("strong",[t._v("根据 IP 地址和服务器建立 TCP 连接")]),t._v("。连接建立后，浏览器构建并发送请求信息。（服务器收到请求后，根据请求信息生成响应数据，返回给网络进程）")]),t._v(" "),v("li",[t._v("接收到服务器返回的响应数据后，网络进程开始解析数据。\n"),v("ol",[v("li",[v("strong",[t._v("状态码解析")]),t._v("。如果返回状态码是301或者302（服务器需要浏览器重定向到其他 URL），网络进程会从响应数据的 Location 字段读取重定向地址，重新进行 URL 请求过程；如果状态码是200，则继续处理响应数据。")]),t._v(" "),v("li",[v("strong",[t._v("响应数据类型处理")]),t._v("。根据 Content-type 字段，判断响应体数据的类型。如果是下载类型，将该请求提交给浏览器的下载管理器，结束导航流程；如果是 HTML，则继续进行导航流程。")])])])]),t._v(" "),v("h3",{attrs:{id:"_3-准备渲染进程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-准备渲染进程"}},[t._v("#")]),t._v(" 3. 准备渲染进程")]),t._v(" "),v("p",[t._v("根据渲染进程策略，准备渲染进程。\n渲染进程策略：")]),t._v(" "),v("ul",[v("li",[t._v("通常打开新页面会使用单独的渲染进程。")]),t._v(" "),v("li",[t._v("如果从 A 页面打开 B 页面，且 A 和 B 都属于同一站点（具有相同的协议和根域名），复用渲染进程；其他情况，则创建新的渲染进程。")])]),t._v(" "),v("h3",{attrs:{id:"_4-提交文档"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-提交文档"}},[t._v("#")]),t._v(" 4. 提交文档")]),t._v(" "),v("ul",[v("li",[t._v("浏览器进程发出“提交文档”（文档指服务器返回的响应体数据），渲染进程收到消息后，和网络进程建立传输数据的通道。")]),t._v(" "),v("li",[t._v("等数据传输完后，渲染进程回复消息给浏览器进程。")]),t._v(" "),v("li",[t._v("浏览器进程收到渲染进程的回复消息后，更新浏览器界面状态。包括安装状态、地址栏的 URL、前进后退的历史状态，并更新 Web 页面。")])]),t._v(" "),v("h2",{attrs:{id:"渲染流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#渲染流程"}},[t._v("#")]),t._v(" 渲染流程")]),t._v(" "),v("h3",{attrs:{id:"_5-渲染阶段"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-渲染阶段"}},[t._v("#")]),t._v(" 5. 渲染阶段")]),t._v(" "),v("ol",[v("li",[v("strong",[t._v("构建 DOM 树")]),t._v("。将 HTML 解析为浏览器可以理解的 DOM。")]),t._v(" "),v("li",[v("strong",[t._v("样式计算")]),t._v("。根据 CSS 样式表，计算 DOM 树所有节点的样式。\n"),v("ol",[v("li",[t._v("把 CSS 转换成浏览器能理解的 styleSheets")]),t._v(" "),v("li",[t._v("转换样式表中的属性值，使其标准化。")]),t._v(" "),v("li",[t._v("计算出 DOM 树中每个节点的具体样式。CSS 继承和 CSS 层叠。")])])]),t._v(" "),v("li",[v("strong",[t._v("布局（layout）")]),t._v("。\n创建布局树（渲染树）并计算元素的布局信息。构建一棵只包含可见元素布局树，计算元素的几何坐标位置，保存在布局树（LayoutTree）中。"),v("br"),t._v("\n（reflow 从这一步开始）")]),t._v(" "),v("li",[v("strong",[t._v("绘制（paint）")]),t._v("。\n对布局树分层，生成分层树。渲染引擎为特异的节点生成专用的图层（Layer）。拥有层叠上下文属性的元素会被提升为单独的一层，需要裁剪（clip）的地方会被创建为图层。"),v("br"),t._v("\n为每个图层生成绘制列表，并将其提交给合成线程（在渲染进程中）。\n（repaint 从这一步开始）")]),t._v(" "),v("li",[v("strong",[t._v("合成（composite）")]),t._v("。\n合成线程将图层分成图块（tile），并在栅格化（raster）线程池中将图块转换成位图（栅格化即将图块转换为位图）。\n栅格化过程会使用 GPU 加速生成（使用 GPU 进程），生成的位图被保存在 GPU 内存中。\n（trasform 在这一步）\n当所有的栅格化操作完成，合成线程发送命令（DrawQuard）给浏览器进程，浏览器进程根据消息生成页面并显示。")])])])}),[],!1,null,null,null);_.default=a.exports}}]);