"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[833],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},f="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),f=l(r),u=o,d=f["".concat(p,".").concat(u)]||f[u]||c[u]||a;return r?n.createElement(d,i(i({ref:t},m),{},{components:r})):n.createElement(d,i({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[f]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},24025:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var n=r(87462),o=(r(67294),r(3905));const a=r.p+"assets/images/prompt_tuning-6a04ae02ae3666c98fd9f1c5e9131d34.webp",i={sidebar_position:1},s="\ud83d\udd34 Soft Prompts",p={unversionedId:"trainable/soft_prompting",id:"trainable/soft_prompting",title:"\ud83d\udd34 Soft Prompts",description:"Prompt tuning(@lester2021power), an alternative to model fine tuning(@khashabi2021prompt), freezes the model weights, and updates the parameters of a prompt. The resultant prompt is a 'soft prompt'.",source:"@site/docs/trainable/soft_prompting.md",sourceDirName:"trainable",slug:"/trainable/soft_prompting",permalink:"/ar/docs/trainable/soft_prompting",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/trainable/soft_prompting.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcaa Prompt Tuning",permalink:"/ar/docs/category/-prompt-tuning"},next:{title:"\ud83d\udd34 Interpretable Soft Prompts",permalink:"/ar/docs/trainable/discretized"}},l={},m=[{value:"How it works",id:"how-it-works",level:2}],f={toc:m},c="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-soft-prompts"},"\ud83d\udd34 Soft Prompts"),(0,o.kt)("p",null,"Prompt tuning",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),", an alternative to model fine tuning",(0,o.kt)("sup",{parentName:"p",id:"fnref-2"},(0,o.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),", freezes the model weights, and updates the parameters of a prompt. The resultant prompt is a 'soft prompt'."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:a,style:{width:"500px"}})),(0,o.kt)("div",{style:{textAlign:"center"}},"Model Tuning vs Prompt Tuning (Lester et al.)"),(0,o.kt)("p",null,"The above image contrasts model tuning with prompt tuning.\nIn model tuning, you finetune the same model on different tasks. This gives you\na few different models, with which you can't necessarily batch inputs easily."),(0,o.kt)("p",null,"On the other hand, prompt tuning lets you use the same model for all tasks. You\njust need to append the proper prompts at inference time, which makes batching across\ndifferent tasks easier. This is pretty much the same advantage that regular prompting\nhas. Additionally, soft prompts trained for a single model across\nmultiple tasks will often be of the same token length."),(0,o.kt)("h2",{id:"how-it-works"},"How it works"),(0,o.kt)("p",null,"To understand the basic logic behind soft prompting, let's think about how ",(0,o.kt)("strong",{parentName:"p"},"model inference")," works\non a given prompt: ",(0,o.kt)("inlineCode",{parentName:"p"},"What's 2+2?"),"."),(0,o.kt)("p",null,"1) It might be tokenized as ",(0,o.kt)("inlineCode",{parentName:"p"},"What, 's, 2, +, 2, ?"),". "),(0,o.kt)("p",null,"2) Then, each token will be converted to a vector of values."),(0,o.kt)("p",null,"3) This vectors of values can be considered as model parameters. The model can be further\ntrained, only adjusting the weights of these prompts."),(0,o.kt)("p",null,"Note that as soon as we start updating these weights, the vectors of the tokens no\nlonger correspond to actual embeddings from the vocabulary."),(0,o.kt)("h1",{id:"results"},"Results"),(0,o.kt)("p",null,"Prompt tuning performs better with larger models. Larger models also require less\nsoft prompt tokens. Regardless, more than 20 tokens does not yield significant performance gains."),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"Lester, B., Al-Rfou, R., & Constant, N. (2021). The Power of Scale for Parameter-Efficient Prompt Tuning.\n",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-2"},"Khashabi, D., Lyu, S., Min, S., Qin, L., Richardson, K., Welleck, S., Hajishirzi, H., Khot, T., Sabharwal, A., Singh, S., & Choi, Y. (2021). Prompt Waywardness: The Curious Case of Discretized Interpretation of Continuous Prompts.\n",(0,o.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);