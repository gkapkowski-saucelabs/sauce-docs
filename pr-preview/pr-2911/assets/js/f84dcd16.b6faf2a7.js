"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[91321],{98908:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=r(74848),n=r(28453),a=r(86025);r(11470),r(19365);const o={id:"log-network",title:"Log Network",sidebar_label:"Log Network"},i=void 0,l={id:"testfairy/sdk/ios/log-network",title:"Log Network",description:"TestFairy provides a powerful feature that allows you to log all network requests made by your mobile app. This logging capability facilitates the monitoring of network access, enabling you to identify potential issues, such as slow requests or HTTP 4xx error codes.",source:"@site/docs/testfairy/sdk/ios/log-network.md",sourceDirName:"testfairy/sdk/ios",slug:"/testfairy/sdk/ios/log-network",permalink:"/sauce-docs/pr-preview/pr-2911/testfairy/sdk/ios/log-network",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/sdk/ios/log-network.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724800332e3,frontMatter:{id:"log-network",title:"Log Network",sidebar_label:"Log Network"},sidebar:"docs",previous:{title:"Integrating iOS SDK",permalink:"/sauce-docs/pr-preview/pr-2911/testfairy/sdk/ios/integrating-ios"},next:{title:"Cordova",permalink:"/sauce-docs/pr-preview/pr-2911/testfairy/platforms/cordova"}},u={},c=[{value:"Sending NSLog to TestFairy",id:"sending-nslog-to-testfairy",level:2}];function d(e){const t={a:"a",admonition:"admonition",h2:"h2",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["TestFairy provides a powerful feature that allows you to log all network requests made by your mobile app. This logging capability facilitates the monitoring of network access, enabling you to identify potential issues, such as ",(0,s.jsx)(t.strong,{children:"slow requests"})," or HTTP ",(0,s.jsx)(t.strong,{children:"4xx"})," error codes."]}),"\n",(0,s.jsx)(t.p,{children:"These issues might be challenging to locate manually but can significantly impact user experience. TestFairy will list all network requests on the session page. Fixing these issues will significantly improve the experience for your users."}),"\n",(0,s.jsx)("img",{src:(0,a.A)("/img/testfairy/sdk/logHttp.png"),alt:"example issues"}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["See our ",(0,s.jsx)(t.a,{href:"https://docs.saucelabs.com/testfairy/sdk/logging/",children:"Code Examples"})," for more information."]})}),"\n",(0,s.jsx)(t.h2,{id:"sending-nslog-to-testfairy",children:"Sending NSLog to TestFairy"}),"\n",(0,s.jsx)(t.p,{children:"The TestFairy SDK records your app while used so you can watch recorded sessions to solve problems faster. The SDK can record videos, screenshots, custom events, logs, and device metrics."}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"https://docs.saucelabs.com/testfairy/sdk/remote-logging/",children:"Remote Logging method"})," explains how to set iOS apps to send NSLogs to TestFairy (from iOS 10 and above)."]})})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var s=r(18215);const n={tabItem:"tabItem_Ymn6"};var a=r(74848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(n.tabItem,o),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>x});var s=r(96540),n=r(18215),a=r(23104),o=r(56347),i=r(205),l=r(57485),u=r(31682),c=r(89466);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:s,default:n}}=e;return{value:t,label:r,attributes:s,default:n}}))}(r);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const n=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})}),[a,n])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,a=p(e),[o,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[u,d]=h({queryString:r,groupId:n}),[g,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,c.Dv)(r);return[n,(0,s.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:n}),b=(()=>{const e=u??g;return f({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!f({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,a]),tabValues:a}}var m=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=r(74848);function v(e){let{className:t,block:r,selectedValue:s,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const t=e.currentTarget,r=l.indexOf(t),n=i[r].value;n!==s&&(u(t),o(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...a,className:(0,n.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":s===t}),children:r??t},t)}))})}function w(e){let{lazy:t,children:r,selectedValue:n}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function k(e){const t=g(e);return(0,y.jsxs)("div",{className:(0,n.A)("tabs-container",b.tabList),children:[(0,y.jsx)(v,{...e,...t}),(0,y.jsx)(w,{...e,...t})]})}function x(e){const t=(0,m.A)();return(0,y.jsx)(k,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var s=r(96540);const n={},a=s.createContext(n);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);