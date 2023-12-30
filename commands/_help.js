
/**
========================================================
██╗   ██╗███████╗███╗   ███╗ █████╗ ███╗   ██╗      ███╗   ███╗██████╗ 
██║   ██║██╔════╝████╗ ████║██╔══██╗████╗  ██║      ████╗ ████║██╔══██╗
██║   ██║███████╗██╔████╔██║███████║██╔██╗ ██║█████╗██╔████╔██║██║  ██║
██║   ██║╚════██║██║╚██╔╝██║██╔══██║██║╚██╗██║╚════╝██║╚██╔╝██║██║  ██║
╚██████╔╝███████║██║ ╚═╝ ██║██║  ██║██║ ╚████║      ██║ ╚═╝ ██║██████╔╝
 ╚═════╝ ╚══════╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝      ╚═╝     ╚═╝╚═════╝      
========================================================

 Copyright (C) 2022.                                     
 Licensed under the  GPL-3.0 License;                    
 You may not use this file except in compliance with the License.  
 It is supplied in the hope that it may be useful                           
 * @project_name : USMAN-MD                                           
 * @author : USMAN-SER <https://github.com/USMAN-SER>
 * @description : USMAN-MD ,A Multi-functional whatsapp bot.   
 * @version 1.0.1                                                                               
 ========================================================
 **/

const os = require('os')
const moment = require("moment-timezone")
const fs = require("fs")
const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1 } = require("../lib");
const long = String.fromCharCode(8206)
const readmore = long.repeat(4001)
const Secktor = require('../lib/commands')

    //---------------------------------------------------------------------------
Secktor.cmd({
            pattern: "help",
            alias: ["menu"],
            desc: "Help list",
            category: "general",
            react: "✨",
            filename: __filename
        },
        async(Void, citel, text) => {
            const { commands } = require('../lib');
            if (text.split(" ")[0]) {
                let arr = [];
                const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
                if (!cmd) return await citel.reply("*❌No Such commands.*");
                else arr.push(`*🍁Command:* ${cmd.pattern}`);
                if (cmd.category) arr.push(`*🧩Category:* ${cmd.category}`);
                if (cmd.alias) arr.push(`*🧩Alias:* ${cmd.alias}`);
                if (cmd.desc) arr.push(`*🧩Description:* ${cmd.desc}`);
                if (cmd.use) arr.push(`*〽️Usage:*\n \`\`\`${prefix}${cmd.pattern} ${cmd.use}\`\`\``);
                return await citel.reply(arr.join('\n'));
            } else {
                const cmds = {}
                commands.map(async(command, index) => {
                    if (command.dontAddCommandList === false && command.pattern !== undefined) {
                        if (!cmds[command.category]) cmds[command.category] = []
                        cmds[command.category].push(command.pattern)
                    }
                })
                const time = moment(moment())
                    .format('HH:mm:ss')
                moment.tz.setDefault('Asia/KOLKATA')
                    .locale('id')
                const date = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                let total = await sck1.countDocuments()
                let str = `╭━━━━〢 *ᴜsᴍᴀɴ-ᴍᴅ* 〢━━◉\n`
                str +=
                    '```' + `┃⌯|━━━━━━━━━━━━━━◉

┃⌯┃ 🌸 OWNER:- ${Config.ownername}
┃⌯┃ 🌸 PREFIX:- [ ${prefix} ]
┃⌯┃ 🌸 VERSION:- 1.0.1
┃⌯┃ 🌸 MEM:- ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
┃⌯┃ 🌸 PLUGINS:- ${commands.length}
┃⌯┃ 🌸 FOUNDER:- USMAN-SER
┃ ╰━━━━━━━━━━━━━━◉\n
` + '```'
                for (const category in cmds) 
                {
                   str += `〢━━━『   *🌸${tiny(category)}🌸* 』━━━〢\n` ;
                   if(text.toLowerCase() == category.toLowerCase()){ str = `〢━━━『 *🌸${tiny(category)}🌸* 』━━━〢\n` ;      
                        for (const plugins of cmds[category]) { str += `┃⌯│ 🍁 ${fancytext(plugins,1)}\n` ; }
                        str += `┃━━━━━━━〢⭓\n`  ;
                        break ;
                   }
                   else { for (const plugins of cmds[category]) { str += `┃⌯│ 🍁 ${fancytext(plugins,1)}\n` ; }
                         str += `┃━━━━━━━〢⭓\n`  ; 
                   }
  
                }
                str+= `*⭐️Type:* _${prefix}help cmd_ name to know more about specific command.\n*Eg:* _${prefix}help attp_\n*
                🍁┃ᴜsᴍᴀɴ-ᴍᴅ ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ┃ 🍁* `
                let buttonMessaged = {
                    image: { url: await botpic() },
                    caption: str
                };
                return await Void.sendMessage(citel.chat, buttonMessaged);
            }
        }
    )
    //---------------------------------------------------------------------------
