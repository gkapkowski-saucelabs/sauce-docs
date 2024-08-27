"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[330],{76514:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(74848),i=n(28453);n(86025),n(11470),n(19365);const r={id:"testing-android-apps",title:"Testing Android Apps",sidebar_label:"Testing Android Apps"},s=void 0,o={id:"testfairy/testers/testing-android-apps",title:"Testing Android Apps",description:"As a tester, you will receive an email invitation from the application developer, inviting you to test a specific application build. Follow the steps below to successfully test the Android app and troubleshoot any installation issues that may arise.",source:"@site/docs/testfairy/testers/testing-android-apps.md",sourceDirName:"testfairy/testers",slug:"/testfairy/testers/testing-android-apps",permalink:"/sauce-docs/pr-preview/pr-2911/testfairy/testers/testing-android-apps",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/testers/testing-android-apps.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724800332e3,frontMatter:{id:"testing-android-apps",title:"Testing Android Apps",sidebar_label:"Testing Android Apps"},sidebar:"docs",previous:{title:"Build the Testers App",permalink:"/sauce-docs/pr-preview/pr-2911/testfairy/testers/building-testers-app"},next:{title:"Registering an iOS Device UDID",permalink:"/sauce-docs/pr-preview/pr-2911/testfairy/testers/reg-ios-device"}},l={},c=[{value:"Creating a tester&#39;s account",id:"creating-a-testers-account",level:2},{value:"Troubleshooting installation",id:"troubleshooting-installation",level:2}];function u(e){const t={h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"As a tester, you will receive an email invitation from the application developer, inviting you to test a specific application build. Follow the steps below to successfully test the Android app and troubleshoot any installation issues that may arise."}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Inside the invitation email, click on the provided ",(0,a.jsx)(t.strong,{children:"Download App"})," link."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Save the application to your device."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"After downloading, locate the saved application and open it."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Upon opening the application, you will be prompted to install it on your device. Click on the ",(0,a.jsx)(t.strong,{children:"Install"})," button to proceed with the installation."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Once the installation is complete, the application icon should appear on your device's desktop."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"creating-a-testers-account",children:"Creating a tester's account"}),"\n",(0,a.jsx)(t.p,{children:"Once you've been invited to test an application via TestFairy, you can create a TestFairy account to manage your testing activities. Open the invitation you've received for testing a new build, and click the **tester account **link."}),"\n",(0,a.jsx)(t.p,{children:'Click on "I am a tester, I do not know my password" and submit your email address. You will receive an email with instructions for setting a new password for your\ntester account.'}),"\n",(0,a.jsx)(t.h2,{id:"troubleshooting-installation",children:"Troubleshooting installation"}),"\n",(0,a.jsx)(t.p,{children:"If the application does not install on your device, check for Duplicate Application:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"If the application fails to install, verify if you already have the same application installed with the same name."}),"\n",(0,a.jsx)(t.li,{children:"If a duplicate application is found, remove it from your device before attempting to install the new version."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:'If you receive an "Installation blocked" message during the installation process, follow these steps:'}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:'Go to your device\'s "Settings."'}),"\n",(0,a.jsx)(t.li,{children:'Select "Security" from the options.'}),"\n",(0,a.jsx)(t.li,{children:'Look for "Unknown sources" and enable "Allow installation of apps from sources other than the Play Store."'}),"\n",(0,a.jsx)(t.li,{children:"Attempt to re-install the application."}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var a=n(18215);const i={tabItem:"tabItem_Ymn6"};var r=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,s),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>j});var a=n(96540),i=n(18215),r=n(23104),s=n(56347),o=n(205),l=n(57485),c=n(31682),u=n(89466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:i}}=e;return{value:t,label:n,attributes:a,default:i}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const i=(0,s.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(i.location.search);t.set(r,e),i.replace({...i.location,search:t.toString()})}),[r,i])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,r=p(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[c,d]=f({queryString:n,groupId:i}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,r]=(0,u.Dv)(n);return[i,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:i}),v=(()=>{const e=c??m;return h({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,r]),tabValues:r}}var b=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function y(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),i=o[n].value;i!==a&&(c(t),s(i))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...r,className:(0,i.A)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:i}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function w(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,i.A)("tabs-container",v.tabList),children:[(0,g.jsx)(y,{...e,...t}),(0,g.jsx)(x,{...e,...t})]})}function j(e){const t=(0,b.A)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var a=n(96540);const i={},r=a.createContext(i);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);