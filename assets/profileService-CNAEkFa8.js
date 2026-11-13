import{l as t,a as r}from"./index-JXibIFtz.js";/**
 * @license lucide-react v1.11.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],p=t("smartphone",o),u={status:()=>r.get("/user/mfa"),setup:e=>r.post("/user/mfa-setup",{current_password:e}),confirm:e=>r.post("/user/mfa-confirm",{code:e}),disable:(e,s)=>r.post("/user/mfa-disable",{current_password:e,code:s}),regenerate:(e,s)=>r.post("/user/mfa-recovery-regenerate",{current_password:e,code:s})},c={getProfile:()=>r.get("/user/profile"),updateProfile:e=>r.put("/user/profile",e),changePassword:e=>r.put("/user/password",e)};export{p as S,u as m,c as p};
