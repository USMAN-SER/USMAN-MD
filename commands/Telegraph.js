/**
========================================================
  _   _ ____  __  __    _    _   _       __  __ ____  
 | | | / ___||  \/  |  / \  | \ | |     |  \/  |  _ \ 
 | | | \___ \| |\/| | / _ \ |  \| |_____| |\/| | | | |
 | |_| |___) | |  | |/ ___ \| |\  |_____| |  | | |_| |
  \___/|____/|_|  |_/_/   \_\_| \_|     |_|  |_|____/ 
                                                                                                          
========================================================
 Copyright (C) 2022.                                                                                        
 Licensed under the  GPL-3.0 License;                                                      
 You may not use this file except in compliance with the License.    
 It is supplied in the hope that it may be useful                                     
 * @project_name : USMAN-MD                                                                    
 * @author : USMAN-SER <https://github.com/USMAN-SER>   
 * @description : USMAN-MD ,A Multi-functional whatsapp bot.       
 * @version 2.0.1                                                                                             
 ========================================================
 **/
 
 
const { cmd }   = require('../lib');
const util = require('util');
const axios = require('axios');
cmd({
        pattern: "paste",
        desc: "create paste of text.",
        category: "user",
        filename: __filename,
    },
    async(Void, citel,text) => {
 let a = citel.quoted ? citel.quoted.text : citel.text;
let { data } = await axios.get(`https://api.telegra.ph/createPage?access_token=d3b25feccb89e508a9114afb82aa421fe2a9712b963b387cc5ad71e58722&title=Secktor-2.0+Bot&author_name=Slasher-Official &content=[%7B"tag":"p","children":["${a.replace(/ /g,'+')}"]%7D]&return_content=true`);
return citel.reply(`*Paste created on telegraph*\nName:-${util.format(data.result.title)} \nUrl:- ${util.format(data.result.url)}`)
    }
);

