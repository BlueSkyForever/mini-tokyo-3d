(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{336:function(e,t,r){"use strict";r.r(t);var a=r(14),s=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"tile3dlayerinterface"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tile3dlayerinterface"}},[e._v("#")]),e._v(" Tile3DLayerInterface")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.ogc.org/standard/3dtiles/",target:"_blank",rel:"noopener noreferrer"}},[e._v("3D Tiles 仕様"),t("OutboundLink")],1),e._v(" に基づく形式の 3D タイルデータを描画するレイヤーのインターフェースです。これは実装者がモデル化するための仕様であり、エクスポートされたメソッドやクラスではありません。")]),e._v(" "),t("p",[e._v("3D タイルレイヤーは、"),t("a",{attrs:{href:"https://deck.gl",target:"_blank",rel:"noopener noreferrer"}},[e._v("deck.gl"),t("OutboundLink")],1),e._v(" の "),t("a",{attrs:{href:"https://deck.gl/docs/api-reference/geo-layers/tile-3d-layer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tile3DLayer"),t("OutboundLink")],1),e._v(" を使用して描画されます。開発者は、3D タイルデータと描画方法を指定することで、フォトグラメトリや 3D ビルディング、BIM/CAD、点群をマップ上に重ねて表示することができます。このレイヤーは "),t("RouterLink",{attrs:{to:"/ja/developer-guide/api/map.html#addlayer-layer"}},[e._v("Map#addLayer")]),e._v(" を使ってマップに追加できます。")],1),e._v(" "),t("p",[e._v("3D タイルレイヤーは、一意の "),t("code",[e._v("id")]),e._v(" を持ち、"),t("code",[e._v("type")]),e._v(" が "),t("code",[e._v("'tile-3d'")]),e._v(" である必要があります。")]),e._v(" "),t("h2",{attrs:{id:"プロパティ"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#プロパティ"}},[e._v("#")]),e._v(" プロパティ")]),e._v(" "),t("p",[e._v("以下のプロパティに加えて、deck.gl の "),t("a",{attrs:{href:"https://deck.gl/docs/api-reference/geo-layers/tile-3d-layer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tile3DLayer"),t("OutboundLink")],1),e._v(" が持つすべてのプロパティに対応します。")]),e._v(" "),t("h3",{attrs:{id:"id-string"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#id-string"}},[e._v("#")]),e._v(" "),t("strong",[t("code",[e._v("id")])]),e._v(" ("),t("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("string")]),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("p",[e._v("固有のレイヤー ID です。")]),e._v(" "),t("h3",{attrs:{id:"lightcolor-array-number"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lightcolor-array-number"}},[e._v("#")]),e._v(" "),t("strong",[t("code",[e._v("lightColor")])]),e._v(" ("),t("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("Array")]),t("OutboundLink")],1),t("code",[e._v("<")]),t("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("number")]),t("OutboundLink")],1),t("code",[e._v(">")]),e._v(")")]),e._v(" "),t("p",[e._v("ライトの色です。赤、緑、青の各成分を表す配列で、それぞれの値は "),t("code",[e._v("0")]),e._v(" から "),t("code",[e._v("255")]),e._v(" の間の任意の数値です。指定しない場合は、現在の日時に基づいた動的なライトの色が使用されます。")]),e._v(" "),t("h3",{attrs:{id:"maxzoom-number"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#maxzoom-number"}},[e._v("#")]),e._v(" "),t("strong",[t("code",[e._v("maxzoom")])]),e._v(" ("),t("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("number")]),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("p",[e._v("レイヤーの最大ズームレベルです。maxzoom 以上のズームレベルでは、レイヤーは非表示になります。値は "),t("code",[e._v("0")]),e._v(" から "),t("code",[e._v("24")]),e._v("（これを含む）までの任意の数値です。maxzoom が指定されていない場合は、レイヤーはすべてのズームレベルで表示されます。")]),e._v(" "),t("h3",{attrs:{id:"minzoom-number"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#minzoom-number"}},[e._v("#")]),e._v(" "),t("strong",[t("code",[e._v("minzoom")])]),e._v(" ("),t("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("number")]),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("p",[e._v("レイヤーの最小のズームレベルです。minzoom 未満のズームレベルでは、レイヤーは非表示になります。値は "),t("code",[e._v("0")]),e._v(" から "),t("code",[e._v("24")]),e._v("（これを含む）の間の任意の数値です。minzoom が指定されていない場合は、レイヤーはすべてのズームレベルで表示されます。")]),e._v(" "),t("h3",{attrs:{id:"type-string"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#type-string"}},[e._v("#")]),e._v(" "),t("strong",[t("code",[e._v("type")])]),e._v(" ("),t("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("string")]),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("p",[e._v("レイヤーのタイプです。必ず "),t("code",[e._v("'tile-3d'")]),e._v(" と指定してください。")]),e._v(" "),t("h2",{attrs:{id:"例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#例"}},[e._v("#")]),e._v(" 例")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[e._v("map"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("addLayer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\t"),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("id")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token template-string"}},[t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[e._v("`")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("tile-3d-plateau")]),t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[e._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\t"),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'tile-3d'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\t"),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("data")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token template-string"}},[t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[e._v("`")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("https://plateau.geospatial.jp/main/data/3d-tiles/bldg/13100_tokyo/13101_chiyoda-ku/low_resolution/tileset.json")]),t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[e._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\t"),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("opacity")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.8")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);