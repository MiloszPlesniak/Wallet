"use strict";(self.webpackChunkwalet=self.webpackChunkwalet||[]).push([[533],{8938:function(e,t,a){a(2791);t.Z=a.p+"static/media/sprite.2e56cac306786fd27e390c09919be1af.svg"},319:function(e,t,a){a.d(t,{Z:function(){return ee}});var n=a(9434),o=a(3768),r=a(4716),i=a(9439),s=a(2791),c="ModalAddTransaction_switchBtn__EdJVd",d=a(8683),l=a(7630),u=a(1440),m=a(8182),p=a(8439),h=a(9924),f="SwitchIncomeExpense_toogleIncomeExpense__C5FeU",_="SwitchIncomeExpense_toogleIncomeExpense__text__kzxJ1",x="SwitchIncomeExpense_toogleIncomeExpense__text__income__uWa03",b="SwitchIncomeExpense_toogleIncomeExpense__text__expense__iBVv7",E=a(3329),y=(0,l.ZP)(u.Z)((function(e){e.theme;return{width:80,height:40,padding:4,overflow:"visible","& .MuiSwitch-switchBase":{margin:1,padding:0,"&.Mui-checked":{color:"#fff",transform:"translateX(34px)","& + .MuiSwitch-track":{opacity:1}}},"& .MuiSwitch-thumb":{backgroundColor:"#f4f4f4","&:before":{content:'""',position:"absolute",width:"100%",height:"100%",left:0,top:0,borderRadius:"50%"}},"& .MuiSwitch-track":{width:70,height:30,marginTop:4,borderRadius:17,backgroundColor:"transparent",border:"1px solid #E0E0E0",opacity:1,"&.Mui-checked":{opacity:1}}}})),g=function(e){var t=e.handleToogle,a=e.checked;return(0,E.jsxs)("div",{className:f,children:[(0,E.jsx)("p",{className:(0,m.Z)(_,a&&x),children:"Income"}),(0,E.jsx)(y,{checked:!a,onChange:function(){t()},color:"default",name:"expenseSwitch",inputProps:{"aria-label":"expense switch"},icon:(0,E.jsx)(p.Z,{style:{width:"44px",height:"44px",color:"#24CCA7",filter:"drop-shadow(0px 0px 6px #ffffff) drop-shadow(0px 4px 4px rgba(36, 204, 167, .8))"}}),checkedIcon:(0,E.jsx)(h.Z,{style:{width:"44px",height:"44px",color:"#FF6596",filter:"drop-shadow(0px 0px 6px #ffffff) drop-shadow(0px 4px 4px rgba(255, 101, 150, .8))   "}})}),(0,E.jsx)("p",{className:(0,m.Z)(_,!a&&b),children:"Expense"})]})},N=a(5987),j=a(7391),v=a(1799),T=a.n(v),S=a(1413),w=a(8096),M=a(7964),C=a(4387),P=a(5172),I="DropdownCategories_DropdownCategories__HvQ3N",B="DropdownCategories_DropdownCategories__MenuItem__TnAkl",Z=["Main expenses","Products","Car","Self care","Child care","Household products","Education","Leisure"],D=function(e){var t=(0,s.useState)(""),a=(0,i.Z)(t,2),n=a[0],o=a[1];return(0,E.jsx)("div",{className:I,children:(0,E.jsx)(w.Z,{fullWidth:!0,variant:"standard",bluronselect:"true",children:(0,E.jsx)(M.Z,{bluronselect:"true",labelId:"expense-category",id:"expense-category",displayEmpty:!0,value:n,onChange:function(t){o(t.target.value),e.handleSetCategory(t.target.value)},renderValue:function(e){return null!==e&&void 0!==e&&e.length?Array.isArray(e)?e.join(", "):e:"Select a category"},sx:(0,S.Z)({padding:"0 0 0 10px",color:"#BDBDBD"},n&&{color:"#000000"}),IconComponent:P.Z,MenuProps:{disableAutoFocusItem:!0,PaperProps:{style:{borderRadius:20,backgroundColor:"rgba(255, 255, 255, 0.7)",backdropFilter:"blur(25px)",boxShadow:"0px 6px 15px rgba(0, 0, 0, 0.1)"}},MenuListProps:{style:{paddingTop:0,paddingBottom:0}},marginThreshold:0},onClose:function(){setTimeout((function(){document.activeElement.blur()}),0)},children:Z.map((function(e){return(0,E.jsx)(C.Z,{value:e,className:B,children:e},e)}))})})})},k=a(7140),X=a(6534),F=a(5705),O=a(2276),A=a(9273),R=a(8007),H="TransactionForm_form__zbBr5",L="TransactionForm_form__dateTime__lB5rl",W="TransactionForm_form__dateTime__error__7kMoz",Y="TransactionForm_form__amount__lOFwU",z="TransactionForm_form__comment__0a6qe",V="TransactionForm_form__btn__Yt+Bw",q=(a(1778),["typeOfTransaction","secondButtonHandler","firstButtonText"]),K=[{id:"c9d9e447-1b83-4238-8712-edc77b18b739",name:"Main expenses",type:"EXPENSE"},{id:"27eb4b75-9a42-4991-a802-4aefe21ac3ce",name:"Products",type:"EXPENSE"},{id:"3caa7ba0-79c0-40b9-ae1f-de1af1f6e386",name:"Car",type:"EXPENSE"},{id:"bbdd58b8-e804-4ab9-bf4f-695da5ef64f4",name:"Self care",type:"EXPENSE"},{id:"76cc875a-3b43-4eae-8fdb-f76633821a34",name:"Child care",type:"EXPENSE"},{id:"128673b5-2f9a-46ae-a428-ec48cf1effa1",name:"Household products",type:"EXPENSE"},{id:"1272fcc4-d59f-462d-ad33-a85a075e5581",name:"Education",type:"EXPENSE"},{id:"c143130f-7d1e-4011-90a4-54766d4e308e",name:"Leisure",type:"EXPENSE"},{id:"719626f1-9d23-4e99-84f5-289024e437a8",name:"Other expenses",type:"EXPENSE"},{id:"3acd0ecd-5295-4d54-8e7c-d3908f4d0402",name:"Entertainment",type:"EXPENSE"},{id:"063f1132-ba5d-42b4-951d-44011ca46262",name:"Income",type:"INCOME"}],U=function(e){var t=e.typeOfTransaction,a=e.secondButtonHandler,o=e.firstButtonText,c=(0,N.Z)(e,q).handleBlur,d=(0,n.I0)(),l=(0,s.useState)(""),u=(0,i.Z)(l,2),m=u[0],p=u[1],h=(0,s.useState)("INCOME"),f=(0,i.Z)(h,2),_=f[0],x=f[1],b=(0,F.TA)({initialValues:{amount:0,transactionDate:new Date,comment:"",categoryId:"",type:""},validationSchema:X.Z,onSubmit:function(e){var t={amount:-Math.abs(e.amount),transactionDate:e.transactionDate,comment:e.comment,categoryId:e.categoryId||"c9d9e447-1b83-4238-8712-edc77b18b739",type:e.type},a={amount:Math.abs(e.amount),transactionDate:e.transactionDate,comment:e.comment,categoryId:"063f1132-ba5d-42b4-951d-44011ca46262",type:e.type};b.setFieldValue("date",e.transactionDate.valueOf()),d("INCOME"===_?(0,O.h4)(a):(0,O.h4)(t)),b.resetForm(),d((0,r.Kg)()),d(A.Ec)}});return(0,s.useEffect)((function(){var e;b.setFieldValue("categoryId",null===(e=K.find((function(e){return e.name===m})))||void 0===e?void 0:e.id)}),[m]),(0,s.useEffect)((function(){t?b.setFieldValue("type","INCOME"):b.setFieldValue("type","EXPENSE"),x(t?"INCOME":"EXPENSE")}),[t]),(0,E.jsxs)("form",{className:H,onSubmit:b.handleSubmit,children:[!t&&(0,E.jsx)(D,{handleSetCategory:p}),(0,E.jsxs)("div",{children:[(0,E.jsx)(j.Z,{className:Y,name:"amount",type:"number",placeholder:"0",inputProps:{style:{textAlign:"center",fontWeight:700}},value:b.values.amount,onChange:b.handleChange,onBlur:c,error:b.touched.amount&&Boolean(b.errors.amount),helperText:b.touched.amount?b.errors.amount:" ",FormHelperTextProps:{style:{top:"100%"}}}),(0,E.jsx)(T(),{controls:R.hT,dateFormat:"YYYY-MM-DD",timeFormat:!1,closeOnSelect:!0,inputProps:{className:L,name:"transactionDate"},initialValue:new Date,value:b.values.transactionDate,onChange:function(e){b.setFieldValue("transactionDate",e)},onBlur:c,error:b.touched.transactionDate&&Boolean(b.errors.transactionDate),helperText:b.touched.transactionDate?b.errors.transactionDate:""}),b.touched.transactionDate&&Boolean(b.errors.transactionDate)&&(0,E.jsx)("p",{className:W,children:b.errors.transactionDate})]}),(0,E.jsx)(j.Z,{className:z,name:"Comment",value:b.values.comment,onChange:function(e){b.setFieldValue("comment",e.target.value)},onBlur:c,error:b.touched.comment&&Boolean(b.errors.comment),helperText:b.touched.comment?b.errors.comment:" ",placeholder:"Comment",inputProps:{style:{padding:10}}}),(0,E.jsx)("div",{className:V,children:(0,E.jsx)(k.Z,{firstButtonType:"submit",firstButtonText:o,secondButtonText:"cancel",secondButtonHandler:a})})]})},Q=a(7380),J=function(e){var t=(0,s.useState)(!0),a=(0,i.Z)(t,2),o=a[0],l=a[1],u=(0,n.v9)(Q.IZ),m=(0,n.I0)();return(0,s.useEffect)((function(){m((0,O.oQ)())}),[m]),(0,E.jsxs)(d.Z,{title:"Add transaction",open:u,onClose:function(){return m((0,r.Kg)())},children:[(0,E.jsx)("div",{className:c,children:(0,E.jsx)(g,{handleToogle:function(){l(!o)},checked:o})}),(0,E.jsx)(U,{typeOfTransaction:o,firstButtonText:"add",secondButtonHandler:function(){return m((0,r.Kg)())}})]})},G="ButtonAddTransactions_ButtonAddTransactions__12-vB",$="ButtonAddTransactions_ButtonAddTransactions__plus__-SXvm",ee=function(){var e=(0,n.I0)();return(0,E.jsxs)("div",{children:[(0,E.jsx)(o.Z,{title:"Add transaction",placement:"top",arrow:!0,children:(0,E.jsx)("button",{type:"button",onClick:function(){e((0,r.Kg)())},className:G,children:(0,E.jsx)("p",{className:$,children:"+"})})}),(0,E.jsx)(J,{})]})}},7140:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(5987),o=a(6151),r="Buttons_Buttons__uhWXN",i="Buttons_Buttons__button__7dqbx",s=a(3329),c=["firstButtonType","secondButtonType"],d=function(e){var t=e.firstButtonType,a=void 0===t?"button":t,d=e.secondButtonType,l=void 0===d?"button":d,u=(0,n.Z)(e,c);return(0,s.jsxs)("div",{className:r,children:[(0,s.jsx)(o.Z,{variant:"contained",type:a,className:i,onClick:u.firstButtonHandler,children:u.firstButtonText.toString()}),(0,s.jsx)(o.Z,{variant:"outlined",type:l,className:i,onClick:u.secondButtonHandler,color:"secondary",sx:{color:"secondary.main",backgroundColor:"transparent"},children:u.secondButtonText.toString()})]})}},8683:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(5391),o=a(3400),r=a(9823),i={ModalTemplate__container:"ModalTemplate_ModalTemplate__container__k5r6S",ModalTemplate__header:"ModalTemplate_ModalTemplate__header__otUUK",ModalTemplate__header__close:"ModalTemplate_ModalTemplate__header__close__vWIAx"},s=a(3329),c=function(e){var t=e.children,a=e.open,c=e.onClose,d=e.title;return(0,s.jsx)(n.Z,{open:a,onClose:c,"aria-labelledby":"modal-template","aria-describedby":"modal-template",children:(0,s.jsxs)("div",{className:i.ModalTemplate__container,children:[(0,s.jsxs)("div",{className:i.ModalTemplate__header,children:[(0,s.jsx)("p",{id:"modal-template",children:d}),(0,s.jsx)(o.Z,{className:i.ModalTemplate__close,"aria-label":"close",onClick:c,sx:{position:"absolute",right:8,top:8,color:"text.secondary","@media screen and (max-width: 768px)":{display:"none"}},children:(0,s.jsx)(r.Z,{})})]}),t]})})}},1523:function(e,t,a){a.r(t),a.d(t,{default:function(){return K}});var n=a(2791),o=a(1971),r=a(9434),i=a(2276),s=a(1304),c="Table_Table__text__cITGZ",d=a(6073),l="TableMobile_TableMobile__0bmgt",u=a(4716),m=a(5888),p=a(6151),h="EditIcon_iconContainer__PekQF",f="EditIcon_iconContainer__img__d-f5o",_=a(8938),x=a(3329);function b(){return(0,x.jsx)("div",{className:h,children:(0,x.jsx)("svg",{className:f,children:(0,x.jsx)("use",{href:"".concat(_.Z,"#icon-edit")})})})}var E=a(7630),y="TableMobileRow_income__mLEOe",g="TableMobileRow_expense__Y-vOp",N="TableMobileRow_TableRowMobile__AXZQ7",j="TableMobileRow_TableRowMobile__stripeIncome__1HNsP",v="TableMobileRow_TableRowMobile__stripeExpense__OKHbq",T="TableMobileRow_TableRowMobile__element__vzMAO",S="TableMobileRow_TableRowMobile__key__XYWhd",w="TableMobileRow_TableRowMobile__value__+hbtn",M="TableMobileRow_DeleteButton__Text__gvyAc",C="TableMobileRow_EditButton__Text__L4ztp",P=(0,E.ZP)(p.Z)((function(e){e.theme;return{height:26,marginBottom:0,padding:"0px",gap:8,fontFamily:"Circe",fontSize:14,textTransform:"capitalize",borderRadius:4,backgroundColor:"transparent",color:"#000"}})),I=(0,E.ZP)(p.Z)((function(e){e.theme;return{marginBottom:0,fontFamily:"Circe",fontWeight:400,fontSize:"14px",lineHeight:"1em",textTransform:"capitalize",width:"67px",height:"26px",padding:"4px 12px"}}));function B(e){var t=e.transaction,a=(0,r.I0)(),n=new Date(t.transactionDate),o={day:String(n.getDate()).padStart(2,"0"),month:String(n.getMonth()+1).padStart(2,"0"),year:n.getYear()>100?n.getYear()-100:n.getYear()},s=[{id:"c9d9e447-1b83-4238-8712-edc77b18b739",name:"Main expenses",type:"EXPENSE"},{id:"27eb4b75-9a42-4991-a802-4aefe21ac3ce",name:"Products",type:"EXPENSE"},{id:"3caa7ba0-79c0-40b9-ae1f-de1af1f6e386",name:"Car",type:"EXPENSE"},{id:"bbdd58b8-e804-4ab9-bf4f-695da5ef64f4",name:"Self care",type:"EXPENSE"},{id:"76cc875a-3b43-4eae-8fdb-f76633821a34",name:"Child care",type:"EXPENSE"},{id:"128673b5-2f9a-46ae-a428-ec48cf1effa1",name:"Household products",type:"EXPENSE"},{id:"1272fcc4-d59f-462d-ad33-a85a075e5581",name:"Education",type:"EXPENSE"},{id:"c143130f-7d1e-4011-90a4-54766d4e308e",name:"Leisure",type:"EXPENSE"},{id:"719626f1-9d23-4e99-84f5-289024e437a8",name:"Other expenses",type:"EXPENSE"},{id:"3acd0ecd-5295-4d54-8e7c-d3908f4d0402",name:"Entertainment",type:"EXPENSE"},{id:"063f1132-ba5d-42b4-951d-44011ca46262",name:"Income",type:"INCOME"}],c="EXPENSE"===t.type?g:y,d="EXPENSE"===t.type?v:j,l=s.filter((function(e){return e.id===t.categoryId}))[0].name;return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("div",{className:N,children:[(0,x.jsxs)("div",{className:T,children:[(0,x.jsx)("span",{className:S,children:"Date"}),(0,x.jsx)("span",{className:w,children:"".concat(o.day,".").concat(o.month,".").concat(o.year)})]}),(0,x.jsxs)("div",{className:T,children:[(0,x.jsx)("span",{className:S,children:"Type"}),(0,x.jsx)("span",{className:w,children:"EXPENSE"===t.type?"-":"+"})]}),(0,x.jsxs)("div",{className:T,children:[(0,x.jsx)("span",{className:S,children:"Category"}),(0,x.jsx)("span",{className:w,children:l})]}),(0,x.jsxs)("div",{className:T,children:[(0,x.jsx)("span",{className:S,children:" Comment"}),(0,x.jsx)("span",{className:w,children:t.comment})]}),(0,x.jsxs)("div",{className:T,children:[(0,x.jsx)("span",{className:S,children:"Sum"}),(0,x.jsx)("span",{className:c,children:Math.abs(t.amount)})]}),(0,x.jsxs)("div",{className:T,children:[(0,x.jsx)(I,{disableElevation:!0,variant:"contained",type:"button",onClick:function(){return e=t.id,void a((0,i.aI)(e));var e},children:(0,x.jsx)("span",{className:M,children:"Delete"})}),(0,x.jsxs)(P,{type:"button","aria-label":"edit",onClick:function(){var e;e=t.type,a((0,m.I0)(t)),a((0,u.LM)(e))},children:[(0,x.jsx)(b,{}),(0,x.jsx)("span",{className:C,children:"Edit"})]})]}),(0,x.jsx)("div",{className:d})]})})}var Z=a(319);function D(e){var t=e.transactions;return(0,x.jsxs)("div",{className:l,children:[t.map((function(e){return(0,x.jsx)(B,{transaction:e},e.id)})),(0,x.jsx)(Z.Z,{})]})}var k="TableDesktop_container__nla-h",X="TableDesktop_Table__xAH5l",F="TableDesktop_Table__container__H7Gtt",O="TableDesktop_Table__headerBackground__WRnJp",A="TableDesktop_Table__headContainer__PWEwO",R=a(3400),H="TableDesktopRow_income__tNWtO",L="TableDesktopRow_expense__esWIC",W="TableDesktopRow_stack__4hDh3",Y="TableDesktopRow_editIcon__LivUc",z=(0,E.ZP)(p.Z)((function(e){e.theme;return{margin:0,fontFamily:"Circe",fontWeight:400,fontSize:"14px",lineHeight:"1em",textTransform:"capitalize",width:"67px",height:"26px",padding:"4px 12px"}}));function V(e){var t=e.transaction,a=(0,r.I0)(),n=new Date(t.transactionDate),o={day:String(n.getDate()).padStart(2,"0"),month:String(n.getMonth()+1).padStart(2,"0"),year:n.getYear()>100?n.getYear()-100:n.getYear()},s=[{id:"c9d9e447-1b83-4238-8712-edc77b18b739",name:"Main expenses",type:"EXPENSE"},{id:"27eb4b75-9a42-4991-a802-4aefe21ac3ce",name:"Products",type:"EXPENSE"},{id:"3caa7ba0-79c0-40b9-ae1f-de1af1f6e386",name:"Car",type:"EXPENSE"},{id:"bbdd58b8-e804-4ab9-bf4f-695da5ef64f4",name:"Self care",type:"EXPENSE"},{id:"76cc875a-3b43-4eae-8fdb-f76633821a34",name:"Child care",type:"EXPENSE"},{id:"128673b5-2f9a-46ae-a428-ec48cf1effa1",name:"Household products",type:"EXPENSE"},{id:"1272fcc4-d59f-462d-ad33-a85a075e5581",name:"Education",type:"EXPENSE"},{id:"c143130f-7d1e-4011-90a4-54766d4e308e",name:"Leisure",type:"EXPENSE"},{id:"719626f1-9d23-4e99-84f5-289024e437a8",name:"Other expenses",type:"EXPENSE"},{id:"3acd0ecd-5295-4d54-8e7c-d3908f4d0402",name:"Entertainment",type:"EXPENSE"},{id:"063f1132-ba5d-42b4-951d-44011ca46262",name:"Income",type:"INCOME"}],c="EXPENSE"===t.type?L:H,d=s.filter((function(e){return e.id===t.categoryId}))[0].name;return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{"data-type":"date",children:"".concat(o.day,".").concat(o.month,".").concat(o.year)}),(0,x.jsx)("td",{"data-type":"type",children:"EXPENSE"===t.type?"-":"+"}),(0,x.jsx)("td",{children:d}),(0,x.jsx)("td",{"data-type":"comment",children:t.comment}),(0,x.jsx)("td",{"data-type":"sum",className:c,children:Math.abs(t.amount)}),(0,x.jsx)("td",{"data-type":"edit",children:(0,x.jsxs)("div",{className:W,children:[(0,x.jsx)(R.Z,{type:"button","aria-label":"edit",onClick:function(){var e;e=t.type,a((0,m.I0)(t)),a((0,u.LM)(e))},children:(0,x.jsx)(b,{className:Y})}),(0,x.jsx)(z,{disableElevation:!0,variant:"contained",type:"button",onClick:function(){return e=t.id,void a((0,i.aI)(e));var e},children:"Delete"})]})})]})})}function q(e){var t=e.transactions;return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("div",{className:k,children:(0,x.jsxs)("div",{className:F,children:[(0,x.jsx)("div",{className:O}),t.length>0&&(0,x.jsxs)("table",{className:X,children:[(0,x.jsx)("thead",{className:A,children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{"data-type":"date",children:"date"}),(0,x.jsx)("th",{"data-type":"type",children:"type"}),(0,x.jsx)("th",{children:"category"}),(0,x.jsx)("th",{"data-type":"comment",children:"comment"}),(0,x.jsx)("th",{"data-type":"sum",children:"sum"}),(0,x.jsx)("th",{}),(0,x.jsx)("th",{})]})}),(0,x.jsx)("tbody",{children:t.map((function(e){return(0,x.jsx)(V,{transaction:e},e.id)}))})]})]})})})}function K(){var e=(0,r.I0)(),t=(0,r.v9)(s.ig)||[];return(0,n.useEffect)((function(){e((0,i.mC)())}),[e]),(0,x.jsx)(x.Fragment,{children:0===t.length?(0,x.jsx)("div",{className:c,children:"No Transactions to show. Add some below!"}):(0,x.jsx)(o.Z,{queries:d.A,children:function(e){return(0,x.jsxs)(x.Fragment,{children:[e.mobile&&(0,x.jsx)(D,{transactions:t}),(e.desktop||e.tablet)&&(0,x.jsx)(q,{transactions:t})]})}})})}},7380:function(e,t,a){a.d(t,{E:function(){return r},IZ:function(){return o},Io:function(){return i},oz:function(){return s},xU:function(){return n}});var n=function(e){return e.global.isLoading},o=function(e){return e.global.isModalAddTransactionOpen},r=function(e){return e.global.isModalLogoutOpen},i=function(e){return e.global.isModalEditTransactionOpen.open},s=function(e){return e.global.isModalEditTransactionOpen.type}},1304:function(e,t,a){a.d(t,{WL:function(){return o},ig:function(){return n}});var n=function(e){return e.finances.transactions},o=function(e){return e.finances.selectedTransaction}},6073:function(e,t,a){a.d(t,{A:function(){return n}});var n={mobile:"(max-width: 767px)",tablet:"(min-width: 768px) and (max-width: 1279px)",desktop:"(min-width: 1280px)"}},6534:function(e,t,a){var n=a(8007),o=/^\d+(\.\d{0,2})?$/,r=n.Ry().shape({amount:n.Rx("Amount must be a number").required("Amount is required").positive("Amount must be positive").test("two-digits-after-comma","Amount must have at most two digits after comma",(function(e){return!e||o.test(e.toString())})),transactionDate:n.hT().required("Date is required"),category:n.Z_().optional(),comment:n.Z_().optional(),type:n.Z_().required("Type is required").oneOf(["INCOME","EXPENSE"])});t.Z=r}}]);
//# sourceMappingURL=533.af768694.chunk.js.map