const{Command}=toolbox,cmd=new Command("pr",[],["reset"]);var timeStarted=null;cmd.onTriggered=()=>{player.executeCommand("/parkour reset"),timeStarted=null},registerCommand(cmd),player.proxy.on("incoming",(a,b)=>{if("chat"==b.name&&0==a.position){var{message:c}=a;c=JSON.parse(c),c.extra??=[],c=[c.text,...c.extra.map(a=>a.text)].join(""),(c.includes("Parkour challenge started!")||c.includes("Reset your timer to 00:00!"))&&(timeStarted=Date.now()),(c.includes("cancelled")||c.includes("failed")||c.includes("completed")||c.includes("record"))&&(timeStarted=null)}});function parseTime(a){var b=Math.floor(a/6e4).toString();a-=6e4*b;var c=Math.floor(a/1e3).toString();return a=(a-1e3*c).toString(),1==b.length&&(b="0"+b),1==c.length&&(c="0"+c),2==a.length&&(a="0"+a),1==a.length&&(a="00"+a),`§a${b}§f:§a${c}§f.§a${a}`}setInterval(()=>{if(timeStarted){var a=Date.now()-timeStarted;player.client.write("chat",{message:JSON.stringify({text:parseTime(a)}),position:2})}},50),registerPlugin({name:"Parkour Timer",description:"Live Timer For Parkour",version:"1.0.0",author:"TBHGodPro"});