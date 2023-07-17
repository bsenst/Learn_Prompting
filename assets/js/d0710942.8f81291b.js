"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[8321],{84685:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>g,metadata:()=>s,toc:()=>d});var l=a(87462),i=(a(67294),a(3905));const o=a.p+"assets/images/math-79b401d521d572664f685639576a3aec.webp";var n=a(39145);const g={sidebar_position:70},r="\ud83d\udfe1 Math",s={unversionedId:"reliability/math",id:"reliability/math",title:"\ud83d\udfe1 Math",description:"Throughout this course, we have seen many different prompting methods that can be used to improve %%LLM|LLM%% math ability. One recent approach, MathPrompter(@imani2023mathprompter), unifies some of these methods (%%CoT|CoT prompting%%, %%PAL|PAL%%, etc.) into a single technique. The overarching idea is to break down a math question into algebraic terms then use Python code to solve it in different ways.",source:"@site/docs/reliability/math.md",sourceDirName:"reliability",slug:"/reliability/math",permalink:"/docs/reliability/math",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/reliability/math.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{sidebar_position:70},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd34 Calibrating LLMs",permalink:"/docs/reliability/calibration"},next:{title:"\ud83d\uddbc\ufe0f Image Prompting",permalink:"/docs/category/\ufe0f-image-prompting"}},c={},d=[{value:"Step 1: Generate Algebraic Template",id:"step-1-generate-algebraic-template",level:2},{value:"Step 2: Math Prompts",id:"step-2-math-prompts",level:2},{value:"2a: Algebraic Statement",id:"2a-algebraic-statement",level:3},{value:"2b: Python Code",id:"2b-python-code",level:3},{value:"Answer Generation",id:"answer-generation",level:3},{value:"Step 4: Self-Consistency",id:"step-4-self-consistency",level:2},{value:"Conclusion",id:"conclusion",level:2}],h={toc:d},p="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,l.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-math"},"\ud83d\udfe1 Math"),(0,i.kt)("p",null,"Throughout this course, we have seen many different prompting methods that can be used to improve ",(0,i.kt)("a",{parentName:"p",id:"LLM_0_98_1689562441173","data-tooltip-html":"Large Language Model. A model that is trained to predict the next word in a sentence.","data-tooltip-place":"top"},"LLM"),(0,i.kt)(n.u,{anchorId:"LLM_0_98_1689562441173",clickable:!0,mdxType:"Tooltip"})," math ability. One recent approach, MathPrompter",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),", unifies some of these methods (",(0,i.kt)("a",{parentName:"p",id:"CoT prompting_5_33_1689562441173","data-tooltip-html":"The main idea of CoT is that by showing the LLM some few shot exemplars where the reasoning process is explained in the exemplars, the LLM will also show the reasoning process when answering the prompt.","data-tooltip-place":"top"},"CoT"),(0,i.kt)(n.u,{anchorId:"CoT prompting_5_33_1689562441173",clickable:!0,mdxType:"Tooltip"}),", ",(0,i.kt)("a",{parentName:"p",id:"PAL_8_2_1689562441173","data-tooltip-html":"A method that uses code as intermediate reasoning<br>see <a href='https://learnprompting.org/docs/advanced_applications/pal'>PAL</a>","data-tooltip-place":"top"},"PAL"),(0,i.kt)(n.u,{anchorId:"PAL_8_2_1689562441173",clickable:!0,mdxType:"Tooltip"}),", etc.) into a single technique. The overarching idea is to break down a math question into algebraic terms then use Python code to solve it in different ways."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:o,style:{width:"500px"}})),(0,i.kt)("p",null,"MathPrompter has ",(0,i.kt)("strong",{parentName:"p"},"four")," steps. We will explain them using the following example problem. The example is taken directly from the paper."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Q: At a restaurant, each adult meal costs $5 and kids eat free. If a group of 15\npeople came in and 8 were kids, how much would it cost for the group to eat?\n")),(0,i.kt)("h2",{id:"step-1-generate-algebraic-template"},"Step 1: Generate Algebraic Template"),(0,i.kt)("p",null,"The first step is to assign a variable to each number in the question. This helps because it allows easier translation of the question into an abstract math question, as well as into programming code."),(0,i.kt)("p",null,"This can be done via few shot prompting:"),(0,i.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IlF0OiBBdCBhIHJlc3RhdXJhbnQsIGVhY2ggYWR1bHQgbWVhbCBjb3N0cyAkQSBhbmQga2lkcyBlYXQgZnJlZS4gSWYgYSBncm91cCBvZiBCIHBlb3BsZSBjYW1lIGluIGFuZCBDIHdlcmUga2lkcywgaG93IG11Y2ggd291bGQgaXQgY29zdCBmb3IgdGhlIGdyb3VwIHRvIGVhdD9cbk1hcHBpbmc6IHtBOiA1LCBCOiAxNSwgQzogOH0iLCJwcm9tcHQiOiJROiBBIHpvbyBjaGFyZ2VzICQxMiBwZXIgYWR1bHQgdGlja2V0IGFuZCBhbGxvd3MgY2hpbGRyZW4gdW5kZXIgNSB0byBlbnRlciBmb3IgZnJlZS4gQSBmYW1pbHkgb2YgNCBhZHVsdHMgYW5kIDIgY2hpbGRyZW4gdW5kZXIgNSB2aXNpdCB0aGUgem9vLiBXaGF0IGlzIHRoZSB0b3RhbCBjb3N0IGZvciB0aGUgZmFtaWx5IHRvIGVudGVyP1xuUXQ6IEF0IGEgem9vLCBlYWNoIGFkdWx0IHRpY2tldCBjb3N0cyAkQSBhbmQgY2hpbGRyZW4gdW5kZXIgNSBjYW4gZW50ZXIgZm9yIGZyZWUuIElmIGEgZmFtaWx5IG9mIEIgYWR1bHRzIGFuZCBDIGNoaWxkcmVuIHVuZGVyIDUgdmlzaXQgdGhlIHpvbywgd2hhdCBpcyB0aGUgdG90YWwgY29zdCBmb3IgdGhlIGZhbWlseSB0byBlbnRlcj9cbk1hcHBpbmc6IHtBOiAxMiwgQjogNCwgQzogMn1cblxuUTogQSBzdG9yZSBzZWxscyBzaG9lcyBhdCAkNjAgcGVyIHBhaXIgYW5kIHNvY2tzIGF0ICQ4IHBlciBwYWlyLiBJZiBhIGN1c3RvbWVyIGJ1eXMgMiBwYWlycyBvZiBzaG9lcyBhbmQgMyBwYWlycyBvZiBzb2Nrcywgd2hhdCBpcyB0aGUgdG90YWwgY29zdCBvZiB0aGUgcHVyY2hhc2U%2FXG5RdDogQXQgYSBzdG9yZSwgc2hvZXMgY29zdCAkQSBwZXIgcGFpciBhbmQgc29ja3MgY29zdCAkQiBwZXIgcGFpci4gSWYgYSBjdXN0b21lciBidXlzIEMgcGFpcnMgb2Ygc2hvZXMgYW5kIEQgcGFpcnMgb2Ygc29ja3MsIHdoYXQgaXMgdGhlIHRvdGFsIGNvc3Qgb2YgdGhlIHB1cmNoYXNlP1xuTWFwcGluZzoge0E6IDYwLCBCOiA4LCBDOiAyLCBEOiAzfVxuXG5ROiBBdCBhIHJlc3RhdXJhbnQsIGVhY2ggYWR1bHQgbWVhbCBjb3N0cyAkNSBhbmQga2lkcyBlYXQgZnJlZS4gSWYgYSBncm91cCBvZiAxNVxucGVvcGxlIGNhbWUgaW4gYW5kIDggd2VyZSBraWRzLCBob3cgbXVjaCB3b3VsZCBpdCBjb3N0IGZvciB0aGUgZ3JvdXAgdG8gZWF0PyIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,i.kt)("h2",{id:"step-2-math-prompts"},"Step 2: Math Prompts"),(0,i.kt)("p",null,"The point of this step is to formulate the problem as both an algebraic statement and as Python code. This step has two simultaneous prompts, which help to give diverse representations of the problem."),(0,i.kt)("h3",{id:"2a-algebraic-statement"},"2a: Algebraic Statement"),(0,i.kt)("p",null,'We can few-shot prompt the LLM to represent the math problem as an algebraic statement. This is done by asking the LLM to generate the answer format, starting with "Answer =".'),(0,i.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkFuc3dlciA9IEEgKiBCIC0gQSAqIEMiLCJwcm9tcHQiOiJRdDogQXQgYSB6b28sIGVhY2ggYWR1bHQgdGlja2V0IGNvc3RzICRBIGFuZCBjaGlsZHJlbiB1bmRlciA1IGNhbiBlbnRlciBmb3IgZnJlZS4gSWYgYSBmYW1pbHkgb2YgQiBhZHVsdHMgYW5kIEMgY2hpbGRyZW4gdW5kZXIgNSB2aXNpdCB0aGUgem9vLCB3aGF0IGlzIHRoZSB0b3RhbCBjb3N0IGZvciB0aGUgZmFtaWx5IHRvIGVudGVyP1xuTWFwcGluZzoge0E6IDEyLCBCOiA0LCBDOiAyfVxuXG5Xcml0ZSBhIG1hdGhlbWF0aWNhbCBlcXVhdGlvbiBhbmQgZ2VuZXJhdGUgdGhlIGFuc3dlciBmb3JtYXRcbnN0YXJ0aW5nIHdpdGggJ0Fuc3dlciA9J1xuXG5BbnN3ZXIgPSBBICogQlxuXG5RdDogQXQgYSBzdG9yZSwgc2hvZXMgY29zdCAkQSBwZXIgcGFpciBhbmQgc29ja3MgY29zdCAkQiBwZXIgcGFpci4gSWYgYSBjdXN0b21lciBidXlzIEMgcGFpcnMgb2Ygc2hvZXMgYW5kIEQgcGFpcnMgb2Ygc29ja3MsIHdoYXQgaXMgdGhlIHRvdGFsIGNvc3Qgb2YgdGhlIHB1cmNoYXNlP1xuTWFwcGluZzoge0E6IDYwLCBCOiA4LCBDOiAyLCBEOiAzfVxuXG5Xcml0ZSBhIG1hdGhlbWF0aWNhbCBlcXVhdGlvbiBhbmQgZ2VuZXJhdGUgdGhlIGFuc3dlciBmb3JtYXRcbnN0YXJ0aW5nIHdpdGggJ0Fuc3dlciA9J1xuXG5BbnN3ZXIgPSBBICogQyArIEIgKiBEXG5cblF0OiBBdCBhIHJlc3RhdXJhbnQsIGVhY2ggYWR1bHQgbWVhbCBjb3N0cyAkQSBhbmQga2lkcyBlYXQgZnJlZS4gSWYgYSBncm91cCBvZiBCIHBlb3BsZSBjYW1lIGluIGFuZCBDIHdlcmUga2lkcywgaG93IG11Y2ggd291bGQgaXQgY29zdCBmb3IgdGhlIGdyb3VwIHRvIGVhdD9cbk1hcHBpbmc6IHtBOiA1LCBCOiAxNSwgQzogOH1cblxuV3JpdGUgYSBtYXRoZW1hdGljYWwgZXF1YXRpb24gYW5kIGdlbmVyYXRlIHRoZSBhbnN3ZXIgZm9ybWF0XG5zdGFydGluZyB3aXRoICdBbnN3ZXIgPSciLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,i.kt)("h3",{id:"2b-python-code"},"2b: Python Code"),(0,i.kt)("p",null,"We can also ask the ",(0,i.kt)("a",{parentName:"p",id:"LLM_0_20_1689562441173","data-tooltip-html":"Large Language Model. A model that is trained to predict the next word in a sentence.","data-tooltip-place":"top"},"LLM"),(0,i.kt)(n.u,{anchorId:"LLM_0_20_1689562441173",clickable:!0,mdxType:"Tooltip"})," to generate Python code that solves the problem. This is done by asking the LLM to generate a Python function."),(0,i.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6ImRlZiByZXN0YXVyYW50X2Nvc3QoQSwgQiwgQyk6XG4gIHJldHVybiBBICogKEIgLSBDKSIsInByb21wdCI6IlF0OiBBdCBhIHpvbywgZWFjaCBhZHVsdCB0aWNrZXQgY29zdHMgJEEgYW5kIGNoaWxkcmVuIHVuZGVyIDUgY2FuIGVudGVyIGZvciBmcmVlLiBJZiBhIGZhbWlseSBvZiBCIGFkdWx0cyBhbmQgQyBjaGlsZHJlbiB1bmRlciA1IHZpc2l0IHRoZSB6b28sIHdoYXQgaXMgdGhlIHRvdGFsIGNvc3QgZm9yIHRoZSBmYW1pbHkgdG8gZW50ZXI%2FXG5NYXBwaW5nOiB7QTogMTIsIEI6IDQsIEM6IDJ9XG5cbldyaXRlIGEgUHl0aG9uIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgYW5zd2VyLlxuXG5kZWYgem9vX2Nvc3QoQSwgQiwgQyk6XG4gIHJldHVybiBBICogQlxuXG5cblF0OiBBdCBhIHN0b3JlLCBzaG9lcyBjb3N0ICRBIHBlciBwYWlyIGFuZCBzb2NrcyBjb3N0ICRCIHBlciBwYWlyLiBJZiBhIGN1c3RvbWVyIGJ1eXMgQyBwYWlycyBvZiBzaG9lcyBhbmQgRCBwYWlycyBvZiBzb2Nrcywgd2hhdCBpcyB0aGUgdG90YWwgY29zdCBvZiB0aGUgcHVyY2hhc2U%2FXG5cbldyaXRlIGEgUHl0aG9uIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgYW5zd2VyLlxuXG5kZWYgc3RvcmVfY29zdChBLCBCLCBDLCBEKTpcbiAgcmV0dXJuIChBICogQykgKyAoQiAqIEQpXG5cblF0OiBBdCBhIHJlc3RhdXJhbnQsIGVhY2ggYWR1bHQgbWVhbCBjb3N0cyAkQSBhbmQga2lkcyBlYXQgZnJlZS4gSWYgYSBncm91cCBvZiBCIHBlb3BsZSBjYW1lIGluIGFuZCBDIHdlcmUga2lkcywgaG93IG11Y2ggd291bGQgaXQgY29zdCBmb3IgdGhlIGdyb3VwIHRvIGVhdD9cblxuV3JpdGUgYSBQeXRob24gZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBhbnN3ZXIuIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,i.kt)("h3",{id:"answer-generation"},"Answer Generation"),(0,i.kt)("p",null,"Now, we can use the Mapping that we generated previously to automatically fill in the variables."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Mapping: {A: 5, B: 15, C: 8}\n")),(0,i.kt)("p",null,"Algebraic: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Answer = 5 * 15 - 5 * 8\n")),(0,i.kt)("p",null,"Python function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def restaurant_cost(A=5, B=15, C=8):\n  return A * (B - C)\n")),(0,i.kt)("p",null,"We can evaluate both using Python."),(0,i.kt)("p",null,"Algebraic:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'>>> eval("5 * 15 - 5 * 8")\n35\n')),(0,i.kt)("p",null,"Python function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},">>> restaurant_cost()\n35\n")),(0,i.kt)("h2",{id:"step-4-self-consistency"},"Step 4: Self-Consistency"),(0,i.kt)("p",null,"Finally, we will leverage ",(0,i.kt)("a",{parentName:"p",id:"self_consistency_0_26_1689562441173","data-tooltip-html":"Generating multiple chains of thought and taking the majority answer.<br>See <a href='https://learnprompting.org/docs/intermediate/self_consistency'>Self Consistency</a>","data-tooltip-place":"top"},"Self-Consistency"),(0,i.kt)(n.u,{anchorId:"self_consistency_0_26_1689562441173",clickable:!0,mdxType:"Tooltip"})," to rerun the above process multiple times (~5), then take the majority answer."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"MathPrompter reports 92.5% accuracy on the MultiArith",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," dataset. The success of this technique is a great example of how ",(0,i.kt)("strong",{parentName:"p"},"you")," as a prompt engineer can take methods that you have learned throughout this course and combine them to deal with larger problems."),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Imani, S., Du, L., & Shrivastava, H. (2023). MathPrompter: Mathematical Reasoning using Large Language Models.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"Roy, S., & Roth, D. (2015). Solving General Arithmetic Word Problems. Proceedings of the 2015 Conference on Empirical Methods in Natural Language Processing, 1743\u20131752. https://doi.org/10.18653/v1/D15-1202\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);