Secktor.cmd({
              pattern: "list",
              desc: "list menu",
              category: "general",
              react: "🥀"
           },
          async(Void, msg , text ) => {
            
              const { commands } = require('../lib');
              text = `
  ╭━━〘 *ᴜsᴍᴀɴ-ᴍᴅ* 〙────⊷     
  ┃ 🌸 Theme: ${tlang().title}
  ┃ 🌸 Prefix: ${prefix}
  ┃ 🌸 Owner: ${Config.ownername}
  ┃ 🌸 Commands: ${commands.length}
  ┃ 🌸 Uptime: ${runtime(process.uptime())}
  ┃ 🌸 Mem: ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
  ╰━━━━━━━━━━━━━━⊷\n`
  text = '';
              for (let i = 0; i < commands.length; i++){if(commands[i].pattern==undefined){ continue; }else { text += `*${i+1} ${fancytext(commands[i].pattern,1)}*\n  ${fancytext(commands[i].desc,1)}\n`}}
  
              
   
   //str += `╰━━━━━━━━━━━───⊷\nusman-ᴏꜰꜰɪᴄɪᴀʟ \n www.youtube.com/c/infinite9452`
             try{ return await Void.sendMessage(citel.chat, { image: { url: THUMB_IMAGE }, caption: text + Config.caption}); }catch{return await send(citel,str,{},"",citel);}
          }
      )
    //---------------------------------------------------------------------------
Secktor.cmd({
        pattern: "owner",
        desc: "To find owner number",
        category: "general",
        react: "💜",
        filename: __filename
    },
    async(Void, citel) => {
        const Config = require('../config')
        const vcard = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'FN:' + Config.ownername + '\n' +
            'ORG:;\n' +
            'TEL;type=CELL;type=VOICE;waid=' + owner[0] + ':+' + owner[0] + '\n' +
            'END:VCARD'
        let buttonMessaged = {
            contacts: { displayName: Config.ownername, contacts: [{ vcard }] },
            contextInfo: {
                externalAdReply: {
                    title: Config.ownername,
                    body: 'Touch here.',
                    renderLargerThumbnail: true,
                    thumbnailUrl: ``,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: '',
                    sourceUrl: `https://wa.me/+923090658722` + owner[1] + '?text=Hii bro,I am ' + citel.pushName,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)

Secktor.cmd({
    pattern: "file",
    desc: "to get extact name where that command is in repo.\nSo user can edit that.",
    category: "general",
    react: "✨",
    filename: __filename
},
async(Void, citel, text) => {
 const { commands } = require('../lib');
 let arr = [];
        const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
        if (!cmd) return await citel.reply("*❌No Such commands.*");
        else arr.push(`*🍁Command:* ${cmd.pattern}`);
        if (cmd.category) arr.push(`*🧩Type:* ${cmd.category}`);
        if(cmd.filename) arr.push(`✨FileName: ${cmd.filename}`)
        return citel.reply(arr.join('\n'));


})
  
