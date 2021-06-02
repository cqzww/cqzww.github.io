(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-518b56d2"],{1695:function(e,a,r){},ace3:function(e,a,r){"use strict";r.r(a);var t=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",[r("a-card",[r("a-form",{attrs:{form:e.form,layout:"horizontal"}},[r("a-row",[r("a-col",{attrs:{span:16}},[r("a-form-item",{attrs:{label:"驱动名称",labelCol:e.formItemLayout.labelCol,wrapperCol:e.formItemLayout.wrapperCol}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["driverName",{rules:[{required:!0,message:"请输入驱动名称"}]}],expression:"[\n                'driverName',\n                { rules: [{ required: true, message: '请输入驱动名称' }] },\n              ]"}],attrs:{disabled:"",placeholder:"请输入"}})],1)],1)],1),r("a-row",[r("a-col",{attrs:{span:16}},[r("a-form-item",{attrs:{label:"驱动标识",labelCol:e.formItemLayout.labelCol,wrapperCol:e.formItemLayout.wrapperCol}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["driverId",{rules:[{required:!0,message:"请输入驱动标识"}]}],expression:"[\n                'driverId',\n                { rules: [{ required: true, message: '请输入驱动标识' }] },\n              ]"}],attrs:{disabled:"",placeholder:"请输入"}})],1)],1)],1),r("a-row",[r("a-col",{attrs:{span:16}},[r("a-form-item",{staticClass:"tips",attrs:{label:"驱动上传",labelCol:e.formItemLayout.labelCol,wrapperCol:e.formItemLayout.wrapperCol}},[r("a-upload",{attrs:{name:"file",multiple:!1,fileList:e.fileList,showUploadList:{showRemoveIcon:!1,showDownloadIcon:!0}},on:{download:e.handleDownload}},[r("a-button",{attrs:{disabled:""}},[r("a-icon",{attrs:{type:"upload"}}),e._v("上传文件")],1)],1),r("span",{staticClass:"greybb"})],1)],1)],1),r("a-row",[r("a-col",{attrs:{span:16}},[r("a-form-item",{attrs:{label:"驱动版本",labelCol:e.formItemLayout.labelCol,wrapperCol:e.formItemLayout.wrapperCol}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["driverVersion",{rules:[{required:!0,message:"请输入驱动名称"}]}],expression:"[\n                'driverVersion',\n                { rules: [{ required: true, message: '请输入驱动名称' }] },\n              ]"}],attrs:{disabled:"",placeholder:"请输入"}})],1)],1)],1),r("a-row",[r("a-col",{attrs:{span:16}},[r("a-form-item",{attrs:{label:"驱动适用网关类型",labelCol:e.formItemLayout.labelCol,wrapperCol:e.formItemLayout.wrapperCol}},[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["productIds",{rules:[{required:!0,message:"驱动适用网关类型"}]}],expression:"[\n                'productIds',\n                { rules: [{ required: true, message: '驱动适用网关类型' }] },\n              ]"}],attrs:{disabled:"",placeholder:"请选择",mode:"multiple"}},e._l(e.productList,(function(a){return r("a-select-option",{key:a.id,attrs:{value:a.id}},[e._v(" "+e._s(a.productName)+" ")])})),1)],1)],1)],1),r("a-row",[r("a-col",{attrs:{span:16}},[r("a-form-item",{attrs:{label:"驱动适用子协议",labelCol:e.formItemLayout.labelCol,wrapperCol:e.formItemLayout.wrapperCol}},[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["subprotoIds",{rules:[{required:!0,message:"驱动适用子协议"}]}],expression:"[\n                'subprotoIds',\n                { rules: [{ required: true, message: '驱动适用子协议' }] },\n              ]"}],attrs:{placeholder:"请选择",mode:"multiple"}},e._l(e.protoList,(function(a){return r("a-select-option",{key:a.id,attrs:{value:a.id}},[e._v(" "+e._s(a.name)+" ")])})),1)],1)],1)],1),r("a-row",[r("a-col",{attrs:{span:16}},[r("a-form-item",{attrs:{label:"驱动参数模型",labelCol:e.formItemLayout.labelCol,wrapperCol:e.formItemLayout.wrapperCol,required:""}},[r("a-button",{staticStyle:{color:"#1abc9c"},attrs:{disabled:"",icon:"plus"}},[e._v("添加参数")]),r("a-table",{attrs:{columns:e.columns,"data-source":e.dataSource,size:"small",pagination:!1},scopedSlots:e._u([{key:"paramType",fn:function(a){return r("span",{},[21==a?r("label",{key:a},[e._v("驱动实例化参数")]):22==a?r("label",{key:a},[e._v("子设备连接参数")]):e._e()])}},{key:"dataType",fn:function(a){return r("span",{},[e._v(" "+e._s(e.CollectionLabel("PARAMDATATYPE",a))+" ")])}},{key:"action",fn:function(a,t){return[r("div",[r("a",{staticStyle:{"margin-right":"8px"},attrs:{disabled:""},on:{click:function(a){return e.editRow(t)}}},[e._v(" 编辑 ")]),r("a",{attrs:{disabled:""},on:{click:function(a){return e.remove(t.key)}}},[e._v(" 删除 ")])])]}}])})],1)],1)],1),r("a-row",[r("a-col",{attrs:{span:16}},[r("a-form-item",{attrs:{label:"启动/停用",labelCol:e.formItemLayout.labelCol,wrapperCol:e.formItemLayout.wrapperCol}},[r("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["enableFlag",{valuePropName:"checked",rules:[{required:!0,message:"请选择"}],initialValue:!0}],expression:"[\n                'enableFlag',\n                {\n                  valuePropName: 'checked',\n                  rules: [{ required: true, message: '请选择' }],\n                  initialValue: true,\n                },\n              ]"}],attrs:{disabled:""}})],1)],1)],1),r("a-row",[r("a-col",{attrs:{span:16}},[r("a-form-item",{attrs:{label:"备注",labelCol:e.formItemLayout.labelCol,wrapperCol:e.formItemLayout.wrapperCol}},[r("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["description"],expression:"['description']"}],attrs:{disabled:"",rows:4,placeholder:"请输入"}})],1)],1)],1)],1)],1),e.showEditProduct?r("a-modal",{attrs:{title:1==e.paramJson.editType?"添加参数":"编辑参数",width:800,visible:e.showEditProduct},on:{ok:e.ok,cancel:e.cancel}},[r("param-model",{ref:"parentForm",attrs:{paramJson:e.paramJson,groups:e.groups}})],1):e._e()],1)},o=[],l=(r("4160"),r("b0c0"),r("d3b7"),r("3ca3"),r("159b"),r("ddb0"),r("2b3d"),r("4bbb")),s=r("dde5"),i=[{title:"分组名",dataIndex:"groupName"},{title:"分组编码",dataIndex:"groupCode"},{title:"参数类型",dataIndex:"paramType",scopedSlots:{customRender:"paramType"}},{title:"参数名",dataIndex:"paramName"},{title:"标识符",dataIndex:"paramTag"},{title:"数据类型",dataIndex:"dataType",scopedSlots:{customRender:"dataType"}},{title:"操作",scopedSlots:{customRender:"action"}}],n={components:{ParamModel:l["a"]},data:function(){return{form:this.$form.createForm(this,{}),formItemLayout:{labelCol:{span:6},wrapperCol:{span:18}},columns:i,showEditProduct:!1,productList:[],protoList:[],driId:this.$route.query.id,editType:"1",dataSource:[],paramJson:{},rowId:0,groups:[],fileList:[]}},mounted:function(){this.queryProduct(),this.querySubproto(),this.editType=this.driId?"2":"1","2"===this.editType&&(this.queryDriverInfo(this.driId),this.queryParam(this.driId))},methods:{ok:function(){this.$refs.parentForm.saveForm()},cancel:function(){this.showEditProduct=!1},handleDownload:function(e){var a=this,r={name:this.fileList[0].name,url:this.fileList[0].url};s["c"].downloadFile(r).then((function(e){var a=e.data,t=new Blob([a]);if("download"in document.createElement("a")){var o=document.createElement("a");o.download=r.name,o.style.display="none",o.href=URL.createObjectURL(t),document.body.appendChild(o),o.click(),URL.revokeObjectURL(o.href),document.body.removeChild(o)}else navigator.msSaveBlob(t,r.name)})).catch((function(){a.$message.error("下载失败,请联系管理员")}))},queryProduct:function(){var e=this,a={enableFlag:"1",nodeType:"2"};s["f"].queryProduct(a).then((function(a){var r=a.data;r.serviceSuccess&&(e.productList=r.data.pageBean.list)}))},queryParam:function(e){var a=this,r={driverId:e};s["e"].queryParam(r).then((function(e){var r=e.data;r.serviceSuccess&&(a.dataSource=r.data.pageBean.list,a.dataSource.forEach((function(e,r){e.key=r+1,a.groups.push({groupName:e.groupName,groupCode:e.groupCode})})))}))},queryDriverInfo:function(e){var a=this;s["c"].queryDriver({id:e}).then((function(e){var r=e.data;if(r.serviceSuccess){var t=r.data.pageBean.list[0];t.enableFlag="1"==t.enableFlag,t.productIds=JSON.parse("["+t.productIds+"]"),t.subprotoIds=JSON.parse("["+t.subprotoIds+"]"),a.fileList=[{uid:"-1",status:"done",name:t.jarName,url:t.jarUrl}],a.form.setFieldsValue(t)}}))},querySubproto:function(){var e=this;s["a"].querySubDeviceProto({enableFlag:"1"}).then((function(a){var r=a.data;r.serviceSuccess&&(e.protoList=r.data.pageBean.list)}))}}},d=n,u=(r("cd99"),r("0c7c")),c=Object(u["a"])(d,t,o,!1,null,"56e13aa1",null);a["default"]=c.exports},cd99:function(e,a,r){"use strict";var t=r("1695"),o=r.n(t);o.a}}]);