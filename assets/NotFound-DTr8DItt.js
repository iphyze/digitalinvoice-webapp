import{l as c,I as i,u as o,j as r}from"./index-SH_7ljxJ.js";import{S as d}from"./StatusPage-Df4MZa9I.js";import"./arrow-left-D1yajsA8.js";/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],u=c("search-x",h);function x(){const e=i().pathname,a=o(t=>t.isAuthenticated()),n=o(t=>t.nextPath()),s=e.length>90?`${e.slice(0,87)}…`:e;return r.jsx(d,{icon:u,code:"404 · Page not found",title:"This page doesn't exist",message:`We couldn't find ${s}. The link may have changed, or the address may have been mistyped.`,tone:"info",action:{label:a?"Return to your workspace":"Return to DigitalInvoice",to:a?n:"/"}})}export{x as default};
