player.proxy.on("incoming",(a,b,c,d)=>{if("chat"==b.name){var e=JSON.parse(a.message);e.extra??=[],e=[e.text,...e.extra.map(a=>a.text)].join(""),e.match(/watchdog/gi)&&!e.includes("Thanks Watchdog")&&d.write("chat",{message:`Thanks Watchdog${"!".repeat(Math.ceil(3*Math.random()))}`})}}),registerPlugin({name:"Thanks Watchdog!",description:"Thank Watchdog For Absolutely Nothing :P",version:"1.0.0",author:"TBHGodPro"});