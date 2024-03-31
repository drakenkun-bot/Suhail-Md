const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || "mongodb://atlas-sql-65cce635d9aacc34f06d68ef-inyze.a.query.mongodb.net/myVirtualDatabase?ssl=true&authSource=admin"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || "mongodb://atlas-sql-65cce635d9aacc34f06d68ef-inyze.a.query.mongodb.net/myVirtualDatabase?ssl=true&authSource=admin"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_06_26_03_31_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiMFBmUlNLTk0vMWJ1OXVRemJjQ0xZeWRPWldYNzhZa3hHZTFCV29SVTRtST1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIklEU2toMTc0WUhld250Sk43N1lNdmJoTk5waklpRUJRRGJ0UmNLSUVFRzg9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiTUIvMjhBZk05UzZvK3FjelJDa1IycmVmK2lBQ3E1aGxCZEV2Zmx4N3RXdz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlI2N1pZZ0ZRNmRpdWNNSXlMVk9zcm9xYXMyV3I3T1pDRHNvUnlEd1M2U2c9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiTUZ0eTEyamppalpQdmphL25ubW12SFhvR3NUMGZyMFdqZEEyV2I4bTVIST1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIktuYkdoMXY2QTBBUmZnZlJVY0hWWldyZkxlYTNRaGhDRzJMd0E3eHROd2M9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJxTXpldEwwUUZIVmk2M0ZMOHVkN1JZdFN1K1kxQ1BwSTZOMnlwNFNMdkU0PVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiOWJEbW5BVnJYUlJ6VStSLzdPd2JNNUF6VEdOWEh2VU40N3pQaU1xempUVT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJRRkJyOXRoRDRSMklzUitGRW1OTFI0dTQ2MEpBUFlXeFhHd2FWZjFpRDUyM3luREo0ZWdKMStqRHB1cnVkRDJhM0FETU94Mkw5T2g5dGNRU2RqS0NDdz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTYwLFwiYWR2U2VjcmV0S2V5XCI6XCJUdU5JdWJPeGVYV3o3WVUxTFpFU29tdFVCTjhCbENnMHNOSUlONE13cEowPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W10sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwiMHkyYzVBRFZSOXFZaDNKUHNVZTdsUVwiLFwicGhvbmVJZFwiOlwiYjZmM2M0ZDktODFjNy00MmVjLTkxMWMtZGZiYTE3YWZlMWE5XCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCMFlnME9sWTJnaERRcWhFNGJDSkZtdDY4QVU9XCJ9LFwicmVnaXN0ZXJlZFwiOmZhbHNlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlZqOXZkVmJtTFE3Y1lTZ29LWklxWFM1SWY0UT1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDSi9GNEpJREVQYURwTEFHR0JFZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcInpsQmp4Um1DZ2NOQTVVRVQ0V2dEVUtibUpCVTlXWXB6YWQvM08zREJSV0k9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJjN1BTRXhMeTE0d2pwMS9JUVNJVmxiOEtRSVpmajE3OTZpVHI1SThNSnZadFcyOFl0Rm1Hc08xNzFPcU94MEh2ZmFVcHhobWpJVk56c0pObHl6bGJBQT09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcInRZWisyOTlwcXlXRXlxUWhvSklXaC9qTnk1Tm9Db09NMTd5R1NWWStaa0Rwb1Y1dENsZ3QwVUp4cWtRVFNHSWdYUUxsaGxMS3FNY3Zlb2pZRXRCREJBPT1cIn0sXCJtZVwiOntcImlkXCI6XCIyMzQ3MDY1NjI4MjIyOjQzQHMud2hhdHNhcHAubmV0XCIsXCJsaWRcIjpcIjEzNDAxMTk3MjI0NzU4Mjo0M0BsaWRcIixcIm5hbWVcIjpcIvCdkqvwnZK28J2SvvCdk4PwnZSo8J2UsvCdlKtcIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCIyMzQ3MDY1NjI4MjIyOjQzQHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQmM1UVk4VVpnb0hEUU9WQkUrRm9BMUNtNWlRVlBWbUtjMm5mOXp0d3dVVmlcIn19XSxcInBsYXRmb3JtXCI6XCJhbmRyb2lkXCIsXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjoxNzExODY2MzYyLFwibXlBcHBTdGF0ZUtleUlkXCI6XCJBQUFBQUx4MFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUx4Ky5qc29uIjogIntcImtleURhdGFcIjpcImhDT1VVdGpPQW5iWm9lOEpnZXdQdEx0aWZnQ1BXV2oza1FVNXZRcGJ0S0E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODQ0NjM2ODMxLFwiY3VycmVudEluZGV4XCI6MTUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiw4LDExLDE1XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMeDAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJPejdlTEtJbGltVEZLU05VMXFVT1JFb0V0UkJmZ0Z0bEhEeXJoS0JOMUR3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg0NDYzNjgzMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTHgxLmpzb24iOiAie1wia2V5RGF0YVwiOlwiS1lLMEowMU9NZVF2SjZXMi9Ya1JaNllyVWw3cEo3NWNQM0tVaTZEejl5WT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NDQ2MzY4MzEsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTHgyLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUGxuVnppVWtiWld0VG1lWEw4ME90U0g4M1ZxUHZQUDhubHBhRWErZC91UT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NDQ2MzY4MzEsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcxMDQwMzcyMDEwN1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUx4My5qc29uIjogIntcImtleURhdGFcIjpcIllQQzFGUWtkY204d0xacVBNQnVzQWYrcXAvVFNrdXJkZzZKUW5ISVI2dHM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODQ0NjM2ODMxLFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTA1MDc3ODg0NjhcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMeDQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIzZjVYTFVUWUdFVlFOaXVralc1cktSWWVudWFobGQyelFJL280NGJ5dFdzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg0NDYzNjgzMSxcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiw3XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMeDUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJsRlJZWVV0V3NFL0ZkRFlqaHhRSGR3WUpZWGJ0N2M3ZjRzdEdaRnRsdkF3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg0NDYzNjgzMSxcImN1cnJlbnRJbmRleFwiOjgsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiw4XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMeDYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNdS85bFEyS2JMYThlZlN5eTc2TjVja0VWY055OVRUL0IvT3d3MW0xVnJVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg0NDYzNjgzMSxcImN1cnJlbnRJbmRleFwiOjEwLFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsOCwxMF19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTHg3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiTStydEdjUWJTT05NVDlMSnNUMWpHRnJqWm9OUDE0MmwzWXNuMEJxbC9lWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NDQ2MzY4MzEsXCJjdXJyZW50SW5kZXhcIjoxMSxcImRldmljZUluZGV4ZXNcIjpbMCwyLDgsMTFdfSxcInRpbWVzdGFtcFwiOlwiMTcxMTIwNTM5NzAxMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUx4OC5qc29uIjogIntcImtleURhdGFcIjpcImlUdFNQbUFwekcrUjlibWVxYWJhOFIxMm1McXIrUW9YWW4wYTBZeC9ZMzg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODQ0NjM2ODMxLFwiY3VycmVudEluZGV4XCI6MTIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiw4LDExXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTE1NDMyMTI0ODRcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMeDkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJDRHRrU3RkaEo0N1B0a3hWelU4STFPUlNUOXVweE83aTNqN25kTGZXMTlFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg0NDYzNjgzMSxcImN1cnJlbnRJbmRleFwiOjEzLFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsOCwxMV19LFwidGltZXN0YW1wXCI6XCIxNzExNTQ0MTQyMjI4XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTHhfXy5qc29uIjogIntcImtleURhdGFcIjpcInlJb3F0SjdzYk5OakUraE5MRE9wdVNXbG5Lb1ZMYjU2SG5EMlBHVDBheFU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODQ0NjM2ODMxLFwiY3VycmVudEluZGV4XCI6MTUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiw4LDExXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTE1ODMyODYyNTRcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMeUEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJIbXZhMUlnbXhLdjBZbDVVVHA0NmpuNWo0d25RNnB5WGhLK3JsTWs1RlRrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg0NDYzNjgzMSxcImN1cnJlbnRJbmRleFwiOjE2LFwiZGV2aWNlSW5kZXhlc1wiOlsxNiwwLDIsOF19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























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
 
