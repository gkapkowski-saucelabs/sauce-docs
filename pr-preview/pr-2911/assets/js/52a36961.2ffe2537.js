"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[7226],{18610:(e,t,n)=>{n.d(t,{Ay:()=>l,RM:()=>i});var s=n(74848),r=n(28453);const i=[];function a(e){return(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"/visual-testing/integrations/cypress/",children:"Cypress Integration"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"/visual-testing/integrations/csharp/",children:"C#/.Net Integration"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"/visual-testing/integrations/java/",children:"Java Integration"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"/visual-testing/integrations/nightwatch/",children:"Nightwatch Integration"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"/visual-testing/integrations/webdriverio/",children:"WebdriverIO Integration"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"/visual-testing/integrations/python/",children:"Python Integration"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"/visual-testing/integrations/python-robot-framework/",children:"Python (Robot Framework) Integration"})})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a()}},17676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=n(74848),r=n(28453),i=(n(86025),n(11470),n(19365),n(18610));const a={sidebar_label:"Test Execution"},l="Test Execution Workflow",o={id:"visual-testing/workflows/test-execution",title:"Test Execution Workflow",description:"This workflow is responsible for generating snapshots (screenshots) of the website or app under test.",source:"@site/docs/visual-testing/workflows/test-execution.md",sourceDirName:"visual-testing/workflows",slug:"/visual-testing/workflows/test-execution",permalink:"/sauce-docs/pr-preview/pr-2911/visual-testing/workflows/test-execution",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/visual-testing/workflows/test-execution.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724800332e3,frontMatter:{sidebar_label:"Test Execution"},sidebar:"docs",previous:{title:"Overview",permalink:"/sauce-docs/pr-preview/pr-2911/visual-testing"},next:{title:"Review",permalink:"/sauce-docs/pr-preview/pr-2911/visual-testing/workflows/review"}},u={},c=[{value:"Integrations",id:"integrations",level:2},...i.RM,{value:"First Test Execution",id:"first-test-execution",level:2},{value:"Subsequent Test Executions",id:"subsequent-test-executions",level:2}];function d(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"test-execution-workflow",children:"Test Execution Workflow"}),"\n",(0,s.jsx)(t.p,{children:'This workflow is responsible for generating snapshots (screenshots) of the website or app under test.\nUsers new to visual testing often have an existing test suite in WebdriverIO, Cypress or a similar framework.\nWith Sauce Visual testing existing test suites can be enhanced with a few extra "take a snapshot" statements and that is all it takes to implement this workflow. Test Execution can be executed for both E2E and Component Testing.'}),"\n",(0,s.jsx)(t.h2,{id:"integrations",children:"Integrations"}),"\n",(0,s.jsx)(t.p,{children:"Sauce Visual provides integrations with different kind of frameworks:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"E2E Testing"})," allows to navigate a website and capture snapshots any time this is needed."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Component Testing"})," allows to test extensively all your components."]}),"\n"]}),"\n",(0,s.jsxs)("div",{className:"box-wrapper",markdown:"1",children:[(0,s.jsx)("div",{className:"box box1 card",children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)("h2",{children:"E2E Testing"}),(0,s.jsx)(i.Ay,{})]})}),(0,s.jsx)("div",{className:"box box2 card",children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)("h2",{children:"Component Testing"}),(0,s.jsx)("ul",{children:(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"/visual-testing/integrations/storybook/",children:"Storybook Integration"})})})]})})]}),"\n",(0,s.jsxs)(t.p,{children:["Alternatively, ",(0,s.jsx)(t.a,{href:"/sauce-docs/pr-preview/pr-2911/visual-testing#examples",children:"check out our examples"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"first-test-execution",children:"First Test Execution"}),"\n",(0,s.jsxs)(t.p,{children:["Upon executing your tests for the first time, a visual baseline is automatically created in our system. This baseline serves as the standard for all subsequent tests and matches based on the metadata as described in the ",(0,s.jsx)(t.a,{href:"/sauce-docs/pr-preview/pr-2911/visual-testing#baseline-matching",children:"Baseline Matching"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The newly created baseline needs to be reviewed and approved by a user. This can be done in the ",(0,s.jsx)(t.a,{href:"https://app.saucelabs.com/visual/builds",children:"Sauce Visual Builds"})," page. Once approved, see ",(0,s.jsx)(t.a,{href:"/sauce-docs/pr-preview/pr-2911/visual-testing/workflows/review#reviewing-and-accepting-baselines",children:"Reviewing and Accepting baselines"}),', the baseline is "locked" and will be used for all subsequent tests.']}),"\n",(0,s.jsx)(t.h2,{id:"subsequent-test-executions",children:"Subsequent Test Executions"}),"\n",(0,s.jsxs)(t.p,{children:["As new tests are run, they are compared to the original baseline, with any deviations highlighted to signal visual changes. These comparisons are integral for detecting any unintended visual modifications early in your development cycle. All test builds, including the initial baseline and subsequent runs, can be monitored and managed through the Sauce Labs platform at ",(0,s.jsx)(t.a,{href:"https://app.saucelabs.com/visual/builds",children:"Sauce Visual Builds"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/sauce-docs/pr-preview/pr-2911/visual-testing/workflows/review",children:"Follow me to learn more"})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"The baseline is established during the initial run, and any subsequent visual differences detected will be marked for review."})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var s=n(18215);const r={tabItem:"tabItem_Ymn6"};var i=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,a),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>y});var s=n(96540),r=n(18215),i=n(23104),a=n(56347),l=n(205),o=n(57485),u=n(31682),c=n(89466);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,a.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=h(e),[a,o]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:i}))),[u,d]=f({queryString:n,groupId:r}),[b,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),g=(()=>{const e=u??b;return p({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{g&&o(g)}),[g]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),v(e)}),[d,v,i]),tabValues:i}}var v=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(74848);function m(e){let{className:t,block:n,selectedValue:s,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),r=l[n].value;r!==s&&(u(t),a(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...i,className:(0,r.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function j(e){const t=b(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,x.jsx)(m,{...e,...t}),(0,x.jsx)(w,{...e,...t})]})}function y(e){const t=(0,v.A)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var s=n(96540);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);