"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2267],{41196:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"cloud-native-fundamentals","metadata":{"permalink":"/Cloud-Native/cnny-2023/cloud-native-fundamentals","source":"@site/blog-cnny/2023-01-23/cloud-native-fundamentals.md","title":"1-1. Cloud-native Fundamentals","description":"The fundamentals of Cloud-native!","date":"2023-01-23T00:00:00.000Z","formattedDate":"January 23, 2023","tags":[{"label":"cloud-native","permalink":"/Cloud-Native/cnny-2023/tags/cloud-native"},{"label":"30daysofcloudnative","permalink":"/Cloud-Native/cnny-2023/tags/30-daysofcloudnative"},{"label":"zero-to-hero","permalink":"/Cloud-Native/cnny-2023/tags/zero-to-hero"},{"label":"ask-the-expert","permalink":"/Cloud-Native/cnny-2023/tags/ask-the-expert"},{"label":"azure-kubernetes-service","permalink":"/Cloud-Native/cnny-2023/tags/azure-kubernetes-service"}],"readingTime":4.06,"hasTruncateMarker":false,"authors":[{"name":"Cory Skimming","title":"Sr. Product Marketing Manager","url":"https://twitter.com/cskimming","imageURL":"https://pbs.twimg.com/profile_images/1493684068227055617/iC9r8v6Z_400x400.jpg","key":"cory"}],"frontMatter":{"slug":"cloud-native-fundamentals","title":"1-1. Cloud-native Fundamentals","authors":["cory"],"draft":false,"hide_table_of_contents":false,"toc_min_heading_level":2,"toc_max_heading_level":3,"keywords":["cloud-native","containers","decision-tree","kubernetes"],"image":"https://azure.github.io/Cloud-Native/assets/ideal-img/hero-banner.e0a8d29.1030.png","description":"The fundamentals of Cloud-native!","tags":["cloud-native","30daysofcloudnative","zero-to-hero","ask-the-expert","azure-kubernetes-service"]},"nextItem":{"title":"Kicking Off 30DaysOfCloudNative!","permalink":"/Cloud-Native/cnny-2023/cnny-kickoff"}},"content":"Welcome to `Week 1` of #CloudNativeNewYear!\\n\\n\\n![Cloud-native New Year](../../static/img/cnny23/cnny-event-card.png)\\n\\nYou will often hear the term \\"cloud-native\\" when discussing modern application development, but even a quick online search will return a huge number of articles, tweets, and web pages with a variety of definitions. So, what does cloud-native actually mean? Also, what makes an application a *cloud-native application* versus a \\"regular\\" application? \\n\\nToday, we will address these questions and more as we kickstart our learning journey (and our new year!) with an introductory dive into the wonderful world of cloud-native. \\n\\n---\\n\\n## What We\'ll Cover\\n * What is cloud-native? \\n * What is a cloud-native application?\\n * The benefits of cloud-native\\n * The five pillars of cloud-native \\n * **Exercise**: Take the [Cloud Skills Challenge](https://aka.ms/CNNY/Challenge)!\\n\\n---\\n\\n## 1. What is cloud-native? \\n\\nThe term \\"cloud-native\\" can seem pretty self-evident (yes, hello, native to the cloud?), and in a way, it is. \\nWhile there are lots of definitions of cloud-native floating around, at it\'s core, cloud-native simply refers to a modern approach to building software that takes advantage of cloud services and environments. This includes using cloud-native technologies, such as containers, microservices, and serverless, and following best practices for deploying, scaling, and managing applications in a cloud environment.\\n\\n:::info **Official definition** from the [Cloud Native Computing Foundation](https://www.cncf.io/):\\n*Cloud-native technologies empower organizations to build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds. Containers, service meshes, microservices, immutable infrastructure, and declarative APIs exemplify this approach.*\\n\\n*These techniques enable loosely coupled systems that are resilient, manageable, and observable. Combined with robust automation, they allow engineers to make high-impact changes frequently and predictably with minimal toil.* [Source](https://github.com/cncf/foundation/blob/main/charter.md)\\n:::\\n\\n---\\n\\n## 2. So, what exactly is a cloud-native application? \\n Cloud-native applications are *specifically* designed to take advantage of the scalability, resiliency, and distributed nature of modern cloud infrastructure.  But how does this differ from a \\"traditional\\" application?\\n\\nTraditional applications are generally been built, tested, and deployed as a single, monolithic unit.  The monolithic nature of this type of architecture creates close dependencies between components.  This complexity and interweaving only increases as an application grows and can make it difficult to evolve (not to mention troubleshoot) and challenging to operate over time. \\n\\nTo contrast, in cloud-native architectures the application components are decomposed into loosely coupled services, rather than built and deployed as one block of code. This decomposition into multiple self-contained services enables teams to manage complexity and improve the speed, agility, and scale of software delivery. Many small parts enables teams to make targeted updates, deliver new features, and fix any issues without leading to broader service disruption. \\n\\n---\\n\\n## 3. The benefits of cloud-native\\nCloud-native architectures can bring many benefits to an organization, including: \\n\\n1. **Scalability:** easily scale up or down based on demand, allowing organizations to adjust their resource usage and costs as needed.\\n2. **Flexibility:** deploy and run on any cloud platform, and easily move between clouds and on-premises environments.\\n3. **High-availability:** techniques such as redundancy, self-healing, and automatic failover help ensure that cloud-native applications are designed to be highly-available and fault tolerant.\\n4. **Reduced costs:** take advantage of the pay-as-you-go model of cloud computing, reducing the need for expensive infrastructure investments.\\n5. **Improved security:** tap in to cloud security features, such as encryption and identity management, to improve the security of the application.\\n6. **Increased agility:** easily add new features or services to your applications to meet changing business needs and market demand.\\n\\n---\\n\\n## 4. The pillars of cloud-native\\n\\nThere are five areas that are generally cited as the core building blocks of cloud-native architecture: \\n\\n1.\\t[Microservices](https://learn.microsoft.com/devops/deliver/what-are-microservices): Breaking down monolithic applications into smaller, independent, and loosely-coupled services that can be developed, deployed, and scaled independently.\\n2.\\tContainers: Packaging software in lightweight, portable, and self-sufficient containers that can run consistently across different environments.\\n3.\\tAutomation: Using automation tools and DevOps processes to manage and operate the cloud-native infrastructure and applications, including deployment, scaling, monitoring, and self-healing.\\n4.\\tService discovery: Using service discovery mechanisms, such as APIs & service meshes, to enable services to discover and communicate with each other.\\n5.\\tObservability: Collecting and analyzing data from the infrastructure and applications to understand and optimize the performance, behavior, and health of the system.\\n\\nThese can (and should!) be used in combination to deliver cloud-native solutions that are highly scalable, flexible, and available. \\n\\n:::info WHAT\'S NEXT\\n\\nStay tuned, as we will be diving deeper into these topics in the coming weeks:\\n\\n* **Jan 24**: Containers 101\\n* **Jan 25**: Adopting Microservices with Kubernetes\\n* **Jan 26**: Kubernetes 101\\n* **Jan 27**: Exploring your Cloud-native Options\\n:::\\n\\n---\\n\\n## Resources\\n\\n* **Register** for the [Cloud Skills Challenge](https://aka.ms/Challenge) - 30 days to complete it!\\n* **Resources**: [#30DaysOfCloudNative Collection](https://aka.ms/CNNY/collection)\\n* **eBook:** [Cloud Native Infrastructure with Azure](https://azure.microsoft.com/resources/cloud-native-infrastructure-with-microsoft-azure/)\\n\\n---\\n\\nDon\'t forget to [subscribe](https://azure.github.io/Cloud-Native/cnny-2023/rss.xml?WT.mc_id=javascript-74010-ninarasi) to the blog to get daily posts delivered directly to your favorite feed reader!\\n\\n---"},{"id":"cnny-kickoff","metadata":{"permalink":"/Cloud-Native/cnny-2023/cnny-kickoff","source":"@site/blog-cnny/2023-01-22/30days.md","title":"Kicking Off 30DaysOfCloudNative!","description":"Let\'s  kick-off Cloud Native New Year with #30DaysOfCloudNative","date":"2023-01-22T00:00:00.000Z","formattedDate":"January 22, 2023","tags":[{"label":"cloud-native","permalink":"/Cloud-Native/cnny-2023/tags/cloud-native"},{"label":"30daysofcloudnative","permalink":"/Cloud-Native/cnny-2023/tags/30-daysofcloudnative"},{"label":"zero-to-hero","permalink":"/Cloud-Native/cnny-2023/tags/zero-to-hero"},{"label":"ask-the-expert","permalink":"/Cloud-Native/cnny-2023/tags/ask-the-expert"},{"label":"azure-kubernetes-service","permalink":"/Cloud-Native/cnny-2023/tags/azure-kubernetes-service"}],"readingTime":3.175,"hasTruncateMarker":false,"authors":[{"name":"Cory Skimming","title":"Sr. Product Marketing Manager","url":"https://twitter.com/cskimming","imageURL":"https://pbs.twimg.com/profile_images/1493684068227055617/iC9r8v6Z_400x400.jpg","key":"cory"},{"name":"Devanshi Joshi","title":"Product Marketing Manager","url":"https://github.com/devanshidiaries","imageURL":"https://pbs.twimg.com/profile_images/1520928730230652928/00BaK5xn_400x400.jpg","key":"devanshi"},{"name":"Steven Murawski","title":"Principal Cloud Advocate","url":"https://github.com/smurawski","imageURL":"https://github.com/smurawski.png","key":"steven"},{"name":"Nitya Narasimhan","title":"Senior Cloud Advocate, Illustrator","url":"https://github.com/nitya","imageURL":"https://github.com/nitya.png","key":"nitya"}],"frontMatter":{"slug":"cnny-kickoff","title":"Kicking Off 30DaysOfCloudNative!","authors":["cory","devanshi","steven","nitya"],"draft":false,"hide_table_of_contents":false,"toc_min_heading_level":2,"toc_max_heading_level":3,"keywords":["serverless","containers","decision-tree","aks","kubernetes","container-apps"],"image":"https://azure.github.io/Cloud-Native/assets/ideal-img/hero-banner.e0a8d29.1030.png","description":"Let\'s  kick-off Cloud Native New Year with #30DaysOfCloudNative","tags":["cloud-native","30daysofcloudnative","zero-to-hero","ask-the-expert","azure-kubernetes-service"]},"prevItem":{"title":"1-1. Cloud-native Fundamentals","permalink":"/Cloud-Native/cnny-2023/cloud-native-fundamentals"}},"content":"<head>\\n  <meta name=\\"twitter:url\\" \\n    content=\\"https://azure.github.io/Cloud-Native/cnny-2023/cnny-kickoff\\" />\\n  <meta name=\\"twitter:title\\" \\n    content=\\"Kicking off Cloud Native New Year 2023\\" />\\n  <meta name=\\"twitter:description\\" \\n    content=\\"Let\'s  kick-off Cloud Native New Year with #30DaysOfCloudNative\\" />\\n  <meta name=\\"twitter:image\\" \\n    content=\\"https://azure.github.io/Cloud-Native/assets/ideal-img/hero-banner.e0a8d29.1030.png\\" />\\n  <meta name=\\"twitter:card\\" content=\\"summary_large_image\\" />\\n  <meta name=\\"twitter:creator\\" \\n    content=\\"@nitya\\" />\\n  <meta name=\\"twitter:site\\" content=\\"@nitya\\" /> \\n  <link rel=\\"canonical\\" \\n    href=\\"https://azure.github.io/Cloud-Native/cnny-2023/cnny-kickoff\\" />\\n</head>\\n\\nWelcome to the `Kick-off Post` for #30DaysOfCloudNative - one of the core initiatives within #CloudNativeNewYear! Over the next four weeks, join us as we take you from fundamentals to functional usage of Cloud-native technologies, one blog post at a time! Read on to learn a little bit about this initiative and what you can expect to learn from this journey!\\n\\n\\n## What We\'ll Cover\\n * What is Cloud-native New Year? (3 initiatives)\\n * How can I _skill up_ (30 days)\\n * Who is behind this? (Team Contributors)\\n * **Exercise**: Take the [Cloud Skills Challenge](https://aka.ms/CNNY/Challenge)!\\n * **Resources**: [#30DaysOfCloudNative Collection](https://aka.ms/CNNY/collection).\\n\\n---\\n\\n![Cloud-native New Year](../../static/img/cnny23/cnny-event-card.png)\\n\\n\\nWelcome to `Week 01` of [ \ud83e\udd73 #CloudNativeNewYear ](https://aka.ms/CNNY)! Today, we kick off a full month of content and activities to skill you up on all things Cloud-native on Azure with content, events, and community interactions! Read on to learn about what we have planned!\\n\\n---\\n\\n## Explore our initiatives\\n\\nWe have a number of initiatives planned for the month to help you learn and skill up on relevant technologies. Click on the links to visit the relevant pages for each. \\n\\n* [#30DaysOfCloudNative](/Cloud-Native/cnny-2023/) - 4 themed weeks of daily articles in a structured roadmap\\n* [Cloud Skills Challenge](https://aka.ms/CNNY/Challenge) - skill up by competing with peers to complete modules\\n* [Ask The Expert](https://aka.ms/CNNY/ate) - join live Q&A sessions with Product Engineering teams\\n\\nWe\'ll go into more details about **#30DaysOfCloudNative** in this post - don\'t forget to [subscribe](https://azure.github.io/Cloud-Native/cnny-2023/rss.xml) to the blog to get daily posts delivered directly to your preferred feed reader!\\n\\n---\\n\\n## Register for events!\\n\\nWhat are 3 things you can do today, to jumpstart your learning journey?\\n\\n * **Register** for live Q&A sessions (free, online) \\n    - Feb 9 - [Ask The Expert: Azure Kubernetes Service (PDT)](https://aka.ms/ATE0209/RSVP)\\n    - Feb 10 - [Ask the Expert: Azure Kubernetes Service (SGT)](https://aka.ms/ATE0209/APAC-RSVP)\\n  * **Register** for the [Cloud Skills Challenge](https://aka.ms/Challenge) - 30 days to complete it!\\n\\n---\\n\\n## #30DaysOfCloudNative\\n\\n[#30DaysOfCloudNative](https://azure.github.io/Cloud-Native/New-Year/) is a month-long series of daily blog posts grouped into 4 themed weeks - taking you from core concepts to end-to-end solution examples in 30 days. Each article will be short (5-8 mins reading time) and provide exercises and resources to help you reinforce learnings and take next steps.\\n\\nThis series focuses on the [Cloud-native On Azure](https://azure.microsoft.com/solutions/cloud-native-apps/?WT.mc_id=javascript-74010-ninarasi) learning journey in **four stages**, each building on the previous week to help you skill up in a beginner-friendly way:\\n * **Week 1:** Get started with [Cloud-native Concepts](https://azure.microsoft.com/solutions/cloud-native-apps/?WT.mc_id=javascript-74010-ninarasi) \\n * **Week 2:** Build & deploy [Kubernetes Apps on cloud](https://azure.microsoft.com/solutions/kubernetes-on-azure/?WT.mc_id=javascript-74010-ninarasi).\\n * **Week 3:** Migrate your applications to [Azure Kubernetes Service](https://azure.microsoft.com/products/kubernetes-service/?WT.mc_id=javascript-74010-ninarasi).\\n * **Week 4:** Go from Code to Containers to Cloud with [Cloud-native solutions](https://azure.microsoft.com/solutions/cloud-native-apps/?WT.mc_id=javascript-74010-ninarasi)\\n\\n![](./img/banner.png)\\n\\nWe have a tentative weekly-themed roadmap for the topics we hope to cover and will keep this updated as we go with links to actual articles as they get published.\\n\\n:::info Week 1: FOCUS ON CLOUD-NATIVE FUNDAMENTALS\\n\\nHere\'s a sneak peek at the week 1 schedule. We\'ll start with a broad review of cloud-native fundamentals and walkthrough the core concepts of microservices, containers and Kubernetes.\\n\\n * **Jan 23**: Learn Core Concepts for Cloud-native\\n * **Jan 24**: Container 101\\n * **Jan 25**: Adopting Microservices with Kubernetes\\n * **Jan 26**: Kubernetes 101\\n * **Jan 27**: Exploring your Cloud Native Options\\n\\n:::\\n\\n---\\n\\n\\n## Let\'s Get Started!\\n\\nNow you know everything! We hope you are as excited as we are to dive into a full month of active learning and doing! Don\'t forget to [subscribe](https://azure.github.io/Cloud-Native/cnny-2023/rss.xml?WT.mc_id=javascript-74010-ninarasi) for updates in your favorite feed reader! **And look out for our first Cloud-native Fundamentals post on January 23rd!**\\n\\n\\n---"}]}')}}]);