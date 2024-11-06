import{W as o,j as e,a as d}from"./app-CZ1frffn.js";import{H as u}from"./Header.Layout-xkRuOFz_.js";import{F as p}from"./FormSelect-C9-D_l8Q.js";import{F as c}from"./FormInputField-yOO1rKkr.js";import{F as N}from"./FlashMessage-Dbgo0qEQ.js";const F=({kari_names:i,sortings:m})=>{const{data:l,setData:r,post:x,processing:j,errors:a}=o({day:"",balance:"",name:"",price:"",remarks:""}),b=s=>{s.preventDefault(),x(route("sorting"))};return e.jsx(u,{className:"bg-primary text-bg-primary",children:e.jsxs("div",{className:"container p-5",children:[e.jsx(N,{}),e.jsx("h2",{children:"簡易簿記"}),e.jsxs("form",{onSubmit:b,children:[e.jsxs("div",{className:"btn-group mb-3",role:"group",children:[e.jsx("button",{type:"button",className:`text-bold btn ${l.balance===0?"btn-warning":"btn-outline-warning"}`,onClick:()=>r("balance",0),children:"収入"}),e.jsx("button",{type:"button",className:`btn ${l.balance===1?"btn-warning":"btn-outline-warning"}`,onClick:()=>r("balance",1),children:"支出"})]}),a.balance&&e.jsx("div",{className:"text-danger mb-3",children:a.balance}),e.jsx("table",{className:"table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("label",{htmlFor:"day",children:"取引日時"}),e.jsx("span",{className:"required text-danger",children:"*"}),a.day&&e.jsx("dd",{className:"text-danger",children:a.day})]}),e.jsx("td",{children:e.jsx(c,{type:"date",name:"day",id:"day",value:l.day,onChange:s=>r("day",s.target.value)})})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("label",{htmlFor:"kari_name",children:"分類"}),e.jsx("span",{className:"required text-danger",children:"* "}),a.name_id&&e.jsx("dd",{className:"text-danger",children:a.name_id})]}),e.jsx("td",{children:e.jsx(p,{className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm",name:"name_id",value:l.name_id,onChange:s=>r("name_id",s.target.value),options:i.map(s=>({value:s.id,label:s.name}))})})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("label",{htmlFor:"kari_price",children:"金額"}),e.jsx("span",{className:"required text-danger",children:"*"}),a.price&&e.jsx("dd",{className:"text-danger",children:a.price})]}),e.jsx("td",{children:e.jsx(c,{type:"number",name:"price",placeholder:"1000",onChange:s=>r("price",s.target.value)})})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("label",{htmlFor:"remarks",children:"備考"}),e.jsx("span",{className:"required text-danger",children:"*"}),a.remarks&&e.jsx("dd",{className:"text-danger",children:a.remarks})]}),e.jsx("td",{children:e.jsx(c,{type:"text",name:"remarks",placeholder:"〇月家賃",onChange:s=>r("remarks",s.target.value)})})]})]})}),e.jsx("div",{className:"",children:e.jsx("div",{className:""})}),e.jsx("button",{type:"submit",className:"btn btn-primary px-4",disabled:j,children:"送信"})]}),e.jsxs("div",{className:"mt-8",children:[e.jsx("h3",{children:"仕分け一覧"}),e.jsx("div",{className:"pagination py-2",children:m.links.map((s,t)=>e.jsx(d,{href:s.url,className:`btn btn-sm ${s.active?"btn-primary":"btn-outline-primary"} mx-1`,dangerouslySetInnerHTML:{__html:s.label},preserveState:!0,preserveScroll:!0},t))}),e.jsxs("table",{className:"table table-striped table-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"bg-success-subtle",children:"ID"}),e.jsx("th",{className:"bg-success-subtle",children:"日付"}),e.jsx("th",{className:"bg-success-subtle",children:"項目名"}),e.jsx("th",{className:"bg-success-subtle",children:"金額"}),e.jsx("th",{className:"bg-danger-subtle",children:"備考"}),e.jsx("th",{}),e.jsx("th",{})]})}),e.jsx("tbody",{children:m.data.map((s,t)=>{var h;return e.jsxs("tr",{children:[e.jsx("td",{children:t+1}),e.jsx("td",{children:s.date}),e.jsx("td",{children:(h=i.find(n=>n.id===s.kari_name_id))==null?void 0:h.name}),e.jsxs("td",{children:[s.balance===0?"+":"-",s.kari_price]}),e.jsx("td",{children:s.remarks.length>10?`${s.remarks.slice(0,10)}...`:s.remarks}),e.jsx("td",{children:e.jsx(d,{href:route("edit",{id:s.id}),className:"btn btn-success btn-sm",children:"更新"})}),e.jsx("td",{children:e.jsx(d,{href:route("delete",{id:s.id}),className:"btn btn-danger btn-sm",onClick:n=>{n.preventDefault(),window.confirm("本当に削除しますか？")&&(window.location.href=route("delete",{id:s.id}))},children:"削除"})})]},t)})})]})]})]})})};export{F as default};
