"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[3100],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>g});var t=n(67294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),p=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},u=function(e){var a=p(e.components);return t.createElement(l.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?t.createElement(g,s(s({ref:a},u),{},{components:n})):t.createElement(g,s({ref:a},u))}));function g(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54405:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var t=n(87462),o=(n(67294),n(3905));const r=n.p+"assets/images/pal-08b7777800187b41a639d2a8129e7756.webp",s={sidebar_position:4},i="\ud83d\udfe1 Codigo como Razonamiento",l={unversionedId:"advanced_applications/pal",id:"advanced_applications/pal",title:"\ud83d\udfe1 Codigo como Razonamiento",description:"Los Modelos de Lenguaje Asistidos por Programa (PAL, por sus siglas en ingl\xe9s) son otro ejemplo de un sistema MRKL. Cuando se les hace una pregunta, los PAL son capaces de escribir c\xf3digo que resuelve esa pregunta. Env\xedan el c\xf3digo a un tiempo de ejecuci\xf3n program\xe1tico para obtener el resultado. El funcionamiento de PAL es en contraposici\xf3n al de CoT; el razonamiento intermedio de PAL es c\xf3digo, mientras que el de CoT es lenguaje natural.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/advanced_applications/pal.md",sourceDirName:"advanced_applications",slug:"/advanced_applications/pal",permalink:"/es/docs/advanced_applications/pal",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/advanced_applications/pal.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe1 LLMs que razonan y act\xfaan",permalink:"/es/docs/advanced_applications/react"},next:{title:"\u2696\ufe0f Reliability",permalink:"/es/docs/category/\ufe0f-reliability"}},p={},u=[{value:"Ejemplo",id:"ejemplo",level:2},{value:"M\xe1s",id:"m\xe1s",level:2}],d={toc:u},c="wrapper";function m(e){let{components:a,...n}=e;return(0,o.kt)(c,(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-codigo-como-razonamiento"},"\ud83d\udfe1 Codigo como Razonamiento"),(0,o.kt)("p",null,"Los Modelos de Lenguaje Asistidos por Programa (PAL, por sus siglas en ingl\xe9s) son otro ejemplo de un sistema MRKL. Cuando se les hace una pregunta, los PAL son capaces de ",(0,o.kt)("strong",{parentName:"p"},"escribir c\xf3digo")," que resuelve esa pregunta. Env\xedan el c\xf3digo a un tiempo de ejecuci\xf3n program\xe1tico para obtener el resultado. El funcionamiento de PAL es en contraposici\xf3n al de CoT; el razonamiento intermedio de PAL es c\xf3digo, mientras que el de CoT es lenguaje natural."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:r,style:{width:"500px"}})),(0,o.kt)("div",{style:{textAlign:"center"}},"Ejemplo de PAL (Gao et al.)"),(0,o.kt)("p",null,"Una cosa importante a tener en cuenta es que PAL en realidad entrelaza el lenguaje natural (NL) y el c\xf3digo. En la imagen anterior, en azul est\xe1n el razonamiento en lenguaje natural que PAL genera. Aunque no se muestra en la imagen, PAL en realidad genera '","#","' antes de cada l\xednea de razonamiento NL, para que sean interpretados como comentarios por el tiempo de ejecuci\xf3n program\xe1tico."),(0,o.kt)("h2",{id:"ejemplo"},"Ejemplo"),(0,o.kt)("p",null,"Veamos un ejemplo de PAL resolviendo una pregunta de matem\xe1ticas. Utilizo un prompt de 3 disparos, que es una versi\xf3n simplificada de ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reasoning-machines/pal/blob/main/pal/prompt/math_prompts.py"},"este"),(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,o.kt)("p",null,"Para esto, usar\xe9 langchain, un paquete de Python para encadenar la funcionalidad de LLM. Primero, se necesitan algunas instalaciones:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'!pip install langchain==0.0.26\n!pip install openai\nfrom langchain.llms import OpenAI\nimport os\nos.environ["OPENAI_API_KEY"] = "sk-YOUR_KEY_HERE"\n')),(0,o.kt)("p",null,"Luego, podemos crear una instancia de GPT-3 davinci-002 (se hace una llamada a la API cuando usamos este objeto)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"llm = OpenAI(model_name='text-davinci-002', temperature=0)\n")),(0,o.kt)("p",null,"Aqu\xed est\xe1 el prompt de tres disparos:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'MATH_PROMPT = \'\'\'\nQ: Hab\xeda nueve computadoras en la sala de servidores. Cada d\xeda se instalaron cinco computadoras m\xe1s, de lunes a jueves. \xbfCu\xe1ntas computadoras hay ahora en la sala de servidores?\n\n# Soluci\xf3n en Python:\n"""Hab\xeda nueve computadoras en la sala de servidores. Cada d\xeda se instalaron cinco computadoras m\xe1s, de lunes a jueves. \xbfCu\xe1ntas computadoras hay ahora en la sala de servidores?"""\ncomputadoras_iniciales = 9\ncomputadoras_por_dia = 5\nnum_dias = 4  # 4 d\xedas entre lunes y jueves\ncomputadoras_agregadas = computadoras_por_dia * num_dias\ncomputadoras_totales = computadoras_iniciales + computadoras_agregadas\nresultado = computadoras_totales\nreturn resultado\n\n\nQ: Shawn tiene cinco juguetes. Para Navidad, recibi\xf3 dos juguetes de su mam\xe1 y dos juguetes de su pap\xe1. \xbfCu\xe1ntos juguetes tiene ahora?\n\n# Soluci\xf3n en Python:\n"""Shawn tiene cinco juguetes. Para Navidad, recibi\xf3 dos juguetes de su mam\xe1 y dos juguetes de su pap\xe1. \xbfCu\xe1ntos juguetes tiene ahora?\ntoys_initial = 5\nmom_toys = 2\ndad_toys = 2\ntotal_received = mom_toys + dad_toys\ntotal_toys = toys_initial + total_received\nresult = total_toys\n\n\nP: Jason ten\xeda 20 chupetines. Le dio algunos chupetines a Denny. Ahora Jason tiene 12 chupetines. \xbfCu\xe1ntos chupetines le dio Jason a Denny?\n\n# Soluci\xf3n en Python:\n"""Jason ten\xeda 20 chupetines. Le dio algunos chupetines a Denny. Ahora Jason tiene 12 chupetines. \xbfCu\xe1ntos chupetines le dio Jason a Denny?"""\njason_lollipops_initial = 20\njason_lollipops_after = 12\ndenny_lollipops = jason_lollipops_initial - jason_lollipops_after\nresult = denny_lollipops\n\nP: {pregunta}\n\n# Soluci\xf3n en Python:\n\'\'\'\n')),(0,o.kt)("p",null,"Ahora podemos pasar la pregunta combinada a GPT-3."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"llm_out = llm(MATH_PROMPT.format(question=question))\nprint(llm_out)\n")),(0,o.kt)("p",null,"La salida es:"),(0,o.kt)("pre",null,(0,o.kt)("span",{style:{backgroundColor:"#d2f4d3"}},'"""Emma tom\xf3 un vuelo de 60 minutos a Seattle. Luego tom\xf3 un viaje en tren de 2 horas a Portland, y luego un viaje en autob\xfas de 30 minutos a Vancouver. \xbfCu\xe1nto tiempo le llev\xf3 llegar a Vancouver?"""',(0,o.kt)("br",null),"plane_ride = 60",(0,o.kt)("br",null),"train_ride = 2 * 60  # 2 horas en minutos",(0,o.kt)("br",null),"bus_ride = 30",(0,o.kt)("br",null),"total_time = plane_ride + train_ride + bus_ride",(0,o.kt)("br",null),"result = total_time")),(0,o.kt)("p",null,"Finalmente, podemos pasar este c\xf3digo a un entorno de Python para obtener la respuesta:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"exec(llm_out)\nprint(result)\n")),(0,o.kt)("p",null,"La salida es ",(0,o.kt)("strong",{parentName:"p"},"210"),", que es correcta."),(0,o.kt)("p",null,"Vea el cuaderno de Jupyter para este ejemplo aqu\xed. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/trigaten/Learn_Prompting/tree/main/docs/code_examples/PAL.ipynb"},"here"),"."),(0,o.kt)("h2",{id:"m\xe1s"},"M\xe1s"),(0,o.kt)("p",null,"Consulte tambi\xe9n ",(0,o.kt)("a",{parentName:"p",href:"https://colab.research.google.com/drive/1u4_RsdI0E79PCMDdcPiJUzYhdnjoXeXc?usp=sharing#scrollTo=Ba0ycacK4i1V"},"el ejemplo de colab de PAL."),"."),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"Gao, L., Madaan, A., Zhou, S., Alon, U., Liu, P., Yang, Y., Callan, J., & Neubig, G. (2022). PAL: Program-aided Language Models.\n",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);