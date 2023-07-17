"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[4596],{34893:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>m,metadata:()=>l,toc:()=>u});var s=o(87462),t=(o(67294),o(3905));const n=o.p+"assets/images/knowledge_generation-197796038929771b12d9636d5328f69a.webp",i=o.p+"assets/images/gen_k_p1-d66e2a37226275a4e6cbd4e8ec46feca.webp",r=o.p+"assets/images/recitation-671b162f9b90e2dabfa1c00a2b5e3e66.webp";var d=o(39145);const m={sidebar_position:7},p="\ud83d\udfe1 Criando conhecimento (Generated Knowledge)",l={unversionedId:"intermediate/generated_knowledge",id:"intermediate/generated_knowledge",title:"\ud83d\udfe1 Criando conhecimento (Generated Knowledge)",description:"A ideia por tr\xe1s de criar conhecimento(@liu2021generated) se refere ao ato de pedir para que a %%LLM|LLM%% gere informa\xe7\xf5es que potencialmente podem ser utilizadas (sobre uma certa pergunta ou t\xf3pico) antes de produzir a resposta final.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/intermediate/generated_knowledge.md",sourceDirName:"intermediate",slug:"/intermediate/generated_knowledge",permalink:"/pt/docs/intermediate/generated_knowledge",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/intermediate/generated_knowledge.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe1 Autoconsist\xeancia",permalink:"/pt/docs/intermediate/self_consistency"},next:{title:"\ud83d\udfe1 Prompts to Tipo Menor para o Maior",permalink:"/pt/docs/intermediate/least_to_most"}},c={},u=[{value:"Abordagem de solicita\xe7\xe3o \xfanica",id:"abordagem-de-solicita\xe7\xe3o-\xfanica",level:2},{value:"Abordagem com duas solicita\xe7\xf5es",id:"abordagem-com-duas-solicita\xe7\xf5es",level:2},{value:"Outro caso de uso",id:"outro-caso-de-uso",level:2},{value:"Uma discuss\xe3o mais t\xe9cnica",id:"uma-discuss\xe3o-mais-t\xe9cnica",level:2},{value:"Conhecimento Gerado",id:"conhecimento-gerado",level:3},{value:"Conhecimento Integrado",id:"conhecimento-integrado",level:3},{value:"Modelos de Linguagem Aprimorados por Recita\xe7\xe3o",id:"modelos-de-linguagem-aprimorados-por-recita\xe7\xe3o",level:2},{value:"Notas",id:"notas",level:2}],g={toc:u},b="wrapper";function h(e){let{components:a,...o}=e;return(0,t.kt)(b,(0,s.Z)({},g,o,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"-criando-conhecimento-generated-knowledge"},"\ud83d\udfe1 Criando conhecimento (Generated Knowledge)"),(0,t.kt)("p",null,"A ideia por tr\xe1s de criar conhecimento",(0,t.kt)("sup",{parentName:"p",id:"fnref-1"},(0,t.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," se refere ao ato de pedir para que a ",(0,t.kt)("a",{parentName:"p",id:"LLM_2_38_1689562976238","data-tooltip-html":"Large Language Model. A model that is trained to predict the next word in a sentence.","data-tooltip-place":"top"},"LLM"),(0,t.kt)(d.u,{anchorId:"LLM_2_38_1689562976238",clickable:!0,mdxType:"Tooltip"})," gere informa\xe7\xf5es que potencialmente podem ser utilizadas (sobre uma certa pergunta ou t\xf3pico) antes de produzir a resposta final. "),(0,t.kt)("p",null,"Por exemplo, se voc\xea quiser escrever um artigo sobre um animal, como ",(0,t.kt)("a",{parentName:"p",href:"https://pt.wikipedia.org/wiki/Panthera_onca"},"on\xe7as pintadas"),". Antes de pedir para o ",(0,t.kt)("a",{parentName:"p",id:"LLM_2_24_1689562976238","data-tooltip-html":"Large Language Model. A model that is trained to predict the next word in a sentence.","data-tooltip-place":"top"},"LLM"),(0,t.kt)(d.u,{anchorId:"LLM_2_24_1689562976238",clickable:!0,mdxType:"Tooltip"})," escrever um blog sobre on\xe7as, voc\xea pode pedir a ele que gere alguns fatos sobre on\xe7as-pintadas. Esse passo ajudar\xe1 a LMM a escrever um post mais rico em informa\xe7\xf5es. Existem duas maneiras f\xe1ceis para atingir esse objetivo. "),(0,t.kt)("h2",{id:"abordagem-de-solicita\xe7\xe3o-\xfanica"},"Abordagem de solicita\xe7\xe3o \xfanica"),(0,t.kt)("p",null,"A primeira forma seria pedir ao LLM para gerar conhecimento e ent\xe3o escrever o post, tudo em um \xfanico comando."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-text"},"Gere 4 fatos sobre on\xe7as pintadas. Em seguida, use esses fatos para escrever um post de blog curto breve usando as informa\xe7\xf5es criadas.\n// highlight-start\n1. As on\xe7as pintadas s\xe3o os maiores felinos das Am\xe9ricas, podendo chegar a pesar at\xe9 135 kg.\n2. Elas t\xeam uma pelagem com manchas em formato de rosetas, que ajudam a camuflar-se na floresta e facilitam a sua ca\xe7a.\n3. As on\xe7as pintadas s\xe3o animais solit\xe1rios e territoriais, vivendo em m\xe9dia de 12 a 15 anos na natureza.\n4. A esp\xe9cie \xe9 considerada vulner\xe1vel pela Uni\xe3o Internacional para a Conserva\xe7\xe3o da Natureza (IUCN), devido \xe0 ca\xe7a ilegal e \xe0 perda de habitat.\n\nPost de blog:\n\nAs on\xe7as pintadas s\xe3o animais impressionantes, sendo os maiores felinos das Am\xe9ricas. Elas t\xeam uma pelagem com manchas em formato de rosetas, que as ajudam a camuflar-se na floresta e facilitam a sua ca\xe7a. No entanto, as on\xe7as pintadas s\xe3o animais solit\xe1rios e territoriais, vivendo em m\xe9dia de 12 a 15 anos na natureza.\n\nInfelizmente, a esp\xe9cie \xe9 considerada vulner\xe1vel pela Uni\xe3o Internacional para a Conserva\xe7\xe3o da Natureza (IUCN), devido \xe0 ca\xe7a ilegal e \xe0 perda de habitat. A destrui\xe7\xe3o das florestas tropicais, especialmente na Am\xe9rica do Sul, est\xe1 amea\xe7ando a sobreviv\xeancia desses animais incr\xedveis. Por isso, \xe9 importante que medidas de conserva\xe7\xe3o sejam tomadas para proteger as on\xe7as pintadas e seu habitat natural.\n\nA conserva\xe7\xe3o das on\xe7as pintadas \xe9 importante n\xe3o apenas para a sobreviv\xeancia da esp\xe9cie em si, mas tamb\xe9m para a preserva\xe7\xe3o de ecossistemas inteiros. Como predadores no topo da cadeia alimentar, as on\xe7as pintadas t\xeam um papel crucial na regula\xe7\xe3o das popula\xe7\xf5es de suas presas e na manuten\xe7\xe3o do equil\xedbrio dos ecossistemas.\n\nPortanto, \xe9 crucial que governos, organiza\xe7\xf5es n\xe3o governamentais e indiv\xedduos trabalhem juntos para proteger as on\xe7as pintadas e seus habitats naturais. A ado\xe7\xe3o de pr\xe1ticas sustent\xe1veis e a cria\xe7\xe3o de reservas naturais podem ajudar a garantir que as on\xe7as pintadas tenham um futuro seguro na natureza.\n// highlight-end\n")),(0,t.kt)("h2",{id:"abordagem-com-duas-solicita\xe7\xf5es"},"Abordagem com duas solicita\xe7\xf5es"),(0,t.kt)("p",null,"Nessa abordagem, primeiramente pediremos para a ",(0,t.kt)("a",{parentName:"p",id:"LLM_0_48_1689562976238","data-tooltip-html":"Large Language Model. A model that is trained to predict the next word in a sentence.","data-tooltip-place":"top"},"LLM"),(0,t.kt)(d.u,{anchorId:"LLM_0_48_1689562976238",clickable:!0,mdxType:"Tooltip"})," gerar fatos sobre a on\xe7a:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-text"},"Gere 10 fatos sobre on\xe7as pintadas.\n\n// highlight-start\n1. As on\xe7as pintadas s\xe3o nativas das Am\xe9ricas, habitando desde a Argentina at\xe9 o sul dos Estados Unidos.\n2. Elas s\xe3o os maiores felinos das Am\xe9ricas, podendo chegar a medir 1,90 metros de comprimento e pesar at\xe9 135 kg.\n3. A pelagem das on\xe7as pintadas \xe9 composta por manchas em formato de rosetas, o que as torna facilmente identific\xe1veis.\n4. As on\xe7as pintadas s\xe3o animais solit\xe1rios e territoriais, preferindo viver sozinhas em vez de em grupos.\n5. Elas s\xe3o consideradas predadores de topo, ocupando o topo da cadeia alimentar e desempenhando um papel importante na regula\xe7\xe3o das popula\xe7\xf5es de suas presas.\n6. As on\xe7as pintadas s\xe3o ca\xe7adoras habilidosas e podem abater animais com mais do que o dobro do seu tamanho.\n7. A esp\xe9cie \xe9 capaz de adaptar-se a diferentes habitats, desde florestas tropicais at\xe9 \xe1reas de cerrado e pastagens.\n8. As on\xe7as pintadas t\xeam vis\xe3o noturna excepcional, o que lhes permite ca\xe7ar durante a noite.\n9. Elas se comunicam por meio de vocaliza\xe7\xf5es, como rugidos e grunhidos, al\xe9m de marcas de urina e arranh\xf5es em \xe1rvores.\n10. A destrui\xe7\xe3o do habitat natural das on\xe7as pintadas \xe9 uma das maiores amea\xe7as para a esp\xe9cie, colocando-a em risco de extin\xe7\xe3o.\n// highlight-end\n")),(0,t.kt)("p",null,"Depois disso, usamos a informa\xe7\xe3o gerada em um outro comando para escrever o post de blog: "),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-text"},"1. As on\xe7as pintadas s\xe3o nativas das Am\xe9ricas, habitando desde a Argentina at\xe9 o sul dos Estados Unidos.\n2. Elas s\xe3o os maiores felinos das Am\xe9ricas, podendo chegar a medir 1,90 metros de comprimento e pesar at\xe9 135 kg.\n3. A pelagem das on\xe7as pintadas \xe9 composta por manchas em formato de rosetas, o que as torna facilmente identific\xe1veis.\n4. As on\xe7as pintadas s\xe3o animais solit\xe1rios e territoriais, preferindo viver sozinhas em vez de em grupos.\n5. Elas s\xe3o consideradas predadores de topo, ocupando o topo da cadeia alimentar e desempenhando um papel importante na regula\xe7\xe3o das popula\xe7\xf5es de suas presas.\n\nUse os fatos acima para escrever um par\xe1grafo sobre as on\xe7as pintadas.\n\n// highlight-start\n\nAs on\xe7as pintadas s\xe3o um dos felinos mais impressionantes do mundo. Esses animais nativos das Am\xe9ricas t\xeam um tamanho impressionante, podendo chegar a medir 1,90 metros de comprimento e pesar at\xe9 135 kg. Com sua pelagem marcada por manchas em formato de rosetas, as on\xe7as pintadas s\xe3o facilmente identific\xe1veis. Elas s\xe3o animais solit\xe1rios e territoriais, preferindo viver sozinhas em vez de em grupos. Como predadores de topo, elas desempenham um papel crucial na regula\xe7\xe3o das popula\xe7\xf5es de suas presas e s\xe3o essenciais para a manuten\xe7\xe3o do equil\xedbrio dos ecossistemas.\n\n// highlight-end\n")),(0,t.kt)("p",null,"Eu recomendo utilizar essa segunda abordagem, j\xe1 que ela poder\xe1 produzir conte\xfados mais longos e confi\xe1veis."),(0,t.kt)("h2",{id:"outro-caso-de-uso"},"Outro caso de uso"),(0,t.kt)("p",null,"A abordagem de gerar conhecimento foi introduzida para um tipo de tarefa completamente diferente: responder perguntas dif\xedceis. Considere a pr\xf3xima pergunta, que o GPT-3 responde incorretamente. "),(0,t.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjo0MSwib3V0cHV0IjoiQSDBZnJpY2EgZG8gU3VsIOkgbWFpb3IgcXVlIG8gQ29uZ28uIiwicHJvbXB0IjoiUXVhbCBwYe1zIOkgbWFpb3IsIG8gQ29uZ28gb3UgYSDBZnJpY2EgZG8gU3VsPyIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,t.kt)("br",null),"Caso pe\xe7amos primeiramente para o %%LLM|LLM%% gerar fatos sobre o Congo e sobre a \xc1frica do Sul, ent\xe3o poderemos usar as informa\xe7\xf5es geradas para responder a pergunta corretamente. Em teoria, esse processo \xe9 similar \xe0 abordagem da  %%Cadeia de Pensamento%%, j\xe1 que estaremos influenciando a LMM a gerar um racioc\xednio intermedi\xe1rio na forma de fatos relacionados.",(0,t.kt)("p",null,"Vamos come\xe7ar com o primeiro passo, ",(0,t.kt)("em",{parentName:"p"},"gerando conhecimento"),". N\xf3s podemos pedir para a ",(0,t.kt)("a",{parentName:"p",id:"LLM_2_27_1689562976238","data-tooltip-html":"Large Language Model. A model that is trained to predict the next word in a sentence.","data-tooltip-place":"top"},"LLM"),(0,t.kt)(d.u,{anchorId:"LLM_2_27_1689562976238",clickable:!0,mdxType:"Tooltip"})," gerar fatos sobre o Congo e sobre a \xc1frica do Sul."),(0,t.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjo0MSwib3V0cHV0IjoiQXF1aSBlc3TjbyBhbGd1bnMgZmF0b3Mgc29icmUgbyB0YW1hbmhvIGRvIENvbmdvIGUgZGEgwWZyaWNhIGRvIFN1bDoxLk8gQ29uZ28g6SBvIHNlZ3VuZG8gbWFpb3IgcGHtcyBkYSDBZnJpY2EsIGVtIHRlcm1vcyBkZSDhcmVhLCBjb20gdW1hIGV4dGVuc%2BNvIHRlcnJpdG9yaWFsIGRlIGNlcmNhIGRlIDIsMyBtaWxo9WVzIGRlIGttsi5cXG4yLiBBIMFmcmljYSBkbyBTdWwg6SBvIDI0uiBtYWlvciBwYe1zIGRvIG11bmRvLCBjb20gdW1hIOFyZWEgZGUgYXByb3hpbWFkYW1lbnRlIDEsMjIgbWlsaONvIGRlIGttsi5cXG4zLiBPIENvbmdvIHRlbSB1bWEgZnJvbnRlaXJhIGNvbXVtIGNvbSBub3ZlIHBh7XNlcywgaW5jbHVpbmRvIGEgUmVw%2BmJsaWNhIENlbnRyby1BZnJpY2FuYSwgU3Vk428gZG8gU3VsLCBVZ2FuZGEsIFJ1YW5kYSwgQnVydW5kaSwgVGFueuJuaWEsIFribWJpYSwgQW5nb2xhIGUgYSBSZXD6YmxpY2EgRGVtb2Ny4XRpY2EgZG8gQ29uZ28uXFxuNC4gQSDBZnJpY2EgZG8gU3VsIHRlbSB1bWEgZnJvbnRlaXJhIGNvbXVtIGNvbSBzZWlzIHBh7XNlcywgaW5jbHVpbmRvIGEgTmFt7WJpYSwgQm90c3VhbmEsIFppbWJhYndlLCBNb%2BdhbWJpcXVlLCBFc3dhdGluaSBlIExlc290by5cXG41LiBBIG1haW9yIGNpZGFkZSBkbyBDb25nbyDpIGEgY2FwaXRhbCBLaW5zaGFzYSwgY29tIHVtYSBwb3B1bGHn428gZGUgbWFpcyBkZSAxMSBtaWxo9WVzIGRlIGhhYml0YW50ZXMuXFxuNi4gQSBtYWlvciBjaWRhZGUgZGEgwWZyaWNhIGRvIFN1bCDpIEpvaGFuZXNidXJnbywgY29tIHVtYSBwb3B1bGHn428gZGUgbWFpcyBkZSA1IG1pbGj1ZXMgZGUgaGFiaXRhbnRlcy5cXG43LiBBIHBvcHVsYefjbyB0b3RhbCBkbyBDb25nbyDpIGRlIGFwcm94aW1hZGFtZW50ZSAxMDUgbWlsaPVlcyBkZSBwZXNzb2FzLCBlbnF1YW50byBhIHBvcHVsYefjbyBkYSDBZnJpY2EgZG8gU3VsIOkgZGUgY2VyY2EgZGUgNjAgbWlsaPVlcyBkZSBwZXNzb2FzLlxcbiA4LiBBIGVjb25vbWlhIGRhIMFmcmljYSBkbyBTdWwg6SBhIHNlZ3VuZGEgbWFpb3IgZGEgwWZyaWNhLCBlbnF1YW50byBvIENvbmdvIOkgdW1hIGRhcyBlY29ub21pYXMgbWVub3MgZGVzZW52b2x2aWRhcyBkbyBjb250aW5lbnRlLiIsInByb21wdCI6IkdlcmUgYWxndW5zIGZhdG9zIHNvYnJlIG8gdGFtYW5obyBkbyBDb25nbyBlIGRhIMFmcmljYSBkbyBTdWw6IiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,t.kt)("br",null)," ",(0,t.kt)("br",null),(0,t.kt)("p",null,"Agora vamos usar essa informa\xe7\xe3o para responder a pergunta corretamente. Esse passo \xe9 chamado de ",(0,t.kt)("em",{parentName:"p"},"integra\xe7\xe3o do conhecimento"),"!"),(0,t.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjo0MSwib3V0cHV0IjoiRGVzY3VscGUsIGhvdXZlIHVtIGVycm8gbmEgbWluaGEgcmVzcG9zdGEgYW50ZXJpb3IuIE5hIHZlcmRhZGUsIG8gQ29uZ28g6SBtYWlvciBkbyBxdWUgYSDBZnJpY2EgZG8gU3VsLiBBIMFmcmljYSBkbyBTdWwgdGVtIHVtYSDhcmVhIGRlIGFwcm94aW1hZGFtZW50ZSAxLDIyIG1pbGjjbyBkZSBrbbIsIGVucXVhbnRvIG8gQ29uZ28gdGVtIHVtYSDhcmVhIGRlIGFwcm94aW1hZGFtZW50ZSAyLDMgbWlsaPVlcyBkZSBrbbIsIHRvcm5hbmRvLW8gbyAxMbogbWFpb3IgcGHtcyBkbyBtdW5kbyBlbSDhcmVhIHRlcnJpdG9yaWFsLiIsInByb21wdCI6Ik8gQ29uZ28g6SBvIHNlZ3VuZG8gbWFpb3IgcGHtcyBkYSDBZnJpY2EsIGVtIHRlcm1vcyBkZSDhcmVhLCBjb20gdW1hIGV4dGVuc%2BNvIHRlcnJpdG9yaWFsIGRlIGNlcmNhIGRlIDIsMyBtaWxo9WVzIGRlIGttsi4gQSDBZnJpY2EgZG8gU3VsIOkgbyAyNLogbWFpb3IgcGHtcyBkbyBtdW5kbywgY29tIHVtYSDhcmVhIGRlIGFwcm94aW1hZGFtZW50ZSAxLDIyIG1pbGjjbyBkZSBrbbIuXFxuXFxuUXVhbCBwYe1zIOkgbWFpb3IsIG8gQ29uZ28gb3UgYSDBZnJpY2EgZG8gU3VsP1xuV2hpY2ggY291bnRyeSBpcyBsYXJnZXIsIENvbmdvIG9yIFNvdXRoIEFmcmljYT8iLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,t.kt)("h2",{id:"uma-discuss\xe3o-mais-t\xe9cnica"},"Uma discuss\xe3o mais t\xe9cnica"),(0,t.kt)("p",null,"Embora o caso de uso acima tenha sido semelhante \xe0 forma como o conhecimento gerado foi originalmente introduzido, n\xe3o \xe9 exatamente o mesmo processo. O conte\xfado abaixo aborda o contexto mais t\xe9cnico em que a abordagem foi introduzida. Ele segue o padr\xe3o de duas etapas intermedi\xe1rias (gera\xe7\xe3o de conhecimento e integra\xe7\xe3o de conhecimento) que vimos acima."),(0,t.kt)("div",{style:{textAlign:"center"}},(0,t.kt)("img",{src:n,style:{width:"750px"}})),(0,t.kt)("div",{style:{textAlign:"center"}},"Conhecimento Gerado / Generated Knowledge (Liu et al.)"),(0,t.kt)("h3",{id:"conhecimento-gerado"},"Conhecimento Gerado"),(0,t.kt)("p",null,"Na etapa de gera\xe7\xe3o de conhecimento, o ",(0,t.kt)("a",{parentName:"p",id:"LLM_0_39_1689562976238","data-tooltip-html":"Large Language Model. A model that is trained to predict the next word in a sentence.","data-tooltip-place":"top"},"LLM"),(0,t.kt)(d.u,{anchorId:"LLM_0_39_1689562976238",clickable:!0,mdxType:"Tooltip"})," \xe9 solicitado a gerar um ",(0,t.kt)("em",{parentName:"p"},"conjunto de fatos sobre a pergunta"),". O LLM \xe9 acionado de forma few-shot, como demonstrado exemplo abaixo. N etapas diferentes s\xe3o gerados usando a mesma prompt (semelhante \xe0 abordagem de autoconsist\xeancia)."),(0,t.kt)("div",{style:{textAlign:"center"}},(0,t.kt)("img",{src:i,style:{width:"500px"}})),(0,t.kt)("div",{style:{textAlign:"center"}},"Exemplo de Conhecimento Gerado, baseado na pesquisa de (Liu et al.)"),(0,t.kt)("h3",{id:"conhecimento-integrado"},"Conhecimento Integrado"),(0,t.kt)("p",null,'Em seguida, geramos perguntas "enriquecidas pelo conhecimento" e solicitamos ao ',(0,t.kt)("a",{parentName:"p",id:"LLM_0_80_1689562976238","data-tooltip-html":"Large Language Model. A model that is trained to predict the next word in a sentence.","data-tooltip-place":"top"},"LLM"),(0,t.kt)(d.u,{anchorId:"LLM_0_80_1689562976238",clickable:!0,mdxType:"Tooltip"})," que as responda para obter as respostas finais. A maneira mais f\xe1cil de entender isso \xe9 passando por um exemplo."),(0,t.kt)("p",null,"Vamos supor que estamos tentando responder \xe0 ",(0,t.kt)("em",{parentName:"p"},"pergunta"),'\n"A maioria dos cangurus t\xeam <mask',">",' membros". Suponha que no passo de gera\xe7\xe3o de conhecimento, geramos 2 conhecimentos (M=2):'),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Conhecimento 1: ",(0,t.kt)("inlineCode",{parentName:"p"},"Cangurus s\xe3o marsupiais que vivem na Austr\xe1lia."))),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Conhecimento 2: ",(0,t.kt)("inlineCode",{parentName:"p"},"Cangurus s\xe3o marsupiais que possuem cinco membros.")))),(0,t.kt)("p",null,'Agora n\xf3s integramos os dois conhecimentos com a pergunta a fim de gerar "perguntas enriquecidas pelo conhecimento":'),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Pergunta enriquecida 1: ",(0,t.kt)("inlineCode",{parentName:"p"},"A maioria dos cangurus possuem <mask\\> membros. Cangurus s\xe3o marsupiais que vivem na Austr\xe1lia."))),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Pergunta enriquecida 2: ",(0,t.kt)("inlineCode",{parentName:"p"},"A maioria dos cangurus possuem <mask\\> membros. Cangurus s\xe3o marsupiais que possuem cinco membros.")))),(0,t.kt)("p",null,"Em seguida, solicitamos que o LLM responda a estas perguntas enriquecidas com conhecimento e obtemos as propostas de resposta finais:"),(0,t.kt)("p",null,"Resposta 1: 4"),(0,t.kt)("p",null,"Resposta 2: 5"),(0,t.kt)("p",null,"Selecionamos a resposta com a maior probabilidade como resposta final. A maior probabilidade pode ser a probabilidade softmax do token de resposta ou a probabilidade logar\xedtmica do(s) "),(0,t.kt)("h2",{id:"modelos-de-linguagem-aprimorados-por-recita\xe7\xe3o"},"Modelos de Linguagem Aprimorados por Recita\xe7\xe3o"),(0,t.kt)("p",null,"A abordagem de recita\xe7\xe3o-aumentada",(0,t.kt)("sup",{parentName:"p",id:"fnref-2"},(0,t.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," \xe9 semelhante \xe0 gera\xe7\xe3o de conhecimento (basicamente a mesma coisa). No entanto, \xe9 muito menos complexa do que a implementa\xe7\xe3o formal de gera\xe7\xe3o de conhecimento."),(0,t.kt)("div",{style:{textAlign:"center"}},(0,t.kt)("img",{src:r,style:{width:"250px"}})),(0,t.kt)("div",{style:{textAlign:"center"}},"Exemplo de Conhecimento Aprimorado por Recita\xe7\xe3o"),(0,t.kt)("p",null,"A ideia aqui \xe9 promptear o LLM em poucos exemplos para gerar informa\xe7\xf5es e respostas ao mesmo tempo. O fato de estar recitando/gerando conhecimento e respondendo \xe0 pergunta na mesma etapa \xe9 a principal diferen\xe7a em rela\xe7\xe3o \xe0 abordagem de conhecimento gerado."),(0,t.kt)("p",null,"Para reiterar, essa abordagem promptea o modelo com v\xe1rios exemplos de (pergunta, recita\xe7\xe3o, resposta), e em seguida, faz a pergunta. Os autores observam que essa abordagem pode ser combinada com autoconsist\xeancia ou m\xfaltiplos caminhos de completamento."),(0,t.kt)("h2",{id:"notas"},"Notas"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"A abordagem de conhecimento gerado apresenta melhorias em v\xe1rios conjuntos de dados de senso comum.")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"O conhecimento correspondente \xe0 resposta selecionada \xe9 chamado de ",(0,t.kt)("em",{parentName:"p"},"conhecimento selecionado"),".")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Na pr\xe1tica, voc\xea pode considerar a resposta mais frequente como a final."))),(0,t.kt)("div",{className:"footnotes"},(0,t.kt)("hr",{parentName:"div"}),(0,t.kt)("ol",{parentName:"div"},(0,t.kt)("li",{parentName:"ol",id:"fn-1"},"Liu, J., Liu, A., Lu, X., Welleck, S., West, P., Bras, R. L., Choi, Y., & Hajishirzi, H. (2021). Generated Knowledge Prompting for Commonsense Reasoning.\n",(0,t.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,t.kt)("li",{parentName:"ol",id:"fn-2"},"Sun, Z., Wang, X., Tay, Y., Yang, Y., & Zhou, D. (2022). Recitation-Augmented Language Models.\n",(0,t.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0}}]);