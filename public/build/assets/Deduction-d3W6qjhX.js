import{W as j,j as e,a as d}from"./app-CtIsrYJ3.js";import{H as o}from"./Header.Layout-Bv1ycZxS.js";import{F as p}from"./FormSelect-Ga-QJp0O.js";import{F as t}from"./FormInputField-Cg32BD71.js";import{F as b}from"./FlashMessage-BIO-Lhex.js";const f=({deductions:c})=>{const{data:a,setData:l,post:i,processing:h,errors:r}=j({user_id:"",day:"",name:"",role:"",price:"",remarks:""}),m=s=>{s.preventDefault(),i(route("deduction"))};return e.jsx(o,{className:"bg-primary text-bg-primary",children:e.jsxs("div",{className:"container p-5",children:[e.jsx(b,{}),e.jsx("h2",{children:"控除登録画面"}),e.jsxs("form",{onSubmit:m,children:[e.jsx("table",{className:"table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("label",{htmlFor:"day",children:"取引日時"}),e.jsx("span",{className:"required text-danger",children:"*"}),r.day&&e.jsx("dd",{className:"text-danger",children:r.day})]}),e.jsx("td",{children:e.jsx(t,{type:"date",name:"day",id:"day",value:a.day,onChange:s=>l("day",s.target.value)})})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("label",{htmlFor:"name",children:"控除名"}),e.jsx("span",{className:"required text-danger",children:"*"}),r.name&&e.jsx("dd",{className:"text-danger",children:r.name})]}),e.jsx("td",{children:e.jsx(t,{type:"text",name:"name",value:a.name,onChange:s=>l("name",s.target.value)})})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("label",{htmlFor:"role",children:"控除種類"}),e.jsx("span",{className:"required text-danger",children:"*"})]}),e.jsx("td",{children:e.jsx(p,{name:"role",value:a.role,onChange:s=>l("role",s.target.value),options:[{value:"0",label:"通常の控除（社会保険料控除や扶養控除）"},{value:"1",label:"事業所得控除（青色申告してる方）"}]})})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("label",{htmlFor:"price",children:"金額"}),e.jsx("span",{className:"required text-danger",children:"*"}),r.price&&e.jsx("dd",{className:"text-danger",children:r.price})]}),e.jsx("td",{children:e.jsx(t,{type:"number",name:"price",placeholder:"1000",value:a.price,onChange:s=>l("price",s.target.value)})})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("label",{htmlFor:"remarks",children:"備考"}),e.jsx("span",{className:"required text-danger",children:"*"}),r.remarks&&e.jsx("dd",{className:"text-danger",children:r.remarks})]}),e.jsx("td",{children:e.jsx(t,{type:"text",name:"remarks",placeholder:"備考を入力",value:a.remarks,onChange:s=>l("remarks",s.target.value)})})]})]})}),e.jsx("button",{type:"submit",className:"btn btn-primary px-4",disabled:h,children:"送信"})]}),e.jsxs("div",{className:"mt-8",children:[e.jsx("h3",{children:"控除一覧"}),e.jsx("div",{className:"pagination py-2",children:c.links.map((s,n)=>e.jsx(d,{href:s.url,className:`btn btn-sm ${s.active?"btn-primary":"btn-outline-primary"} mx-1`,dangerouslySetInnerHTML:{__html:s.label},preserveState:!0,preserveScroll:!0},n))}),e.jsxs("table",{className:"table table-striped table-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"bg-success-subtle",children:"日付"}),e.jsx("th",{className:"bg-success-subtle",children:"控除名"}),e.jsx("th",{className:"bg-success-subtle",children:"控除種類"}),e.jsx("th",{className:"bg-success-subtle",children:"金額"}),e.jsx("th",{className:"bg-success-subtle",children:"備考"})]})}),e.jsx("tbody",{children:c.data.map((s,n)=>e.jsxs("tr",{children:[e.jsx("td",{children:s.date}),e.jsx("td",{children:s.name.length>10?`${s.name.slice(0,10)}...`:s.name}),e.jsx("td",{children:s.role===0?"通常の控除":"事業所得控除"}),e.jsx("td",{children:s.price}),e.jsx("td",{children:s.remarks.length>10?`${s.remarks.slice(0,10)}...`:s.remarks}),e.jsx("td",{children:e.jsx(d,{href:route("deduction_edit",{id:s.id}),className:"btn btn-success btn-sm",children:"更新"})}),e.jsx("td",{children:e.jsx(d,{href:route("deduction_delete",{id:s.id}),className:"btn btn-danger btn-sm",onClick:x=>{x.preventDefault(),window.confirm("本当に削除しますか？")&&(window.location.href=route("deduction_delete",{id:s.id}))},children:"削除"})})]},n))})]})]})]})})};export{f as default};
