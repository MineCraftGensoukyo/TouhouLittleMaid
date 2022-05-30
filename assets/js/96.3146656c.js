(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{515:function(t,s,e){"use strict";e.r(s);var a=e(65),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"maid-model-pack-details"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maid-model-pack-details"}},[t._v("#")]),t._v(" Maid Model Pack Details")]),t._v(" "),e("ul",[e("li",[t._v("This wiki applies to Touhou Little Maid mod in "),e("code",[t._v("1.12.2")]),t._v(" or "),e("code",[t._v("1.16.5")]),t._v(" latest version;")]),t._v(" "),e("li",[t._v("Requires understanding of vanilla Minecraft's resource pack structure;")]),t._v(" "),e("li",[t._v("Requires understanding of JSON format;")]),t._v(" "),e("li",[t._v("Currently only supports models for "),e("strong",[t._v("1.10.0 or 1.12.0 Bedrock Edition Model")]),t._v(".")]),t._v(" "),e("li",[t._v("For file editing software, we recommend "),e("code",[t._v("Visual Studio Code")]),t._v(", all related files requires to be saved using "),e("code",[t._v("UTF-8 without BOM")]),t._v(".")])]),t._v(" "),e("h2",{attrs:{id:"model-packs-structure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#model-packs-structure"}},[t._v("#")]),t._v(" Model Packs Structure")]),t._v(" "),e("p",[t._v("To better understand how to create model packs, we listed here the structure format for model packs")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("model pack folder\n│\n├─pack.mcmeta\n├─pack.png\n└─assets\n    └─my_model_pack\n        ├─maid_model.json\n        ├─lang\n        │    ├─en_us.lang\n        │    └─zh_cn.lang\n        ├─models\n        │     └─entity\n        │            ├─cirno.json\n        │            └─daiyousei.json\n        └─textures\n                 └─entity\n                        ├─cirno.png\n                        └─daiyousei.png\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br")])]),e("h2",{attrs:{id:"model-packs-description-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#model-packs-description-files"}},[t._v("#")]),t._v(" Model Packs Description Files")]),t._v(" "),e("p",[t._v("The file complete structure is as below, only the parts marked '(Required)' requires to be filled, you don't have to fill everything.")]),t._v(" "),e("p",[t._v("The model supports JSON files with comments, please use at your discretion.")]),t._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Model pack name (Required)")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pack_name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Touhou Project Model Packs"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Author list")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"author"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TartaricAcid"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SuccinicAcid"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Description for model packs")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Default Model Packs"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Model pack version")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0.0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Date creation for model pack")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"date"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-07-14"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Model pack icon, without this, the model pack will have no icon")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"icon"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"touhou_little_maid:textures/maid_icon.png"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Model list (Required)")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"model_list"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Model id, no duplication allowed (Required)")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"model_id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"touhou_little_maid:hakurei_reimu"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The path for the model, use the full resource path")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"model"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"touhou_little_maid:models/entity/hakurei_reimu.json"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The path for the texture, use the full resource path")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"texture"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"touhou_little_maid:textures/entity/hakurei_reimu.png"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The model size when rendering the item form, default is 1.0")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"render_item_scale"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.9")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The size when render the entity, range is between 0.2~2.0, default is 1.0")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"render_entity_scale"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.75")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Model name")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Reimu Hakurei"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The description for the model")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Shrine Maiden of Hakurei"')]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Animation script reference, without this part, model will have some default animations")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// tlm-utils plugins can auto generate the correct animation reference based on the group name")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"animation"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"touhou_little_maid:animation/maid.default.js"')]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br"),e("span",{staticClass:"line-number"},[t._v("25")]),e("br"),e("span",{staticClass:"line-number"},[t._v("26")]),e("br"),e("span",{staticClass:"line-number"},[t._v("27")]),e("br"),e("span",{staticClass:"line-number"},[t._v("28")]),e("br"),e("span",{staticClass:"line-number"},[t._v("29")]),e("br"),e("span",{staticClass:"line-number"},[t._v("30")]),e("br"),e("span",{staticClass:"line-number"},[t._v("31")]),e("br"),e("span",{staticClass:"line-number"},[t._v("32")]),e("br"),e("span",{staticClass:"line-number"},[t._v("33")]),e("br"),e("span",{staticClass:"line-number"},[t._v("34")]),e("br"),e("span",{staticClass:"line-number"},[t._v("35")]),e("br"),e("span",{staticClass:"line-number"},[t._v("36")]),e("br"),e("span",{staticClass:"line-number"},[t._v("37")]),e("br"),e("span",{staticClass:"line-number"},[t._v("38")]),e("br"),e("span",{staticClass:"line-number"},[t._v("39")]),e("br"),e("span",{staticClass:"line-number"},[t._v("40")]),e("br"),e("span",{staticClass:"line-number"},[t._v("41")]),e("br"),e("span",{staticClass:"line-number"},[t._v("42")]),e("br"),e("span",{staticClass:"line-number"},[t._v("43")]),e("br"),e("span",{staticClass:"line-number"},[t._v("44")]),e("br"),e("span",{staticClass:"line-number"},[t._v("45")]),e("br")])]),e("p",[t._v("The example above listed all usable field, only the field with '(Required)' are needed, the rest can be omitted.")]),t._v(" "),e("p",[t._v("For simplicity, you could write a file like this:")]),t._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Model pack name (Required)")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pack_name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Touhou Project Model Packs"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Model list (Required)")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"model_list"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Model id, no duplication allowed (Required)")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"model_id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"touhou_little_maid:hakurei_reimu"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br")])]),e("p",[t._v("If we do not fill the field for "),e("code",[t._v("model")]),t._v(" or "),e("code",[t._v("texture")]),t._v(", it will choose the default model and texture based on "),e("code",[t._v("model_id")]),t._v(".")]),t._v(" "),e("p",[t._v("For the example above, "),e("code",[t._v("model_id")]),t._v(" is "),e("code",[t._v("touhou_little_maid:hakurei_reimu")]),t._v(", then the model file will be "),e("code",[t._v("hakurei_reimu.json")]),t._v(" under "),e("code",[t._v("models/entity")]),t._v(" folder, the texture will be "),e("code",[t._v("hakurei_reimu.png")]),t._v(" under "),e("code",[t._v("textures/entity")]),t._v(" folder.")]),t._v(" "),e("p",[t._v("If we filled the field for "),e("code",[t._v("model")]),t._v(" or "),e("code",[t._v("texture")]),t._v(", then the content has no limit, and can even share a model or texture for multiple characters.")]),t._v(" "),e("h2",{attrs:{id:"animated-icon"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#animated-icon"}},[t._v("#")]),t._v(" Animated Icon")]),t._v(" "),e("p",[t._v("Icon does not have size limit, supports both static and animated icons.")]),t._v(" "),e("p",[t._v("Any icon with a scale of 1:1 will be interpreted as static icon. Any long icon that is not 1:1 scale, will be displayed slowly with a 0.1 second interval, which creates the animated effect.")]),t._v(" "),e("blockquote",[e("p",[t._v("The image below is the icon in the mod, left is static icon, and right is the animated icon.")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.imgur.com/VoulqpR.png",alt:"020"}})]),t._v(" "),e("h2",{attrs:{id:"model-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#model-files"}},[t._v("#")]),t._v(" Model Files")]),t._v(" "),e("ul",[e("li",[t._v("This mod is using JSON files in Bedrock "),e("code",[t._v("1.10.0")]),t._v(" or "),e("code",[t._v("1.12.0")]),t._v(" for model loading, the document can be exported via model building software "),e("a",{attrs:{href:"https://blockbench.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Blockbench"),e("OutboundLink")],1),t._v(", without additional edits.")]),t._v(" "),e("li",[t._v("There are many preset animations, you only need to name a specific group, and then the plugin will automatically generate the corresponding animation script reference when exporting the model. For all available names, please see the "),e("RouterLink",{attrs:{to:"/preset_animation.html"}},[t._v("Preset Animation")]),t._v(" chapter.")],1),t._v(" "),e("li",[t._v("Model also support JavaScript custom animations, you can find the introduction in the custom animation chapter.")])]),t._v(" "),e("h2",{attrs:{id:"internationlization"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#internationlization"}},[t._v("#")]),t._v(" Internationlization")]),t._v(" "),e("p",[t._v("As a game that are facing internationlization, part of the contents of model packs also have internationalization compability.")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("pack_name")]),t._v(" and "),e("code",[t._v("description")]),t._v(" field in model packs support internationalization;")]),t._v(" "),e("li",[e("code",[t._v("name")]),t._v(" and "),e("code",[t._v("description")]),t._v(" field in model list support internationalization.")])]),t._v(" "),e("p",[t._v("The method of adding internationalization is pretty simple, just need to begin it using "),e("code",[t._v("{")]),t._v(" and end it using "),e("code",[t._v("}")]),t._v(", the middle section is the internationlization key, and then followed by the corresponding language file.")]),t._v(" "),e("p",[t._v("For example we wrote the description as follow (taking just a small section)")]),t._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pack_name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{pack.vanilla_touhou_model.name}"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{pack.vanilla_touhou_model.desc}"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("and then under model pack namespace, in the "),e("code",[t._v("lang")]),t._v(" folder we create "),e("code",[t._v("en_us.lang")]),t._v(" file, and write the content below:")]),t._v(" "),e("div",{staticClass:"language-properties line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("pack.vanilla_touhou_model.name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("Vanilla Touhou Model")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("pack.vanilla_touhou_model.desc")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("Default Model Packs")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("We only added the English file, but if we want to support Chinese, we can create "),e("code",[t._v("zh_cn.lang")]),t._v(" file and write the content as below:")]),t._v(" "),e("div",{staticClass:"language-properties line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("pack.vanilla_touhou_model.name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("原版东方资源包")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("pack.vanilla_touhou_model.desc")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("默认的模型包")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("For the first example, if we did not fill the "),e("code",[t._v("name")]),t._v(" file, then the system will automatically create the local key based on "),e("code",[t._v("model_id")]),t._v(", for example "),e("code",[t._v("model_id")]),t._v(" is "),e("code",[t._v("touhou_little_maid:cushion")]),t._v(", then the generated language key is "),e("code",[t._v("model.touhou_little_maid.cushion.name")]),t._v(".")]),t._v(" "),e("p",[e("code",[t._v("description")]),t._v(" file is not generated by default, you will need to fill that in.")]),t._v(" "),e("h2",{attrs:{id:"compatibility-issue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compatibility-issue"}},[t._v("#")]),t._v(" Compatibility Issue")]),t._v(" "),e("p",[t._v("Since models made by some authors are more unique, they may have some compability issues with maids' various addtional appearance parts. Here we address the issue with these non-standard models and how you can overcome it:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Issues")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Solution")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Uncoordinated animation")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Write a custom JavaScript animation script")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Hold items are in incorrect position")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Use positional group to define the position")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Disable showing hold items")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("As long as "),e("code",[t._v("armLeft")]),t._v(" or "),e("code",[t._v("armRight")]),t._v(" group does not exist, then the corresponding hold items will not be shown")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Backpack is in incorrect position")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Use positional group to define the position")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Backpack, trolley, vehicles, broom, custom head")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Write some fields as shown in the example below to close it")])])])]),t._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pack_name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Touhou Project Pack"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"model_list"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"model_id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"touhou_little_maid:hakurei_reimu"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"show_backpack"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Prevent displaying of backpack")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"show_custom_head"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Prevent displaying of maid's custom heads")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"show_hata"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("          "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Prevent displaying of hata sasimono, deprecated in 1.16")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"can_hold_trolley"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// prevent maid to hold the trolley, deprecated in 1.16")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"can_hold_vehicle"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Prevent maid to hold the vehicle, deprecated in 1.16")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"can_riding_broom"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Prevent maid to riding the broom, deprecated in 1.16")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br")])]),e("h2",{attrs:{id:"maid-easter-eggs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maid-easter-eggs"}},[t._v("#")]),t._v(" Maid Easter Eggs")]),t._v(" "),e("p",[t._v("We added maid naming easter egg function, specially named maid can use special models.")]),t._v(" "),e("p",[t._v("Writing easter egg script is pretty simple, the model will automatically detect it as easter egg models, and it won't show in skin menu.")]),t._v(" "),e("h3",{attrs:{id:"normal-easter-eggs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#normal-easter-eggs"}},[t._v("#")]),t._v(" Normal Easter Eggs")]),t._v(" "),e("p",[t._v("Below is the script for normal naming easter egg. Under normal naming easter egg, maid only need to be named as shown in the "),e("code",[t._v("tag")]),t._v(" field to use the model.")]),t._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pack_name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Touhou Project Model Pack"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"model_list"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"model_id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"touhou_little_maid:hakurei_reimu"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"easter_egg"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"IKUN~"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])]),e("h3",{attrs:{id:"encrypted-easter-eggs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#encrypted-easter-eggs"}},[t._v("#")]),t._v(" Encrypted Easter Eggs")]),t._v(" "),e("p",[t._v("Below  is the script for encrypted naming easter egg. For encrypted naming easter egg, maid has to be specially named, the naming has to be the same as SHA-1 value in the "),e("code",[t._v("tag")]),t._v(" below to use the model.")]),t._v(" "),e("p",[t._v("As the script below, when maid is named "),e("code",[t._v("IKUN~")]),t._v(", because the characters' SHA-1 value is "),e("code",[t._v("6dadb86d91cc4c0c2c7860e1cb16cec01e1b6511")]),t._v(", same as "),e("code",[t._v("tag")]),t._v(" field, it will use said model.")]),t._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pack_name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Touhou Project Model Pack"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"model_list"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"model_id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"touhou_little_maid:hakurei_reimu"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"easter_egg"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"encrypt"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"6dadb86d91cc4c0c2c7860e1cb16cec01e1b6511"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br")])]),e("h2",{attrs:{id:"other-questions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#other-questions"}},[t._v("#")]),t._v(" Other Questions")]),t._v(" "),e("h3",{attrs:{id:"z-fighting-issue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#z-fighting-issue"}},[t._v("#")]),t._v(" Z-fighting Issue")]),t._v(" "),e("p",[t._v("This is an issue with OpenGL itself, during the process of creating models if we used flat or two coinciding solids, we will have this issue.")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.imgur.com/daYk77e.png",alt:"004"}})]),t._v(" "),e("p",[t._v("For the issue of one flat cube, you can add texture to one of the sides and keep the others empty, it will solve the issue; for two coinciding cube, move the cube slightly, or delete the coinciding cube.")]),t._v(" "),e("h3",{attrs:{id:"uppercase-lowercase"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#uppercase-lowercase"}},[t._v("#")]),t._v(" Uppercase & Lowercase")]),t._v(" "),e("p",[t._v("In Minecraft, all the file names needs to be lowercase.")])])}),[],!1,null,null,null);s.default=n.exports}}]);