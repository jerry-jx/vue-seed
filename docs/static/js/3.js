webpackJsonp([3],{275:function(t,e,n){n(427);var r=n(21)(n(354),n(444),"data-v-106edb08",null);t.exports=r.exports},308:function(t,e,n){t.exports={default:n(309),__esModule:!0}},309:function(t,e,n){var r=n(9),a=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return a.stringify.apply(a,arguments)}},354:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(308),a=n.n(r);e.default={name:"tpl",data:function(){return{}},created:function(){},methods:{setAdmin:function(){var t=JSON.parse(localStorage.menu);t[0].children.push({name:"报名列表",router:"/enroll-list",icon:"el-icon-document"}),localStorage.menu=a()(t),this.$router.go(0)},setUser:function(){var t=JSON.parse(localStorage.menu);t[0].children.pop(),localStorage.menu=a()(t),this.$router.go(0)}}}},363:function(t,e,n){e=t.exports=n(273)(),e.push([t.i,"",""])},427:function(t,e,n){var r=n(363);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(274)("dd27518a",r,!0)},444:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"title",rawName:"v-title",value:"权限测试",expression:"'权限测试'"}],staticStyle:{"text-align":"center",padding:"250px"}},[n("el-button",{staticClass:"animated rollIn",attrs:{type:"primary",size:"large"},on:{click:t.setAdmin}},[n("i",{staticClass:"fa fa-user"}),t._v("  我是管理员")]),t._v(" "),n("el-button",{staticClass:"animated rollIn rythm rythm-high",attrs:{size:"large"},on:{click:t.setUser}},[n("i",{staticClass:"fa fa-user-o"}),t._v("  我是吃瓜群众")])],1)},staticRenderFns:[]}}});