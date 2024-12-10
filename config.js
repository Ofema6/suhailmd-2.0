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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_29_12_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDUxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjIyLFxuICAgICAgICA1NixcbiAgICAgICAgMTAzLFxuICAgICAgICAzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDU0LFxuICAgICAgICA1LFxuICAgICAgICA3NSxcbiAgICAgICAgODksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDAsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjE3LFxuICAgICAgICA2NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDYxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDMsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgOTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNixcbiAgICAgICAgMTk2LFxuICAgICAgICAzMyxcbiAgICAgICAgMzksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjEzLFxuICAgICAgICA4NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDk1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ4LFxuICAgICAgICA3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY5LFxuICAgICAgICA3NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzNixcbiAgICAgICAgODMsXG4gICAgICAgIDM0LFxuICAgICAgICA2LFxuICAgICAgICAzMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDYwLFxuICAgICAgICA2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTIwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQzLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNixcbiAgICAgICAgNTksXG4gICAgICAgIDUzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTksXG4gICAgICAgIDE2MixcbiAgICAgICAgOTYsXG4gICAgICAgIDQsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDgyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODUsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDY0LFxuICAgICAgICA0OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzksXG4gICAgICAgIDIyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzLFxuICAgICAgICA4NixcbiAgICAgICAgMjUwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjksXG4gICAgICAgIDY4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDMyLFxuICAgICAgICAxODEsXG4gICAgICAgIDI3LFxuICAgICAgICA0NixcbiAgICAgICAgNTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDU1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3NCxcbiAgICAgICAgODQsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExLFxuICAgICAgICA4NixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTEyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlcxY2k2Z21OTUl2cjJsTTlCMlVpYStBNTdYa2o5TTc4MGJ5OEtvOXJtYzA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1NzE0NTk2NDEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3OEZENzkxMTg2QkQ5RTI2NTY4RTA4MDAwNTE3RTNEN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzM4NTE3NjBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU3MTQ1OTY0MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkU1MUIzMTA1MzY1RDU2MEU2M0ZCMDI4MkIyMkQ1RDBBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzg1MTc2MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTcxNDU5NjQxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQzQ5QTU5MzdFMjZBMzMwRTMyQ0Y3NzJGOUY2NTdBMjBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMzODUxNzYzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1NzE0NTk2NDEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4NEQ4QzlENzVEQkUwRDM3MzFFQUVENzNFMzU5RjkxOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzM4NTE3NjNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYmkxbEZ5cUtUZ1dPbFJ6VWlHWktWUVwiLFxuICBcInBob25lSWRcIjogXCIzZWE2NzU4OS0zNjA3LTRlMmYtOGNlMy01NTU2ZDlhYzY5YTZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMwLFxuICAgICAgMjA2LFxuICAgICAgMTc0LFxuICAgICAgMjQ5LFxuICAgICAgMjEzLFxuICAgICAgMjI1LFxuICAgICAgMzcsXG4gICAgICAxMTEsXG4gICAgICAyNyxcbiAgICAgIDE3NyxcbiAgICAgIDM0LFxuICAgICAgMTQ2LFxuICAgICAgMjIwLFxuICAgICAgMTUsXG4gICAgICAxMjIsXG4gICAgICAyMTIsXG4gICAgICAxNjUsXG4gICAgICA1NyxcbiAgICAgIDE2MixcbiAgICAgIDI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NCxcbiAgICAgIDU4LFxuICAgICAgNTUsXG4gICAgICAxMzYsXG4gICAgICAxMjYsXG4gICAgICA3NixcbiAgICAgIDIyMCxcbiAgICAgIDcwLFxuICAgICAgMTQyLFxuICAgICAgMTg2LFxuICAgICAgMTc2LFxuICAgICAgMzcsXG4gICAgICAwLFxuICAgICAgMjEzLFxuICAgICAgNDksXG4gICAgICA0NSxcbiAgICAgIDExMixcbiAgICAgIDEwOCxcbiAgICAgIDE3OCxcbiAgICAgIDExN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2TjRRNzRIN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NzE0NTk2NDEwOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwODUyNTU0NDQzMTgwMjoxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkJPVFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tySXQ3SUhFT3IwNGJvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQ1BVQjZCRkhXenVQcW44MzhWS0VxMmNqTmUxdGFzT2dFQTZSMmxwTnJCND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJzYXZKOHB5MWxrY2F2cHVCVURJVm50bEhSeHgyRitQdDJ3bW12SEsvbTUyTmpzNXBYODg3b3VsOGI1eko3dk9uZXNWb242TTVreE9kNjFMbWE5cnBEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJEWjRNVzVHbGJxWFhueU1RWDE2V3FoK083RFVtYUNjMG1kTFkxVnZ5eGY4YXp1SG96WHpmUVlVTk5BdE1BU1FUYXRNMnBZSXF3SUorTTN5UW9tNkRqdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU3MTQ1OTY0MTA6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDMwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM4NTE3NTgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCVThcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJVOC5qc29uIjogIntcImtleURhdGFcIjpcImU0bFhDeGZXaWhuN0pkVnhtbG92V1ViRHZxd2Rxc0NyMmw0WmdNUkJWdFk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk4NDgxNjE3MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMzODUxNzYwODIzXCJ9Igp9"  // PUT your SESSION_ID 


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
