"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[50945],{9361:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=n(74848),a=n(28453);n(86025),n(11470),n(19365);const r={id:"data-center-endpoints",title:"Data Center Endpoints",sidebar_label:"Data Center Endpoints"},i=void 0,c={id:"basics/data-center-endpoints",title:"Data Center Endpoints",description:"The data center you use with Sauce Labs determines:",source:"@site/docs/basics/data-center-endpoints.md",sourceDirName:"basics",slug:"/basics/data-center-endpoints",permalink:"/sauce-docs/pr-preview/pr-2911/basics/data-center-endpoints",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/basics/data-center-endpoints.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724800332e3,frontMatter:{id:"data-center-endpoints",title:"Data Center Endpoints",sidebar_label:"Data Center Endpoints"},sidebar:"docs",previous:{title:"Platform Configurator",permalink:"/sauce-docs/pr-preview/pr-2911/basics/platform-configurator"},next:{title:"Using Environment Variables",permalink:"/sauce-docs/pr-preview/pr-2911/basics/environment-variables"}},l={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Access to Data Centers",id:"access-to-data-centers",level:2},{value:"Data Center Endpoints",id:"data-center-endpoints",level:2},{value:"Sauce Connect Proxy",id:"sauce-connect-proxy",level:3},{value:"US West Data Center",id:"us-west-data-center",level:3},{value:"US East Data Center",id:"us-east-data-center",level:3},{value:"EU Central Data Center",id:"eu-central-data-center",level:3},{value:"IP Address Ranges - Outgoing",id:"ip-address-ranges---outgoing",level:2},{value:"Sauce Connect Proxy",id:"sauce-connect-proxy-1",level:3},{value:"US West Region",id:"us-west-region",level:3},{value:"US East Region",id:"us-east-region",level:3},{value:"EU Central Reguion",id:"eu-central-reguion",level:3},{value:"Real Devices",id:"real-devices",level:2},{value:"Restricted Access",id:"restricted-access",level:3},{value:"Access to Real Devices",id:"access-to-real-devices",level:3},{value:"Automated Tests and APIs",id:"automated-tests-and-apis",level:3},{value:"Authorization Credentials",id:"authorization-credentials",level:4},{value:"Running Tests on EU Central",id:"running-tests-on-eu-central",level:4},{value:"Single Sign-On (SSO) Configuration",id:"single-sign-on-sso-configuration",level:3},{value:"US West Data Center",id:"us-west-data-center-1",level:4},{value:"US East Data Center",id:"us-east-data-center-1",level:4},{value:"EU Central Data Center",id:"eu-central-data-center-1",level:4},{value:"Changing Your Data Center",id:"changing-your-data-center",level:2},{value:"Data Center Status",id:"data-center-status",level:2},{value:"Maintenance Windows",id:"maintenance-windows",level:3}];function o(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"The data center you use with Sauce Labs determines:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The location of the servers where your tests are run"}),"\n",(0,s.jsx)(t.li,{children:"Where related artifacts are stored"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["A Sauce Labs account (",(0,s.jsx)(t.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,s.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")"]}),"\n",(0,s.jsxs)(t.li,{children:["Your Sauce Labs ",(0,s.jsx)(t.a,{href:"https://app.saucelabs.com/user-settings",children:"Username and Access Key"})]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"access-to-data-centers",children:"Access to Data Centers"}),"\n",(0,s.jsx)(t.p,{children:"Your data center is determined based on your license type and your company's needs:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Free-trial users and self-service users select their data center when they sign up for Sauce Labs."}),"\n",(0,s.jsx)(t.li,{children:"Enterprise plan users select one or more data centers as part of their contract with Sauce Labs."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"To see your data center, check the upper-right corner of the Sauce Labs user interface. Options include:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"US West"}),"\n",(0,s.jsx)(t.li,{children:"US East"}),"\n",(0,s.jsx)(t.li,{children:"EU Central"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"data-center-endpoints",children:"Data Center Endpoints"}),"\n",(0,s.jsx)(t.h3,{id:"sauce-connect-proxy",children:"Sauce Connect Proxy"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Endpoint"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Initial connection"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://saucelabs.com/rest/v1",children:"https://saucelabs.com/rest/v1"})})]})})]}),"\n",(0,s.jsx)(t.p,{children:"Sauce Connect Proxy makes its initial connection to saucelabs.com. After that, it uses the data center-specific endpoints listed below."}),"\n",(0,s.jsx)(t.h3,{id:"us-west-data-center",children:"US West Data Center"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Endpoint"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"OnDemand Endpoint"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://ondemand.us-west-1.saucelabs.com/wd/hub",children:"https://ondemand.us-west-1.saucelabs.com/wd/hub"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"REST API"}),(0,s.jsx)(t.td,{children:"api.us-west-1.saucelabs.com"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Sauce Connect Tunnel Servers"}),(0,s.jsx)(t.td,{children:"maki*.miso.saucelabs.com:443"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"us-east-data-center",children:"US East Data Center"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Endpoint"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"OnDemand Endpoint"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://ondemand.us-east-4.saucelabs.com/wd/hub",children:"https://ondemand.us-east-4.saucelabs.com/wd/hub"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"REST API"}),(0,s.jsx)(t.td,{children:"api.us-east-4.saucelabs.com"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Sauce Connect Tunnel Servers"}),(0,s.jsx)(t.td,{children:"*.tunnels.us-east-4.saucelabs.com:443"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"eu-central-data-center",children:"EU Central Data Center"}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["Depending on the framework or driver you use, you might need to make additional changes to your tests to run them in the EU Central data center. See ",(0,s.jsx)(t.a,{href:"#running-tests-on-eu-central",children:"Running Tests on EU Central"})," for details."]})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Endpoint"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"OnDemand Endpoint"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://ondemand.eu-central-1.saucelabs.com/wd/hub",children:"https://ondemand.eu-central-1.saucelabs.com/wd/hub"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"REST API"}),(0,s.jsx)(t.td,{children:"api.eu-central-1.saucelabs.com"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Sauce Connect Tunnel Servers"}),(0,s.jsx)(t.td,{children:"maki*.eu-central-1.miso.saucelabs.com:443"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"ip-address-ranges---outgoing",children:"IP Address Ranges - Outgoing"}),"\n",(0,s.jsx)(t.p,{children:"To set up an IP-address-based allowlist for outgoing connections, rather than using hostnames, see the following table for the relevant IP ranges."}),"\n",(0,s.jsx)(t.h3,{id:"sauce-connect-proxy-1",children:"Sauce Connect Proxy"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Endpoint"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Initial connection"}),(0,s.jsx)(t.td,{children:"34.96.70.78"})]})})]}),"\n",(0,s.jsx)(t.p,{children:"Sauce Connect Proxy makes its initial connection to saucelabs.com, which resolves to the IP address above. After that, it uses the data center-specific endpoints listed below."}),"\n",(0,s.jsx)(t.h3,{id:"us-west-region",children:"US West Region"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.th,{children:"Endpoints"})})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{children:"34.125.90.96/27 (from Jan 31 2023)"})}),(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{children:"34.125.246.157/32"})}),(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{children:"44.225.33.89/32"})}),(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{children:"66.85.48.0/21"})}),(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{children:"162.222.72.0/21"})})]})]}),"\n",(0,s.jsx)(t.h3,{id:"us-east-region",children:"US East Region"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.th,{children:"Endpoints"})})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{children:"66.85.48.0/21"})}),(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{children:"162.222.72.0/21"})}),(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{children:"34.145.254.128/27"})})]})]}),"\n",(0,s.jsx)(t.h3,{id:"eu-central-reguion",children:"EU Central Reguion"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.th,{children:"Endpoints"})})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{children:"34.107.82.96/27 (from Jan 31 2023)"})}),(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{children:"34.141.28.96/32"})}),(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{children:"162.222.79.0/27"})}),(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{children:"185.94.24.0/22"})})]})]}),"\n",(0,s.jsx)(t.h2,{id:"real-devices",children:"Real Devices"}),"\n",(0,s.jsx)(t.p,{children:"For real device testing, the location of your data center determines the format of some of the information you will see. Devices in US data centers default to EN-US, and will display information like date, currency, and temperature using US standard terms (i.e., MM/dd/yyyy, $, and F\xb0), while devices in EU data centers default to EN-UK, and will display information like date, currency, and temperature using UK standard terms (i.e., dd/MM/yyyy, \xa3, and C\xb0)."}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"This information only applies to real device testing. For all others, the default location will be EN-US, regardless of location."})}),"\n",(0,s.jsx)(t.h3,{id:"restricted-access",children:"Restricted Access"}),"\n",(0,s.jsx)(t.p,{children:"If you attempt to use a data center that you don't have access to:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["In the UI:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"If you have a free-trial or self-service license, you can see the full list of data centers but can only select the one you have access to."}),"\n",(0,s.jsx)(t.li,{children:"If you have an enterprise plan, you can select any data center but you won't have any concurrent sessions available for data centers you don't have access to."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:"When running an automated test, you'll see an error message indicating that you don't have access."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"access-to-real-devices",children:"Access to Real Devices"}),"\n",(0,s.jsx)(t.p,{children:"Real devices are kept in our data center, behind locked racks and doors. Other security measures include:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"WiFi APIs are password protected with WPA2 security protocol, so only our devices can connect to the subnet."}),"\n",(0,s.jsx)(t.li,{children:"Devices must have proper proxy information in order to have network connectivity."}),"\n",(0,s.jsx)(t.li,{children:"Access management is handled by Sauce Labs, and only specific individuals are allowed access to our devices, with logs that track all access attempts."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"automated-tests-and-apis",children:"Automated Tests and APIs"}),"\n",(0,s.jsx)(t.h4,{id:"authorization-credentials",children:"Authorization Credentials"}),"\n",(0,s.jsxs)(t.p,{children:["The URL hostname and authorization credentials for APIs are different for each data center, and can be found in Sauce Labs on the ",(0,s.jsx)(t.strong,{children:"User Settings"})," page."]}),"\n",(0,s.jsx)(t.h4,{id:"running-tests-on-eu-central",children:"Running Tests on EU Central"}),"\n",(0,s.jsx)(t.p,{children:"If you use any of the following and your data center is EU Central, you need to make changes to your tests and/or framework to run those tests in the EU data center."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Framework"}),(0,s.jsx)(t.th,{children:"Change"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Java with JUnit or TestNG"}),(0,s.jsxs)(t.td,{children:["Set ",(0,s.jsx)(t.code,{children:"SAUCE_REST_ENDPOINT=https://eu-central-1.saucelabs.com/"})," as a system/environment variable, otherwise test status will not be set."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Protractor"}),(0,s.jsxs)(t.td,{children:["Update to version 5.4.2 or later of Protractor and set ",(0,s.jsx)(t.code,{children:"sauceRegion"})," to ",(0,s.jsx)(t.code,{children:"eu"})," in your config file."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"WebDriverIO"}),(0,s.jsxs)(t.td,{children:["Update to version 4.14.1 or later, or 5.0.0 or later, of WebDriverIO and set ",(0,s.jsx)(t.code,{children:"region"})," to ",(0,s.jsx)(t.code,{children:"eu"})," in your wdio.conf file."]})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"single-sign-on-sso-configuration",children:"Single Sign-On (SSO) Configuration"}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("span",{className:"sauceGold",children:"Deprecated"})}),"\n",(0,s.jsxs)(t.admonition,{type:"caution",children:[(0,s.jsxs)(t.p,{children:["This SSO flow has been ",(0,s.jsx)(t.code,{children:"deprecated"}),". Use this documentation only if your organization was not migrated to the new SSO."]}),(0,s.jsxs)(t.p,{children:["If you do not have any SSO integrations set up at Sauce Labs and you wish to establish a new integration, see ",(0,s.jsx)(t.a,{href:"/basics/sso/setting-up-sso",children:"Setting Up SSO"})," to get started."]}),(0,s.jsxs)(t.p,{children:["If you have previously implemented the deprecated SSO integration and wish to migrate to the new SSO implementation, see the ",(0,s.jsx)(t.a,{href:"/basics/sso/migration-from-deprecated-sso/",children:"step-by-step migration guide"}),"."]})]}),"\n",(0,s.jsx)(t.p,{children:"If you're using SSO with Sauce Labs, your data center determines the appropriate URLs for:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Signing/Encryption Certificate - This URL shows the certificate metadata you need to provide to your service provider to authenticate with Sauce Labs."}),"\n",(0,s.jsx)(t.li,{children:"Entity AssertionConsumeURL - This URL is the endpoint where your service provider gets SAML assertions from Sauce Labs."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["For details about setting up SSO for Sauce Labs, see ",(0,s.jsx)(t.a,{href:"/basics/sso-deprecated/setting-up-single-sign-on",children:"Setting Up Single Sign-On (Deprecated Flow)"}),"."]}),"\n",(0,s.jsx)(t.h4,{id:"us-west-data-center-1",children:"US West Data Center"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Signing/Encryption Certificate/Entity ID"}),(0,s.jsx)(t.th,{children:"Entity AssertionConsumeURL"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://saucelabs.com/sso/metadata",children:"https://saucelabs.com/sso/metadata"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://saucelabs.com/sso/acs",children:"https://saucelabs.com/sso/acs"})})]})})]}),"\n",(0,s.jsx)(t.h4,{id:"us-east-data-center-1",children:"US East Data Center"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Signing/Encryption Certificate/Entity ID"}),(0,s.jsx)(t.th,{children:"Entity AssertionConsumeURL"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://us-east-4.saucelabs.com/sso/metadata",children:"https://us-east-4.saucelabs.com/sso/metadata"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://us-east-4.saucelabs.com/sso/acs",children:"https://us-east-4.saucelabs.com/sso/acs"})})]})})]}),"\n",(0,s.jsx)(t.h4,{id:"eu-central-data-center-1",children:"EU Central Data Center"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Signing/Encryption Certificate/Entity ID"}),(0,s.jsx)(t.th,{children:"Entity AssertionConsumeURL"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://eu-central-1.saucelabs.com/sso/metadata",children:"https://eu-central-1.saucelabs.com/sso/metadata"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://eu-central-1.saucelabs.com/sso/acs",children:"https://eu-central-1.saucelabs.com/sso/acs"})})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"changing-your-data-center",children:"Changing Your Data Center"}),"\n",(0,s.jsx)(t.p,{children:"If you have access to more than one data center, you can switch data centers by clicking the data center name in the upper-right corner. This drops down a list of options available to you."}),"\n",(0,s.jsx)(t.p,{children:"Changing your data center changes what you can see and do in the Sauce Labs UI:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Live tests you run in the UI."}),"\n",(0,s.jsx)(t.li,{children:"Results for live tests and automated tests you run on the data center."}),"\n",(0,s.jsx)(t.li,{children:"Organization-wide concurrency settings specific to the data center."}),"\n",(0,s.jsx)(t.li,{children:"Teams associated with the data center."}),"\n",(0,s.jsx)(t.li,{children:"Sauce Connect Proxy tunnels connected to the data center."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"data-center-status",children:"Data Center Status"}),"\n",(0,s.jsxs)(t.p,{children:["To check on the status of your data center, see the ",(0,s.jsx)(t.a,{href:"https://status.saucelabs.com/",children:"Sauce Labs Systems Status"})," page."]}),"\n",(0,s.jsx)(t.h3,{id:"maintenance-windows",children:"Maintenance Windows"}),"\n",(0,s.jsxs)(t.p,{children:["To view planned maintenance windows for your data center, see ",(0,s.jsx)(t.a,{href:"/dev/data-center-maint",children:"Maintenance Windows"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var s=n(18215);const a={tabItem:"tabItem_Ymn6"};var r=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,i),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>S});var s=n(96540),a=n(18215),r=n(23104),i=n(56347),c=n(205),l=n(57485),d=n(31682),o=n(89466);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:a}}=e;return{value:t,label:n,attributes:s,default:a}}))}(n);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function x(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=u(e),[i,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:r}))),[d,h]=j({queryString:n,groupId:a}),[p,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,o.Dv)(n);return[a,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),b=(()=>{const e=d??p;return x({value:e,tabValues:r})?e:null})();(0,c.A)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!x({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),m(e)}),[h,m,r]),tabValues:r}}var m=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(74848);function v(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),o=e=>{const t=e.currentTarget,n=l.indexOf(t),a=c[n].value;a!==s&&(d(t),i(a))},h=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:c.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>l.push(e),onKeyDown:h,onClick:o,...r,className:(0,a.A)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=p(e);return(0,f.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,f.jsx)(v,{...e,...t}),(0,f.jsx)(g,{...e,...t})]})}function S(e){const t=(0,m.A)();return(0,f.jsx)(y,{...e,children:h(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var s=n(96540);const a={},r=s.createContext(a);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);