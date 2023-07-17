"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[5060],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>b});var o=n(67294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,o,t=function(e,a){if(null==e)return{};var n,o,t={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=o.createContext({}),c=function(e){var a=o.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},u=function(e){var a=c(e.components);return o.createElement(l.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},m=o.forwardRef((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=t,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?o.createElement(b,r(r({ref:a},u),{},{components:n})):o.createElement(b,r({ref:a},u))}));function b(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[d]="string"==typeof e?e:t,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66050:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>u,default:()=>k,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var o=n(87462),t=(n(67294),n(3905));const i=n.p+"assets/images/chatbot_from_kb_intents-251bc10434c53c268ea9f0ec6aa1a3fb.webp",r=n.p+"assets/images/chatbot_from_kb_gpt3-57397fbae518c8d8fa24c69127b94d27.webp",s=n.p+"assets/images/chatbot_from_kb_gpt3_organized-051827dc17fc79404dc60e97629a7215.webp",l=(n.p,n.p+"assets/images/chatbot_from_kb_login-748a546197820860fd9403bdb4382d8e.webp"),c={sidebar_position:40},u="\ud83d\udfe2 Chatbot + Base de Conocimiento",d={unversionedId:"applied_prompting/build_chatbot_from_kb",id:"applied_prompting/build_chatbot_from_kb",title:"\ud83d\udfe2 Chatbot + Base de Conocimiento",description:"Los avances recientes en modelos de lenguaje grandes (LLMs, por sus siglas en ingl\xe9s) como GPT-3 y ChatGPT han creado mucha expectaci\xf3n en la industria tecnol\xf3gica. Estos modelos son incre\xedblemente poderosos para la generaci\xf3n de contenido, pero tambi\xe9n tienen algunas desventajas, como el sesgo(@nadeem-etal-2021-stereoset) y las alucinaciones(@Ji_2022). Una \xe1rea en la que estos LLMs pueden ser particularmente \xfatiles es en el desarrollo de chatbots.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/applied_prompting/build_chatbot_from_kb.md",sourceDirName:"applied_prompting",slug:"/applied_prompting/build_chatbot_from_kb",permalink:"/es/docs/applied_prompting/build_chatbot_from_kb",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/applied_prompting/build_chatbot_from_kb.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 ChatGPT a partir de GPT-3",permalink:"/es/docs/applied_prompting/build_chatgpt"},next:{title:"\ud83d\ude80 Advanced Applications",permalink:"/es/docs/category/-advanced-applications"}},p={},m=[{value:"Chatbots basados en Intenci\xf3n",id:"chatbots-basados-en-intenci\xf3n",level:2},{value:"C\xf3mo puede ayudar GPT-3",id:"c\xf3mo-puede-ayudar-gpt-3",level:2},{value:"\xbfPor qu\xe9 no podemos pasar toda la KB a GPT-3?",id:"por-qu\xe9-no-podemos-pasar-toda-la-kb-a-gpt-3",level:2},{value:"C\xf3mo podr\xeda funcionar un chatbot con GPT-3",id:"c\xf3mo-podr\xeda-funcionar-un-chatbot-con-gpt-3",level:2},{value:"Generaci\xf3n de respuestas con GPT-3",id:"generaci\xf3n-de-respuestas-con-gpt-3",level:2},{value:"Desambiguaci\xf3n de preguntas con GPT-3",id:"desambiguaci\xf3n-de-preguntas-con-gpt-3",level:2},{value:"Problemas al generar respuestas con GPT-3",id:"problemas-al-generar-respuestas-con-gpt-3",level:2},{value:"conclusi\xf3n",id:"conclusi\xf3n",level:2}],b={toc:m},g="wrapper";function k(e){let{components:a,...n}=e;return(0,t.kt)(g,(0,o.Z)({},b,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"-chatbot--base-de-conocimiento"},"\ud83d\udfe2 Chatbot + Base de Conocimiento"),(0,t.kt)("p",null,"Los avances recientes en modelos de lenguaje grandes (LLMs, por sus siglas en ingl\xe9s) como ",(0,t.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2005.14165"},"GPT-3")," y ",(0,t.kt)("a",{parentName:"p",href:"https://chat.openai.com/chat"},"ChatGPT")," han creado mucha expectaci\xf3n en la industria tecnol\xf3gica. Estos modelos son incre\xedblemente poderosos para la generaci\xf3n de contenido, pero tambi\xe9n tienen algunas desventajas, como el sesgo",(0,t.kt)("sup",{parentName:"p",id:"fnref-1"},(0,t.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," y las alucinaciones",(0,t.kt)("sup",{parentName:"p",id:"fnref-2"},(0,t.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),". Una \xe1rea en la que estos LLMs pueden ser particularmente \xfatiles es en el desarrollo de chatbots."),(0,t.kt)("h2",{id:"chatbots-basados-en-intenci\xf3n"},"Chatbots basados en Intenci\xf3n"),(0,t.kt)("p",null,'Los chatbots tradicionales suelen estar basados en intenciones, lo que significa que son dise\xf1ados para responder a intenciones de usuario espec\xedficas. Cada intenci\xf3n est\xe1 compuesta por un conjunto de preguntas de muestra y una respuesta asociada. Por ejemplo, la intenci\xf3n "Clima" puede incluir preguntas de muestra como "\xbfC\xf3mo est\xe1 el clima hoy?" o "\xbfLlover\xe1 hoy?" y una respuesta como "Hoy estar\xe1 soleado". Cuando un usuario hace una pregunta, el chatbot compara la pregunta con las preguntas de muestra m\xe1s similares asociadas a la intenci\xf3n, y devuelve la respuesta correspondiente'),(0,t.kt)("div",{style:{textAlign:"left"}},(0,t.kt)("img",{src:i,style:{width:"700px"}}),(0,t.kt)("p",{style:{color:"gray",fontSize:"12px",fontStyle:"italic"}},"C\xf3mo funciona un chatbot tradicional basado en intenciones. Imagen del autor.")),(0,t.kt)("p",null,'Sin embargo, los chatbots basados en intenciones tienen su propio conjunto de problemas. Un problema es que requieren una gran cantidad de intenciones espec\xedficas para dar respuestas espec\xedficas. Por ejemplo, las expresiones de usuario como "No puedo iniciar sesi\xf3n", "Olvid\xe9 mi contrase\xf1a" o "Error de inicio de sesi\xf3n" pueden necesitar tres respuestas diferentes y, por lo tanto, tres intenciones diferentes, aunque todas son bastante similares.'),(0,t.kt)("h2",{id:"c\xf3mo-puede-ayudar-gpt-3"},"C\xf3mo puede ayudar GPT-3"),(0,t.kt)("p",null,"Aqu\xed es donde GPT-3 puede ser especialmente \xfatil. En lugar de tener muchas intenciones muy espec\xedficas, cada intenci\xf3n puede ser m\xe1s amplia y aprovechar un documento de su ",(0,t.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Knowledge_base"},"Base de Conocimiento"),". Una Base de Conocimiento (KB, por sus siglas en ingl\xe9s) es informaci\xf3n almacenada como datos estructurados y no estructurados, listos para ser utilizados para an\xe1lisis o inferencia. Su KB puede estar compuesta de una serie de documentos que explican c\xf3mo usar sus productos."),(0,t.kt)("p",null,'De esta manera, cada intenci\xf3n est\xe1 asociada con un documento en lugar de una lista de preguntas y una respuesta espec\xedfica, por ejemplo, una intenci\xf3n para "problemas de inicio de sesi\xf3n", otra para "c\xf3mo suscribirse", etc. Cuando un usuario hace una pregunta sobre el inicio de sesi\xf3n, podemos pasar el documento "problemas de inicio de sesi\xf3n" a GPT-3 como informaci\xf3n de contexto y generar una respuesta espec\xedfica a la pregunta del usuario.'),(0,t.kt)("div",{style:{textAlign:"left"}},(0,t.kt)("img",{src:r,style:{width:"700px"}}),(0,t.kt)("p",{style:{color:"gray",fontSize:"12px",fontStyle:"italic"}},"C\xf3mo podr\xeda funcionar un chatbot aprovechando GPT-3. Imagen del autor.")),(0,t.kt)("p",null,'Este enfoque reduce el n\xfamero de intenciones que necesitan ser gestionadas y permite respuestas mejor adaptadas a cada pregunta. Adem\xe1s, si el documento asociado con la intenci\xf3n describe diferentes procesos (por ejemplo, un proceso para "inicio de sesi\xf3n en el sitio web" y otro para "inicio de sesi\xf3n en la aplicaci\xf3n m\xf3vil"), GPT-3 puede preguntar autom\xe1ticamente al usuario para obtener aclaraciones antes de dar la respuesta final.'),(0,t.kt)("h2",{id:"por-qu\xe9-no-podemos-pasar-toda-la-kb-a-gpt-3"},"\xbfPor qu\xe9 no podemos pasar toda la KB a GPT-3?"),(0,t.kt)("p",null,"Hoy en d\xeda, los LLM como GPT-3 tienen un tama\xf1o m\xe1ximo de prompt de aproximadamente 4k tokens (para el modelo ",(0,t.kt)("a",{parentName:"p",href:"https://beta.openai.com/docs/models/gpt-3"},(0,t.kt)("inlineCode",{parentName:"a"},"text-davinci-003")),"), que es mucho pero no suficiente para alimentar toda la base de conocimientos en un solo prompt. Los LLM tienen un tama\xf1o m\xe1ximo de prompt por razones computacionales, ya que generar texto con ellos implica una serie de c\xe1lculos que aumentan r\xe1pidamente a medida que aumenta el tama\xf1o del prompt."),(0,t.kt)("p",null,"Los futuros LLM pueden no tener esta limitaci\xf3n mientras conservan las capacidades de generaci\xf3n de texto. Sin embargo, por ahora, necesitamos dise\xf1ar una soluci\xf3n alrededor de ella."),(0,t.kt)("h2",{id:"c\xf3mo-podr\xeda-funcionar-un-chatbot-con-gpt-3"},"C\xf3mo podr\xeda funcionar un chatbot con GPT-3"),(0,t.kt)("p",null,"Entonces, la canalizaci\xf3n del chatbot podr\xeda estar compuesta por dos pasos:"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"Primero, necesitamos seleccionar la intenci\xf3n adecuada para la pregunta del usuario, es decir, necesitamos recuperar el documento correcto de nuestra base de conocimientos."),(0,t.kt)("li",{parentName:"ol"},"Luego, una vez que tenemos el documento correcto, podemos aprovechar GPT-3 para generar una respuesta apropiada para el usuario. Al hacerlo, necesitaremos crear un buen prompt.")),(0,t.kt)("p",null,"El primer paso se resuelve esencialmente mediante ",(0,t.kt)("a",{parentName:"p",href:"https://es.wikipedia.org/wiki/B%C3%BAsqueda_sem%C3%A1ntica"},"b\xfasqueda sem\xe1ntica"),". Podemos usar modelos pre-entrenados de la biblioteca ",(0,t.kt)("a",{parentName:"p",href:"https://www.sbert.net/examples/applications/semantic-search/README.html"},(0,t.kt)("inlineCode",{parentName:"a"},"sentence-transformers"))," y asignar f\xe1cilmente una puntuaci\xf3n a cada documento. El documento con la puntuaci\xf3n m\xe1s alta es el que se utilizar\xe1 para generar la respuesta del chatbot."),(0,t.kt)("div",{style:{textAlign:"left"}},(0,t.kt)("img",{src:s,style:{width:"700px"}}),(0,t.kt)("p",{style:{color:"gray",fontSize:"12px",fontStyle:"italic"}},"C\xf3mo podr\xeda funcionar un chatbot aprovechando GPT-3. GPT-3 podr\xeda utilizarse para generar una respuesta adecuada aprovechando la informaci\xf3n de documentos de la base de conocimientos. Image by the author.")),(0,t.kt)("h2",{id:"generaci\xf3n-de-respuestas-con-gpt-3"},"Generaci\xf3n de respuestas con GPT-3"),(0,t.kt)("p",null,"Una vez que tenemos el documento correcto, necesitaremos crear una buena indicaci\xf3n (prompt) para ser usada con GPT-3 para generar la respuesta. En los siguientes experimentos, siempre usaremos el modelo ",(0,t.kt)("inlineCode",{parentName:"p"},"text-davinci-003")," con una temperatura de ",(0,t.kt)("inlineCode",{parentName:"p"},"0.7"),"."),(0,t.kt)("p",null,"Para crear la indicaci\xf3n (prompt), experimentaremos con:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://learnprompting.org/docs/basics/roles"},(0,t.kt)("strong",{parentName:"a"},"Role-prompting")),": una t\xe9cnica heur\xedstica que asigna un rol espec\xedfico a la IA."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Informaci\xf3n relevante de la base de conocimientos (KB)"),", es decir, el documento recuperado en el paso de b\xfasqueda sem\xe1ntica."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Los \xfaltimos mensajes intercambiados entre el usuario y el chatbot"),". Estos son \xfatiles para mensajes enviados por el usuario donde el contexto completo no est\xe1 especificado. Veremos un ejemplo de esto m\xe1s adelante. Echa un vistazo a ",(0,t.kt)("a",{parentName:"li",href:"https://learnprompting.org/docs/applied_prompting/build_chatgpt"},"este ejemplo")," para ver c\xf3mo gestionar conversaciones con GPT-3."),(0,t.kt)("li",{parentName:"ul"},"Por \xfaltimo, ",(0,t.kt)("strong",{parentName:"li"},"la pregunta del usuario"),".")),(0,t.kt)("p",null,"Comencemos nuestra indicaci\xf3n usando la t\xe9cnica de ",(0,t.kt)("span",{style:{backgroundColor:"#FFF2CC"}},"role-prompting"),"."),(0,t.kt)("pre",null,(0,t.kt)("span",{style:{backgroundColor:"#FFF2CC"}},"Como un chatbot avanzado llamado Skippy, tu objetivo principal es ayudar a los usuarios lo mejor que puedas."),(0,t.kt)("br",null)),(0,t.kt)("p",null,"Comencemos nuestro prompt usando la t\xe9cnica de ",(0,t.kt)("span",{style:{backgroundColor:"#FFF2CC"}},"solicitud de roles"),"."),(0,t.kt)("pre",null,(0,t.kt)("span",{style:{backgroundColor:"#FFF2CC"}},"Como un chatbot avanzado llamado Skippy, tu objetivo principal es ayudar a los usuarios de la mejor manera posible."),(0,t.kt)("br",null)),(0,t.kt)("p",null,"Luego, supongamos que el paso de b\xfasqueda sem\xe1ntica extrae el siguiente documento de nuestra base de conocimientos. Todos los documentos describen c\xf3mo funciona el producto VideoGram, que es un producto imaginario similar a Instagram, pero solo para videos."),(0,t.kt)("div",{style:{textAlign:"left"}},(0,t.kt)("img",{src:l,style:{width:"700px"}}),(0,t.kt)("p",{style:{color:"gray",fontSize:"12px",fontStyle:"italic"}},"Un documento que explica c\xf3mo funciona el inicio de sesi\xf3n en VideoGram. Imagen del autor.")),"Podemos agregar ",(0,t.kt)("span",{style:{backgroundColor:"#FFF2CC"}},"su contenido")," dentro del prompt de esta manera.",(0,t.kt)("pre",null,"Como un chatbot avanzado llamado Skippy, tu objetivo principal es ayudar a los usuarios de la mejor manera posible.",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)("span",{style:{backgroundColor:"#FFF2CC"}},"INICIO DE CONTEXTO",(0,t.kt)("br",null),"Iniciar sesi\xf3n en VideoGram desde el sitio web",(0,t.kt)("br",null),"1. Abre tu navegador web y ve al sitio web de VideoGram.",(0,t.kt)("br",null),'2. Haz clic en el bot\xf3n "Iniciar sesi\xf3n" ubicado en la esquina superior derecha de la p\xe1gina.',(0,t.kt)("br",null),"3. En la p\xe1gina de inicio de sesi\xf3n, ingresa tu nombre de usuario y contrase\xf1a de VideoGram.",(0,t.kt)("br",null),'4. Una vez que hayas ingresado tus credenciales, haz clic en el bot\xf3n "Iniciar sesi\xf3n".',(0,t.kt)("br",null),"5. Ahora deber\xedas haber iniciado sesi\xf3n en tu cuenta de VideoGram.",(0,t.kt)("br",null),(0,t.kt)("br",null),"Iniciar sesi\xf3n en VideoGram desde la aplicaci\xf3n m\xf3vil",(0,t.kt)("br",null),"1. Abre la aplicaci\xf3n de VideoGram en tu dispositivo m\xf3vil.",(0,t.kt)("br",null),'2. En la p\xe1gina principal, toca el bot\xf3n "Iniciar sesi\xf3n" ubicado en la esquina inferior derecha. 3. En la p\xe1gina de inicio de sesi\xf3n, ingresa tu nombre de usuario y contrase\xf1a de VideoGram.',(0,t.kt)("br",null),'4. Una vez que hayas ingresado tus credenciales, toca el bot\xf3n "Iniciar sesi\xf3n".',(0,t.kt)("br",null),"5. Ahora deber\xedas haber iniciado sesi\xf3n en tu cuenta de VideoGram.",(0,t.kt)("br",null),"FIN DE CONTEXTO",(0,t.kt)("br",null))),(0,t.kt)("p",null,"Por \xfaltimo, necesitamos agregar ",(0,t.kt)("span",{style:{backgroundColor:"#FFF2CC"}},"la conversaci\xf3n y la pregunta del usuario")," al final del prompt, como en el siguiente ejemplo."),(0,t.kt)("pre",null,"Como un chatbot avanzado llamado Skippy, tu objetivo principal es ayudar a los usuarios de la mejor manera posible.",(0,t.kt)("br",null),(0,t.kt)("br",null),"INICIO DE CONTEXTO",(0,t.kt)("br",null),"Iniciar sesi\xf3n en VideoGram desde el sitio web",(0,t.kt)("br",null),"1. Abre tu navegador web y ve al sitio web de VideoGram.",(0,t.kt)("br",null),'2. Haz clic en el bot\xf3n "Iniciar sesi\xf3n" ubicado en la esquina superior derecha de la p\xe1gina.',(0,t.kt)("br",null),"3. En la p\xe1gina de inicio de sesi\xf3n, ingresa tu nombre de usuario y contrase\xf1a de VideoGram.",(0,t.kt)("br",null),'4. Una vez que hayas ingresado tus credenciales, haz clic en el bot\xf3n "Iniciar sesi\xf3n".',(0,t.kt)("br",null),"5. Ahora deber\xedas haber iniciado sesi\xf3n en tu cuenta de VideoGram.",(0,t.kt)("br",null),(0,t.kt)("br",null),"Iniciar sesi\xf3n en VideoGram desde la aplicaci\xf3n m\xf3vil",(0,t.kt)("br",null),"1. Abre la aplicaci\xf3n de VideoGram en tu dispositivo m\xf3vil.",(0,t.kt)("br",null),'2. En la p\xe1gina principal, toca el bot\xf3n "Iniciar sesi\xf3n" ubicado en la esquina inferior derecha. 3. En la p\xe1gina de inicio de sesi\xf3n, ingresa tu nombre de usuario y contrase\xf1a de VideoGram.',(0,t.kt)("br",null),'4. Una vez que hayas ingresado tus credenciales, toca el bot\xf3n "Iniciar sesi\xf3n".',(0,t.kt)("br",null),"5. Ahora deber\xedas haber iniciado sesi\xf3n en tu cuenta de VideoGram.",(0,t.kt)("br",null),"FIN DE CONTEXTO",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)("span",{style:{backgroundColor:"#FFF2CC"}},"SKIPPY: \xa1Hola, soy Skippy! \xbfEn qu\xe9 puedo ayudarte?",(0,t.kt)("br",null),"USUARIO: No puedo encontrar el bot\xf3n de inicio de sesi\xf3n.",(0,t.kt)("br",null),"SKIPPY:"),(0,t.kt)("br",null)),(0,t.kt)("p",null,"Pasando este prompt a GPT-3, obtuve la siguiente respuesta generada:"),(0,t.kt)("pre",null,(0,t.kt)("span",{style:{backgroundColor:"#D2F4D3"}},"No hay problema! En el sitio web, el bot\xf3n de inicio de sesi\xf3n se encuentra en la esquina superior derecha de la p\xe1gina. En la aplicaci\xf3n m\xf3vil, el bot\xf3n de inicio de sesi\xf3n se encuentra en la esquina inferior derecha. H\xe1gamelo saber si necesita m\xe1s ayuda!")),(0,t.kt)("p",null,"Observa c\xf3mo la informaci\xf3n en la respuesta generada proviene del documento de base de conocimiento."),(0,t.kt)("h2",{id:"desambiguaci\xf3n-de-preguntas-con-gpt-3"},"Desambiguaci\xf3n de preguntas con GPT-3"),(0,t.kt)("p",null,"Intentemos con una frase del usuario m\xe1s ambigua, como ",(0,t.kt)("span",{style:{backgroundColor:"#FFF2CC"}},"\u201cno puedo iniciar sesi\xf3n\u201d"),". Aqu\xed est\xe1 el prompt completo:"),(0,t.kt)("pre",null,"Como un chatbot avanzado llamado Skippy, tu objetivo principal es ayudar a los usuarios lo mejor que puedas.",(0,t.kt)("br",null),(0,t.kt)("br",null),"COMIENZA EL CONTEXTO",(0,t.kt)("br",null),"Iniciar sesi\xf3n en VideoGram desde el sitio web:",(0,t.kt)("br",null),"1. Abre tu navegador web y ve al sitio web de VideoGram.",(0,t.kt)("br",null),'2. Haz clic en el bot\xf3n "Iniciar sesi\xf3n" ubicado en la esquina superior derecha de la p\xe1gina.',(0,t.kt)("br",null),"3. En la p\xe1gina de inicio de sesi\xf3n, ingresa tu nombre de usuario y contrase\xf1a de VideoGram.",(0,t.kt)("br",null),'4. Una vez que hayas ingresado tus credenciales, haz clic en el bot\xf3n "Iniciar sesi\xf3n".',(0,t.kt)("br",null),"5. Ahora deber\xedas haber iniciado sesi\xf3n en tu cuenta de VideoGram.",(0,t.kt)("br",null),(0,t.kt)("br",null),"Iniciar sesi\xf3n en VideoGram desde la aplicaci\xf3n m\xf3vil:",(0,t.kt)("br",null),"1. Abre la aplicaci\xf3n VideoGram en tu dispositivo m\xf3vil.",(0,t.kt)("br",null),'2. En la p\xe1gina principal, toca el bot\xf3n "Iniciar sesi\xf3n" ubicado en la esquina inferior derecha.',(0,t.kt)("br",null),"3. En la p\xe1gina de inicio de sesi\xf3n, ingresa tu nombre de usuario y contrase\xf1a de VideoGram.",(0,t.kt)("br",null),'4. Una vez que hayas ingresado tus credenciales, toca el bot\xf3n "Iniciar sesi\xf3n".',(0,t.kt)("br",null),"5. Ahora deber\xedas haber iniciado sesi\xf3n en tu cuenta de VideoGram.",(0,t.kt)("br",null),"TERMINA EL CONTEXTO",(0,t.kt)("br",null),(0,t.kt)("br",null),"SKIPPY: \xa1Hola, soy Skippy! \xbfC\xf3mo puedo ayudarte?",(0,t.kt)("br",null),"USUARIO: ",(0,t.kt)("span",{style:{backgroundColor:"#FFF2CC"}},"No puedo iniciar sesi\xf3n"),(0,t.kt)("br",null),"SKIPPY:",(0,t.kt)("br",null)),(0,t.kt)("p",null,"GPT-3 intentar\xe1 entender mejor cu\xe1l es el problema del usuario."),(0,t.kt)("pre",null,(0,t.kt)("span",{style:{backgroundColor:"#D2F4D3"}},"Lo siento mucho. \xbfPuede decirme si est\xe1 intentando iniciar sesi\xf3n a trav\xe9s del sitio web de VideoGram o de la aplicaci\xf3n m\xf3vil?")),(0,t.kt)("p",null,"A continuaci\xf3n, aqu\xed est\xe1 c\xf3mo contin\xfaa la conversaci\xf3n completa. El prompt completo est\xe1 oculto para una mejor visibilidad."),(0,t.kt)("pre",null,"USER: No puedo iniciar sesi\xf3n.",(0,t.kt)("br",null),"SKIPPY: Lamento escuchar eso. \xbfPuede decirme si est\xe1 intentando iniciar sesi\xf3n a trav\xe9s del sitio web o de la aplicaci\xf3n m\xf3vil de VideoGram?",(0,t.kt)("br",null),"USER: Aplicaci\xf3n m\xf3vil",(0,t.kt)("br",null),(0,t.kt)("span",{style:{backgroundColor:"#D2F4D3"}},'SKIPPY: De acuerdo, no hay problema. Para iniciar sesi\xf3n a trav\xe9s de la aplicaci\xf3n m\xf3vil, abra la aplicaci\xf3n de VideoGram en su dispositivo m\xf3vil. En la p\xe1gina principal, toque el bot\xf3n "Iniciar sesi\xf3n" ubicado en la esquina inferior derecha. En la p\xe1gina de inicio de sesi\xf3n, ingrese su nombre de usuario y contrase\xf1a de VideoGram. Una vez que haya ingresado sus credenciales, toque el bot\xf3n "Iniciar sesi\xf3n". Ahora deber\xeda haber iniciado sesi\xf3n en su cuenta de VideoGram. Por favor, av\xedseme si necesita alguna otra ayuda.'),(0,t.kt)("br",null)),(0,t.kt)("p",null,"GPT-3 puede manejar la disambiguaci\xf3n, siempre que tenga la informaci\xf3n contextual adecuada."),(0,t.kt)("h2",{id:"problemas-al-generar-respuestas-con-gpt-3"},"Problemas al generar respuestas con GPT-3"),(0,t.kt)("p",null,"Sin embargo, existe un problema en generar respuestas con GPT-3."),(0,t.kt)("p",null,'Si le preguntamos "\xbfEs la aplicaci\xf3n m\xf3vil gratuita?" a GPT-3 pasando el documento de inicio de sesi\xf3n como contexto, a menudo obtendr\xedamos una respuesta como "S\xed, la aplicaci\xf3n m\xf3vil de VideoGram es gratuita para descargar y usar", incluso si dicha informaci\xf3n no est\xe1 contenida en la informaci\xf3n de contexto. \xa1Generar informaci\xf3n falsa es muy malo para los chatbots de servicio al cliente!'),(0,t.kt)("p",null,"GPT-3 rara vez genera informaci\xf3n falsa cuando la respuesta a la pregunta del usuario se puede encontrar en el contexto. Como las preguntas de los usuarios a menudo son textos cortos y ambiguos, no podemos confiar en el paso de b\xfasqueda sem\xe1ntica para siempre recuperar un documento correcto, y por lo tanto siempre somos vulnerables a la generaci\xf3n de informaci\xf3n falsa."),(0,t.kt)("h2",{id:"conclusi\xf3n"},"conclusi\xf3n"),(0,t.kt)("p",null,"En conclusi\xf3n, GPT-3 es muy \xfatil para crear chatbots de conversaci\xf3n y es capaz de responder a una serie de preguntas espec\xedficas en funci\xf3n de la informaci\xf3n contextual insertada en la solicitud. Sin embargo, es dif\xedcil hacer que el modelo produzca respuestas utilizando solo la informaci\xf3n del contexto, ya que el modelo tiende a alucinar (es decir, generar nueva informaci\xf3n, potencialmente falsa). Generar informaci\xf3n falsa es un problema de diferente gravedad seg\xfan el caso de uso."),(0,t.kt)("p",null,"Written by ",(0,t.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/fabio-chiusano-b6a3b311b/"},"Fabio Chiusano"),"."),(0,t.kt)("div",{className:"footnotes"},(0,t.kt)("hr",{parentName:"div"}),(0,t.kt)("ol",{parentName:"div"},(0,t.kt)("li",{parentName:"ol",id:"fn-1"},"Nadeem, M., Bethke, A., & Reddy, S. (2021). StereoSet: Measuring stereotypical bias in pretrained language models. Proceedings of the 59th Annual Meeting of the Association for Computational Linguistics and the 11th International Joint Conference on Natural Language Processing (Volume 1: Long Papers), 5356\u20135371. https://doi.org/10.18653/v1/2021.acl-long.416\n",(0,t.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,t.kt)("li",{parentName:"ol",id:"fn-2"},"Ji, Z., Lee, N., Frieske, R., Yu, T., Su, D., Xu, Y., Ishii, E., Bang, Y., Madotto, A., & Fung, P. (2022). Survey of Hallucination in Natural Language Generation. ACM Computing Surveys. https://doi.org/10.1145/3571730\n",(0,t.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}k.isMDXComponent=!0}}]);