"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[1640],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=l(r),d=o,f=c["".concat(u,".").concat(d)]||c[d]||m[d]||s;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[c]="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},47072:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const s={sidebar_position:100},i="\ud83d\udfe2 Prompting de r\xf4le",a={unversionedId:"basics/roles",id:"basics/roles",title:"\ud83d\udfe2 Prompting de r\xf4le",description:'Une autre technique de prompting consiste \xe0 attribuer un r\xf4le \xe0 l\'IA. Par exemple, votre prompt pourrait commencer par "Vous \xeates m\xe9decin" ou "Vous \xeates avocat", puis demander \xe0 l\'IA de r\xe9pondre \xe0 une question m\xe9dicale ou juridique. Voici un exemple:',source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/basics/roles.md",sourceDirName:"basics",slug:"/basics/roles",permalink:"/fr/docs/basics/roles",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/basics/roles.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 LLM Settings",permalink:"/fr/docs/basics/configuration_hyperparameters"},next:{title:"\ud83d\udfe2 Understanding AI Minds",permalink:"/fr/docs/basics/world"}},u={},l=[{value:"Notes",id:"notes",level:2},{value:"Exemples",id:"exemples",level:2}],p={toc:l},c="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-prompting-de-r\xf4le"},"\ud83d\udfe2 Prompting de r\xf4le"),(0,o.kt)("p",null,'Une autre technique de prompting consiste \xe0 attribuer un r\xf4le \xe0 l\'IA. Par exemple, votre prompt pourrait commencer par "Vous \xeates m\xe9decin" ou "Vous \xeates avocat", puis demander \xe0 l\'IA de r\xe9pondre \xe0 une question m\xe9dicale ou juridique. Voici un exemple:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Vous \xeates un brillant math\xe9maticien qui peut r\xe9soudre n'importe quel probl\xe8me dans le monde.\nEssayez de r\xe9soudre le probl\xe8me suivant :\n\nQu'est-ce que 100*100/400*56\xa0?\n\nLa r\xe9ponse est 1400.\n")),(0,o.kt)("p",null,"La r\xe9ponse de l'IA (GPT-3 davinci-003) est surlign\xe9e en vert\xa0:"),(0,o.kt)("p",null,"Il s'agit d'une r\xe9ponse correcte, mais si l'IA avait simplement \xe9t\xe9 prompt\xe9 avec\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Qu'est-ce que 100*100/400*56\xa0?"),", elle aurait r\xe9pondu\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"280"),"\xa0(incorrect). "),(0,o.kt)("p",null,"Lorsque nous attribuons un r\xf4le \xe0 l'IA, nous lui donnons un certain contexte. Ce contexte aide l'IA \xe0 mieux comprendre la question. Avec une meilleure compr\xe9hension de la question, l'IA donne souvent de meilleures r\xe9ponses. "),(0,o.kt)("h2",{id:"notes"},"Notes",(0,o.kt)("a",{parentName:"h2",href:"https://learnprompting.org/docs/basics/roles#notes"})),(0,o.kt)("p",null,"Cette technique n'est plus aussi efficace avec des IA plus modernes (par exemple GPT-3 davinci-003). Cependant, j'ai utilis\xe9 GPT-3 davinci-003 pour cet exemple, il semble donc que le prompting de r\xf4le soit toujours au moins un outil quelque peu efficace."),(0,o.kt)("h2",{id:"exemples"},"Exemples"),(0,o.kt)("p",null,"Vous pouvez trouver d'autres prompts int\xe9ressants dans dans les repertoires d\u2019archive\xa0",(0,o.kt)("a",{parentName:"p",href:"https://github.com/f/awesome-chatgpt-prompts#prompts"},"Awesome ChatGPT Prompts"),"\xa0sur GitHub. Ces prompts ont \xe9t\xe9 con\xe7ues pour\xa0",(0,o.kt)("em",{parentName:"p"},"ChatGPT"),", mais elles fonctionnent probablement avec d'autres IA, et vous pouvez \xe9galement vous en inspirer pour cr\xe9er vos propres prompts. Voyons deux exemples:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Jouer les \xe9tymologistes"),(0,o.kt)("p",{parentName:"blockquote"},"veux que vous jouiez le r\xf4le d'un \xe9tymologiste. Je vous donnerai un mot et vous devrez en rechercher l'origine, en remontant jusqu'\xe0 ses racines anciennes. Vous devrez \xe9galement fournir des informations sur la mani\xe8re dont le sens du mot a \xe9volu\xe9 au fil du temps, le cas \xe9ch\xe9ant. Ma premi\xe8re demande est la suivante : \"Je veux retrouver l'origine du mot 'pizza'\".")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Jouer les d\xe9ments"),(0,o.kt)("p",{parentName:"blockquote"},"Je veux que vous agissiez comme un fou. Les phrases du fou sont d\xe9nu\xe9es de sens. Les mots utilis\xe9s par le lunatique sont totalement arbitraires. Le lunatique ne fait aucunement des phrases logiques. Ma premi\xe8re demande de suggestion est \"J'ai besoin d'aide pour cr\xe9er des phrases lunatiques pour ma nouvelle s\xe9rie intitul\xe9e Hot Skull, alors \xe9crivez 10 phrases pour moi\".")),(0,o.kt)("p",null,"\ud83d\udea7 Cette page a besoin de citations \ud83d\udea7"))}m.isMDXComponent=!0}}]);