"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[2183],{45476:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>l,contentTitle:()=>m,default:()=>g,frontMatter:()=>d,metadata:()=>p,toc:()=>c});var t=o(87462),s=(o(67294),o(3905));const i=o.p+"assets/images/zero_shot-2fcfd390293eb7bf9f7d8371c2f6f5a7.webp",r=o.p+"assets/images/zero_shot_example-f98e34cb8ed72c5520cfd08c3c1c2f44.webp";var n=o(39145);const d={sidebar_position:4},m="\ud83d\udfe2 Cadeia de Pensamento Zero Shot",p={unversionedId:"intermediate/zero_shot_cot",id:"intermediate/zero_shot_cot",title:"\ud83d\udfe2 Cadeia de Pensamento Zero Shot",description:'Prompts do tipo Cadeia de Pensamento Zero Shot (ou Zero Shot Chain of Thought - Zero-shot-CoT, em ingl\xeas)(@kojima2022large) s\xe3o uma "evolu\xe7\xe3o" do prompt do tipo %%Cadeia de Pensamento|CoT prompting%% (@wei2022chain), com o introdu\xe7\xe3o de um passo adicional muito simples. Pesquisadores descobriram que ao adicionar as palavras "Vamos pensar passo a passo" ao final de uma pergunta, as LLMs s\xe3o capazes de gerar uma cadeia de pensamento que responde \xe0 pergunta. A partir desta cadeia de pensamento, eles s\xe3o capazes de extrair respostas mais precisas.',source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/intermediate/zero_shot_cot.md",sourceDirName:"intermediate",slug:"/intermediate/zero_shot_cot",permalink:"/pt/docs/intermediate/zero_shot_cot",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/intermediate/zero_shot_cot.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Prompting com Cadeia de Pensamento",permalink:"/pt/docs/intermediate/chain_of_thought"},next:{title:"\ud83d\udfe1 Autoconsist\xeancia",permalink:"/pt/docs/intermediate/self_consistency"}},l={},c=[{value:"Exemplo",id:"exemplo",level:2},{value:"Incorreto",id:"incorreto",level:4},{value:"Correto",id:"correto",level:4},{value:"Resultados",id:"resultados",level:2},{value:"Interessante",id:"interessante",level:2},{value:"Notas",id:"notas",level:2}],u={toc:c},h="wrapper";function g(e){let{components:a,...o}=e;return(0,s.kt)(h,(0,t.Z)({},u,o,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"-cadeia-de-pensamento-zero-shot"},"\ud83d\udfe2 Cadeia de Pensamento Zero Shot"),(0,s.kt)("p",null,"Prompts do tipo Cadeia de Pensamento Zero Shot (ou Zero Shot Chain of Thought - Zero-shot-CoT, em ingl\xeas)",(0,s.kt)("sup",{parentName:"p",id:"fnref-1"},(0,s.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),' s\xe3o uma "evolu\xe7\xe3o" do prompt do tipo ',(0,s.kt)("a",{parentName:"p",id:"CoT prompting_2_38_1689562976622","data-tooltip-html":"The main idea of CoT is that by showing the LLM some few shot exemplars where the reasoning process is explained in the exemplars, the LLM will also show the reasoning process when answering the prompt.","data-tooltip-place":"top"},"Cadeia de Pensamento"),(0,s.kt)(n.u,{anchorId:"CoT prompting_2_38_1689562976622",clickable:!0,mdxType:"Tooltip"}),(0,s.kt)("sup",{parentName:"p",id:"fnref-2"},(0,s.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),', com o introdu\xe7\xe3o de um passo adicional muito simples. Pesquisadores descobriram que ao adicionar as palavras "Vamos pensar passo a passo" ao final de uma pergunta, as LLMs s\xe3o capazes de gerar uma cadeia de pensamento que responde \xe0 pergunta. A partir desta cadeia de pensamento, eles s\xe3o capazes de extrair respostas mais precisas.'),(0,s.kt)("div",{style:{textAlign:"center"}},(0,s.kt)("img",{src:i,style:{width:"500px"}})),(0,s.kt)("div",{style:{textAlign:"center"}},"Cadeia de Pensamento Zero Shot. Exemplo adaptado. (Kojima et al.)"),(0,s.kt)("p",null,"Tecnicamente, o processo completo de Cadeia de Pensamento Zero Shot envolve duas solicita\xe7\xf5es separadas. Na imagem abaixo, a bolha superior \xe0 esquerda gera uma cadeia de pensamento, enquanto a bolha superior \xe0 direita recebe a sa\xedda da primeira solicita\xe7\xe3o (incluindo a pr\xf3pria primeira solicita\xe7\xe3o) e extrai a resposta da cadeia de pensamento. Essa segunda solicita\xe7\xe3o \xe9 uma ",(0,s.kt)("em",{parentName:"p"},"solicita\xe7\xe3o auto-aumentada")," ou ",(0,s.kt)("em",{parentName:"p"},"auto-enriquecida"),"."),(0,s.kt)("div",{style:{textAlign:"center"}},(0,s.kt)("img",{src:r,style:{width:"500px"}})),(0,s.kt)("div",{style:{textAlign:"center"}},"Processo completo da Cadeia de Pensamento Zero Shot. Exemplo adaptado. (Kojima et al.)"),(0,s.kt)("h2",{id:"exemplo"},"Exemplo"),(0,s.kt)("p",null,"Abaixo est\xe3o alguns demos (que apenas realizam extra\xe7\xe3o de racioc\xednio). Este primeiro demo mostra o GPT-3 (davinci-003) falhando em uma quest\xe3o simples de matem\xe1tica, enquanto o segundo demo usa um prompt Zero-shot-CoT e resolve o problema com sucesso. Sinta-se \xe0 vontade para inserir sua chave de API da OpenAI (clique em Gerar) e brincar com os exemplos. Observe como o prompt Zero-shot-CoT \xe9 muito mais simples em compara\xe7\xe3o com o prompt CoT."),(0,s.kt)("h4",{id:"incorreto"},"Incorreto"),(0,s.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC43LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0IjoiTyBKb%2BNvIHRlbSA4IHBlcmFzLiIsInByb21wdCI6IlNlIEpv428gdGVtIDUgcGVyYXMsIGNvbWUgMiBlIGNvbXByYSBtYWlzIDUsIGRlcG9pcyBk4SAzIGFvIHNldSBhbWlnbywgcXVhbnRhcyBwZXJhcyBlbGUgdGVtIGFnb3JhPyIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,s.kt)("h4",{id:"correto"},"Correto"),(0,s.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC43LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0IjoiSm%2FjbyB0ZW0gNSBwZXJhcywgY29tZSAyLCBlbnTjbyBzb2JyYW0gNSAtIDIgPSAzIHBlcmFzLiBEZXBvaXMgZWxlIGNvbXByYSBtYWlzIDUsIGVudONvIGVsZSB0ZW0gMyArIDUgPSA4IHBlcmFzLiBNYXMgZW0gc2VndWlkYSBlbGUgZOEgMyBwZXJhcyBhbyBhbWlnbywgcG9ydGFudG8gYWdvcmEgZWxlIHRlbSA4IC0gMyA9IDUgcGVyYXMuIEpv428gdGVtIDUgcGVyYXMgYWdvcmEuIiwicHJvbXB0IjoiU2UgSm%2FjbyB0ZW0gNSBwZXJhcywgY29tZSAyIGUgY29tcHJhIG1haXMgNSwgZGVwb2lzIGThIDMgYW8gc2V1IGFtaWdvLCBxdWFudGFzIHBlcmFzIGVsZSB0ZW0gYWdvcmE%2FXG5cblZhbW9zIHBlbnNhciBwYXNzbyBhIHBhc3NvLiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,s.kt)("h2",{id:"resultados"},"Resultados"),(0,s.kt)("p",null,"Zero-shot-CoT tamb\xe9m foi efetivo em melhorar os resultados em tarefas de aritm\xe9tica, racioc\xednio comum e simb\xf3lico. No entanto, n\xe3o \xe9 surpreendente que geralmente essa abordagem n\xe3o seja t\xe3o efetiva quanto o CoT prompting. Um caso de uso importante para o Zero-shot-CoT \xe9 ser uma alternativa eficaz quando \xe9 dif\xedcil obter exemplos de poucas amostras utilizando o CoT."),(0,s.kt)("h2",{id:"interessante"},"Interessante"),(0,s.kt)("p",null,'Kojima et al. experimentaram com v\xe1rios prompts de Zero-shot-CoT (por exemplo, "Vamos resolver esse problema dividindo-o em etapas." ou "Vamos pensar sobre isso logicamente."), mas eles demonstraram que "Vamos pensar passo a passo" \xe9 o mais eficaz para os testes realizadas.'),(0,s.kt)("h2",{id:"notas"},"Notas"),(0,s.kt)("p",null,"A etapa de extra\xe7\xe3o muitas vezes precisa ser espec\xedfica para a tarefa, tornando o Zero-Shot-CoT menos generaliz\xe1vel do que parece \xe0 primeira vista."),(0,s.kt)("p",null,"Anecdotamente, descobri que prompts no estilo Zero-shot-CoT s\xe3o \xe0s vezes eficazes em tarefas generativas a fim de diminuir o n\xfamero de sa\xeddas necess\xe1rias. Por exemplo, considere o prompt padr\xe3o ",(0,s.kt)("inlineCode",{parentName:"p"},"Escreva uma hist\xf3ria sobre um sapo e um cogumelo que se tornam amigos"),". Adicionar as palavras ",(0,s.kt)("inlineCode",{parentName:"p"},"Vamos pensar passo a passo.")," no final deste prompt leva a uma sa\xedda muito mais longa."),(0,s.kt)("div",{className:"footnotes"},(0,s.kt)("hr",{parentName:"div"}),(0,s.kt)("ol",{parentName:"div"},(0,s.kt)("li",{parentName:"ol",id:"fn-1"},"Kojima, T., Gu, S. S., Reid, M., Matsuo, Y., & Iwasawa, Y. (2022). Large Language Models are Zero-Shot Reasoners.\n",(0,s.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,s.kt)("li",{parentName:"ol",id:"fn-2"},"Wei, J., Wang, X., Schuurmans, D., Bosma, M., Ichter, B., Xia, F., Chi, E., Le, Q., & Zhou, D. (2022). Chain of Thought Prompting Elicits Reasoning in Large Language Models.\n",(0,s.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}g.isMDXComponent=!0}}]);