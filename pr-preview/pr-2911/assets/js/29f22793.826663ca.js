"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[7617],{28849:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var t=a(74848),c=a(28453),s=(a(86025),a(11470)),r=a(19365);const l={id:"macos",title:"Install Sauce Connect on macOS",sidebar_label:"macOS"},i=void 0,o={id:"secure-connections/sauce-connect-5/installation/macos",title:"Install Sauce Connect on macOS",description:"With Homebrew",source:"@site/docs/secure-connections/sauce-connect-5/installation/macos.md",sourceDirName:"secure-connections/sauce-connect-5/installation",slug:"/secure-connections/sauce-connect-5/installation/macos",permalink:"/sauce-docs/pr-preview/pr-2911/secure-connections/sauce-connect-5/installation/macos",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/secure-connections/sauce-connect-5/installation/macos.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724800332e3,frontMatter:{id:"macos",title:"Install Sauce Connect on macOS",sidebar_label:"macOS"},sidebar:"docs",previous:{title:"Linux",permalink:"/sauce-docs/pr-preview/pr-2911/secure-connections/sauce-connect-5/installation/linux"},next:{title:"Windows",permalink:"/sauce-docs/pr-preview/pr-2911/secure-connections/sauce-connect-5/installation/windows"}},u={},d=[{value:"With Homebrew",id:"with-homebrew",level:2},{value:"Install",id:"install",level:3},{value:"Edit config file",id:"edit-config-file",level:3},{value:"Start Sauce Connect",id:"start-sauce-connect",level:3},{value:"With zip package",id:"with-zip-package",level:2},{value:"Unpack the zip file",id:"unpack-the-zip-file",level:3},{value:"Check the signature",id:"check-the-signature",level:3},{value:"Link the binary",id:"link-the-binary",level:3},{value:"Add completion",id:"add-completion",level:3},{value:"Edit config file",id:"edit-config-file-1",level:3},{value:"Start Sauce Connect",id:"start-sauce-connect-1",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"with-homebrew",children:"With Homebrew"}),"\n",(0,t.jsxs)(n.p,{children:["On macOS you can install Sauce Connect with ",(0,t.jsx)(n.a,{href:"https://brew.sh",children:"Homebrew"})]}),"\n",(0,t.jsx)(n.h3,{id:"install",children:"Install"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"brew tap saucelabs/tap\nbrew install sauce-connect\n"})}),"\n",(0,t.jsx)(n.h3,{id:"edit-config-file",children:"Edit config file"}),"\n",(0,t.jsxs)(n.p,{children:["This step is optional. You can use default configuration or configure Sauce Connect with flags or environment variables.\nSee ",(0,t.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/",children:"CLI reference"})," for more details."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"vim sauce-connect.yaml\n"})}),"\n",(0,t.jsx)(n.h3,{id:"start-sauce-connect",children:"Start Sauce Connect"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sc run --config-file sauce-connect.yaml\n"})}),"\n",(0,t.jsx)(n.h2,{id:"with-zip-package",children:"With zip package"}),"\n",(0,t.jsxs)(n.p,{children:["Sauce Connect provides ",(0,t.jsx)(n.code,{children:".zip"})," package with a signed binary that can be used on any macOS version."]}),"\n",(0,t.jsx)(n.h3,{id:"unpack-the-zip-file",children:"Unpack the zip file"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -L -o sauce-connect.zip https://saucelabs.com/downloads/sauce-connect/5.1.3/sauce-connect-5.1.3_darwin.all.zip\nsudo mkdir -p /opt/sauce-connect\nsudo unzip -d /opt/sauce-connect sauce-connect.zip\n"})}),"\n",(0,t.jsx)(n.h3,{id:"check-the-signature",children:"Check the signature"}),"\n",(0,t.jsxs)(n.p,{children:["Run the following command, you should see ",(0,t.jsx)(n.code,{children:"Developer ID Application: SAUCE LABS INC"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"codesign -dvv /opt/sauce-connect/sc\n"})}),"\n",(0,t.jsx)(n.h3,{id:"link-the-binary",children:"Link the binary"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo ln -s /opt/sauce-connect/sc /usr/local/bin/sc\n"})}),"\n",(0,t.jsx)(n.h3,{id:"add-completion",children:"Add completion"}),"\n",(0,t.jsxs)(s.A,{defaultValue:"Zsh",values:[{label:"Zsh",value:"Zsh"},{label:"Bash",value:"Bash"}],children:[(0,t.jsx)(r.A,{value:"Zsh",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"echo 'source <(sc completion zsh)' >>~/.zshrc\n"})})}),(0,t.jsx)(r.A,{value:"Bash",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"echo 'source <(sc completion bash)' >>~/.bash_profile\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"edit-config-file-1",children:"Edit config file"}),"\n",(0,t.jsxs)(n.p,{children:["This step is optional. You can use default configuration or configure Sauce Connect with flags or environment variables.\nSee ",(0,t.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/",children:"CLI reference"})," for more details."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"vim /opt/sauce-connect/sauce-connect.yaml\n"})}),"\n",(0,t.jsx)(n.h3,{id:"start-sauce-connect-1",children:"Start Sauce Connect"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sc run --config-file /opt/sauce-connect/sauce-connect.yaml\n"})})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19365:(e,n,a)=>{a.d(n,{A:()=>r});a(96540);var t=a(18215);const c={tabItem:"tabItem_Ymn6"};var s=a(74848);function r(e){let{children:n,hidden:a,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(c.tabItem,r),hidden:a,children:n})}},11470:(e,n,a)=>{a.d(n,{A:()=>y});var t=a(96540),c=a(18215),s=a(23104),r=a(56347),l=a(205),i=a(57485),o=a(31682),u=a(89466);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:c}}=e;return{value:n,label:a,attributes:t,default:c}}))}(a);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function p(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:a}=e;const c=(0,r.W6)(),s=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,i.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(c.location.search);n.set(s,e),c.replace({...c.location,search:n.toString()})}),[s,c])]}function f(e){const{defaultValue:n,queryString:a=!1,groupId:c}=e,s=h(e),[r,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[o,d]=m({queryString:a,groupId:c}),[f,b]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[c,s]=(0,u.Dv)(a);return[c,(0,t.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:c}),v=(()=>{const e=o??f;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{v&&i(v)}),[v]);return{selectedValue:r,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=a(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(74848);function x(e){let{className:n,block:a,selectedValue:t,selectValue:r,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),u=e=>{const n=e.currentTarget,a=i.indexOf(n),c=l[a].value;c!==t&&(o(n),r(c))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;n=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;n=i[a]??i[i.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.A)("tabs",{"tabs--block":a},n),children:l.map((e=>{let{value:n,label:a,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...s,className:(0,c.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function j(e){let{lazy:n,children:a,selectedValue:c}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===c));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==c})))})}function w(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,c.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...e,...n}),(0,g.jsx)(j,{...e,...n})]})}function y(e){const n=(0,b.A)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(n))}},28453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>l});var t=a(96540);const c={},s=t.createContext(c);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);