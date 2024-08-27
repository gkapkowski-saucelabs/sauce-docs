"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[20382],{81897:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var n=t(74848),o=t(28453);const r={id:"bypass-screenshot",title:"Bypass Screenshot Restriction",sidebar_label:"Bypass Screenshot Restriction",hide_table_of_contents:!0},i=void 0,a={id:"mobile-apps/features/bypass-screenshot",title:"Bypass Screenshot Restriction",description:"If you test Android mobile apps on Sauce Labs real devices and you see a black screen in your live testing session, you might need to enable Bypass Screenshot Restriction.",source:"@site/docs/mobile-apps/features/bypass-screenshot.md",sourceDirName:"mobile-apps/features",slug:"/mobile-apps/features/bypass-screenshot",permalink:"/sauce-docs/pr-preview/pr-2911/mobile-apps/features/bypass-screenshot",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/mobile-apps/features/bypass-screenshot.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724800332e3,frontMatter:{id:"bypass-screenshot",title:"Bypass Screenshot Restriction",sidebar_label:"Bypass Screenshot Restriction",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Audio Capture",permalink:"/sauce-docs/pr-preview/pr-2911/mobile-apps/features/audio-capture"},next:{title:"Gestures",permalink:"/sauce-docs/pr-preview/pr-2911/mobile-apps/features/gestures"}},l={},c=[{value:"About FLAG_SECURE",id:"about-flag_secure",level:2},{value:"Workarounds for FLAG_SECURE Apps",id:"workarounds-for-flag_secure-apps",level:2},{value:"Enable Bypass Screenshot Restriction",id:"enable-bypass-screenshot-restriction",level:2},{value:"What You\u2019ll Need",id:"what-youll-need",level:3},{value:"Editing the App",id:"editing-the-app",level:3}];function d(e){const s={a:"a",admonition:"admonition",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["If you test Android mobile apps on Sauce Labs real devices and you see a black screen in your live testing session, you might need to enable ",(0,n.jsx)(s.strong,{children:"Bypass Screenshot Restriction"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["This black screen is caused by a setting called ",(0,n.jsx)(s.strong,{children:"FLAG_SECURE"})," that is sometimes added to Android apps. This prevents video or screenshots from being taken of the app."]}),"\n",(0,n.jsxs)(s.p,{children:["Under the right conditions, when a user enables ",(0,n.jsx)(s.strong,{children:"Bypass Screenshot Restriction"}),", this allows Sauce Labs to work around the ",(0,n.jsx)(s.strong,{children:"FLAG_SECURE"})," setting so that the app can be tested. However, your ability to work around this setting is limited as described in ",(0,n.jsx)(s.a,{href:"#workarounds-for-flag_secure-apps",children:"Workarounds for FLAG_SECURE Apps"}),"."]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsx)(s.p,{children:"Legacy app storage in Sauce Labs does not support this setting."})}),"\n",(0,n.jsx)(s.p,{children:"The results of this setting vary based on the type of testing you\u2019re doing:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Live - If you attempt to run a live test on a real device, you will not be able to interact with any screens that have this setting."}),"\n",(0,n.jsx)(s.li,{children:"Automated - You can run automated tests on real devices, but you will not be able to see video associated with those tests."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"about-flag_secure",children:"About FLAG_SECURE"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.strong,{children:"FLAG_SECURE"})," flag is intended to let app developers designate sensitive screens in applications as secure. This means the designated windows can\u2019t appear in screenshots, streaming video, or other displays deemed insecure. The actual effects of this flag depend on the Android mobile OS version:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Android 7.0 and 8.0 - Video works, but you can\u2019t take a screenshot"}),"\n",(0,n.jsx)(s.li,{children:"Android 9+ - You can\u2019t see video or screenshots"}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["For more information, see ",(0,n.jsx)(s.a,{href:"https://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_SECURE",children:"FLAG_SECURE"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"workarounds-for-flag_secure-apps",children:"Workarounds for FLAG_SECURE Apps"}),"\n",(0,n.jsx)(s.p,{children:"Your ability to work around this setting to test will depend on a few factors:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Who owns the app:","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["If your developers have created this app, they should be able to provide you with a version that does not have the ",(0,n.jsx)(s.strong,{children:"FLAG_SECURE"})," flag enabled."]}),"\n",(0,n.jsx)(s.li,{children:"If your company has built this app on top of another company\u2019s technology, your ability to request a version of the app without this flag is limited."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["Whether ",(0,n.jsx)(s.strong,{children:"Bypass Screenshot Restriction"})," is an option:","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["If your developers have created this app and they can\u2019t provide you with an app that doesn\u2019t use ",(0,n.jsx)(s.strong,{children:"FLAG_SECURE"}),", the ",(0,n.jsx)(s.strong,{children:"Bypass Screenshot Restriction"})," is an option."]}),"\n",(0,n.jsxs)(s.li,{children:["If you\u2019re testing a scenario that includes interacting with an app owned by another company, ",(0,n.jsx)(s.strong,{children:"Bypass Screenshot Restriction"})," won\u2019t work. For example, if you need to use Google Pay to purchase something on your app, you won\u2019t see the video for that part of the purchase process."]}),"\n",(0,n.jsxs)(s.li,{children:["If your app is built on another company\u2019s technology, ",(0,n.jsx)(s.strong,{children:"Bypass Screenshot Restriction"})," won\u2019t work."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsxs)(s.p,{children:["In cases where you\u2019re using a third party app, you might be able to test your data directly on that app using ",(0,n.jsx)(s.a,{href:"/web-apps/live-testing/live-cross-browser-testing/",children:"live testing on a web browser"}),"."]})}),"\n",(0,n.jsx)(s.h2,{id:"enable-bypass-screenshot-restriction",children:"Enable Bypass Screenshot Restriction"}),"\n",(0,n.jsxs)(s.p,{children:["If you are testing your company\u2019s proprietary app on a real device, you might be able to work around the ",(0,n.jsx)(s.strong,{children:"FLAG_SECURE"})," setting by enabling ",(0,n.jsx)(s.strong,{children:"Bypass Screenshot Restriction"})," on that app under certain circumstances (see ",(0,n.jsx)(s.a,{href:"#workarounds-for-flag_secure-apps",children:"Workarounds for FLAG_SECURE Apps"}),")."]}),"\n",(0,n.jsx)(s.h3,{id:"what-youll-need",children:"What You\u2019ll Need"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["An app added to Sauce Labs app storage (see ",(0,n.jsx)(s.a,{href:"/mobile-apps/app-storage",children:"Mobile App Storage"})," for more information)"]}),"\n",(0,n.jsxs)(s.li,{children:["An understanding of the limitations of this option (see ",(0,n.jsx)(s.a,{href:"#workarounds-for-flag_secure-apps",children:"Workarounds for FLAG_SECURE Apps"}),")"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"editing-the-app",children:"Editing the App"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Go to ",(0,n.jsx)(s.strong,{children:"Live > Mobile App"}),"."]}),"\n",(0,n.jsx)(s.li,{children:"Hover over the app you want to test."}),"\n",(0,n.jsxs)(s.li,{children:["Click ",(0,n.jsx)(s.strong,{children:"Settings"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Under ",(0,n.jsx)(s.strong,{children:"Default Settings > Instrumentation"})," on the right, find ",(0,n.jsx)(s.strong,{children:"Bypass Screenshot Restriction"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Click the slider to ",(0,n.jsx)(s.strong,{children:"Enabled"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Click ",(0,n.jsx)(s.strong,{children:"Back to App Selection"})," at the top to test your app."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>a});var n=t(96540);const o={},r=n.createContext(o);function i(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);