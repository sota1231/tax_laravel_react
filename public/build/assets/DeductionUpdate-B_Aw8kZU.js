import{W as x,j as e}from"./app-CtIsrYJ3.js";import{H as m}from"./Header.Layout-Bv1ycZxS.js";import{F as h}from"./FormSelect-Ga-QJp0O.js";import{F as n}from"./FormInputField-Cg32BD71.js";const b=({deductions:r,errors:s})=>{const{data:t,setData:l,post:d,processing:i}=x({id:r.id,user_id:r.user_id,day:r.date,name:r.name,role:r.role,price:r.price,remarks:r.remarks}),c=a=>{a.preventDefault(),d(route("deduction_update"))};return e.jsx(m,{className:"bg-success text-bg-success",children:e.jsxs("div",{className:"container p-5",children:[e.jsx("h2",{children:"控除編集画面"}),e.jsxs("form",{onSubmit:c,children:[e.jsx("input",{type:"hidden",name:"id",value:t.id}),e.jsx("input",{type:"hidden",name:"user_id",value:t.user_id}),e.jsx("table",{className:"table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("label",{htmlFor:"day",children:"取引日時"}),e.jsx("span",{className:"required text-danger",children:"*"}),s.day&&e.jsx("dd",{className:"text-danger",children:s.day})]}),e.jsx("td",{children:e.jsx(n,{type:"date",name:"day",id:"day",value:t.day,onChange:a=>l("day",a.target.value)})})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("label",{htmlFor:"name",children:"控除名"}),e.jsx("span",{className:"required text-danger",children:"*"}),s.name&&e.jsx("dd",{className:"text-danger",children:s.name})]}),e.jsx("td",{children:e.jsx(n,{type:"text",name:"name",value:t.name,onChange:a=>l("name",a.target.value)})})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("label",{htmlFor:"role",children:"控除種類"}),e.jsx("span",{className:"required text-danger",children:"*"})]}),e.jsx("td",{children:e.jsx(h,{name:"role",value:t.role,onChange:a=>l("role",a.target.value),options:[{value:"0",label:"通常の控除（社会保険料控除や扶養控除）"},{value:"1",label:"事業所得控除（青色申告してる方）"}]})})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("label",{htmlFor:"price",children:"金額"}),e.jsx("span",{className:"required text-danger",children:"*"}),s.price&&e.jsx("dd",{className:"text-danger",children:s.price})]}),e.jsx("td",{children:e.jsx(n,{type:"number",name:"price",placeholder:"1000",value:t.price,onChange:a=>l("price",a.target.value)})})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("label",{htmlFor:"remarks",children:"備考"}),e.jsx("span",{className:"required text-danger",children:"*"}),s.remarks&&e.jsx("dd",{className:"text-danger",children:s.remarks})]}),e.jsx("td",{children:e.jsx(n,{type:"text",name:"remarks",placeholder:"備考を入力",value:t.remarks,onChange:a=>l("remarks",a.target.value)})})]})]})}),e.jsx("button",{className:"btn btn-success px-4",type:"submit",disabled:i,children:"編集"}),e.jsx("button",{className:"btn btn-dark px-4 mx-2",type:"button",onClick:()=>window.history.back(),children:"戻る"})]})]})})};export{b as default};
