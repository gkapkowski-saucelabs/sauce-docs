"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[52105],{93505:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var c=s(74848),t=s(28453);const r={id:"secure-connections",title:"Sauce Trusted Connection",sidebar_label:"Getting Started"},o=void 0,i={id:"secure-connections",title:"Sauce Trusted Connection",description:"If your company has firewall rules that limit your ability to run tests on Sauce Labs, you can use our Secure Connection features to connect to Sauce Labs in the cloud without exposing your company's IT infrastructure to security risks.",source:"@site/docs/secure-connections.md",sourceDirName:".",slug:"/secure-connections",permalink:"/sauce-docs/pr-preview/pr-2911/secure-connections",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/secure-connections.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724800332e3,frontMatter:{id:"secure-connections",title:"Sauce Trusted Connection",sidebar_label:"Getting Started"},sidebar:"docs",previous:{title:"Webhooks",permalink:"/sauce-docs/pr-preview/pr-2911/basics/integrations/webhooks"},next:{title:"Overview",permalink:"/sauce-docs/pr-preview/pr-2911/secure-connections/sauce-connect-5"}},a={},u=[{value:"Sauce Connect Proxy",id:"sauce-connect-proxy",level:2},{value:"Sauce IPSec Proxy",id:"sauce-ipsec-proxy",level:2},{value:"Choosing the Right Solution",id:"choosing-the-right-solution",level:2}];function l(e){const n={a:"a",h2:"h2",p:"p",...(0,t.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:"If your company has firewall rules that limit your ability to run tests on Sauce Labs, you can use our Secure Connection features to connect to Sauce Labs in the cloud without exposing your company's IT infrastructure to security risks."}),"\n",(0,c.jsx)(n.p,{children:"We offer two options to provide an extra layer of security to protect test data in flight between the Sauce Labs cloud and your app or site under test on your network. Both of these solutions, Sauce Connect Proxy and Sauce IPSec Proxy, support secure connectivity using TLS 1.2 or above."}),"\n",(0,c.jsxs)(n.p,{children:["To determine which solution is best for you, see ",(0,c.jsx)(n.a,{href:"https://saucelabs.com/resources/white-papers/overview-of-sauce-labs-security-processes",children:"Overview of Sauce Labs Security Processes"}),"."]}),"\n",(0,c.jsx)(n.h2,{id:"sauce-connect-proxy",children:"Sauce Connect Proxy"}),"\n",(0,c.jsxs)(n.p,{children:["See our ",(0,c.jsx)(n.a,{href:"https://saucelabs.com/resources/white-papers/sauce-connect-proxy-security-overview",children:"Sauce Connect Proxy Security Overview"})," white paper for information about optimizing your network and development environment for Sauce Connect Proxy performance."]}),"\n",(0,c.jsxs)("div",{className:"box-wrapper",markdown:"1",children:[(0,c.jsx)("div",{className:"box box1 card",children:(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)("h3",{children:(0,c.jsx)("a",{href:"/secure-connections/sauce-connect-5",children:"Sauce Connect Proxy Overview"})}),(0,c.jsx)("p",{children:"Learn about Sauce Connect Proxy and why we recommend it over allowlisting individual IP addresses."})]})}),(0,c.jsx)("div",{className:"box box2 card",children:(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)("h3",{children:(0,c.jsx)("a",{href:"/secure-connections/sauce-connect-5/quickstart/",children:"Quickstart"})}),(0,c.jsx)("p",{children:"Get up and running with Sauce Connect Proxy in minutes."})]})}),(0,c.jsx)("div",{className:"box box3 card",children:(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)("h3",{children:(0,c.jsx)("a",{href:"/secure-connections/sauce-connect-5/operation/overview",children:"Setup and Configuration"})}),(0,c.jsx)("p",{children:"Learn how to launch a basic Sauce Connect Proxy tunnel configuration. Once you\u2019re connected, use our code samples to run your first test."})]})}),(0,c.jsx)("div",{className:"box box4 card",children:(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)("h3",{children:(0,c.jsx)("a",{href:"/dev/cli/sauce-connect-5",children:"CLI Reference"})}),(0,c.jsx)("p",{children:"Learn how to use our CLI flags to communicate with the Sauce Labs cloud from your private network."})]})}),(0,c.jsx)("div",{className:"box box5 card",children:(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)("h3",{children:(0,c.jsx)("a",{href:"/secure-connections/sauce-connect/setup-configuration/ci-cd-integration",children:"CI/CD Integration"})}),(0,c.jsx)("p",{children:"Streamline your Sauce Connect Proxy automated functional testing by integrating your preferred build provider with Sauce Labs."})]})}),(0,c.jsx)("div",{className:"box box6 card",children:(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)("h3",{children:(0,c.jsx)("a",{href:"/secure-connections/sauce-connect/proxy-tunnels",children:"Using Tunnels"})}),(0,c.jsx)("p",{children:"Best practices for starting, stopping, and monitoring tunnels."})]})}),(0,c.jsx)("div",{className:"box box7 card",children:(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)("h3",{children:(0,c.jsx)("a",{href:"/secure-connections/sauce-connect/security-authentication",children:"Security and Authentication"})}),(0,c.jsx)("p",{children:"Settings and tips for configuring Sauce Connect Proxy with your network."})]})}),(0,c.jsx)("div",{className:"box box8 card",children:(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)("h3",{children:(0,c.jsx)("a",{href:"/secure-connections/sauce-connect/setup-configuration/high-availability/",children:"High Availability Setup"})}),(0,c.jsx)("p",{children:"Set up a high volume of tests to run parallel through multiple Sauce Connect Proxy tunnels to save time."})]})})]}),"\n",(0,c.jsx)(n.h2,{id:"sauce-ipsec-proxy",children:"Sauce IPSec Proxy"}),"\n",(0,c.jsx)("p",{children:(0,c.jsx)("small",{children:(0,c.jsx)("span",{className:"sauceGreen",children:"Enterprise Plans only"})})}),"\n",(0,c.jsxs)(n.p,{children:["Sauce IPSec Proxy establishes a VPN connection between two IPSec gateways, and a tunnel gateway that allows only your authorized test VMs to connect. For more information, see our ",(0,c.jsx)(n.a,{href:"https://saucelabs.com/resources/white-papers/sauce-ipsec-proxy-overview",children:"Sauce IPSec Proxy Overview"})," white paper or contact your Customer Success Manager or Sauce Labs Sales Engineer."]}),"\n",(0,c.jsxs)("div",{className:"box-wrapper",markdown:"1",children:[(0,c.jsx)("div",{className:"box box1 card",children:(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)("h3",{children:(0,c.jsx)("a",{href:"/secure-connections/ipsec-vpn",children:"Using Sauce IPSec Tunnels"})}),(0,c.jsx)("p",{children:"The tunnel gateway is always on for the lifetime of the secure Sauce IPSec Proxy connection, allowing you to run secure and encrypted tests any time in the Sauce Labs cloud."})]})}),(0,c.jsx)("div",{className:"box box2 card",children:(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)("h3",{children:(0,c.jsx)("a",{href:"/secure-connections/ipsec-vpn#bandwidth-recommendations",children:"Network Recommendations"})}),(0,c.jsx)("p",{children:"Depending on the number of tests you\u2019re running, you'll need to utilize either one or two Sauce IPSec Proxy tunnels for best performance."})]})})]}),"\n",(0,c.jsx)("div",{className:"box boxwidebottom card",children:(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)("h3",{children:(0,c.jsx)("a",{href:"/secure-connections/ipsec-vpn",children:"Sharing Tunnels"})}),(0,c.jsx)("p",{children:"You can share Sauce IPSec Proxy tunnel access with your entire organization or restrict access to admins only."})]})}),"\n",(0,c.jsx)(n.h2,{id:"choosing-the-right-solution",children:"Choosing the Right Solution"}),"\n",(0,c.jsx)(n.p,{children:"Sauce Connect Proxy and Sauce IPSec Proxy accomplish the same thing: establish a secure connection between apps hosted on your private network and Sauce Labs cloud virtual machines and real devices. The main differences are:"}),"\n",(0,c.jsxs)("table",{children:[(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:(0,c.jsx)("strong",{children:"Sauce Connect Proxy"})}),(0,c.jsx)("td",{children:(0,c.jsx)("strong",{children:"Sauce IPSec Proxy"})})]}),(0,c.jsxs)("tr",{children:[(0,c.jsxs)("td",{children:["By default, the Sauce Connect Proxy client starts a single tunnel. For high-volume testing, we recommend High Availability tunnel pools, which you can launch using designated ",(0,c.jsx)("a",{href:"/dev/cli/sauce-connect-proxy",children:"Sauce Connect Proxy command-line options"}),"."]}),(0,c.jsx)("td",{children:"Sauce IPSec Proxy is a static setup with two tunnel gateways that are pre-configured in High Availability mode."})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"You can manage tunnel lifespan by launching different types of tunnels: ephemeral (per-build) tunnels or long-running tunnels."}),(0,c.jsx)("td",{children:"Sauce IPSec Proxy tunnels are long-running, by default."})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"Sauce Connect Proxy client (binary) runs within your network to establish the tunnels, which use proprietary protocol over TLS 1.2."}),(0,c.jsx)("td",{children:"Sauce IPSec Proxy tunnels use industry standards to establish connection and offer two options for routing traffic to sites and apps under test."})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"Available to all Sauce Labs accountholders at no additional cost."}),(0,c.jsxs)("td",{children:[(0,c.jsx)("a",{href:"https://saucelabs.com/pricing",children:"Enterprise Plans"})," only."]})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"Regardless of your license type (free-trial, self-serve, enterprise), you can download and use Sauce Connect Proxy."}),(0,c.jsx)("td",{children:"Requires a custom setup between your network and the Sauce Labs cloud prior to use."})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"Minimal setup time required; as little as 5-10 minutes."}),(0,c.jsx)("td",{children:"Setup time is appropriately four weeks; involves close collaboration and coordination between your organization and Sauce Labs."})]})]})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>i});var c=s(96540);const t={},r=c.createContext(t);function o(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);