(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{439:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"commands"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commands"}},[t._v("#")]),t._v(" Commands")]),t._v(" "),s("p",[t._v("You can customize the initial state of the module from the editor initialization, by passing the following "),s("a",{attrs:{href:"https://github.com/artf/grapesjs/blob/master/src/commands/config/config.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Configuration Object"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" editor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" grapesjs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n commands"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// options")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Once the editor is instantiated you can use its API. Before using these methods you should get the module from the instance")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" commands "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" editor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Commands"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[s("a",{attrs:{href:"#add"}},[t._v("add")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#get"}},[t._v("get")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#getall"}},[t._v("getAll")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#extend"}},[t._v("extend")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#has"}},[t._v("has")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#run"}},[t._v("run")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#stop"}},[t._v("stop")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#isactive"}},[t._v("isActive")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#getactive"}},[t._v("getActive")])])]),t._v(" "),s("h2",{attrs:{id:"add"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add"}},[t._v("#")]),t._v(" add")]),t._v(" "),s("p",[t._v("Add new command to the collection")]),t._v(" "),s("h3",{attrs:{id:"parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("id")]),t._v(" "),s("strong",[s("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("string"),s("OutboundLink")],1)]),t._v(" Command's ID")]),t._v(" "),s("li",[s("code",[t._v("command")]),t._v(" "),s("strong",[t._v("("),s("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),s("OutboundLink")],1),t._v(" | "),s("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function",target:"_blank",rel:"noopener noreferrer"}},[t._v("Function"),s("OutboundLink")],1),t._v(")")]),t._v(" Object representing your command,\nBy passing just a function it's intended as a stateless command\n(just like passing an object with only "),s("code",[t._v("run")]),t._v(" method).")])]),t._v(" "),s("h3",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("commands"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myCommand'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("editor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sender")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello world!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("editor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sender")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// As a function")]),t._v("\ncommands"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myCommand2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("editor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Returns "),s("strong",[t._v("this")])]),t._v(" "),s("h2",{attrs:{id:"get"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get"}},[t._v("#")]),t._v(" get")]),t._v(" "),s("p",[t._v("Get command by ID")]),t._v(" "),s("h3",{attrs:{id:"parameters-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters-2"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("id")]),t._v(" "),s("strong",[s("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("string"),s("OutboundLink")],1)]),t._v(" Command's ID")])]),t._v(" "),s("h3",{attrs:{id:"examples-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples-2"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myCommand "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" commands"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myCommand'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmyCommand"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Returns "),s("strong",[s("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),s("OutboundLink")],1)]),t._v(" Object representing the command")]),t._v(" "),s("h2",{attrs:{id:"extend"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extend"}},[t._v("#")]),t._v(" extend")]),t._v(" "),s("p",[t._v("Extend the command. The command to extend should be defined as an object")]),t._v(" "),s("h3",{attrs:{id:"parameters-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters-3"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("id")]),t._v(" "),s("strong",[s("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("string"),s("OutboundLink")],1)]),t._v(" Command's ID")]),t._v(" "),s("li",[s("code",[t._v("cmd")]),t._v("   (optional, default "),s("code",[t._v("{}")]),t._v(")")]),t._v(" "),s("li",[s("code",[t._v("Object")]),t._v(" "),s("strong",[s("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),s("OutboundLink")],1)]),t._v(" with the new command functions")])]),t._v(" "),s("h3",{attrs:{id:"examples-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples-3"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("commands"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("extend")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'old-command'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("someInnerFunction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Returns "),s("strong",[t._v("this")])]),t._v(" "),s("h2",{attrs:{id:"has"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#has"}},[t._v("#")]),t._v(" has")]),t._v(" "),s("p",[t._v("Check if command exists")]),t._v(" "),s("h3",{attrs:{id:"parameters-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters-4"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("id")]),t._v(" "),s("strong",[s("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("string"),s("OutboundLink")],1)]),t._v(" Command's ID")])]),t._v(" "),s("p",[t._v("Returns "),s("strong",[s("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[t._v("Boolean"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"getall"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getall"}},[t._v("#")]),t._v(" getAll")]),t._v(" "),s("p",[t._v("Get an object containing all the commands")]),t._v(" "),s("p",[t._v("Returns "),s("strong",[s("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"run"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run"}},[t._v("#")]),t._v(" run")]),t._v(" "),s("p",[t._v("Execute the command")]),t._v(" "),s("h3",{attrs:{id:"parameters-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters-5"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("id")]),t._v(" "),s("strong",[s("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("String"),s("OutboundLink")],1)]),t._v(" Command ID")]),t._v(" "),s("li",[s("code",[t._v("options")]),t._v(" "),s("strong",[s("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),s("OutboundLink")],1)]),t._v(" Options (optional, default "),s("code",[t._v("{}")]),t._v(")")])]),t._v(" "),s("h3",{attrs:{id:"examples-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples-4"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("commands"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myCommand'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" someOption"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Returns "),s("strong",[t._v("any")]),t._v(" The return is defined by the command")]),t._v(" "),s("h2",{attrs:{id:"stop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stop"}},[t._v("#")]),t._v(" stop")]),t._v(" "),s("p",[t._v("Stop the command")]),t._v(" "),s("h3",{attrs:{id:"parameters-6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters-6"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("id")]),t._v(" "),s("strong",[s("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("String"),s("OutboundLink")],1)]),t._v(" Command ID")]),t._v(" "),s("li",[s("code",[t._v("options")]),t._v(" "),s("strong",[s("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),s("OutboundLink")],1)]),t._v(" Options (optional, default "),s("code",[t._v("{}")]),t._v(")")])]),t._v(" "),s("h3",{attrs:{id:"examples-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples-5"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("commands"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myCommand'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" someOption"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Returns "),s("strong",[t._v("any")]),t._v(" The return is defined by the command")]),t._v(" "),s("h2",{attrs:{id:"isactive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#isactive"}},[t._v("#")]),t._v(" isActive")]),t._v(" "),s("p",[t._v("Check if the command is active. You activate commands with "),s("code",[t._v("run")]),t._v("\nand disable them with "),s("code",[t._v("stop")]),t._v(". If the command was created without "),s("code",[t._v("stop")]),t._v("\nmethod it can't be registered as active")]),t._v(" "),s("h3",{attrs:{id:"parameters-7"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters-7"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("id")]),t._v(" "),s("strong",[s("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("String"),s("OutboundLink")],1)]),t._v(" Command id")])]),t._v(" "),s("h3",{attrs:{id:"examples-6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples-6"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'some-command'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncommands"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncommands"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isActive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> true")]),t._v("\ncommands"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncommands"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isActive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> false")]),t._v("\n")])])]),s("p",[t._v("Returns "),s("strong",[s("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[t._v("Boolean"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"getactive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getactive"}},[t._v("#")]),t._v(" getActive")]),t._v(" "),s("p",[t._v("Get all active commands")]),t._v(" "),s("h3",{attrs:{id:"examples-7"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples-7"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("commands"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getActive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> { someCommand: itsLastReturn, anotherOne: ... };")]),t._v("\n")])])]),s("p",[t._v("Returns "),s("strong",[s("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);