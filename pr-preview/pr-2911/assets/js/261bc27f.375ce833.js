"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[33406],{39549:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=t(74848),a=t(28453),s=t(86025);const r={id:"input-set-and-global-variables",title:"Input Sets and Global Variables",sidebar_label:"Input Sets and Global Variables",keywords:["api-testing","input-sets","global","vars"]},o=void 0,l={id:"api-testing/on-prem/learn-more/input-set-and-global-variables",title:"Input Sets and Global Variables",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/learn-more/input-set-and-global-variables.md",sourceDirName:"api-testing/on-prem/learn-more",slug:"/api-testing/on-prem/learn-more/input-set-and-global-variables",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/on-prem/learn-more/input-set-and-global-variables",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/learn-more/input-set-and-global-variables.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724800332e3,frontMatter:{id:"input-set-and-global-variables",title:"Input Sets and Global Variables",sidebar_label:"Input Sets and Global Variables",keywords:["api-testing","input-sets","global","vars"]},sidebar:"apif",previous:{title:"Improving Your Metrics",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/on-prem/learn-more/improving-your-metrics"},next:{title:"Outline a Plan for your Test",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/on-prem/learn-more/planning-your-test"}},d={},c=[{value:"Add a Global Parameter",id:"add-a-global-parameter",level:2},{value:"Add an Input Set",id:"add-an-input-set",level:2},{value:"Using the Vault and Scheduler",id:"using-the-vault-and-scheduler",level:2},{value:"Priority Order",id:"priority-order",level:3}];function p(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Legacy Documentation"}),(0,i.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,i.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,i.jsx)(n.p,{children:"In the test creation process, the definition of global and local variables allows you to parametrize the test to allow more flexibility."}),"\n",(0,i.jsx)(n.h2,{id:"add-a-global-parameter",children:"Add a Global Parameter"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"global"})," parameters are common variables designed to run with the whole test (i.e. api key, domain etc)."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For adding a global parameter/varaible click on the ",(0,i.jsx)(n.em,{children:"+Add Global Param"})," in the ",(0,i.jsx)(n.strong,{children:"Data Sets"})," panel:"]}),"\n",(0,i.jsx)("img",{src:(0,s.A)("img/api-fortress/2017/07/variable.jpg"),alt:"variable.jpg"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Then fill in the name and value:"}),"\n",(0,i.jsx)("img",{src:(0,s.A)("img/api-fortress/2017/07/global.jpg"),alt:"global.jpg"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The parameter/variable will be present in the test scope, and remains constant during test execution."}),"\n",(0,i.jsx)(n.h2,{id:"add-an-input-set",children:"Add an Input Set"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"input set"}),", instead, is a group of input variables representing a scenario (i.e product id)."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["To add in input set, click the ",(0,i.jsxs)(n.em,{children:[(0,i.jsx)(n.strong,{children:"+"})," button"]})," in the ",(0,i.jsx)(n.strong,{children:"Input Set"})," section"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Then add a name for the set. Then click ",(0,i.jsx)(n.em,{children:"+ Add Param"})," and add the variable name and value."]}),"\n",(0,i.jsx)("img",{src:(0,s.A)("img/api-fortress/2017/07/inputSet.jpg"),alt:"inputSet.jpg"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The unit executes once for each input set you define. At each iteration, one input set enters the scope."}),"\n",(0,i.jsx)(n.admonition,{title:"important!",type:"note",children:(0,i.jsxs)(n.p,{children:["If you define a variable in both the Global Parameters section, and in the Input Set section, ",(0,i.jsx)(n.strong,{children:"the value used in the test will be the one defined in the Input Set"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"using-the-vault-and-scheduler",children:"Using the Vault and Scheduler"}),"\n",(0,i.jsxs)(n.p,{children:["You can also define the variables in the ",(0,i.jsx)(n.a,{href:"/api-testing/on-prem/quick-start/the-vault",children:(0,i.jsx)(n.strong,{children:"Vault"})})," and in the ",(0,i.jsx)(n.a,{href:"/api-testing/on-prem/quick-start/schedule-a-test",children:(0,i.jsx)(n.strong,{children:"Scheduler"})}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"priority-order",children:"Priority Order"}),"\n",(0,i.jsx)(n.p,{children:"The priority order is:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["if the same variable is defined in the ",(0,i.jsx)(n.em,{children:"Vault"})," and in the ",(0,i.jsx)(n.a,{href:"/api-testing/on-prem/quick-start/composer",children:(0,i.jsx)(n.em,{children:"composer"})}),", the one defined in the composer will be used.","\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"it also doesn't matter if it is a global parameter, or an input set"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["if the same variable is defined in the composer both as a ",(0,i.jsx)(n.em,{children:"global param"})," and an ",(0,i.jsx)(n.em,{children:"input set"}),", the value of the input set will be used"]}),"\n",(0,i.jsxs)(n.li,{children:["if the same variable is defined in the ",(0,i.jsx)(n.em,{children:"Vault"})," (or in the composer) and in the ",(0,i.jsx)(n.em,{children:"scheduler"}),", the variable defined in the scheduler will be used for the tests."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(96540);const a={},s=i.createContext(a);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);