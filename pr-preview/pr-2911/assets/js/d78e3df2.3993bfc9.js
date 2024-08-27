"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[70804],{94502:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var o=s(74848),n=s(28453),i=s(86025);const a={id:"appdome",title:"Appdome Integration",sidebar_label:"Appdome",description:"Test Appdome-secured Android and iOS apps with Sauce Labs.",keywords:["devsecops","security","automated-testing","mobile","mobile-native","how-to"]},r=void 0,d={id:"basics/integrations/appdome",title:"Appdome Integration",description:"Test Appdome-secured Android and iOS apps with Sauce Labs.",source:"@site/docs/basics/integrations/appdome.md",sourceDirName:"basics/integrations",slug:"/basics/integrations/appdome",permalink:"/sauce-docs/pr-preview/pr-2911/basics/integrations/appdome",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/basics/integrations/appdome.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724800332e3,frontMatter:{id:"appdome",title:"Appdome Integration",sidebar_label:"Appdome",description:"Test Appdome-secured Android and iOS apps with Sauce Labs.",keywords:["devsecops","security","automated-testing","mobile","mobile-native","how-to"]},sidebar:"docs",previous:{title:"WonderProxy",permalink:"/sauce-docs/pr-preview/pr-2911/basics/integrations/wonderproxy"},next:{title:"TestRail",permalink:"/sauce-docs/pr-preview/pr-2911/basics/integrations/testrail"}},p={},c=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Testing Appdome-secured iOS and Android Apps",id:"testing-appdome-secured-ios-and-android-apps",level:2},{value:"Troubleshooting Tips",id:"troubleshooting-tips",level:2}];function l(e){const t={a:"a",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Learn how to test Appdome-secured Android and iOS apps with Sauce Labs' automation test platform for DevSecOps. Appdome works with all leading mobile automation testing solutions to help you achieve comprehensive mobile app security with speed and agility, all within the app\u2019s lifecycle."}),"\n",(0,o.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["A Sauce Labs account (if you don't have one, start a ",(0,o.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial"}),")"]}),"\n",(0,o.jsxs)(t.li,{children:["An ",(0,o.jsx)(t.a,{href:"https://fusion.appdome.com/login",children:"Appdome account"})]}),"\n",(0,o.jsx)(t.li,{children:"An Appdome-secured Android or iOS app"}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"testing-appdome-secured-ios-and-android-apps",children:"Testing Appdome-secured iOS and Android Apps"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["From your Sauce Labs account, go to ",(0,o.jsx)(t.strong,{children:"Live"})," > ",(0,o.jsx)(t.strong,{children:"Mobile App"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["To upload your Android or iOS app, click ",(0,o.jsx)(t.strong,{children:"Upload App"}),".","\n",(0,o.jsx)("img",{src:(0,i.A)("img/integrations/appdome/appdome-1.png"),alt:"Mobile App page",width:"700"}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["Once uploaded, hover over the app, then click ",(0,o.jsx)(t.strong,{children:"Settings"}),".","\n",(0,o.jsx)("img",{src:(0,i.A)("img/integrations/appdome/appdome-2.png"),alt:"Mobile App Settings",width:"700"}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["Disable ",(0,o.jsx)(t.strong,{children:"Instrumentation"})," and ",(0,o.jsx)(t.strong,{children:"Image Injection"}),", then click ",(0,o.jsx)(t.strong,{children:"Back to App Selection"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["To select a test device, hover over the app and click ",(0,o.jsx)(t.strong,{children:"Choose Device"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["From the Mobile Real tab, hover over a device and click ",(0,o.jsx)(t.strong,{children:"Start test"}),". ",(0,o.jsx)("br",{}),"\nThis starts a manual test for the uploaded app on the selected device.","\n",(0,o.jsx)("img",{src:(0,i.A)("img/integrations/appdome/appdome-4.png"),alt:"Start test",width:"700"}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["When your test is done, click ",(0,o.jsx)(t.strong,{children:"End"}),". ",(0,o.jsx)("br",{}),"\nYou can now view your test results."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["If you want to test using Appium, see ",(0,o.jsx)(t.a,{href:"/mobile-apps/automated-testing/appium/",children:"Appium on Sauce Labs"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"troubleshooting-tips",children:"Troubleshooting Tips"}),"\n",(0,o.jsxs)(t.p,{children:["Most automation test tools can typically be used in one of two modes: emulator mode and manual mode (specific terms may vary according to the testing tool). If you use the automation test tool in ",(0,o.jsx)(t.strong,{children:"emulator mode"})," instead of ",(0,o.jsx)(t.strong,{children:"manual mode"}),", the Appdome-secured application will not run on the device. This is expected because ",(0,o.jsx)(t.a,{href:"https://www.appdome.com/how-to/mobile-app-security/no-code-app-shielding/no-code-mobile-app-shielding-resources/",children:"Appdome ONEShield"})," protects apps from running on emulators/simulators. Instead, you should run the automation test tool in manual mode."]}),"\n",(0,o.jsxs)(t.p,{children:["If you see a message such as: ",(0,o.jsx)(t.strong,{children:"Application has violated security policies and it will be shut down"}),", this means that: (1) techniques such as emulators, tampering, or reverse engineering are present, and (2) the Fusion Set does not contain Appdome Threat-Events. This is expected because ",(0,o.jsx)(t.a,{href:"https://www.appdome.com/how-to/mobile-app-security/no-code-app-shielding/no-code-mobile-app-shielding-resources/",children:"Appdome ONEShield"})," protects against those conditions. You can either remove the triggering condition or use ",(0,o.jsx)(t.a,{href:"https://www.appdome.com/how-to/threat-events/mobile-threat-events/how-to-implement-appdomes-oneshield-threat-events-2/",children:"Appdome Threat Events"})," if applicable."]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>r});var o=s(96540);const n={},i=o.createContext(n);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);