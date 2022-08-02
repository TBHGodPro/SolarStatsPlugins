const{getConfigSync:b,Command:a}=toolbox,cmd=new a("api",[],[]);cmd.onTriggered=()=>{var{apiKey:a}=b(),c={text:`
\xa73Your API Key Is\xa76:

\xa7e${a.split("").join("\xa7e")}

\xa7r(\xa73Click To Put In The \xa76Chat Bar \xa73So You Can \xa76Copy \xa73It\xa76!\xa7r)
`,clickEvent:{action:"suggest_command",value:a}};player.client.write("chat",{message:JSON.stringify(c)})},registerCommand(cmd),registerPlugin({name:"API Key Viewer",description:".. what do you think dumbass",version:"1.0.1",author:"TBHGodPro"})