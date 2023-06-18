"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[8930],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=c(r),m=i,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(d,o(o({ref:t},l),{},{components:r})):n.createElement(d,o({ref:t},l))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[f]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},77309:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const a={sidebar_position:10},o="\ud83d\udfe2 Filtering",s={unversionedId:"prompt_hacking/defensive_measures/filtering",id:"prompt_hacking/defensive_measures/filtering",title:"\ud83d\udfe2 Filtering",description:"Filtering is a common technique for preventing prompt hacking(@kang2023exploiting). There are a few types of filtering, but the basic idea is to check for words and phrase in the initial prompt or the output that should be banned. You can use a blacklist or even a whitelist for these purpose(@selvi2022exploring). A blacklist is a list of words and phrases that should be banned, and a whitelist is a list of words and phrases that should be allowed.",source:"@site/docs/prompt_hacking/defensive_measures/filtering.md",sourceDirName:"prompt_hacking/defensive_measures",slug:"/prompt_hacking/defensive_measures/filtering",permalink:"/ru/docs/prompt_hacking/defensive_measures/filtering",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/prompt_hacking/defensive_measures/filtering.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Overview",permalink:"/ru/docs/prompt_hacking/defensive_measures/overview"},next:{title:"\ud83d\udfe2 Instruction Defense",permalink:"/ru/docs/prompt_hacking/defensive_measures/instruction"}},p={},c=[],l={toc:c},f="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(f,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-filtering"},"\ud83d\udfe2 Filtering"),(0,i.kt)("p",null,"Filtering is a common technique for preventing prompt hacking",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". There are a few types of filtering, but the basic idea is to check for words and phrase in the initial prompt or the output that should be banned. You can use a blacklist or even a whitelist for these purpose",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),". A blacklist is a list of words and phrases that should be banned, and a whitelist is a list of words and phrases that should be allowed."),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Kang, D., Li, X., Stoica, I., Guestrin, C., Zaharia, M., & Hashimoto, T. (2023). Exploiting Programmatic Behavior of LLMs: Dual-Use Through Standard Security Attacks.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"Selvi, J. (2022). Exploring Prompt Injection Attacks. https://research.nccgroup.com/2022/12/05/exploring-prompt-injection-attacks/\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);