//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://stars_uvae_user:52slrwxxp9pz26pP47gcGkpwQSnh2m0v@dpg-cqfq8dt6l47c73bjhli0-a.oregon-postgres.render.com/stars_uvae";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hamoudi223/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://chat.whatsapp.com/HyXgf4N8XuWDkjrxr0Z282";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/9295602827383470e4048.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "22395064496";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/9295602827383470e4048.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUpQWVBCa01vd2RqZWRZVjJCV09pNTdtb0RIendyblgvWm92b3hkWTMxWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVkRaZVRxL3ZtKzhMVkNsaGttTnM2NkVWaUdTaFUraG1oNHAycWthQkVHZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2T3h3a1NXVDNKc1VidTNKcXBvSzMyd0FGMi9kZERIWHl2emJHbk5udTJVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5RXc5S2R4NDQrTGNWdUd5TUtJaFI0R1o2M0R0ZGVHdlFUdzd5Z29UT3hnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBKeUtDdUtQYkhiVmpEVHVFSVM1WXArcEhMMGJNVnAwWVpFZVVKWXFpbk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imk4cVh6T2J6RTFNRm9XQlNzZEVhRlNGa0toUm5YdkIwRTF6NFpXaC94bUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0VUclZOUnQ3Zmt1bTFyR0pOaUhZaGVUaWJhL1ZKWDF5SVJiN0dZSnZGQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYks2S09ZeVFJTHdzaXhsNFBQazNlWDNtYXdrZ0R4NHJRaDZ1ZWVZbW9rZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJ1OVI2WFlkQTJQaG1wWXh3ZExPbGRVRXMwRHgvZjNCRmNETUZTRmx0TTN6NHpvb2g0ZlI4T1BJbXV5cE82TDBHak1zWU5paFQ5Y054L01SWGU0NkJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMzLCJhZHZTZWNyZXRLZXkiOiIycEs1bDRYODhldlRmektzbUV5NzNPVlg2Z2tlc1JaNTkxSUVRZmdUMmhJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJxbnQ1YllZTFNkR3VPTUlfSkx4WjNRIiwicGhvbmVJZCI6IjdmMTQ4NTc5LTMwNmQtNDlhZC1hZTgwLTQzMDU4NTVkMTA4MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTR2lqQXV3V3pYRzJ5NlJFRWZXQk1sSytwaFU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTFZTUHNnYUYxMWRYVWZOSWYwOHdOVnZhT0cwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlA0NEhRNk41IiwibWUiOnsiaWQiOiIyMjU0Nzg2OTc3MTo0NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZmd8J2ZnvCdmaAt8J2ZoPCdmZ4g4ba74bS84bS44bSw4bS14bac4bS3In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLL3h4SWdMRUlidHdyVUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJoaVQ5NEQ3TTdCMnpFTFg1M2FXQS9oNkxROWVQamNtbUJZWDZLK0dNS1ZFPSIsImFjY291bnRTaWduYXR1cmUiOiJZR1VwYTBnQ2IxeVU5b3NGcnJDQUd4ckcrcUd0VTZLOGZQQkJYZlphbmFTN21iaUE0dG01WmI0NDNVZ3hmZVpvQks2aXBQVFdaT2tPRXNPaEplQzNEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVHlFdEU2Mm5rSXR0S3kwdkhQditPeU1MQ0NQN0EvTW5TTG4yd2orRHJ2TDZTM3Awekg0MmdRc0NCU21MSmQ3ME5kWEtIc0htTlB1QytnRitHYkFrQnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjU0Nzg2OTc3MTo0NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZWWsvZUErek93ZHN4QzErZDJsZ1A0ZWkwUFhqNDNKcGdXRitpdmhqQ2xSIn19XSwicGxhdGZvcm0iOiJzbWJpIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyODU3MTA4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU85TCJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "𝑏𝑤𝑎𝑏𝑦𝑚𝑜𝑢𝑑𝑦♨︎",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "𝑏𝑤𝑎𝑏𝑦𝑚𝑜𝑢𝑑𝑦♨︎",
  errorChat: process.env.ERROR_CHAT || "22395064497",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
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
