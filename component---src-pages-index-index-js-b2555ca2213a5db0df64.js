"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[523,618,587,998,595,700,689,31],{4660:function(e,n,t){t.r(n);var i=t(7294);n.default=function(e){let{Author:n,HeadTitle:t,email:a,phoneNumber:l,pdfLink:r}=e;return i.createElement("div",{id:"hd"},i.createElement("div",{className:"yui-gc"},i.createElement("div",{className:"yui-u first"},i.createElement("h1",null,n),i.createElement("h2",null,t)),i.createElement("div",{className:"yui-u"},i.createElement("div",{className:"contact-info"},i.createElement("h3",null,i.createElement("a",{id:"pdf",href:r},"Download PDF")),i.createElement("h3",null,i.createElement("a",{href:"mailto:"+a},a)),i.createElement("h3",null,l)))))}},3782:function(e,n,t){t.r(n);var i=t(7294);n.default=function(e){let{educations:n}=e;return i.createElement("div",{className:"yui-gf"},i.createElement("div",{className:"yui-u first"},i.createElement("h2",null,"Education")),void 0!==n&&n.map(((e,n)=>i.createElement("div",{className:"yui-u",key:n},i.createElement("h2",null,e.inistitute," - ",e.city),i.createElement("h3",null,e.field," ")))))}},8492:function(e,n,t){t.r(n);var i=t(7294);n.default=function(e){let{experiences:n}=e;return i.createElement("div",{className:"yui-gf"},i.createElement("div",{className:"yui-u first"},i.createElement("h2",null,"Experience")),i.createElement("div",{className:"yui-u"},void 0!==n&&n.map(((e,t)=>i.createElement("div",{className:"job "+(n.length-1===t?"last":""),key:t},i.createElement("h2",null,e.company),i.createElement("h3",null,e.title),i.createElement("h4",null,e.date),i.createElement("div",{dangerouslySetInnerHTML:{__html:e.description}}))))))}},7683:function(e,n,t){t.r(n);var i=t(7294);n.default=function(e){let{interests:n}=e;return i.createElement("div",{className:"yui-gf last"},i.createElement("div",{className:"yui-u first"},i.createElement("h2",null,"Interests")),void 0!==n&&n.map(((e,n)=>i.createElement("div",{className:"yui-u",key:n},i.createElement("h2",null,e.description)))))}},8635:function(e,n,t){t.r(n);var i=t(7294);function a(e){let{item:n,link:t}=e;return""===t?i.createElement("h2",null,n):i.createElement("a",{href:t,title:n}," ",n)}n.default=function(e){let{Skills:n}=e;const{0:t,1:l}=(0,i.useState)([]);function r(e,n){if(!e)return[];const t=e.slice(0,n);return t.length?[t].concat(r(e.slice(n,e.length),n)):e}return(0,i.useEffect)((()=>{const e=r(n,4);l(e)}),[]),i.createElement("div",{className:"yui-gf"},i.createElement("div",{className:"yui-u first"},i.createElement("h2",null,"Skills")),i.createElement("div",{className:"yui-u"},void 0!==t&&t.map(((e,n)=>i.createElement("div",{className:"talent",key:n},e.map(((e,n)=>i.createElement(a,{item:e.name,key:n,link:e.link}))))))))}},3189:function(e,n,t){t.r(n);var i=t(7294);n.default=function(e){let{summary:n}=e;return i.createElement("div",{className:"yui-gf"},i.createElement("div",{className:"yui-u first"},i.createElement("h2",null,"Profile")),i.createElement("div",{className:"yui-u"},i.createElement("p",{className:"enlarge"},n)))}},6453:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var i=t(7294),a=t(8635),l=t(3189),r=t(8492),o=t(3782),s=t(7683);var c=[{company:"BANCA WIDIBA",title:"Senior Devops",date:"Gen 2018 - Present",description:"\n    <ol>\n      <li> Finding a solution to resolving, with some open source technology.</li>\n      <li> Development and deploying web/data solutions.</li>\n      <li> Creating a dynamic grid table for all reports.</li>\n      <li> Management of authentication devices and permissions.</li>\n      <li> Development of open source solutions for data management and integration with existing systems.</li>\n      <li> Creating Docker file and stages for Travis and CircleCI.</li>\n      <li> Using Docker to deploy microservices.</li>\n      <li> Creating pipeline for CI/CD.</li>\n      <li> Scoping project requirements using Agile & Scrum principles related to the mission-critical projects.</li>\n    </ol>\n    "},{company:"DECHIT",title:"IT System Specialist",date:"Jul 2013 - Gen 2018",description:"\n    <ol>\n      <li> Management and installation of Linux systems.</li>\n      <li> Creation of automation through development with scripting languages such as Bash (on Linux platform) and Powershell (on Windows platform).</li>\n      <li> Management and integration of LDAP-based systems.</li>\n      <li> Installation and creation of plugins for the management of warehouse devices, using the PHP language.</li>\n      <li> Installation and creation of Windows/Linux system storage/backup pipelines.</li>\n      <li> Installation of databases such as PostgreSQL and MySql.</li>\n      <li> Management and maintenance of file servers and document management.</li>\n    </ol>\n    "},{company:"OPERA21",title:"IT System Specialist",date:"Dec 2008 - Jul 2013",description:"\n    <ol>\n      <li> Installation and management Windows/Linux client/server and related applications.</li>\n      <li> Development of applications for different needs and problems. </li>\n      <li> System integration through open source technologies.</li>\n      <li> Creation of technologically advanced meeting rooms with sophisticated audio/video systems.</li>\n    </ol>\n    "},{company:"R.I.E.",title:"Network/Electric Technician",date:"Jan 2008 - Dec 2008",description:"\n    <ol>\n      <li> Installation, configuration and management network devices, from the cable to the switch.</li>\n      <li> Installation and configuration of civil and industrial electrical systems. </li>\n      <li> Drawing with CAD of wiring diagrams of cabins.</li>\n    </ol>\n    "},{company:"ETNOTEAM",title:"Junior System Integrator",date:"Jul 2007 - Jan 2008",description:"\n    <ol>\n      <li> Development of a framework for interfacing with local databases.</li>\n    </ol>\n    "}];var m=[{name:"Python",link:""},{name:"Rust",link:""},{name:"PHP",link:""},{name:".NET",link:""},{name:"Powershell",link:""},{name:"Javascript",link:""},{name:"Bash",link:""},{name:"Perl",link:""},{name:"Linux",link:""},{name:"Unit Testing",link:""},{name:"Docker",link:""},{name:"Podman",link:""},{name:"Kubernetes",link:""},{name:"VMWare EsXi",link:""},{name:"CircleCI",link:""},{name:"MongoDB",link:""},{name:"CouchDB",link:""},{name:"SQL",link:""},{name:"PostgreSQL",link:""},{name:"MySQL",link:""}];var u=[{inistitute:"CE.S.R.A.",city:"CODOGNO, LODI",field:"Software Engineering (Sep 2006 - Jun 2007)"},{inistitute:"I.T.I.S. A.VOLTA",city:"LODI, LODI",field:"Electrotechnical Expert (Sep 2001 - Jul 2006)"}];var d=[{description:"Technology and Programming is my first interest."},{description:"Since I was a child I have been attracted by biology and zoology; combining science with technology is really interesting."},{description:"Acoustic and electric guitar; I love Hard Rock and Heavy Metal."}];var f=function(){return i.createElement("div",{id:"bd"},i.createElement("div",{id:"yui-main"},i.createElement("div",{className:"yui-b"},i.createElement(l.default,{summary:"For more than 15 years I have been involved in solving problems through technology, developing solutions using modern languages. All my applications are open-source and available to everyone."}),i.createElement(a.default,{Skills:m}),i.createElement(r.default,{experiences:c}),i.createElement(o.default,{educations:u}),i.createElement(s.default,{interests:d}))))}},2436:function(e,n,t){t.r(n),t.d(n,{default:function(){return o}});var i=t(7294),a=t(4660),l=t(6453),r=t.p+"static/Resume-4f50a5151a5aa8d256144e2a95999011.pdf";var o=function(){return i.createElement(i.Fragment,null,i.createElement(a.default,{Author:"Matteo Guadrini",HeadTitle:"DevOps && Rust/Python Developer",email:"matteo.guadrini@hotmail.it",pdfLink:r}),i.createElement(l.default,null))}}}]);
//# sourceMappingURL=component---src-pages-index-index-js-b2555ca2213a5db0df64.js.map