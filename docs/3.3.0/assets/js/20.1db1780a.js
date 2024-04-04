(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{299:function(t,e,a){"use strict";a.r(e);var n=a(14),o=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"building-mini-tokyo-3d"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#building-mini-tokyo-3d"}},[t._v("#")]),t._v(" Building Mini Tokyo 3D")]),t._v(" "),e("p",[t._v("If you want to try out the latest features before they are released, modify the code yourself, or contribute to Mini Tokyo 3D development, you can build your project from source code by following the instructions in this section.")]),t._v(" "),e("h2",{attrs:{id:"preparation-for-build"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preparation-for-build"}},[t._v("#")]),t._v(" Preparation for Build")]),t._v(" "),e("p",[t._v("The following software are required.")]),t._v(" "),e("ul",[e("li",[t._v("The latest version of "),e("a",{attrs:{href:"https://nodejs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("The latest version of "),e("a",{attrs:{href:"https://git-scm.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git"),e("OutboundLink")],1),t._v(" if you're cloning the repository")])]),t._v(" "),e("p",[t._v("Mini Tokyo 3D uses the following data sources and requires an access token for each of them at build time and run time. Follow the instructions below to obtain access tokens.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Data Source")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Sign-Up URL")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Access Token Format")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("a",{attrs:{href:"https://www.odpt.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Public Transportation Open Data Center"),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("a",{attrs:{href:"https://developer.odpt.org/en/users/sign_up",target:"_blank",rel:"noopener noreferrer"}},[t._v("Link"),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("A string of numbers and lowercase letters")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("a",{attrs:{href:"https://www.mapbox.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mapbox"),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("a",{attrs:{href:"https://account.mapbox.com/auth/signup/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Link"),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Alphanumeric string containing a period beginning with "),e("code",[t._v("pk.")])])])])]),t._v(" "),e("h3",{attrs:{id:"getting-an-access-token-for-public-transportation-open-data-center"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-an-access-token-for-public-transportation-open-data-center"}},[t._v("#")]),t._v(" Getting an Access Token for Public Transportation Open Data Center")]),t._v(" "),e("p",[t._v("Mini Tokyo 3D is using train and airplane data from the "),e("a",{attrs:{href:"https://www.odpt.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Public Transportation Open Data Center"),e("OutboundLink")],1),t._v(". You need to register as a developer to get the data, but it is available for free.")]),t._v(" "),e("ol",[e("li",[t._v("Register as a developer by entering your user information on the "),e("a",{attrs:{href:"https://developer.odpt.org/en/users/sign_up",target:"_blank",rel:"noopener noreferrer"}},[t._v("developer site's registration page"),e("OutboundLink")],1),t._v(". It may take a few days to receive your registration confirmation email.")]),t._v(" "),e("li",[t._v('After logging in with your developer account, click on "Account" in the menu at the top of the screen and select "Manage Access Token".')]),t._v(" "),e("li",[t._v('A list of access tokens will be displayed. Only the "DefaultApplication" token will be displayed right after creating the account. Click on "Issuing an access token".')]),t._v(" "),e("li",[t._v('Enter an application name in the "Name" field and click the "Submit" button.')]),t._v(" "),e("li",[t._v("The newly created token will appear in the list of access tokens")])]),t._v(" "),e("h3",{attrs:{id:"getting-an-access-token-for-mapbox"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-an-access-token-for-mapbox"}},[t._v("#")]),t._v(" Getting an Access Token for Mapbox")]),t._v(" "),e("p",[t._v("See "),e("RouterLink",{attrs:{to:"/developer-guide/integration.html#getting-a-mapbox-access-token"}},[t._v("Getting a Mapbox Access Token")]),t._v(".")],1),t._v(" "),e("h2",{attrs:{id:"build-instructions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#build-instructions"}},[t._v("#")]),t._v(" Build Instructions")]),t._v(" "),e("h3",{attrs:{id:"_1-downloading-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-downloading-files"}},[t._v("#")]),t._v(" 1. Downloading Files")]),t._v(" "),e("p",[t._v("Download the latest "),e("code",[t._v("master")]),t._v(" branch from Mini Tokyo 3D's "),e("a",{attrs:{href:"https://github.com/nagix/mini-tokyo-3d",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub repository"),e("OutboundLink")],1),t._v(" and extract the zip file. A directory named "),e("code",[t._v("mini-tokyo-3d-master")]),t._v(" will be created, so change the name to "),e("code",[t._v("mini-tokyo-3d")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-LO")]),t._v(" https://github.com/nagix/mini-tokyo-3d/archive/master.zip\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" master.zip\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" mini-tokyo-3d-master mini-tokyo-3d\n")])])]),e("p",[t._v("If you are using Git, you can clone the repository directly from GitHub instead of the above commands.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/nagix/mini-tokyo-3d.git\n")])])]),e("h3",{attrs:{id:"_2-build"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-build"}},[t._v("#")]),t._v(" 2. Build")]),t._v(" "),e("p",[t._v("Go to the top directory of Mini Tokyo 3D.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" mini-tokyo-3d\n")])])]),e("p",[t._v("Create a JSON file containing the access token for the Public Transportation Open Data Center obtained in the build preparation step and save it in this directory with the file name "),e("code",[t._v("secrets")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"odpt"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Install the dependent npm modules.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),e("p",[t._v("Build the project with the following command.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build-all\n")])])]),e("p",[t._v("When the build completes successfully, the "),e("code",[t._v("dist")]),t._v(" directory will be created. It includes style sheet and JavaScript files for distribution. The "),e("code",[t._v("build")]),t._v(" directory will also be created at the same time. It contains all the files needed for deployment on your web site.")]),t._v(" "),e("h3",{attrs:{id:"_3-deploying-on-a-web-site"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-deploying-on-a-web-site"}},[t._v("#")]),t._v(" 3. Deploying on a Web Site")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("index.html")]),t._v(" in the "),e("code",[t._v("build")]),t._v(" directory is for the web page on "),e("a",{attrs:{href:"http://minitokyo3d.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://minitokyo3d.com"),e("OutboundLink")],1),t._v(". Replace the "),e("code",[t._v("accessToken")]),t._v(" property, which is passed to a "),e("code",[t._v("Map")]),t._v(" constructor, with the Mapbox access token obtained in the build preparation step. Then, edit it for your web site, and place all the files in the "),e("code",[t._v("build")]),t._v(" directory in the public directory of your web server.")])])}),[],!1,null,null,null);e.default=o.exports}}]);