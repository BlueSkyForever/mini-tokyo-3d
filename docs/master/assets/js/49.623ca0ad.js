(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{337:function(e,t,r){"use strict";r.r(t);var a=r(14),o=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"threelayerinterface"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#threelayerinterface"}},[e._v("#")]),e._v(" ThreeLayerInterface")]),e._v(" "),t("p",[e._v("カスタム three.js レイヤーのインターフェースです。これは実装者がモデル化するための仕様であり、エクスポートされたメソッドやクラスではありません。")]),e._v(" "),t("p",[e._v("カスタム three.js レイヤーには、"),t("a",{attrs:{href:"https://threejs.org/docs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("three.js"),t("OutboundLink")],1),e._v(" のシーンが含まれています。開発者は、マップのカメラを使って、three.js オブジェクトをマップの GL コンテキストに直接レンダリングすることができます。このレイヤーは "),t("RouterLink",{attrs:{to:"/ja/developer-guide/api/map.html#addlayer-layer"}},[e._v("Map#addLayer")]),e._v(" を使ってマップに追加できます。")],1),e._v(" "),t("p",[e._v("カスタムの three.js レイヤーは、一意の "),t("code",[e._v("id")]),e._v(" を持ち、"),t("code",[e._v("type")]),e._v(" が "),t("code",[e._v("'three'")]),e._v(" である必要があります。また、"),t("code",[e._v("onAdd")]),e._v("と"),t("code",[e._v("onRemove")]),e._v(" を実装することができます。")]),e._v(" "),t("h2",{attrs:{id:"プロパティ"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#プロパティ"}},[e._v("#")]),e._v(" プロパティ")]),e._v(" "),t("h3",{attrs:{id:"id-string"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#id-string"}},[e._v("#")]),e._v(" "),t("strong",[t("code",[e._v("id")])]),e._v(" ("),t("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("string")]),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("p",[e._v("固有のレイヤー ID です。")]),e._v(" "),t("h3",{attrs:{id:"lightcolor-number-color-string"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lightcolor-number-color-string"}},[e._v("#")]),e._v(" "),t("strong",[t("code",[e._v("lightColor")])]),e._v(" ("),t("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("number")]),t("OutboundLink")],1),e._v(" | "),t("a",{attrs:{href:"https://threejs.org/docs/#api/en/math/Color",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("Color")]),t("OutboundLink")],1),e._v(" | "),t("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("string")]),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("p",[e._v("ライトの色です。16進数のカラー、three.js の "),t("a",{attrs:{href:"https://threejs.org/docs/#api/en/math/Color",target:"_blank",rel:"noopener noreferrer"}},[e._v("Color"),t("OutboundLink")],1),e._v(" インスタンス、または CSS 形式の文字列を指定できます。指定しない場合は、現在の日時に基づいた動的なライトの色が使用されます。")]),e._v(" "),t("h3",{attrs:{id:"maxzoom-number"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#maxzoom-number"}},[e._v("#")]),e._v(" "),t("strong",[t("code",[e._v("maxzoom")])]),e._v(" ("),t("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("number")]),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("p",[e._v("レイヤーの最大ズームレベルです。maxzoom 以上のズームレベルでは、レイヤーは非表示になります。値は "),t("code",[e._v("0")]),e._v(" から "),t("code",[e._v("24")]),e._v("（これを含む）までの任意の数値です。maxzoom が指定されていない場合は、レイヤーはすべてのズームレベルで表示されます。")]),e._v(" "),t("h3",{attrs:{id:"minzoom-number"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#minzoom-number"}},[e._v("#")]),e._v(" "),t("strong",[t("code",[e._v("minzoom")])]),e._v(" ("),t("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("number")]),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("p",[e._v("レイヤーの最小のズームレベルです。minzoom 未満のズームレベルでは、レイヤーは非表示になります。値は "),t("code",[e._v("0")]),e._v(" から "),t("code",[e._v("24")]),e._v("（これを含む）の間の任意の数値です。minzoom が指定されていない場合は、レイヤーはすべてのズームレベルで表示されます。")]),e._v(" "),t("h3",{attrs:{id:"type-string"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#type-string"}},[e._v("#")]),e._v(" "),t("strong",[t("code",[e._v("type")])]),e._v(" ("),t("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("string")]),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("p",[e._v("レイヤーのタイプです。必ず "),t("code",[e._v("'three'")]),e._v(" と指定してください。")]),e._v(" "),t("h2",{attrs:{id:"インスタンスメンバ"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#インスタンスメンバ"}},[e._v("#")]),e._v(" インスタンスメンバ")]),e._v(" "),t("h3",{attrs:{id:"onadd-map-context"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#onadd-map-context"}},[e._v("#")]),e._v(" "),t("strong",[t("code",[e._v("onAdd(map, context)")])])]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/ja/developer-guide/api/map.html#addlayer-layer"}},[e._v("Map#addLayer")]),e._v(" でレイヤーが Map に追加された際に呼び出される、任意実装のメソッドです。これを利用して、レイヤーは three.js のリソースを初期化し、イベントリスナーを登録することができます。")],1),e._v(" "),t("h4",{attrs:{id:"パラメータ"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#パラメータ"}},[e._v("#")]),e._v(" パラメータ")]),e._v(" "),t("p",[t("strong",[t("code",[e._v("map")])]),e._v(" ("),t("RouterLink",{attrs:{to:"/ja/developer-guide/api/map.html"}},[t("code",[e._v("Map")])]),e._v(") このレイヤーが追加された Mini Tokyo 3D の Map")],1),e._v(" "),t("p",[t("strong",[t("code",[e._v("context")])]),e._v(" ("),t("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("Object")]),t("OutboundLink")],1),e._v(") このレイヤーに含まれる three.js のレンダラー、シーン、カメラオブジェクトです。")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[e._v("名前")]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("説明")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("strong",[t("code",[e._v("context.camera")])]),t("br"),t("a",{attrs:{href:"https://threejs.org/docs/#api/en/cameras/PerspectiveCamera",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("PerspectiveCamera")]),t("OutboundLink")],1)]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("Camera オブジェクト")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("strong",[t("code",[e._v("context.renderer")])]),t("br"),t("a",{attrs:{href:"https://threejs.org/docs/#api/en/renderers/WebGLRenderer",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("WebGLRenderer")]),t("OutboundLink")],1)]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("Renderer オブジェクト")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("strong",[t("code",[e._v("context.scene")])]),t("br"),t("a",{attrs:{href:"https://threejs.org/docs/#api/en/scenes/Scene",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("Scene")]),t("OutboundLink")],1)]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("Scene オブジェクト")])])])]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"onremove-map-context"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#onremove-map-context"}},[e._v("#")]),e._v(" "),t("strong",[t("code",[e._v("onRemove(map, context)")])])]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/ja/developer-guide/api/map.html#removelayer-id"}},[e._v("Map#removeLayer")]),e._v(" でレイヤーが Map から削除されたときに呼び出される、任意実装のメソッドです。これを利用して、レイヤーは three.js のリソースを解放し、イベントリスナーを削除することができます。")],1),e._v(" "),t("h4",{attrs:{id:"パラメータ-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#パラメータ-2"}},[e._v("#")]),e._v(" パラメータ")]),e._v(" "),t("p",[t("strong",[t("code",[e._v("map")])]),e._v(" ("),t("RouterLink",{attrs:{to:"/ja/developer-guide/api/map.html"}},[t("code",[e._v("Map")])]),e._v(") このレイヤーが削除された Mini Tokyo 3D の Map")],1),e._v(" "),t("p",[t("strong",[t("code",[e._v("context")])]),e._v(" ("),t("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("Object")]),t("OutboundLink")],1),e._v(") このレイヤーに含まれる three.js のレンダラー、シーン、カメラオブジェクトです。")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[e._v("名前")]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("説明")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("strong",[t("code",[e._v("context.camera")])]),t("br"),t("a",{attrs:{href:"https://threejs.org/docs/#api/en/cameras/PerspectiveCamera",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("PerspectiveCamera")]),t("OutboundLink")],1)]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("Camera オブジェクト")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("strong",[t("code",[e._v("context.renderer")])]),t("br"),t("a",{attrs:{href:"https://threejs.org/docs/#api/en/renderers/WebGLRenderer",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("WebGLRenderer")]),t("OutboundLink")],1)]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("Renderer オブジェクト")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("strong",[t("code",[e._v("context.scene")])]),t("br"),t("a",{attrs:{href:"https://threejs.org/docs/#api/en/scenes/Scene",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("Scene")]),t("OutboundLink")],1)]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("Scene オブジェクト")])])])])])}),[],!1,null,null,null);t.default=o.exports}}]);