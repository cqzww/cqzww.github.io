(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8fe0df70"],{"1ade":function(e,a,t){},"22bf":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("a-card",{attrs:{title:1==e.editType?"子设备添加":"子设备编辑"}},[t("a-form",{attrs:{form:e.form,layout:"horizontal"}},[t("a-row",[t("a-col",{attrs:{span:16}},[t("a-form-item",{attrs:{label:"子设备",labelCol:e.formItemLayout.labelCol,wrapperCol:e.formItemLayout.wrapperCol}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["deviceId",{rules:[{required:!0,message:"请选择子设备"}]}],expression:"[\n                'deviceId',\n                { rules: [{ required: true, message: '请选择子设备' }] },\n              ]"}],attrs:{disabled:2==e.editType,placeholder:"请选择"},on:{change:e.changeSubdevice}},e._l(e.deviceList,(function(a){return t("a-select-option",{key:a.id,attrs:{value:a.id}},[e._v(" "+e._s(a.deviceName)+" ")])})),1)],1)],1)],1),t("a-row",[t("a-col",{attrs:{span:16}},[t("a-form-item",{attrs:{label:"驱动实例",labelCol:e.formItemLayout.labelCol,wrapperCol:e.formItemLayout.wrapperCol}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["instanceName",{rules:[{required:!0,message:"请选择驱动实例"}]}],expression:"[\n                'instanceName',\n                { rules: [{ required: true, message: '请选择驱动实例' }] },\n              ]"}],attrs:{placeholder:"请选择"},on:{change:e.changeInstance}},e._l(e.instanceList,(function(a){return t("a-select-option",{key:a.id,attrs:{value:JSON.stringify(a)}},[e._v(" "+e._s(a.instanceName)+" ")])})),1)],1)],1)],1),t("div",[t("a-row",e._l(e.paramList,(function(a){return t("a-col",{key:a.id,attrs:{span:16}},[t("a-form-item",{attrs:{label:a.label,labelCol:e.formItemLayout.labelCol,wrapperCol:e.formItemLayout.wrapperCol}},[1==a.dataType||2==a.dataType||3==a.dataType||6==a.dataType?t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:[a.tag,{rules:[{required:!0,message:"请输入"+a.label}]}],expression:"[\n                  data.tag,\n                  {\n                    rules: [\n                      { required: true, message: '请输入' + data.label },\n                    ],\n                  },\n                ]"}],attrs:{placeholder:e.caseStr(a.dataType)}}):4==a.dataType?t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:[a.tag,{rules:[{required:!0,message:"请输入"+a.label}]}],expression:"[\n                  data.tag,\n                  {\n                    rules: [\n                      { required: true, message: '请输入' + data.label },\n                    ],\n                  },\n                ]"}],attrs:{placeholder:"请选择"}},[e._l(a.json,(function(a,r){return[t("a-select-option",{key:r,attrs:{value:a.value}},[e._v(" "+e._s(a.desc)+"_"+e._s(a.value)+" ")])]}))],2):5==a.dataType?t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:[a.tag,{rules:[{required:!0,message:"请输入"+a.label}]}],expression:"[\n                  data.tag,\n                  {\n                    rules: [\n                      { required: true, message: '请输入' + data.label },\n                    ],\n                  },\n                ]"}]},[t("a-radio",{attrs:{value:"1"}},[e._v(e._s(a.json.trueValue))]),t("a-radio",{attrs:{value:"0"}},[e._v(e._s(a.json.falseValue))])],1):7==a.dataType?t("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:[a.tag,{rules:[{required:!0,message:"请输入"+a.label}]}],expression:"[\n                  data.tag,\n                  {\n                    rules: [\n                      { required: true, message: '请输入' + data.label },\n                    ],\n                  },\n                ]"}],staticStyle:{width:"300px"},attrs:{format:"YYYY-MM-DD HH:mm:ss","show-time":""}}):e._e()],1)],1)})),1)],1),t("a-row",[t("a-col",{attrs:{span:16}},[t("a-form-item",{attrs:{label:"启动/停用",labelCol:e.formItemLayout.labelCol,wrapperCol:e.formItemLayout.wrapperCol}},[t("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["enableFlag",{valuePropName:"checked",rules:[{required:!0,message:"请选择"}],initialValue:!0}],expression:"[\n                'enableFlag',\n                {\n                  valuePropName: 'checked',\n                  rules: [{ required: true, message: '请选择' }],\n                  initialValue: true,\n                },\n              ]"}]})],1)],1)],1),t("a-row",[t("a-col",{attrs:{span:16}},[t("a-form-item",{attrs:{label:"采集周期",labelCol:e.formItemLayout.labelCol,wrapperCol:e.formItemLayout.wrapperCol}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["pollPeriod",{rules:[{required:!0,message:"输入数值"}]}],expression:"[\n                'pollPeriod',\n                {\n                  rules: [{ required: true, message: '输入数值' }],\n                },\n              ]"}],staticStyle:{width:"90%",float:"left"},attrs:{placeholder:"请输入"}}),t("label",{staticClass:"swi_label",staticStyle:{"margin-top":"0px"}},[e._v("秒")])],1)],1)],1),t("a-row",[t("a-col",{attrs:{span:16}},[t("a-form-item",{attrs:{label:"定时/变动上传",labelCol:e.formItemLayout.labelCol,wrapperCol:e.formItemLayout.wrapperCol}},[t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["dataSendMethod",{rules:[{required:!0,message:"请选择定时/变动上传"}],initialValue:"0"}],expression:"[\n              'dataSendMethod',\n              {\n                rules: [{ required: true, message: '请选择定时/变动上传' }],\n                initialValue: '0',\n              },\n            ]"}],attrs:{"button-style":"solid",placeholder:"请选择"},on:{change:e.changeSend}},[t("a-radio-button",{attrs:{value:"0"}},[e._v("定时")]),t("a-radio-button",{attrs:{value:"1"}},[e._v("变动上传")])],1)],1)],1)],1),t("a-row",{directives:[{name:"show",rawName:"v-show",value:e.showCyc,expression:"showCyc"}]},[t("a-col",{attrs:{span:16}},[t("a-form-item",{attrs:{label:"定时周期",labelCol:e.formItemLayout.labelCol,wrapperCol:e.formItemLayout.wrapperCol}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["timingCycle",{rules:[{required:e.showCyc,message:"输入数值"}]}],expression:"[\n                'timingCycle',\n                {\n                  rules: [{ required: showCyc, message: '输入数值' }],\n                },\n              ]"}],staticStyle:{width:"90%",float:"left"},attrs:{placeholder:"请输入"}}),t("label",{staticClass:"swi_label",staticStyle:{"margin-top":"0px"}},[e._v("秒")])],1)],1)],1)],1),t("div",{staticStyle:{width:"30%",margin:"20px auto"}},[t("a-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:e.saveForm}},[e._v("提交")]),t("a-button",{staticClass:"btn",staticStyle:{"margin-left":"20px"},on:{click:e.resetForm}},[e._v("重置")])],1)],1)],1)},s=[],o=(t("4160"),t("b0c0"),t("159b"),t("dde5")),n={data:function(){return{gatewayId:this.$route.query.gatewayId,gatewayName:this.$route.query.name,editType:this.$route.query.editType,subId:this.$route.query.id,formItemLayout:{labelCol:{span:6},wrapperCol:{span:18}},form:this.$form.createForm(this,{}),instanceId:"",deviceList:[],instanceList:[],showCyc:!0,paramList:[]}},mounted:function(){console.log("网关："+this.gatewayId),this.queryDeviceList(),"2"===this.editType&&this.querySubdevice()},methods:{queryDeviceList:function(){var e=this;o["a"].queryDeviceList({nodeType:"3",enableFlag:"1"}).then((function(a){var t=a.data;e.deviceList=t.data.pageBean.list}))},changeSubdevice:function(e){var a=this,t={gatewayId:this.gatewayId,deviceId:e};o["c"].queryInstanceList(t).then((function(e){var t=e.data;a.instanceList=t}))},changeInstance:function(e){var a=this,t=JSON.parse(e);console.log(t),this.instanceId=t.id;var r={driverId:t.driverId,groupCode:t.groupCode,paramType:22};o["e"].queryParam(r).then((function(e){var t=e.data,r=t.data.pageBean.list;r.forEach((function(e){var t=JSON.parse(e.dataJson);"4"===e.dataType&&(t=JSON.parse(e.dataJson).list),a.paramList.push({id:a.paramList.length+1,label:e.paramName,dataType:e.dataType,tag:e.paramTag,flag:"1"===e.propertyFlag,json:t})}))}))},caseStr:function(e){return"1"===e?e="int型数据":"2"===e?e="float型数据":"3"===e?e="double型数据":"6"===e&&(e="text型数据"),"请输入"+e},changeSend:function(e){this.showCyc="0"===e.target.value},querySubdevice:function(){var e=this;o["a"].querySubdevice({id:this.subId}).then((function(a){var t=a.data,r=t.data.pageBean.list[0];r.enableFlag="1"==r.enableFlag,e.showCyc="0"===r.dataSendMethod,e.changeSubdevice(r.deviceId),e.changeInstance(JSON.stringify({id:r.instanceId,driverId:r.driverId,groupCode:r.groupCode})),e.form.setFieldsValue(r),e.dyncInit(r.dataJson)}))},dyncInit:function(e){var a=this,t=JSON.parse(e),r={};for(var s in t)r[s]=t[s];setTimeout((function(){a.form.setFieldsValue(r)}),300)},resetForm:function(){this.form.resetFields()},saveForm:function(){var e=this,a=this.form.getFieldsValue();a.instanceId=this.instanceId,a.enableFlag=a.enableFlag?"1":"0",a.id=this.subId?this.subId:null,a.gatewayId=this.gatewayId;var t={};this.paramList.forEach((function(e){t[e.tag]=a[e.tag]})),a.dataJson=JSON.stringify(t),console.log(a),this.form.validateFields((function(t,r){t||o["a"].saveSubdevice(a).then((function(a){var t=a.data;console.log(t),t.serviceSuccess?(e.$message.success("保存成功"),e.$router.push({path:"/device/deviceMg/subDeviceList",query:{}}),e.resetForm()):e.$message.error("保存失败")}))}))}}},i=n,l=(t("9b9d"),t("0c7c")),d=Object(l["a"])(i,r,s,!1,null,"7e21f161",null);a["default"]=d.exports},"9b9d":function(e,a,t){"use strict";var r=t("1ade"),s=t.n(r);s.a}}]);