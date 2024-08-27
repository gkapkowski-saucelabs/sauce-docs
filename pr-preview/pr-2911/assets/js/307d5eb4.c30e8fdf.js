"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[25659],{47745:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=t(74848),o=t(28453);t(11470),t(19365),t(86025);const r={id:"client-usage",title:"Coroner Client - Usage",sidebar_label:"Client Usage",description:"Interaction with the coronerd object store occurs either through the web console or the command-line tools."},s=void 0,i={id:"error-reporting/advanced/coroner/client-usage",title:"Coroner Client - Usage",description:"Interaction with the coronerd object store occurs either through the web console or the command-line tools.",source:"@site/docs/error-reporting/advanced/coroner/client-usage.md",sourceDirName:"error-reporting/advanced/coroner",slug:"/error-reporting/advanced/coroner/client-usage",permalink:"/sauce-docs/pr-preview/pr-2911/error-reporting/advanced/coroner/client-usage",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/advanced/coroner/client-usage.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724800332e3,frontMatter:{id:"client-usage",title:"Coroner Client - Usage",sidebar_label:"Client Usage",description:"Interaction with the coronerd object store occurs either through the web console or the command-line tools."},sidebar:"backtrace",previous:{title:"Client Getting Started",permalink:"/sauce-docs/pr-preview/pr-2911/error-reporting/advanced/coroner/client-getting-started"},next:{title:"Client Morgue",permalink:"/sauce-docs/pr-preview/pr-2911/error-reporting/advanced/coroner/client-morgue"}},c={},l=[{value:"Initial Setup",id:"initial-setup",level:2},{value:"Coroner 0.12.0 or Newer",id:"coroner-0120-or-newer",level:3},{value:"Coroner 0.11.4 or Older",id:"coroner-0114-or-older",level:3},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Summary",id:"summary",level:3},{value:"List",id:"list",level:3},{value:"Key-Value Attributes",id:"key-value-attributes",level:4},{value:"Saving Preferences",id:"saving-preferences",level:2},{value:"Examples",id:"examples",level:2},{value:"Sort Groups by Recent Activity",id:"sort-groups-by-recent-activity",level:3},{value:"List All Ativity in The Last Week",id:"list-all-ativity-in-the-last-week",level:3},{value:"Find Groups With a Certain Classification",id:"find-groups-with-a-certain-classification",level:3},{value:"Find All Groups by a Callstack",id:"find-all-groups-by-a-callstack",level:3},{value:"Aggregate Listed groups by Key-Value",id:"aggregate-listed-groups-by-key-value",level:3},{value:"Download a Snapshot to Disk",id:"download-a-snapshot-to-disk",level:3},{value:"Additional Information",id:"additional-information",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Interaction with the coronerd object store can be done through the web console or the command-line tools. This section focuses on the coroner tool, a command-line client for interacting with the object store. It is straightforward but allows for complex queries and integrates efficiently into your terminal development environment."}),"\n",(0,a.jsx)(n.h2,{id:"initial-setup",children:"Initial Setup"}),"\n",(0,a.jsx)(n.h3,{id:"coroner-0120-or-newer",children:"Coroner 0.12.0 or Newer"}),"\n",(0,a.jsx)(n.p,{children:"After adding a user to the object store, the user must log in to a server to interact with it."}),"\n",(0,a.jsx)(n.p,{children:"For example, to initiate a session with the object store located at errors.company.com, use the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ coroner login https://errors.company.com\nUser: myuser\nPassword: **********\n"})}),"\n",(0,a.jsx)(n.p,{children:'Once logged in, the user\'s credentials are cached locally. The password is not saved, but instead, a session token is used. The user can then interact with the server as specified in the "Basic Usage" section.'}),"\n",(0,a.jsxs)(n.p,{children:["Additional options can be specified in ",(0,a.jsx)(n.code,{children:"~/.coroner.cf"})," or a configuration file provided using the ",(0,a.jsx)(n.code,{children:"-c"})," option."]}),"\n",(0,a.jsxs)(n.p,{children:["For more information about ",(0,a.jsx)(n.code,{children:"coroner.cf"})," files, see ",(0,a.jsx)(n.a,{href:"/error-reporting/advanced/coroner/client-getting-started/#configuration",children:"Coroner Client Configuration"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"coroner-0114-or-older",children:"Coroner 0.11.4 or Older"}),"\n",(0,a.jsxs)(n.p,{children:["The coroner tool expects to find a configuration file named ",(0,a.jsx)(n.code,{children:".coroner.cf"})," in your home directory. An alternate configuration file can be specified with the ",(0,a.jsx)(n.code,{children:"-c"})," option. For example, ",(0,a.jsx)(n.code,{children:"coroner -c /tmp/testing.cf"})," forces coroner to use the configuration file ",(0,a.jsx)(n.code,{children:"/tmp/testing.cf"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["The object store at corp.company.com is configured to store object snapshots for the projects ",(0,a.jsx)(n.code,{children:"aclient"}),", ",(0,a.jsx)(n.code,{children:"fastore"}),", ",(0,a.jsx)(n.code,{children:"cronndbcacher"}),", ",(0,a.jsx)(n.code,{children:"cacher"}),", and ",(0,a.jsx)(n.code,{children:"squid"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"A project is a grouping of events, snapshots, and root causes. It can host multiple applications or a single application, depending on whether your team finds correlation of faults across applications useful."}),"\n",(0,a.jsx)(n.p,{children:"With this minimal configuration file, you can interact with the object store through various coroner sub-commands."}),"\n",(0,a.jsxs)(n.p,{children:["For more information about ",(0,a.jsx)(n.code,{children:"coroner.cf"})," files, see ",(0,a.jsx)(n.a,{href:"/error-reporting/advanced/coroner/client-getting-started/#configuration",children:"Coroner Client Configuration"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,a.jsx)(n.h3,{id:"summary",children:"Summary"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"summary"})," sub-command provides a quick summary of all fault activity across configured projects."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ coroner summary\nPROJECT          TRACES  GROUPS      ACTIVITY\naclient               9       2      2015-06-15 17:45 EDT [1w]\nfastore             254      24      2015-06-19 17:23 EDT [8h]\ncronndbcacher        64       8      2015-06-19 10:34 EDT [2d]\ncacher              523     171      2015-06-20 11:53 EDT [1M]\nsquid              6269      44      2015-06-21 09:06 EDT [1h]\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The above output shows that there are 6269 faults in the ",(0,a.jsx)(n.code,{children:"squid"})," project, 44 of which were deemed to be unique. The last failure in ",(0,a.jsx)(n.code,{children:"squid"})," occurred on June 21, 2015, at 09:06 EDT, which was 1 hour ago from the time the ",(0,a.jsx)(n.code,{children:"coroner summary"})," command was invoked."]}),"\n",(0,a.jsx)(n.h3,{id:"list",children:"List"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"list"})," sub-command allows you to issue queries and perform analysis on the coroner object store. The basic usage of ",(0,a.jsx)(n.code,{children:"coroner list"})," is as follows:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ coroner list []\ncoroner list aclient\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The command ",(0,a.jsx)(n.code,{children:"coroner list aclient"})," will output information on all faults that have ever occurred in the ",(0,a.jsx)(n.code,{children:"aclient"})," project, grouped by uniqueness."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ coroner list aclient\n[42572cdc2329eb2fe6f149506671328d5a963d76d6639c80b23cdcd0b644289f]\n  Date: Mon Jun 15 17:24:26 2015 - Mon Jun 15 17:29:45 2015\n  Occurrences: 8 (over 0 days)\n  Classification:\n    segv (8 buckets)\n    null (8 buckets)\n    stop (8 buckets)\n  Frames:\n    event_client_init \u2190 aclient_event_client_thread\n\n[a36e5ba7862a49e653a7f5c7dc508423c850521186d457c6473ccbb83ecbafa8]\n  Date: Thu May 14 16:11:17 2015\n  Occurrences: 1 (over 0 days)\n  Classification:\n    ill (1 buckets)\n    stop (1 buckets)\n  Frames:\n    crash_handler \u2190 evhttp_handle_request \u2190 evhttp_get_body \u2190\n      bufferevent_trigger_nolock_ \u2190 bufferevent_readcb \u2190\n      event_persist_closure \u2190 event_process_active_single_queue \u2190\n      event_process_active \u2190 event_base_loop \u2190 agg_core_free_thread \u2190 main\n"})}),"\n",(0,a.jsx)(n.p,{children:"The long string of hex digits is a group identifier, which is a unique SHA256 signature used to identify a group of similar faults. The content below the group signature provides summary data about the fault."}),"\n",(0,a.jsxs)(n.p,{children:["The fault with the identifier ",(0,a.jsx)(n.code,{children:"42572cdc2329eb2fe6f149506671328d5a963d76d6639c80b23cdcd0b644289f"})," occurred 8 times, starting on June 15, 2015, at 17:24:26, with the last occurrence on the same day at 17:29:45. All 8 occurrences of the fault involved application snapshots where the monitored process suffered a segmentation fault from a null dereference. Additionally, all instances of the fault contained faulted threads with the backtrace sequence of ",(0,a.jsx)(n.code,{children:"event_client_init "}),"being called on ",(0,a.jsx)(n.code,{children:"aclient_event_client_thread"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["To view all occurrences of faults in this group, the ",(0,a.jsx)(n.code,{children:"-i"})," option can be used to display instances in the group. The ",(0,a.jsx)(n.code,{children:"-H1"})," option indicates that only the first group should be displayed with ",(0,a.jsx)(n.code,{children:"coroner list"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"[42572cdc2329eb2fe6f149506671328d5a963d76d6639c80b23cdcd0b644289f]\n  Date: Mon Jun 15 17:24:26 2015 - Mon Jun 15 17:29:45 2015\n  Occurrences: 8 (over 0 days)\n  Classification:\n    segv (8 buckets)\n    null (8 buckets)\n    stop (8 buckets)\n  Frames:\n    packrat_client_init \u2190 aclient_packrat_client_thread\n  Objects:\n    [e6702f1063af4e1f8d2b20fa6444e7e5] (Mon Jun 15 17:29:45 2015)\n    [e45fa54e3d6f4f34b72fa50b45daf45a] (Mon Jun 15 17:29:27 2015)\n    [e9ca85077fa54f6baae0d645e5799bba] (Mon Jun 15 17:29:10 2015)\n    [1e2f8d976d70493784d886055ed0fe16] (Mon Jun 15 17:28:54 2015)\n    [8cd727dabcba4046b166a827bf2db6f5] (Mon Jun 15 17:25:17 2015)\n    [b096491ee72f4ddc8428fad00a626def] (Mon Jun 15 17:25:01 2015)\n    [cf513af02a494db58944b92bbfa0dabf] (Mon Jun 15 17:24:43 2015)\n    [7ebdd696c2154130ad66e2563b120edc] (Mon Jun 15 17:24:26 2015)\n"})}),"\n",(0,a.jsx)(n.p,{children:"The shorter sequence of hex characters is a unique identifier for each fault. They can be used to retrieve and edit snapshots, as well as share them. More information about viewing snapshots will be covered later."}),"\n",(0,a.jsx)(n.h4,{id:"key-value-attributes",children:"Key-Value Attributes"}),"\n",(0,a.jsxs)(n.p,{children:["To display key-value attributes, the ",(0,a.jsx)(n.code,{children:"list"})," command can specify certain attributes to be exposed and used as factors for grouping faults. To print all hostname and tag attributes along with instances, use the ",(0,a.jsx)(n.code,{children:"--expand"})," option. In the example below, ",(0,a.jsx)(n.code,{children:"-i 5"})," is passed to display only the five most recent instances of a fault."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ coroner list aclient --expand=hostname,tag -i5 -H1\n[42572cdc2329eb2fe6f149506671328d5a963d76d6639c80b23cdcd0b644289f]\n  Date: Mon Jun 15 17:24:26 2015 - Mon Jun 15 17:29:45 2015\n  Occurrences: 8 (over 0 days)\n  Attributes:\n    tag (1 buckets)\n    hostname (1 buckets)\n  Classification:\n    segv (8 buckets)\n    null (8 buckets)\n    stop (8 buckets)\n  Frames:\n    packrat_client_init \u2190 aclient_packrat_client_thread\n  Objects:\n    [e6702f1063af4e1f8d2b20fa6444e7e5] (Mon Jun 15 17:29:45 2015)\n      Classification: segv null stop\n      Attributes: tag=0.145 hostname=21.bm-aclient.prod.sin1\n    [e45fa54e3d6f4f34b72fa50b45daf45a] (Mon Jun 15 17:29:27 2015)\n      Classification: segv null stop\n      Attributes: tag=0.145 hostname=21.bm-aclient.prod.sin1\n    [e9ca85077fa54f6baae0d645e5799bba] (Mon Jun 15 17:29:10 2015)\n      Classification: segv null stop\n      Attributes: tag=0.145 hostname=21.bm-aclient.prod.sin1\n    [1e2f8d976d70493784d886055ed0fe16] (Mon Jun 15 17:28:54 2015)\n      Classification: segv null stop\n      Attributes: tag=0.145 hostname=21.bm-aclient.prod.sin1\n    [8cd727dabcba4046b166a827bf2db6f5] (Mon Jun 15 17:25:17 2015)\n      Classification: segv null stop\n      Attributes: tag=0.145 hostname=21.bm-aclient.prod.sin1\n    [b096491ee72f4ddc8428fad00a626def] (Mon Jun 15 17:25:01 2015)\n      Classification: segv null stop\n      Attributes: tag=0.145 hostname=21.bm-aclient.prod.sin1\n    [cf513af02a494db58944b92bbfa0dabf] (Mon Jun 15 17:24:43 2015)\n      Classification: segv null stop\n      Attributes: tag=0.145 hostname=21.bm-aclient.prod.sin1\n    [7ebdd696c2154130ad66e2563b120edc] (Mon Jun 15 17:24:26 2015)\n      Classification: segv null stop\n      Attributes: tag=0.145 hostname=21.bm-aclient.prod.sin1\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"--frequency"})," option can be used to display histograms of all values associated with a key. For example, to request a histogram of all affected tag attributes for a group, use ",(0,a.jsx)(n.code,{children:"coroner list aclient --expand=hostname,tag -i5 -H1 --frequency=tag"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ coroner list aclient --expand=hostname,tag -i5 -H1 --frequency=tag\n[42572cdc2329eb2fe6f149506671328d5a963d76d6639c80b23cdcd0b644289f]\n  Date: Mon Jun 15 17:24:26 2015 - Mon Jun 15 17:29:45 2015\n  Occurrences: 8 (over 0 days)\n  Attributes:\n    tag (1 buckets)\n      0.145                                          8 100.00% \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\n    hostname (1 buckets)\n  Classification:\n    segv (8 buckets)\n    null (8 buckets)\n    stop (8 buckets)\n  Frames:\n    packrat_client_init \u2190 aclient_packrat_client_thread\n  Objects:\n    [e6702f1063af4e1f8d2b20fa6444e7e5] (Mon Jun 15 17:29:45 2015)\n      Classification: segv null stop\n      Attributes: tag=0.145 hostname=21.bm-aclient.prod.sin1\n    [e45fa54e3d6f4f34b72fa50b45daf45a] (Mon Jun 15 17:29:27 2015)\n      Classification: segv null stop\n      Attributes: tag=0.145 hostname=21.bm-aclient.prod.sin1\n    [e9ca85077fa54f6baae0d645e5799bba] (Mon Jun 15 17:29:10 2015)\n      Classification: segv null stop\n      Attributes: tag=0.145 hostname=21.bm-aclient.prod.sin1\n    [1e2f8d976d70493784d886055ed0fe16] (Mon Jun 15 17:28:54 2015)\n      Classification: segv null stop\n      Attributes: tag=0.145 hostname=21.bm-aclient.prod.sin1\n    [8cd727dabcba4046b166a827bf2db6f5] (Mon Jun 15 17:25:17 2015)\n      Classification: segv null stop\n      Attributes: tag=0.145 hostname=21.bm-aclient.prod.sin1\n    [b096491ee72f4ddc8428fad00a626def] (Mon Jun 15 17:25:01 2015)\n      Classification: segv null stop\n      Attributes: tag=0.145 hostname=21.bm-aclient.prod.sin1\n    [cf513af02a494db58944b92bbfa0dabf] (Mon Jun 15 17:24:43 2015)\n      Classification: segv null stop\n      Attributes: tag=0.145 hostname=21.bm-aclient.prod.sin1\n    [7ebdd696c2154130ad66e2563b120edc] (Mon Jun 15 17:24:26 2015)\n      Classification: segv null stop\n      Attributes: tag=0.145 hostname=21.bm-aclient.prod.sin1\n"})}),"\n",(0,a.jsx)(n.h2,{id:"saving-preferences",children:"Saving Preferences"}),"\n",(0,a.jsxs)(n.p,{children:["To avoid passing commonly used options to ",(0,a.jsx)(n.code,{children:"coroner list"})," and other ",(0,a.jsx)(n.code,{children:"coroner"})," sub-commands for every invocation, you can use the default configuration block in your configuration file to specify certain options to always be set. Here's an example configuration:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"[universe]\nname=company\nread=127.0.0.1:4097\n\n[default]\nlist.frequency=environment,tag,dc,collection\nlist.expand=environment,tag,dc,collection,application,hostname\nlist.sort=hostname\nlist.instances=3\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This specifies that whenever the ",(0,a.jsx)(n.code,{children:"list"})," sub-command is invoked, it should have ",(0,a.jsx)(n.code,{children:"--frequency=environment,tag,dc,collection"}),", ",(0,a.jsx)(n.code,{children:"--expand=environment,tag,dc,collection,application,hostname"}),", ",(0,a.jsx)(n.code,{children:"--sort=hostname"}),", and ",(0,a.jsx)(n.code,{children:"--instances=3"})," prepended to the list of options supplied to the command-line."]}),"\n",(0,a.jsxs)(n.p,{children:["The general form of the default configuration block is ",(0,a.jsx)(n.code,{children:".="}),". For example, ",(0,a.jsx)(n.code,{children:"X.Y=Z"})," specifies that if ",(0,a.jsx)(n.code,{children:"coroner X"})," is specified, it should be interpreted as if it were ",(0,a.jsx)(n.code,{children:"coroner X --Y=Z"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.p,{children:"Here are some common use-cases:"}),"\n",(0,a.jsx)(n.h3,{id:"sort-groups-by-recent-activity",children:"Sort Groups by Recent Activity"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"-R"})," option allows you to sort groups by the date of recent activity. For example: ",(0,a.jsx)(n.code,{children:"coroner list project -R"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"list-all-ativity-in-the-last-week",children:"List All Ativity in The Last Week"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"--age"})," option can be used to filter groups in a recent time window. For example, ",(0,a.jsx)(n.code,{children:"coroner list project --age=1w"})," lists all groups and faults with activity in the past week."]}),"\n",(0,a.jsx)(n.h3,{id:"find-groups-with-a-certain-classification",children:"Find Groups With a Certain Classification"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"--classifier"})," option is used to filter groups by classification. For example, ",(0,a.jsx)(n.code,{children:"coroner list project --classifier=null"})," displays all faults that were classified as a NULL dereference. For a complete list of classifiers, visit the ptrace page."]}),"\n",(0,a.jsx)(n.h3,{id:"find-all-groups-by-a-callstack",children:"Find All Groups by a Callstack"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"--frames"})," option is used to specify a sequence of functions to search for. For example, ",(0,a.jsx)(n.code,{children:"coroner list project --frames=A,B,C"})," finds all groups of faults that have a backtrace that matches the regular expression A, B, and C in that order. For example, ",(0,a.jsx)(n.code,{children:"--frames=^ck_,^worker"})," would match a callstack of ",(0,a.jsx)(n.code,{children:"ck_hs_put <-><-><-><-></-></-></-></->"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"aggregate-listed-groups-by-key-value",children:"Aggregate Listed groups by Key-Value"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"--aggregate"})," option can be used to aggregate ",(0,a.jsx)(n.code,{children:"coroner list"})," output. For example, ",(0,a.jsx)(n.code,{children:"coroner list --aggregate=tag"})," aggregates all crashes resulting from a list by the tag attribute. It is also possible to aggregate by functions in a callstack by using ",(0,a.jsx)(n.code,{children:"::frames"}),". For example, ",(0,a.jsx)(n.code,{children:"coroner list --aggregate=::frames"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"download-a-snapshot-to-disk",children:"Download a Snapshot to Disk"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"coroner get"})," command can be used to view a snapshot. For example, ",(0,a.jsx)(n.code,{children:"coroner get aclient e9ca85077fa54f6baae0d645e5799bba"})," opens the snapshot ",(0,a.jsx)(n.code,{children:"e9ca85077fa54f6baae0d645e5799bba"})," of the ",(0,a.jsx)(n.code,{children:"aclient"})," project locally. The ",(0,a.jsx)(n.code,{children:"-o"})," option is used to store it to a local file. For example, ",(0,a.jsx)(n.code,{children:"coroner get -o copy.btt aclient e9ca85077fa54f6baae0d645e5799bba"})," downloads the specified snapshot to ",(0,a.jsx)(n.code,{children:"copy.btt"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"additional-information",children:"Additional Information"}),"\n",(0,a.jsxs)(n.p,{children:["For more information, refer to ",(0,a.jsx)(n.code,{children:"coroner list --help"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var a=t(18215);const o={tabItem:"tabItem_Ymn6"};var r=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var a=t(96540),o=t(18215),r=t(23104),s=t(56347),i=t(205),c=t(57485),l=t(31682),d=t(89466);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:o}}=e;return{value:n,label:t,attributes:a,default:o}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const o=(0,s.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,r=h(e),[s,c]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[l,u]=p({queryString:t,groupId:o}),[b,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,r]=(0,d.Dv)(t);return[o,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:o}),m=(()=>{const e=l??b;return f({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{m&&c(m)}),[m]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var g=t(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function x(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),o=i[t].value;o!==a&&(l(n),s(o))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...r,className:(0,o.A)("tabs__item",m.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:o}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function y(e){const n=b(e);return(0,v.jsxs)("div",{className:(0,o.A)("tabs-container",m.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(j,{...e,...n})]})}function w(e){const n=(0,g.A)();return(0,v.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var a=t(96540);const o={},r=a.createContext(o);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);