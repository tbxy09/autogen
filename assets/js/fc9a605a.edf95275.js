"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[795],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),m=c(n),h=o,d=m["".concat(l,".").concat(h)]||m[h]||p[h]||i;return n?a.createElement(d,s(s({ref:t},u),{},{components:n})):a.createElement(d,s({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2752:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const i={},s="Multi-agent Conversation Framework",r={unversionedId:"Use-Cases/agent_chat",id:"Use-Cases/agent_chat",isDocsHomePage:!1,title:"Multi-agent Conversation Framework",description:"AutoGen offers a unified multi-agent conversation framework as a high-level abstraction of using foundation models. It features capable, customizable and conversable agents which integrate LLM, tool and human via automated agent chat.",source:"@site/docs/Use-Cases/agent_chat.md",sourceDirName:"Use-Cases",slug:"/Use-Cases/agent_chat",permalink:"/AutoGen/docs/Use-Cases/agent_chat",editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/Use-Cases/agent_chat.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Installation",permalink:"/AutoGen/docs/Installation"},next:{title:"Enhanced Inference",permalink:"/AutoGen/docs/Use-Cases/enhanced_inference"}},l=[{value:"Agents",id:"agents",children:[],level:3},{value:"Multi-agent Conversations",id:"multi-agent-conversations",children:[{value:"A Basci Two-Agent Conversation Example",id:"a-basci-two-agent-conversation-example",children:[],level:3},{value:"Supporting Diverse Conversation Patterns",id:"supporting-diverse-conversation-patterns",children:[{value:"Conversations with different autonomisity, and human involvement patterns",id:"conversations-with-different-autonomisity-and-human-involvement-patterns",children:[],level:4},{value:"Static and dynamic conversations",id:"static-and-dynamic-conversations",children:[],level:4}],level:3},{value:"Diverse Applications Implemented with AutoGen",id:"diverse-applications-implemented-with-autogen",children:[],level:3}],level:2},{value:"For Further Reading",id:"for-further-reading",children:[],level:2}],c={toc:l};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"multi-agent-conversation-framework"},"Multi-agent Conversation Framework"),(0,o.kt)("p",null,"AutoGen offers a unified multi-agent conversation framework as a high-level abstraction of using foundation models. It features capable, customizable and conversable agents which integrate LLM, tool and human via automated agent chat.\nBy automating chat among multiple capable agents, one can easily make them collectively perform tasks autonomously or with human feedback, including tasks that require using tools via code."),(0,o.kt)("p",null,"This framework simplifies the orchestration, automation and optimization of a complex LLM workflow. It maximizes the performance of LLM models and augments their weakness. It enables building next-gen LLM applications based on multi-agent conversations with minimal effort."),(0,o.kt)("h3",{id:"agents"},"Agents"),(0,o.kt)("p",null,"AutoGen abstracts and implements conversable agents\ndesigned to solve tasks through inter-agent conversations. Specifically, the agents in AutoGen have the following notable features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Conversable: Agent in AutoGen are conversable, which means that any agent can send\nand receive messages to and from the other agents to start or continue a conversation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Customizable: Agents in AutoGen can be customized to integrate LLMs, humans, tools, or a combination of them."))),(0,o.kt)("p",null,"The figure below shows the built-in agents in AutoGen.\n",(0,o.kt)("img",{alt:"Agent Chat Example",src:n(9049).Z})),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ResponsiveAgent"),"  by default can use LLMs, humans, and tools. The ",(0,o.kt)("inlineCode",{parentName:"p"},"AssistantAgent")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"UserProxyAgent")," are two pre-configured versions of ",(0,o.kt)("inlineCode",{parentName:"p"},"ResponsiveAgent"),", each representing a common usage mode. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"AssistantAgent")," is designed to act as an AI assistant, using LLMs by default but not requiring human input or code execution. It could write Python code (in a Python coding block) for a user to execute when a message (typically a description of a task that needs to be solved) is received. Under the hood, the Python code is written by LLM (e.g., GPT-4). It can also receive the execution results and suggest code with bug fix. Its behavior can be altered by passing a new system message. The LLM ",(0,o.kt)("a",{parentName:"p",href:"#enhanced-inference"},"inference")," configuration can be configured via ",(0,o.kt)("inlineCode",{parentName:"p"},"llm_config"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"UserProxyAgent")," is conceptually a proxy agent for humans, soliciting human input as the agent's reply at each interaction turn by default and also having the capability to execute code and call functions. The ",(0,o.kt)("inlineCode",{parentName:"p"},"UserProxyAgent")," triggers code execution automatically when it detects an executable code block in the received message and no human user input is provided. Code execution can be disabled by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"code_execution_config")," to False. LLM-based response is disabled by default. It can be enabled by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"llm_config")," to a dict corresponding to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/Use-Cases/enhanced_inference"},"inference")," configuration. When ",(0,o.kt)("inlineCode",{parentName:"p"},"llm_config")," is set to a dict, ",(0,o.kt)("inlineCode",{parentName:"p"},"UserProxyAgent")," can generate replies using an LLM when code execution is not performed. When ",(0,o.kt)("inlineCode",{parentName:"p"},"llm_config")," is set to a dict, ",(0,o.kt)("inlineCode",{parentName:"p"},"UserProxyAgent")," can generate replies using an LLM when code execution is not performed."))),(0,o.kt)("p",null,"In the following code, we create an ",(0,o.kt)("inlineCode",{parentName:"p"},"AssistantAgent"),' named "assistant" to serve as the assistant and a ',(0,o.kt)("inlineCode",{parentName:"p"},"UserProxyAgent"),' named "user_proxy" to serve as a proxy for the human user. We will later employ these two agents to solve a task.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from flaml.autogen import AssistantAgent, UserProxyAgent\n\n# create an AssistantAgent instance named "assistant"\nassistant = AssistantAgent(name="assistant")\n\n# create a UserProxyAgent instance named "user_proxy"\nuser_proxy = UserProxyAgent(name="user_proxy")\n')),(0,o.kt)("h2",{id:"multi-agent-conversations"},"Multi-agent Conversations"),(0,o.kt)("h3",{id:"a-basci-two-agent-conversation-example"},"A Basci Two-Agent Conversation Example"),(0,o.kt)("p",null,"Once the participating agents are constructed properly, one can start a multi-agent conversation session by an initialization step as shown in following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# the assistant receives a message from the user, which contains the task description\nuser_proxy.initiate_chat(\n    assistant,\n    message="""What date is today? Which big tech stock has the largest year-to-date gain this year? How much is the gain?""",\n)\n')),(0,o.kt)("p",null,"After the initialization step, the conversation could proceed automatically. Find a visual illustration of how the user_proxy and assistant collaboratively solve the above task autonmously below:\n",(0,o.kt)("img",{alt:"Agent Chat Example",src:n(4595).Z})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The assistant receives a message from the user_proxy, which contains the task description."),(0,o.kt)("li",{parentName:"ol"},"The assistant then tries to write Python code to solve the task and sends the response to the user_proxy."),(0,o.kt)("li",{parentName:"ol"},"Once the user_proxy receives a response from the assistant, it tries to reply by either soliciting human input or preparing an automatically generated reply. If no human input is provided, the user_proxy executes the code and uses the result as the auto-reply."),(0,o.kt)("li",{parentName:"ol"},"The assistant then generates a further response for the user_proxy. The user_proxy can then decide whether to terminate the conversation. If not, steps 3 and 4 are repeated.")),(0,o.kt)("h3",{id:"supporting-diverse-conversation-patterns"},"Supporting Diverse Conversation Patterns"),(0,o.kt)("h4",{id:"conversations-with-different-autonomisity-and-human-involvement-patterns"},"Conversations with different autonomisity, and human involvement patterns"),(0,o.kt)("p",null,"On the one hand, one can achieve fully autonomous conversations after an initialization step. On the other hand, AutoGen can be used to implement human-in-the-loop problem-solving by configuring human involvement levels and patterns (e.g., setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"human_input_mode")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"ALWAYS"),"), as human involvement is expected and/or desired in many applications."),(0,o.kt)("h4",{id:"static-and-dynamic-conversations"},"Static and dynamic conversations"),(0,o.kt)("p",null,"By adopting the conversation-driven control with both programming language and natural language, AutoGen inherently allows dynamic conversation. Dynamic conversation allows the agent topology to change depending on the actual flow of conversation under different input problem instances, while the flow of a static conversation always follows a pre-defined topology. The dynamic conversation pattern is useful in complex applications where the patterns of interaction cannot be predetermined in advance. AutoGen provides two general approaches to achieving dynamic conversation:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Registered auto-reply. With the pluggable auto-reply function, one can choose to invoke conversations with other agents depending on the content of the current message and context. A working system demonstrating this type of dynamic conversation can be found in this code example, demonstrating a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/flaml/blob/main/notebook/autogen_agentchat_groupchat.ipynb"},"dynamic group chat"),". In the system, we register an auto-reply function in the group chat manager, which lets LLM decide who will the next speaker be in a group chat setting. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"LLM-based function call. In this approach, LLM decides whether or not to call a particular function depending on the conversation status in each inference call.\nBy messaging additional agents in the called functions, the LLM can drive dynamic multi-agent conversation. A working system showcasing this type of dynamic conversation can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/flaml/blob/main/notebook/autogen_agentchat_two_users.ipynb"},"multi-user math problem solving scenario"),", where a student assistant would automatically resort to an expert using function calls. "))),(0,o.kt)("h3",{id:"diverse-applications-implemented-with-autogen"},"Diverse Applications Implemented with AutoGen"),(0,o.kt)("p",null,"The figure below shows six examples of applications built using AutoGen.\n",(0,o.kt)("img",{alt:"Applications",src:n(469).Z})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/flaml/blob/main/notebook/autogen_agentchat_auto_feedback_from_code_execution.ipynb"},"Automated Task Solving with Code Generation, Execution & Debugging")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/flaml/blob/main/notebook/autogen_agentchat_human_feedback.ipynb"},"Auto Code Generation, Execution, Debugging and Human Feedback")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/flaml/blob/main/notebook/autogen_agentchat_web_info.ipynb"},"Solve Tasks Requiring Web Info")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/flaml/blob/main/notebook/autogen_agentchat_function_call.ipynb"},"Use Provided Tools as Functions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/flaml/blob/main/notebook/autogen_agentchat_planning.ipynb"},"Automated Task Solving with Coding & Planning Agents")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/flaml/blob/main/notebook/autogen_agentchat_two_users.ipynb"},"Automated Task Solving with GPT-4 + Multiple Human Users")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/flaml/blob/main/notebook/autogen_agentchat_chess.ipynb"},"Automated Chess Game Playing & Chitchatting by GPT-4 Agents")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/flaml/blob/main/notebook/autogen_agentchat_groupchat.ipynb"},"Automated Task Solving by Group Chat")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/flaml/blob/main/notebook/autogen_agentchat_stream.ipynb"},"Automated Continual Learning from New Data"))),(0,o.kt)("h2",{id:"for-further-reading"},"For Further Reading"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Interested in the research that leads to this package? Please check the following papers.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2308.08155"},"AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation Framework"),". Qingyun Wu, Gagan Bansal, Jieyu Zhang, Yiran Wu, Shaokun Zhang, Erkang Zhu, Beibin Li, Li Jiang, Xiaoyun Zhang and Chi Wang. ArXiv 2023.")))}u.isMDXComponent=!0},4595:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/agent_example-a965f253ce7d8e1548ff819e19edc5e4.png"},469:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/app-b0acafd5e331fa9471ab6d0e7010a83d.png"},9049:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/autogen_agents-218394c212f6d67cd6911131c3399080.png"}}]);