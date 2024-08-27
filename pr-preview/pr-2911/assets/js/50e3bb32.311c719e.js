"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[83539],{46277:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>o});var s=i(74848),t=i(28453);i(86025);const l={id:"real-device-cleaning",title:"Real Device Cleaning Process",sidebar_label:"Real Device Cleaning Process"},r=void 0,a={id:"mobile-apps/real-device-cleaning",title:"Real Device Cleaning Process",description:"The cleaning process runs at the end of each test session for Sauce Labs Real Devices. It resets the device back to a default state, ready for the next test. The cleaning process also removes any private data which may have been part of the prior test. If we encounter any issue during the cleaning process, or we fail to clean the device, we put those devices aside for manual inspection to prevent data and security leaks.",source:"@site/docs/mobile-apps/real-device-cleaning.md",sourceDirName:"mobile-apps",slug:"/mobile-apps/real-device-cleaning",permalink:"/sauce-docs/pr-preview/pr-2911/mobile-apps/real-device-cleaning",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/mobile-apps/real-device-cleaning.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724800332e3,frontMatter:{id:"real-device-cleaning",title:"Real Device Cleaning Process",sidebar_label:"Real Device Cleaning Process"},sidebar:"docs",previous:{title:"Supported Mobile Devices",permalink:"/sauce-docs/pr-preview/pr-2911/mobile-apps/supported-devices"},next:{title:"MDM Support on iOS Real Devices",permalink:"/sauce-docs/pr-preview/pr-2911/mobile-apps/mdm-support"}},c={},o=[{value:"Goals of the Cleaning Process",id:"goals-of-the-cleaning-process",level:2},{value:"Public Devices",id:"public-devices",level:2},{value:"Cleaning Process Steps",id:"cleaning-process-steps",level:3},{value:"Private Devices",id:"private-devices",level:2}];function d(e){const n={a:"a",admonition:"admonition",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"The cleaning process runs at the end of each test session for Sauce Labs Real Devices. It resets the device back to a default state, ready for the next test. The cleaning process also removes any private data which may have been part of the prior test. If we encounter any issue during the cleaning process, or we fail to clean the device, we put those devices aside for manual inspection to prevent data and security leaks."}),"\n",(0,s.jsx)(n.p,{children:"The cleaning process differs slightly between the Public Devices, which are shared among all our customers, and the Private Devices, where the owner has more control over the configuration of their device. It also differs between Android and iOS, due to the different features of these operating systems."}),"\n",(0,s.jsx)(n.h2,{id:"goals-of-the-cleaning-process",children:"Goals of the Cleaning Process"}),"\n",(0,s.jsx)(n.p,{children:"Our goal is to provide you access to a device that will behave in a predictable, and reliable way, and is not affected in any way by prior test sessions."}),"\n",(0,s.jsx)(n.p,{children:"A clean device:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Has only those apps which are provided by Sauce Labs, or which you have specifically requested to be installed."}),"\n",(0,s.jsx)(n.li,{children:"Has the default system settings, which are typical for a newly configured device."}),"\n",(0,s.jsx)(n.li,{children:"Provides some convenient locale and system account defaults."}),"\n",(0,s.jsx)(n.li,{children:"Has an empty file system, containing no additional media or documents."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"public-devices",children:"Public Devices"}),"\n",(0,s.jsx)(n.p,{children:"Every 5th cleaning session includes a device reboot. This ensures that the system remains\nperformant and any stray processes are stopped."}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["Setting up VPNs on public devices is not supported. Please refer to our documentation for guidance on establishing a secure connection to your internal networks, firewalls, or endpoints. See ",(0,s.jsx)(n.a,{href:"/secure-connections/sauce-connect-5",children:"Sauce Connect"})," for more details."]})}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsx)(n.p,{children:"On Public devices, user access to device settings is limited to app-specific configurations only. like notifications, location services, permissions, app storage, and app details. For iOS Enterprise apps, users can trust the app via settings. Access is restricted to the test application and webapps through Safari or Chrome. These rules apply to both iOS and Android public devices."}),(0,s.jsx)(n.p,{children:"The list of restrictions on iOS:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Face ID/Touch ID & Passcodes."}),"\n",(0,s.jsx)(n.li,{children:"Developer mode"}),"\n",(0,s.jsx)(n.li,{children:"Language and region"}),"\n",(0,s.jsx)(n.li,{children:"Reset device"}),"\n",(0,s.jsx)(n.li,{children:"Find My Device"}),"\n",(0,s.jsx)(n.li,{children:"Standby mode"}),"\n",(0,s.jsx)(n.li,{children:"Create new Apple ID"}),"\n",(0,s.jsx)(n.li,{children:"Sounds and Haptics"}),"\n",(0,s.jsx)(n.li,{children:"Screen Time"}),"\n",(0,s.jsx)(n.li,{children:"Auto-lock settings"}),"\n",(0,s.jsx)(n.li,{children:"Zoom settings"}),"\n",(0,s.jsx)(n.li,{children:"Airplay & handoff"}),"\n"]}),(0,s.jsx)(n.p,{children:"Android restrictions:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Biometrics and Passcode/Pincode"}),"\n",(0,s.jsx)(n.li,{children:"Lock settings"}),"\n",(0,s.jsx)(n.li,{children:"Google Account settings"}),"\n",(0,s.jsx)(n.li,{children:"Developer mode"}),"\n",(0,s.jsx)(n.li,{children:"Network settings"}),"\n"]}),(0,s.jsx)(n.p,{children:"The following settings are allowed ONLY on Private devices, these are blocked on public devices:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Safari developer settings"}),"\n",(0,s.jsx)(n.li,{children:"Changing Text Size"}),"\n",(0,s.jsx)(n.li,{children:"Battery"}),"\n",(0,s.jsx)(n.li,{children:"VPN settings"}),"\n",(0,s.jsx)(n.li,{children:"Cellular"}),"\n",(0,s.jsx)(n.li,{children:"Analytics and Crash"}),"\n",(0,s.jsx)(n.li,{children:"Control Center"}),"\n",(0,s.jsx)(n.li,{children:"Apple Wallet"}),"\n",(0,s.jsx)(n.li,{children:"Safari and App Passwords"}),"\n",(0,s.jsx)(n.li,{children:"Mail settings"}),"\n",(0,s.jsx)(n.li,{children:"Apple ID Sign In"}),"\n",(0,s.jsx)(n.li,{children:"Proxy configuration"}),"\n",(0,s.jsx)(n.li,{children:"Network settings"}),"\n"]})]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"A factory reset is not performed between test sessions, as this requires manual intervention and would slow down the time required between test runs."})}),"\n",(0,s.jsx)(n.h3,{id:"cleaning-process-steps",children:"Cleaning Process Steps"}),"\n",(0,s.jsx)(n.p,{children:"We use a proprietary process that wipes every real device clean at the end of the testing session:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"All apps installed by the customer are removed. Only system applications, and those required for administration by Sauce Labs, remain on the device."}),"\n",(0,s.jsxs)(n.li,{children:["The browser history, cached website data, and cookies are deleted.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"On iOS, only Safari remains installed."}),"\n",(0,s.jsx)(n.li,{children:"On Android, only the default browser remains installed."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"AppleID\u2019s are removed between sessions."}),"\n",(0,s.jsx)(n.li,{children:"WiFi/network and DNS configuration settings are reset."}),"\n",(0,s.jsxs)(n.li,{children:["System locale, language, and time zone are reset to match those of the hosting Data Center.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"EU devices are reset to UK-English, in the CET (UTC+1) time zone."}),"\n",(0,s.jsx)(n.li,{children:"US devices are reset to US-English, in the PST (UTC-8) time zone."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Mock GPS location is reset to that of the hosting Data Center"}),"\n",(0,s.jsx)(n.li,{children:"US Devices: Lat 37.768, Lon -121.959, Alt 5m (San Francisco, US) and Lat 33.771 Lon -84.397, Alt 225m (Atlanta, US)"}),"\n",(0,s.jsx)(n.li,{children:"EU devices: Lat 52.500, Lon 13.447, Alt 40m (Berlin, DE)"}),"\n",(0,s.jsx)(n.li,{children:"Media files (Photos, Videos, Files) on the device are removed."}),"\n",(0,s.jsx)(n.li,{children:"PIN code/Password is removed."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"private-devices",children:"Private Devices"}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsx)(n.p,{children:"On Private Devices, access to some parts of the iOS settings is restricted:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Face ID/Touch ID & Passcodes."}),"\n",(0,s.jsx)(n.li,{children:"Developer mode"}),"\n",(0,s.jsx)(n.li,{children:"Language and region"}),"\n",(0,s.jsx)(n.li,{children:"Reset device"}),"\n",(0,s.jsx)(n.li,{children:"Find My Device"}),"\n",(0,s.jsx)(n.li,{children:"Standby mode"}),"\n",(0,s.jsx)(n.li,{children:"Create new Apple ID"}),"\n",(0,s.jsx)(n.li,{children:"Sounds and Haptics"}),"\n",(0,s.jsx)(n.li,{children:"Screen Time"}),"\n",(0,s.jsx)(n.li,{children:"Auto-lock settings"}),"\n",(0,s.jsx)(n.li,{children:"Zoom settings"}),"\n",(0,s.jsx)(n.li,{children:"Airplay & handoff"}),"\n"]}),(0,s.jsx)(n.p,{children:"On Android the following options are restricted:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Biometrics and Passcode/Pincode"}),"\n",(0,s.jsx)(n.li,{children:"Lock settings"}),"\n",(0,s.jsx)(n.li,{children:"Google Account settings"}),"\n",(0,s.jsx)(n.li,{children:"Developer mode"}),"\n",(0,s.jsx)(n.li,{children:"Network settings"}),"\n"]})]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["Setting up VPNs on private devices is not supported. Please consult our documentation on how to set up a secure connection to your internal networks, firewalls, or endpoints. For more details, visit ",(0,s.jsx)(n.a,{href:"/secure-connections/sauce-connect-5",children:"Sauce Connect"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["While both Private and Public Devices follow the same cleaning process, Private Devices can be configured to allow applications and accounts to persist between sessions. Please see ",(0,s.jsx)(n.a,{href:"/basics/acct-team-mgmt/private-device-mgmt",children:"Private Device Management"})," for details."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var s=i(96540);const t={},l=s.createContext(t);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);