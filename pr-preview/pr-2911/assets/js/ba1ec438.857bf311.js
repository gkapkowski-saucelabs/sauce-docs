"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[23486],{31317:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=n(74848),i=n(28453);n(11470),n(19365),n(86025);const a={id:"privacy-control",title:"Privacy Control",sidebar_label:"Privacy Control",description:"Backtrace provides several facilities for scrubbing data of personal information."},s=void 0,o={id:"error-reporting/security-compliance/privacy-control",title:"Privacy Control",description:"Backtrace provides several facilities for scrubbing data of personal information.",source:"@site/docs/error-reporting/security-compliance/privacy-control.md",sourceDirName:"error-reporting/security-compliance",slug:"/error-reporting/security-compliance/privacy-control",permalink:"/sauce-docs/pr-preview/pr-2911/error-reporting/security-compliance/privacy-control",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/security-compliance/privacy-control.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724800332e3,frontMatter:{id:"privacy-control",title:"Privacy Control",sidebar_label:"Privacy Control",description:"Backtrace provides several facilities for scrubbing data of personal information."},sidebar:"backtrace",previous:{title:"Common Questions",permalink:"/sauce-docs/pr-preview/pr-2911/error-reporting/security-compliance/common-questions"},next:{title:"Platform Overview",permalink:"/sauce-docs/pr-preview/pr-2911/error-reporting/advanced/platform-overview"}},l={},c=[{value:"Data Scrubbers for Minidump",id:"data-scrubbers-for-minidump",level:2},{value:"Listing Scrubbers",id:"listing-scrubbers",level:3},{value:"Creating, Modifying, or Deleting Scrubbers",id:"creating-modifying-or-deleting-scrubbers",level:3},{value:"Extensions for Native UNIX Dumps",id:"extensions-for-native-unix-dumps",level:2},{value:"For On-Premise Customers Using coronerd",id:"for-on-premise-customers-using-coronerd",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"Backtrace provides several facilities for scrubbing data of personally identifiable information. There are mechanisms for both native UNIX core dump formats as well as the minidump format used by Windows, Breakpad, and Crashpad."}),"\n",(0,t.jsx)(r.h2,{id:"data-scrubbers-for-minidump",children:"Data Scrubbers for Minidump"}),"\n",(0,t.jsx)(r.p,{children:"Minidump files contain raw data of the crashed process which may include sensitive data, such as Personally Identifiable Information (PII). When they are submitted to Backtrace server, metadata and attributes are extracted from them and the minidump files are persisted on disk. Developers are able to view these dumps directly in their web browser or download them for the purposes of root cause analysis."}),"\n",(0,t.jsx)(r.p,{children:"Data Scrubbers provide administrators the ability to remove sensitive data from dump files submitted to Backtrace before they are committed to disk. All data contained in the dump including register values, memory and crash attributes is scanned for patterns that may be indicative of personally identifiable information."}),"\n",(0,t.jsx)(r.p,{children:"There are two primary classes of data scrubbers: built-in scrubbers and regular expression scrubbers. Built-in scrubbers exist for:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Credit card numbers"}),"\n",(0,t.jsx)(r.li,{children:"Social security numbers"}),"\n",(0,t.jsx)(r.li,{children:"Encryption keys"}),"\n",(0,t.jsx)(r.li,{children:"Environment variables"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"These scrubbers are applied to:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Filesystem paths"}),"\n",(0,t.jsx)(r.li,{children:"Register values"}),"\n",(0,t.jsx)(r.li,{children:"Memory regions"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"If an environment variable scrubber is enabled, all environment variables are scrubbed."}),"\n",(0,t.jsx)(r.p,{children:"All personally identifiable information is mutated in-place before committing to disk. The offending information is masked and the over-all structure of the file is unmodified in order to ensure that the file can be loaded by your system debugger."}),"\n",(0,t.jsxs)(r.p,{children:["User-defined scrubbers can also be defined using POSIX regular expressions. Scrubbers that rely on regular expression are applied to any data in the dump that looks like it may be a string. For example, string representations of IP addresses can be scrubbed with the regular expression ",(0,t.jsx)(r.code,{children:"[0-9]+\\.[0-9]+\\.[0-9]+\\.[0-9]+"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["At this time, management of the scrubbers is handled through the morgue command line utility. For more information about how to use morgue, see ",(0,t.jsx)(r.a,{href:"/error-reporting/advanced/morgue/",children:"Morgue"}),"."]}),"\n",(0,t.jsx)(r.h3,{id:"listing-scrubbers",children:"Listing Scrubbers"}),"\n",(0,t.jsx)(r.p,{children:'You can list the scrubbers of a project. For example, the following command lists the scrubbers of project "minetest".'}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"morgue scrubber minetest list\n[1] credit_card\n        regexp: null\n       builtin: ccn\n        format: minidump\n        target: memory\n        enable: 0\n[2] social_security\n        regexp: null\n       builtin: ssn\n        format: minidump\n        target: memory\n        enable: 0\n[3] security_key\n        regexp: null\n       builtin: key\n        format: minidump\n        target: memory\n        enable: 0\n[4] environment_variable\n        regexp: null\n       builtin: env\n        format: all\n        target: all\n        enable: 1\n[5] ip_addr\n        regexp: [0-9]+\\.[0-9]+\\.[0-9]+\\.[0-9]+\n       builtin: null\n        format: all\n        target: all\n        enable: 1\n"})}),"\n",(0,t.jsxs)(r.p,{children:["This project has five data scrubbers. Each scrubber is given an ",(0,t.jsx)(r.code,{children:"id"})," number and consists of the following fields:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"name"}),": A human-readable name for a scrubber."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"regexp"}),": a regular expression defined by the user."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"builtin"}),": Includes the built-in scrubbers. Current implementation includes: ",(0,t.jsx)(r.code,{children:"ccn"}),", ",(0,t.jsx)(r.code,{children:"ssn"}),", ",(0,t.jsx)(r.code,{children:"key"}),", and ",(0,t.jsx)(r.code,{children:"env"}),"; which are credit card number, social security number, encryption key, and environment variable respectively."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"format"}),": Refers to the applicable error and crash format. It must be ",(0,t.jsx)(r.code,{children:"minidump"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"target"}),": Refers to data regions of crash error to scrub. Valid values are: ",(0,t.jsx)(r.code,{children:"memory"}),", ",(0,t.jsx)(r.code,{children:"map"}),", ",(0,t.jsx)(r.code,{children:"registers"}),", ",(0,t.jsx)(r.code,{children:"variable"}),", and, ",(0,t.jsx)(r.code,{children:"all"}),". However, the current implementation doesn't enforce the target. All data is scrubbed instead."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"enable"}),": Specifies if the scrubber will be applied to crash error data. ",(0,t.jsx)(r.code,{children:"0"})," disables the scrubber, while other integer values enable the scrubber."]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"creating-modifying-or-deleting-scrubbers",children:"Creating, Modifying, or Deleting Scrubbers"}),"\n",(0,t.jsxs)(r.p,{children:["You can create, modify, or delete a data scrubber. You must specify either ",(0,t.jsx)(r.code,{children:"regexp"})," or ",(0,t.jsx)(r.code,{children:"builtin"}),", but not both. If ",(0,t.jsx)(r.code,{children:"--builtin=all"})," is chosen, all built-in scrubbers are created at once."]}),"\n",(0,t.jsxs)(r.p,{children:["Options include: ",(0,t.jsx)(r.code,{children:"--format="})," and ",(0,t.jsx)(r.code,{children:"--target="}),". If not specified, both ",(0,t.jsx)(r.code,{children:"format"})," and ",(0,t.jsx)(r.code,{children:"target"})," are set to ",(0,t.jsx)(r.code,{children:"all"}),"."]}),"\n",(0,t.jsx)(r.p,{children:"For example, the following example creates a scrubber to filter IP addresses."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"morgue scrubber minetest create --name=ip_scrubber --regexp='[0-9]+\\.[0-9]+\\.[0-9]+\\.[0-9]+' --enable=1\n"})}),"\n",(0,t.jsx)(r.h2,{id:"extensions-for-native-unix-dumps",children:"Extensions for Native UNIX Dumps"}),"\n",(0,t.jsxs)(r.p,{children:["If you are using our advanced debugger for Linux, FreeBSD and IllumOS-based systems, you are able to modify and censor personally identifiable information through our plugin system, either with LUA or C plugins. For more information, see ",(0,t.jsx)(r.a,{href:"/error-reporting/advanced/ptrace/",children:"Plugins for ptrace"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"for-on-premise-customers-using-coronerd",children:"For On-Premise Customers Using coronerd"}),"\n",(0,t.jsxs)(r.p,{children:["Add the following to your ",(0,t.jsx)(r.code,{children:"coronerd.conf"})," file:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'"data_scrub": {\n    "enable": true\n}\n'})}),"\n",(0,t.jsx)(r.p,{children:"After adding, make sure you restart the coronerd service."})]})}function u(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},19365:(e,r,n)=>{n.d(r,{A:()=>s});n(96540);var t=n(18215);const i={tabItem:"tabItem_Ymn6"};var a=n(74848);function s(e){let{children:r,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(i.tabItem,s),hidden:n,children:r})}},11470:(e,r,n)=>{n.d(r,{A:()=>w});var t=n(96540),i=n(18215),a=n(23104),s=n(56347),o=n(205),l=n(57485),c=n(31682),d=n(89466);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return u(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:i}}=e;return{value:r,label:n,attributes:t,default:i}}))}(n);return function(e){const r=(0,c.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function h(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:n}=e;const i=(0,s.W6)(),a=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,l.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(i.location.search);r.set(a,e),i.replace({...i.location,search:r.toString()})}),[a,i])]}function p(e){const{defaultValue:r,queryString:n=!1,groupId:i}=e,a=b(e),[s,l]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:a}))),[c,u]=m({queryString:n,groupId:i}),[p,f]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[i,a]=(0,d.Dv)(n);return[i,(0,t.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:i}),v=(()=>{const e=c??p;return h({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,a]),tabValues:a}}var f=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function x(e){let{className:r,block:n,selectedValue:t,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const r=e.currentTarget,n=l.indexOf(r),i=o[n].value;i!==t&&(c(r),s(i))},u=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;r=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;r=l[n]??l[l.length-1];break}}r?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},r),children:o.map((e=>{let{value:r,label:n,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>l.push(e),onKeyDown:u,onClick:d,...a,className:(0,i.A)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function y(e){let{lazy:r,children:n,selectedValue:i}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=a.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==i})))})}function j(e){const r=p(e);return(0,g.jsxs)("div",{className:(0,i.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...e,...r}),(0,g.jsx)(y,{...e,...r})]})}function w(e){const r=(0,f.A)();return(0,g.jsx)(j,{...e,children:u(e.children)},String(r))}},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>o});var t=n(96540);const i={},a=t.createContext(i);function s(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);