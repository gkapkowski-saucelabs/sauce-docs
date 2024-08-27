"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[94251],{99516:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=r(74848),n=r(28453),s=r(86025);r(11470),r(19365);const l={id:"gitlab",title:"Gitlab",sidebar_label:"Gitlab"},o=void 0,i={id:"testfairy/ci-tools/gitlab",title:"Gitlab",description:"To automatically deply your Android or iOS Apps to TestFairy by using GitLab, follow the steps below:",source:"@site/docs/testfairy/ci-tools/gitlab.md",sourceDirName:"testfairy/ci-tools",slug:"/testfairy/ci-tools/gitlab",permalink:"/sauce-docs/pr-preview/pr-2911/testfairy/ci-tools/gitlab",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/ci-tools/gitlab.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724800332e3,frontMatter:{id:"gitlab",title:"Gitlab",sidebar_label:"Gitlab"},sidebar:"docs",previous:{title:"Fastlane",permalink:"/sauce-docs/pr-preview/pr-2911/testfairy/ci-tools/fastlane"},next:{title:"MS App Center",permalink:"/sauce-docs/pr-preview/pr-2911/testfairy/ci-tools/ms-app-ctr"}},c={},u=[];function d(e){const t={a:"a",admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["To automatically deply your Android or iOS Apps to ",(0,a.jsx)(t.a,{href:"https://www.testfairy.com/",children:"TestFairy"})," by using GitLab, follow the steps below:"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["On the TestFairy dashboard, navigate to ",(0,a.jsx)(t.strong,{children:"Preferences"})," > ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.a,{href:"https://app.testfairy.com/settings/api-key",children:"Upload API Key"})}),"."]}),"\n",(0,a.jsx)("img",{src:(0,s.A)("/img/testfairy/ci-tools/testfairy_upload_key.png"),alt:"testfairy upload key"}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Copy your API key and go to your application's project ",(0,a.jsx)(t.strong,{children:"Settings"})," > ",(0,a.jsx)(t.strong,{children:"CI/CD"})," > ",(0,a.jsx)(t.strong,{children:"Variables"})," in GitLab."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Add a variable called ",(0,a.jsx)(t.code,{children:"TESTFAIRY_API_KEY"})," to the list with the value of your ",(0,a.jsx)(t.strong,{children:"Upload API key"}),"."]}),"\n",(0,a.jsx)("img",{src:(0,s.A)("/img/testfairy/ci-tools/gitlab_secret_keys.png"),alt:"gitlab secret keys"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["To deploy, add a job to your ",(0,a.jsx)(t.code,{children:".gitlab-ci.yml"})," configuration using ",(0,a.jsx)(t.a,{href:"https://docs.fastlane.tools/getting-started/ios/beta-deployment/",children:"fastlane"})," or ",(0,a.jsx)(t.code,{children:"curl"})," (example below)."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:'stages:\n- deploy\n\ndeploy:\nstage: deploy\nonly:\n- master\nscript:\n- |\n      curl \\\n      -A "GitLab CI" \\\n      -F api_key="${TESTFAIRY_API_KEY}" \\\n      -F comment="GitLab Pipeline build ${CI_COMMIT_SHA}" \\\n      -F file=@android.apk \\\n      https://upload.testfairy.com/api/upload/\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["Replace the ",(0,a.jsx)(t.code,{children:"-F file=@android.apk"})," argument with a path to your APK or IPA."]})}),"\n",(0,a.jsx)(t.p,{children:"For a complete list of available options, visit the Upload API reference guide /testfairy/api-reference/upload-api."})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var a=r(18215);const n={tabItem:"tabItem_Ymn6"};var s=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,l),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>w});var a=r(96540),n=r(18215),s=r(23104),l=r(56347),o=r(205),i=r(57485),c=r(31682),u=r(89466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=p(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[c,d]=f({queryString:r,groupId:n}),[b,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,u.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),y=(()=>{const e=c??b;return h({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{y&&i(y)}),[y]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=r(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(74848);function v(e){let{className:t,block:r,selectedValue:a,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const t=e.currentTarget,r=i.indexOf(t),n=o[r].value;n!==a&&(c(t),l(n))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>i.push(e),onKeyDown:d,onClick:u,...s,className:(0,n.A)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function x(e){let{lazy:t,children:r,selectedValue:n}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function j(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,n.A)("tabs-container",y.tabList),children:[(0,g.jsx)(v,{...e,...t}),(0,g.jsx)(x,{...e,...t})]})}function w(e){const t=(0,m.A)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>o});var a=r(96540);const n={},s=a.createContext(n);function l(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);