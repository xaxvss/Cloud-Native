"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8031],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3429:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(4137));const r={slug:"microservices-10",title:"10. Microservices Communication",authors:["paul"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","serverless","containers","microservices"],image:"./img/banner.png",description:"Continuing our journey into Azure Container Apps with a look at microservices hosting, and how they communicate with each other in the context of Azure Container Apps!",tags:["serverless-september","30-days-of-serverless","azure-container-apps","microservices","docker-compose"]},i=void 0,s={permalink:"/Cloud-Native/blog/microservices-10",source:"@site/blog/2022-09-10/index.md",title:"10. Microservices Communication",description:"Continuing our journey into Azure Container Apps with a look at microservices hosting, and how they communicate with each other in the context of Azure Container Apps!",date:"2022-09-10T00:00:00.000Z",formattedDate:"September 10, 2022",tags:[{label:"serverless-september",permalink:"/Cloud-Native/blog/tags/serverless-september"},{label:"30-days-of-serverless",permalink:"/Cloud-Native/blog/tags/30-days-of-serverless"},{label:"azure-container-apps",permalink:"/Cloud-Native/blog/tags/azure-container-apps"},{label:"microservices",permalink:"/Cloud-Native/blog/tags/microservices"},{label:"docker-compose",permalink:"/Cloud-Native/blog/tags/docker-compose"}],readingTime:7.655,hasTruncateMarker:!1,authors:[{name:"Paul Yu",title:"Cloud Native Advocate @Microsoft",url:"https://github.com/pauldotyu",imageURL:"https://github.com/pauldotyu.png",key:"paul"}],frontMatter:{slug:"microservices-10",title:"10. Microservices Communication",authors:["paul"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","serverless","containers","microservices"],image:"./img/banner.png",description:"Continuing our journey into Azure Container Apps with a look at microservices hosting, and how they communicate with each other in the context of Azure Container Apps!",tags:["serverless-september","30-days-of-serverless","azure-container-apps","microservices","docker-compose"]},prevItem:{title:"09. Hello, Azure Container Apps",permalink:"/Cloud-Native/blog/09-aca-fundamentals"},nextItem:{title:"11. Scaling Container Apps",permalink:"/Cloud-Native/blog/11-scaling-container-apps"}},l={image:n(4111).Z,authorsImageUrls:[void 0]},p=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Environments and virtual networking in ACA",id:"environments-and-virtual-networking-in-aca",level:2},{value:"Basic microservices communication in ACA",id:"basic-microservices-communication-in-aca",level:2},{value:"Let&#39;s walk though an example ACA deployment",id:"lets-walk-though-an-example-aca-deployment",level:2},{value:"Summary and next steps",id:"summary-and-next-steps",level:2},{value:"Exercises",id:"exercises",level:2},{value:"Resources",id:"resources",level:2}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/blog/microservices-10"}),(0,o.kt)("meta",{name:"twitter:title",content:"#30DaysOfServerless: Microservices Communications with Azure Container Apps"}),(0,o.kt)("meta",{name:"twitter:description",content:"#30DaysOfServerless: Microservices Communications with Azure Container Apps"}),(0,o.kt)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/banners/post-kickoff.png"}),(0,o.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.kt)("meta",{name:"twitter:creator",content:"@nitya"}),(0,o.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,o.kt)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/blog/microservices-10"})),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Welcome to ",(0,o.kt)("inlineCode",{parentName:"p"},"Day 10")," of #30DaysOfServerless!"),(0,o.kt)("p",null,"We continue our exploraton into Azure Container Apps, with today's focus being ",(0,o.kt)("em",{parentName:"p"},"communication")," between microservices, and how to configure your Azure Container Apps environment in the context of a deployment example."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ACA Environments & Virtual Networking"),(0,o.kt)("li",{parentName:"ul"},"Basic Microservices Communications"),(0,o.kt)("li",{parentName:"ul"},"Walkthrough: ACA Deployment Example"),(0,o.kt)("li",{parentName:"ul"},"Summary and Next Steps"),(0,o.kt)("li",{parentName:"ul"},"Exercise: Try this yourself!"),(0,o.kt)("li",{parentName:"ul"},"Resources: For self-study!")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4111).Z,width:"1600",height:"672"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In yesterday's post, we learned what the Azure Container Apps (ACA) service is and the problems it aims to solve. It is considered to be a Container-as-a-Service platform since much of the complex implementation details of running a Kubernetes cluster is managed for you."),(0,o.kt)("p",null,"Some of the use cases for ACA include event-driven processing jobs and background tasks, but this article will focus on hosting microservices, and how they can communicate with each other within the ACA service. At the end of this article, you will have a solid understanding of how networking and communication is handled and will leave you with a few tutorials to try."),(0,o.kt)("h2",{id:"environments-and-virtual-networking-in-aca"},"Environments and virtual networking in ACA"),(0,o.kt)("p",null,"Before we jump into microservices communication, we should review how networking works within ACA. With ACA being a managed service, Azure will take care of most of your underlying infrastructure concerns. As you provision an ACA resource, Azure provisions an Environment to deploy Container Apps into. This environment is your isolation boundary."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.microsoft.com/azure/container-apps/media/environments/azure-container-apps-environments.png",alt:"Azure Container Apps Environment"})),(0,o.kt)("p",null,"By default, Azure creates and manages a new Virtual Network (VNET) for you and the VNET is associated with the environment. As you deploy container apps, they are deployed into the same VNET and the environment is assigned a static public IP address which allows your apps to be accessible over the internet. This VNET is not visible or manageable."),(0,o.kt)("p",null,'If you need control of the networking flows within the VNET, you can pre-provision one and tell Azure to deploy an environment within it. This "bring-your-own" VNET model allows you to deploy an environment in either ',(0,o.kt)("strong",{parentName:"p"},"External")," or ",(0,o.kt)("strong",{parentName:"p"},"Internal")," modes. Deploying an environment in ",(0,o.kt)("strong",{parentName:"p"},"External")," mode gives you the flexibility of managing your own VNET, while still allowing your containers to be accessible from outside the environment; a static public IP address is assigned to the environment. When deploying in ",(0,o.kt)("strong",{parentName:"p"},"Internal")," mode, your containers are accessible within the environment and/or VNET but not accessible from the internet."),(0,o.kt)("p",null,"Bringing your own VNET will require some planning and you will need dedicate an empty subnet which will be used exclusively by the ACA environment. The size of your subnet will be dependant on how many containers you plan on deploying and your scaling requirements and one requirement to know is that the subnet address range must have have a ",(0,o.kt)("inlineCode",{parentName:"p"},"/23")," CIDR prefix at minimum. You will also need to think about your deployment strategy since ACA has the concept of ",(0,o.kt)("strong",{parentName:"p"},"Revisions")," which will also consume IPs from your subnet."),(0,o.kt)("p",null,"Some additional restrictions to consider when planning your subnet address space is listed in the Resources section below and can be addressed in future posts, so be sure to follow us on ",(0,o.kt)("a",{parentName:"p",href:"https://dev.to/azure"},"dev.to")," and bookmark the ",(0,o.kt)("a",{parentName:"p",href:"https://aka.ms/serverless-september"},"ServerlessSeptember")," site."),(0,o.kt)("h2",{id:"basic-microservices-communication-in-aca"},"Basic microservices communication in ACA"),(0,o.kt)("p",null,"When it comes to communications between containers, ACA addresses this concern with its ",(0,o.kt)("strong",{parentName:"p"},"Ingress")," capabilities. With ",(0,o.kt)("strong",{parentName:"p"},"HTTP Ingress")," enabled on your container app, you can expose your app on a HTTPS endpoint."),(0,o.kt)("p",null,"If your environment is deployed using default networking and your containers needs to be accessible from outside the environment, you will need to set the ",(0,o.kt)("strong",{parentName:"p"},"Ingress traffic")," option to ",(0,o.kt)("strong",{parentName:"p"},"Accepting traffic from anywhere"),". This will generate a Full-Qualified Domain Name (FQDN) which you can use to access your app right away. The ingress feature also generates and assigns a Secure Socket Layer (SSL) certificate for the FQDN."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"External ingress on Container App",src:n(4429).Z,width:"1145",height:"961"})),(0,o.kt)("p",null,"If your environment is deployed using default networking and your containers only need to communicate with other containers in the environment, you'll need to set the ",(0,o.kt)("strong",{parentName:"p"},"Ingress traffic")," option to ",(0,o.kt)("strong",{parentName:"p"},"Limited to Container Apps Environment"),". You get a FQDN here as well, but in the section below we'll see how that changes."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Internal ingress on Container App",src:n(1029).Z,width:"1141",height:"954"})),(0,o.kt)("p",null,"As mentioned in the networking section above, if you deploy your ACA environment into a VNET in ",(0,o.kt)("strong",{parentName:"p"},"internal")," mode, your options will be ",(0,o.kt)("strong",{parentName:"p"},"Limited to Container Apps Environment")," or ",(0,o.kt)("strong",{parentName:"p"},"Limited to VNet"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Ingress on internal virtual network",src:n(7823).Z,width:"2072",height:"1596"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note how the ",(0,o.kt)("strong",{parentName:"p"},"Accepting traffic from anywhere")," option is greyed out. If your VNET is deployed in ",(0,o.kt)("strong",{parentName:"p"},"external")," mode, then the option will be available.")),(0,o.kt)("h2",{id:"lets-walk-though-an-example-aca-deployment"},"Let's walk though an example ACA deployment"),(0,o.kt)("p",null,"The diagram below illustrates a simple microservices application that I deployed to ACA. The three container apps all have ingress enabled. The ",(0,o.kt)("inlineCode",{parentName:"p"},"greeting-service")," app calls two backend services; a ",(0,o.kt)("inlineCode",{parentName:"p"},"hello-service")," that returns the text ",(0,o.kt)("strong",{parentName:"p"},"Hello")," (in random casing) and a ",(0,o.kt)("inlineCode",{parentName:"p"},"world-service")," that returns the text ",(0,o.kt)("strong",{parentName:"p"},"World")," (in a few random languages). The greeting-service concatenates the two strings together and returns ",(0,o.kt)("strong",{parentName:"p"},"Hello World")," to the browser. The greeting-service is the only service accessible via external ingress while two backend services are only accessible via internal ingress."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Greeting Service overview",src:n(4944).Z,width:"975",height:"718"})),(0,o.kt)("p",null,"With ingress enabled, let's take a quick look at the FQDN structures. Here is the FQDN of the ",(0,o.kt)("strong",{parentName:"p"},"external")," greeting-service."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"https://greeting-service.victoriouswave-3749d046.eastus.azurecontainerapps.io")),(0,o.kt)("p",null,"We can break it down into these components:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"https://"),(0,o.kt)("strong",{parentName:"p"},"[YOUR-CONTAINER-APP-NAME]"),(0,o.kt)("inlineCode",{parentName:"p"},"."),(0,o.kt)("strong",{parentName:"p"},"[RANDOM-NAME]"),(0,o.kt)("inlineCode",{parentName:"p"},"-"),(0,o.kt)("strong",{parentName:"p"},"[RANDOM-CHARACTERS]"),(0,o.kt)("inlineCode",{parentName:"p"},"."),(0,o.kt)("strong",{parentName:"p"},"[AZURE-REGION]"),(0,o.kt)("inlineCode",{parentName:"p"},".containerapps.io")),(0,o.kt)("p",null,"And here is the FQDN of the ",(0,o.kt)("strong",{parentName:"p"},"internal")," hello-service."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"https://hello-service.internal.victoriouswave-3749d046.eastus.azurecontainerapps.io")),(0,o.kt)("p",null,"Can you spot the difference between FQDNs?"),(0,o.kt)("p",null,"That was too easy \ud83d\ude09... the word ",(0,o.kt)("inlineCode",{parentName:"p"},"internal")," is added as a subdomain in the FQDN between your container app name and the random name for all internal ingress endpoints."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"https://"),(0,o.kt)("strong",{parentName:"p"},"[YOUR-CONTAINER-APP-NAME]"),(0,o.kt)("inlineCode",{parentName:"p"},".internal."),(0,o.kt)("strong",{parentName:"p"},"[RANDOM-NAME]"),(0,o.kt)("inlineCode",{parentName:"p"},"-"),(0,o.kt)("strong",{parentName:"p"},"[RANDOM-CHARACTERS]"),(0,o.kt)("inlineCode",{parentName:"p"},"."),(0,o.kt)("strong",{parentName:"p"},"[AZURE-REGION]"),(0,o.kt)("inlineCode",{parentName:"p"},".containerapps.io")),(0,o.kt)("p",null,"Now that we know the internal service FQDNs, we use them in the greeting-service app to achieve basic service-to-service communications."),(0,o.kt)("p",null,"So we can inject FQDNs of downstream APIs to upstream apps using environment variables, but the downside to this approach is that need to deploy downstream containers ahead of time and this dependency will need to be planned for during your deployment process. There are ways around this and one option is to leverage the auto-injected environment variables within your app code."),(0,o.kt)("p",null,"If I use the Console blade for the hello-service container app and run the ",(0,o.kt)("inlineCode",{parentName:"p"},"env")," command, you will see environment variables named ",(0,o.kt)("inlineCode",{parentName:"p"},"CONTAINER_APP_NAME")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"CONTAINER_APP_ENV_DNS_SUFFIX"),". You can use these values to determine FQDNs within your upstream app."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"hello-service environment variables",src:n(5375).Z,width:"2342",height:"1992"})),(0,o.kt)("p",null,"Back in the ",(0,o.kt)("inlineCode",{parentName:"p"},"greeting-service")," container I can invoke the hello-service container's ",(0,o.kt)("inlineCode",{parentName:"p"},"sayhello")," method. I know the container app name is hello-service and this service is exposed over an internal ingress, therefore, if I add the ",(0,o.kt)("inlineCode",{parentName:"p"},"internal")," subdomain to the ",(0,o.kt)("inlineCode",{parentName:"p"},"CONTAINER_APP_ENV_DNS_SUFFIX")," I can invoke a HTTP request to the hello-service from my greeting-service container."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Invoke the sayHello method from the greeting-service container",src:n(4058).Z,width:"1133",height:"955"})),(0,o.kt)("p",null,"As you can see, the ingress feature enables communications to other container apps over HTTP/S and ACA will inject environment variables into our container to help determine what the ingress FQDNs would be. All we need now is a little bit of code modification in the greeting-service app and build the FQDNs of our backend APIs by retrieving these environment variables."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Greeting service code",src:n(3825).Z,width:"764",height:"468"})),(0,o.kt)("p",null,"... and now we have a working microservices app on ACA! \ud83c\udf89"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Hello World",src:n(3435).Z,width:"683",height:"422"})),(0,o.kt)("h2",{id:"summary-and-next-steps"},"Summary and next steps"),(0,o.kt)("p",null,"We've covered Container Apps networking and the basics of how containers communicate with one another. However, there is a better way to address service-to-service invocation using Dapr, which is an open-source framework for building microservices. It is natively integrated into the ACA service and in a future post, you'll learn how to enable it in your Container App to address microservices concerns and more. So stay tuned!"),(0,o.kt)("h2",{id:"exercises"},"Exercises"),(0,o.kt)("p",null,"As a takeaway for today's post, I encourage you to complete this ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/container-apps/communicate-between-microservices?tabs=bash&pivots=acr-remote"},"tutorial")," and if you'd like to deploy the sample app that was presented in this article, my teammate ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/smurawski"},"@StevenMurawski")," is hosting a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/smurawski/docker-compose-examples"},"docker-compose-examples")," repo which includes samples for deploying to ACA using Docker Compose files. To learn more about the ",(0,o.kt)("inlineCode",{parentName:"p"},"az containerapp compose")," command, a link to his blog articles are listed in the Resources section below."),(0,o.kt)("p",null,"If you have any questions or feedback, please let us know in the comments below or reach out on Twitter ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/pauldotyu"},"@pauldotyu")),(0,o.kt)("p",null,"Have fun packing and shipping containers! See you in the next post!"),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/container-apps/communicate-between-microservices?tabs=bash&pivots=acr-remote"},"Tutorial: Communication between microservices in Azure Container Apps")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/smurawski/docker-compose-examples/tree/main/nodejs_greet"},"Tutorial: greeting-service (docker-compose-example)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/container-apps/environment"},"Concept: Azure Container App Environments")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/container-apps/networking#http-edge-proxy-behavior"},"Concept: Azure Container App Ingress")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/container-apps/networking#restrictions"},"Concept: Azure Container App VNET Restrictions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/apps-on-azure-blog/accelerating-azure-container-apps-with-the-azure-cli-and-compose/ba-p/3516636"},"Blog: Accelerating Azure Container Apps with the Azure CLI and Compose Files")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/apps-on-azure-blog/more-fun-with-azure-container-apps-and-compose-files/ba-p/3570234"},"Blog: More Fun with Azure Container Apps and Compose Files"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The sample app presented here was inspired by services demonstrated in the book ",(0,o.kt)("a",{parentName:"p",href:"https://www.amazon.com/Introducing-Distributed-Application-Runtime-Dapr/dp/1484269977"},"Introducing Distributed Application Runtime (Dapr): Simplifying Microservices Applications Development Through Proven and Reusable Patterns and Practices"),". Go check it out to leran more about Dapr!")))}m.isMDXComponent=!0},3435:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/aca-microservice-52095d278f64dc70345877580846389e.png"},4111:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/banner-011f28077c2b653cb428e81b3645ca5b.png"},4429:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/external-ingress-a58989faae5a9d1d6dd0367a2bab4aa6.png"},3825:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/greeting-service-code-1cd635977624067366d2a9956fcb86ee.png"},4944:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/greeting-service-overview-82b526122516cb01180da2f93577dde2.png"},5375:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hello-service-b70e9c9ef34aac8e97e71d35d60a74bb.png"},1029:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/internal-ingress-3213762a354d70c030a4f78f805d3d5b.png"},7823:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/internal-vnet-ingress-bc30bf6819a1bd37aa60f3f8f5f23001.png"},4058:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/say-hello-5da6958b9234cb77ac10233e86aa8c35.png"}}]);