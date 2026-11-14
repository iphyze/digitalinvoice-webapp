import{l as t,a as o}from"./index-SH_7ljxJ.js";/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]],n=t("banknote",a),p={list:e=>o.get("/payments",{params:e}),show:e=>o.get("/payments/show",{params:{id:e}}),document:e=>o.get("/payments/document",{params:{id:e}}),sendToCustomer:e=>o.post("/payments/send",e),organizationLogo:()=>o.get("/organization/logo",{responseType:"blob"}),record:e=>o.post("/payments",e),allocate:e=>o.post("/payments/allocate",e),void:e=>o.post("/payments/void",e)};export{n as B,p};
