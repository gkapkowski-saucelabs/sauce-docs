"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[81160],{8916:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var r=s(74848),i=s(28453),o=s(86025);const t={id:"deployment-docker",title:"Deployment \u2013 Docker (Self-Hosted)",sidebar_label:"Deployment \u2013 Docker",keywords:["api","api-fortress","deployment","docker"]},l=void 0,d={id:"api-testing/on-prem/self-hosted/deployment-docker",title:"Deployment \u2013 Docker (Self-Hosted)",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/self-hosted/deployment-docker.md",sourceDirName:"api-testing/on-prem/self-hosted",slug:"/api-testing/on-prem/self-hosted/deployment-docker",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/on-prem/self-hosted/deployment-docker",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/self-hosted/deployment-docker.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724800332e3,frontMatter:{id:"deployment-docker",title:"Deployment \u2013 Docker (Self-Hosted)",sidebar_label:"Deployment \u2013 Docker",keywords:["api","api-fortress","deployment","docker"]},sidebar:"apif",previous:{title:"Backing Up your Data",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/on-prem/self-hosted/on-premises-backing-up-your-data"},next:{title:"Deployment - Kubernetes",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/on-prem/self-hosted/deployment-kubernetes"}},a={},c=[{value:"Introduction",id:"introduction",level:2},{value:"1. Copy the Provided Script Files",id:"1-copy-the-provided-script-files",level:2},{value:"2. Configure the Core Services",id:"2-configure-the-core-services",level:2},{value:"3. Install Docker",id:"3-install-docker",level:2},{value:"4. Install Docker Compose",id:"4-install-docker-compose",level:2},{value:"5. Provide API Fortress your DockerHub <code>username</code>",id:"5-provide-api-fortress-your-dockerhub-username",level:2},{value:"6. Login",id:"6-login",level:2},{value:"7. Create the API Fortress <code>network</code>",id:"7-create-the-api-fortress-network",level:2},{value:"8. Launch the Services",id:"8-launch-the-services",level:2},{value:"9. Verify the Deployment",id:"9-verify-the-deployment",level:2},{value:"10. Configure and Run the Downloader",id:"10-configure-and-run-the-downloader",level:2},{value:"11. Configure and run the Load Agent",id:"11-configure-and-run-the-load-agent",level:2},{value:"Step 1: Configure the maximum users per load agent",id:"step-1-configure-the-maximum-users-per-load-agent",level:3},{value:"Step 2: Configure the config.yml file",id:"step-2-configure-the-configyml-file",level:3},{value:"Step 3: Add the engine",id:"step-3-add-the-engine",level:3},{value:"Step 4: Run the engine",id:"step-4-run-the-engine",level:3},{value:"API Fortress Configuration Guide",id:"api-fortress-configuration-guide",level:2},{value:"Bootstrap",id:"bootstrap",level:3},{value:"System",id:"system",level:3},{value:"Email",id:"email",level:3},{value:"API Fortress Mailer",id:"api-fortress-mailer",level:3},{value:"API Fortress Downloader",id:"api-fortress-downloader",level:3},{value:"Appendix: Importing help tools and connectors",id:"appendix-importing-help-tools-and-connectors",level:2},{value:"Appendix: Tweaking Tomcat Configuration",id:"appendix-tweaking-tomcat-configuration",level:2},{value:"Dashboard over SSL",id:"dashboard-over-ssl",level:3},{value:"API Fortress through an HTTPS gateway",id:"api-fortress-through-an-https-gateway",level:3}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Head:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Legacy Documentation"}),(0,r.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,r.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,r.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(n.p,{children:"This manual will describe a normal deployment procedure for API Fortress self-hosted/on-premises, using a Docker container. It is important to remember that the goal of this guide is to be as thorough as possible. It may seem long but the process is fairly straightforward."}),"\n",(0,r.jsx)(n.p,{children:"Also, don't fret as we can provide as much help and guidance as you need. We are just a video conference away!"}),"\n",(0,r.jsx)(n.p,{children:"If you do not have the following files:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"/create_network.sh\n/core/docker-compose.yml\n/core/tomcat_conf/conf/\n/core/start_all.sh\n/downloader/docker-compose.yml\n/data/connectors.tgz\n/data/help.tgz\n/data/import_help.sh\n/data/import_connectors.sh\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Please reach out to us at ",(0,r.jsx)(n.a,{href:"mailto:sales@apifortress.com",children:"sales@apifortress.com"})," or fill out the ",(0,r.jsx)(n.a,{href:"https://apifortress.com/doc/on-premises-questionnaire-docker-self-hosted/",children:"questionnaire"})," here and someone will contact you with deployment files."]}),"\n",(0,r.jsx)(n.h2,{id:"1-copy-the-provided-script-files",children:"1. Copy the Provided Script Files"}),"\n",(0,r.jsxs)(n.p,{children:["Copy the provided ",(0,r.jsx)(n.code,{children:"core"})," and ",(0,r.jsx)(n.code,{children:"downloader"})," directories to the server and then type ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"cd core/"})}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"2-configure-the-core-services",children:"2. Configure the Core Services"}),"\n",(0,r.jsxs)(n.p,{children:["Before anything else, let\u2019s configure each service and prepare the environment. Most configuration keys are stored within the ",(0,r.jsx)(n.code,{children:"core/docker-compose.yml"})," file."]}),"\n",(0,r.jsxs)(n.p,{children:["PostgreSQL The only special configuration will be the storage on the host machine. Create a directory that will host PostgreSQL data in the host machine, and edit configuration file with that location. Replace the ",(0,r.jsx)(n.code,{children:'"/data/postgres"'})," with your details."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    volumes: - /data/postgres:/var/lib/postgresql/data\n"})}),"\n",(0,r.jsx)(n.p,{children:'MongoDB As with PostgreSQL, you are required to provide a storage location and edit the volumes key accordingly. Replace the "/data/mongodb" with your location.'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"   volumes: - /data/mongodb:/data/db\n"})}),"\n",(0,r.jsx)(n.p,{children:"API Fortress There are a lot of configuration keys here. None of them should be left empty (a fake value is fine if you're not using a certain feature). See the API Fortress Configuration Guide below for an explanation of each key."}),"\n",(0,r.jsx)(n.p,{children:"The essential keys for bootstrap (with dummy values) are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Admin User Creation"})," ",(0,r.jsx)(n.code,{children:"adminEmail: patrick@company.com adminFullName: Patrick Poulin"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Company Creation"})," ",(0,r.jsx)(n.code,{children:"defaultCompanyName: Your Company"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Base URL that will respond to HTTP requests"})," ",(0,r.jsx)(n.code,{children:"grailsServerURL: http://yourcompany.com/app"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"/app"})," part is required."]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"API Fortress Mailer"})," Refer below."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"API Fortress Downloader"})," To be configured after the dashboard bootstrap. Refer below."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"3-install-docker",children:"3. Install Docker"}),"\n",(0,r.jsxs)(n.p,{children:["Install Docker on a supported Linux distribution following the official instructions: ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/engine/installation/",children:"https://docs.docker.com/engine/installation/"})," The API Fortress stack runs successfully on Docker 1.12."]}),"\n",(0,r.jsx)(n.h2,{id:"4-install-docker-compose",children:"4. Install Docker Compose"}),"\n",(0,r.jsxs)(n.p,{children:["Docker Compose is a utility that simplifies the deployment and management of complete stacks. Follow the official instructions for installation: ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/compose/install/",children:"https://docs.docker.com/compose/install/"})]}),"\n",(0,r.jsxs)(n.h2,{id:"5-provide-api-fortress-your-dockerhub-username",children:["5. Provide API Fortress your DockerHub ",(0,r.jsx)(n.code,{children:"username"})]}),"\n",(0,r.jsxs)(n.p,{children:["For API Fortress to grant you access to the API Fortress registries, your DockerHub username is required. If you don't have a DockerHub account, create one at ",(0,r.jsx)(n.a,{href:"https://hub.docker.com/",children:"https://hub.docker.com/"})]}),"\n",(0,r.jsx)(n.h2,{id:"6-login",children:"6. Login"}),"\n",(0,r.jsxs)(n.p,{children:["Type ",(0,r.jsx)(n.code,{children:"sudo docker login"})," and input your DockerHub credentials."]}),"\n",(0,r.jsxs)(n.h2,{id:"7-create-the-api-fortress-network",children:["7. Create the API Fortress ",(0,r.jsx)(n.code,{children:"network"})]}),"\n",(0,r.jsxs)(n.p,{children:["The default API Fortress subnet is ",(0,r.jsx)(n.code,{children:"172.18.0.0/16"}),". Make sure the default subnet is not in use. If it is then edit it in the ",(0,r.jsx)(n.code,{children:"create_network.sh"})," script. Issue ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"sudo ./create_network.sh"})})," to create a virtual subnet for API Fortress."]}),"\n",(0,r.jsx)(n.h2,{id:"8-launch-the-services",children:"8. Launch the Services"}),"\n",(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsx)(n.p,{children:"Before you launch any service, we strongly recommend you to run:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"docker-compose pull\n"})}),(0,r.jsx)(n.p,{children:'from the "core" and "downloader" directories to download all packages and preemptively verify any possible connection issue.'})]}),"\n",(0,r.jsxs)(n.p,{children:["To launch all core services, just run the ",(0,r.jsx)(n.code,{children:"start_all.sh"})," script. It will take some time, but it will ensure every dependency is up and running before launching API Fortress."]}),"\n",(0,r.jsx)(n.h2,{id:"9-verify-the-deployment",children:"9. Verify the Deployment"}),"\n",(0,r.jsxs)(n.p,{children:["At the end of the process, the API Fortress dashboard should be up and running in the host server on ",(0,r.jsx)(n.code,{children:"port 80"}),". You can also check for errors in the logs by issuing the following command:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo docker-compose logs\n"})}),"\n",(0,r.jsx)(n.p,{children:"The admin user login details are as follows:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"username"}),": the email address provided in the ",(0,r.jsx)(n.code,{children:"docker-compose"})," configuration, in the adminEmailfield;"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"password"}),": 'foobar', change it as soon as you log in."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"10-configure-and-run-the-downloader",children:"10. Configure and Run the Downloader"}),"\n",(0,r.jsx)(n.p,{children:"The API Fortress downloader is the agent that retrieves the resources to be tested. Downloaders can be installed in various locations, so factors such as latency and download time can be measured by remote consumers."}),"\n",(0,r.jsx)(n.p,{children:"In this configuration path, we are deploying a downloader in the same server as API Fortress, and it will serve as the default downloader."}),"\n",(0,r.jsx)(n.admonition,{title:"Downloader 101",type:"tip",children:(0,r.jsxs)(n.p,{children:["Click here to learn more about the ",(0,r.jsx)(n.a,{href:"/api-testing/on-prem/learn-more/downloader-101",children:"Downloaders"}),"."]})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Edit the ",(0,r.jsx)(n.code,{children:"downloader/docker-compose.yml"})," file and take note of the value of the ",(0,r.jsx)(n.code,{children:"ipv4_address"})," configuration key."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Login to API Fortress with the admin user, access the API Fortress admin panel by clicking the \u201cuser\u201d icon in the top right, then click Admin Panel."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)("img",{src:(0,o.A)("img/api-fortress/2017/01/login.png"),alt:"Login"}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Choose \u201cDownloaders\u201d from the list of actions and click on the \u201cAdd Downloader\u201d button."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Fill the fields:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Name: Write a recognizable name"}),"\n",(0,r.jsx)(n.li,{children:"Location: A representation of where the downloader is (e.g., Chicago)."}),"\n",(0,r.jsx)(n.li,{children:"Latitude / Longitude: The geographical position of the downloader"}),"\n",(0,r.jsx)(n.li,{children:"Last Resort: Check this to make it the default downloader used"}),"\n",(0,r.jsxs)(n.li,{children:["URL: The address of the downloader, followed by port (default ",(0,r.jsx)(n.code,{children:"8819"}),") and path /api. In our example, the ",(0,r.jsx)(n.code,{children:"ipv4_address"})," and our downloader address would result in ",(0,r.jsx)(n.code,{children:"https://172.18.1.1:8819/api"})]}),"\n",(0,r.jsx)(n.li,{children:"API Key, API Secret: Write these two values down for use later."}),"\n",(0,r.jsx)(n.li,{children:"Assign to company: This is where you can choose which company in your instance has access to the downloader you are creating."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsx)(n.p,{children:'If you would like to use the same downloader across all companies in your instance, you can choose the option "Public downloader".'}),(0,r.jsx)(n.p,{children:'Choosing "Public downloader" does not make it publicly accessible by anyone, this just means it is accessible by all companies within your instance.'})]}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Edit the ",(0,r.jsx)(n.code,{children:"downloader/docker-compose.yml"})," file and enter the API Key and API Secret."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Go to the ",(0,r.jsx)(n.code,{children:"downloader/"})," directory and issue the ",(0,r.jsx)(n.code,{children:"sudo docker-compose up -d"})," command."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"11-configure-and-run-the-load-agent",children:"11. Configure and run the Load Agent"}),"\n",(0,r.jsx)(n.p,{children:"If your contract includes load testing capabilities, you will need to deploy at least one load agent to use this feature. A load agent is an application that will be used by the API Fortress platform to run tests in parallel to cause higher load."}),"\n",(0,r.jsx)(n.p,{children:"This manual describes how to run the first load agent in the server running the dashboard. This setup is acceptable for testing purposes. On production, we suggest dedicating the load agent a separate machine."}),"\n",(0,r.jsxs)(n.p,{children:["The directory containing the configuration for the load agent is called ",(0,r.jsx)(n.strong,{children:"core-server"})," and is part of your distribution."]}),"\n",(0,r.jsx)(n.h3,{id:"step-1-configure-the-maximum-users-per-load-agent",children:"Step 1: Configure the maximum users per load agent"}),"\n",(0,r.jsx)(n.p,{children:"Users per agent are the maximum number of virtual users that each Load Agent can provide."}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"It's important to remember that large numbers of simulated users will require large amounts of hardware resources. Contact your DevOps team to develop a strategy for resource allocation."})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Locate and open the file named ",(0,r.jsx)(n.em,{children:"application.conf"}),". It is located in ",(0,r.jsx)(n.em,{children:"core-server/etc"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Line 14 of this file (fixed-pool-size) should have it's value adjusted to match the desired number of maximum users per agent."}),"\n",(0,r.jsx)(n.li,{children:"Line 48 of this file (nr-of-instances) should have it's value adjusted to match the desired number of maximum users per agent. These two values should match."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"step-2-configure-the-configyml-file",children:"Step 2: Configure the config.yml file"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Locate and open ",(0,r.jsx)(n.em,{children:"config.yml."})," It is located at ",(0,r.jsx)(n.em,{children:"core-server/etc."})]}),"\n",(0,r.jsxs)(n.li,{children:["First, we have to configure the baseURL","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"baseURL is located on line 3."}),"\n",(0,r.jsx)(n.li,{children:"If the Load Agent and the API Fortress Dashboard are located on the same server, then you can replace the baseURL with the internal address and port of the Dashboard on the server."}),"\n",(0,r.jsx)(n.li,{children:"If the Load Agent and the API Fortress Dashboard are located on different servers, you can replace the baseURL with the actual URL of the Dashboard. That is to say, the URL you would use to access it via web browser."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Next, we need to provide the API Key and Secret.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Open the main API Fortress dashboard and click the gear icon in the upper right corner to access the settings menu"}),"\n",(0,r.jsxs)(n.li,{children:['Click the "',(0,r.jsx)(n.em,{children:"API Keys"}),'" option in the left sidebar.']}),"\n",(0,r.jsxs)(n.li,{children:['Click "',(0,r.jsx)(n.em,{children:'+API Key"'})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)("img",{src:(0,o.A)("img/api-fortress/2018/06/CreateAPIKey-1024x640.gif"),alt:"CreateAPIKey.gif"}),"\n",(0,r.jsx)(n.p,{children:"(Click image for GIF of procedure)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Copy the",(0,r.jsx)(n.em,{children:"API Key_to line 5 of _config.yml"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Copy the",(0,r.jsx)(n.em,{children:"Secret"})," to line 6 of ",(0,r.jsx)(n.em,{children:"config.yml"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"step-3-add-the-engine",children:"Step 3: Add the engine"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The next step is to add the new Engine to API Fortress itself."}),"\n",(0,r.jsx)(n.li,{children:"Log into API Fortress as an administrator."}),"\n",(0,r.jsxs)(n.li,{children:["Click the user icon in the upper right corner, and then click ",(0,r.jsx)(n.em,{children:'"Admin Panel"'})]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.em,{children:'"Engines"'})," on the left side of the screen."]}),"\n",(0,r.jsxs)(n.li,{children:['Click "',(0,r.jsx)(n.em,{children:'+Engine"'})]}),"\n",(0,r.jsx)(n.li,{children:"Enter the name and location of the Engine."}),"\n",(0,r.jsxs)(n.li,{children:["The CRN value defaults to a random string. You ",(0,r.jsx)(n.em,{children:"must"})," change it to something human-readable. This is the internal name of the engine."]}),"\n",(0,r.jsxs)(n.li,{children:["After modifying the CRN, copy the value to line 11 of ",(0,r.jsx)(n.em,{children:"config.yml"})]}),"\n",(0,r.jsxs)(n.li,{children:["Copy the secret to line 12 of ",(0,r.jsx)(n.em,{children:"config.yml"})]}),"\n",(0,r.jsxs)(n.li,{children:["Select the Owning Company of the Engine. An Engine must be owned by a single company. The default value (Public Engine) should ",(0,r.jsx)(n.em,{children:"not"})," be chosen."]}),"\n",(0,r.jsxs)(n.li,{children:["Select ",(0,r.jsx)(n.em,{children:'"Yes"'}),' for "',(0,r.jsx)(n.em,{children:"Dedicated to Load Testing"}),'"']}),"\n",(0,r.jsx)(n.li,{children:"Click the green check to save the Engine settings."}),"\n"]}),"\n",(0,r.jsx)("img",{src:(0,o.A)("img/api-fortress/2018/06/ezgif.com-gif-maker-1-1024x640.gif"),alt:"ezgif"}),"\n",(0,r.jsx)(n.p,{children:"(Click image for GIF of procedure)"}),"\n",(0,r.jsx)(n.h3,{id:"step-4-run-the-engine",children:"Step 4: Run the engine"}),"\n",(0,r.jsxs)(n.p,{children:['At the desired server location, use the "',(0,r.jsx)(n.em,{children:"docker-compose up -d"}),'" command to deploy the Load Agent container. After the operation is complete, the Load Agent will be visible to your API Fortress Load Tests.']}),"\n",(0,r.jsx)(n.h2,{id:"api-fortress-configuration-guide",children:"API Fortress Configuration Guide"}),"\n",(0,r.jsx)(n.p,{children:"A description of each configuration field you may need to alter."}),"\n",(0,r.jsx)(n.p,{children:"API Fortress Dashboard"}),"\n",(0,r.jsx)(n.h3,{id:"bootstrap",children:"Bootstrap"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"adminEmail"}),": The admin user email address, also used as login."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"adminFullName"}),": The admin's full name."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"defaultCompanyName"}),": The company name."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"system",children:"System"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"grailsServerURL"}),": the url the server will respond to"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"dbHost"}),": MongoDB host"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"psqlhost"}),": PostgreSQL host"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"rabbitHost"}),": RabbitMQ host"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["In case you're considering using an external PostgreSQL provider, the ",(0,r.jsx)(n.strong,{children:"psqlUsername"})," and ",(0,r.jsx)(n.strong,{children:"psqlPassword"})," parameters are also available. The database name is fixed and it's ",(0,r.jsx)(n.strong,{children:"apipulse"}),"."]})}),"\n",(0,r.jsx)(n.h3,{id:"email",children:"Email"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"apifortressMailUseSES: set to \u2018true\u2019 if you will use Amazon SES to send emails. When set to \u2018false\u2019, SMTP is used instead."})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"apifortressMailFrom"}),": the email address that will be used to dispatch administrative emails."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"apifortressMailSmtpHost"}),": SMTP host to dispatch administrative emails."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"apifortressMailSmtpUsername"}),": SMTP username."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"apifortressMailSmtpPassword"}),": SMTP password."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"apifortressMailSmtpPort:"})," SMTP port."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"amazonkey"}),": Amazon key, if you\u2019re using Amazon SES to send emails."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"amazonsecret"}),": Amazon secret, if you\u2019re using Amazon SES to send emails."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"apiaryClientId:"})," client ID if you\u2019re using Apiary services."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"apiarySecret:"})," secret, if you\u2019re using Apiary services."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"license:"})," the license string."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"api-fortress-mailer",children:"API Fortress Mailer"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"twilioSid"}),": SID, if you\u2019re sending SMSes via Twilio."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"twilioToken"}),": token, if you\u2019re sending SMSes via Twilio."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"smsFrom"}),": the phone number of the SMS sender, if you\u2019re sending SMSes via Twilio."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"mailFrom"}),": the email address that will be sending notification emails."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"mailUseSES"}),": \u2018true\u2019 if you\u2019re sending emails via Amazon SES. False if you\u2019re using SMTP."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"amazonKey:"})," the Amazon key, if you\u2019re sending emails via Amazon SES."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"amazonSecret"}),": the Amazon secret, if you\u2019re sending emails via Amazon SES."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"mailSmtpHost"}),": the SMTP host."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"mailSmtpPort"}),": the SMTP port."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"mailSmtpUsername"}),": the SMTP username."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"mailSmtpPassword"}),": the SMTP password."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"apifortressServerURL"}),": the url the server will respond to."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"api-fortress-downloader",children:"API Fortress Downloader"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"apikey"}),": the API key, as shown in the admin panel."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"secret"}),": the API secret, as shown in the admin panel."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"port"}),": the HTTP port the server will be listening to, in HTTP mode."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"rabbitHost"}),": the RabbitMQ host, when running in active mode."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"rabbitPort"}),": the RabbitMQ port, when running in active mode."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"rabbitSsl"}),": \u2018true\u2019 if RabbitMQ will need to communicate over SSL when running in active mode."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"rabbitUsername"}),": the RabbitMQ username when running in active mode."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"rabbitPassword"}),": the RabbitMQ password when running in active mode."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"use_rabbit"}),": \u2018true\u2019 to run in active mode."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"use_http"}),": \u2018true\u2019 to use the internal HTTP server (passive mode)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"use_ssl"}),": 'true' if the internal HTTP server has to run over SSL.\nThe network configuration is also important as the IP address may be used for internal communication."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"networks.apifortress.ipv4_address"}),": the reserved IP address in the API Fortress subnet."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"appendix-importing-help-tools-and-connectors",children:"Appendix: Importing help tools and connectors"}),"\n",(0,r.jsx)(n.p,{children:"The API Fortress database comes free from data, but the provided package gives you the option to import the help tools and the connectors. These operations are meant to be run once the API Fortress stack is fully functional."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Import Help"})," From the /data directory, run the ",(0,r.jsx)(n.code,{children:"import_help.sh"})," script."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Import Connectors"})," From the /data directory, run the ",(0,r.jsx)(n.code,{children:"import_connectors.sh"})," script."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"appendix-tweaking-tomcat-configuration",children:"Appendix: Tweaking Tomcat Configuration"}),"\n",(0,r.jsx)(n.p,{children:"If you need to tweak the Tomcat configuration, you will need to mount the Tomcat conf/ directory in your system."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Change the configuration files you need to edit in the ",(0,r.jsx)(n.code,{children:"core/tomcat_conf/conf"})," directory"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Mount the directory by uncommenting the following lines in the ",(0,r.jsx)(n.code,{children:"core/docker-compose.yml"})," file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"volumes:\n- ./tomcat_conf/conf:/usr/local/tomcat/conf\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"dashboard-over-ssl",children:"Dashboard over SSL"}),"\n",(0,r.jsx)(n.p,{children:"To have Tomcat running over SSL:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Copy your JKS keystore containing your certificate in the ",(0,r.jsx)(n.code,{children:"core/tomcat_conf/conf"})," directory"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Edit the ",(0,r.jsx)(n.code,{children:"core/tomcat_conf/conf/server.xml"})," file and uncomment the block:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:'<Connector port="8443" protocol="org.apache.coyote.http11.Http11Protocol" maxThreads="150" SSLEnabled="true" scheme="https" secure="true" clientAuth="false" sslProtocol="TLS" />\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Edit the block by adding the following attributes:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'keystoreFile="/usr/local/tomcat/conf/keystore.jks" keystorePass="thePasswordHere"\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Mount the directory by uncommenting the following lines in the ",(0,r.jsx)(n.code,{children:"core/docker-compose.yml"})," file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"volumes:\n- ./tomcat_conf/conf:/usr/local/tomcat/conf\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.code,{children:"core/docker-compose.yml"})," file, change the port declaration to:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"ports:\n- 443:8443/tcp\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"api-fortress-through-an-https-gateway",children:"API Fortress through an HTTPS gateway"}),"\n",(0,r.jsxs)(n.p,{children:["You may want to run API Fortress through a gateway that provides HTTPS support. To do so, you will need to allow Tomcat to determine which protocol was\xa0",(0,r.jsx)(n.strong,{children:"originally"}),"\xa0used to access the service."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Run API Fortress on an unprivileged HTTP port, like the default ",(0,r.jsx)(n.code,{children:"8080"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Mount the ",(0,r.jsx)(n.code,{children:"tomcat_conf"})," directory as described in the previous appendix"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Edit the file ",(0,r.jsx)(n.code,{children:"tomcat_conf/conf/context.xml"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Uncomment the following section:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:'\x3c!-- <Valve\n       className="org.apache.catalina.valves.RemoteIpValve"\n       internalProxies=".\\*"\n       remoteIpHeader="x-forwarded-for"\n       proxiesHeader="x-forwarded-by"\n       protocolHeader="x-forwarded-proto"\n   /> --\x3e\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Tweak the configuration if needed"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Restart the API Fortress dashboard service"}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>l});var r=s(96540);const i={},o=r.createContext(i);function t(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);