(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-563742a6"],{"198a":function(e,a,t){"use strict";var r=t("5491"),o=t.n(r);o.a},"48ae":function(e,a,t){"use strict";var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("a-form",{attrs:{form:e.form,layout:"horizontal"}},[t("a-row",[t("a-col",{attrs:{span:16}},[t("a-form-item",{attrs:{label:"参数名",labelCol:e.formItemLayout.labelCol,wrapperCol:e.formItemLayout.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["paramName",{rules:[{required:!0,message:"请输入参数名"}]}],expression:"[\n              'paramName',\n              { rules: [{ required: true, message: '请输入参数名' }] },\n            ]"}],attrs:{placeholder:"请输入"}})],1)],1)],1),t("a-row",[t("a-col",{attrs:{span:16}},[t("a-form-item",{attrs:{label:"标识符",labelCol:e.formItemLayout.labelCol,wrapperCol:e.formItemLayout.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["paramTag",{rules:[{required:!0,message:"请输入标识符"}]}],expression:"[\n              'paramTag',\n              { rules: [{ required: true, message: '请输入标识符' }] },\n            ]"}],attrs:{placeholder:"请输入"}})],1)],1)],1),t("a-row",[t("a-col",{attrs:{span:16}},[t("a-form-item",{attrs:{label:"是否优化列",labelCol:e.formItemLayout.labelCol,wrapperCol:e.formItemLayout.wrapperCol}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["indexFlag",{rules:[{required:!0,message:"请选择是否优化列"}]}],expression:"[\n              'indexFlag',\n              { rules: [{ required: true, message: '请选择是否优化列' }] },\n            ]"}],attrs:{placeholder:"请选择"}},[t("a-select-option",{attrs:{value:"1"}},[e._v("是")]),t("a-select-option",{attrs:{value:"0"}},[e._v("否")])],1)],1)],1)],1),t("a-row",[t("a-col",{attrs:{span:16}},[t("a-form-item",{attrs:{label:"数据类型",labelCol:e.formItemLayout.labelCol,wrapperCol:e.formItemLayout.wrapperCol}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["dataType",{rules:[{required:!0,message:"请选择数据类型"}]}],expression:"[\n              'dataType',\n              { rules: [{ required: true, message: '请选择数据类型' }] },\n            ]"}],attrs:{placeholder:"请选择"},on:{change:e.onTypeChange}},[e._l(e.CollectionData("PARAMDATATYPE"),(function(a,r){return[t("a-select-option",{key:r,attrs:{value:a.value}},[e._v(e._s(a.label))])]}))],2)],1)],1)],1),t("div",{directives:[{name:"show",rawName:"v-show",value:e.showInt,expression:"showInt"}]},[t("a-row",[t("a-col",{attrs:{span:16}},[t("a-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"取值范围",labelCol:e.formItemLayout.labelCol,wrapperCol:e.formItemLayout.wrapperCol,required:""}},[t("a-form-item",{style:{display:"inline-block",width:"calc(50% - 12px)"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["min",{rules:[{required:e.showInt,message:"取值范围不能为空"}]}],expression:"[\n                  'min',\n                  {\n                    rules: [{ required: showInt, message: '取值范围不能为空' }],\n                  },\n                ]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入"}})],1),t("span",{style:{display:"inline-block",width:"24px",textAlign:"center"}},[e._v(" - ")]),t("a-form-item",{style:{display:"inline-block",width:"calc(50% - 12px)"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["max",{rules:[{required:e.showInt,message:"取值范围不能为空"}]}],expression:"[\n                  'max',\n                  {\n                    rules: [{ required: showInt, message: '取值范围不能为空' }],\n                  },\n                ]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入"}})],1)],1)],1)],1),t("a-row",[t("a-col",{attrs:{span:16}},[t("a-form-item",{attrs:{label:"步长",labelCol:e.formItemLayout.labelCol,wrapperCol:e.formItemLayout.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["step",{rules:[{required:e.showInt,message:"步长不能为空"}]}],expression:"[\n                'step',\n                { rules: [{ required: showInt, message: '步长不能为空' }] },\n              ]"}],attrs:{placeholder:"请输入"}})],1)],1)],1),t("a-row",[t("a-col",{attrs:{span:16}},[t("a-form-item",{attrs:{label:"单位",labelCol:e.formItemLayout.labelCol,wrapperCol:e.formItemLayout.wrapperCol}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["unit"],expression:"[\n                'unit'\n              ]"}],attrs:{placeholder:"请选择单位"}},[e._l(e.CollectionData("PARAMUNIT"),(function(a,r){return[t("a-select-option",{key:r,attrs:{value:a.value}},[e._v(e._s(a.label))])]}))],2)],1)],1)],1)],1),t("div",{directives:[{name:"show",rawName:"v-show",value:e.showEnum,expression:"showEnum"}]},[t("a-row",[t("a-col",{attrs:{span:16}},[t("a-form-item",{attrs:{label:"枚举型",labelCol:e.formItemLayout.labelCol,wrapperCol:e.formItemLayout.wrapperCol,required:""}},[t("param-form",{ref:"param"})],1)],1)],1)],1),t("div",{directives:[{name:"show",rawName:"v-show",value:e.showBool,expression:"showBool"}]},[t("a-row",[t("a-col",{attrs:{span:16}},[t("a-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"布尔值",labelCol:e.formItemLayout.labelCol,wrapperCol:e.formItemLayout.wrapperCol,required:""}},[t("a-form-item",{style:{display:"inline-block",width:"calc(50% - 12px)"}},[t("label",{staticClass:"swi_label"},[e._v("0")]),t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["falseValue",{rules:[{required:e.showBool,message:"布尔值不能为空"}]}],expression:"[\n                  'falseValue',\n                  {\n                    rules: [{ required: showBool, message: '布尔值不能为空' }],\n                  },\n                ]"}],staticStyle:{width:"70%"},attrs:{placeholder:"false"}})],1),t("span",{style:{display:"inline-block",width:"24px",textAlign:"center"}},[e._v(" - ")]),t("a-form-item",{style:{display:"inline-block",width:"calc(50% - 12px)"}},[t("label",{staticClass:"swi_label"},[e._v("1")]),t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["trueValue",{rules:[{required:e.showBool,message:"布尔值不能为空"}]}],expression:"[\n                  'trueValue',\n                  {\n                    rules: [{ required: showBool, message: '布尔值不能为空' }],\n                  },\n                ]"}],staticStyle:{width:"70%"},attrs:{placeholder:"true"}})],1)],1)],1)],1)],1),t("div",{directives:[{name:"show",rawName:"v-show",value:e.showText,expression:"showText"}]},[t("a-row",[t("a-col",{attrs:{span:16}},[t("a-form-item",{attrs:{label:"数据长度",labelCol:e.formItemLayout.labelCol,wrapperCol:e.formItemLayout.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["length",{rules:[{required:e.showText,message:"请输入数据长度"}],initialValue:5e4}],expression:"[\n              'length',\n              { rules: [{ required: showText, message: '请输入数据长度' }],initialValue:50000 },\n            ]"}],staticStyle:{width:"70%",float:"left"},attrs:{placeholder:"请输入"}}),t("label",{staticClass:"swi_label",staticStyle:{"margin-top":"0px"}},[e._v("字符")])],1)],1)],1)],1),t("div",{directives:[{name:"show",rawName:"v-show",value:e.showTime,expression:"showTime"}]},[t("a-row",[t("a-col",{attrs:{span:16}},[t("a-form-item",{attrs:{label:"时间格式",labelCol:e.formItemLayout.labelCol,wrapperCol:e.formItemLayout.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["timestamp"],expression:"[\n              'timestamp'\n            ]"}],attrs:{disabled:"",placeholder:"Long类型的UTC时间戳（毫秒）"}})],1)],1)],1)],1)],1)],1)},o=[],s=t("d373"),l={components:{ParamForm:s["a"]},props:["paramJson"],data:function(){return{form:this.$form.createForm(this,{}),formItemLayout:{labelCol:{span:6},wrapperCol:{span:18}},formItemLayoutWithOutLabel:{wrapperCol:{xs:{span:24,offset:0},sm:{span:20,offset:4}}},showInt:!1,showEnum:!1,showBool:!1,showText:!1,showTime:!1,type:"",rowData:{}}},mounted:function(){"1"===this.paramJson.editType?this.$refs.param.dataSource=[]:"2"===this.paramJson.editType&&this.viewParam(this.paramJson.row)},methods:{onTypeChange:function(e){"1"===e||"2"===e||"3"===e?(this.showInt=!0,this.showBool=!1,this.showEnum=!1,this.showText=!1,this.showTime=!1,this.type="1"):"4"===e?(this.showInt=!1,this.showEnum=!0,this.showBool=!1,this.showText=!1,this.showTime=!1,this.type="2"):"5"===e?(this.showBool=!0,this.showInt=!1,this.showEnum=!1,this.showText=!1,this.showTime=!1,this.type="3"):"6"===e?(this.showText=!0,this.showBool=!1,this.showInt=!1,this.showEnum=!1,this.showTime=!1,this.type="4"):"7"===e&&(this.showTime=!0,this.showText=!1,this.showBool=!1,this.showInt=!1,this.showEnum=!1,this.type="5")},saveForm:function(){var e=this,a=this.form.getFieldsValue();if("1"===this.type)a.dataJson='{"min":'+a.min+',"max":'+a.max+',"step":'+a.step+',"unit":"'+a.unit+'"}';else if("2"===this.type){for(var t=this.$refs.param.dataSource,r=[],o=0;o<t.length;o++){var s={};s.value=t[o].value,s.desc=t[o].desc,r.push(s)}a.dataJson='{"list":'+JSON.stringify(r)+"}"}else"3"===this.type?a.dataJson='{"falseValue":"'+a.falseValue+'","trueValue":"'+a.trueValue+'"}':"4"===this.type?a.dataJson='{"length":'+a.length+"}":"5"===this.type&&(a.dataJson="{}");this.form.validateFields((function(t){t||(e.rowData=a,e.reset(),e.$emit("saveSuccess"))}))},reset:function(){this.form.resetFields(),this.showInt=!1,this.showBool=!1,this.showEnum=!1,this.showText=!1,this.showTime=!1,this.type=""},viewParam:function(e){this.form.setFieldsValue(e);var a=JSON.parse(e.dataJson),t=e.dataType;"1"===t||"2"===t||"3"===t?(this.showInt=!0,this.type="1",this.form.setFieldsValue({min:a.min,max:a.max,step:a.step,unit:"undefined"==a.unit?"":a.unit})):"4"===t?(this.showEnum=!0,this.type="2",this.$refs.param.init(a.list)):"5"===t?(this.showBool=!0,this.type="3",this.form.setFieldsValue({falseValue:a.falseValue,trueValue:a.trueValue})):"6"===t?(this.showText=!0,this.type="4",this.form.setFieldsValue({length:a.length})):"7"===t&&(this.showTime=!0,this.type="5")}}},i=l,n=(t("198a"),t("0c7c")),u=Object(n["a"])(i,r,o,!1,null,"2fd5d98a",null);a["a"]=u.exports},5491:function(e,a,t){},"717d":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("a-card",{attrs:{title:"事件详情"}},[t("a-form",{attrs:{form:e.form,layout:"horizontal"}},[t("a-row",[t("a-col",{attrs:{span:16}},[t("a-form-item",{attrs:{label:"事件名称",labelCol:e.formItemLayout.labelCol,wrapperCol:e.formItemLayout.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["eventName",{rules:[{required:!0,message:"请输入功能名称"}]}],expression:"[\n                  'eventName',\n                  { rules: [{ required: true, message: '请输入功能名称' }] },\n                  ]"}],attrs:{disabled:"",placeholder:"请输入"}})],1)],1)],1),t("a-row",[t("a-col",{attrs:{span:16}},[t("a-form-item",{attrs:{label:"标识符",labelCol:e.formItemLayout.labelCol,wrapperCol:e.formItemLayout.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["eventTag",{rules:[{required:!0,message:"请输入标识符"}]}],expression:"[\n                  'eventTag',\n                  { rules: [{ required: true, message: '请输入标识符' }] },\n                  ]"}],attrs:{disabled:"",placeholder:"请输入"}})],1)],1)],1),t("a-row",[t("a-col",{attrs:{span:16}},[t("a-button",{staticStyle:{"margin-left":"260px",color:"#1abc9c"},attrs:{icon:"plus",disabled:""},on:{click:e.addParam}},[e._v("添加参数")])],1)],1),t("a-row",[t("a-col",{attrs:{span:16}},[t("a-form-item",{attrs:{label:"参数",labelCol:e.formItemLayout.labelCol,wrapperCol:e.formItemLayout.wrapperCol,required:""}},[t("a-table",{attrs:{rowKey:function(e){return e.key},columns:e.dataColumns,dataSource:e.dataSource,pagination:!1},scopedSlots:e._u([{key:"paramType",fn:function(a){return t("span",{},[e._v(" "+e._s(e.CollectionLabel("PARAMTYPE",a))+" ")])}},{key:"dataType",fn:function(a){return t("span",{},[e._v(" "+e._s(e.CollectionLabel("PARAMDATATYPE",a))+" ")])}},{key:"indexFlag",fn:function(a){return t("span",{},[e._v(" "+e._s(1==a?"是":"否")+" ")])}},{key:"action",fn:function(a,r){return[t("div",[t("a",{style:{marginRight:"8px"},attrs:{disabled:""},on:{click:function(){return e.editParam(r)}}},[e._v("编辑")]),t("a",{attrs:{disabled:""},on:{click:function(a){return e.remove(r.key)}}},[e._v("删除")])])]}}])})],1)],1)],1),t("a-row",[t("a-col",{attrs:{span:16}},[t("a-form-item",{attrs:{label:"启动/停用",labelCol:e.formItemLayout.labelCol,wrapperCol:e.formItemLayout.wrapperCol}},[t("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["enableFlag",{valuePropName:"checked",rules:[{required:!0,message:"请选择"}],initialValue:!0}],expression:"[\n                  'enableFlag',\n                  {\n                      valuePropName: 'checked',\n                      rules: [{ required: true, message: '请选择' }],\n                      initialValue: true,\n                  },\n                  ]"}],attrs:{disabled:""}})],1)],1)],1)],1)],1),e.showParam?t("a-modal",{attrs:{title:1==e.paramJson.editType?"添加参数":"编辑参数",width:800,visible:e.showParam},on:{ok:e.ok,cancel:e.cancel}},[t("event-item",{ref:"parentForm",attrs:{paramJson:e.paramJson},on:{saveSuccess:e.saveSuccess}})],1):e._e()],1)},o=[],s=(t("4de4"),t("4160"),t("159b"),t("dde5")),l=t("48ae"),i=[{title:"参数名称",dataIndex:"paramName"},{title:"标识符",dataIndex:"paramTag"},{title:"数据类型",dataIndex:"dataType",scopedSlots:{customRender:"dataType"}},{title:"是否优化列",dataIndex:"indexFlag",scopedSlots:{customRender:"indexFlag"}},{title:"操作",dataIndex:"action",align:"center",scopedSlots:{customRender:"action"}}],n={components:{eventItem:l["a"]},data:function(){return{form:this.$form.createForm(this,{}),formItemLayout:{labelCol:{span:6},wrapperCol:{span:18}},formItemLayoutWithOutLabel:{wrapperCol:{xs:{span:24,offset:0},sm:{span:20,offset:4}}},showParam:!1,eventId:this.$route.query.id,editType:this.$route.query.editType,dataColumns:i,dataSource:[],paramJson:{},rowId:0}},mounted:function(){this.queryEvent(),this.queryEventItem()},methods:{queryEvent:function(){var e=this;s["e"].queryEvent({id:this.eventId}).then((function(a){var t=a.data;if(t.serviceSuccess){var r=t.data.pageBean.list[0];r.enableFlag="1"==r.enableFlag,e.form.setFieldsValue(r)}}))},queryEventItem:function(){var e=this,a={eventId:this.eventId};s["e"].queryEventItem(a).then((function(a){var t=a.data;t.serviceSuccess&&(e.dataSource=t.data.pageBean.list,e.dataSource.forEach((function(e,a){e.key=a+1})))}))},addParam:function(){this.showParam=!0,this.paramJson.editType="1"},cancel:function(){this.showParam=!1},ok:function(){this.$refs.parentForm.saveForm()},saveSuccess:function(){var e=this.$refs.parentForm.rowData;if("1"===this.paramJson.editType)this.dataSource.push({key:this.dataSource.length+1,paramType:e.paramType,paramName:e.paramName,paramTag:e.paramTag,dataType:e.dataType,indexFlag:e.indexFlag,dataJson:e.dataJson});else if("2"===this.paramJson.editType){var a=this.rowId;this.dataSource[a].paramType=e.paramType,this.dataSource[a].paramName=e.paramName,this.dataSource[a].paramTag=e.paramTag,this.dataSource[a].dataType=e.dataType,this.dataSource[a].indexFlag=e.indexFlag,this.dataSource[a].dataJson=e.dataJson}this.showParam=!1},editParam:function(e){this.rowId=e.key-1,this.paramJson.editType="2",this.paramJson.row=e,this.showParam=!0},remove:function(e){var a=this.dataSource.filter((function(a){return a.key!==e}));this.dataSource=a}}},u=n,m=t("0c7c"),c=Object(m["a"])(u,r,o,!1,null,"7b26186e",null);a["default"]=c.exports},d373:function(e,a,t){"use strict";var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("form",{attrs:{form:e.form}},[t("a-table",{attrs:{size:"small",columns:e.dataColumns,dataSource:e.dataSource,pagination:!1},scopedSlots:e._u([e._l(["value","desc"],(function(a){return{key:a,fn:function(r,o){return[t("a-input",{key:a,staticStyle:{margin:"-5px 0"},attrs:{size:"small",value:r},on:{change:function(t){return e.handleChange(t.target.value,o.key,a)}}})]}}})),{key:"operation",fn:function(a,r){return[t("span",[t("a",{attrs:{size:"small"},on:{click:function(a){return e.remove(r.key)}}},[e._v("删除")])])]}}],null,!0)}),t("a-button",{staticStyle:{color:"#1ABC9C"},attrs:{icon:"plus"},on:{click:e.newMember}},[e._v("添加参数")])],1)},o=[],s=(t("4de4"),t("d81d"),t("2909")),l=[{title:"参数值",dataIndex:"value",key:"参数值",overflowTooltip:!0,width:"30%",scopedSlots:{customRender:"value"}},{title:"参数描述",dataIndex:"desc",key:"参数描述",scopedSlots:{customRender:"desc"}},{title:"操作",key:"操作",scopedSlots:{customRender:"operation"}}],i=[],n={data:function(){return{columns:l,dataSource:i,form:this.$form.createForm(this)}},computed:{dataColumns:function(){return this.columns.map((function(e){return e.title=e.key,e}))}},methods:{newMember:function(){this.dataSource.push({key:this.dataSource.length+1,value:"",desc:""})},handleChange:function(e,a,t){var r=Object(s["a"])(this.dataSource),o=r.filter((function(e){return a===e.key}))[0];o&&(o[t]=e,this.dataSource=r)},remove:function(e){var a=this.dataSource.filter((function(a){return a.key!==e}));this.dataSource=a},init:function(e){if(this.dataSource=[],e.length>0)for(var a=0;a<e.length;a++)this.dataSource.push({key:this.dataSource.length+1,value:e[a].value,desc:e[a].desc})}}},u=n,m=t("0c7c"),c=Object(m["a"])(u,r,o,!1,null,"0141c012",null);a["a"]=c.exports}}]);