"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[2396],{28210:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>p,toc:()=>h});var o=a(87462),r=(a(67294),a(3905));const i=a.p+"assets/images/gold_unimportant-769445c9f0cc0c8b26674203220c4163.webp";var s=a(39145);const n={sidebar_position:7},l="\ud83d\udfe2 What's in a Prompt?",p={unversionedId:"intermediate/whats_in_a_prompt",id:"intermediate/whats_in_a_prompt",title:"\ud83d\udfe2 What's in a Prompt?",description:"We have gone through a few different prompting strategies in the previous pages.",source:"@site/docs/intermediate/whats_in_a_prompt.md",sourceDirName:"intermediate",slug:"/intermediate/whats_in_a_prompt",permalink:"/si/docs/intermediate/whats_in_a_prompt",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/intermediate/whats_in_a_prompt.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe1 Least to Most Prompting",permalink:"/si/docs/intermediate/least_to_most"},next:{title:"\ud83e\uddea Applied Prompting",permalink:"/si/docs/category/-applied-prompting"}},m={},h=[{value:"&quot;Ground Truth Matters Little&quot;",id:"ground-truth-matters-little",level:2},{value:"Labelspace Matters",id:"labelspace-matters",level:2},{value:"Format Matters",id:"format-matters",level:2},{value:"Notes",id:"notes",level:2}],d={toc:h},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-whats-in-a-prompt"},"\ud83d\udfe2 What's in a Prompt?"),(0,r.kt)("p",null,"We have gone through a few different prompting strategies in the previous pages.\nThis page will offer some general advice about what is actually important in a prompt."),(0,r.kt)("h2",{id:"ground-truth-matters-little"},'"Ground Truth Matters Little"'),(0,r.kt)("p",null,"Surprisingly, when providing few shot ",(0,r.kt)("a",{parentName:"p",id:"exemplars_0_38_1689563387128","data-tooltip-html":"Examples of the task that the prompt is trying to solve, which are included in the prompt itself.","data-tooltip-place":"top"},"exemplars"),(0,r.kt)(s.u,{anchorId:"exemplars_0_38_1689563387128",clickable:!0,mdxType:"Tooltip"})," in prompts, the actual answers (",(0,r.kt)("a",{parentName:"p",id:"gold_labels_3_33_1689563387128","data-tooltip-html":"The correct labels for a given task.","data-tooltip-place":"top"},"gold"),(0,r.kt)(s.u,{anchorId:"gold_labels_3_33_1689563387128",clickable:!0,mdxType:"Tooltip"}),")\nin the exemplars are not important. As shown in the figure below, providing random\n",(0,r.kt)("a",{parentName:"p",id:"labels_6_86_1689563387128","data-tooltip-html":"The concept of labels is best understood with an example. <br/><br/>Say we want to classify some Tweets as mean or not mean. If we have a list of Tweets and their corresponding *label* (mean or not mean), we can train a model to classify whether tweets are mean or not. Labels are generally just possibilities for the classification task.","data-tooltip-place":"top"},"labels"),(0,r.kt)(s.u,{anchorId:"labels_6_86_1689563387128",clickable:!0,mdxType:"Tooltip"})," in the exemplars barely hurts performance",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),'. "Demo" is synonymous\nwith exemplar in this image.'),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:i,style:{width:"750px"}})),(0,r.kt)("h2",{id:"labelspace-matters"},"Labelspace Matters"),(0,r.kt)("p",null,"Even though the gold labels in the exemplars are not important, the ",(0,r.kt)("a",{parentName:"p",id:"labelspace_0_68_1689563387128","data-tooltip-html":"All of the possible labels for a given task.","data-tooltip-place":"top"},"labelspace"),(0,r.kt)(s.u,{anchorId:"labelspace_0_68_1689563387128",clickable:!0,mdxType:"Tooltip"}),"\nis.\nEven providing random labels from the labelspace helps the LLM get a better understanding\nof the labelspace, and improves results. Additionally, properly representing the\ndistribution of the labelspace in the exemplars is important. Rather than uniformly\nsampling from the labelspace in the exemplars, it is better to sample according to the true distribution of the labels."),(0,r.kt)("h2",{id:"format-matters"},"Format Matters"),(0,r.kt)("p",null,"Perhaps the most important part of exemplars is how they are formatted. This\nformat instructs the LLM on how to properly format its answer to the prompt."),(0,r.kt)("p",null,"For example, consider the below exemplars. They use all capital words as answers.\nEven though the answers are completely wrong (2+2 is not 50), GPT-3 correctly answers\nthe last question, and follows the format of the others."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"What is 2+2? \nFIFTY\nWhat is 20+5?\nFORTY-THREE\nWhat is 12+9?\n// highlight-start\nTWENTY-ONE\n// highlight-end\n")),(0,r.kt)("h2",{id:"notes"},"Notes"),(0,r.kt)("p",null,"Between 4-8 exemplars is a good number to use for few shot prompts",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),",\nbut it can often be helpful to put as many as possible."),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Min, S., Lyu, X., Holtzman, A., Artetxe, M., Lewis, M., Hajishirzi, H., & Zettlemoyer, L. (2022). Rethinking the Role of Demonstrations: What Makes In-Context Learning Work?\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);