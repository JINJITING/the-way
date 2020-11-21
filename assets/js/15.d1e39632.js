(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{370:function(s,t,e){"use strict";e.r(t);var a=e(42),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"restful-规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#restful-规范"}},[s._v("#")]),s._v(" RESTful 规范")]),s._v(" "),e("p",[s._v("REST（Representational State Transfer），即表现层状态转移，RESTful 表示满足这些条件和原则的程序或应用。"),e("br"),s._v("\nREST 设计一般符合以下条件：")]),s._v(" "),e("ul",[e("li",[s._v("程序或应用的事物都应该被抽象为资源。")]),s._v(" "),e("li",[s._v("每个资源对应唯一的 URI。")]),s._v(" "),e("li",[s._v("使用统一的接口对资源进行操作。")]),s._v(" "),e("li",[s._v("对资源的各种操作不会改变资源标识。")]),s._v(" "),e("li",[s._v("所有操作都是无状态的。")])]),s._v(" "),e("p",[s._v("对于一般的增删改查操作，在非 RESTful 架构中，设计如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("https://testapi.com/addUser    //POST 方法，请求发送新增用户信息\nhttps://testapi.com/delUser    //POST 方法，请求发送用户的 ID\nhttps://testapi.com/updateUser //POST 方法，请求发送用户 ID 和修改信息\nhttps://testapi.com/getUser    //GET 方法，请求发送用户 ID\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("基于 RESTful 架构的设计，只提供唯一的 URI：https://testapi.com/user，设计如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("https://testapi.com/user       //POST 方法，请求发送新增用户信息，增\nhttps://testapi.com/user/:id   //DELETE 方法，用户 ID 是 URI 的一部分，删\nhttps://testapi.com/user/:id   //PUT 方法，请求发送用户信息，用户 ID 是 URI 的一部分，改\nhttps://testapi.com/user/:id   //GET 方法，用户 ID 是 URI 的一部分，查\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);