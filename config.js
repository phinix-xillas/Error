//GIFTED-MD//
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ngoyaibraah@gmail.com";
global.location = "Bumgoma,Kenya";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://giftedte:SER3spXjIJSOwrPT@cluster0.ni61idp.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://giftedtech:ZMIkfrL3rHsvmfyGboVXKkeyoM0FPl6z@dpg-cpp83jlds78s73e39m10-a.oregon-postgres.render.com/giftedtech";
global.BUTTONS = process.env.BUTTON_MODE || "1";
global.timezone = process.env.TIME_ZONE || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/ibrahimaitech/BLACK-PANTHER-XMD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y";
global.website = process.env.GURL || "https://youtube.com/@ibrahimaitech";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c5b2b527a08a0b21392e0.jpg";
global.devs = "254739937062,254710772666";
global.sudo = process.env.SUDO_NUMBERS || "254739937062,254710772666";
global.sudo = process.env.SUDO || "254739937062,254710772666";
global.owner = process.env.OWNER_NUMBER || "254739937062,254710772666";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 5;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.MENU_VIDEOS || "";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/9e038e5890def3cc7aca7.jpg";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254739937062,254710772666";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "254739937062,254710772666";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUNoRWU3cUtjUHVERWswYTZoUFJrZFNZWlp0dnZ6Q2pKcGRtY0x2VDdVST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicWdveGhKdXU2U3VNaFc5VU55bENkWHQ5NlJQbXBNak5RaGVwYklTdmVWcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0R0tRV1pLRjZ3WUxxUWhkcDNsTnpOTFhzRWUyUXBQR0FpWXZFWjRyL2xnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuc25uQkR2WnZyTnRPMTZ6T2x3QzRZUnFjK1hJVUU2QTFwUUJaNTNDelY4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVKTmZMVEJTakh5cFYzcTVpc0I2VGw5dmk0bE8zdWVlTHBtc2MzUHY4R289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkN2TnYxdjFZRTBSWkRmcXAvOWpZVFIwb2FpN2FiZGRWREZzSCtybHRQenc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU9XMitWUFI0U0Y5SG5DTzFHMFlpN2FWYVF0eTR2dVB3UkU3UjlLZjZraz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM1NEck9CNys2TFc4M1JsaFhQRmU5OUU1aldZQnJQYmJ0SUc0cEZLOHhHWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllYelZDVFI5cHlkckxxamNsUGlJUE5EV08vTUtoSnF5ZkpSdEF5alB5MEx1RDdTNHJ3NmZ5Tk90TXlRMXVLNHU1a1FWQzVqakhBRXNHZ2pRZUtEMmpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc4LCJhZHZTZWNyZXRLZXkiOiIyZlpBeWwwNG1BSkVzZ3VaeVVoZnh3dDBlUm4vdTBQMmdnMW1qRHg2RzVFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc5ODMwMjQxMEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQjA3NzRCNzI3ODc1OTQ1REFEQUIwNzFFMDZGOTBDMCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwMTAwMDEyfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI1TVoyVTFESlJmYTZEX0ZvQUFOb3Z3IiwicGhvbmVJZCI6ImIxMDM0ZDIyLTYxMjItNDE1Ni1iNzkyLThiNmM5NjkyYzQ1OSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwUzZNbWgyQmFkR0JqQlNOZWFMeVlyVTlCc0E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFJOcEdLZXNBRnk3OHV5emNzZzQyNUZOTWo4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Iko4N1RQVlNZIiwibWUiOnsiaWQiOiIyNTQ3OTgzMDI0MTA6NzZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiYc2OzY3NkO+/q1xuXG5cbm7Njs2NzZDvv6tcblxuXG5uzY7Njc2Q77+rXG5cbnXNjs2NzZDvv6tcblxuXG5uzY7Njc2Q77+rXG5cbmHNjs2NzZDvv6tcblxua82OzY3NkO+/q1xuXG5pzY7Njc2Q77+rXG5cbmXNjs2NzZDvv6tcblxubc2OzY3NkO+/q1xuXG5wzY4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tPTTA1TURFSnJKbXJRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Iml1RmFmSG94TUEvOWp6UWZXVkZDU0ovL2oyZFBqREpEc0NLTDFFT0pXVFU9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im1Yc3hjVHlKRjM1TnlNRmhLQmpYQVFqTTRXRS9JK2VRVVRzNUZibmxOMUV2QVluTXNQZFVUSkludDhKeU5kS0FZd1lka00vQUQxL2NONVRoZWJaTEJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJYTEUvQWlqNGJYNDFwc2ZTNEp3b0tjU2xtaFh3Zm1Kem5JSlovblFJdHNQemQ4SzM1NlEwL3lQM1dsdE13ek94RVY0eDJuaEQvK1FjV3JRSElrNUZqdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc5ODMwMjQxMDo3NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZcmhXbng2TVRBUC9ZODBIMWxSUWtpZi80OW5UNHd5UTdBaWk5UkRpVmsxIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMTAwMDA4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdEYSJ9"
module.exports = {
  menu: process.env.MENU_STYLE || "G1", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || "#",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "4.0.0",
  caption: process.env.CAPTION ||" 𝘽𝙇𝘼𝘾𝙆-𝙋𝘼𝙉𝙏𝙃𝙀𝙍-𝙈𝘿",
  author: process.env.STICKER_AUTHOR || "𝘽𝙇𝘼𝘾𝙆-𝙋𝘼𝙉𝙏𝙃𝙀𝙍-𝙈𝘿",
  packname: process.env.STICKER_NAME || "🐯",
  botname: process.env.BOT_NAME || "𝘽𝙇𝘼𝘾𝙆-𝙋𝘼𝙉𝙏𝙃𝙀𝙍-𝙈𝘿",
  ownername: process.env.OWNER_NAME || "𝑰𝒃𝒓𝒂𝒉𝒊𝒎 𝑨𝒅𝒂𝒎𝒔",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-None-huKmtRMtsvhkN6Wsz8ucT3BlbkFJhgVRcKQOTIWujGWPNi6E",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "ADAM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});


