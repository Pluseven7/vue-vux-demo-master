webpackJsonp([2],{403:function(e,n,r){r(441);var i=r(41)(r(426),r(450),null,null);e.exports=i.exports},426:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{username:"",pwd:"",email:"",a:{b:{c:"123"}}}},verify:{username:["required",{minLength:2,message:"姓名不得小于两位"},{maxLength:15,message:"姓名最多15位"}],pwd:{minLength:6,message:"密码不得小于6位"},email:"email"},computed:{verifyError:function(){return this.$verify.$errors}},methods:{submit:function(){console.log(this.$verify.check())}}}},434:function(e,n,r){n=e.exports=r(401)(),n.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},441:function(e,n,r){var i=r(434);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);r(402)("bc4d7092",i,!0)},450:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{staticClass:"article-box"},[r("div",[r("li",[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.username,expression:"username",modifiers:{trim:!0}},{name:"verify",rawName:"v-verify",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"姓名"},domProps:{value:e.username},on:{input:function(n){n.target.composing||(e.username=n.target.value.trim())},blur:function(n){return e.$forceUpdate()}}}),e._v(" "),r("label",{directives:[{name:"verified",rawName:"v-verified",value:e.verifyError.username,expression:"verifyError.username"}]})]),e._v(" "),r("li",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.pwd,expression:"pwd"},{name:"verify",rawName:"v-verify",value:e.pwd,expression:"pwd"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:e.pwd},on:{input:function(n){n.target.composing||(e.pwd=n.target.value)}}}),e._v(" "),r("label",{directives:[{name:"verified",rawName:"v-verified",value:e.verifyError.pwd,expression:"verifyError.pwd"}]})]),e._v(" "),r("li",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"},{name:"verify",rawName:"v-verify",value:e.email,expression:"email"}],attrs:{type:"text",placeholder:"邮箱"},domProps:{value:e.email},on:{input:function(n){n.target.composing||(e.email=n.target.value)}}}),e._v(" "),r("label",{directives:[{name:"verified",rawName:"v-verified",value:e.verifyError.email,expression:"verifyError.email"}]})]),e._v(" "),r("div",[r("button",{on:{click:e.submit}},[e._v("提交")])]),e._v(" "),r("hr"),e._v(" "),r("div",[r("label",{directives:[{name:"show",rawName:"v-show",value:e.$verify.$errors.username,expression:"$verify.$errors.username"}],domProps:{textContent:e._s(e.$verify.$errors)}})])])])},staticRenderFns:[]}}});