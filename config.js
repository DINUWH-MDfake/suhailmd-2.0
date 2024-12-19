const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_51_12_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI5LFxuICAgICAgICA2NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDM4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI3LFxuICAgICAgICA1NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDM0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDYzLFxuICAgICAgICA5NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTIsXG4gICAgICAgIDY1LFxuICAgICAgICAyMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ4LFxuICAgICAgICA3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3LFxuICAgICAgICA1MSxcbiAgICAgICAgOTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDksXG4gICAgICAgIDMwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODEsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDk2LFxuICAgICAgICA4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDksXG4gICAgICAgIDIwNSxcbiAgICAgICAgODUsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzksXG4gICAgICAgIDYzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDksXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNyxcbiAgICAgICAgMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTIxLFxuICAgICAgICA1NCxcbiAgICAgICAgODMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTc5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAzNixcbiAgICAgICAgODUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMixcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjU0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMixcbiAgICAgICAgNTgsXG4gICAgICAgIDM0LFxuICAgICAgICAyMixcbiAgICAgICAgMTEzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDMxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAzLFxuICAgICAgICA4NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTUzLFxuICAgICAgICA1MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTM4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjksXG4gICAgICAgIDkyLFxuICAgICAgICAxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicG9jWk4xSkYwa3dkUU1qaEN3VjlXVnRlTEdTWHBkZ1JrYXJBUWg1MmhxTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcyODg5OTY0MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTQ3RTFFNDY2NUU5QTg2NkQxQzU0MUJDRkE1NzJFNzJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM0NjE5OTE2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkpYQnVBcEZnUWJXT2puTzczNjV4bWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTBhMDI4NDctODY4OS00NTg5LTg5NGQtMzRlNmM0NzliYzllXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5OCxcbiAgICAgIDYzLFxuICAgICAgMzgsXG4gICAgICAxOTksXG4gICAgICAyNDIsXG4gICAgICAyMzgsXG4gICAgICAxODQsXG4gICAgICAyMDMsXG4gICAgICAxOTYsXG4gICAgICAyMSxcbiAgICAgIDEyNSxcbiAgICAgIDE2NCxcbiAgICAgIDE1NSxcbiAgICAgIDc3LFxuICAgICAgMTMxLFxuICAgICAgNDAsXG4gICAgICAxMzMsXG4gICAgICAxMTQsXG4gICAgICA4MCxcbiAgICAgIDQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MyxcbiAgICAgIDExOSxcbiAgICAgIDk5LFxuICAgICAgMTU4LFxuICAgICAgOTcsXG4gICAgICA5NSxcbiAgICAgIDkzLFxuICAgICAgMjUxLFxuICAgICAgMjUsXG4gICAgICA4MCxcbiAgICAgIDI1MCxcbiAgICAgIDM4LFxuICAgICAgMjIzLFxuICAgICAgMTY0LFxuICAgICAgODIsXG4gICAgICAxMjgsXG4gICAgICA4MixcbiAgICAgIDEwNyxcbiAgICAgIDExMCxcbiAgICAgIDYyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVSQjJDQzNSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcyODg5OTY0MDoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdmbPwnZm48J2ZvfCdmoTwnZqGXCIsXG4gICAgXCJsaWRcIjogXCI5ODcwNzUwODgzMDM2OToxNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJRHhxckVDRUlMbWtMc0dHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkFTWUtkdWxYWThzejRkYmE5d09oYmpOZGlFTDFkclk2Q2pEQndpVWdYVzA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRmZsUEMzd2Q4S0RKWVhuZTI5ajBlSHFWSjIrWUw0TFo2VmhkVmdLOW1IbXZTNkp3MXNIMmVEaXhHNzZaQzEwQTNWaldhRC9KeTdrSnY3Ri9KYURiRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaGxnU3J3LzZDWS8zSWwzU0hzWk5IYzl4am5HeENDUUhjeFRQQXQvR1FIQXBzTVo2Vk40Y3ZqMkhibUY2Vy92QlBBTlVKOCtyMVQrd1RKOUZ4U1l6aHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3Mjg4OTk2NDA6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ2MTk5MTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCM2RcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUIzZC5qc29uIjogIntcImtleURhdGFcIjpcIitpVDJMekdQK2M0Z0c0U0JXQWwyYjNUcytHMktnTEp3R3FLcXN3UGFIRWc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjQwMzMzOTUxLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
