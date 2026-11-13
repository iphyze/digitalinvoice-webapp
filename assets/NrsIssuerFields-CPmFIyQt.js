import{l as a,j as t}from"./index-CRbuQI0t.js";import{T as u}from"./TextField-Do8b4gfQ.js";import{H as r}from"./hash-BakM0s7P.js";import{M as N}from"./map-pin-BKHTok2B.js";/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],m=a("briefcase",_);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]],k=a("fingerprint-pattern",f);/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],v=a("globe",M);function I({form:o,errors:c={},onChange:i,idPrefix:d="issuer"}){const s=(e,x,p,n,h,l)=>t.jsx(u,{id:`${d}-${e}`,name:e,label:x,hint:p,placeholder:n,icon:h,maxLength:l,value:o[e]??"",onChange:y=>i(e,y.target.value),error:c[e],autoComplete:"off"},e);return t.jsxs(t.Fragment,{children:[s("nrs_business_id","NRS business ID (issued by NRS)","Optional UUID issued by NRS.","xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",k,36),s("nrs_service_id","NRS service ID (issued by NRS)","Optional 8-character alphanumeric ID.","8-character service ID",r,8),s("nrs_postal_zone","NRS postal zone","Postal code for the issuer address.","Postal code",N,20),s("nrs_state_code","NRS state code","Use the applicable NRS resource code.","State code from NRS",r,100),s("nrs_lga_code","NRS LGA code","Use the applicable NRS resource code.","LGA code from NRS",r,100)]})}export{m as B,v as G,I as N};
