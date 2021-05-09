const Discord = require("discord.js");
const client = new Discord.Client()
require("dotenv").config();

client.login(process.env.TOKEN)
client.on("ready",()=>{
    console.log("I'm ready!")
})
client.on("message",msg=>{
    if(msg.content=="!ping"){
        msg.reply("Pong!")
    }
})
client.on("message",msg=>{
    if(msg.content=="start" && (msg.author.id=="398147766687236107"||msg.author.id=="364896741742477313")){
        count=0;
        msg.channel.send("Starting operation..").then((msg1)=>{
            msg.guild.members.cache.filter(i => !i.hasPermission("ADMINISTRATOR")&&!i.displayName.toLowerCase().includes("the tilted")).map((value, key) => {
                value.setNickname(`The Tilted ${value.nickname}`).catch((e)=>{
                    console.error("err1")
                });
                count++;
                });
                msg1.edit(`Succesfully changed ${count} members names!`)
          
        })
       
        
    }
})
client.on("guildMemberAdd",m=>{
    console.log(m.displayName)
    m.setNickname(`The Tilted ${m.displayName}`)
})

