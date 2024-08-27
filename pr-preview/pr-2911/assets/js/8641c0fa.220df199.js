"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[93826],{41919:(e,d,r)=>{r.r(d),r.d(d,{assets:()=>h,contentTitle:()=>n,default:()=>j,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=r(74848),i=r(28453);const s={id:"attributes",title:"Unity Attributes",sidebar_label:"Attributes",description:"Attributes reference for Unity."},n=void 0,c={id:"error-reporting/platform-integrations/unity/attributes",title:"Unity Attributes",description:"Attributes reference for Unity.",source:"@site/docs/error-reporting/platform-integrations/unity/attributes.md",sourceDirName:"error-reporting/platform-integrations/unity",slug:"/error-reporting/platform-integrations/unity/attributes",permalink:"/sauce-docs/pr-preview/pr-2911/error-reporting/platform-integrations/unity/attributes",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/platform-integrations/unity/attributes.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724800332e3,frontMatter:{id:"attributes",title:"Unity Attributes",sidebar_label:"Attributes",description:"Attributes reference for Unity."},sidebar:"backtrace",previous:{title:"Configuration",permalink:"/sauce-docs/pr-preview/pr-2911/error-reporting/platform-integrations/unity/configuration"},next:{title:"Stability Metrics Configuration",permalink:"/sauce-docs/pr-preview/pr-2911/error-reporting/platform-integrations/unity/metrics"}},h={},l=[{value:"Attributes list",id:"attributes-list",level:2},{value:"Indexed Attributes",id:"indexed-attributes",level:3},{value:"Non-indexed Attributes",id:"non-indexed-attributes",level:3}];function x(e){const d={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.p,{children:"This page defines the attributes that are available to customize error and crash reports for Unity."}),"\n",(0,t.jsx)(d.h2,{id:"attributes-list",children:"Attributes list"}),"\n",(0,t.jsx)(d.p,{children:"Attributes are additional metadata that can be attached to error and crash reports. You can use attributes to filter, aggregate, analyze, and debug errors in the Backtrace console."}),"\n",(0,t.jsxs)(d.p,{children:["All attributes listed below are captured by the Backtrace Unity SDK, although not all attributes are indexed by default. Non-indexed attributes cannot be used in queries. For more information about indexing, see ",(0,t.jsx)(d.a,{href:"/error-reporting/project-setup/attributes/",children:"Indexing Attributes"}),"."]}),"\n",(0,t.jsx)(d.admonition,{type:"note",children:(0,t.jsxs)(d.p,{children:["You can also define custom attributes. For more information, see ",(0,t.jsx)(d.a,{href:"/error-reporting/platform-integrations/unity/configuration/#attributes-and-attachment-paths",children:"Configuration"}),"."]})}),"\n",(0,t.jsx)(d.h3,{id:"indexed-attributes",children:"Indexed Attributes"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Name"}),(0,t.jsx)(d.th,{children:"Description"}),(0,t.jsx)(d.th,{children:"Format"}),(0,t.jsx)(d.th,{children:"Type"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"_compressed"})}),(0,t.jsx)(d.td,{children:"Indicates whether the object is compressed."}),(0,t.jsx)(d.td,{children:"None"}),(0,t.jsx)(d.td,{children:"Boolean"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"_rxid"})}),(0,t.jsx)(d.td,{children:"The received identifier for the object."}),(0,t.jsx)(d.td,{children:"UUID"}),(0,t.jsx)(d.td,{children:"UUID"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"_tx"})}),(0,t.jsx)(d.td,{children:"The transaction identifier for the object."}),(0,t.jsx)(d.td,{children:"None"}),(0,t.jsx)(d.td,{children:"64-bit"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"application"})}),(0,t.jsx)(d.td,{children:"The source app in fault."}),(0,t.jsx)(d.td,{children:"None"}),(0,t.jsx)(d.td,{children:"String"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"callstack"})}),(0,t.jsx)(d.td,{children:"The signature of the callstack in fault."}),(0,t.jsx)(d.td,{children:"Callstack"}),(0,t.jsx)(d.td,{children:"String"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"callstack.files"})}),(0,t.jsx)(d.td,{children:"A per-frame list of source files in fault."}),(0,t.jsx)(d.td,{children:"Callstack"}),(0,t.jsx)(d.td,{children:"String"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"callstack.functions"})}),(0,t.jsx)(d.td,{children:"A per-frame list of functions in fault."}),(0,t.jsx)(d.td,{children:"Callstack"}),(0,t.jsx)(d.td,{children:"String"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"callstack.modules"})}),(0,t.jsx)(d.td,{children:"A per-frame list of modules in fault."}),(0,t.jsx)(d.td,{children:"Callstack"}),(0,t.jsx)(d.td,{children:"String"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"classifiers"})}),(0,t.jsx)(d.td,{children:"The anomalous properties of the object."}),(0,t.jsx)(d.td,{children:"Label"}),(0,t.jsx)(d.td,{children:"String"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"cpu.boottime"})}),(0,t.jsx)(d.td,{children:"The time when the system was booted."}),(0,t.jsx)(d.td,{children:"None"}),(0,t.jsx)(d.td,{children:"64-bit"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"cpu.brand"})}),(0,t.jsx)(d.td,{children:"The processor brand."}),(0,t.jsx)(d.td,{children:"None"}),(0,t.jsx)(d.td,{children:"String"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"cpu.count"})}),(0,t.jsx)(d.td,{children:"The number of processors on the system."}),(0,t.jsx)(d.td,{children:"None"}),(0,t.jsx)(d.td,{children:"64-bit"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"descriptor.count"})}),(0,t.jsx)(d.td,{children:"The number of file descriptors in the process table."}),(0,t.jsx)(d.td,{children:"None"}),(0,t.jsx)(d.td,{children:"64-bit"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"error.message"})}),(0,t.jsx)(d.td,{children:"The error message associated with the event."}),(0,t.jsx)(d.td,{children:"None"}),(0,t.jsx)(d.td,{children:"String"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"fingerprint"})}),(0,t.jsx)(d.td,{children:"The signature of the primary fault."}),(0,t.jsx)(d.td,{children:"SHA-256"}),(0,t.jsx)(d.td,{children:"String"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"fingerprint;original"})}),(0,t.jsx)(d.td,{children:"The query for the original fingerprint."}),(0,t.jsx)(d.td,{children:"None"}),(0,t.jsx)(d.td,{children:"String"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"gc.heap.used"})}),(0,t.jsx)(d.td,{children:"The amount of memory used by the garbage collection (GC) heap."}),(0,t.jsx)(d.td,{children:"Bytes"}),(0,t.jsx)(d.td,{children:"64-bit"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"guid"})}),(0,t.jsx)(d.td,{children:"The unique identifier for a user."}),(0,t.jsx)(d.td,{children:"Bytes"}),(0,t.jsx)(d.td,{children:"64-bit"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"hostname"})}),(0,t.jsx)(d.td,{children:"The hostname of the system in fault."}),(0,t.jsx)(d.td,{children:"Hostname"}),(0,t.jsx)(d.td,{children:"String"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"lang.name"})}),(0,t.jsx)(d.td,{children:"The programming language."}),(0,t.jsx)(d.td,{children:"None"}),(0,t.jsx)(d.td,{children:"String"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"lang.version"})}),(0,t.jsx)(d.td,{children:"The version of the programming language."}),(0,t.jsx)(d.td,{children:"None"}),(0,t.jsx)(d.td,{children:"String"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"object.size"})}),(0,t.jsx)(d.td,{children:"The size of the object."}),(0,t.jsx)(d.td,{children:"Bytes"}),(0,t.jsx)(d.td,{children:"64-bit"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"process.age"})}),(0,t.jsx)(d.td,{children:"The number of seconds that the application has been running for."}),(0,t.jsx)(d.td,{children:"Seconds"}),(0,t.jsx)(d.td,{children:"64-bit"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"sched.cs.involuntary"})}),(0,t.jsx)(d.td,{children:"The number of involuntary context switches."}),(0,t.jsx)(d.td,{children:"None"}),(0,t.jsx)(d.td,{children:"64-bit"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"sched.cs.voluntary"})}),(0,t.jsx)(d.td,{children:"The number of voluntary context switches."}),(0,t.jsx)(d.td,{children:"None"}),(0,t.jsx)(d.td,{children:"64-bit"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"system.memory.active"})}),(0,t.jsx)(d.td,{children:"The amount of memory recently used."}),(0,t.jsx)(d.td,{children:"Kilobytes"}),(0,t.jsx)(d.td,{children:"64-bit"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"system.memory.buffers"})}),(0,t.jsx)(d.td,{children:"The amount of temporary storage for raw disk blocks."}),(0,t.jsx)(d.td,{children:"Kilobytes"}),(0,t.jsx)(d.td,{children:"64-bit"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"system.memory.cached"})}),(0,t.jsx)(d.td,{children:"The size of the buffer cache for files."}),(0,t.jsx)(d.td,{children:"Kilobytes"}),(0,t.jsx)(d.td,{children:"64-bit"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"system.memory.dirty"})}),(0,t.jsx)(d.td,{children:"The amount of memory waiting to get written back to the disk."}),(0,t.jsx)(d.td,{children:"Kilobytes"}),(0,t.jsx)(d.td,{children:"64-bit"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"system.memory.free"})}),(0,t.jsx)(d.td,{children:"The amount of free memory."}),(0,t.jsx)(d.td,{children:"Kilobytes"}),(0,t.jsx)(d.td,{children:"64-bit"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"system.memory.inactive"})}),(0,t.jsx)(d.td,{children:"The amount of memory that has not been recently used."}),(0,t.jsx)(d.td,{children:"Kilobytes"}),(0,t.jsx)(d.td,{children:"64-bit"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"system.memory.reserved"})}),(0,t.jsx)(d.td,{children:"The amount of reserved system memory."}),(0,t.jsx)(d.td,{children:"Kilobytes"}),(0,t.jsx)(d.td,{children:"64-bit"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"system.memory.temp"})}),(0,t.jsx)(d.td,{children:"The amount of temporarily allocated memory."}),(0,t.jsx)(d.td,{children:"Kilobytes"}),(0,t.jsx)(d.td,{children:"64-bit"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"system.memory.unused"})}),(0,t.jsx)(d.td,{children:"The amount of unused memory."}),(0,t.jsx)(d.td,{children:"Kilobytes"}),(0,t.jsx)(d.td,{children:"64-bit"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"system.memory.slab"})}),(0,t.jsx)(d.td,{children:"The amount of kernel memory allocated to the data structure cache."}),(0,t.jsx)(d.td,{children:"Kilobytes"}),(0,t.jsx)(d.td,{children:"64-bit"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"system.memory.swap.cached"})}),(0,t.jsx)(d.td,{children:"The amount of memory still backed by swap."}),(0,t.jsx)(d.td,{children:"Kilobytes"}),(0,t.jsx)(d.td,{children:"64-bit"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"system.memory.swap.free"})}),(0,t.jsx)(d.td,{children:"The amount of unused swap space."}),(0,t.jsx)(d.td,{children:"Kilobytes"}),(0,t.jsx)(d.td,{children:"64-bit"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"system.memory.swap.total"})}),(0,t.jsx)(d.td,{children:"The total amount of swap space."}),(0,t.jsx)(d.td,{children:"Kilobytes"}),(0,t.jsx)(d.td,{children:"64-bit"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"system.memory.total"})}),(0,t.jsx)(d.td,{children:"The total amount of memory."}),(0,t.jsx)(d.td,{children:"Kilobytes"}),(0,t.jsx)(d.td,{children:"64-bit"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"system.memory.vmalloc.total"})}),(0,t.jsx)(d.td,{children:"The total amount of virtual memory allocation."}),(0,t.jsx)(d.td,{children:"Kilobytes"}),(0,t.jsx)(d.td,{children:"64-bit"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"timestamp"})}),(0,t.jsx)(d.td,{children:"The timestamp of fault."}),(0,t.jsx)(d.td,{children:"UNIX timestamp"}),(0,t.jsx)(d.td,{children:"64-bit"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"timestamp.received"})}),(0,t.jsx)(d.td,{children:"The received timestamp of fault."}),(0,t.jsx)(d.td,{children:"UNIX timestamp"}),(0,t.jsx)(d.td,{children:"64-bit"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"uname.machine"})}),(0,t.jsx)(d.td,{children:"The processor architecture."}),(0,t.jsx)(d.td,{children:"None"}),(0,t.jsx)(d.td,{children:"String"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"uname.sysname"})}),(0,t.jsx)(d.td,{children:"The operating system name."}),(0,t.jsx)(d.td,{children:"None"}),(0,t.jsx)(d.td,{children:"String"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"uname.version"})}),(0,t.jsx)(d.td,{children:"The version of the operating system."}),(0,t.jsx)(d.td,{children:"None"}),(0,t.jsx)(d.td,{children:"String"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"vm.pte.size"})}),(0,t.jsx)(d.td,{children:"The size of the page table entries."}),(0,t.jsx)(d.td,{children:"Kilobytes"}),(0,t.jsx)(d.td,{children:"64-bit"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"vm.rss.peak"})}),(0,t.jsx)(d.td,{children:"The size of peak resident memory."}),(0,t.jsx)(d.td,{children:"Kilobytes"}),(0,t.jsx)(d.td,{children:"64-bit"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"vm.rss.size"})}),(0,t.jsx)(d.td,{children:"The size of resident memory."}),(0,t.jsx)(d.td,{children:"Kilobytes"}),(0,t.jsx)(d.td,{children:"64-bit"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"vm.shared.size"})}),(0,t.jsx)(d.td,{children:"The size of the shared library."}),(0,t.jsx)(d.td,{children:"Kilobytes"}),(0,t.jsx)(d.td,{children:"64-bit"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"vm.stack.size"})}),(0,t.jsx)(d.td,{children:"The size of the stack segment."}),(0,t.jsx)(d.td,{children:"Kilobytes"}),(0,t.jsx)(d.td,{children:"64-bit"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"vm.swap.size"})}),(0,t.jsx)(d.td,{children:"The size of swap memory."}),(0,t.jsx)(d.td,{children:"Kilobytes"}),(0,t.jsx)(d.td,{children:"64-bit"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"vm.vma.peak"})}),(0,t.jsx)(d.td,{children:"The size of peak virtual memory."}),(0,t.jsx)(d.td,{children:"Kilobytes"}),(0,t.jsx)(d.td,{children:"64-bit"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"vm.vma.size"})}),(0,t.jsx)(d.td,{children:"The size of virtual memory."}),(0,t.jsx)(d.td,{children:"Kilobytes"}),(0,t.jsx)(d.td,{children:"64-bit"})]})]})]}),"\n",(0,t.jsx)(d.h3,{id:"non-indexed-attributes",children:"Non-indexed Attributes"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Name"}),(0,t.jsx)(d.th,{children:"Description"}),(0,t.jsx)(d.th,{children:"Format"}),(0,t.jsx)(d.th,{children:"Type"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"api.compatibility"})}),(0,t.jsx)(d.td,{children:"The .NET framework and version compatible with the app. Defined in the Player Settings for the Unity project."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"application.background"})}),(0,t.jsx)(d.td,{children:"Indicates whether the app can run in the background."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"application.company.name"})}),(0,t.jsx)(d.td,{children:"Your company name. Defined in the Player Settings for the Unity project."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"application.data_path"})}),(0,t.jsx)(d.td,{children:"The app's directory path."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"application.debug"})}),(0,t.jsx)(d.td,{children:"Indicates whether the build is a development build."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"application.editor"})}),(0,t.jsx)(d.td,{children:"Indicates whether the app instance is run via the Unity Editor."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"application.focused"})}),(0,t.jsx)(d.td,{children:"Indicates whether the app has focus."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"application.id"})}),(0,t.jsx)(d.td,{children:"The name of the app or product name. Defined in the Player Settings for the Unity project."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"application.installer.name"})}),(0,t.jsx)(d.td,{children:"The name of the store or package that installed the app."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"application.internet_reachability"})}),(0,t.jsx)(d.td,{children:"The type of internet reachability currently possible on the device running the app."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"application.mobile"})}),(0,t.jsx)(d.td,{children:"Indicates whether the app runs on a mobile device."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"application.playing"})}),(0,t.jsx)(d.td,{children:"Indicates whether the app is currently playing."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"application.sandboxType"})}),(0,t.jsx)(d.td,{children:"The sandbox type."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"application.session"})}),(0,t.jsx)(d.td,{children:"The current game or app session."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"application.system.language"})}),(0,t.jsx)(d.td,{children:"The system language."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"application.temporary_cache"})}),(0,t.jsx)(d.td,{children:"The directory path of temporarily cached data."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"application.unity.version"})}),(0,t.jsx)(d.td,{children:"The runtime version of Unity."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"application.url"})}),(0,t.jsx)(d.td,{children:"The URL used to open the application."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"application.version"})}),(0,t.jsx)(d.td,{children:"The app's build version. Defined in the Player Settings for the Unity project."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"audio.supported"})}),(0,t.jsx)(d.td,{children:"Indicates whether audio is supported."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"backtrace.version"})}),(0,t.jsx)(d.td,{children:"The version of the Backtrace SDK."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"battery.level"})}),(0,t.jsx)(d.td,{children:"The current battery level."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"battery.status"})}),(0,t.jsx)(d.td,{children:"The current status of the device's battery."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"cpu.frequency"})}),(0,t.jsx)(d.td,{children:"The frequency of the device's central processing unit (CPU) in megahertz (MHz)."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"device.manufacturer"})}),(0,t.jsx)(d.td,{children:"The manufacturer of the device running the app."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"device.model"})}),(0,t.jsx)(d.td,{children:"The model of the device running the app."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"device.name"})}),(0,t.jsx)(d.td,{children:"The name of the device running the app. Defined by the end user."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"device.type"})}),(0,t.jsx)(d.td,{children:"The broad type of device."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"error.type"})}),(0,t.jsx)(d.td,{children:"A categorization of the error that generated a report."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"graphic.driver.version"})}),(0,t.jsx)(d.td,{children:"The graphics API type and driver version used by the graphics device."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"graphic.id"})}),(0,t.jsx)(d.td,{children:"The identifier code of the graphics device."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"graphic.memory"})}),(0,t.jsx)(d.td,{children:"The total amount of graphics memory."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"graphic.multithreaded"})}),(0,t.jsx)(d.td,{children:"Indicates whether the graphics processing unit (GPU) is multithreaded."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"graphic.name"})}),(0,t.jsx)(d.td,{children:"The name of the graphics processing unit (GPU) or graphics card."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"graphic.shader"})}),(0,t.jsx)(d.td,{children:"The shader capability level of the graphics device."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"graphic.topUv"})}),(0,t.jsx)(d.td,{children:"Indicates whether UV coordinates start at the top."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"graphic.type"})}),(0,t.jsx)(d.td,{children:"The graphics API type used by the graphics device."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"graphic.vendor"})}),(0,t.jsx)(d.td,{children:"The vendor of the graphics device."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"graphic.vendor.id"})}),(0,t.jsx)(d.td,{children:"The identifier code for the vendor of the graphics device."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"mono.heap"})}),(0,t.jsx)(d.td,{children:"The amount of memory allocated to the managed heap."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"mono.used"})}),(0,t.jsx)(d.td,{children:"The amount of memory used by the managed heap."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"scene.active"})}),(0,t.jsx)(d.td,{children:"The name of the active scene."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"scene.buildIndex"})}),(0,t.jsx)(d.td,{children:"The build index of the active scene."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"scene.count"})}),(0,t.jsx)(d.td,{children:"The number of scenes currently loaded in your project at the time a report is sent."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"scene.count.build"})}),(0,t.jsx)(d.td,{children:"The number of scenes added in Build Settings for the Unity project."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"scene.handle"})}),(0,t.jsx)(d.td,{children:"The number of handles in the scene."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"scene.isDirty"})}),(0,t.jsx)(d.td,{children:"Indicates whether the active scene has any modifications."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"scene.isLoaded"})}),(0,t.jsx)(d.td,{children:"Indicates whether the active scene is loaded."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"scene.name"})}),(0,t.jsx)(d.td,{children:"The name of the active scene at the time the report is sent."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"scene.path"})}),(0,t.jsx)(d.td,{children:"The path to the scene."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"scripting.backend"})}),(0,t.jsx)(d.td,{children:"The scripting backend. Defined in the Player Settings for the Unity project."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"uname.family"})}),(0,t.jsx)(d.td,{children:"The operating system family running the app."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"uname.fullname"})}),(0,t.jsx)(d.td,{children:"The name and version of the operating system."}),(0,t.jsx)(d.td,{children:"User Defined"}),(0,t.jsx)(d.td,{children:"User Defined"})]})]})]})]})}function j(e={}){const{wrapper:d}={...(0,i.R)(),...e.components};return d?(0,t.jsx)(d,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},28453:(e,d,r)=>{r.d(d,{R:()=>n,x:()=>c});var t=r(96540);const i={},s=t.createContext(i);function n(e){const d=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),t.createElement(s.Provider,{value:d},e.children)}}}]);