"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[42129],{58573:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var r=s(74848),i=s(28453);s(11470),s(19365),s(86025);const l={id:"yaml",title:"Configuring Your Chrome DevTools Recordings",sidebar_label:"YAML Configuration"},t=void 0,a={id:"web-apps/automated-testing/replay/yaml",title:"Configuring Your Chrome DevTools Recordings",description:"saucectl relies on a YAML specification file to determine exactly which recordings to replay and how. To customize saucectl to replay your Chrome DevTools Recordings, simply modify the properties of the YAML file accordingly. This page defines each of the configuration properties specific to running Chrome DevTools recordings.",source:"@site/docs/web-apps/automated-testing/replay/yaml.md",sourceDirName:"web-apps/automated-testing/replay",slug:"/web-apps/automated-testing/replay/yaml",permalink:"/sauce-docs/pr-preview/pr-2911/web-apps/automated-testing/replay/yaml",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/web-apps/automated-testing/replay/yaml.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724800332e3,frontMatter:{id:"yaml",title:"Configuring Your Chrome DevTools Recordings",sidebar_label:"YAML Configuration"},sidebar:"docs",previous:{title:"Quickstart",permalink:"/sauce-docs/pr-preview/pr-2911/web-apps/automated-testing/replay/quickstart"},next:{title:"Using CDP / BiDi",permalink:"/sauce-docs/pr-preview/pr-2911/web-apps/automated-testing/cdp-bidi"}},o={},c=[{value:"Setting an Alternative Configuration File",id:"setting-an-alternative-configuration-file",level:2},{value:"Example Configuration",id:"example-configuration",level:2},{value:"<code>apiVersion</code>",id:"apiversion",level:2},{value:"<code>kind</code>",id:"kind",level:2},{value:"<code>showConsoleLog</code>",id:"showconsolelog",level:2},{value:"<code>defaults</code>",id:"defaults",level:2},{value:"<code>timeout</code>",id:"timeout",level:3},{value:"<code>sauce</code>",id:"sauce",level:2},{value:"<code>region</code>",id:"region",level:3},{value:"<code>metadata</code>",id:"metadata",level:3},{value:"<code>concurrency</code>",id:"concurrency",level:3},{value:"<code>retries</code>",id:"retries",level:3},{value:"<code>tunnel</code>",id:"tunnel",level:3},{value:"<code>name</code>",id:"name",level:4},{value:"<code>owner</code>",id:"owner",level:4},{value:"<code>timeout</code>",id:"timeout-1",level:4},{value:"<code>visibility</code>",id:"visibility",level:3},{value:"<code>launchOrder</code>",id:"launchorder",level:3},{value:"<code>reporters</code>",id:"reporters",level:2},{value:"<code>spotlight</code>",id:"spotlight",level:3},{value:"<code>json</code>",id:"json",level:3},{value:"<code>enabled</code>",id:"enabled",level:4},{value:"<code>webhookURL</code>",id:"webhookurl",level:4},{value:"<code>filename</code>",id:"filename",level:4},{value:"<code>artifacts</code>",id:"artifacts",level:2},{value:"<code>cleanup</code>",id:"cleanup",level:3},{value:"<code>retain</code>",id:"retain",level:3},{value:"<code>download</code>",id:"download",level:3},{value:"<code>when</code>",id:"when",level:4},{value:"<code>match</code>",id:"match",level:4},{value:"<code>directory</code>",id:"directory",level:4},{value:"<code>allAttempts</code>",id:"allattempts",level:4},{value:"<code>suites</code>",id:"suites",level:2},{value:"<code>name</code>",id:"name-1",level:3},{value:"<code>platform</code>",id:"platform",level:3},{value:"<code>recordings</code>",id:"recordings",level:3},{value:"<code>browserName</code>",id:"browsername",level:3},{value:"<code>browserVersion</code>",id:"browserversion",level:3},{value:"<code>timeout</code>",id:"timeout-2",level:3},{value:"<code>passThreshold</code>",id:"passthreshold",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"saucectl"})," relies on a YAML specification file to determine exactly which recordings to replay and how. To customize ",(0,r.jsx)(n.code,{children:"saucectl"})," to replay your Chrome DevTools Recordings, simply modify the properties of the YAML file accordingly. This page defines each of the configuration properties specific to running Chrome DevTools recordings."]}),"\n",(0,r.jsx)(n.h2,{id:"setting-an-alternative-configuration-file",children:"Setting an Alternative Configuration File"}),"\n",(0,r.jsxs)(n.p,{children:["By default, ",(0,r.jsx)(n.code,{children:"saucectl"})," looks for the ",(0,r.jsx)(n.code,{children:"config.yml"})," file in the ",(0,r.jsx)(n.code,{children:".sauce"})," folder of your project root, but you can actually specify a different file, or if you are using multiple frameworks or need to configure different sets of tests to run separately, you may choose to have multiple configuration files that you can direct ",(0,r.jsx)(n.code,{children:"saucectl"})," to reference as necessary."]}),"\n",(0,r.jsxs)(n.p,{children:["Use the following configuration at runtime to direct ",(0,r.jsx)(n.code,{children:"saucectl"})," to use any configuration file you choose:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"saucectl run -c ./path/to/{config-file}.yml\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"YAML Required",type:"note",children:(0,r.jsxs)(n.p,{children:["While you can use multiple files of different names or locations to specify your configurations, each file must be a ",(0,r.jsx)(n.code,{children:"*.yml"})," and follow the ",(0,r.jsx)(n.code,{children:"saucectl"})," syntax. Our IDE Integrations (e.g., ",(0,r.jsx)(n.a,{href:"/dev/cli/saucectl/usage/ide/vscode",children:"Visual Studio Code"}),") can help you out by validating the YAML files and provide handy suggestions, so make sure to check them out!"]})}),"\n",(0,r.jsx)(n.h2,{id:"example-configuration",children:"Example Configuration"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:"reference",children:"https://github.com/saucelabs/saucectl-replay-example/blob/main/.sauce/config.yml\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Each of the properties supported for replaying Chrome DevTools recordings through ",(0,r.jsx)(n.code,{children:"saucectl"})," is defined below."]}),"\n",(0,r.jsx)(n.h2,{id:"apiversion",children:(0,r.jsx)(n.code,{children:"apiVersion"})}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| REQUIRED | STRING |"})}),"\n",(0,r.jsxs)(n.p,{children:["Identifies the version of the underlying configuration schema. At this time, ",(0,r.jsx)(n.code,{children:"v1alpha"})," is the only supported value."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1alpha\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"kind",children:(0,r.jsx)(n.code,{children:"kind"})}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| REQUIRED | STRING/ENUM |"})}),"\n",(0,r.jsx)(n.p,{children:"Specifies which framework is associated with the automation tests configured in this specification."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"kind: puppeteer-replay\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"showconsolelog",children:(0,r.jsx)(n.code,{children:"showConsoleLog"})}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| OPTIONAL | BOOLEAN |"})}),"\n",(0,r.jsxs)(n.p,{children:["Controls whether the contents of ",(0,r.jsx)(n.code,{children:"console.log"})," are always shown in the local output of saucectl. By default (false), ",(0,r.jsx)(n.code,{children:"console.log"})," is only shown for failed suites."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"showConsoleLog: true\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"defaults",children:(0,r.jsx)(n.code,{children:"defaults"})}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| OPTIONAL | OBJECT |"})}),"\n",(0,r.jsx)(n.p,{children:"Specifies any default settings for the project."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"defaults:\n  timeout: 15m\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"timeout",children:(0,r.jsx)(n.code,{children:"timeout"})}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| OPTIONAL | DURATION |"})}),"\n",(0,r.jsxs)(n.p,{children:["Instructs how long (in ",(0,r.jsx)(n.code,{children:"ms"}),", ",(0,r.jsx)(n.code,{children:"s"}),", ",(0,r.jsx)(n.code,{children:"m"}),", or ",(0,r.jsx)(n.code,{children:"h"}),") ",(0,r.jsx)(n.code,{children:"saucectl"})," should wait for each suite to complete. You can override this setting for individual suites using the ",(0,r.jsx)(n.code,{children:"timeout"})," setting within the ",(0,r.jsx)(n.a,{href:"#suites",children:(0,r.jsx)(n.code,{children:"suites"})})," object. If not set, the default value is ",(0,r.jsx)(n.code,{children:"0"})," (unlimited)."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"defaults:\n  timeout: 15m\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"sauce",children:(0,r.jsx)(n.code,{children:"sauce"})}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| OPTIONAL | OBJECT |"})}),"\n",(0,r.jsx)(n.p,{children:"The parent property containing all settings related to how Jobs are run and identified in the Sauce Labs platform."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"sauce:\n  region: us-west-1\n  metadata:\n    tags:\n      - e2e\n      - release team\n      - other tag\n    build: Release $CI_COMMIT_SHORT_SHA\n  concurrency: 10\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"region",children:(0,r.jsx)(n.code,{children:"region"})}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| OPTIONAL | STRING/ENUM |"})}),"\n",(0,r.jsxs)(n.p,{children:["Specifies on which Sauce Labs data center jobs will run. Valid values are: ",(0,r.jsx)(n.code,{children:"us-west-1"})," or ",(0,r.jsx)(n.code,{children:"eu-central-1"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["If you do not specify a region in your config file, you must set it when running your command with the ",(0,r.jsx)(n.code,{children:"--region"})," flag."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"sauce:\n  region: eu-central-1\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"metadata",children:(0,r.jsx)(n.code,{children:"metadata"})}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| OPTIONAL | OBJECT |"})}),"\n",(0,r.jsx)(n.p,{children:"The set of properties that allows you to provide additional information about your project that helps you distinguish it in the various environments in which it is used and reviewed, and also helps you apply filters to easily isolate Jobs based on metrics that are meaningful to you, as shown in the following example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"sauce:\n  metadata:\n    build: RC 10.4.a\n    tags:\n      - e2e\n      - release team\n      - beta\n      - featurex\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"concurrency",children:(0,r.jsx)(n.code,{children:"concurrency"})}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| OPTIONAL | INTEGER |"})}),"\n",(0,r.jsx)(n.p,{children:"Sets the maximum number of suites to execute at the same time. If the config defines more suites than the max, excess suites are queued and run in order as each suite completes."}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"Set this value to equal or less than your Sauce Labs concurrency allowance, as setting a higher value may result in jobs dropped by the server."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"sauce:\n  concurrency: 5\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Alternatively, you can override the file setting at runtime by setting the concurrency flag as an inline parameter of the ",(0,r.jsx)(n.code,{children:"saucectl run"})," command:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"saucectl run --ccy 5\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"retries",children:(0,r.jsx)(n.code,{children:"retries"})}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| OPTIONAL | INTEGER |"})}),"\n",(0,r.jsxs)(n.p,{children:["Sets the number of times to retry a failed suite. For more settings, you can refer to ",(0,r.jsx)(n.a,{href:"#passThreshold",children:"passThreshold"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"sauce:\n  retries: 1\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Alternatively, you can override the file setting at runtime by setting the retries flag as an inline parameter of the ",(0,r.jsx)(n.code,{children:"saucectl run"})," command:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"saucectl run --retries 1\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"tunnel",children:(0,r.jsx)(n.code,{children:"tunnel"})}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| OPTIONAL | OBJECT |"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"saucectl"})," supports using ",(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect/proxy-tunnels/",children:"Sauce Connect"})," to establish a secure connection with Sauce Labs. To do so, launch a tunnel, and then provide the name and owner (if applicable) in this property."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"sauce:\n  tunnel:\n    name: your_tunnel_name\n    owner: tunnel_owner_username\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect/advanced/specifications/#supported-browsers-and-ports",children:"Only certain HTTP(S) ports"})," are proxied by the tunnel."]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h4,{id:"name",children:(0,r.jsx)(n.code,{children:"name"})}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"\n",(0,r.jsx)(n.p,{children:"Identifies an active Sauce Connect tunnel to use for secure connectivity to the Sauce Labs cloud."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["This property replaces the former ",(0,r.jsx)(n.code,{children:"id"})," property, which is deprecated."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"sauce:\n  tunnel:\n    name: your_tunnel_name\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h4,{id:"owner",children:(0,r.jsx)(n.code,{children:"owner"})}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"\n",(0,r.jsx)(n.p,{children:"Identifies the Sauce Labs user who created the specified tunnel, which is required if the user running the job did not create the tunnel."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["This property replaces the former ",(0,r.jsx)(n.code,{children:"parent"})," property, which is deprecated."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"sauce:\n  tunnel:\n    name: your_tunnel_name\n    owner: tunnel_owner_username\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h4,{id:"timeout-1",children:(0,r.jsx)(n.code,{children:"timeout"})}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| OPTIONAL | DURATION |"})}),"\n",(0,r.jsx)(n.p,{children:"How long to wait for the specified tunnel to be ready. Supports duration values like '10s', '30m' etc. (default: 30s)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"sauce:\n  tunnel:\n    name: your_tunnel_name\n    timeout: 30s\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"visibility",children:(0,r.jsx)(n.code,{children:"visibility"})}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"\n",(0,r.jsxs)(n.p,{children:["Sets the visibility level of Jobs on Sauce Labs. If unspecified or empty, ",(0,r.jsx)(n.code,{children:"team"})," visibility will be applied. Valid values are:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"public"}),": Accessible to everyone."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"public restricted"}),": Share your job's results page and video, but keeps the logs only for you."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"share"}),": Only accessible to people with a valid link."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"team"}),": (Default) Only accessible to people under the same root account as you."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"private"}),": Only you (the owner) will be able to view assets and test results page."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"sauce:\n  visibility: private\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"launchorder",children:(0,r.jsx)(n.code,{children:"launchOrder"})}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"\n",(0,r.jsxs)(n.p,{children:["Specifies the execution order for your test suites. When set to ",(0,r.jsx)(n.code,{children:"fail rate"}),", test suites with the highest failure rate will execute first. If unspecified, test suites will execute in the order in which they are written in the configuration file."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"sauce:\n  launchOrder: fail rate\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"reporters",children:(0,r.jsx)(n.code,{children:"reporters"})}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| OPTIONAL | OBJECT |"})}),"\n",(0,r.jsxs)(n.p,{children:["Configures additional reporting capabilities provided by ",(0,r.jsx)(n.code,{children:"saucectl"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"reporters:\n  json:\n    enabled: true\n    filename: saucectl-report.json\n    webhookURL: https://my-webhook-url\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"spotlight",children:(0,r.jsx)(n.code,{children:"spotlight"})}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| OPTIONAL | OBJECT |"})}),"\n",(0,r.jsx)(n.p,{children:"The spotlight reporter highlights failed or otherwise interesting jobs.\nIt may include an excerpt of failed tests or other information that may be useful for troubleshooting."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"reporters:\n  spotlight:\n    enabled: true\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"json",children:(0,r.jsx)(n.code,{children:"json"})}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| OPTIONAL | OBJECT |"})}),"\n",(0,r.jsx)(n.p,{children:"The JSON reporter gathers Job results and combines them into a single report."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"reporters:\n  json:\n    enabled: true\n    filename: saucectl-report.json\n    webhookURL: https://my-webhook-url\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h4,{id:"enabled",children:(0,r.jsx)(n.code,{children:"enabled"})}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| OPTIONAL | BOOLEAN |"})}),"\n",(0,r.jsx)(n.p,{children:"Toggles the reporter on/off."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"reporters:\n  json:\n    enabled: true\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h4,{id:"webhookurl",children:(0,r.jsx)(n.code,{children:"webhookURL"})}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"\n",(0,r.jsx)(n.p,{children:"The JSON reporter gathers Job results, combines them into a single report and sends an HTTP POST request with the JSON payload to the specified webhook URL."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"reporters:\n  json:\n    webhookURL: https://my-webhook-url\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h4,{id:"filename",children:(0,r.jsx)(n.code,{children:"filename"})}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"\n",(0,r.jsx)(n.p,{children:'Specifies the report filename. Defaults to "saucectl-report.json".'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"reporters:\n  json:\n    filename: saucectl-report.json\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"artifacts",children:(0,r.jsx)(n.code,{children:"artifacts"})}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| OPTIONAL | OBJECT |"})}),"\n",(0,r.jsx)(n.p,{children:"Specifies how to manage job artifacts, such as logs, videos, and screenshots."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'artifacts:\n  cleanup: true\n  download:\n    when: always\n    match:\n      - "*"\n    directory: ./artifacts/\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"cleanup",children:(0,r.jsx)(n.code,{children:"cleanup"})}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| OPTIONAL | BOOLEAN |"})}),"\n",(0,r.jsxs)(n.p,{children:["When set to ",(0,r.jsx)(n.code,{children:"true"}),", all contents of the specified download directory are deleted before downloading new artifacts."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"artifacts:\n  cleanup: true\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"retain",children:(0,r.jsx)(n.code,{children:"retain"})}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| OPTIONAL | OBJECT |"})}),"\n",(0,r.jsxs)(n.p,{children:["Define directories to archive and retain as a test asset at the end of a test run. Archived test assets can\nbe downloaded automatically using the ",(0,r.jsx)(n.code,{children:"download"})," configuration, via the\n",(0,r.jsx)(n.a,{href:"https://docs.saucelabs.com/dev/api/jobs/#get-a-job-asset-file",children:"REST API"}),", or through the test details page."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"artifacts:\n  retain:\n    source-directory: destination-archive.zip\n  download:\n    when: always\n    match:\n      - destination-archive.zip\n    directory: ./artifacts/\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The source and destination will be relative to the ",(0,r.jsx)(n.code,{children:"rootDir"})," defined in your configuration."]})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"The destination archive must have a .zip file extension."})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"download",children:(0,r.jsx)(n.code,{children:"download"})}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| OPTIONAL | OBJECT |"})}),"\n",(0,r.jsx)(n.p,{children:"Specifies the settings related to downloading artifacts."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"artifacts:\n  download:\n    when: always\n    match:\n      - junit.xml\n    directory: ./artifacts/\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h4,{id:"when",children:(0,r.jsx)(n.code,{children:"when"})}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"\n",(0,r.jsx)(n.p,{children:"Specifies when and under what circumstances to download artifacts. Valid values are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"always"}),": Always download artifacts."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"never"}),": Never download artifacts."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"pass"}),": Download artifacts for passing suites only."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"fail"}),": Download artifacts for failed suites only."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"artifacts:\n  download:\n    when: always\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h4,{id:"match",children:(0,r.jsx)(n.code,{children:"match"})}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| OPTIONAL | STRING/ARRAY |"})}),"\n",(0,r.jsxs)(n.p,{children:["Specifies which artifacts to download based on whether they match the name or file type pattern provided. Supports the wildcard character ",(0,r.jsx)(n.code,{children:"*"})," (use quotes for best parsing results with wildcard)."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'artifacts:\n  download:\n    match:\n      - "*.log"\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h4,{id:"directory",children:(0,r.jsx)(n.code,{children:"directory"})}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"\n",(0,r.jsx)(n.p,{children:"Specifies the path to the folder location in which to download artifacts. A separate subdirectory is generated in this location for each suite for which artifacts are downloaded. The name of the subdirectory will match the suite name. If a directory with the same name already exists, the new one will be suffixed by a serial number."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"artifacts:\n  download:\n    directory: ./artifacts/\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h4,{id:"allattempts",children:(0,r.jsx)(n.code,{children:"allAttempts"})}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| OPTIONAL | BOOLEAN |"})}),"\n",(0,r.jsxs)(n.p,{children:["If you have your tests configured with ",(0,r.jsx)(n.a,{href:"#retries",children:"retries"}),", you can set this option to ",(0,r.jsx)(n.code,{children:"true"})," to download artifacts for every attempt. Otherwise, only artifacts of the last attempt\nwill be downloaded."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"artifacts:\n  download:\n    match:\n      - console.log\n    when: always\n    allAttempts: true\n    directory: ./artifacts/\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"suites",children:(0,r.jsx)(n.code,{children:"suites"})}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| REQUIRED | OBJECT |"})}),"\n",(0,r.jsxs)(n.p,{children:["The set of properties providing details about the suites to run. May contain multiple suite definitions. See the full ",(0,r.jsx)(n.a,{href:"#example-configuration",children:"example config"})," for an illustration of multiple suite definitions."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'suites:\n  - name: "getting some coffee"\n    recordings: [ "recordings/coffee-cart.json" ]\n    platform: "Windows 11"\n    timeout: 5m\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"name-1",children:(0,r.jsx)(n.code,{children:"name"})}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| REQUIRED | STRING |"})}),"\n",(0,r.jsx)(n.p,{children:"The name of the test suite, which will be reflected in the results and related artifacts."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'suites:\n  - name: "saucy test"\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"platform",children:(0,r.jsx)(n.code,{children:"platform"})}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"\n",(0,r.jsxs)(n.p,{children:["A specific operating system and version on which to run the specified recordings. Defaults to a platform that is supported by ",(0,r.jsx)(n.code,{children:"saucectl"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'suites:\n  - name: "getting some coffee"\n    platform: "Windows 11"\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"recordings",children:(0,r.jsx)(n.code,{children:"recordings"})}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| REQUIRED | STRING/ARRAY |"})}),"\n",(0,r.jsx)(n.p,{children:"One or more paths to the Chrome DevTools JSON recordings to run for this suite. Regex values are supported to indicate all files of a certain type or in a certain directory, etc."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'suites:\n  - name: "getting some coffee"\n    recordings:\n      - "recordings/*.json"\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"browsername",children:(0,r.jsx)(n.code,{children:"browserName"})}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"\n",(0,r.jsxs)(n.p,{children:["The name of the browser in which to run this test suite. Defaults to ",(0,r.jsx)(n.code,{children:"googlechrome"}),", which is currently the only supported browser."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'suites:\n  - name: "getting some coffee"\n    browserName: "googlechrome"\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"browserversion",children:(0,r.jsx)(n.code,{children:"browserVersion"})}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"\n",(0,r.jsxs)(n.p,{children:["The version of the browser in which to run this suite. Defaults to ",(0,r.jsx)(n.code,{children:"latest"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'suites:\n  - name: "getting some coffee"\n    browserVersion: "latest"\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"timeout-2",children:(0,r.jsx)(n.code,{children:"timeout"})}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| OPTIONAL | DURATION |"})}),"\n",(0,r.jsxs)(n.p,{children:["Instructs how long ",(0,r.jsx)(n.code,{children:"saucectl"})," should wait for the suite to complete, overriding the default project timeout setting of 30 minutes."]}),"\n",(0,r.jsx)(n.p,{children:"When the suite reaches the timeout limit, its status is set to '?' in the CLI. This does not reflect the actual status of the job in the Sauce Labs web UI or API."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Setting ",(0,r.jsx)(n.code,{children:"0"})," reverts to the value set in ",(0,r.jsx)(n.code,{children:"defaults"}),"."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'suites:\n  - name: "getting some coffee"\n    timeout: 15m\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"passthreshold",children:(0,r.jsx)(n.code,{children:"passThreshold"})}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| OPTIONAL | INTEGER |"})}),"\n",(0,r.jsxs)(n.p,{children:["Specifies the minimum number of successful attempts for a suite to be considered as ",(0,r.jsx)(n.code,{children:"passed"}),". It should be used along with ",(0,r.jsx)(n.a,{href:"#retries",children:"retries"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["For example, setting ",(0,r.jsx)(n.code,{children:"retries"})," to 3 and ",(0,r.jsx)(n.code,{children:"passThreshold"})," to 2.\nThe max attempt would be 4 times. If the test passed twice, it'd stop and be marked as ",(0,r.jsx)(n.code,{children:"passed"}),". Otherwise, it'd be marked as ",(0,r.jsx)(n.code,{children:"failed"}),"."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"sauce:\n  retries: 3\nsuite:\n  - name: My Saucy Test\n    passThreshold: 2\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>t});s(96540);var r=s(18215);const i={tabItem:"tabItem_Ymn6"};var l=s(74848);function t(e){let{children:n,hidden:s,className:t}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,t),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>w});var r=s(96540),i=s(18215),l=s(23104),t=s(56347),a=s(205),o=s(57485),c=s(31682),d=s(89466);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:r,default:i}}=e;return{value:n,label:s,attributes:r,default:i}}))}(s);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:s}=e;const i=(0,t.W6)(),l=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,o.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(i.location.search);n.set(l,e),i.replace({...i.location,search:n.toString()})}),[l,i])]}function j(e){const{defaultValue:n,queryString:s=!1,groupId:i}=e,l=u(e),[t,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[c,h]=x({queryString:s,groupId:i}),[j,m]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,l]=(0,d.Dv)(s);return[i,(0,r.useCallback)((e=>{s&&l.set(e)}),[s,l])]}({groupId:i}),f=(()=>{const e=c??j;return p({value:e,tabValues:l})?e:null})();(0,a.A)((()=>{f&&o(f)}),[f]);return{selectedValue:t,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),m(e)}),[h,m,l]),tabValues:l}}var m=s(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(74848);function y(e){let{className:n,block:s,selectedValue:r,selectValue:t,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),d=e=>{const n=e.currentTarget,s=o.indexOf(n),i=a[s].value;i!==r&&(c(n),t(i))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;n=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;n=o[s]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":s},n),children:a.map((e=>{let{value:n,label:s,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:h,onClick:d,...l,className:(0,i.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":r===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:i}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function b(e){const n=j(e);return(0,g.jsxs)("div",{className:(0,i.A)("tabs-container",f.tabList),children:[(0,g.jsx)(y,{...e,...n}),(0,g.jsx)(v,{...e,...n})]})}function w(e){const n=(0,m.A)();return(0,g.jsx)(b,{...e,children:h(e.children)},String(n))}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>a});var r=s(96540);const i={},l=r.createContext(i);function t(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);