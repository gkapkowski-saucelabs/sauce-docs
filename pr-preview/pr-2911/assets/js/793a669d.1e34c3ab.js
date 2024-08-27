"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[86724],{81052:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var a=t(74848),s=t(28453),r=t(86025);const i={id:"baseline-branch",title:"Baseline Branching and Merging",sidebar_label:"Baseline Branching and Merging"},o=void 0,c={id:"visual/component-testing/workflow/baseline-branch",title:"Baseline Branching and Merging",description:"In this section, you'll learn how to pull baseline when branching and auto-accept when merging.",source:"@site/docs/visual/component-testing/workflow/baseline-branch.md",sourceDirName:"visual/component-testing/workflow",slug:"/visual/component-testing/workflow/baseline-branch",permalink:"/sauce-docs/pr-preview/pr-2911/visual/component-testing/workflow/baseline-branch",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/visual/component-testing/workflow/baseline-branch.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724800332e3,frontMatter:{id:"baseline-branch",title:"Baseline Branching and Merging",sidebar_label:"Baseline Branching and Merging"}},l={},h=[];function u(e){const n={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"In this section, you'll learn how to pull baseline when branching and auto-accept when merging."}),"\n",(0,a.jsx)("img",{src:(0,r.A)("img/visual/component-branching-merging.png"),alt:"Component Branching and Auto-Merging"}),"\n",(0,a.jsx)(n.p,{children:"When working with features branches, Screener can save you time and optimize your workflow by automating the following:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Automatically Accept updates when merging to or from the base branch"}),": When merging an accepted base branch into a feature branch, Screener auto-accepts UI states that match the latest base branch test. And when merging into the base branch, Screener auto-accepts UI states that match the latest accepted feature branch test."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Automatically pull initial baseline from the base branch"}),": This is useful for having a set of UI states to initially compare a new branch against. For example, if you create a new feature branch based off of the main branch, and you have a set of UI states on the main branch, you can then compare the new branch's visual changes to the main branch's UI states."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"What this means:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Accept Once"}),": no need to accept again when merging accepted updates from your base branch into a feature branch."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Faster Workflow"}),": no need to re-review UI states or re-run builds to pass again."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Follow these setup steps to enable in your project:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/visual/component-testing/integrations/continuous-integration",children:"Integrate Screener into your CI process"})," so that visual tests are automatically run when branching or merging."]}),"\n",(0,a.jsxs)(n.li,{children:["Set the ",(0,a.jsx)(n.code,{children:"baseBranch"})," option in your ",(0,a.jsx)(n.code,{children:"screener.config.js"})," file to the name of your base branch:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"// screener.config.js\nmodule.exports = {\n  ...\n\n  baseBranch: 'main'\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var a=t(96540);const s={},r=a.createContext(s);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);