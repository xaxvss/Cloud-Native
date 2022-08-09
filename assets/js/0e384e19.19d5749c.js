"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9671],{4137:(M,I,e)=>{e.d(I,{Zo:()=>A,kt:()=>n});var g=e(7294);function D(M,I,e){return I in M?Object.defineProperty(M,I,{value:e,enumerable:!0,configurable:!0,writable:!0}):M[I]=e,M}function t(M,I){var e=Object.keys(M);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(M);I&&(g=g.filter((function(I){return Object.getOwnPropertyDescriptor(M,I).enumerable}))),e.push.apply(e,g)}return e}function i(M){for(var I=1;I<arguments.length;I++){var e=null!=arguments[I]?arguments[I]:{};I%2?t(Object(e),!0).forEach((function(I){D(M,I,e[I])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(e)):t(Object(e)).forEach((function(I){Object.defineProperty(M,I,Object.getOwnPropertyDescriptor(e,I))}))}return M}function j(M,I){if(null==M)return{};var e,g,D=function(M,I){if(null==M)return{};var e,g,D={},t=Object.keys(M);for(g=0;g<t.length;g++)e=t[g],I.indexOf(e)>=0||(D[e]=M[e]);return D}(M,I);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(M);for(g=0;g<t.length;g++)e=t[g],I.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(M,e)&&(D[e]=M[e])}return D}var N=g.createContext({}),u=function(M){var I=g.useContext(N),e=I;return M&&(e="function"==typeof M?M(I):i(i({},I),M)),e},A=function(M){var I=u(M.components);return g.createElement(N.Provider,{value:I},M.children)},r={inlineCode:"code",wrapper:function(M){var I=M.children;return g.createElement(g.Fragment,{},I)}},a=g.forwardRef((function(M,I){var e=M.components,D=M.mdxType,t=M.originalType,N=M.parentName,A=j(M,["components","mdxType","originalType","parentName"]),a=u(e),n=D,c=a["".concat(N,".").concat(n)]||a[n]||r[n]||t;return e?g.createElement(c,i(i({ref:I},A),{},{components:e})):g.createElement(c,i({ref:I},A))}));function n(M,I){var e=arguments,D=I&&I.mdxType;if("string"==typeof M||D){var t=e.length,i=new Array(t);i[0]=a;var j={};for(var N in I)hasOwnProperty.call(I,N)&&(j[N]=I[N]);j.originalType=M,j.mdxType="string"==typeof M?M:D,i[1]=j;for(var u=2;u<t;u++)i[u]=e[u];return g.createElement.apply(null,i)}return g.createElement.apply(null,e)}a.displayName="MDXCreateElement"},1039:(M,I,e)=>{e.r(I),e.d(I,{assets:()=>N,contentTitle:()=>i,default:()=>r,frontMatter:()=>t,metadata:()=>j,toc:()=>u});var g=e(7462),D=(e(7294),e(4137));const t={sidebar_position:1},i="Cloud Native Apps",j={unversionedId:"intro",id:"intro",title:"Cloud Native Apps",description:"Cloud Native Apps are built from the ground up and optimized for cloud scale and performance.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/Cloud-Native/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Serverless On Azure",permalink:"/Cloud-Native/docs/serverless"}},N={},u=[{value:"Resources",id:"resources",level:2}],A={toc:u};function r(M){let{components:I,...t}=M;return(0,D.kt)("wrapper",(0,g.Z)({},A,t,{components:I,mdxType:"MDXLayout"}),(0,D.kt)("h1",{id:"cloud-native-apps"},"Cloud Native Apps"),(0,D.kt)("blockquote",null,(0,D.kt)("p",{parentName:"blockquote"},(0,D.kt)("strong",{parentName:"p"},"Cloud Native Apps are built from the ground up and optimized for cloud scale and performance."))),(0,D.kt)("p",null,"They\u2019re based on microservices architectures, use managed services, and take advantage of continuous delivery to achieve reliability and faster time to market. Learn how to ",(0,D.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/solutions/cloud-native-apps/"},"build cloud-native apps on Azure!")),(0,D.kt)("table",null,(0,D.kt)("thead",{parentName:"table"},(0,D.kt)("tr",{parentName:"thead"},(0,D.kt)("th",{parentName:"tr",align:"center"},(0,D.kt)("img",{alt:"Azure Microservices",src:e(7936).Z,width:"41",height:"47"})," ",(0,D.kt)("br",null)," ",(0,D.kt)("a",{parentName:"th",href:"https://azure.microsoft.com/en-us/solutions/microservice-applications/"},(0,D.kt)("strong",{parentName:"a"},"Microservices"))),(0,D.kt)("th",{parentName:"tr",align:"center"},(0,D.kt)("img",{alt:"Azure Serverless Icon",src:e(9523).Z,width:"45",height:"37"})," ",(0,D.kt)("br",null)," ",(0,D.kt)("a",{parentName:"th",href:"https://azure.microsoft.com/en-us/solutions/serverless/"},(0,D.kt)("strong",{parentName:"a"},"Serverless"))),(0,D.kt)("th",{parentName:"tr",align:"center"},(0,D.kt)("img",{alt:"Azure Containers Icon",src:e(853).Z,width:"41",height:"45"})," ",(0,D.kt)("br",null)," ",(0,D.kt)("a",{parentName:"th",href:"https://azure.microsoft.com/en-us/overview/containers/"},(0,D.kt)("strong",{parentName:"a"},"Containers"))))),(0,D.kt)("tbody",{parentName:"table"},(0,D.kt)("tr",{parentName:"tbody"},(0,D.kt)("td",{parentName:"tr",align:"center"},"Simplify development of distributed cloud apps and take advantage of built-in, enterprise-grade security and autoscaling."),(0,D.kt)("td",{parentName:"tr",align:"center"},"Build cloud-native apps without provisioning and managing infrastructure using a fully managed platform."),(0,D.kt)("td",{parentName:"tr",align:"center"},"Containerize apps and let Azure managed services handle orchestration, provisioning, upgrading, and scaling on demand")))),(0,D.kt)("h2",{id:"resources"},"Resources"),(0,D.kt)("p",null,"Visit the Azure Architecture Center and"),(0,D.kt)("ul",null,(0,D.kt)("li",{parentName:"ul"},(0,D.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/architecture/guide/"},"Learn Application Architecture Fundamentals")," to design your solution."),(0,D.kt)("li",{parentName:"ul"},(0,D.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/architecture/browse/"},"Browse Azure Architecture")," to view real-world usage examples."),(0,D.kt)("li",{parentName:"ul"},(0,D.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/"},"Explore Cloud Adoption Framework Guidance"))))}r.isMDXComponent=!0},853:(M,I,e)=>{e.d(I,{Z:()=>g});const g="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjQxcHgiIGhlaWdodD0iNDVweCIgdmlld0JveD0iMCAwIDQxIDQ1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8Zz4NCiAgICAgICAgICAgIDxwYXRoIGQ9Ik00MC4wNCwyMS45MTggTDEuMDQ1LDIxLjkxOCBMMS4wNDUsNS42MyBDMS4wNDUsNS42MyAwLjQ1NiwxLjM4NSAyMC4wMTksMC43OTUgQzM5LjU4NCwwLjIwNiA0MC4wNCw1LjYzIDQwLjA0LDUuNjMgTDQwLjA0LDIxLjkxOCBaIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+DQogICAgICAgICAgICA8cGF0aCBkPSJNNDAuMDg3OSwzOS4yNDgxIEM0MC4wODc5LDM5LjI0ODEgNDEuNDk4OSw0My41MTgxIDIxLjM0NTksNDMuOTYwMSBDMS4xOTE5LDQ0LjQwMjEgMC43ODk5LDM5LjI0ODEgMC43ODk5LDM5LjI0ODEgTDAuNzg5OSwyMS40MjAxIEMwLjc4OTksMjEuNDIwMSAxLjI3OTksMTcuMzUzMSAxOS45MzE5LDE3LjA4OTEgQzM4LjU4MTksMTYuODIzMSA0MC4wODc5LDIxLjQyMDEgNDAuMDg3OSwyMS40MjAxIEw0MC4wODc5LDM5LjI0ODEgWiIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPg0KICAgICAgICAgICAgPHBhdGggZD0iTTAuNzksMjEuNDE5OSBDMC43OSwyMS40MTk5IDIuMjUzLDI2LjYzNDkgMjAuOTAzLDI2LjM2OTkgQzM5LjU1NSwyNi4xMDQ5IDQwLjA4OCwyMS40MTk5IDQwLjA4OCwyMS40MTk5IEw0MC4wODgsMzkuMjQ3OSBDNDAuMDg4LDM5LjI0NzkgNDEuNDk5LDQzLjUxNzkgMjEuMzQ2LDQzLjk1OTkgQzEuMTkyLDQ0LjQwMTkgMC43OSwzOS4yNDc5IDAuNzksMzkuMjQ3OSIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPg0KICAgICAgICAgICAgPHBhdGggZD0iTTQwLjkyMjksNS41MDk4IEwzOS40MjI5LDUuNTA5OCBDMzkuNDIyOSwzLjg3NDggMzIuMDM1OSwxLjQ5OTggMjAuNDYxOSwxLjQ5OTggQzguODg2OSwxLjQ5OTggMS40OTk5LDMuODc0OCAxLjQ5OTksNS41MDk4IEwtMC4wMDAxLDUuNTA5OCBDLTAuMDAwMSwxLjg5MjggMTAuMjkzOSwtMC4wMDAyIDIwLjQ2MTksLTAuMDAwMiBDMzAuNjI5OSwtMC4wMDAyIDQwLjkyMjksMS44OTI4IDQwLjkyMjksNS41MDk4IiBmaWxsPSIjMDA3OEQ3Ij48L3BhdGg+DQogICAgICAgICAgICA8cGF0aCBkPSJNMjAuNDYxOSw0NC43ODQyIEMxMC4yOTM5LDQ0Ljc4NDIgLTAuMDAwMSw0Mi44OTEyIC0wLjAwMDEsMzkuMjc1MiBMMS40OTk5LDM5LjI3NTIgQzEuNDk5OSw0MC45MTAyIDguODg2OSw0My4yODQyIDIwLjQ2MTksNDMuMjg0MiBDMzIuMDM1OSw0My4yODQyIDM5LjQyMjksNDAuOTEwMiAzOS40MjI5LDM5LjI3NTIgTDQwLjkyMjksMzkuMjc1MiBDNDAuOTIyOSw0Mi44OTEyIDMwLjYyOTksNDQuNzg0MiAyMC40NjE5LDQ0Ljc4NDIiIGZpbGw9IiMwMDc4RDciPjwvcGF0aD4NCiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMC40NjE5LDI3LjI4MzIgQzEwLjI5MzksMjcuMjgzMiAtMC4wMDAxLDI1LjM5MDIgLTAuMDAwMSwyMS43NzMyIEwxLjQ5OTksMjEuNzczMiBDMS40OTk5LDIzLjQwODIgOC44ODY5LDI1Ljc4MzIgMjAuNDYxOSwyNS43ODMyIEMzMi4wMzU5LDI1Ljc4MzIgMzkuNDIyOSwyMy40MDgyIDM5LjQyMjksMjEuNzczMiBMNDAuOTIyOSwyMS43NzMyIEM0MC45MjI5LDI1LjM5MDIgMzAuNjI5OSwyNy4yODMyIDIwLjQ2MTksMjcuMjgzMiIgZmlsbD0iIzAwNzhENyI+PC9wYXRoPg0KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0iIzAwNzhENyIgcG9pbnRzPSIzOS40MjMgMzkuMzQ3MiA0MC45MjMgMzkuMzQ3MiA0MC45MjMgNS43MzIyIDM5LjQyMyA1LjczMjIiPjwvcG9seWdvbj4NCiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMC40NjE5LDExLjAxODYgQzEwLjI5MzksMTEuMDE4NiAtMC4wMDAxLDkuMTI1NiAtMC4wMDAxLDUuNTA5NiBMMS40OTk5LDUuNTA5NiBDMS40OTk5LDcuMTQ0NiA4Ljg4NjksOS41MTg2IDIwLjQ2MTksOS41MTg2IEMzMi4wMzU5LDkuNTE4NiAzOS40MjI5LDcuMTQ0NiAzOS40MjI5LDUuNTA5NiBMNDAuOTIyOSw1LjUwOTYgQzQwLjkyMjksOS4xMjU2IDMwLjYyOTksMTEuMDE4NiAyMC40NjE5LDExLjAxODYiIGZpbGw9IiMwMDc4RDciPjwvcGF0aD4NCiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9IiMwMDc4RDQiIHBvaW50cz0iMC4wMTUgMzkuMzg4MiAxLjUxNSAzOS4zODgyIDEuNTE1IDUuNzMxMiAwLjAxNSA1LjczMTIiPjwvcG9seWdvbj4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="},7936:(M,I,e)=>{e.d(I,{Z:()=>g});const g="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjQxcHgiIGhlaWdodD0iNDdweCIgdmlld0JveD0iMCAwIDQxIDQ3IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8Zz4NCiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iMC40NjA4IDExLjcyMzYgMC44NzY4IDM0LjM0ODYgMjAuMTI2OCA0NS4zNDg2IDM5LjcxMDggMzMuODQ4NiAzOS41MDE4IDExLjk3MzYgMjAuMDg1OCAwLjY4MTYiPjwvcG9seWdvbj4NCiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMC4yMzA1LDE4LjQ3NjUgQzE3LjY0ODUsMTguNDc2NSAxNS41NTQ1LDIwLjU3MDUgMTUuNTU0NSwyMy4xNTM1IEMxNS41NTQ1LDI1LjczNTUgMTcuNjQ4NSwyNy44Mjk1IDIwLjIzMDUsMjcuODI5NSBDMjIuODEzNSwyNy44Mjk1IDI0LjkwNzUsMjUuNzM1NSAyNC45MDc1LDIzLjE1MzUgQzI0LjkwNzUsMjAuNTcwNSAyMi44MTM1LDE4LjQ3NjUgMjAuMjMwNSwxOC40NzY1IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+DQogICAgICAgICAgICA8cGF0aCBkPSJNMjAuMjMwNSwxOS4yMjY1IEMxOC4wNjU1LDE5LjIyNjUgMTYuMzA0NSwyMC45ODg1IDE2LjMwNDUsMjMuMTUzNSBDMTYuMzA0NSwyNS4zMTg1IDE4LjA2NTUsMjcuMDc5NSAyMC4yMzA1LDI3LjA3OTUgQzIyLjM5NTUsMjcuMDc5NSAyNC4xNTc1LDI1LjMxODUgMjQuMTU3NSwyMy4xNTM1IEMyNC4xNTc1LDIwLjk4ODUgMjIuMzk1NSwxOS4yMjY1IDIwLjIzMDUsMTkuMjI2NSBNMjAuMjMwNSwyOC41Nzk1IEMxNy4yMzg1LDI4LjU3OTUgMTQuODA0NSwyNi4xNDU1IDE0LjgwNDUsMjMuMTUzNSBDMTQuODA0NSwyMC4xNjE1IDE3LjIzODUsMTcuNzI2NSAyMC4yMzA1LDE3LjcyNjUgQzIzLjIyMjUsMTcuNzI2NSAyNS42NTc1LDIwLjE2MTUgMjUuNjU3NSwyMy4xNTM1IEMyNS42NTc1LDI2LjE0NTUgMjMuMjIyNSwyOC41Nzk1IDIwLjIzMDUsMjguNTc5NSIgZmlsbD0iIzAwNzhENCI+PC9wYXRoPg0KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0iIzAwNzhENCIgcG9pbnRzPSIxOS4zNTQgMTQuNjc5NiAyMC44NTQgMTQuNjc5NiAyMC44NTQgMC45OTQ2IDE5LjM1NCAwLjk5NDYiPjwvcG9seWdvbj4NCiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9IiMwMDc4RDQiIHBvaW50cz0iMTkuMzU0IDQ1LjE2NDYgMjAuODU0IDQ1LjE2NDYgMjAuODU0IDMxLjc3NDYgMTkuMzU0IDMxLjc3NDYiPjwvcG9seWdvbj4NCiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9IiMwMDc4RDQiIHBvaW50cz0iMTIuMjMwNSAxOS4xNzc3IDAuNzA4NSAxMi43MTc3IDEuNDQyNSAxMS40MDg3IDEyLjk2NDUgMTcuODY4NyI+PC9wb2x5Z29uPg0KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0iIzAwNzhENCIgcG9pbnRzPSIzOC42MTUyIDM0LjY3MjggMjcuNzIwMiAyOC4yODI4IDI4LjQ4MDIgMjYuOTg5OCAzOS4zNzUyIDMzLjM3OTgiPjwvcG9seWdvbj4NCiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9IiMwMDc4RDQiIHBvaW50cz0iMS40NTQxIDM0Ljc3ODMgMC42OTYxIDMzLjQ4MzMgMTEuOTA1MSAyNi45MTkzIDEyLjY2MzEgMjguMjE0MyI+PC9wb2x5Z29uPg0KICAgICAgICAgICAgPHBhdGggZD0iTTEuNTQ1OSwzMy44MzQ5IEwyMC4xNDc5LDQ0LjUyMjkgTDM4LjcwNTksMzMuNzU3OSBMMzguNjYwOSwxMi4zMDM5IEwyMC4wNTk5LDEuNjE0OSBMMS41MDA5LDEyLjM4MDkgTDEuNTQ1OSwzMy44MzQ5IFogTTIwLjE0OTksNDYuMTM5OSBDMjAuMDIwOSw0Ni4xMzk5IDE5Ljg5MTksNDYuMTA1OSAxOS43NzQ5LDQ2LjAzOTkgTDAuNDIyOSwzNC45MTk5IEMwLjE5MDksMzQuNzg1OSAwLjA0NzksMzQuNTM4OSAwLjA0NjksMzQuMjcxOSBMLTAuMDAwMSwxMS45NTA5IEMtMC4wMDExLDExLjY4MjkgMC4xNDE5LDExLjQzNDkgMC4zNzM5LDExLjMwMDkgTDE5LjY4MTksMC4xMDA5IEMxOS45MTM5LC0wLjAzMzEgMjAuMTk4OSwtMC4wMzMxIDIwLjQzMTksMC4wOTg5IEwzOS43ODM5LDExLjIxODkgQzQwLjAxNjksMTEuMzUyOSA0MC4xNTg5LDExLjU5OTkgNDAuMTU5OSwxMS44NjY5IEw0MC4yMDY5LDM0LjE4NzkgQzQwLjIwNzksMzQuNDU1OSA0MC4wNjU5LDM0LjcwMzkgMzkuODMyOSwzNC44Mzc5IEwyMC41MjQ5LDQ2LjAzNzkgQzIwLjQwODksNDYuMTA1OSAyMC4yNzg5LDQ2LjEzOTkgMjAuMTQ5OSw0Ni4xMzk5IFoiIGZpbGw9IiMwMDc4RDQiPjwvcGF0aD4NCiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9IiMwMDc4RDQiIHBvaW50cz0iMjguMTU4MiAxOS4yMTA5IDI3LjQxNjIgMTcuOTA1OSAzOC45MDMyIDExLjM3NTkgMzkuNjQ1MiAxMi42ODA5Ij48L3BvbHlnb24+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4="},9523:(M,I,e)=>{e.d(I,{Z:()=>g});const g="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjQ1cHgiIGhlaWdodD0iMzdweCIgdmlld0JveD0iMCAwIDQ1IDM3IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBmaWxsPSIjMDA3OEQ0Ij4NCiAgICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz0iMjUuMTI0NCAwLjAwMDEgMjIuMjU1NCA5LjkxMDEgNDQuMjY4NCA5LjkxMDEgNDQuMjY4NCAwLjAwMDEiPjwvcG9seWdvbj4NCiAgICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz0iMCAwLjAwMDEgMCA5LjkxMDEgMTUuOTggOS45MTAxIDE4Ljg0OSAwLjAwMDEiPjwvcG9seWdvbj4NCiAgICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz0iMjEuMjk5NCAxMy4yMTM5IDE4LjQzMDQgMjMuMTI1OSA0NC4yNjg0IDIzLjEyNTkgNDQuMjY4NCAxMy4yMTM5Ij48L3BvbHlnb24+DQogICAgICAgICAgICA8cG9seWdvbiBwb2ludHM9IjAgMTMuMjEzOSAwIDIzLjEyNTkgMTIuMTU0IDIzLjEyNTkgMTUuMDIyIDEzLjIxMzkiPjwvcG9seWdvbj4NCiAgICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz0iMTcuNDc0NCAyNi40Mjg2IDE0LjYwNTQgMzYuMzM5NiA0NC4yNjg0IDM2LjMzOTYgNDQuMjY4NCAyNi40Mjg2Ij48L3BvbHlnb24+DQogICAgICAgICAgICA8cG9seWdvbiBwb2ludHM9IjAgMjYuNDI4NiAwIDM2LjMzOTYgOC4zMjkgMzYuMzM5NiAxMS4xOTcgMjYuNDI4NiI+PC9wb2x5Z29uPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+"}}]);