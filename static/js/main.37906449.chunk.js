(this.webpackJsonptick42_demo=this.webpackJsonptick42_demo||[]).push([[0],{116:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),l=a.n(c),o=a(23),i=a(46),s=a(10),u=a(47),m=a(48),d=a(49),p=a(53),f=a(52),j=a(51),b=a(4),E=a(15),O={data:!1},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0,a=JSON.parse(JSON.stringify(e));switch(t.type){case"RECEIVE_INITIAL_DATA":var n=t.data;return Object(E.a)(Object(E.a)({},a),{},{data:n});case"UPDATE_PROJECT":var r=t.data;return Object(E.a)(Object(E.a)({},a),{},{data:r});default:return a}},v=a(50),N=Object(v.createActions)({requestInitialData:[""],receiveInitialData:["data"],startProjectUpdate:[""],finishProjectUpdate:["data"]}),h=N.Creators,C=(N.Types,h.requestInitialData),S=h.receiveInitialData,T=h.startProjectUpdate,g=(h.finishProjectUpdate,function(){return function(e){return e(C()),fetch("http://localhost:5000/db").then((function(e){return e.json()})).then((function(t){var a=t.db;e(S(a))}))}}),k=function(e){return function(t){return t(T()),fetch("http://localhost:5000/db",{method:"PUT",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){t(S(e))}))}},I=y,P=a(2),J=(a(116),a(117),function(e){e.GetInitialData;var t=e.company,a=e.setCurrentlyOpenned;e.address;return r.a.createElement("div",{key:t.id,className:"container",onClick:function(){a(t)}},r.a.createElement("h1",null,t.name))}),D=function(e){var t=e.project,a=e.setCurrentlyOpennedProject;return r.a.createElement("div",{className:"childButtonContainer",onClick:function(){a(t)}},r.a.createElement("div",{className:"childTitle"},t.name))},A=(a(118),function(e){var t=e.employee,a=e.onClick,c=e.spliceEmployee,l=Object(n.useState)(!1),o=Object(P.a)(l,2);o[0],o[1];return r.a.createElement("div",{className:"childTitle",style:{display:"flex"}},r.a.createElement("button",{className:"childButtonContainer",style:{marginBottom:"0px"},onClick:a},"".concat(t.firstName," ").concat(t.lastName," ")),r.a.createElement("button",{onClick:function(){c(t)}},"X"))}),U=a(32),x=(a(119),function(e){var t=e.currentState,a=e.closeModal,c=e.jobArea,l=Object(n.useState)(!1),o=Object(P.a)(l,2),i=o[0],s=o[1],u=Object(n.useState)(!1),m=Object(P.a)(u,2),d=m[0],p=m[1];return Object(n.useEffect)((function(){var e=t.employees.filter((function(e){return e.jobArea===c}));s(e);var a,n=0,r=Object(U.a)(t.projects);try{for(r.s();!(a=r.n()).done;){var l,o=a.value,i=Object(U.a)(e);try{for(i.s();!(l=i.n()).done;){var u=l.value;o.employeesId.includes(u.id)&&n++}}catch(m){i.e(m)}finally{i.f()}}}catch(m){r.e(m)}finally{r.f()}p(n)}),[]),r.a.createElement("div",{className:"areaModalBackTrop",onClick:function(){a()}},r.a.createElement("div",{className:"areaModal"},"Job Area: ".concat(c),r.a.createElement("br",null),"Employees: ".concat(i.length),r.a.createElement("br",null),"Projects Taken Part In: ".concat(d)))}),w=function(e){var t=e.currentState,a=e.employee,c=e.setCurrentlyOpennedEmployee,l=Object(n.useState)(!1),o=Object(P.a)(l,2),i=o[0],s=o[1],u=Object(n.useState)(!1),m=Object(P.a)(u,2),d=m[0],p=m[1];return Object(n.useEffect)((function(){var e=t.projects.filter((function(e){return e.employeesId.includes(a.id)}));s(e)}),[]),r.a.createElement("div",{className:"treeWrapper"},r.a.createElement("div",{className:"treeContainer"},r.a.createElement("div",{className:"treeTitle"},"Employee: ",r.a.createElement("button",{onClick:function(){c(!1)}},"X"),r.a.createElement("br",null)," ","".concat(a.firstName," ").concat(a.lastName)),r.a.createElement("div",{className:"treeTitle"}," Employee Datails "),r.a.createElement("div",{className:"treeTitle"}," Job Area: "),r.a.createElement("div",{className:"addressDepartmentTitle"},r.a.createElement("button",{onClick:function(){p(!d)}},a.jobArea)),r.a.createElement("div",{className:"treeTitle"}," Job Title: "),r.a.createElement("div",{className:"addressDepartmentTitle"},a.jobTitle),r.a.createElement("div",{className:"treeTitle"}," Job Type: "),r.a.createElement("div",{className:"addressDepartmentTitle"},a.jobType),r.a.createElement("div",{className:"treeTitle"},"Part of projects:",i&&i.map((function(e,t){return r.a.createElement("div",{key:e.name,className:"addressDepartmentTitle"},e.name)})))),d&&r.a.createElement(x,{closeModal:function(){p(!d)},currentState:t,jobArea:a.jobArea}))},B=function(e){var t=e.project,a=e.employees,c=e.setCurrentlyOpennedProject,l=e.state,o=e.UpdateProject,i=Object(n.useState)(!1),s=Object(P.a)(i,2),u=s[0],m=s[1],d=Object(n.useState)(!1),p=Object(P.a)(d,2),f=p[0],j=p[1],b=Object(n.useState)(!1),E=Object(P.a)(b,2),O=E[0],y=E[1],v=Object(n.useState)(!1),N=Object(P.a)(v,2),h=N[0],C=N[1],S=Object(n.useState)(!1),T=Object(P.a)(S,2),g=T[0],k=(T[1],Object(n.useState)(!1)),I=Object(P.a)(k,2),J=I[0],D=I[1],U=Object(n.useState)(u.name),x=Object(P.a)(U,2),B=x[0],F=x[1],M=Object(n.useState)(!1),W=Object(P.a)(M,2),_=W[0],G=W[1];Object(n.useEffect)((function(){m(t),D(l.home.data)}),[t]),Object(n.useEffect)((function(){if(u){J.projects.find((function(e){return e.id===u.id}));var e=a.filter((function(e){return u.employeesId.includes(e.id)})),t=a.filter((function(e){return!u.employeesId.includes(e.id)}));console.log(t.length>0),console.log(t.length),F(u.name),y(e),j(t),C(!1)}}),[u]);var X=function(e){var t=JSON.parse(JSON.stringify(u)),n=JSON.parse(JSON.stringify(J)),r=n.projects.findIndex((function(e){return e.id==t.id})),c=a.filter((function(e){return t.employeesId.includes(e.id)})),l=c.findIndex((function(t){return t.id===e.id}));c.splice(l,1);var i=c.map((function(e){return e.id}));t.employeesId=i,n.projects[r]=t,o(n),D(n),m(n.projects[r])};return u?r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"treeContainer"},r.a.createElement("div",{className:"titleFlex"},r.a.createElement("div",null,r.a.createElement("input",{className:"treeTitle",style:{marginBottom:"0px"},placeholder:B,defaultValue:B,onChange:function(e){F(e.target.value)}}),r.a.createElement("button",{onClick:function(){c(!1)}},"X")),r.a.createElement("button",{onClick:function(){!function(){if(""!==B){var e=JSON.parse(JSON.stringify(u)),t=JSON.parse(JSON.stringify(J)),a=t.projects.findIndex((function(t){return t.id==e.id}));e.name=B,t.projects[a]=e,o(t),D(t),m(t.projects[a])}else alert("No Name Given")}()}},"Change Project Name")),r.a.createElement("div",{className:"treeTitle"},"Department:"),r.a.createElement("div",{className:"addressDepartmentTitle"},u.department),O&&O.length>0?r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"treeTitle"},"Employees: ",r.a.createElement("br",null)),O.map((function(e,t){return r.a.createElement(A,{employee:e,key:e.id,onClick:function(){C(e)},spliceEmployee:X})}))):r.a.createElement("div",{className:"treeTitle"},"No Employees",r.a.createElement("br",null)),f.length>0?r.a.createElement("button",{style:{marginTop:"10px"},onClick:function(){G(!_)}},"Add Employee"):null,_&&0!==f.length?f.map((function(e,t){return r.a.createElement("div",{key:t},"".concat(e.firstName," ").concat(e.lastName," "),r.a.createElement("button",{onClick:function(){!function(e){console.log(e);var t=JSON.parse(JSON.stringify(u)),a=JSON.parse(JSON.stringify(J)),n=a.projects.findIndex((function(e){return e.id==t.id}));t.employeesId.push(e.id),a.projects[n]=t,o(a),D(a),m(a.projects[n])}(e)}},"+"))})):null),h&&r.a.createElement(w,{employee:h,currentState:J,setCurrentlyOpennedEmployee:C}),g&&r.a.createElement("div",null,"Edit Sad")):null},F=function(e){var t=e.UpdateProject,a=e.state,c=e.address,l=e.company,o=e.projects,i=e.employees,s=e.setCurrentlyOpennedCompany,u=Object(n.useState)(!1),m=Object(P.a)(u,2),d=m[0],p=m[1];return Object(n.useEffect)((function(){p(!1)}),[l]),r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"treeContainer"},r.a.createElement("div",{className:"treeTitle"},"Company: ",r.a.createElement("button",{onClick:function(){s(!1)}},"X"),r.a.createElement("br",null),l.name),r.a.createElement("div",{className:"treeTitle"},"Address"),r.a.createElement("div",{className:"addressDepartmentTitle"},r.a.createElement("div",null,c.country),r.a.createElement("div",null,c.state),r.a.createElement("div",null,c.street)),o&&o.length>1?r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"treeTitle"},"Projects"),o.map((function(e,t){return r.a.createElement(D,{key:e.id,project:e,setCurrentlyOpennedProject:p})}))):r.a.createElement("div",{className:"treeTitle"},"No Present Projects")),d&&r.a.createElement(B,{project:d,employees:i,setCurrentlyOpennedProject:p,state:a,UpdateProject:t}))},M=function(e){var t=e.GetInitialData,a=e.UpdateProject,c=e.state,l=Object(n.useState)(!1),o=Object(P.a)(l,2),i=o[0],s=o[1],u=Object(n.useState)(!1),m=Object(P.a)(u,2),d=m[0],p=m[1],f=Object(n.useState)(!1),j=Object(P.a)(f,2),b=j[0],E=j[1],O=Object(n.useState)(!1),y=Object(P.a)(O,2),v=y[0],N=y[1],h=Object(n.useState)(!1),C=Object(P.a)(h,2),S=C[0],T=C[1],g=Object(n.useState)(!1),k=Object(P.a)(g,2),I=k[0],D=k[1],A=Object(n.useState)(!1),U=Object(P.a)(A,2),x=U[0],w=U[1];return Object(n.useEffect)((function(){c.home.data||t(),N(c.home.data.companies),T(c.home.data.projects),D(c.home.data.employees),w(c.home.data["company-addresses"])}),[c.home.data]),Object(n.useEffect)((function(){if(S){var e=S.filter((function(e){return e.companyId===i.id})),t=I.filter((function(e){return e.companyId===i.id}));console.log(t),E(t),p(e)}}),[i,S]),r.a.createElement("div",{className:"treeWrapper"},r.a.createElement("div",{className:"treeContainer"},r.a.createElement("div",{className:"treeTitle"},"Companies"),v?v.map((function(e,t){return r.a.createElement(J,{key:e.id,company:e,setCurrentlyOpenned:s})})):null),i&&r.a.createElement(F,{address:x.find((function(e){return i.id===e.companyId})),setCurrentlyOpennedCompany:s,company:i,projects:d,employees:b,state:c,UpdateProject:a}))},W=Object(o.b)((function(e){return{state:e}}),(function(e){return{GetInitialData:function(){return e(g())},UpdateProject:function(t){return e(k(t))}}}))(M);var _=function(){return r.a.createElement(W,null)},G=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(j.a,null,r.a.createElement("div",null,r.a.createElement(b.a,{exact:!0,path:"**",component:_})))}}]),a}(n.Component),X=Object(s.combineReducers)({home:I});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(121);var R=Object(u.composeWithDevTools)({}),q=Object(s.createStore)(X,R(Object(s.applyMiddleware)(i.a)));l.a.render(r.a.createElement("div",{className:"bodyClass"},r.a.createElement(o.a,{store:q},r.a.createElement(G,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},54:function(e,t,a){e.exports=a(122)}},[[54,1,2]]]);
//# sourceMappingURL=main.37906449.chunk.js.map