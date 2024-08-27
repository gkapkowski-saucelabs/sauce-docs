"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[28737],{62024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(74848),r=n(28453);n(86025),n(11470),n(19365);const i={id:"uploading-an-app",title:"Uploading an App",sidebar_label:"Uploading an App"},s=void 0,o={id:"testfairy/using-testfairy/uploading-an-app",title:"Uploading an App",description:"Once your account is created and verified, you can upload your app.",source:"@site/docs/testfairy/using-testfairy/uploading-an-app.md",sourceDirName:"testfairy/using-testfairy",slug:"/testfairy/using-testfairy/uploading-an-app",permalink:"/sauce-docs/pr-preview/pr-2911/testfairy/using-testfairy/uploading-an-app",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/using-testfairy/uploading-an-app.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724800332e3,frontMatter:{id:"uploading-an-app",title:"Uploading an App",sidebar_label:"Uploading an App"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/sauce-docs/pr-preview/pr-2911/testfairy/"},next:{title:"Builds",permalink:"/sauce-docs/pr-preview/pr-2911/testfairy/using-testfairy/builds"}},l={},u=[{value:"Manual Upload",id:"manual-upload",level:2},{value:"Supported Platforms",id:"supported-platforms",level:3},{value:"Choose your Build File",id:"choose-your-build-file",level:3},{value:"Project Settings",id:"project-settings",level:3},{value:"Updating an App",id:"updating-an-app",level:3},{value:"Uploading a New Version",id:"uploading-a-new-version",level:3}];function d(e){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Once your account is created and verified, you can upload your app."}),"\n",(0,a.jsxs)(t.p,{children:["Click ",(0,a.jsx)(t.strong,{children:"New Upload"})," to upload an app."]}),"\n",(0,a.jsx)(t.p,{children:"We recommend using the Upload API method to enable the Jenkins plugin, Gradle plugin, or Command line uploader."}),"\n",(0,a.jsx)(t.p,{children:"The code of our command line uploader, Jenkins plugin, and Gradle plugin is open source, so feel free to change and improve it."}),"\n",(0,a.jsx)(t.h2,{id:"manual-upload",children:"Manual Upload"}),"\n",(0,a.jsx)(t.h3,{id:"supported-platforms",children:"Supported Platforms"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Android"}),": TestFairy supports uploading and distributing Android Applications. Distributing Android apps with TestFairy must be packaged as a ",(0,a.jsx)(t.code,{children:".apk"})," or ",(0,a.jsx)(t.code,{children:".aab"})," file."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"iOS"}),": TestFairy supports uploading and distributing iOS applications. You can sign iOS apps with AdHoc, Development, or Enterprise certificates. Distributing iOS apps with TestFairy must be packaged as a ",(0,a.jsx)(t.code,{children:".ipa"})," file."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"MacOS"}),": MacOS apps are bundled as ",(0,a.jsx)(t.code,{children:".app"})," files, however, to distribute MacOS apps with TestFairy, those ",(0,a.jsx)(t.code,{children:".app"})," files must be zipped into a ",(0,a.jsx)(t.code,{children:".zip"})," file."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"choose-your-build-file",children:"Choose your Build File"}),"\n",(0,a.jsxs)(t.p,{children:["In the first stage you need to choose the file you want to upload. It can be an ",(0,a.jsx)(t.strong,{children:".ipa"})," (for iOS), ",(0,a.jsx)(t.strong,{children:".apk"})," (for Android), or ",(0,a.jsx)(t.strong,{children:".zip"})," (for MacOS) file."]}),"\n",(0,a.jsx)(t.h3,{id:"project-settings",children:"Project Settings"}),"\n",(0,a.jsx)(t.p,{children:"You can define your build settings during the upload process:"}),"\n",(0,a.jsxs)(t.p,{children:["-- ",(0,a.jsx)(t.strong,{children:"In-app reporting"}),' - Check this box to enable/disable the "shake to report" feature in your app. When enabled, users can shake their device to send a feedback report, along with a video recording, screenshots, logs, and metrics of their test.']}),"\n",(0,a.jsxs)(t.p,{children:["-- ",(0,a.jsx)(t.strong,{children:"Auto-Update"})," - When auto-update is enabled, users using previous versions of this app will get a notification about the new version the next time they open up the app. The latest version will be downloaded automatically, so the user doesn't have to download it manually. Note that no email notification will be sent to the testers in this case."]}),"\n",(0,a.jsxs)(t.p,{children:["-- ",(0,a.jsx)(t.strong,{children:"Custom Comments"})," - Use this section to add release notes, describe the updates/changes, and anything else you want your testers to know."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Note:"})," These settings are relevant only if you add the SDK to your app."]}),"\n",(0,a.jsx)(t.p,{children:"More build settings are available on the Account Settings page."}),"\n",(0,a.jsx)(t.h3,{id:"updating-an-app",children:"Updating an App"}),"\n",(0,a.jsx)(t.p,{children:"To update a build, upload the same file again (that is., the same build with the same version). The new build file will override the old build without creating a new app version."}),"\n",(0,a.jsx)(t.h3,{id:"uploading-a-new-version",children:"Uploading a New Version"}),"\n",(0,a.jsx)(t.p,{children:"To upload a new build (a new version of the same app), upload the new version as you uploaded the old version. TestFairy identifies that both apps have the same package name (bundle identifier) and group them together in the same project."})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var a=n(18215);const r={tabItem:"tabItem_Ymn6"};var i=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,s),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(96540),r=n(18215),i=n(23104),s=n(56347),o=n(205),l=n(57485),u=n(31682),d=n(89466);function c(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=p(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[u,c]=f({queryString:n,groupId:r}),[g,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,d.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),m=(()=>{const e=u??g;return h({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{m&&l(m)}),[m]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),b(e)}),[c,b,i]),tabValues:i}}var b=n(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function y(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),r=o[n].value;r!==a&&(u(t),s(r))},c=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:c,onClick:d,...i,className:(0,r.A)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function j(e){const t=g(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,v.jsx)(y,{...e,...t}),(0,v.jsx)(x,{...e,...t})]})}function w(e){const t=(0,b.A)();return(0,v.jsx)(j,{...e,children:c(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var a=n(96540);const r={},i=a.createContext(r);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);