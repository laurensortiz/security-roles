(this["webpackJsonp@cos/security-roles-example"]=this["webpackJsonp@cos/security-roles-example"]||[]).push([[0],{104:function(e,t,a){},106:function(e,t,a){"use strict";a.r(t);a(58);var r=a(0),n=a.n(r),o=a(12),i=a.n(o),l=a(45),s=a(46),d=a(53),c=a(52),p=a(35),m=a(13),u=a(108),f=a(50),g=a(111),h=a(112),R=a(109),I=a(110),E=a(47),v=a.n(E),y=a(19),D=a.n(y),b=a(24),C=a(14),M=a(31),L=a.n(M);function U(){var e=Object(m.a)(["\n  display: block;\n  width: 100%;\n  color: #e66c1f;\n  text-align: right;\n  margin-top: 5px;\n"]);return U=function(){return e},e}function w(){var e=Object(m.a)(["\n  color: #545454;\n  line-height:1;\n  margin-bottom: 0;\n"]);return w=function(){return e},e}function A(){var e=Object(m.a)(["\n  color: #545454;\n  line-height:1;\n  margin-bottom: 0;\n"]);return A=function(){return e},e}function x(){var e=Object(m.a)(["\n    color: #0077AC !important;\n    cursor: pointer;\n    font-size: 16px;\n"]);return x=function(){return e},e}function K(){var e=Object(m.a)(["\n  color: #ffffff !important;\n  margin-right: 0 !important;\n"]);return K=function(){return e},e}function k(){var e=Object(m.a)(["\nmargin-bottom: 10px;\ntext-align: right"]);return k=function(){return e},e}function S(){var e=Object(m.a)(["\n  margin-right: 10px;\n"]);return S=function(){return e},e}function N(){var e=Object(m.a)(["\n  color: #008a60 !important;\n  font-size: 16px;\n"]);return N=function(){return e},e}function O(){var e=Object(m.a)(["\n  color: #0077ac !important;\n  cursor: pointer;\n  font-size: 16px;\n"]);return O=function(){return e},e}function j(){var e=Object(m.a)(["\n  padding-left: 1rem;\n  margin-left: 2rem;\n  margin-bottom: 30px;\n  border-left: 3px solid #0077ac !important;\n"]);return j=function(){return e},e}var G,F,q,B,H,T,V,z,P,J,Q=C.a.div(G||(G=j())),W=C.a.i(F||(F=O())),X=C.a.i(q||(q=N())),Y=function(e){var t={position:"inherit",top:40,left:40,color:"#888",fill:"#000",width:"100%"},a=n.a.createElement(W,{className:"feather icon-list align-middle"}),r=n.a.createElement(W,{className:"feather icon-layers align-middle"}),o=n.a.createElement(X,{className:"feather icon-check align-middle"});return n.a.createElement(Q,null,n.a.createElement("h6",null,"Perfiles y permisos"),e.row.profileList.length>0?e.row.profileList.map((function(e){return n.a.createElement(b.a,{key:e.profileId,content:e.name,type:a,open:!0,style:t},e.moduleList.map((function(e){return n.a.createElement(b.a,{key:e.moduleId,content:e.name,type:r,open:!0,style:t},e.actionList.map((function(e){return n.a.createElement(b.a,{key:e.actionId,type:o,content:e.name})})))})))})):n.a.createElement("h6",null,"No existen permisos asociados"))},Z=C.a.i(B||(B=S())),$=C.a.div(H||(H=k())),_=function(e){return n.a.createElement($,null,n.a.createElement(u.a,null,e.addView?n.a.createElement(f.a,null,n.a.createElement(g.a.Title,{as:"h5"},"A\xf1adir Rol")):n.a.createElement(f.a,null,n.a.createElement(h.a,{onClick:e.handleView},n.a.createElement(Z,{className:"feather icon-plus"}),"A\xf1adir Rol"))))},ee=C.a.i(T||(T=K())),te=function(e){var t=function(){e.setCurrentId(e.roleId)};return n.a.createElement(u.a,null,n.a.createElement(f.a,{xs:12,sm:6,lg:2},n.a.createElement(h.a,{onClick:function(){e.openUpdateModal(e.roleId),t()}},n.a.createElement(ee,{className:"feather icon-edit"}))),n.a.createElement(f.a,{xs:12,sm:6,lg:2},n.a.createElement(h.a,{onClick:function(){e.openDeleteModal(),t()},className:"btn-danger"},n.a.createElement(ee,{className:"feather icon-trash-2"}))))},ae=C.a.i(V||(V=x())),re=function(e){var t=e.expanded?"icon-minus-square":"icon-plus-square";return n.a.createElement(ae,{className:"feather ".concat(t)})},ne=C.a.p(z||(z=A())),oe=function(e){var t=e.name;return n.a.createElement("div",null,n.a.createElement(ne,null,t))},ie=C.a.p(P||(P=w())),le=function(e){var t=e.description;return n.a.createElement("div",null,n.a.createElement(ie,null,t))},se=function(e){var t=e.isDeleting||e.isDeleteSuccess;return n.a.createElement(R.a,{show:e.showModal,onHide:function(){return e.toggleDeleteModal()},centered:!0},n.a.createElement(R.a.Header,{closeButton:!0},n.a.createElement(R.a.Title,{as:"h5"},"Confirmaci\xf3n")),n.a.createElement(R.a.Body,null,n.a.createElement("h6",null,"Est\xe1 seguro que desea eliminar el Rol?")),n.a.createElement(R.a.Footer,null,n.a.createElement(h.a,{disabled:t,variant:"secondary",onClick:function(){return e.toggleDeleteModal()}},"Cancelar"),n.a.createElement(h.a,{disabled:t,onClick:function(){return e.deleteRole(e.roleId)},variant:"primary"},"Eliminar")))},de=(C.a.div(J||(J=U())),function(e){var t=Object(r.useState)([]),a=Object(p.a)(t,2),o=a[0],i=a[1],l=e.isAdding||e.isAddSuccess,s=e.profiles.map((function(e){return{value:e.profileId.toString(),label:e.name}}));return n.a.createElement(R.a,{show:e.showModal,onHide:function(){return e.toggleAddModal()},centered:!0},n.a.createElement(I.a,{onSubmit:function(e){e.preventDefault(),handleSubmit()}},n.a.createElement(R.a.Header,{closeButton:!0},n.a.createElement(R.a.Title,{as:"h5"},"A\xf1adir Rol")),n.a.createElement(R.a.Body,null,n.a.createElement(I.a.Group,null,n.a.createElement(I.a.Label,null,"Nombre"),n.a.createElement(I.a.Control,{id:"name",name:"name",type:"text",className:"form-control",validate:function(e){var t;return e||(t="Campo requerido"),t},disabled:l})),n.a.createElement(I.a.Group,null,n.a.createElement(I.a.Label,null,"Descripci\xf3n"),n.a.createElement(I.a.Control,{className:"form-control",component:"textarea",name:"description",rows:"6",disabled:l})),n.a.createElement(I.a.Group,{controlId:"exampleForm.ControlTextarea1"},n.a.createElement(I.a.Label,null,"Perfiles"),n.a.createElement(L.a,{options:s,selected:o,onChange:i,disabled:l}))),n.a.createElement(R.a.Footer,null,n.a.createElement(h.a,{variant:"secondary",onClick:function(){return e.toggleAddModal()},disabled:l},"Cancelar"),n.a.createElement(h.a,{disabled:l,type:"submit",variant:"primary"},"Guardar"))))}),ce=function(e){var t=e.roleData,a=(t.name,t.description,t.profileList),o=e.isUpdating||e.isUpdateSuccess,i=e.profiles.map((function(e){return{value:e.profileId.toString(),label:e.name}})),l=a.map((function(t){return e.profiles.filter((function(e){return e.profileId===t.profileId}))})).map((function(e){return e[0].profileId.toString()})),s=Object(r.useState)(l),d=Object(p.a)(s,2),c=d[0],m=d[1];return n.a.createElement(R.a,{show:e.showModal,onHide:function(){return e.toggleUpdateModal()},centered:!0},n.a.createElement(I.a,{onSubmit:function(e){e.preventDefault(),handleSubmit()}},n.a.createElement(R.a.Header,{closeButton:!0},n.a.createElement(R.a.Title,{as:"h5"},"Actualizar Rol")),n.a.createElement(R.a.Body,null,n.a.createElement(I.a.Group,null,n.a.createElement(I.a.Label,null,"Nombre"),n.a.createElement(I.a.Control,{id:"name",name:"name",type:"text",className:"form-control",validate:function(e){var t;return e||(t="Campo requerido"),t},disabled:o})),n.a.createElement(I.a.Group,null,n.a.createElement(I.a.Label,null,"Descripci\xf3n"),n.a.createElement(I.a.Control,{className:"form-control",component:"textarea",name:"description",rows:"6",disabled:o})),n.a.createElement(I.a.Group,{controlId:"exampleForm.ControlTextarea1"},n.a.createElement(I.a.Label,null,"Perfiles"),n.a.createElement(L.a,{options:i,selected:c,onChange:function(e){return m(e)},disabled:o}))),n.a.createElement(R.a.Footer,null,n.a.createElement(h.a,{variant:"secondary",onClick:function(){return e.toggleUpdateModal()},disabled:o},"Cancelar"),n.a.createElement(h.a,{disabled:o,type:"submit",variant:"primary"},"Guardar"))))},pe=[{dataField:"name",text:"Rol",style:{whiteSpace:"pre-line",verticalAlign:"middle"}},{dataField:"description",text:"Descripci\xf3n",style:{verticalAlign:"middle",whiteSpace:"pre-line"}},{dataField:"actions",text:"Acciones",style:{verticalAlign:"middle"}}],me=function(e){Object(d.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={openDeleteRoleModal:!1,openAddRoleModal:!1,openUpdateRoleModal:!1,showLoader:!0,rolesData:null,roleData:null,roleId:null,currentRole:null,modalContent:null},e.toggleModal=function(t){e.setState((function(e){return{showLoader:e.openDeleteRoleModal,openDeleteRoleModal:!e.openDeleteRoleModal}})),e.props.reset()},e.toggleDeleteModal=function(){e.setState((function(e){return{showLoader:e.openDeleteRoleModal,openDeleteRoleModal:!e.openDeleteRoleModal}})),e.props.reset()},e.toggleAddModal=function(){e.setState((function(e){return{showLoader:e.openAddRoleModal,openAddRoleModal:!e.openAddRoleModal}})),e.props.reset()},e.toggleUpdateModal=function(t){D.a.isNil(t)||e.props.fetchRole(t),e.setState((function(e){return{showLoader:e.openUpdateRoleModal,openUpdateRoleModal:!e.openUpdateRoleModal,roleData:null}})),e.props.reset()},e.setCurrentId=function(t){e.setState({roleId:t})},e.expandRow={renderer:function(e){return n.a.createElement("div",null,n.a.createElement(Y,{row:e}))},showExpandColumn:!0,expandByColumnOnly:!0,expandHeaderColumnRenderer:function(e){e.isAnyExpands;return!1},expandColumnRenderer:function(e){var t=e.expanded;return n.a.createElement(re,{expanded:t})}},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.state.rolesData.length>0?this.state.rolesData.map((function(t){return{id:t.rolId,profileList:t.profileList,name:n.a.createElement(oe,{name:t.name}),description:n.a.createElement(le,{description:t.description}),actions:n.a.createElement(te,{roleId:t.rolId,setCurrentId:e.setCurrentId,openUpdateModal:e.toggleUpdateModal,openDeleteModal:e.toggleDeleteModal})}})):[];return n.a.createElement("div",null,n.a.createElement(se,{roleId:this.state.roleId,toggleDeleteModal:this.toggleDeleteModal,showModal:this.state.openDeleteRoleModal,deleteRole:this.props.deleteRole,isDeleting:this.props.isDeleting,isDeleteSuccess:this.props.isDeleteSuccess,isDeleteError:this.props.isDeleteError}),n.a.createElement(de,{toggleAddModal:this.toggleAddModal,showModal:this.state.openAddRoleModal,profiles:this.props.profiles,addRole:this.props.addRole,isAdding:this.props.isAdding,isAddError:this.props.isAddError,isAddSuccess:this.props.isAddSuccess}),this.props.role&&!D.a.isEmpty(this.props.role)?n.a.createElement(ce,{roleId:this.state.roleId,roleData:this.props.role,toggleUpdateModal:this.toggleUpdateModal,showModal:this.state.openUpdateRoleModal,profiles:this.props.profiles,updateRole:this.props.updateRole,isUpdating:this.props.isUpdating,isUpdateSuccess:this.props.isUpdateSuccess,isUpdateError:this.props.isUpdateError}):null,n.a.createElement(_,{handleView:this.toggleAddModal}),n.a.createElement(u.a,null,n.a.createElement(f.a,null,n.a.createElement("div",{className:"role-container-main"},n.a.createElement("div",{className:"role-container-header"},n.a.createElement("h5",null,"Lista de roles")),n.a.createElement("div",{className:"task-data"},n.a.createElement(v.a,{keyField:"id",data:t,columns:pe,bordered:!1,expandRow:this.expandRow}))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return D.a.isEqual(e.roles,t.rolesData)?D.a.isEqual(e.role,t.roleData)?null:{roleData:e.role}:{rolesData:e.roles}}}]),a}(n.a.Component),ue=(a(104),[{rolId:59,name:"Consultas",description:"Ver espacios disponibles y generar reportes",profileList:[{profileId:4,name:"Confirmacion de Reservas",description:"Confirmacion de Reservas ya generadas",moduleList:[{moduleId:1,name:"Reservation",description:"Module to work with reservations ",actionList:[{actionId:2,name:"Read",description:"Read records",shortKey:"R"},{actionId:3,name:"Update",description:"Update records",shortKey:"U"},{actionId:4,name:"Delete",description:"Delete record",shortKey:"D"}]}]},{profileId:5,name:"Agregar Datos",description:"Agregar datos a Reservas",moduleList:[{moduleId:1,name:"Reservation",description:"Module to work with reservations ",actionList:[{actionId:2,name:"Read",description:"Read records",shortKey:"R"},{actionId:3,name:"Update",description:"Update records",shortKey:"U"},{actionId:4,name:"Delete",description:"Delete record",shortKey:"D"}]}]},{profileId:6,name:"Registrar Ingresos",description:"Registrar Ingresos a areas de recreo",moduleList:[{moduleId:2,name:"Cabin Administration",description:"Admin all cabin related events",actionList:[{actionId:1,name:"Create",description:"Create records",shortKey:"C"},{actionId:2,name:"Read",description:"Read records",shortKey:"R"},{actionId:3,name:"Update",description:"Update records",shortKey:"U"}]}]}]},{rolId:62,name:"Administraci\xf3n",description:"Cancelar reservaciones, confirmar reservacion",profileList:[{profileId:2,name:"Generar Reportes",description:"Generar Reportes generales",moduleList:[{moduleId:3,name:"Reports",description:"All app reports",actionList:[{actionId:2,name:"Read",description:"Read records",shortKey:"R"}]}]},{profileId:3,name:"Cancelacion de Reservas",description:"Cancelacion de Reservas ya generadas",moduleList:[{moduleId:1,name:"Reservation",description:"Module to work with reservations ",actionList:[{actionId:2,name:"Read",description:"Read records",shortKey:"R"},{actionId:3,name:"Update",description:"Update records",shortKey:"U"},{actionId:4,name:"Delete",description:"Delete record",shortKey:"D"}]}]},{profileId:4,name:"Confirmacion de Reservas",description:"Confirmacion de Reservas ya generadas",moduleList:[{moduleId:1,name:"Reservation",description:"Module to work with reservations ",actionList:[{actionId:2,name:"Read",description:"Read records",shortKey:"R"},{actionId:3,name:"Update",description:"Update records",shortKey:"U"},{actionId:4,name:"Delete",description:"Delete record",shortKey:"D"}]}]},{profileId:5,name:"Agregar Datos",description:"Agregar datos a Reservas",moduleList:[{moduleId:1,name:"Reservation",description:"Module to work with reservations ",actionList:[{actionId:2,name:"Read",description:"Read records",shortKey:"R"},{actionId:3,name:"Update",description:"Update records",shortKey:"U"},{actionId:4,name:"Delete",description:"Delete record",shortKey:"D"}]}]},{profileId:6,name:"Registrar Ingresos",description:"Registrar Ingresos a areas de recreo",moduleList:[{moduleId:2,name:"Cabin Administration",description:"Admin all cabin related events",actionList:[{actionId:1,name:"Create",description:"Create records",shortKey:"C"},{actionId:2,name:"Read",description:"Read records",shortKey:"R"},{actionId:3,name:"Update",description:"Update records",shortKey:"U"}]}]}]},{rolId:63,name:"Encargado de finca",description:"Registrar\xe1 el ingreso a las cabinas por los c",profileList:[]},{rolId:64,name:"Colegiados",description:"Son usuarios externos que reservan, permitir\xe1",profileList:[{profileId:2,name:"Generar Reportes",description:"Generar Reportes generales",moduleList:[{moduleId:3,name:"Reports",description:"All app reports",actionList:[{actionId:2,name:"Read",description:"Read records",shortKey:"R"}]}]},{profileId:5,name:"Agregar Datos",description:"Agregar datos a Reservas",moduleList:[{moduleId:1,name:"Reservation",description:"Module to work with reservations ",actionList:[{actionId:2,name:"Read",description:"Read records",shortKey:"R"},{actionId:3,name:"Update",description:"Update records",shortKey:"U"},{actionId:4,name:"Delete",description:"Delete record",shortKey:"D"}]}]}]}]),fe={rolId:59,name:"Consulta",description:"Ver espacios disponibles y generar reportes",profileList:[{profileId:4,name:"Confirmacion de Reservas",description:"Confirmacion de Reservas ya generadas",moduleList:[{moduleId:1,name:"Reservation",description:"Module to work with reservations ",actionList:[{actionId:2,name:"Read",description:"Read records",shortKey:"R"},{actionId:3,name:"Update",description:"Update records",shortKey:"U"},{actionId:4,name:"Delete",description:"Delete record",shortKey:"D"}]}]},{profileId:5,name:"Agregar Datos",description:"Agregar datos a Reservas",moduleList:[{moduleId:1,name:"Reservation",description:"Module to work with reservations ",actionList:[{actionId:2,name:"Read",description:"Read records",shortKey:"R"},{actionId:3,name:"Update",description:"Update records",shortKey:"U"},{actionId:4,name:"Delete",description:"Delete record",shortKey:"D"}]}]},{profileId:6,name:"Registrar Ingresos",description:"Registrar Ingresos a areas de recreo",moduleList:[{moduleId:2,name:"Cabin Administration",description:"Admin all cabin related events",actionList:[{actionId:1,name:"Create",description:"Create records",shortKey:"C"},{actionId:2,name:"Read",description:"Read records",shortKey:"R"},{actionId:3,name:"Update",description:"Update records",shortKey:"U"}]}]}]},ge=[{profileId:2,name:"Generar Reportes",description:"Generar Reportes generales",moduleList:null},{profileId:3,name:"Cancelacion de Reservas",description:"Cancelacion de Reservas ya generadas",moduleList:null},{profileId:4,name:"Confirmacion de Reservas",description:"Confirmacion de Reservas ya generadas",moduleList:null},{profileId:5,name:"Agregar Datos",description:"Agregar datos a Reservas",moduleList:null},{profileId:6,name:"Registrar Ingresos",description:"Registrar Ingresos a areas de recreo",moduleList:null}],he=function(){return n.a.createElement(me,{roles:ue,role:fe,profiles:ge,fetchRole:function(){},reset:function(){}})};i.a.render(n.a.createElement(he,null),document.getElementById("root"))},57:function(e,t,a){e.exports=a(106)},58:function(e,t,a){}},[[57,1,2]]]);
//# sourceMappingURL=main.9638329a.chunk.js.map