"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7010],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1243:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={slug:"25-aca-java",title:"25. Deploy Spring Boot App to ACA",authors:["brian"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","containers","java","springboot"],image:"./img/java/banner.png",description:"Learn how to deploy containerized Spring boot apps to Azure Container apps (ACA) using Azure Container Registry (ACR)",tags:["serverless-september","30-days-of-serverless","azure-container-apps","dapr","microservices"]},l=void 0,i={permalink:"/Cloud-Native/blog/25-aca-java",source:"@site/blog/2022-09-25/index.md",title:"25. Deploy Spring Boot App to ACA",description:"Learn how to deploy containerized Spring boot apps to Azure Container apps (ACA) using Azure Container Registry (ACR)",date:"2022-09-25T00:00:00.000Z",formattedDate:"September 25, 2022",tags:[{label:"serverless-september",permalink:"/Cloud-Native/blog/tags/serverless-september"},{label:"30-days-of-serverless",permalink:"/Cloud-Native/blog/tags/30-days-of-serverless"},{label:"azure-container-apps",permalink:"/Cloud-Native/blog/tags/azure-container-apps"},{label:"dapr",permalink:"/Cloud-Native/blog/tags/dapr"},{label:"microservices",permalink:"/Cloud-Native/blog/tags/microservices"}],readingTime:6.255,hasTruncateMarker:!1,authors:[{name:"Brian Benz",title:"Senior Cloud Advocate @Microsoft",url:"https://github.com/bbenz",imageURL:"https://github.com/bbenz.png",key:"brian"}],frontMatter:{slug:"25-aca-java",title:"25. Deploy Spring Boot App to ACA",authors:["brian"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","containers","java","springboot"],image:"./img/java/banner.png",description:"Learn how to deploy containerized Spring boot apps to Azure Container apps (ACA) using Azure Container Registry (ACR)",tags:["serverless-september","30-days-of-serverless","azure-container-apps","dapr","microservices"]},prevItem:{title:"\ud83d\ude80 | Monitor + Troubleshoot Apps",permalink:"/Cloud-Native/blog/zero2hero-func-07"},nextItem:{title:"24. Deploy ASP.NET app to ACA",permalink:"/Cloud-Native/blog/24-aca-dotnet"}},p={image:a(34031).Z,authorsImageUrls:[void 0]},s=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Deploy Java containers to cloud",id:"deploy-java-containers-to-cloud",level:2},{value:"1. Get Sample Code",id:"1-get-sample-code",level:2},{value:"2. Run Sample Locally (Optional)",id:"2-run-sample-locally-optional",level:2},{value:"3. Step-by-step: Deploy to ACR",id:"3-step-by-step-deploy-to-acr",level:2},{value:"3.1 Log into registry using the Azure CLI",id:"31-log-into-registry-using-the-azure-cli",level:3},{value:"3.2 Build &amp; deploy with <code>az acr build</code>",id:"32-build--deploy-with-az-acr-build",level:3},{value:"3.3 List container images",id:"33-list-container-images",level:3},{value:"4. Deploy on ACA",id:"4-deploy-on-aca",level:2},{value:"4.1 Create a container app",id:"41-create-a-container-app",level:3},{value:"4.2 Enter project details",id:"42-enter-project-details",level:3},{value:"4.3 Create an environment",id:"43-create-an-environment",level:3},{value:"5. App settings tab",id:"5-app-settings-tab",level:2},{value:"5.1 Application ingress settings",id:"51-application-ingress-settings",level:3},{value:"5.2 Deploy the container app",id:"52-deploy-the-container-app",level:3},{value:"5.3 Verify deployment",id:"53-verify-deployment",level:3},{value:"Resources: For self-study!",id:"resources-for-self-study",level:2}],u={toc:s};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/blog/23-aca-java"}),(0,r.kt)("meta",{name:"twitter:title",content:"#30DaysOfServerless: Deploy Spring Boot App to ACA"}),(0,r.kt)("meta",{name:"twitter:description",content:"#30DaysOfServerless: Deploy Spring Boot App to ACA"}),(0,r.kt)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/banners/post-kickoff.png"}),(0,r.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.kt)("meta",{name:"twitter:creator",content:"@nitya"}),(0,r.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,r.kt)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/blog/23-aca-java"})),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Welcome to ",(0,r.kt)("inlineCode",{parentName:"p"},"Day 25")," of #30DaysOfServerless!"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/container-apps/overview"},"Azure Container Apps")," enable application code packaged in containers to run and scale without the overhead of managing cloud infrastructure and container orchestration.  In this post I'll show you how to ",(0,r.kt)("strong",{parentName:"p"},"deploy a Java application running on Spring Boot in a container to Azure Container Registry and Azure Container Apps.")," "),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Introduction to Deploying Java containers in the cloud"),(0,r.kt)("li",{parentName:"ul"},"Step-by-step: Deploying to Azure Container Registry"),(0,r.kt)("li",{parentName:"ul"},"Step-by-step: Deploying and running on Azure Container Apps"),(0,r.kt)("li",{parentName:"ul"},"Resources: For self-study!")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(34031).Z,width:"1600",height:"672"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"deploy-java-containers-to-cloud"},"Deploy Java containers to cloud"),(0,r.kt)("p",null,"We'll deploy a Java application running on Spring Boot in a container to Azure Container Registry and Azure Container Apps. Here are the main steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create Azure Container Registry (ACR) on Azure portal"),(0,r.kt)("li",{parentName:"ul"},"Create Azure Container App (ACA) on Azure portal."),(0,r.kt)("li",{parentName:"ul"},"Deploy code to Azure Container Registry from the Azure CLI. "),(0,r.kt)("li",{parentName:"ul"},"Deploy container from ACR to ACA using the Azure portal.")),(0,r.kt)("admonition",{title:"PRE-REQUISITES",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Active Azure subscription")," with Contributor or Owner permissions. ",(0,r.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/free/"},"Create an account for free")," if you don't have one."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"GitHub account"),". Sign up for ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/join"},"free")," if you don't have one."),(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/git-guides/install-git"},"Git")),"."),(0,r.kt)("li",{parentName:"ul"},"Install the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://learn.microsoft.com/cli/azure/install-azure-cli"},"Azure CLI")),"."))),(0,r.kt)("p",null,"Sign in to Azure from the CLI using the ",(0,r.kt)("inlineCode",{parentName:"p"},"az login")," command, and follow the prompts in your browser to complete the authentication process.  Also, ensure you're running the latest version of the CLI by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"az upgrade"),"  command."),(0,r.kt)("h2",{id:"1-get-sample-code"},"1. Get Sample Code"),(0,r.kt)("p",null,"Fork and clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bbenz/spring-boot-docker-aca"},"sample GitHub repo")," to your local machine.  Navigate to the  and click ",(0,r.kt)("strong",{parentName:"p"},"Fork")," in the top-right corner of the page."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bbenz/spring-boot-docker-aca"},"example code")," that we're using is a very basic containerized Spring Boot example.  There are a lot more details to learn about Spring boot apps in docker, for a deep dive check out this ",(0,r.kt)("a",{parentName:"p",href:"https://spring.io/guides/gs/spring-boot-docker/"},"Spring Boot Guide")," ")),(0,r.kt)("h2",{id:"2-run-sample-locally-optional"},"2. Run Sample Locally (Optional)"),(0,r.kt)("p",null,"If you have docker installed locally, you can optionally test the code on your local machine.  Navigate to the root directory of the forked repository and run the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-azurecli"},"docker build -t spring-boot-docker-aca .\ndocker run -p 8080:8080 spring-boot-docker-aca\n")),(0,r.kt)("p",null,"Open a browser and go to https://localhost:8080.  You should see this message: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-azurecli"},"Hello Docker World\n")),(0,r.kt)("p",null,"That indicates the the Spring Boot app is successfully running locally in a docker container. "),(0,r.kt)("p",null,"Next, let's set up an Azure Container Registry an an Azure Container App and deploy this container to the cloud!"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"3-step-by-step-deploy-to-acr"},"3. Step-by-step: Deploy to ACR"),(0,r.kt)("p",null,"To create a container registry from the ",(0,r.kt)("a",{parentName:"p",href:"https://portal.azure.com"},"portal dashboard"),", Select ",(0,r.kt)("strong",{parentName:"p"},"Create a resource > Containers > Container Registry"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Navigate to container registry in portal",src:a(17193).Z,width:"760",height:"516"})),(0,r.kt)("p",null,"In the Basics tab, enter values for Resource group and Registry name. The registry name must be unique within Azure, and contain 5-50 alphanumeric characters. Create a new resource group in the West US location named spring-boot-docker-aca.  Select the 'Basic' SKU."),(0,r.kt)("p",null,"Keep the default values for the remaining settings. Then select ",(0,r.kt)("strong",{parentName:"p"},"Review + create"),", then  ",(0,r.kt)("strong",{parentName:"p"},"Create"),".  When the Deployment succeeded message appears, select the container registry in the portal."),(0,r.kt)("p",null,"Note the registry server name ending with azurecr.io. You will use this in the following steps when you push and pull images with Docker."),(0,r.kt)("h3",{id:"31-log-into-registry-using-the-azure-cli"},"3.1 Log into registry using the Azure CLI"),(0,r.kt)("p",null,"Before pushing and pulling container images, you must log in to the registry instance. Sign into the Azure CLI on your local machine, then run the ",(0,r.kt)("inlineCode",{parentName:"p"},"az acr login")," command. For this step, use the registry name, not the server name ending with azurecr.io."),(0,r.kt)("p",null,"From the command line, type: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-azurecli"},"az acr login --name myregistryname\n")),(0,r.kt)("p",null,"The command returns ",(0,r.kt)("strong",{parentName:"p"},"Login Succeeded")," once completed."),(0,r.kt)("h3",{id:"32-build--deploy-with-az-acr-build"},"3.2 Build & deploy with ",(0,r.kt)("inlineCode",{parentName:"h3"},"az acr build")),(0,r.kt)("p",null,"Next, we're going to deploy the docker container we created earlier using the AZ ACR Build command.  ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/cli/azure/acr?view=azure-cli-latest#az-acr-build"},"AZ ACR Build")," creates a docker build from local code and pushes the container to Azure Container Registry if the build is successful. "),(0,r.kt)("p",null,"Go to your local clone of the ",(0,r.kt)("strong",{parentName:"p"},"spring-boot-docker-aca")," repo in the command line, type: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-azurecli"},"az acr build --registry myregistryname --image spring-boot-docker-aca:v1 .\n")),(0,r.kt)("h3",{id:"33-list-container-images"},"3.3 List container images"),(0,r.kt)("p",null,"Once the AZ ACR Build command is complete, you should be able to view the container as a repository in the registry.  In the portal, open your registry and select ",(0,r.kt)("strong",{parentName:"p"},"Repositories"),", then select the ",(0,r.kt)("strong",{parentName:"p"},"spring-boot-docker-aca")," repository you created with docker push.  You should also see the ",(0,r.kt)("strong",{parentName:"p"},"v1")," image under Tags."),(0,r.kt)("h2",{id:"4-deploy-on-aca"},"4. Deploy on ACA"),(0,r.kt)("p",null,"Now that we have an image in the Azure Container Registry, we can deploy it to Azure Container Apps. For the first deployment, we'll pull the container from our ACR as part of the ACA setup."),(0,r.kt)("h3",{id:"41-create-a-container-app"},"4.1 Create a container app"),(0,r.kt)("p",null,"We'll create the container app at the same place that we created the container registry in the Azure portal.  From the portal, select ",(0,r.kt)("strong",{parentName:"p"},"Create a resource > Containers > Container App"),".  In the ",(0,r.kt)("em",{parentName:"p"},"Basics")," tab, set these values:"),(0,r.kt)("h3",{id:"42-enter-project-details"},"4.2 Enter project details"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Action"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Subscription"),(0,r.kt)("td",{parentName:"tr",align:null},"Your Azure subscription.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Resource group"),(0,r.kt)("td",{parentName:"tr",align:null},"Use the ",(0,r.kt)("strong",{parentName:"td"},"spring-boot-docker-aca")," resource group")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Container app name"),(0,r.kt)("td",{parentName:"tr",align:null},"Enter ",(0,r.kt)("strong",{parentName:"td"},"spring-boot-docker-aca"),".")))),(0,r.kt)("h3",{id:"43-create-an-environment"},"4.3 Create an environment"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("em",{parentName:"p"},"Create Container App environment")," field, select ",(0,r.kt)("strong",{parentName:"p"},"Create new"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("em",{parentName:"p"},"Create Container App Environment")," page on the ",(0,r.kt)("em",{parentName:"p"},"Basics")," tab, enter the following values:"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Environment name"),(0,r.kt)("td",{parentName:"tr",align:null},"Enter ",(0,r.kt)("strong",{parentName:"td"},"my-environment"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Region"),(0,r.kt)("td",{parentName:"tr",align:null},"Select ",(0,r.kt)("strong",{parentName:"td"},"westus3"),"."))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"OK"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the ",(0,r.kt)("strong",{parentName:"p"},"Create")," button at the bottom of the ",(0,r.kt)("em",{parentName:"p"},"Create Container App Environment")," page.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the ",(0,r.kt)("strong",{parentName:"p"},"Next: App settings")," button at the bottom of the page."))),(0,r.kt)("h2",{id:"5-app-settings-tab"},"5. App settings tab"),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"App settings")," tab is where you connect to the ACR and pull the repository image:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Action"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Use quickstart image"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Uncheck")," the checkbox.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Enter ",(0,r.kt)("strong",{parentName:"td"},"spring-boot-docker-aca"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Image source"),(0,r.kt)("td",{parentName:"tr",align:null},"Select ",(0,r.kt)("strong",{parentName:"td"},"Azure Container Registry"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Registry"),(0,r.kt)("td",{parentName:"tr",align:null},"Select your ACR from the list.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Image"),(0,r.kt)("td",{parentName:"tr",align:null},"Select ",(0,r.kt)("strong",{parentName:"td"},"spring-boot-docker-aca")," from the list.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Image Tag"),(0,r.kt)("td",{parentName:"tr",align:null},"Select ",(0,r.kt)("strong",{parentName:"td"},"v1")," from the list.")))),(0,r.kt)("h3",{id:"51-application-ingress-settings"},"5.1 Application ingress settings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Action"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"Select ",(0,r.kt)("strong",{parentName:"td"},"Enabled"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ingress visibility"),(0,r.kt)("td",{parentName:"tr",align:null},"Select ",(0,r.kt)("strong",{parentName:"td"},"External")," to publicly expose your container app.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Target port"),(0,r.kt)("td",{parentName:"tr",align:null},"Enter ",(0,r.kt)("strong",{parentName:"td"},"8080"),".")))),(0,r.kt)("h3",{id:"52-deploy-the-container-app"},"5.2 Deploy the container app"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select the ",(0,r.kt)("strong",{parentName:"li"},"Review and create")," button at the bottom of the page.  "),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Create"),".")),(0,r.kt)("p",null,"Once the deployment is successfully completed, you'll see the message: ",(0,r.kt)("em",{parentName:"p"},"Your deployment is complete"),"."),(0,r.kt)("h3",{id:"53-verify-deployment"},"5.3 Verify deployment"),(0,r.kt)("p",null,"In the portal, go to the Overview of your ",(0,r.kt)("strong",{parentName:"p"},"spring-boot-docker-aca")," Azure Container App, and click on the Application Url.   You should see this message in the browser: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-azurecli"},"Hello Docker World\n")),(0,r.kt)("p",null,"That indicates the the Spring Boot app is running in a docker container in your ",(0,r.kt)("strong",{parentName:"p"},"spring-boot-docker-aca")," Azure Container App.   "),(0,r.kt)("h2",{id:"resources-for-self-study"},"Resources: For self-study!"),(0,r.kt)("p",null,"Once you have an understanding of the basics in ths post, there is so much more to learn!  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Check out the other ",(0,r.kt)("a",{parentName:"li",href:"https://azure.github.io/Cloud-Native/blog"},"Serverless September posts"),".  "),(0,r.kt)("li",{parentName:"ul"},"For DevOps and Java on Azure, see the tutorials and workshops at ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/devopsforjavashops"},"https://aka.ms/devopsforjavashops")),(0,r.kt)("li",{parentName:"ul"},"Also see ",(0,r.kt)("a",{parentName:"li",href:"https://developer.microsoft.com/java"},"https://developer.microsoft.com/java")," for everything Java on Azure!")),(0,r.kt)("p",null,"Thanks for stopping by!"))}c.isMDXComponent=!0},17193:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/acr-portal-01-56ad80e74d4597e32bb2bb534148d10d.png"},34031:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/banner-a80dd142b324c50ca8d68b0c69a4206b.png"}}]);