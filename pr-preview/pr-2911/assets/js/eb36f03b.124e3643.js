"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[69472],{21839:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=t(74848),s=t(28453);t(11470),t(19365),t(86025);const a={id:"pam-ldap",title:"Configuring PAM-LDAP Authentication With Backtrace",sidebar_label:"PAM-LDAP Authentication",description:"Enterprise users can configure their on-premises Backtrace instances to authenticate to their LDAP server via PAM"},i=void 0,o={id:"error-reporting/advanced/pam-ldap",title:"Configuring PAM-LDAP Authentication With Backtrace",description:"Enterprise users can configure their on-premises Backtrace instances to authenticate to their LDAP server via PAM",source:"@site/docs/error-reporting/advanced/pam-ldap.md",sourceDirName:"error-reporting/advanced",slug:"/error-reporting/advanced/pam-ldap",permalink:"/sauce-docs/pr-preview/pr-2911/error-reporting/advanced/pam-ldap",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/advanced/pam-ldap.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724800332e3,frontMatter:{id:"pam-ldap",title:"Configuring PAM-LDAP Authentication With Backtrace",sidebar_label:"PAM-LDAP Authentication",description:"Enterprise users can configure their on-premises Backtrace instances to authenticate to their LDAP server via PAM"},sidebar:"backtrace",previous:{title:"Synchronous Submissions",permalink:"/sauce-docs/pr-preview/pr-2911/error-reporting/advanced/sync-submissions"},next:{title:"Client Tools for UNIX",permalink:"/sauce-docs/pr-preview/pr-2911/error-reporting/advanced/client-tools-unix"}},l={},c=[{value:"Creating an LDAP Pseudouser",id:"creating-an-ldap-pseudouser",level:2},{value:"Installing And Configuring PAM",id:"installing-and-configuring-pam",level:2},{value:"CentOS / RHEL",id:"centos--rhel",level:3},{value:"Ubuntu / Debian",id:"ubuntu--debian",level:3},{value:"Configuring PAM to Connect With Your Pseudouser",id:"configuring-pam-to-connect-with-your-pseudouser",level:3},{value:"Allowing Coronerd to Use PAM",id:"allowing-coronerd-to-use-pam",level:3},{value:"Allowlisting PAM Users",id:"allowlisting-pam-users",level:3},{value:"User Invitations",id:"user-invitations",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"/etc/nslcd.conf",id:"etcnslcdconf",level:3},{value:"/etc/nsswitch.conf",id:"etcnsswitchconf",level:3},{value:"/etc/pam.d/system-auth-ac",id:"etcpamdsystem-auth-ac",level:3}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"If you are using LDAP-based account management, you can configure your on-premises Backtrace instances to authenticate with your LDAP server using PAM."}),"\n",(0,r.jsx)(n.h2,{id:"creating-an-ldap-pseudouser",children:"Creating an LDAP Pseudouser"}),"\n",(0,r.jsx)(n.p,{children:"To bind coronerd to the LDAP service and perform directory searches, you need to create a pseudouser. Consult your LDAP administrator for assistance with this step."}),"\n",(0,r.jsx)(n.h2,{id:"installing-and-configuring-pam",children:"Installing And Configuring PAM"}),"\n",(0,r.jsx)(n.p,{children:"PAM is used by coronerd to integrate with your LDAP service."}),"\n",(0,r.jsx)(n.h3,{id:"centos--rhel",children:"CentOS / RHEL"}),"\n",(0,r.jsx)(n.p,{children:"Install the following packages:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"pam"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"pam_ldap"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"ubuntu--debian",children:"Ubuntu / Debian"}),"\n",(0,r.jsx)(n.p,{children:"Install the following packages:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"libpam0g"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"libpam-ldap"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"configuring-pam-to-connect-with-your-pseudouser",children:"Configuring PAM to Connect With Your Pseudouser"}),"\n",(0,r.jsxs)(n.p,{children:["Edit the ",(0,r.jsx)(n.code,{children:"/etc/pam_ldap.conf"})," file as shown below and replace the values of ",(0,r.jsx)(n.code,{children:"uid"})," and ",(0,r.jsx)(n.code,{children:"bindpw"})," with the credentials of your pseudouser."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"host ldap.mydomain.com\nbase dc=mydomain,dc=com\nbinddn uid=app_backtraceio,ou=pseudousers,dc=mydomain,dc=com\nbindpw Password1234!\nssl start_tls\n"})}),"\n",(0,r.jsx)(n.h3,{id:"allowing-coronerd-to-use-pam",children:"Allowing Coronerd to Use PAM"}),"\n",(0,r.jsxs)(n.p,{children:["Add the following contents to the ",(0,r.jsx)(n.code,{children:"/etc/pam.d/coronerd"})," file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"auth        include     system-auth\naccount     sufficient  pam_ldap.so\naccount     include     system-auth\npassword    sufficient  pam_ldap.so\npassword    include     system-auth\nsession     sufficient  pam_ldap.so\nsession     include     system-auth\n"})}),"\n",(0,r.jsx)(n.h3,{id:"allowlisting-pam-users",children:"Allowlisting PAM Users"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Go to ",(0,r.jsx)(n.strong,{children:"Configure Organization"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Select ",(0,r.jsx)(n.strong,{children:"Users"})," under ",(0,r.jsx)(n.strong,{children:"Universe Settings"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["In ",(0,r.jsx)(n.strong,{children:"Allowlisted Domains"}),", specify the domains from which users are allowed to sign up."]}),"\n",(0,r.jsxs)(n.li,{children:["Select ",(0,r.jsx)(n.strong,{children:"PAM"})," as the default authentication method."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For more information, refer to the ",(0,r.jsx)(n.a,{href:"/error-reporting/org-settings/user-mgmnt/",children:"User Management"})," documentation."]}),"\n",(0,r.jsx)(n.h3,{id:"user-invitations",children:"User Invitations"}),"\n",(0,r.jsx)(n.p,{children:"Users can now create an account using the invites page, with their password coming from LDAP. Ensure that SMTP is properly configured so that they can receive invitation emails."}),"\n",(0,r.jsxs)(n.p,{children:["For more information on SMTP configuration, see the ",(0,r.jsx)(n.a,{href:"/error-reporting/advanced/coroner/server-setup/",children:"Coronerd Setup"})," documentation."]}),"\n",(0,r.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,r.jsx)(n.p,{children:"If authentication fails (for example, bad password when attempting to log in to the UI), check the following PAM files to verify if the following lines are properly configured. This verification is necessary for CentOS 7."}),"\n",(0,r.jsx)(n.h3,{id:"etcnslcdconf",children:"/etc/nslcd.conf"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"uri ldap://ds.mydomain.com:389/base uid=mydomain,dc=com\nbinddn cn=app_backtraceio,ou=pseudousers,dc=mydomain,dc=com\nbindpw *******\n"})}),"\n",(0,r.jsx)(n.h3,{id:"etcnsswitchconf",children:"/etc/nsswitch.conf"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"passwd:     files ldap\nshadow:     files ldap\ngroup:      files ldap\n"})}),"\n",(0,r.jsx)(n.h3,{id:"etcpamdsystem-auth-ac",children:"/etc/pam.d/system-auth-ac"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"auth        sufficient    pam_ldap.so minimum_uid=1000 use_first_pass\naccount     required      pam_ldap.so minimum_uid=1000\npassword    sufficient    pam_ldap.so minimum_uid=1000 try_first_pass\nsession     required      pam_ldap.so minimum_uid=1000\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(18215);const s={tabItem:"tabItem_Ymn6"};var a=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>A});var r=t(96540),s=t(18215),a=t(23104),i=t(56347),o=t(205),l=t(57485),c=t(31682),u=t(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=h(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,d]=m({queryString:t,groupId:s}),[f,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,u.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),v=(()=>{const e=c??f;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,a]),tabValues:a}}var g=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),s=o[t].value;s!==r&&(c(n),i(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function w(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,b.jsx)(x,{...e,...n}),(0,b.jsx)(j,{...e,...n})]})}function A(e){const n=(0,g.A)();return(0,b.jsx)(w,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(96540);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);