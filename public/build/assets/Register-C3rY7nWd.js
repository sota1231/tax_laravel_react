import{W as c,j as e,Y as p,a as x}from"./app-CtIsrYJ3.js";import{T as t,I as m}from"./TextInput-C0gM_k4L.js";import{I as l}from"./InputLabel-CcVCy8Gn.js";import{P as f}from"./PrimaryButton-y-xyTRg3.js";import{G as w}from"./GuestLayout-wg9SH2wT.js";import"./ApplicationLogo-Nba6x0Cq.js";function b(){const{data:a,setData:r,post:i,processing:n,errors:o,reset:d}=c({name:"",email:"",password:"",password_confirmation:"",role:"1"}),u=s=>{s.preventDefault(),i(route("register"),{onFinish:()=>d("password","password_confirmation")})};return e.jsxs(w,{children:[e.jsx(p,{title:"Register"}),e.jsxs("form",{onSubmit:u,children:[e.jsxs("div",{children:[e.jsx(l,{htmlFor:"name",value:"Name"}),e.jsx(t,{id:"name",name:"name",value:a.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,onChange:s=>r("name",s.target.value),required:!0}),e.jsx(m,{message:o.name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"email",value:"Email"}),e.jsx(t,{id:"email",type:"email",name:"email",value:a.email,className:"mt-1 block w-full",autoComplete:"username",onChange:s=>r("email",s.target.value),required:!0}),e.jsx(m,{message:o.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"password",value:"Password"}),e.jsx(t,{id:"password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full",autoComplete:"new-password",onChange:s=>r("password",s.target.value),required:!0}),e.jsx(m,{message:o.password,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"password_confirmation",value:"Confirm Password"}),e.jsx(t,{id:"password_confirmation",type:"password",name:"password_confirmation",value:a.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:s=>r("password_confirmation",s.target.value),required:!0}),e.jsx(m,{message:o.password_confirmation,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"role",value:"role"}),e.jsx(t,{id:"role",type:"number",name:"role",value:a.role,className:"mt-1 block w-full",autoComplete:"new-password",onChange:s=>r("role",s.target.value),required:!0}),e.jsx(m,{message:o.password,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 flex items-center justify-end",children:[e.jsx(x,{href:route("login"),className:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",children:"Already registered?"}),e.jsx(f,{className:"ms-4",disabled:n,children:"Register"})]})]})]})}export{b as default};
