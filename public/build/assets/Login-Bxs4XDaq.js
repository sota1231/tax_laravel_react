import{j as e,W as p,Y as f,a as n}from"./app-CtIsrYJ3.js";import{T as i,I as l}from"./TextInput-C0gM_k4L.js";import{I as d}from"./InputLabel-CcVCy8Gn.js";import{P as h}from"./PrimaryButton-y-xyTRg3.js";import{G as j}from"./GuestLayout-wg9SH2wT.js";import"./ApplicationLogo-Nba6x0Cq.js";function b({className:r="",...a}){return e.jsx("input",{...a,type:"checkbox",className:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 "+r})}function F({status:r,canResetPassword:a}){const{data:t,setData:o,post:c,processing:u,errors:m,reset:x}=p({email:"",password:"",remember:!1}),g=s=>{s.preventDefault(),c(route("login"),{onFinish:()=>x("password")})};return e.jsxs(j,{children:[e.jsx(f,{title:"Log in"}),r&&e.jsx("div",{className:"mb-4 text-sm font-medium text-green-600",children:r}),e.jsxs("form",{onSubmit:g,children:[e.jsxs("div",{children:[e.jsx(d,{htmlFor:"email",value:"Email"}),e.jsx(i,{id:"email",type:"email",name:"email",value:t.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,onChange:s=>o("email",s.target.value)}),e.jsx(l,{message:m.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(d,{htmlFor:"password",value:"Password"}),e.jsx(i,{id:"password",type:"password",name:"password",value:t.password,className:"mt-1 block w-full",autoComplete:"current-password",onChange:s=>o("password",s.target.value)}),e.jsx(l,{message:m.password,className:"mt-2"})]}),e.jsx("div",{className:"mt-4 block",children:e.jsxs("label",{className:"flex items-center",children:[e.jsx(b,{name:"remember",checked:t.remember,onChange:s=>o("remember",s.target.checked)}),e.jsx("span",{className:"ms-2 text-sm text-gray-600",children:"Remember me"})]})}),e.jsxs("div",{className:"mt-4 flex items-center justify-end",children:[a&&e.jsx(n,{href:route("password.request"),className:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",children:"Forgot your password?"}),e.jsx(n,{href:route("register"),className:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",children:"新規登録"}),e.jsx(h,{className:"ms-4",disabled:u,children:"Log in"})]})]})]})}export{F as default};
