"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[70265],{73737:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=t(74848),o=t(28453),s=t(86025);const r={id:"import-postman-collection",title:"Importing Postman Collections, Variables, and Environments",sidebar_label:"Importing from Postman",description:"Automatically generate tests from an existing Postman Collection."},l=void 0,a={id:"api-testing/import-postman-collection",title:"Importing Postman Collections, Variables, and Environments",description:"Automatically generate tests from an existing Postman Collection.",source:"@site/docs/api-testing/import-postman-collection.md",sourceDirName:"api-testing",slug:"/api-testing/import-postman-collection",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/import-postman-collection",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/import-postman-collection.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724800332e3,frontMatter:{id:"import-postman-collection",title:"Importing Postman Collections, Variables, and Environments",sidebar_label:"Importing from Postman",description:"Automatically generate tests from an existing Postman Collection."},sidebar:"docs",previous:{title:"Build Test from Spec File",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/build-from-spec"},next:{title:"Importing HAR files",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/import-har-files"}},c={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Importing Postman Collections",id:"importing-postman-collections",level:2},{value:"Importing Postman Environments",id:"importing-postman-environments",level:2},{value:"Importing in Company/Project Vault",id:"importing-in-companyproject-vault",level:3},{value:"Importing in Environments",id:"importing-in-environments",level:3},{value:"More Information",id:"more-information",level:2}];function p(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...n.components},{Details:t}=e;return t||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:["If you have a ",(0,i.jsx)(e.a,{href:"https://www.postman.com/collection/",children:"Postman API Collection"}),", you can import it directly into API Testing on Sauce Labs and use it to generate tests."]}),"\n",(0,i.jsx)(e.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["A Sauce Labs account (",(0,i.jsx)(e.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,i.jsx)(e.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,i.jsxs)(e.li,{children:["An existing API Testing Project. For details on how to create one, see ",(0,i.jsx)(e.a,{href:"/api-testing/quickstart/",children:"API Testing Quickstart"}),"."]}),"\n",(0,i.jsx)(e.li,{children:"A Postman Collection (v2.0 or higher)."}),"\n"]}),"\n",(0,i.jsx)(e.admonition,{type:"note",children:(0,i.jsxs)(e.p,{children:["Looking to import from a spec file? See ",(0,i.jsx)(e.a,{href:"/api-testing/build-from-spec/",children:"Building a Test from a Spec File"}),"."]})}),"\n",(0,i.jsx)(e.h2,{id:"importing-postman-collections",children:"Importing Postman Collections"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["Log in to Sauce Labs, then click ",(0,i.jsx)(e.strong,{children:"API Testing"}),"."]}),"\n",(0,i.jsx)(e.li,{children:"Click to open one of your Projects."}),"\n",(0,i.jsxs)(e.li,{children:["Click the ",(0,i.jsx)(e.strong,{children:"HTTP Client"})," tab.",(0,i.jsx)("br",{}),(0,i.jsx)("img",{src:(0,s.A)("img/api-testing/HTTPClient_new_brand.png"),alt:"HTTP Client",width:"300"})]}),"\n",(0,i.jsxs)(e.li,{children:["Click ",(0,i.jsx)(e.strong,{children:"Import OpenAPI/Postman"}),", then ",(0,i.jsx)(e.strong,{children:"Import OpenAPI/Postman Collection/.har"})," and then, select and upload your Postman Collection file from your local machine.",(0,i.jsx)("br",{}),(0,i.jsx)("img",{src:(0,s.A)("img/api-testing/importSpecRebrand.png"),alt:"Import OpenAPI / Postman button",width:"400"})]}),"\n"]}),"\n",(0,i.jsxs)(e.admonition,{type:"tip",children:[(0,i.jsx)(e.p,{children:"If you don't have a file available, try out the sample below."}),(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Click here to open a sample Postman Collection file"}),"Copy the text below, paste the text into a text editor, then save that as a .json file.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",metastring:'title="demo_postman_collection.json"',children:'{\n  "info": {\n    "_postman_id": "901ae894-37d4-45c1-b1bc-bd6b31762bfe",\n    "name": "demoapif",\n    "description": "Call to the APIF demo API All Products Get.",\n    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"\n  },\n  "item": [\n    {\n      "name": "product",\n      "item": [\n        {\n          "name": "List All Products",\n          "request": {\n            "auth": {\n              "type": "oauth2",\n              "oauth2": [\n                {\n                  "key": "addTokenTo",\n                  "value": "header",\n                  "type": "string"\n                }\n              ]\n            },\n            "method": "GET",\n            "header": [\n              {\n                "key": "Accept",\n                "value": "application/json"\n              },\n              {\n                "key": "key",\n                "value": "ABC123",\n                "type": "text"\n              }\n            ],\n            "url": {\n              "raw": "http://demoapi.apifortress.com/api/retail/product",\n              "protocol": "http",\n              "host": [\n                "demoapi",\n                "apifortress",\n                "com"\n              ],\n              "path": [\n                "api",\n                "retail",\n                "product"\n              ]\n            }\n          },\n          "response": []\n        }\n      ],\n      "description": "Folder for product"\n    }\n  ]\n}\n'})})]})]}),"\n",(0,i.jsxs)(e.ol,{start:"5",children:["\n",(0,i.jsxs)(e.li,{children:["Click the folder in your ",(0,i.jsx)(e.strong,{children:"Snapshots"})," tree where you'd like to save your file.",(0,i.jsx)("br",{}),(0,i.jsx)("img",{src:(0,s.A)("img/api-testing/importFolderRebrand.png"),alt:"Routes Rendered",width:"350"})]}),"\n",(0,i.jsxs)(e.li,{children:["Click ",(0,i.jsx)(e.strong,{children:"Save"}),".",(0,i.jsx)("br",{}),(0,i.jsx)("img",{src:(0,s.A)("img/api-testing/importFolder2Rebrand.png"),alt:"Import file to Project",width:"350"})]}),"\n",(0,i.jsxs)(e.li,{children:["The routes from your collection will now show in the list of saved requests.",(0,i.jsx)("br",{}),(0,i.jsx)("img",{src:(0,s.A)("img/api-testing/routesRendered.png"),alt:"Import file to Project",width:"400"})]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"importing-postman-environments",children:"Importing Postman Environments"}),"\n",(0,i.jsx)(e.p,{children:"Postman Environments can be imported in both (Company/Project) Vault and Environments. Let's see how to do this in both cases:"}),"\n",(0,i.jsx)(e.h3,{id:"importing-in-companyproject-vault",children:"Importing in Company/Project Vault"}),"\n",(0,i.jsxs)(e.p,{children:["If you want to import in the ",(0,i.jsx)(e.strong,{children:"Company Vault"}),":"]}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["Log in to Sauce Labs, then click ",(0,i.jsx)(e.strong,{children:"API Testing"}),"."]}),"\n",(0,i.jsxs)(e.li,{children:["Click the ",(0,i.jsx)(e.strong,{children:"Company Vault"})," tab.",(0,i.jsx)("br",{}),(0,i.jsx)("img",{src:(0,s.A)("img/api-testing/companyVault.png"),alt:"Company Vault",width:"400"})]}),"\n",(0,i.jsxs)(e.li,{children:["Click ",(0,i.jsx)(e.strong,{children:"Import"})," from the Variables section."]}),"\n",(0,i.jsxs)(e.li,{children:["Select and upload your ",(0,i.jsx)(e.code,{children:".postman_environment.json"})," file."]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"Your environmental variables will now be available across all your Projects."}),"\n",(0,i.jsxs)(e.p,{children:["If you want to import in the ",(0,i.jsx)(e.strong,{children:"Project Vault"}),":"]}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["Log in to Sauce Labs, then click ",(0,i.jsx)(e.strong,{children:"API Testing"}),"."]}),"\n",(0,i.jsx)(e.li,{children:"Click to open one of your Projects."}),"\n",(0,i.jsxs)(e.li,{children:["Click the ",(0,i.jsx)(e.strong,{children:"Vault"})," tab.",(0,i.jsx)("br",{}),(0,i.jsx)("img",{src:(0,s.A)("img/api-testing/projectVault.png"),alt:"Project Vault",width:"300"})]}),"\n",(0,i.jsxs)(e.li,{children:["Click ",(0,i.jsx)(e.strong,{children:"Import"})," from the Variables section."]}),"\n",(0,i.jsxs)(e.li,{children:["Select and upload your ",(0,i.jsx)(e.code,{children:".postman_environment.json"})," file."]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"Your environmental variables will now be available in your Project."}),"\n",(0,i.jsx)(e.h3,{id:"importing-in-environments",children:"Importing in Environments"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["Log in to Sauce Labs, then click ",(0,i.jsx)(e.strong,{children:"API Testing"}),"."]}),"\n",(0,i.jsx)(e.li,{children:"Click to open one of your Projects."}),"\n",(0,i.jsxs)(e.li,{children:["Click the ",(0,i.jsx)(e.strong,{children:"Environments"})," tab.",(0,i.jsx)("br",{}),(0,i.jsx)("img",{src:(0,s.A)("img/api-testing/importEnvironments.png"),alt:"Environments",width:"300"})]}),"\n",(0,i.jsxs)(e.li,{children:["Click ",(0,i.jsx)(e.strong,{children:"Import"}),"."]}),"\n",(0,i.jsxs)(e.li,{children:["Select and upload your ",(0,i.jsx)(e.code,{children:".postman_environment.json"})," file."]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"Your environmental variables will now be available as an Environment in your Project."}),"\n",(0,i.jsx)(e.h2,{id:"more-information",children:"More Information"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"/api-testing/build-from-spec",children:"Build a Sauce Labs API Test from a Spec File"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"/api-testing/import-har-files/",children:"Build a Sauce Labs API Test from a HAR File"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://learning.postman.com/docs/getting-started/importing-and-exporting-data/#exporting-postman-data",children:"Importing and Exporting Data from Postman"})}),"\n"]})]})}function m(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(p,{...n})}):p(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>l});var i=t(96540);const o={},s=i.createContext(o);function r(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);