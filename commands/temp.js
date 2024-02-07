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

const { cmd } = require('../lib');

// Create a map to store temporary email addresses and messages
const tempEmails = new Map();

// Command for generating a temporary email address
cmd({
    pattern: "tempmail",
    desc: "Generate a temporary email address.",
    category: "utility",
}, async (Void, citel) => {
    const userId = citel.sender;

    // Generate a random temporary email address
    const randomEmail = `user${Math.floor(Math.random() * 10000)}@example.com`;

    // Store the generated email address for the user
    tempEmails.set(userId, { address: randomEmail, messages: [] });

    await citel.reply(`Your temporary email address is: ${randomEmail}`);
});

// Command for checking messages in the temporary email inbox
cmd({
    pattern: "checkmail",
    desc: "Check your temporary email inbox.",
    category: "utility",
}, async (Void, citel) => {
    const userId = citel.sender;

    // Check if the user has a temporary email address
    if (tempEmails.has(userId)) {
        const inbox = tempEmails.get(userId).messages;

        if (inbox.length > 0) {
            // Display the received messages
            let messageList = "Your temporary email inbox:\n";
            inbox.forEach((message, index) => {
                messageList += `${index + 1}. From: ${message.from}, Subject: ${message.subject}\n`;
            });

            await citel.reply(messageList);
        } else {
            await citel.reply("Your temporary email inbox is empty.");
        }
    } else {
        await citel.reply("You don't have a temporary email address. Generate one with '.tempmail' first.");
    }
});
