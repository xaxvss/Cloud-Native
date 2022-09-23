"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5743],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=u(a),f=o,m=h["".concat(l,".").concat(f)]||h[f]||c[f]||r;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9626:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var n=a(7462),o=(a(7294),a(4137));const r={slug:"zero2hero-func-05",title:"\ud83d\ude80 | Error Handling w/ Apache Kafka",authors:["ramya"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","concepts"],image:"./img/zero-to-hero-david.png",description:"Recently we have launched the Apache Kafka extension for Azure functions in GA with some cool new features like deserialization of Avro Generic records and Kafka headers support. Let's learn more about it.",tags:["serverless-september","zero-to-hero","azure-functions"]},i=void 0,s={permalink:"/Cloud-Native/blog/zero2hero-func-05",source:"@site/blog/zero-to-hero/2022-09-19-azurefunctions.md",title:"\ud83d\ude80 | Error Handling w/ Apache Kafka",description:"Recently we have launched the Apache Kafka extension for Azure functions in GA with some cool new features like deserialization of Avro Generic records and Kafka headers support. Let's learn more about it.",date:"2022-09-19T00:00:00.000Z",formattedDate:"September 19, 2022",tags:[{label:"serverless-september",permalink:"/Cloud-Native/blog/tags/serverless-september"},{label:"zero-to-hero",permalink:"/Cloud-Native/blog/tags/zero-to-hero"},{label:"azure-functions",permalink:"/Cloud-Native/blog/tags/azure-functions"}],readingTime:5.33,hasTruncateMarker:!1,authors:[{name:"Ramya Oruganti",title:"Senior PM, Azure Functions @Microsoft",url:"https://twitter.com/ramyaoncloud",imageURL:"https://pbs.twimg.com/profile_images/588627587435397120/vuA4BT3a_400x400.jpg",key:"ramya"}],frontMatter:{slug:"zero2hero-func-05",title:"\ud83d\ude80 | Error Handling w/ Apache Kafka",authors:["ramya"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","concepts"],image:"./img/zero-to-hero-david.png",description:"Recently we have launched the Apache Kafka extension for Azure functions in GA with some cool new features like deserialization of Avro Generic records and Kafka headers support. Let's learn more about it.",tags:["serverless-september","zero-to-hero","azure-functions"]},prevItem:{title:"\ud83d\ude80 | Observability with ACA",permalink:"/Cloud-Native/blog/zero2hero-aca-06"}},l={image:a(9152).Z,authorsImageUrls:[void 0]},u=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Retry Policy support",id:"retry-policy-support",level:2},{value:"AutoOffsetReset property",id:"autooffsetreset-property",level:2},{value:"Key support for Kafka messages",id:"key-support-for-kafka-messages",level:2},{value:"Conclusion:",id:"conclusion",level:2},{value:"References",id:"references",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/blog/zero2hero-func-05"}),(0,o.kt)("meta",{name:"twitter:title",content:"#ZeroToHero: Error Handling with Apache Kafka extension for Azure Functions "}),(0,o.kt)("meta",{name:"twitter:description",content:"#ZeroToHero: Error Handling with Apache Kafka extension for Azure Functions "}),(0,o.kt)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/banners/serverless-zero2hero.png"}),(0,o.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.kt)("meta",{name:"twitter:creator",content:"@nitya"}),(0,o.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,o.kt)("link",{rel:"canonical",href:"https://techcommunity.microsoft.com/t5/apps-on-azure-blog/error-handling-with-apache-kafka-extension-for-azure-functions/ba-p/3628936"})),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Welcome to ",(0,o.kt)("inlineCode",{parentName:"p"},"Day 19")," of #30DaysOfServerless!"),(0,o.kt)("p",null,"Today, we have a special set of posts from our ",(0,o.kt)("a",{parentName:"p",href:"/serverless-september/ZeroToHero"},"Zero To Hero \ud83d\ude80")," initiative, featuring blog posts authored by our Product Engineering teams for #ServerlessSeptember. ",(0,o.kt)("em",{parentName:"p"},"Posts were originally published on the ",(0,o.kt)("a",{parentName:"em",href:"https://techcommunity.microsoft.com/t5/apps-on-azure-blog/error-handling-with-apache-kafka-extension-for-azure-functions/ba-p/3628936?WT.mc_id=javascript-74010-cxa"},"Apps on Azure")," blog on Microsoft Tech Community.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Retry Policy Support - in Apache Kafka Extension"),(0,o.kt)("li",{parentName:"ul"},"AutoOffsetReset property - in Apache Kafka Extension"),(0,o.kt)("li",{parentName:"ul"},"Key support for Kafka messages - in Apache Kafka Extension"),(0,o.kt)("li",{parentName:"ul"},"References: Apache Kafka Extension for Azure Functions")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(8560).Z,width:"1600",height:"672"})),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Recently we launched the ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/Azure/azure-functions-kafka-extension"},"Apache Kafka extension for Azure functions")," in GA with some cool new features like deserialization of Avro Generic records and Kafka headers support. We received great responses - so we're back with more updates!")),(0,o.kt)("h2",{id:"retry-policy-support"},"Retry Policy support"),(0,o.kt)("p",null,"Handling errors in Azure Functions is important to avoid data loss or miss events or monitor the health of an application. Apache Kafka Extension for Azure Functions supports retry policy which tells the runtime to rerun a failed execution until either successful completion occurs or the maximum number of retries is reached."),(0,o.kt)("p",null,"A retry policy is evaluated when a trigger function raises an uncaught exception. As a best practice, you should catch all exceptions in your code and rethrow any errors that you want to result in a retry."),(0,o.kt)("p",null,"There are two retry strategies supported by policy that you can configure :- fixed delay and exponential backoff"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Fixed Delay")," -  A specified amount of time is allowed to elapse between each retry."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Exponential Backoff")," - The first retry waits for the minimum delay. On subsequent retries, time is added exponentially to the initial duration for each retry, until the maximum delay is reached. Exponential back-off adds some small randomization to delays to stagger retries in high-throughput scenarios.")),(0,o.kt)("admonition",{title:"Please Note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Retry Policy for Kafka extension ",(0,o.kt)("strong",{parentName:"p"},"is NOT supported")," for C# (in proc and out proc) trigger and output binding. This is supported for languages like Java, Node (JS , TypeScript), PowerShell and Python trigger and output bindings.")),(0,o.kt)("p",null,"Here is the sample code view of exponential backoff retry strategy"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Error Handling with Apache Kafka extension for Azure Functions",src:a(5051).Z,width:"400",height:"239"})),(0,o.kt)("h2",{id:"autooffsetreset-property"},"AutoOffsetReset property"),(0,o.kt)("p",null,"AutoOffsetReset property enables customers to configure the behaviour in the absence of an initial offset. Imagine a scenario when there is a need to change consumer group name. The consumer connected using a new consumer group had to reprocess all events starting from the oldest (earliest) one,  as this was the default one and this setting wasn\u2019t exposed as configurable option in the Apache Kafka extension for Azure Functions(previously). With the help of this kafka setting you can configure on how to start processing events for newly created consumer groups."),(0,o.kt)("p",null,"Due to lack of the ability to configure this setting, offset commit errors were causing topics to restart from earliest offset\xb7 Users were looking to be able to set  offset setting  to either latest or earliest  based on their requirements."),(0,o.kt)("p",null,"We are happy to share that we have enabled the AutoOffsetReset setting as a configurable one to either - Earliest(Default) and Latest. Setting the value to Earliest configures the consumption of the messages from the the earliest/smallest offset or beginning of the topic partition. Setting the property to Latest configures the consumption of the messages from the latest/largest offset or from the end of the topic partition. This is supported for all the Azure Functions supported languages (C# (in & out), Java, Node (JS and TypeScript), PowerShell and python) and can be used for both triggers and output binding"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Error Handling with Apache Kafka extension for Azure Functions",src:a(4369).Z,width:"400",height:"175"})),(0,o.kt)("h2",{id:"key-support-for-kafka-messages"},"Key support for Kafka messages"),(0,o.kt)("p",null,"With keys the producer/output binding can be mapped to broker and partition to write based on the message. So alongside the message value, we can choose to send a message key and that key can be whatever you want it could be a string, it could be a number . In case  you don\u2019t send the key, the key is set to null then the data will be sent in a ",(0,o.kt)("a",{parentName:"p",href:"https://www.geeksforgeeks.org/round-robin-scheduling-with-different-arrival-times/"},"Round Robin")," fashion to make it very simple. ",(0,o.kt)("strong",{parentName:"p"},"But in case you send a key with your message"),", all the messages that share the same key will always go to the same partition and thus you can enable grouping of similar messages into partitions"),(0,o.kt)("p",null,"Previously while consuming a Kafka event message using the Azure Function kafka extension, the event key was always none although the key was present in the event message."),(0,o.kt)("p",null,"Key support was implemented in the extension which enables customers to set/view key in the Kafka event messages coming in to the kafka trigger and set keys to the messages going in to kafka topics (with keys set) through output binding. Therefore key support was enabled in the extension to support both trigger and output binding for all Azure Functions supported languages ( (C# (in & out), Java, Node (JS and TypeScript), PowerShell and python)"),(0,o.kt)("p",null,"Here is the view of an output binding producer code where Kafka messages are being set with key"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Error Handling with Apache Kafka extension for Azure Functions",src:a(4736).Z,width:"400",height:"284"})),(0,o.kt)("h2",{id:"conclusion"},"Conclusion:"),(0,o.kt)("p",null,"In this article you have learnt about the latest additions to the Apache Kafka extension for Azure Functions. Incase you have been waiting for these features to get released or need them you are all set and please go head and try them out!! They are available in the latest extension bundles"),(0,o.kt)("admonition",{title:"Want to learn more?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/azure-functions/functions-bindings-kafka?tabs=in-process%2Cportal&pivots=programming-language-csharp"},"Apache Kafka bindings for Azure Functions")," | Microsoft Docs for detail documentation, samples on the Azure function supported languages and more!")),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/azure-functions/functions-bindings-kafka?tabs=in-process%2Cportal&pivots=programming-language-csharp"},"Apache Kafka bindings for Azure Functions | Microsoft Docs"))),(0,o.kt)("admonition",{title:"FEEDBACK WELCOME",type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"If you would like to provide feedback on Kafka trigger extension, please post them to our GitHub repository- Issues \xb7 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Azure/azure-functions-kafka-extension/issues"},"Azure/azure-functions-kafka-extension (github.com)")),(0,o.kt)("li",{parentName:"ul"},"This extension is being developed in the open-source community. Please contribute, try out and post any issues on the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Azure/azure-functions-kafka-extension"},"Azure Functions Kafka extension GitHub repo")))),(0,o.kt)("p",null,"Keep in touch with us on Twitter via ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/AzureFunctions"},"@AzureFunctions"),"."))}c.isMDXComponent=!0},8560:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ramya-functions-kafka-5a847320c1814350e946ac762907c8e3.png"},5051:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ramya-kafka-1-f619e8e934a373383a58a0b2c69dd146.png"},4369:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ramya-kafka-2-55db6b33ea9564e6af55bd6dfca64f89.png"},4736:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ramya-kafka-3-3e5a8fd156c09ad453e579efcbab521b.png"},9152:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/zero-to-hero-david-2236e6d82fe0064fef5a652807264fd7.png"}}]);