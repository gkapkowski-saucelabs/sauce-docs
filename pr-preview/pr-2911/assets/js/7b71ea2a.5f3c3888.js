"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[27985],{93886:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=s(74848),r=s(28453);s(11470),s(19365);const i={id:"webhooks",title:"Webhooks Integration",sidebar_label:"Webhooks",description:"Setup a webhook to which Sauce Labs test results are automatically pushed.",keywords:["get-test-results","webhooks","how-to"]},l=void 0,o={id:"basics/integrations/webhooks",title:"Webhooks Integration",description:"Setup a webhook to which Sauce Labs test results are automatically pushed.",source:"@site/docs/basics/integrations/webhooks.md",sourceDirName:"basics/integrations",slug:"/basics/integrations/webhooks",permalink:"/sauce-docs/pr-preview/pr-2911/basics/integrations/webhooks",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/basics/integrations/webhooks.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724800332e3,frontMatter:{id:"webhooks",title:"Webhooks Integration",sidebar_label:"Webhooks",description:"Setup a webhook to which Sauce Labs test results are automatically pushed.",keywords:["get-test-results","webhooks","how-to"]},sidebar:"docs",previous:{title:"TestRail",permalink:"/sauce-docs/pr-preview/pr-2911/basics/integrations/testrail"},next:{title:"Getting Started",permalink:"/sauce-docs/pr-preview/pr-2911/secure-connections"}},a={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Configure a Webhook",id:"configure-a-webhook",level:2},{value:"Delete a Webhook",id:"delete-a-webhook",level:2},{value:"Event Payload",id:"event-payload",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"The Sauce Labs Webhooks integration allows you to specify a URL to which Sauce Labs will push test result data as it becomes available, rather than forcing you to constantly poll for updates."}),"\n",(0,n.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["A Sauce Labs account (if you don't have one, start a ",(0,n.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Your Sauce Labs ",(0,n.jsx)(t.a,{href:"https://app.saucelabs.com/user-settings",children:"Username and Access Key"})]}),"\n",(0,n.jsx)(t.li,{children:"A URL able to consume events data pushed from Sauce Labs"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"configure-a-webhook",children:"Configure a Webhook"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["From your Sauce Labs account, navigate to the ",(0,n.jsx)(t.a,{href:"https://app.saucelabs.com/integrations",children:"Account Integrations"})," page."]}),"\n",(0,n.jsxs)(t.li,{children:["Click the Webhooks ",(0,n.jsx)(t.strong,{children:"Enable"})," button."]}),"\n",(0,n.jsx)(t.li,{children:"Enter the URL of the endpoint to which you would like Sauce Labs events pushed."}),"\n",(0,n.jsxs)(t.li,{children:["Select the events you wish to receive:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Virtual Devices"}),": Receive test result events for jobs run on Sauce Labs desktop browsers and mobile emulators and simulators."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Real Devices"}),": Receive test result events for Appium jobs run on Sauce Labs real devices."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"For each selected event type, choose whether you wish to receive data for all completed tests or only tests that failed."}),"\n",(0,n.jsxs)(t.li,{children:["Click ",(0,n.jsx)(t.strong,{children:"Save"})," to complete your configuration. Your webhook enablement appears under the ",(0,n.jsx)(t.strong,{children:"Saved Configurations"})," section. You can configure up to ten webhook integrations."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"delete-a-webhook",children:"Delete a Webhook"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["From your Sauce Labs account, navigate to the ",(0,n.jsx)(t.a,{href:"https://app.saucelabs.com/integrations",children:"Account Integrations"})," page."]}),"\n",(0,n.jsxs)(t.li,{children:["Click the Webhooks ",(0,n.jsx)(t.strong,{children:"Enable"})," button."]}),"\n",(0,n.jsxs)(t.li,{children:["In the ",(0,n.jsx)(t.strong,{children:"Saved Configurations"})," section, click the trashcan icon of the webhook configuration you wish to delete."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"event-payload",children:"Event Payload"}),"\n",(0,n.jsx)(t.p,{children:"Each event sends a POST request containing the job object with the following data fields as its payload:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Data Field"}),(0,n.jsx)(t.th,{children:"Format"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"id"})}),(0,n.jsx)(t.td,{children:"STRING"}),(0,n.jsx)(t.td,{children:"Sauce Labs unique identifier of the test."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"creation_time"})}),(0,n.jsx)(t.td,{children:"DATE-TIME"}),(0,n.jsxs)(t.td,{children:["The date-time value, in ",(0,n.jsx)(t.code,{children:"YYYY-MM-DDTHH:mm:ssZ"})," format, at which the test launched."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"modification_time"})}),(0,n.jsx)(t.td,{children:"DATE-TIME"}),(0,n.jsxs)(t.td,{children:["The date-time value, in ",(0,n.jsx)(t.code,{children:"YYYY-MM-DDTHH:mm:ssZ"})," format, at which the test changed. This is typically due to a change in status, which triggers a new event and new webhook post."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"owner"})}),(0,n.jsx)(t.td,{children:"STRING"}),(0,n.jsx)(t.td,{children:"The Sauce Labs user who initiated the test."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"owner_id"})}),(0,n.jsx)(t.td,{children:"STRING"}),(0,n.jsx)(t.td,{children:"The unique identifier of the test owner."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"org_id"})}),(0,n.jsx)(t.td,{children:"STRING"}),(0,n.jsx)(t.td,{children:"The unique identifier of the Sauce Labs organization to which the test owner belongs."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"team_id"})}),(0,n.jsx)(t.td,{children:"STRING"}),(0,n.jsx)(t.td,{children:"The unique identifier of the Sauce Labs team of which the test owner is a member."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"team_name"})}),(0,n.jsx)(t.td,{children:"STRING"}),(0,n.jsx)(t.td,{children:"The name of the team of which the test owner is a member."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"group_id"})}),(0,n.jsx)(t.td,{children:"STRING"}),(0,n.jsx)(t.td,{children:"The unique identifier of the Sauce Labs group of which the test owner is a member."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"status"})}),(0,n.jsx)(t.td,{children:"ENUM"}),(0,n.jsxs)(t.td,{children:["The status of the test at the time the webhook event was triggered. Possible values are:",(0,n.jsx)("br",{}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(t.code,{children:"COMPLETE"})}),(0,n.jsx)("li",{children:(0,n.jsx)(t.code,{children:"PASSED"})}),(0,n.jsx)("li",{children:(0,n.jsx)(t.code,{children:"FAILED"})}),(0,n.jsx)("li",{children:(0,n.jsx)(t.code,{children:"ERRORED"})})]})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"passed"})}),(0,n.jsx)(t.td,{children:"BOOLEAN"}),(0,n.jsxs)(t.td,{children:["If the test includes pass/fail assertions, this field states whether the test passed. This field is optional, possible values are:",(0,n.jsx)("br",{}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)(t.code,{children:"1"})," true"]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(t.code,{children:"0"})," false"]}),(0,n.jsx)("li",{children:(0,n.jsx)(t.code,{children:"null"})})]})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"name"})}),(0,n.jsx)(t.td,{children:"STRING"}),(0,n.jsx)(t.td,{children:"The name of the test."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"browser_name"})}),(0,n.jsx)(t.td,{children:"STRING"}),(0,n.jsx)(t.td,{children:"The browser in which the test ran."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"browser_version"})}),(0,n.jsx)(t.td,{children:"INTEGER"}),(0,n.jsx)(t.td,{children:"The version of the browser in which the test ran."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"os_name"})}),(0,n.jsx)(t.td,{children:"STRING"}),(0,n.jsx)(t.td,{children:"The operating system on which the test ran."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"os_version"})}),(0,n.jsx)(t.td,{children:"STRING"}),(0,n.jsx)(t.td,{children:"The version of the operating system on which the test ran."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"duration_sec"})}),(0,n.jsx)(t.td,{children:"INTEGER"}),(0,n.jsx)(t.td,{children:"The length of time that the test took to complete. This value is only populated in the final event push for the test."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"visibility"})}),(0,n.jsx)(t.td,{children:"ENUM"}),(0,n.jsxs)(t.td,{children:["Who within the Sauce Labs organization can see the test. Possible values are:",(0,n.jsx)("br",{}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(t.code,{children:"PUBLIC"})}),(0,n.jsx)("li",{children:(0,n.jsx)(t.code,{children:"PUBLIC RESTRICTED"})}),(0,n.jsx)("li",{children:(0,n.jsx)(t.code,{children:"SHARE"})}),(0,n.jsx)("li",{children:(0,n.jsx)(t.code,{children:"TEAM"})}),(0,n.jsx)("li",{children:(0,n.jsx)(t.code,{children:"PRIVATE"})})]}),"See ",(0,n.jsx)(t.a,{href:"/test-results/sharing-test-results/",children:"Sharing Test Results"})," for visibility definitions."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"tags"})}),(0,n.jsx)(t.td,{children:"ARRAY"}),(0,n.jsx)(t.td,{children:"A set of string values representing custom labels for the test."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"device"})}),(0,n.jsx)(t.td,{children:"STRING"}),(0,n.jsx)(t.td,{children:"For mobile app tests, the Sauce Labs unique identifier of the device on which the test was run."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"app"})}),(0,n.jsx)(t.td,{children:"STRING"}),(0,n.jsx)(t.td,{children:"The App Storage identifier of uploaded test materials, such as the mobile app under test or a project test file."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"error"})}),(0,n.jsx)(t.td,{children:"STRING"}),(0,n.jsx)(t.td,{children:"An error that occurred during the test."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"exception"})}),(0,n.jsx)(t.td,{children:"STRING"}),(0,n.jsx)(t.td,{children:"An exception that was thrown during the test."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"commit_id"})}),(0,n.jsx)(t.td,{children:"STRING"}),(0,n.jsxs)(t.td,{children:["Commit information related to your development repo, if you have added the ",(0,n.jsx)(t.a,{href:"/dev/test-configuration-options/#custom-data",children:(0,n.jsx)(t.code,{children:"custom-data.commit"})})," capability to your test. Currently this field is not supported for RDC events and it will always appear as an empty string."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"branch_name"})}),(0,n.jsx)(t.td,{children:"STRING"}),(0,n.jsxs)(t.td,{children:["The relevant branch of the referenced commit, if you have added the ",(0,n.jsx)(t.a,{href:"/dev/test-configuration-options/#custom-data",children:(0,n.jsx)(t.code,{children:"custom-data.branch"})})," capability to your test. Currently this field is not supported for RDC events and it will always appear as an empty string."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"build"})}),(0,n.jsx)(t.td,{children:"STRING"}),(0,n.jsx)(t.td,{children:"A custom value that can group multiple related tests."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"automation_backend"})}),(0,n.jsx)(t.td,{children:"STRING"}),(0,n.jsx)(t.td,{children:"The framework on which the test is run. Currently this field is not supported for RDC events and it will always appear as an empty string."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"data_type"})}),(0,n.jsx)(t.td,{children:"ENUM"}),(0,n.jsxs)(t.td,{children:["The type of event that triggered the webhook. Possible values are: ",(0,n.jsx)("br",{}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(t.code,{children:"vdc"})}),(0,n.jsx)("li",{children:(0,n.jsx)(t.code,{children:"rdc"})})]})]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},19365:(e,t,s)=>{s.d(t,{A:()=>l});s(96540);var n=s(18215);const r={tabItem:"tabItem_Ymn6"};var i=s(74848);function l(e){let{children:t,hidden:s,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,l),hidden:s,children:t})}},11470:(e,t,s)=>{s.d(t,{A:()=>y});var n=s(96540),r=s(18215),i=s(23104),l=s(56347),o=s(205),a=s(57485),d=s(31682),c=s(89466);function h(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:s}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:s,attributes:n,default:r}}=e;return{value:t,label:s,attributes:n,default:r}}))}(s);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function x(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:s}=e;const r=(0,l.W6)(),i=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,a.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function b(e){const{defaultValue:t,queryString:s=!1,groupId:r}=e,i=u(e),[l,a]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=s.find((e=>e.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[d,h]=j({queryString:s,groupId:r}),[b,p]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Dv)(s);return[r,(0,n.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:r}),f=(()=>{const e=d??b;return x({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{f&&a(f)}),[f]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),p(e)}),[h,p,i]),tabValues:i}}var p=s(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=s(74848);function v(e){let{className:t,block:s,selectedValue:n,selectValue:l,tabValues:o}=e;const a=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),c=e=>{const t=e.currentTarget,s=a.indexOf(t),r=o[s].value;r!==n&&(d(t),l(r))},h=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const s=a.indexOf(e.currentTarget)+1;t=a[s]??a[0];break}case"ArrowLeft":{const s=a.indexOf(e.currentTarget)-1;t=a[s]??a[a.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},t),children:o.map((e=>{let{value:t,label:s,attributes:i}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>a.push(e),onKeyDown:h,onClick:c,...i,className:(0,r.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":n===t}),children:s??t},t)}))})}function g(e){let{lazy:t,children:s,selectedValue:r}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function w(e){const t=b(e);return(0,m.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,m.jsx)(v,{...e,...t}),(0,m.jsx)(g,{...e,...t})]})}function y(e){const t=(0,p.A)();return(0,m.jsx)(w,{...e,children:h(e.children)},String(t))}},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>o});var n=s(96540);const r={},i=n.createContext(r);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);