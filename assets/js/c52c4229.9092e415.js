"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[73337],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70153:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const o={slug:"explore-options",title:"1-5. Exploring Cloud-Native Options",authors:["cory"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["cloud-native","containers","decision-tree","kubernetes","serverless","microservices"],image:"https://azure.github.io/Cloud-Native/img/og/30-05.png",description:"There are many cloud-native technologies - but which are the best fit for your projects?",tags:["cloud-native","30daysofcloudnative","zero-to-hero","ask-the-expert","azure-kubernetes-service"]},r=void 0,s={permalink:"/Cloud-Native/cnny-2023/explore-options",source:"@site/blog-cnny/2023-01-27/explore-options.md",title:"1-5. Exploring Cloud-Native Options",description:"There are many cloud-native technologies - but which are the best fit for your projects?",date:"2023-01-27T00:00:00.000Z",formattedDate:"January 27, 2023",tags:[{label:"cloud-native",permalink:"/Cloud-Native/cnny-2023/tags/cloud-native"},{label:"30daysofcloudnative",permalink:"/Cloud-Native/cnny-2023/tags/30-daysofcloudnative"},{label:"zero-to-hero",permalink:"/Cloud-Native/cnny-2023/tags/zero-to-hero"},{label:"ask-the-expert",permalink:"/Cloud-Native/cnny-2023/tags/ask-the-expert"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/cnny-2023/tags/azure-kubernetes-service"}],readingTime:5.55,hasTruncateMarker:!1,authors:[{name:"Cory Skimming",title:"Sr. Product Marketing Manager",url:"https://twitter.com/cskimming",imageURL:"https://pbs.twimg.com/profile_images/1493684068227055617/iC9r8v6Z_400x400.jpg",key:"cory"}],frontMatter:{slug:"explore-options",title:"1-5. Exploring Cloud-Native Options",authors:["cory"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["cloud-native","containers","decision-tree","kubernetes","serverless","microservices"],image:"https://azure.github.io/Cloud-Native/img/og/30-05.png",description:"There are many cloud-native technologies - but which are the best fit for your projects?",tags:["cloud-native","30daysofcloudnative","zero-to-hero","ask-the-expert","azure-kubernetes-service"]},nextItem:{title:"1-4. Microservices 101",permalink:"/Cloud-Native/cnny-2023/microservices-101"}},l={authorsImageUrls:[void 0]},c=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"To Containerize or not to Containerize?",id:"to-containerize-or-not-to-containerize",level:2},{value:"The power of Kubernetes",id:"the-power-of-kubernetes",level:2},{value:"Resources",id:"resources",level:2},{value:"What&#39;s up next in #CloudNativeNewYear?",id:"whats-up-next-in-cloudnativenewyear",level:2}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/cnny-2023/explore-options"}),(0,i.kt)("meta",{name:"twitter:title",content:"Serverless Container Options"}),(0,i.kt)("meta",{name:"twitter:description",content:"Explore technology and tooling options for building and deploying your Cloud-native solution"}),(0,i.kt)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/og/30-05.png"}),(0,i.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.kt)("meta",{name:"twitter:creator",content:"@cskimming"}),(0,i.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,i.kt)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/cnny-2023/explore-options"})),(0,i.kt)("p",null,"We are excited to be wrapping up our first week of #CloudNativeNewYear! This week, we have tried to set the stage by covering the fundamentals of cloud-native practices and technologies, including primers on ",(0,i.kt)("a",{parentName:"p",href:"https://azure.github.io/Cloud-Native/cnny-2023/containers-101/"},"containerization"),", ",(0,i.kt)("a",{parentName:"p",href:"https://azure.github.io/Cloud-Native/cnny-2023/microservices-101"},"microservices"),", and ",(0,i.kt)("a",{parentName:"p",href:"https://azure.github.io/Cloud-Native/cnny-2023/Kubernetes-101"},"Kubernetes"),".  "),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Don't forget to sign up for the the ",(0,i.kt)("a",{parentName:"mdxAdmonitionTitle",href:"https://aka.ms/CNNY/Challenge"},"Cloud Skills Challenge"),"!")),(0,i.kt)("p",null,"Today, we will do a brief recap of some of these technologies and provide some basic guidelines for when it is optimal to use each. "),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To Containerize or not to Containerize?"),(0,i.kt)("li",{parentName:"ul"},"The power of Kubernetes"),(0,i.kt)("li",{parentName:"ul"},"Where does Serverless fit? "),(0,i.kt)("li",{parentName:"ul"},"Resources"),(0,i.kt)("li",{parentName:"ul"},"What's coming next!")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(25704).Z,width:"3840",height:"654"})),(0,i.kt)("hr",null),(0,i.kt)("admonition",{title:"Just joining us now? Check out these other Week 1 posts:",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://azure.github.io/Cloud-Native/cnny-2023/cloud-native-fundamentals"},"Cloud-native fundamentals")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://azure.github.io/Cloud-Native/cnny-2023/containers-101"},"Containers 101")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://azure.github.io/Cloud-Native/cnny-2023/microservices-101"},"Microservices 101")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://azure.github.io/Cloud-Native/cnny-2023/Kubernetes-101"},"Kubernetes 101")))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"to-containerize-or-not-to-containerize"},"To Containerize or not to Containerize?"),(0,i.kt)("p",null,"As mentioned in our Containers 101 post earlier this week, containers can provide several benefits over traditional virtualization methods, which has made them popular within the software development community. Containers provide a consistent and predictable runtime environment, which can help reduce the risk of compatibility issues and simplify the deployment process. Additionally, containers can improve resource efficiency by allowing multiple applications to run on the same host while isolating their dependencies. "),(0,i.kt)("p",null,"Some types of apps that are a particularly good fit for containerization include: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Microservices:")," Containers are particularly well-suited for microservices-based applications, as they can be used to isolate and deploy individual components of the system. This allows for more flexibility and scalability in the deployment process."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Stateless applications:")," Applications that do not maintain state across multiple sessions, such as web applications, are well-suited for containers. Containers can be easily scaled up or down as needed and replaced with new instances, without losing data."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Portable applications:")," Applications that need to be deployed in different environments, such as on-premises, in the cloud, or on edge devices, can benefit from containerization. The consistent and portable runtime environment of containers can make it easier to move the application between different environments."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Legacy applications:")," Applications that are built using older technologies or that have compatibility issues can be containerized to run in an isolated environment, without impacting other applications or the host system."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Dev and testing environments:")," Containerization can be used to create isolated development and testing environments, which can be easily created and destroyed as needed.")),(0,i.kt)("p",null,"While there are many types of applications that can benefit from a containerized approach, it's worth noting that containerization is not ",(0,i.kt)("strong",{parentName:"p"},"always")," the best option, and it's important to weigh the benefits and trade-offs before deciding to containerize an application. Additionally, some types of applications may not be a good fit for containers including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Apps that require full access to host resources: Containers are isolated from the host system, so if an application needs direct access to hardware resources such as GPUs or specialized devices, it might not work well in a containerized environment."),(0,i.kt)("li",{parentName:"ul"},"Apps that require low-level system access: If an application requires deep access to the underlying operating system, it may not be suitable for running in a container."),(0,i.kt)("li",{parentName:"ul"},"Applications that have specific OS dependencies: Apps that have specific dependencies on a certain version of an operating system or libraries may not be able to run in a container."),(0,i.kt)("li",{parentName:"ul"},"Stateful applications: Apps that maintain state across multiple sessions, such as databases, may not be well suited for containers. Containers are ephemeral by design, so the data stored inside a container may not persist between restarts.")),(0,i.kt)("p",null,"The good news is that some of these limitations can be overcome with the use of specialized containerization technologies such as Kubernetes, and by carefully designing the architecture of the application. "),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"the-power-of-kubernetes"},"The power of Kubernetes"),(0,i.kt)("p",null,"Speaking of Kubernetes..."),(0,i.kt)("p",null,"Kubernetes is a powerful tool for managing and deploying containerized applications in production environments, particularly for applications that need to scale, handle large numbers of requests, or run in multi-cloud or hybrid environments."),(0,i.kt)("p",null,"Kubernetes is well-suited for a wide variety of applications, but it is particularly well-suited for the following types of applications:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Microservices-based applications:")," Kubernetes provides a powerful set of tools for managing and deploying microservices-based applications, making it easy to scale, update, and manage the individual components of the application."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Stateful applications:")," Kubernetes provides support for stateful applications through the use of Persistent Volumes and StatefulSets, allowing for applications that need to maintain state across multiple instances. "),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Large-scale, highly-available systems:")," Kubernetes provides built-in support for scaling, self-healing, and rolling updates, making it an ideal choice for large-scale, highly-available systems that need to handle large numbers of users and requests."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Multi-cloud and hybrid environments:")," Kubernetes can be used to deploy and manage applications across multiple cloud providers and on-premises environments, making it a good choice for organizations that want to take advantage of the benefits of multiple cloud providers or that need to deploy applications in a hybrid environment.")),(0,i.kt)("admonition",{title:"New to Kubernetes?",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Catch ",(0,i.kt)("a",{parentName:"p",href:"https://info.microsoft.com/ww-ondemand-a-quickstart-guide-to-kubernetes-concepts.html?lcid=en-us"},"A Quickstart Guide to Kubernetes Concepts")," on demand, now!")),(0,i.kt)("hr",null),(0,i.kt)("h1",{id:"where-does-serverless-fit-in"},"Where does Serverless fit in?"),(0,i.kt)("p",null,"Serverless is a cloud computing model where the cloud provider (like Azure) is responsible for executing a piece of code by dynamically allocating the resources. With serverless, you only pay for the exact amount of compute time that you use, rather than paying for a fixed amount of resources. This can lead to significant cost savings, particularly for applications with variable or unpredictable workloads."),(0,i.kt)("p",null,"Serverless is commonly used for building applications like web or mobile apps, IoT, data processing, and real-time streaming - apps where the workloads are variable and high scalability is required.\nIt's important to note that serverless is not a replacement for all types of workloads - it's best suited for stateless, short-lived and small-scale workloads."),(0,i.kt)("p",null,"For a detailed look into the world of Serverless and lots of great learning content, revisit ",(0,i.kt)("a",{parentName:"p",href:"https://azure.github.io/Cloud-Native/serverless-september/30DaysOfServerless/"},"#30DaysofServerless"),"."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Register")," for the ",(0,i.kt)("a",{parentName:"li",href:"https://aka.ms/Challenge"},"Cloud Skills Challenge")," - 30 days to complete it!"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Learning Resources"),": ",(0,i.kt)("a",{parentName:"li",href:"https://aka.ms/CNNY/collection"},"#30DaysOfCloudNative Collection")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"eBook:")," ",(0,i.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/resources/cloud-native-infrastructure-with-microsoft-azure/?WT.mc_id=javascript-74010-ninarasi"},"Cloud Native Infrastructure with Azure")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"eBook:")," ",(0,i.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/resources/azure-cloud-native-architecture-mapbook/?WT.mc_id=javascript-74010-ninarasi"},"Cloud-native Architecture Mapbook"))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"whats-up-next-in-cloudnativenewyear"},"What's up next in #CloudNativeNewYear?"),(0,i.kt)("p",null,"Week 1 has been all about the fundamentals of cloud-native. Next week, the team will be diving in to application deployment with Azure Kubernetes Service. Don't forget to ",(0,i.kt)("a",{parentName:"p",href:"https://azure.github.io/Cloud-Native/cnny-2023/rss.xml?WT.mc_id=javascript-74010-ninarasi"},"subscribe")," to the blog to get daily posts delivered directly to your favorite feed reader!"),(0,i.kt)("hr",null))}u.isMDXComponent=!0},25704:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hero-banner-991129dffd470b38678db8972274c09a.png"}}]);